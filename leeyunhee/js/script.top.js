$(function () {
  // top 버튼
  const $topBtn = document.querySelector('.moveTop-btn');

  // 버튼 클릭 시 맨 위로 이동
  $topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const $bottomBtn = document.querySelector('.moveBottomBtn');
});
