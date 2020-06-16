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

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://tide.com/*", "*://bountytowels.com/*"]}, ['blocking']);
