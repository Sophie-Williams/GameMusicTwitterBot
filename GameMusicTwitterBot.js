// Copyright Spencer Wack 2018

// test that bot is working
console.log('Bot is starting...');

var Twit = require('twit');
var config = require('./config');

// test that config is loaded
console.log('Config loaded without problems...');

// authenticate to twitter via config
var T = new Twit(config);

// index for songs array set to 0 initially
//var songArrayIndex = 0;

// create song link array
var songs = [
"https://www.youtube.com/watch?v=7BTnD9RwaME",
"https://www.youtube.com/watch?v=VKAdi0hPtr4",
"https://www.youtube.com/watch?v=JF522Q4k9t8",
"https://www.youtube.com/watch?v=y7Vx9B4OEvc",
"https://www.youtube.com/watch?v=_MTuGnOjxEY",
"https://www.youtube.com/watch?v=PGSpvk764wg",
"https://www.youtube.com/watch?v=CSI3sjAl4tE",
"https://www.youtube.com/watch?v=cO0KXMZavuw",
"https://youtu.be/SG0CP6D2sLQ (I know this is kind of cheating)",
"https://www.youtube.com/watch?v=Jl1_T_XeSDE (somebody send me some weeb begone, please and thank you)",
"https://www.youtube.com/watch?v=NIWyZmFSep0",
"https://www.youtube.com/watch?v=IcD4gx6c8pI (I'm not sorry)",
"https://www.youtube.com/watch?v=uNokhrT8dsY",
"https://youtu.be/bHHGxa6jpBc?list=PL46DD3C5BD35E44BF",
"https://www.youtube.com/watch?v=NW26pwMDUHA",
"https://www.youtube.com/watch?v=-2PfHWMxaAo",
"https://www.youtube.com/watch?v=T7ILc-JA_DI",
"https://www.youtube.com/watch?v=DNmjtpL-yzs",
"https://www.youtube.com/watch?v=GUuOLO3opPA",
"https://www.youtube.com/watch?v=nYWjbuhqQXE",
"https://www.youtube.com/watch?v=Ta5EbIcHo24",
"https://www.youtube.com/watch?v=cvpyLWf5X8Y",
"https://www.youtube.com/watch?v=r3A2tr-ndbk",
"https://www.youtube.com/watch?v=KP7wXkIj4rg",
"https://www.youtube.com/watch?v=Vc1wzDWFvf8",
"https://www.youtube.com/watch?v=fGemhLaGy0M",
"https://www.youtube.com/watch?v=mxvfieTkARI",
"https://www.youtube.com/watch?v=L_UmZI2Z3So",
"https://www.youtube.com/watch?v=3HIYo-wIuRw",
"https://youtu.be/6mdLAT8pOZ4",
"https://www.youtube.com/watch?v=2YZ1ouxhzaM",
"https://www.youtube.com/watch?v=uTsPG4sdYp0",
"https://www.youtube.com/watch?v=qqGrsuK2cwI",
"https://www.youtube.com/watch?v=YHL_Bk60F_4",
"https://www.youtube.com/watch?v=RCjZTxGUzMI",
"https://www.youtube.com/watch?v=9-tjDJ-YSTs",
"https://www.youtube.com/watch?v=H1zDXdXVye0 (look at me over here cheating again)",
"https://www.youtube.com/watch?v=5dauRYb9il8",
"https://www.youtube.com/watch?v=jTNC1t6_MY4",
"https://www.youtube.com/watch?v=QfDSdae4Vko",
"https://www.youtube.com/watch?v=3AImYWEEnQA",
"https://www.youtube.com/watch?v=iBvm3EF2_PM",
"https://www.youtube.com/watch?v=RZFH0KctGhs",
"https://www.youtube.com/watch?v=U2Uz39fHMic",
"https://www.youtube.com/watch?v=EV6E13xODyA",
"https://www.youtube.com/watch?v=iBQrDoTirRo (like all things, cheating works better in threes, right?)",
"https://www.youtube.com/watch?v=iKnwVvXkWq0",
"https://www.youtube.com/watch?v=mgKbyhdPwkA"
];

// 86400 seconds in one day
// repeat once a day
//setInterval(sendTweet(), 1000 * 86400);

/*
// test post
T.post('statuses/update', { status: 'bot test' }, function(err, data, response) {
	console.log(data)
});

// set up user stream
//var stream = T.stream('user');

//
// error notifications for attempts at tweeting
//
function tweeted(err, data, response) {
	// something about the tweet didn't work, so output to console
	if (err) {
		console.log("Error while sending tweet");
	}
	else {
		console.log("Tweet successfully posted");
	}
}
*/
var fs = require('fs');
var today = Date.now();
var fileDate = fs.readFileSync("date.txt");
var songArrayIndex = fs.readFileSync("index.txt");


// check if day has changed
if (today - fileDate >= 75000000) {
	sendTweet();
	fs.WriteFile("date.txt", today);
	fs.WriteFile("index.txt", songArrayIndex);
}


//
// tweet out a particular message
//
function sendTweet() {
	// create message
	//var msg = "array bot test" + songArrayIndex;
	var msg = "Day " + (songArrayIndex + 1) + ": " + songs[songArrayIndex++];
	var tweet = {
		status: msg
	};
	
	// check if Smash is out
	if (songArrayIndex != songs.length) {
		// send tweet
		T.post('statuses/update', tweet, function(err, data, response) {
			console.log(data);
		});
	}
	else {
		console.log("What are you doing? Smash is out. Go play that instead, doofus.");
	}
}