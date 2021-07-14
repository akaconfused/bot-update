const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<:sp_flecha2:805810542966734860> Información.').setColor('5c4fff');

module.exports = {
    nombre: "setprefix",
    category: "configuracion",
    alias: [],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        if(!message.member.hasPermission('ADMINISTRATOR'))return message.channel.send('Necesitas permiso de __Administrador__.');
        const Myprefix = new db.crearDB('prefix', 'data_guilds');
        let setPrefix = message.content.slice(prefix.length + 10).trim();
        if(!setPrefix)return message.reply('Escribe el nuevo prefix.');
        if(setPrefix.length > 3)return message.reply('Escribe un prefix más corto!');
        if(setPrefix == 'sp!' && Myprefix.tiene(message.guild.id)) {
            Myprefix.eliminar(message.guild.id);
        }else{
            Myprefix.establecer(message.guild.id, setPrefix);
        }
        message.channel.send('Prefix establecido a `'+setPrefix+'`');
        client.channels.cache.get('822642829335593081').send(`Prefix actualizado a \`${setPrefix}\` en **${message.guild.name}** (${message.guild.id})`)
    }
}