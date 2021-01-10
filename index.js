const discord = require('discord.js');
const { prefix, token, whitelist } = require('./config.json');
const client = new discord.Client();

client.on('ready', () => {
	console.log(`Ready. Connected as ${client.user.tag}`);
})

client.on('message', async (message) => {
	if (!message.member.hasPermission('ADMINISTRATOR') && !whitelist.includes(message.author.id))
		return;
	if (!message.content.toLowerCase().startsWith(prefix))
		return

	const content = message.content.slice(prefix.length);
	const args = content.split(' ').filter(arg => arg.length > 0);
	const command = args.shift().toLowerCase();

	if (!message.guild.me.hasPermission('MANAGE_EMOJIS'))
		return message.channel.send("J'ai besoin de la permission `Manage Emojis` pour faire mon travail ici.");

	switch (command) {
		case 'create': {
			const image = message.attachments.first() ? message.attachments.first().url : args.shift();
			const name = args.shift();
			const roles = args;
			try {
				const emoji = await message.guild.emojis.create(image, name, { roles });
				console.log(`Emote ${emoji.name} créée dans ${message.guild.name}`);
				message.channel.send(`Travail terminé. ${args.length == 0 ? 'Tous les rôles peuvent utiliser' : `${args.length} rôle${args.length > 1 ? 's peuvent' : ' peut'} utiliser`} ${emoji.toString()}`);
			} catch (err) {
				message.channel.send(`Semblerait que y'a une erreur. 100% c'est toi qui a fait de la merde:\n\`\`\`\n${err.message}\`\`\``);
				return;
			}
			break;
		}
		case 'edit': {
			const match = /^<a?:(\w+):(\d+)>$/.exec(args.shift());
			if (!match || match.length < 3)
				return message.channel.send(`Donne une emote stp.`);
			const id = match[2];
			const emoji = message.guild.emojis.resolve(id);
			if (!emoji)
				return message.channel.send('C\'est pas une bonne emote que tu me donnes là.');
			try {
				await emoji.roles.set(args);
				console.log(`Emote ${emoji.name} modifiée dans ${message.guild.name}`);
				message.channel.send(`Travail terminé. ${args.length == 0 ? 'Tous les rôles peuvent utiliser' : `${args.length} rôle${args.length > 1 ? 's peuvent' : ' peut'} utiliser`} l'emote.`);
			} catch (err) {
				message.channel.send(`Semblerait que y'a une erreur. 100% c'est toi qui a fait de la merde:\n\`\`\`\n${err.message}\`\`\``);
				return;
			}
			break;
		}
	}


});

client.login(token);