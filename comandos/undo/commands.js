const Discord = require('discord.js');
const db = require('megadb');
let solo = ['559502596847435827', '571935127295229963', '594639565268975618', '704029952596508794'];

module.exports = {
    nombre: "commands",
    category: "undo",
    alias: ['comandos', 'cmds'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        const developers = new db.crearDB('developers', 'data_ids');
        let dev = await developers.obtener('Agency');
        const devlist = new db.crearDB('devlist', 'data_ids');
        let a = await devlist.obtener(message.author.id);
        const embed = new Discord.MessageEmbed()
            .setDescription(`Prefix: \`${prefix}\`\nPara saber sobre mis comandos usa \`${prefix}biblioteca\`\n<@${message.author.id}> estos son mis comandos principales:`)
            .addField(`<:proteccion:780163156902543370> | Protección`, `\`${prefix}antichannels\`, \`${prefix}kick-malicious\`, \`${prefix}warn-entry\`, \`${prefix}antijoins\`, \`${prefix}antibots\`, \`${prefix}raiddetect\`, \`${prefix}sos\``)
            .addField(`<:mod:780163163421278228> | Moderación`, `\`${prefix}warn\`, \`${prefix}warns\`, \`${prefix}mute\`, \`${prefix}unmute\`, \`${prefix}clear\`, \`${prefix}kick\`, \`${prefix}ban\`, \`${prefix}case\``)
            .addField(`<:config:780163162993328138> | Configuración`, `\`${prefix}setprefix\`, \`${prefix}automoderator\`, \`${prefix}status\`, \`${prefix}logs\``)
            .addField(`<:otros:780163159553605653> | Otros`, `\`${prefix}me\`, \`${prefix}apelar\`, \`${prefix}ayuda\`, \`${prefix}queja\`, \`${prefix}reporte\`, \`${prefix}sugerencia\``)
            .setImage('https://cdn.discordapp.com/attachments/779807899492417538/779820352817332264/unknown.png')
            .setColor(embedColorBlue);
        if(solo.includes(message.author.id)) {
            embed.addField(`<:config2:780163163361640468> | Creador.`, `\`${prefix}newdev\`, \`${prefix}removedev\`, \`${prefix}guild\`, \`${prefix}malicious\`, \`${prefix}r-malicious\`, \`${prefix}malicious-info\`, \`${prefix}expulsar\`, \`${prefix}banear\`, \`${prefix}abandonar\`, \`${prefix}bloquear\``)
            message.channel.send(embed);
        }else if(a == 'básico') {
            embed.addField(`<:config2:780163163361640468> | Developer medio.`, `\`${prefix}guild\`, \`${prefix}malicious-info\``);
            message.channel.send(embed);
        }else if(a == 'medio') {
            embed.addField(`<:config2:780163163361640468> | Gran developer.`, `\`${prefix}guild\`, \`${prefix}malicious-info\`, \`${prefix}expulsar\``);
            message.channel.send(embed);
        }else if(a == 'alto') {
            embed.addField(`<:config2:780163163361640468> | Developer importante.`, `\`${prefix}guild\`, \`${prefix}malicious-info\`, \`${prefix}expulsar\`, \`${prefix}banear\``);
            message.channel.send(embed);
        }else{
            message.channel.send(embed);
        }
    }
}