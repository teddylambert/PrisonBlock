function interceptRequest(request)
{
  if(request && request.url)
  {
    if(request.type == "main_frame") // new page/site is loading in main window
    {
     if(!confirm('WARNING: This company exploits and/or supports prison labor. Proceed with caution, and find an alternative brand if possible.'))
     {
       return {redirectUrl: "javascript:"};
     }
	  }
  }
}

var badUrls = ["*://www.pfizer.com/*",
               "*://www.centrum.com/*",
               "*://www.robitussin.com/*", 
               "*://www.viagra.com/*",
               "*://www.advil.com/*",
               "*://www.chapstick.com/*",
               "*://www.emergenc.com/*",
               "*://www.epipen.com/*",
               "*://www.ups.com/*",
               "*://www.kochind.com/*",
               "*://www.molex.com/*",
               "*://www.gp.com/*",
               "*://www.angelsoft.com/*",
               "*://www.brawny.com/*",
               "*://www.dixie.com/*",
               "*://www.mardigrasnapkins.com/*",
               "*://www.quiltednorthern.com/*",
               "*://www.sparkletowels.com/*",
               "*://www.vanityfairnapkins.com/*",
               "*://www.statefarm.com/*",
               "*://www.3m.com/*",
               "*://www.acebrand.com/*",
               "*://www.command.com/*",
               "*://www.filtrete.com/*",
               "*://www.futuro-usa.com/*",
               "*://www.nexcare.com/*",
               "*://www.post-it.com/*",
               "*://www.scotchbrand.com/*",
               "*://www.scotchblue.com/*",
               "*://www.scotch-brite.com/*",
               "*://www.scotchgard.com/*",
               "*://www.avaloneyewear.com/*",
               "*://www.tysonfoods.com/*",
               "*://www.tyson.com/*",
               "*://www.jimmydean.com/*",
               "*://www.hillshirefarm.com/*",
               "*://www.hillshiresnacking.com/*",
               "*://www.ballparkbrand.com/*",
               "*://www.dixie.com/*",
               "*://www.raisedandrooted.com/*",
               "*://www.aidells.com/*",
               "*://www.corndogs.com/*",
               "*://www.natureraisedfarms.com/*",
               "*://www.saraleedeli.com/*",
               "*://www.wrightbrand.com/*",
               "*://www.tysonfoodservice.com/*",
               "*://www.tysonfreshmeats.com/*",
               "*://www.delianytime.com/*",
               "*://www.gallosalame.com/*",
               "*://www.advancepierre.com/*",
               "*://www.barberfoods.com/*",
               "*://www.bigazsandwiches.com/*",
               "*://www.fastfixin.com/*",
               "*://www.steakeze.com/*",
               "*://www.phillycheesesteak.com/*",
               "*://www.bryanfoods.com/*",
               "*://www.truechews.com/*",
               "*://www.nudgesdogtreats.com/*",
               "*://www.haystackmountaincheese.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: badUrls}, ['blocking']);

//Could add good companies too (ben and jerrys, etc) and have something pop up
//Easter egg: add my linkedin to a new listener with pop up that says "This guy is awesome"

