module.exports = {
    name: 'kick',
    description: "this command kick kmembers!",
     execute(message, args){
        const member = message.mentions.users.first();
        if (member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("User Has Been Kicked");
        }else{
            message.channel.send('You Can Not Kick That Member');
         }  
    }
}