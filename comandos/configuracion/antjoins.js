const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<:sp_flecha2:805810542966734860> Información.').setColor('5c4fff');

module.exports = {
    nombre: "antijoins",
    category: "configuracion",
    alias: ['aj'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        if(!message.member.hasPermission('KICK_MEMBERS'))return message.channel.send('Necesitas permiso de __Espulsar Miembros__.');
        const antijoins = new db.crearDB('antijoins', 'data_guilds');
        if(antijoins.tiene(message.guild.id)) {
            antijoins.eliminar(message.guild.id);
            infoEmbed.setDescription('`Ya no expulso nuevos miembros.`');
            message.channel.send(infoEmbed);
            return;
        }
        if(!antijoins.tiene(message.guild.id)) {
            antijoins.establecer(message.guild.id, 'Activado');
            infoEmbed.setDescription('`Ahora expulso nuevos miembros.`');
            message.channel.send(infoEmbed);
            return;
        }
    }
}