const Discord = require('discord.js');
const db = require('megadb');
const color = '0x5c4fff';

module.exports = {
    nombre: "sugerencia",
    category: "otros",
    alias: [],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        const sugerencia = client.channels.cache.get('782712586519969792');
        if(!args[0])return message.channel.send('<a:sp_no:805810577448239154> | `No has escrito la sugerencia.`');
        if(args <= 20)return message.channel.send('<a:sp_no:805810577448239154> | `Tu sugerencia es demasiado corta como para ser enviada.`');
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(args.join(' '))
        .setColor(color);

        message.channel.send(embed);
        sugerencia.send(embed);
    }
}