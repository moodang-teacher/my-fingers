document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        // 스크롤이 500px 이상일 때 버튼을 나타나게 설정 (기존 300px에서 500px로 변경)
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = 1; // 버튼을 보이게
            scrollToTopBtn.style.pointerEvents = "auto"; // 버튼을 클릭할 수 있게
        } else {
            scrollToTopBtn.style.opacity = 0; // 버튼을 숨기기
            scrollToTopBtn.style.pointerEvents = "none"; // 버튼을 클릭할 수 없게
        }
    });

    scrollToTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드럽게 스크롤
        });
    });
});
