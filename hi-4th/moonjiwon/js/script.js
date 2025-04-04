document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // Lenis 초기화
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
    });

    // Lenis와 GSAP ScrollTrigger 연동
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP 타임라인과 Lenis RAF 연동
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // GSAP 기본 ticker 비활성화
    gsap.ticker.lagSmoothing(0);

    // GNB 스크롤 기능
    const gnbLinks = document.querySelectorAll(".gnb a");
    gnbLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.getAttribute("href");
            const targetSection = document.querySelector(target);

            // 각 섹션의 끝 지점으로 스크롤
            gsap.to(window, {
                duration: 0,
                scrollTo: {
                    y: targetSection,
                    offsetY: -window.innerHeight, // 화면 높이만큼 위로 올려서 섹션의 끝 지점으로 이동
                },
            });
        });
    });

    // TOP 버튼
    // 수정
    document.querySelector(".btn-top").addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: 0,
                offsetY: 0,
            },
        });
    });
    const btnTop = document.querySelector(".btn-top");
    gsap.from(btnTop, {
        autoAlpha: 0,
        scrollTrigger: {
            trigger: ".contact",
            // markers: true,
            start: "top 70%",
            toggleActions: "play none play reverse",
        },
    });

    const secTitle = document.querySelector(".sec-title");
    const circle = document.querySelector(".circle");
    const titles = ["HOME", "About", "Skills", "Portfolio", "Contact"];

    // scroll-down 옆에 화살표 움직이도록
    gsap.to(".scroll-down b", {
        y: -10,
        duration: 0.4,
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
        // repeatDelay: 1.5,
    });

    gsap.to(".scroll-down", {
        y: 100,
        autoAlpha: 0,

        scrollTrigger: {
            trigger: ".home-intro",
            // // markers: true,
            start: "bottom 0",
            toggleActions: "play none reverse none",
        },
    });

    // 선에 대한 설정
    // gsap.from('대상', {옵션})
    gsap.from(".line1", {
        clipPath: "inset(50% 0)",
    });
    gsap.from(".line2", {
        clipPath: "inset(50% 0)",
        delay: 0.2,
    });

    gsap.to(".home-intro h1", {
        y: 150,

        scrollTrigger: {
            trigger: circle,
            // markers: true,
            start: "top 70%",
            scrub: 1,
        },
    });

    gsap.from(secTitle, { autoAlpha: 0, y: 50 });

    // 섹션 고정 및 타이틀 변경
    gsap.to(".home-intro", {
        scrollTrigger: {
            trigger: ".home-intro",
            start: "top 0%",
            end: "bottom 0%",
            scrub: 1,
            // markers: true,
            pin: true,
        },
        onEnter: () => {
            gsap.to(secTitle, {
                text: titles[0],
                duration: 0.3,
                ease: "none",
            });
        },
        onEnterBack: () => {
            gsap.to(secTitle, {
                text: titles[0],
                duration: 0.3,
                ease: "none",
            });
        },
    });

    gsap.to(".about", {
        scrollTrigger: {
            trigger: ".about",
            start: "top 0%",
            end: "bottom+=300% 0%",
            scrub: 1,
            // markers: true,
            pin: true,
            onEnter: () => {
                gsap.to(secTitle, {
                    text: titles[1],
                    duration: 0.3,
                    ease: "none",
                });
            },
            onEnterBack: () => {
                gsap.to(secTitle, {
                    text: titles[1],
                    duration: 0.3,
                    ease: "none",
                });
            },
        },
    });

    gsap.to(".skills", {
        scrollTrigger: {
            trigger: ".skills",
            start: "top 0%",
            end: "bottom+=300% 0%",
            scrub: 1,
            // markers: true,
            pin: true,
            onEnter: () => {
                gsap.to(secTitle, {
                    text: titles[2],
                    duration: 0.3,
                    ease: "none",
                });

                gsap.to(".skills img", {
                    y: 390,
                    duration: Math.random() * 0.5 + 0.5, // 0.5~1초 사이 랜덤
                    stagger: { amount: 1, from: "random" },
                    ease: "bounce.out",
                    opacity: 1,
                });
            },
            onEnterBack: () => {
                gsap.to(secTitle, {
                    text: titles[2],
                    duration: 0.3,
                    ease: "none",
                });
            },
        },
    });

    // skillsImg.play();

    gsap.to(".project-text", {
        scrollTrigger: {
            trigger: ".project-text",
            start: "top 0%",
            end: "bottom+=300% 0%",
            scrub: 1,
            // markers: true,
            pin: true,
            onEnter: () => {
                gsap.to(secTitle, {
                    text: titles[3],
                    duration: 0.3,
                    ease: "none",
                });
            },
            onEnterBack: () => {
                gsap.to(secTitle, {
                    text: titles[3],
                    duration: 0.3,
                    ease: "none",
                });
            },
        },
    });
    // 회전 슬라이더 초기화
    const stepsSlider = new RotatingSlider(".steps");

    gsap.to(".graphic-text", {
        scrollTrigger: {
            trigger: ".graphic-text",
            start: "top 0%",
            end: "bottom 0%",
            scrub: 1,
            // markers: true,
            pin: true,
            onEnter: () => {
                gsap.to(secTitle, {
                    text: titles[3],
                    duration: 0.3,
                    ease: "none",
                });
            },
            onEnterBack: () => {
                gsap.to(secTitle, {
                    text: titles[3],
                    duration: 0.3,
                    ease: "none",
                });
            },
        },
    });

    const rotateSlider = new RotatingSlider(".rotate-slider");

    gsap.to(".contact", {
        scrollTrigger: {
            trigger: ".contact",
            start: "top 0%",
            end: "bottom+=300% 0%",
            scrub: 1,
            // markers: true,
            pin: true,
            onEnter: () => {
                gsap.to(secTitle, {
                    text: titles[4],
                    duration: 0.3,
                    ease: "none",
                });
            },
            onEnterBack: () => {
                gsap.to(secTitle, {
                    text: titles[4],
                    duration: 0.3,
                    ease: "none",
                });
            },
        },
    });
    // 스크롤하면 글자색이 채워지도록
    // 글자쪼개기
    const text = new SplitType(".about p", { types: "chars" });

    gsap.from(text.chars, {
        opacity: 0.2,
        stagger: 0.2,

        scrollTrigger: {
            trigger: ".about p",
            // // markers: true,
            start: "top 30%",
            end: "+=300%",
            scrub: 1,
        },
    });

    // 색 채워지는
    // 공통정의
    const portText = gsap.utils.toArray(".text");
    portText.forEach((text) => {
        const text1 = new SplitType(text, { types: "chars" });

        gsap.from(text1.chars, {
            opacity: 0.2,
            stagger: 0.2,

            scrollTrigger: {
                trigger: text,
                // // markers: true,
                start: "top 30%",
                // end: "+=300%",
                scrub: 1,
            },
        });
    });

    // 추가 -> agency 예제 참고
    //공통 정의
    // const portText = gsap.utils.toArray(".text");
    // portText.forEach((text) => {
    //     const text1 = new SplitType(text, { types: "chars" });

    //     gsap.from(text1.chars, {
    //         y: -50,
    //         autoAlpha: 0,
    //         stagger: 0.1,

    //         // 스크롤과 연동
    //         scrollTrigger: {
    //             trigger: text,
    //             // markers: true,
    //             start: "top 50%", // trigger/viewport(scroller) -> viewport의 50% 지나면 나옴
    //             end: "bottom 0%",
    //         },
    //     });
    // });
    // 원 크기를 조정 타임라인 설정
    // about으로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 4,
        y: 1400,
        bottom: 300,
    });

    // skills로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".skills",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 1,
        y: -100,
        bottom: 0,
    });

    // project-text로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".project-text",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 4,
        y: 1400,
        bottom: 100,
    });

    // steps로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".steps",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 5,
        y: 1700,
        bottom: 0,
    });

    // graphic-text로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".graphic-text",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 4,
        y: 1400,
        bottom: 100,
    });

    // rotate-slider로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".rotate-slider",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 5,
        y: 1700,
        bottom: 0,
    });

    // contact으로 갈 때
    gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            start: "top 90%",
            scrub: 0.5,
        },
    }).to(circle, {
        scale: 1,
        y: -100,
        bottom: 0,
    });
});
