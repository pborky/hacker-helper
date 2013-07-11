
var regex = /.*/

// this crap should be removed in future
var runtime = chrome.runtime && chrome.runtime.sendMessage ? chrome.runtime : chrome.extension


// decide if send message to background.js (show pageAction icon in omnibox)
// you can filter pages based on their content
if (regex.test(jQuery('body').text())) {
    runtime.sendMessage(
        { greeting: "hello" }, 
        function (response) {
            console.log(response.farewell);
        }
    );
} else {
    console.log('Actually not Dolan.');
}

