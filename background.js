var lastFire;
var curTime;
var d;
var hostString;
var badHosts = {"www.pfizer.com":0,
               "www.centrum.com":0,
               "www.robitussin.com":0, 
               "www.viagra.com":0,
               "www.advil.com":0,
               "www.chapstick.com":0,
               "www.emergenc.com":0,
               "www.epipen.com":0,
               "www.ups.com":0,
               "www.kochind.com":0,
               "www.molex.com":0,
               "www.gp.com":0,
               "www.angelsoft.com":0,
               "www.brawny.com":0,
               "www.dixie.com":0,
               "www.mardigrasnapkins.com":0,
               "www.quiltednorthern.com":0,
               "www.sparkletowels.com":0,
               "www.vanityfairnapkins.com":0,
               "www.statefarm.com":0,
               "www.3m.com":0,
               "www.acebrand.com":0,
               "www.command.com":0,
               "www.filtrete.com":0,
               "www.futuro-usa.com":0,
               "www.nexcare.com":0,
               "www.post-it.com":0,
               "www.scotchbrand.com":0,
               "www.scotchblue.com":0,
               "www.scotch-brite.com":0,
               "www.scotchgard.com":0,
               "www.avaloneyewear.com":0,
               "www.tysonfoods.com":0,
               "www.tyson.com":0,
               "www.jimmydean.com":0,
               "www.hillshirefarm.com":0,
               "www.hillshiresnacking.com":0,
               "www.ballparkbrand.com":0,
               "www.dixie.com":0,
               "www.raisedandrooted.com":0,
               "www.aidells.com":0,
               "www.corndogs.com":0,
               "www.natureraisedfarms.com":0,
               "saraleedeli.com":0,
               "www.wrightbrand.com":0,
               "www.tysonfoodservice.com":0,
               "www.tysonfreshmeats.com":0,
               "www.delianytime.com":0,
               "www.gallosalame.com":0,
               "www.advancepierre.com":0,
               "www.barberfoods.com":0,
               "www.bigazsandwiches.com":0,
               "www.fastfixin.com":0,
               "www.steakeze.com":0,
               "www.phillycheesesteak.com":0,
               "www.bryanfoods.com":0,
               "www.truechews.com":0,
               "www.nudgesdogtreats.com":0,
               "www.haystackmountaincheese.com":0
}

chrome.tabs.onUpdated.addListener(function (tabId, info, changeInfo) {
  if (info.status === 'complete') {
    var url = new URL(changeInfo.url);
    hostString = String(url.hostname);
    if(hostString in badHosts)
    {
      d = new Date();
      curTime = d.getTime();
      if(curTime >= (badHosts[hostString] + 3600000))
      {
        console.log(hostString + ":" + badHosts[hostString]);
        alert('WARNING: This company exploits and/or supports prison labor. Proceed with caution, and find an alternative brand if possible. Press OK to continue to the site.\n\nTo find more information on why this company was included, please visit https://github.com/teddylambert/PrisonBlock/blob/master/companies.md');
        badHosts[hostString] = curTime;
        console.log(hostString + ":" + badHosts[hostString]);
      }
      else
        console.log(hostString + ":" + badHosts[hostString] + " , no update");
    }
  }
});

/*
d = new Date();
      curTime = d.getTime(); //Get seconds since epoch
      chrome.storage.sync.get([hostString], function (callback) {
        console.log(callback);
        if(typeof callback[hostString] === undefined)
        {
          lastFire = 0;
        }
        else
        {  
          lastFire = callback[hostString];
        }
        //console.log("Got key " + hostString + " with value " + lastFire);
      });
      if(curTime >= (lastFire + 3600000))
      {
        chrome.storage.sync.set({[hostString]: curTime}, function () {
          //console.log("Key " + hostString + " set with time " + curTime);
        });
        alert('WARNING: This company exploits and/or supports prison labor. Proceed with caution, and find an alternative brand if possible. Press OK to continue to the site.\n\nTo find more information on why this company was included, please visit https://github.com/teddylambert/PrisonBlock/blob/master/companies.md');
      }
*/