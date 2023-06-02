const callback = () => {
  const macro = () => {
    document?.querySelector(".watch-video--skip-content-button")?.click();

    [...document.querySelectorAll("span")]
      ?.find((span) => span.textContent === "다음 화")
      ?.click();

    [...document.querySelectorAll("button")]
      ?.find((button) => button.textContent === "오프닝 건너뛰기")
      ?.click();

    [...document.querySelectorAll("p")]
      ?.find((p) => p.textContent === "다음회차 바로보기")
      ?.click();
  };

  const observer = new MutationObserver(macro);

  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
  });
};

callback();
