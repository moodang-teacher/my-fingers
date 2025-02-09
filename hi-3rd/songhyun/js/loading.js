window.addEventListener('load', function () {
  const loadingScreen = document.querySelector('.loading-screen');

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000); // opacity가 0이 되는 데 걸리는 시간과 일치해야 함
  }, 2000); // 6초 후 로딩 화면 페이드아웃 시작 (애니메이션 시간 포함)
});
