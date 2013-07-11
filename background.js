
// this crap should be removed in future (compatibility of chrome 20-25 vs. 26 )
var runtime = chrome.runtime && chrome.runtime.sendMessage ? chrome.runtime : chrome.extension


// listen to message form content.js and show the pageAction icon in omnibox
runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse({farewell: "goodbye"});
    }
);

// execute hack.js on pageAction icon click
chrome.pageAction.onClicked.addListener(
    function(tab) {
        chrome.tabs.executeScript(null, {file: "hack.js"});
    }
);
