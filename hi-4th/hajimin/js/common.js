document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");
    const aEl = document.querySelectorAll("a");
    const skillsConEl = document.querySelectorAll(".skills-con");
    console.log(aEl, skillsConEl);

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = `${e.clientX}px`; // 마우스 X 좌표
        cursor.style.top = `${e.clientY}px`; // 마우스 Y 좌표
    });

    // 클릭 가능한 요소 위에서 커짐
    aEl.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });

    skillsConEl.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });

    // .detail-btns 내 동적으로 추가된 <a> 요소에 대한 이벤트 위임
    // document.querySelector(".detail-btns").addEventListener("mouseover", (e) => {
    //     if (e.target.tagName === "A") {
    //         cursor.classList.add("active");
    //     }
    // });

    // document.querySelector(".detail-btns").addEventListener("mouseout", (e) => {
    //     if (e.target.tagName === "A") {
    //         cursor.classList.remove("active");
    //     }
    // });
});
