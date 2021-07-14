const Discord = require('discord.js');
const db = require('megadb');
const infoEmbed = new Discord.MessageEmbed().setTitle('<:sp_flecha2:805810542966734860> Información.').setColor('5c4fff');

module.exports = {
    nombre: "antibots",
    category: "configuracion",
    alias: ['ab'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        try{
            let Mauthor = message.author.id;
            let Sowner = message.guild.owner.id;
            if(Mauthor == Sowner) {
                const antibots = new db.crearDB('antibots', 'data_guilds');
                if(antibots.tiene(message.guild.id)) {
                    antibots.eliminar(message.guild.id);
                    infoEmbed.setDescription('`Ya no expulso bots.`');
                    message.channel.send(infoEmbed);
                    return;
                }
                if(!antibots.tiene(message.guild.id)) {
                    antibots.establecer(message.guild.id, 'Activado');
                    infoEmbed.setDescription('`Ahora expulso bots.`');
                    message.channel.send(infoEmbed);
                    return;
                }
            }else{
                message.channel.send('Necesitas ser __El Propietario De Este Servidor__.');
            }
        }catch(err) {
            message.channel.send('Necesitas ser __El Propietario De Este Servidor__.');
        }
    }
}