const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<:sp_flecha2:805810542966734860> Información.').setColor('5c4fff');

module.exports = {
    nombre: "logs",
    category: "configuracion",
    alias: [],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS'))return message.channel.send('Necesitas permiso de __Gestionar Canales__.');
        const logs = new db.crearDB('canales', 'logs');
        if(logs.tiene(message.guild.id)) {
            logs.eliminar(message.guild.id);
            infoEmbed.setDescription('`Logs desactivados.`');
            message.channel.send(infoEmbed);
            return;
        }
        if(!logs.tiene(message.guild.id)) {
            let ping = message.mentions.channels.first();
            if(!ping)return message.channel.send('Menciona un canal para establecer los logs.');
            let asd = [];
            message.guild.channels.cache.forEach(x => {
                asd.push(x.id);
            });
            if(!asd.includes(ping.id))return message.channel.send('Ese canal no es de este servidor.');
            logs.establecer(message.guild.id, ping.id);
            infoEmbed.setDescription('`El canal `<#'+ping.id+'>` ha sido establecido como canal de logs.`');
            message.channel.send(infoEmbed);
            return;
        }
    }
}