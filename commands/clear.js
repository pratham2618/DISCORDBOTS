module.exports = {
    name: 'clear',
    description: "clear messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("please enter the amount of chats to delete!");
        if(isNaN(args[0])) return message.reply("please enter real number!");

        if(args[0] > 100) return message.reply("you cannot delete mre than 100 messages!");
        if(args[0] < 1) return message.reply("you must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}