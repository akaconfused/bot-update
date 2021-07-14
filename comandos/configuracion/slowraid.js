const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<:sp_flecha2:805810542966734860> Información.').setColor('5c4fff');

module.exports = {
    nombre: "slowraid",
    category: "configuracion",
    alias: ['sr', 'antislow-raids'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        if(!message.member.hasPermission('KICK_MEMBERS'))return message.channel.send('Necesitas permiso de __Espulsar Miembros__.');
        const antislow = new db.crearDB('antislow_atacks', 'data_guilds');
        if(antislow.tiene(message.guild.id)) {
            antislow.eliminar(message.guild.id);
            infoEmbed.setDescription('`Ya no detecto raids lentos.`');
            message.channel.send(infoEmbed);
            return;
        }
        if(!antislow.tiene(message.guild.id)) {
            antislow.establecer(message.guild.id, 0);
            infoEmbed.setDescription('`Ahora detectaré los raids más lentos.`');
            message.channel.send(infoEmbed);
            return;
        }
    }
}