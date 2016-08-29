function proxyOnClick(info, tab) {
    //Add all you functional Logic here
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        functiontoInvoke: "useProxy"
      });
    });
}

// Create one test item for each context type.
var context = "page";
var title = "Open with NUS Proxy Bookmarklet";
var id = chrome.contextMenus.create({
    "title": title,
    "contexts": [context],
    "onclick": proxyOnClick
});
