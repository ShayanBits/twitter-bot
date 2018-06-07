console.log("bot.js has started");

var Twit = require('twit');
var config = require ('./config.js');
var T = new Twit(config);

setInterval(tweetIt, 1000*10*6)

tweetIt();

function tweetIt(){
  var r = Math.floor(Math.random()*100);
  var tweet = {
    status: 'here is a random number ' + r + ' #shayan_twitter_bot'
  }

  T.post('statuses/update',  tweet, tweeted)

  function tweeted(err,data,response){
    if(err){
      console.log("something went wrong!");
    }else{
      console.log("it worked !");
    }
  }
}

//search
// var params ={
//   q: 'trump',
//   count: 5
// }
// T.get('search/tweets', params, goData);
// function goData(err, data, response) {
//   var tweets = data.statuses;
//   for(var i=0 ; i< tweets.length ; i++){
//     console.log(tweets[i].text);
//   }
// }
