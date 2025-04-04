function explodeButton() {
    let button = document.querySelector(".exploding-button");
    button.classList.add("explode");

    setTimeout(() => {
        window.location.href = "about.html"; // 이동할 페이지 URL 설정
    }, 600); // 애니메이션 지속 시간과 맞춤
}
