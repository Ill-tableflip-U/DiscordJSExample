

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

client.on(Events.InteractionCreate, async interaction => {  //on interaction (chat slash command detection
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'demo') {   //if the command name is this, 
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
		await interaction.reply({ content: 'hi', components: [row1] });  //thenn send this
	}   
});


client.on('guildMemberRemove', async member => { //detects when a member leaves

});


client.on('messageCreate', async message => { //new message is sent in any channel the bot has access to

	
	//example of detecting if a message includes a keyword, and if so, reacting to it with an emoji
	let lmessage = message.content.toLowerCase()
if (lmessage.includes("demo")){
	message.react("ID of emoji here, as string")
    
    }


});

client.on('guildCreate', guild => { //when bot is added to a new server
  
});



let newpostres = ["message one for a new thread post", "these messages are randomly selected!"]


client.on('threadCreate', async (thread) => { // sends a randomly selected message to a thread when a new one is created!
try{
	if (thread.type === ChannelType.GuildPublicThread){
		if (thread.parentId === "ID of the parent channel"){
		let random = Number(Math.floor(Math.random()*newpostres.length));
		client.channels.cache.get(thread.id).send(newpostres[random])
		}
	} 
}catch{console.log("failed to send initial message in the new thread")}
});





client.on ('guildMemberAdd', async member => {   //what to do when a new member joins
  let memberCount = member.guild.memberCount-6;//this is an example of sending a welcome message to a channel when a new user joins
  var lastMemberCountChar = memberCount.toString().charAt(memberCount.toString().length - 1);
  var numberSuffix = "";
  if (lastMemberCountChar === "1") {
    numberSuffix = "st";
  } else if (lastMemberCountChar === "2") {
    numberSuffix = "nd";
  } else if (lastMemberCountChar === "3") {
    numberSuffix = "rd";
  } else {
    numberSuffix = "th";
  }

  if (member === "1014062064194551899") {
    return;
  }

  client.channels.cache.get('123').send('Welcome, <@'+member+'>!");
});




//ACTIONS
// leave server     leaveGuild(guild);
// example of sending a message to a specific channel:       client.channels.cache.get("12345").send("Hello world! ");

//LOGGING IN
console.log("attempting login")
client.login(token) 
console.log("login")
