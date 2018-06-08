console.log("bot.js has started");

var Twit = require('twit');
var config = require ('./config.js');
var T = new Twit(config);

setInterval(tweetIt, 1000*10*60*60)

tweetIt();

function tweetIt(){
  var tweet = {
    status: 'Remaining time to the next PoGo ' + timeToNextPogo() + ' #WhoWinnsThePot'
  }
  // console.log("tweet: ", tweet);
  T.post('statuses/update',  tweet, tweeted)
  function tweeted(err,data,response){
    if(err){
      console.log("something went wrong!", err);
    }else{
      console.log("it workedd !");
    }
  }
}

function timeToNextPogo(){
  var d = new Date;
  var nextPogoTime = new Date("Jun 15, 2018 16:00:00");
  var remainingTime = nextPogoTime - d;
  return convertToReadableTime(remainingTime);
}

function convertToReadableTime(time){
    var d= new Date();
    var day=1000*60*60*24
    var days = Math.round(time/day);
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var readableTime = days + "days " + h + " hours " + m + " minutes " + s + " seconds";
    return readableTime;
}
