const Discord = require('discord.js');
const db = require('megadb');
const embed = new Discord.MessageEmbed().setColor('5c4fff');

module.exports = {
    nombre: "biblioteca",
    category: "undo",
    alias: ['bbtc'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        if(!args.join(' '))return message.channel.send('<a:sp_no:805810577448239154> | `Escribe '+prefix+'biblioteca [cmd]`\n\nEjemplo: `'+prefix+'biblioteca status`');
        if(args[0] == 'antichannels') {
            embed.setDescription('Este comando activa una función que no permite borrar, crear o editar canales.');
        }else if(args[0] == 'kick-malicious') {
            embed.setDescription('Al activar este comando el bot comenzará a expulsar los usuarios maliciosos que entren a tu servidor.');
        }else{
            embed.setDescription('<a:sp_no:805810577448239154> | `Ese comando no existe.`\n\nEjemplo: `'+prefix+'biblioteca status`');
        }
        message.channel.send(embed);
    }
}