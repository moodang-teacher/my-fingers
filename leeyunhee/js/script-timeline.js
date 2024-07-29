$(function () {
  // 애니메이션 시킬 대상을 변수로 저장
  const $gnb = $('.gnb > li');
  const $img3d = $('.img-3d');

  // 애니메이션의 타임라인 설정(여러 요소를 순차적으로 애니메이션 시키기 위해서)
  const mainAni = gsap.timeline();

  // mainAni.from(대상, { 옵션 });
  mainAni
    .from($gnb, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      stagger: 0.2,
    })
    .from($img3d, { x: 50, duration: 1 });
  // .from($img3d, { y: 20 });
});
