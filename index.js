const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const token = 'NTIwNzk1OTAwOTU2NzcwMzQ0.DuzN0g.-EWkChNWZAgBnSVGbyO3KKz2-Zc'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands')

global.servers = {};



bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.send('Hello' + message.author + ', how are you')
    }
});

bot.on('message', function(message){
    if(message.content == 'Scrim')
    {
        message.channel.send('**Scrim Lineup** \n 1. ' + message.author + '\n 2. \n 3. \n 4. \n 5. \n \n **Code:** \n **Pass:**'); 
    }
})

bot.on('message', function(message){
    if(message.content == 'scrim')
    {
        message.channel.send('**Scrim Lineup** \n 1. ' + message.author + '\n 2. \n 3. \n 4. \n 5. \n \n **Code:** \n **Pass:**'); 
    }
})

bot.on('message', function(message){
    if(message.content == '@everyone')
    {
        message.channel.send('Stop tagging you failed abortion'); 
    }
})

bot.on('message', function(message){
    if(message.content == '@here')
    {
        message.channel.send('Stop tagging u profound kid'); 
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() === 'k')
    {
        message.channel.send('Ok me too'); 
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() === 'kys')
    {
        message.channel.send('Commit toaster bath'); 
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() === 'lmao')
    {
        message.channel.send('Depression'); 
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() === 'lol')
    {
        message.channel.send('shh incest'); 
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() === 'me')
    {
        message.channel.send('Ok me too'); 
    }
})

bot.on('message', function(message){
    if(message.content.toLowerCase() === 'hi')
    {
        message.channel.send('Hello how r u'); 
    }
})

bot.on('ready', function(){
    console.log('Ready');
})

bot.login(token);