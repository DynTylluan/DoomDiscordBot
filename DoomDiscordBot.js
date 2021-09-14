// Hello there, weclome to the source code for WHATEVERBot, a Discord bot that was mostly made to spit out terrible opinions of the Doom games

//
// Hello! Welcome to the source code for OwlBot
//
// If the bot is offline, go to this URL: https://owlman-bot.glitch.me
// The source is currently found here: https://github.com/DynTylluan/OwlBot
//

console.log("OwlBot is ready to destroy pussies!");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("[REMOVED]");

// Classic Doom commands

 // IDDQD
  if (message.content == "iddqd", "IDDQD") {
    message.channel.send("iddqd.png");
}

// Random answers from a single word
function randomMessage() {
  var randomNumber = Math.round(Math.random() * 2); // 0, 1 or 2 <-- Change this, I guess
  switch (randomNumber) {
    case 0:
      return "Hey dumbass, I know that you like the New Doom soundtrack and all, but let's face it, it would be so much better if it was MIDI and made by, you know, a REAL musician like Bobby Prince.";
    case 1:
      return "Okay, so in Classes Doom, you had what, just over half a dozen weapons? But now it's crazy, too many weapons. Same for monsters. The boys at id knew what they were doing, not like now where the are simile 100 monster types. Why we have so many, I'll never know.";
    case 2:
      return "New Doom is so shit, in Classic Doom, you can't jump, so why change it? It was fine the way it was - if it ain't broke, don't fix it";
    case 3:
      return "Let's be real here, guys, unless your port can run Brutal Doom, then you are just wasting your time";
    case 4:
      return "Seeing that Doom Eternal can now run PWADs natively in its game, there is no longer any point in even downloading any ports for Classic Doom";
    case 5:
      return "Wolf 3D > Doom";
    case 6:
      return "Why won't fraggle respond to my emails demanding that Chocolate Doom should support Brutal Doom? Elton John wanna be";
    case 7:
      return "Can someone send me a link to download Doom 2 for free?";
    case 8:
      return "Why are the cheat codes in Doom so long? I don't get why I need to manually need to type in the commands, why the hell does Doom not have a conceal?";
    case 9:
      return "New Doom is so much better than Classic, for one thing is that there is a story";
    case 10:
      return "As we all know, only TRUE fans of Doom know that everything related to the game is terrible";
    case 11:
      return "Doom was never centered on rip and tear, doot and other inside jokes it retrieved from other Doom projects";
    case 12:
      return "Doom pioneered it's game design tenets since day one. Doom Eternal simply doesn't meet them and it's BS";
    case 13:
      return "xxx";
    case 14:
      return "xxx";
    case xxx:
      return "xxx";
  }
}
bot.on("message", message => {
  if (message.content.toLowerCase() == "idquote") {
    message.channel.send(randomMessage());
  }
});