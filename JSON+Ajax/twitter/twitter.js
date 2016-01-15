var tweets = new Array();
window.onload = init;

function init() {
    getTweets();
}

function getTweets() {
    var request = new XMLHttpRequest();
    request.open("GET", "twitter.json");
    request.onreadystatechange = function() {
        // var listDiv = document.getElementById("todoList");
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) { 
                // listDiv.innerHTML = this.responseText;
                   parseTweets(this.responseText);
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}

function parseTweets(tweetsJSON) {
    if (tweetsJSON == null || tweetsJSON.trim() == "") {
        return;
    }
    var tweetsArray = JSON.parse(tweetsJSON);
    if (tweetsArray.length == 0) {
        console.log("Error: the tweet array is empty!");
        return;
    }
    for (var i = 0; i < tweetsArray.length; i++) {
        var tweetItem = tweetsArray[i];
        tweets.push(tweetItem);
        addTweetsToPage();
    }
    console.log("tweets array: ");
    console.log(tweets);
} 

function addTweetsToPage() {
    var ul = document.getElementById("twitter");
        var li = document.createElement("li");
        li.innerHTML =
            tweetItem.user.name + " : " + tweetItem.text;
        ul.appendChild(li);

} 