const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	//SETTING BOT PROPERTIES ETC
		.setName('demo')
		.setDescription('An introduction to the bot, and instructions to get you going'),
	async execute(interaction) {
		//WHAT TO DO WHEN THE COMMAND IS ACTIVATED, CAN BE LEFT BLANK
		await interaction.reply("This bot was designed by I will get tableflipped#0421 (with assistance from walmart bag) for PC help and debugging purposes. /PChelp will initialise the help console and you can select your issue and recieve the neccessary steps to fix it. I hope this bot helps, so ENJOY!")
	},
};
