let observer = null;

const callObserver = (macro) => {
  if (observer !== null) return observer;
  else {
    observer = new MutationObserver(macro);
    return observer;
  }
};

const netflixMacro = () => {
  document?.querySelector(".watch-video--skip-content-button")?.click();
  [...document.querySelectorAll("span")]
    ?.find((span) => span.textContent === "다음 화")
    ?.click();
};

const tvingMacro = () => {
  [...document.querySelectorAll("button")]
    ?.find((button) => button.textContent === "오프닝 건너뛰기")
    ?.click();
  [...document.querySelectorAll("p")]
    ?.find((p) => p.textContent === "다음회차 바로보기")
    ?.click();
};

const macro = () => {
  switch (window.location.hostname) {
    case "www.netflix.com":
      netflixMacro();
      break;
    case "www.tving.com":
      tvingMacro();
      break;
    default:
      console.log("unknown host");
      break;
  }
};

const main = () => {
  callObserver(macro)?.observe(document.body, {
    attributes: true,
    childList: true,
    subtree: true,
  });
};

main();
