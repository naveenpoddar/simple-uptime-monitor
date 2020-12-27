const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch');

const config = require('./configs.json');
const prefix = "*";
var urls = ["http://hyperop.glitch.me/", "http://hyperop.glitch.me/"]; //like this

client.on('ready', () => {
    console.log(`[Uptimer] ${client.user.tag} has logged in.`)
});

client.on('message', async (message) => {
    if(message.author.bot) return;
    if(!message.guild) return;

    if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        // your help cmd code here
    }

});

client.login(config.token);



setInterval(() => {
    urls.forEach(u => {
        fetch(u);
    });
}, 240000);