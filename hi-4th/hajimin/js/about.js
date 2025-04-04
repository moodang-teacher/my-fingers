document.addEventListener("DOMContentLoaded", function () {
    $("#fullpage").fullpage({
        autoScrolling: true,
        navigation: true,
        anchors: ["about1", "about2", "about3"], // 각 섹션에 대한 앵커

        showActiveTooltip: true,
        scrollingSpeed: 1000,
    });

    const skillItems = document.querySelectorAll(".skills-con");
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    let activeItem = null; // 현재 활성화된 아이콘 저장

    skillItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            // 같은 아이콘을 다시 클릭하면 모달 닫기
            if (activeItem === item) {
                modal.style.display = "none";
                activeItem = null;
                return;
            }

            const text = item.getAttribute("data-modal-content");
            modalText.innerHTML = text || "설명이 없습니다.";

            // 모달 위치 조정 (클릭한 요소 위)
            const rect = item.getBoundingClientRect();
            modal.style.left = `${rect.left + window.scrollX}px`;
            modal.style.top = `${rect.top + window.scrollY - 100}px`;

            modal.style.display = "block";
            activeItem = item; // 현재 클릭한 아이콘 저장
            event.stopPropagation(); // 클릭 이벤트 전파 방지
        });
    });

    // 화면 아무 곳이나 클릭하면 모달 닫기
    document.addEventListener("click", function () {
        modal.style.display = "none";
        activeItem = null; // 활성화된 아이콘 초기화
    });

    // 모달 클릭해도 닫히지 않도록 설정
    modal.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // 스킬 아이콘 애니메이션

    skillItems.forEach((item, index) => {
        const delay = Math.random() * 0.5; // 0 ~ 0.5초 랜덤 딜레이
        const duration = 0.8 + Math.random() * 0.4; // 0.8 ~ 1.2초 랜덤 속도
        item.style.animation = `bounce ${duration}s infinite ease-in-out ${delay}s`;
        item.style.setProperty("--shadow-duration", `${duration}s`);
    });

    // 마우스 움직일 때 이미지 회전
    const img = document.querySelector(".main-con figure img");

    document.addEventListener("mousemove", function (e) {
        let xAxis = (window.innerWidth / 2 - e.clientX) / 25; // 화면 중앙 기준 X축 이동
        let yAxis = (window.innerHeight / 2 - e.clientY) / 25; // 화면 중앙 기준 Y축 이동

        img.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`;
    });

    const texts = document.querySelectorAll(".cls-1");
    texts.forEach((text, index) => {
        //각 글자의 길이 구하기
        const textLength = Math.ceil(text.getTotalLength());
        // console.log(index, textLength);

        //각 글자의 길이에 맞춘 초기 세팅
        gsap.set(text, {
            strokeDasharray: textLength,
            strokeDashoffset: textLength,
        });

        // 각 글자별 strokeDashoffset을 0으로 조정
        gsap.to(text, {
            strokeDashoffset: 0,
            duration: 1,
            delay: index * 0.05,
        });
    });
});
