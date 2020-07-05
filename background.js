/* 
Written by Teddy Lambert
Last Modified: 7/02/2020
*/

var lastFire;
var curTime;
var d;
var hostString;

// Contribution by Albert Portnoy (@asportnoy)
// This is a link to a JSON file with the sites. An extension/browser reload should fetch from this URL for easy list updating.
// You should replace this URL with the raw file on your repo.
var badHostsFile = "https://raw.githubusercontent.com/teddylambert/PrisonBlock/master/badhosts.json"
// This fetches the contents of the above file and stores it in the badHosts variable

var badHosts = null;
async function updateSites() {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      if (xhr.status !== 200) {
        badHosts = null;
        resolve();
        return;
      }
      badHosts = JSON.parse(xhr.responseText);
      resolve();
    });
    xhr.open("GET", badHostsFile);
    xhr.send();
  });
}

chrome.tabs.onUpdated.addListener(async (tabId, info, changeInfo) => {
  if (info.status === 'complete') {
    var url = new URL(changeInfo.url);
    hostString = String(url.hostname);
    if (!badHosts) await updateSites(); // If sites not found, load them.
    if (!badHosts) return; // Sites still not found, ignore filter.
    if (hostString in badHosts) {
      d = new Date();
      curTime = d.getTime();
      if (curTime >= (badHosts[hostString] + 3600000)) {
        alert('WARNING: This company exploits and/or supports prison labor. Proceed with caution, and find an alternative brand if possible. Press OK to continue to the site.\n\nTo find more information on why this company was included, please visit https://github.com/teddylambert/PrisonBlock/blob/master/companies.md');
        badHosts[hostString] = curTime;
      }
    }
  }
});

updateSites(); // Initialize sites.