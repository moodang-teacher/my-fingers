document.addEventListener("DOMContentLoaded", () => {
    const $window = $(window);
    const $header = $("header.heaven");

    let lastScrollTop = 0;

    function toggleHeaderVisibility(isVisible) {
        if (isVisible) {
            $header.removeClass("hide");
        } else {
            $header.addClass("hide");
        }
    }

    // lastscroll 변수활용방식으로 변경
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function () {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function () {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
    }

    // 스크롤 이벤트가 일어나면
    $window.on(
        "scroll",
        throttle(() => {
            const scTop = $window.scrollTop(); // window의 스크롤 위치 가져오기

            // 스크롤 방향에 따라 헤더 표시/숨김
            if (scTop > lastScrollTop) {
                toggleHeaderVisibility(false); // 스크롤 아래로 -> 헤더 숨김
            } else {
                toggleHeaderVisibility(true); // 스크롤 위로 -> 헤더 표시
            }

            // 마지막 스크롤 위치 갱신
            lastScrollTop = scTop;
        }, 200)
    );

    // e: scroll header

    const webSwiper = new Swiper(".heaven-only .web-swiper", {
        direction: "horizontal",
        loop: true,

        on: {
            slideChange: function () {
                const liEl = document.querySelectorAll(".heaven-only .web .info-list li");
                liEl.forEach((item) => {
                    item.classList.remove("active");
                    setTimeout(() => {
                        liEl[this.realIndex].classList.add("active");
                    }, 350);
                });
            },
        },

        pagination: {
            el: ".swiper-pagination",
        },
    });

    const mainSwiper = new Swiper("#banner.heaven .main-swiper", {
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,
        },
        spaceBetween: 20,

        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });

    const subSwiper = new Swiper("#banner.heaven .sub-swiper", {
        direction: "horizontal",
        loop: true,
        spaceBetween: 50,

        navigation: {
            nextEl: ".sub-swiper-wrapper .btn-next",
            prevEl: ".sub-swiper-wrapper .btn-prev",
        },
    });

    const $mainImg = $("#banner.heaven .main-swiper .swiper-wrapper .swiper-slide figure img");
    const $btnClose = $("#banner.heaven .sub-swiper-wrapper .btn-close");
    const $subSwiper = $("#banner.heaven .sub-swiper-wrapper");

    $btnClose.on("click", () => {
        $subSwiper.fadeOut();
    });

    $mainImg.on("click", function () {
        const mainImgIdx = $mainImg.index(this);

        goToSlide(mainImgIdx);
    });

    function goToSlide(index) {
        openPopup();
        subSwiper.slideToLoop(index, 500);
    }

    function openPopup() {
        $subSwiper.fadeIn();
        console.log($mainImg);
    }

    // e: banner swiper


    const $btnOnpro = $(".heaven-only .buttons.onprogress");
    const $btnProcess = $(".heaven-only .btn-process");

    $btnProcess.on("click", function () {
        const $processSrc = $(this).data("process");

        console.log($processSrc);
        const $listpopup = $("#listpopup.heaven");
        const $listpopupImg = $("#listpopup.heaven .inner figure");
        const $listpopupClose = $("#listpopup.heaven .btn-close");

        $listpopup.fadeIn();
        $listpopup.css("display", "flex");
        $listpopupImg.html(`<img src="${$processSrc}" />`);
        $listpopupImg.find("img").show();

        $listpopupClose.on("click", () => {
            $listpopup.fadeOut();
        });
    });

     $btnOnpro.find(".link-website").on("click", function (e) {
       e.preventDefault();
    });
    $btnOnpro.find(".btn-process").off("click");

    // e: listpopup

    const otherSwiper = new Swiper("#other.heaven .other-swiper", {
        direction: "horizontal",
        loop: true,
        autoplay: { delay: 0 },
        speed: 3000,

        slidesPerView: 3.5,
        spaceBetween: 10,
    });

    // e: other swiper

    const hash = location.hash;
    console.log(hash);

    if (hash) {
        webSwiper.slideToLoop(4, 500);
    }
});
