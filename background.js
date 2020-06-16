var URLStorage;

function interceptRequest(request)
{
  if(request && request.url)
  {
    if(request.type == "main_frame") // new page/site is loading in main window
    {
        URLStorage = request.url;
        return {redirectUrl: chrome.extension.getURL("warningPage.html")};
    }
  }
}

function enterFunc() {
	alert('test')
}

$(document).ready(function () {
	$("#enterButton").click(enterFunc);
});

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://tide.com/*", "*://bountytowels.com/*"]}, ['blocking']);


