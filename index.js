import "dotenv/config";
import { Client, GatewayIntentBits } from "discord.js";


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,

  ],
});

client.on('messageCreate',(message)=>{
    if(message.author.bot){
        return;
    }else{
        message.reply(`hello ${message.author.displayName}! im nika.`)
    }

    console.log(`${message.author.tag}: ${message.content}`);
})



client.login(process.env.NIKA_TOKEN);