document.addEventListener('DOMContentLoaded', () => {
    // GSAP 플러그인 등록
    gsap.registerPlugin(ScrollTrigger, Flip);

    // Animation configs
    const ANIMATION_CONFIG = {
        duration: 0.6,
        ease: 'power2.out',
    };

    // DOM elements
    const wheel = document.querySelector('.wheel');
    const cards = gsap.utils.toArray('.wheel__card');
    const detailInfo = document.querySelector('.detail-info');
    const detailImage = document.querySelector('.detail-image');
    const detailTitle = document.querySelector('.detail-title');
    const detailText = document.querySelector('.detail-text');
    const detailBtns = document.querySelector('.detail-btns');

    // State
    let lastClickedCard;

    function setup() {
        const radius = wheel.offsetWidth / 2;
        const center = wheel.offsetWidth / 2;
        const total = cards.length;
        const slice = (2 * Math.PI) / total;

        cards.forEach((item, i) => {
            const angle = i * slice;
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);

            gsap.set(item, {
                rotation: angle + '_rad',
                xPercent: -50,
                yPercent: -50,
                x,
                y,
            });
        });
    }

    setup();
    window.addEventListener('resize', setup);

    // 휠 회전 애니메이션
    gsap.to('.wheel', {
        rotate: () => -360,
        ease: 'none',
        duration: cards.length,
        scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 1,
            snap: 1 / cards.length,
            invalidateOnRefresh: true,
        },
    });

    // 이벤트 리스너
    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (lastClickedCard) {
                putBack(e);
            } else {
                flip(e);
            }
        });
    });

    detailInfo.addEventListener('click', (e) => {
        // e.preventDefault();
        e.stopPropagation();
        if (!lastClickedCard) return;
        putBack(e);
        // detailInfo.style.zIndex = 1000;
    });

    function putBack(e) {
        const image = detailImage.querySelector('img');
        if (!image) return;

        detailInfo.style.zIndex = 0;

        const state = Flip.getState(image);

        // 텍스트와 버튼 페이드아웃
        gsap.to([detailTitle, detailText, detailBtns], {
            ...ANIMATION_CONFIG,
            duration: 0.3,
            opacity: 0,
            y: 10,
            onComplete: () => {
                lastClickedCard.appendChild(image);
                detailTitle.textContent = '';
                detailText.textContent = '';
                detailBtns.innerHTML = '';

                Flip.from(state, {
                    ...ANIMATION_CONFIG,
                    absolute: true,
                    onComplete: () => {
                        lastClickedCard = null;
                    },
                });
            },
        });
    }

    function flip(e) {
        const card = e.currentTarget;
        const image = card.querySelector('img');
        if (!image) return;

        const state = Flip.getState(image);
        detailImage.appendChild(image);

        detailInfo.style.zIndex = 1000;

        // 버튼 영역 초기화
        detailBtns.innerHTML = '';

        // 데이터 가져오기
        const title = image.dataset.title;
        const description = image.alt;
        const link1 = image.dataset.link1;
        const link2 = image.dataset.link2;

        // 링크가 있는 경우에만 버튼 생성
        if (link1 || link2) {
            if (link1) {
                const btn1 = document.createElement('a');
                btn1.href = link1;
                btn1.target = '_blank';
                btn1.textContent = 'PROCESS'; // View Site 대신 PROCESS로 변경
                detailBtns.appendChild(btn1);
            }
            if (link2) {
                const btn2 = document.createElement('a');
                btn2.href = link2;
                btn2.target = '_blank';
                btn2.textContent = 'DESIGN'; // View Site 대신 PROCESS로 변경
                detailBtns.appendChild(btn2);
            }
        }

        Flip.from(state, {
            ...ANIMATION_CONFIG,
            absolute: true,
            onComplete: () => {
                // 제목과 설명 표시
                detailTitle.textContent = title || '';
                detailText.textContent = description || '';

                // 텍스트와 버튼 페이드인
                gsap.fromTo(
                    [detailTitle, detailText, detailBtns],
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        ...ANIMATION_CONFIG,
                        duration: 0.9,
                        opacity: 1,
                        y: 0,
                    }
                );
            },
        });

        lastClickedCard = card;
    }
});
