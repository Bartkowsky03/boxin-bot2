const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDI4NTcwNjUwNzY5MzU4ODUx.DZ-6Wg.qJUgkAvk4sinaNgr8j3V55qLHNE";
const PREFIX = "-";

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();

    });
}
var fortunes = [
    "Yes",
    "Heck yeah",
    "No",
    "maybe",
    "Heck no",
    "Idk",
	"BOXIN is the answer",
];

var fetchVideoInfo = require('youtube-info');
fetchVideoInfo('{videoId}', function (err, videoInfo) {
  if (err) throw new Error(err);
  console.log(videoInfo);
});

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("Bot gotowy!");
    console.log("Dostepne komendy: boxin");
    bot.user.setGame('idk');
});
