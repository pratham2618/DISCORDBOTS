module.exports = {
    name: 'command',
    discription: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('#FF8B61')
    .setTitle('Rules')
    .addFields(
        {name:'Rule 1', value:'🅱🅴 🅽🅸🅲🅴 🆃🅾 🅴🆅🅴🆁🆈🅾🅽🅴 🅸🅽 🆃🅷🅴 🆂🅴🆁🆅🅴🆁'},
        {name:'Rule 2', value:'🅱🅴 🅷🅾🅽🅴🆂🆃 🆃🅾 🅴🆅🅴🆁🆈🅾🅽🅴'},
        {name:'Rule 3', value:'🅽🅾 🅰🅱🆄🆂🅸🅽🅶 🅸🅽 🅶🅴🅽🅴🆁🅰🅻 🅾🆁 🅰🅽🆈 🅾🆃🅷🅴🆁 🅲🅷🅰🅽🅽🅴🅻'}


    )
    
    .setFooter('🆁🅴🅰🅳 🅰🅻🅻 🅸🅽🆂🆃🆁🆄🅲🆃🅸🅾🅽 🅲🅰🆁🅴🅵🆄🅻🅻🆈');

    message.channel.send(newEmbed);
    }
}

