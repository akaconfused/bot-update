const Discord = require('discord.js');
const db = require('megadb');
const color = '0x5c4fff';
let a = '782712586519969792';

module.exports = {
    nombre: "reporte",
    category: "otros",
    alias: [],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        const reporte = client.channels.cache.get('782712586519969792');
        let msg = message.content.slice(7 + prefix.length).split(',');
        if(!msg[0])return message.channel.send('<a:sp_no:805810577448239154> | `No has escrito la id de la perona que reportarás.`');
        if(!msg[1])return message.channel.send('<a:sp_no:805810577448239154> | `No has escrito la el link de la imagen de prueba. ('+prefix+'reporte <userid>, <link>)`');
        if(msg[2])return message.channel.send('No es necesario eso.');
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(msg[0].trim()+'\n'+msg[1].trim())
        .setColor(color);

        message.channel.send(embed);
        reporte.send(embed);
    }
}