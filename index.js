
const Discord = require("discord.js");
const client = new Discord.Client();
// logowanie
client.login("nie ma");



// odpalanie
client.on("ready", () => {
    console.log("I am ready!");

    client.user.setGame("Spamming /gun");
});

// odpowiadanie
client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("zjeb")) {
        message.channel.send("zjeb");
        return 0;
    }
});


// aktualny gun
client.on("message", (message) => {
    if (message.content.startsWith("test")) {
        message.channel.send("Nowy Gun:", { files: ["./Gun/gun.png"] });
    }
});


// aktualny gun
client.on("message", (message) => {
    if (message.content.startsWith("gun")) {
        message.channel.send("Nowy Gun:", { files: ["./Gun/gun.png"] });
    }
});



// testowane
client.on("message", (message) => {
    if (message.content == "cykablyat") {
        number = 74;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./Gun/" + imageNumber + ".png" ] })
        message.reply("Just Recieved:")
    }
});



// stary
client.on("message", (message) => {
    if (message.content == "/gun") {
        number = 72;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        if (imageNumber <= 2) {
            message.channel.send({ files: ["./test/" + imageNumber + ".gif"] })
        } else if (imageNumber > 2) {
            message.channel.send({ files: ["./test/" + imageNumber + ".png"] })
        }
        message.reply("Just Recieved:")
    }
});
