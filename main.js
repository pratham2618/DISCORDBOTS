const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
   const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Memer is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'MEMBER');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('793329989633835050').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`)
    
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'command'){
        client.commands.get('command').execute(message, args, Discord);
    } else if (command == 'youtube'){
       client.commands.get('youtube').execute(message, args, Discord);
    }else if (command == 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    }else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if (command == 'ding'){
        client.commands.get('ding').execute(message, args);
    }else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if (command == 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }else if (command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }else if (command == 'play'){
        client.commands.get('play').execute(message, args, Discord, client);
    }else if (command == 'leave'){
        client.commands.get('leave').execute(message, args, Discord, client);
    }else if (command == 'image'){
        client.commands.get('image').execute(message, args, Discord, client);
    }
});














client.login('ODA1MTA3NzA2MzI2ODEwNjM0.YBWE-w.FP0zltCHQNzMCYXK-xc4DSBqPPI')