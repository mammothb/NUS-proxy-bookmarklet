var useProxy = function () {
  location.href='http://libproxy1.nus.edu.sg/login?url=' + location.href;
}

chrome.runtime.onMessage.addListener(
  function (message, sender, callback) {
    if (message.functiontoInvoke == "useProxy") useProxy();
  }
);
