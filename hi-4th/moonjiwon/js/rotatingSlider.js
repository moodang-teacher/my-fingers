class RotatingSlider {
    constructor(sectionSelector) {
        this.section = document.querySelector(sectionSelector);
        this.cards = this.section.querySelectorAll('.card');
        this.totalCards = this.cards.length;
        this.stickyHeight = window.innerHeight * (this.totalCards - 1);

        this.initScrollTrigger();
        this.positionCards(0);
    }

    initScrollTrigger() {
        ScrollTrigger.create({
            trigger: this.section,
            start: 'top 0%',
            end: `+=${this.stickyHeight}px`,
            pin: true,
            // pinSpacing: true,
            // markers: true,
            onUpdate: (self) => {
                this.positionCards(self.progress);
            },
        });
    }

    positionCards(progress = 0) {
        const radius = Math.min(window.innerWidth, window.innerHeight) * 2.5;
        const totalRotation = Math.PI * 0.5;
        const adjustedProgress = progress * (this.totalCards - 1);

        this.cards.forEach((card, i) => {
            const cardProgress = i / (this.totalCards - 1) + adjustedProgress / (this.totalCards - 1);
            const angle = Math.PI / 3 - totalRotation / 2 + totalRotation * cardProgress;

            gsap.set(card, {
                x: Math.cos(angle) * radius,
                y: -Math.sin(angle) * radius + radius,
                rotation: -(angle - Math.PI / 2) * (180 / Math.PI),
                transformOrigin: 'center center',
            });
        });
    }
}
