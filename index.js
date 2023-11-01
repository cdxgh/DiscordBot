const {Client, GatewayIntentBits, } = require("discord.js");

const client = new Client({intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,


]

});

client.on("messageCreate", (message)=>{
    if(message.author.bot) return;
    message.reply({
        content: "Hi from Bot",
    });
});

client.login('MTE2OTIwMzc4NjkwOTIzMzIxMg.Ggf14k.0A4Oa7nAQz0kl4_1tjZ-RMEJD8m3w8tEYR-m1U'); // Replace 'YOUR_BOT_TOKEN_HERE' with your bot's actual token
