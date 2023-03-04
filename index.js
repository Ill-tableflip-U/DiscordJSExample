

//REQUIRING IMPORTANT FILES
const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
//SETTING INTENTS OR PERMISSIONS IDK
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const Discord = require('discord.js')

client.commands = new Collection();


console.log("Startup ok")



//DETECTING WHEN THE BUTTON IS PRESSED (USING THE CUSTOMID)

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isButton) return;

	if (interaction.customId==="button") {
		console.log("button pressed")
		
	}
});


//SETTING UP THE SETECTION FOR THE COMMAND ACTIVATION

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'pchelp') {
		console.log(interaction.user.id)

		//MAKING THE ACTIONROW THINGY TO HOLD THE BUTTON OBJECTS
		const row1 = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('button')
					.setLabel('demo button')
					.setStyle(ButtonStyle.Secondary),
				new ButtonBuilder()
					.setCustomId('button2')
					.setLabel('demo button2')
					.setStyle(ButtonStyle.Secondary),
				
			);
		//REPLYING WITH THE WORD HI AND WITH ALL THE BUTTONS
		await interaction.reply({ content: 'hi', components: [row1] });
	}
});
//LOGGING IN
console.log("attempting login")
client.login(token) 
console.log("login")
