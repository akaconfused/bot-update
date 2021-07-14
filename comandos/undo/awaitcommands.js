const Discord = require('discord.js');

module.exports = {
    nombre: "awaitcommands",
    category: "undo",
    alias: ['a-cmds', 'acmds', 'await-commands', 'await-cmds', 'awaitcomandos', 'await-comandos'],
    description: "",
    usage: [],
    run: async (client, message, args, ops, prefix, embedColorBlue) => {
        const embed = new Discord.MessageEmbed()
            .setDescription('1️⃣ = Categoría Protección.\n2️⃣ = Categoría Moderación.\n3️⃣ = Categoría Configuración.\n4️⃣ = Categoría Otros.')
            .setImage('https://cdn.discordapp.com/attachments/779807899492417538/779820352817332264/unknown.png')
            .setColor(embedColorBlue);
        message.channel.send(embed).then(x => {
            x.react('1️⃣'); x.react('2️⃣'); x.react('3️⃣'); x.react('4️⃣'); x.react('❌')
            x.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '1️⃣' || reaction.emoji.name == '2️⃣' || reaction.emoji.name == '3️⃣' || reaction.emoji.name == '4️⃣' || reaction.emoji.name == '❌'), { max: 1, time: 30000 }).then(collected => {
                if(collected.first().emoji.name == '1️⃣') {
                    x.edit(embed.setDescription(`\`${prefix}biblioteca\` para saber sobre los comandos.`).addField(`<:proteccion:780163156902543370> | Protección`, `\`${prefix}antichannels\`, \`${prefix}kick-malicious\`, \`${prefix}warn-entry\`, \`${prefix}antijoins\`, \`${prefix}antibots\`, \`${prefix}raiddetect\`, \`${prefix}sos\``));
                    x.reactions.removeAll();

                }else if(collected.first().emoji.name == '2️⃣') {
                    x.edit(embed.setDescription(`\`${prefix}biblioteca\` para saber sobre los comandos.`).addField(`<:mod:780163163421278228> | Moderación`, `\`${prefix}warn\`, \`${prefix}warns\`, \`${prefix}mute\`, \`${prefix}unmute\`, \`${prefix}clear\`, \`${prefix}kick\`, \`${prefix}ban\`, \`${prefix}case\``));
                    x.reactions.removeAll();

                }else if(collected.first().emoji.name == '3️⃣') {
                    x.edit(embed.setDescription(`\`${prefix}biblioteca\` para saber sobre los comandos.`).addField(`<:config:780163162993328138> | Configuración`, `\`${prefix}setprefix\`, \`${prefix}automoderator\`, \`${prefix}status\`, \`${prefix}logs\``));
                    x.reactions.removeAll();

                }else if(collected.first().emoji.name == '4️⃣') {
                    x.edit(embed.setDescription(`\`${prefix}biblioteca\` para saber sobre los comandos.`).addField(`<:otros:780163159553605653> | Otros`, `\`${prefix}me\`, \`${prefix}apelar\`, \`${prefix}ayuda\`, \`${prefix}queja\`, \`${prefix}reporte\`, \`${prefix}sugerencia\``));
                    x.reactions.removeAll();

                }else if(collected.first().emoji.name == '❌') {
                    x.edit(embed.setDescription(`He cancelado el comando, usa \`${prefix}biblioteca\` para saber sobre los comandos.`));
                    x.reactions.removeAll();

                }else x.reactions.removeAll();
            }).catch(() => {
                x.reactions.removeAll();
                x.edit(embed.setDescription(`No has reaccionado a nada, usa \`${prefix}biblioteca\` para saber sobre los comandos.`));
            });
        });
    }
}