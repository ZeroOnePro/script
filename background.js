chrome.tabs.onCreated.addListener(async function (tab) {
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content-script.js"],
  });
});
