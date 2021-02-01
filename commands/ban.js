module.exports = {
    name: 'ban',
    description: "this command ban kmembers!",
    execute(message, args){
        const member = message.mentions.users.first();
        if (member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("User Has Been baned");
        }else{
            message.channel.send('You Can Not ban That Member');
         }  
    }
}