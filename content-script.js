const callback = () => {
  const macro = () => {
    document?.querySelector(".watch-video--skip-content-button")?.click();

    document
      ?.querySelector('[data-uia="next-episode-seamless-button"]')
      ?.click();

    [...document.querySelectorAll("button")]
      ?.find((button) => button.textContent === "오프닝 건너뛰기")
      ?.click();

    [...document.querySelectorAll("p")]
      ?.find((p) => p.textContent === "다음회차 바로보기")
      ?.click();
  };

  const observer = new MutationObserver(macro);

  console.log(observer);

  observer.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
  });
};

callback();
