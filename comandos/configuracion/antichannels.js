const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<:sp_flecha2:805810542966734860> Información.').setColor('5c4fff');

module.exports = {
    nombre: "antichannels",
    category: "configuracion",
    alias: ['anticanales', 'ac'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS'))return message.channel.send('Necesitas permiso de __Gestionar Canales__.');
        const antichannels = new db.crearDB('antichannels', 'data_guilds');
        if(antichannels.tiene(message.guild.id)) {
            antichannels.eliminar(message.guild.id);
            infoEmbed.setDescription('`Ya no reestablezco valores de canales.`');
            message.channel.send(infoEmbed);
            return;
        }
        if(!antichannels.tiene(message.guild.id)) {
            antichannels.establecer(message.guild.id, 'Activado');
            infoEmbed.setDescription('`Ahora reestablezco los valores de canales editados.`');
            message.channel.send(infoEmbed);
            return;
        }
    }
}