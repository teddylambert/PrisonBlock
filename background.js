function interceptRequest(request)
{
  if(request && request.url)
  {
    if(request.type == "main_frame") // new page/site is loading in main window
    {
     if(!confirm('WARNING: This company uses prison labor to manufacture their products. Proceed with caution'))
     {
       return {redirectUrl: "javascript:"};
     }
	  }
  }
}

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://tide.com/*", "*://bountytowels.com/*"]}, ['blocking']);


