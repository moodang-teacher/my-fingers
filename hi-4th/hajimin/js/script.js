document.addEventListener("DOMContentLoaded", function () {
    // fullPage.js 초기화 (요소 존재 여부 확인)
    if (document.getElementById("fullpage")) {
        $("#fullpage").fullpage({
            autoScrolling: true,
            navigation: true,
            anchors: ["about1", "about2", "about3"],
            showActiveTooltip: true,
            scrollingSpeed: 1000,
        });
    }

    const skillItems = document.querySelectorAll(".skills-con");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    let activeItem = null;

    skillItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            if (activeItem === item) {
                modal.style.opacity = "0";
                setTimeout(() => (modal.style.display = "none"), 300);
                activeItem = null;
                return;
            }

            const text = item.getAttribute("data-modal-content");
            modalText.innerHTML = text || "설명이 없습니다.";

            // 모달 위치 조정 (더 부드럽게)
            const rect = item.getBoundingClientRect();
            modal.style.left = `${rect.left + window.scrollX}px`;
            modal.style.top = `${rect.top + window.scrollY - 100}px`;
            modal.style.transform = "translate(-50%, -50%)";
            modal.style.opacity = "1";
            modal.style.display = "block";

            activeItem = item;
            event.stopPropagation();
        });
    });

    document.addEventListener("click", function () {
        if (modal.style.display === "block") {
            modal.style.opacity = "0";
            setTimeout(() => (modal.style.display = "none"), 300);
        }
        activeItem = null;
    });

    modal.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // 스킬 아이콘 애니메이션
    skillItems.forEach((item) => {
        const delay = Math.random() * 0.5;
        const duration = 0.8 + Math.random() * 0.4;
        item.style.animation = `bounce ${duration}s infinite ease-in-out ${delay}s`;
        item.style.setProperty("--shadow-duration", `${duration}s`);
    });

    // 마우스 움직일 때 이미지 회전 (requestAnimationFrame 활용)
    const img = document.querySelector(".main-con figure img");
    let mouseX = 0,
        mouseY = 0,
        isAnimating = false;

    document.addEventListener("mousemove", function (e) {
        mouseX = (window.innerWidth / 2 - e.clientX) / 25;
        mouseY = (window.innerHeight / 2 - e.clientY) / 25;
        if (!isAnimating) {
            requestAnimationFrame(animateImage);
            isAnimating = true;
        }
    });

    function animateImage() {
        img.style.transform = `rotateX(${mouseY}deg) rotateY(${-mouseX}deg)`;
        isAnimating = false;
    }
});
