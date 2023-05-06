(() => {
  // 변경을 감지할 노드 선택
  const targetNode = document.body;

  // 감지 옵션 (감지할 변경)
  const config = { attributes: true, childList: true, subtree: true };

  // 변경 감지 시 실행할 콜백 함수
  const callback = (mutationList, observer) => {
    const skipButton = document.querySelector(
      ".watch-video--skip-content-button"
    );
    if (skipButton) {
      skipButton.click(); // 버튼 클릭
    }
  };

  // 콜백 함수에 연결된 감지기 인스턴스 생성
  const observer = new MutationObserver(callback);

  // 설정한 변경의 감지 시작
  observer.observe(targetNode, config);

  // 이후 감지 중단 가능
  // observer.disconnect();
})();
