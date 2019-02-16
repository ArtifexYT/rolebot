const Discord = require("discord.js");
const client = new Discord.Client();
const auth = require("./auth.js");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}.`);
});

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(auth.prefix) !== 0) return;
    
  const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === "ping") {
    const embed = new Discord.RichEmbed()
    embed.setTitle("Pong!");
    embed.addField("Bot Latency", `${Date.now() - message.createdTimestamp} ms`);
    embed.addField("API Latency", `${Math.round(client.ping) ms`);
    embed.addField("Shard Latency", `${Math.round(client.ping) ms`);
    embed.setColor("BLACK");
    message.channel.send({embed});
  }
  
  if (command === "stats") {
    const shards {
      id: 1,
      total: 1
    };
    
    const embed = new Discord.RichEmbed()
    embed.addField("Username", `${client.user.username}#${client.user.discriminator}`);
    embed.addField("ID", `${client.user.id}`);
    embed.addField("Owner", `Remedy#7447`);
    embed.addField("Prefix", `${auth.prefix}`);
    embed.addField("Memory Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`);
    embed.addField("Uptime", `*Unable to fetch...*`);
    embed.addField("Shard", `${shards.id}/${shards.total}`);
    embed.setColor("BLACK");
    message.channel.send({embed});
  }
  
  if (command === "rank") {
    if (args[0] === "pc") {
      const role = message.guild.roles.find(r => r.name === "PC");
      if (!role) return;
      message.author.addRole(role);
      return message.reply("Successfully awarded the role.");
    }
    
    if (args[0] === "xbox") {
      const role = message.guild.roles.find(r => r.name === "Xbox");
      if (!role) return;
      message.author.addRole(role);
      return message.reply("Successfully awarded the role.");
    }
    
    if (args[0] === "ps4") {
      const role = message.guild.roles.find(r => r.name === "PS4");
      if (!role) return;
      message.author.addRole(role);
      return message.reply("Successfully awarded the role.");
    }
    
    if (args[0] === "switch") {
      const role = message.guild.roles.find(r => r.name === "Switch");
      if (!role) return;
      message.author.addRole(role);
      return message.reply("Successfully awarded the role.");
    }
    
    if (args[0] === "mobile") {
      const role = message.guild.roles.find(r => r.name === "Mobile")
      if (!role) return;
      message.author.addRole(role);
      return message.reply("Successfully awarded the role.");
    } else {
      return message.channel.send("`🚫` | Invalid role.");
    }
  }
});

client.login(auth.token);

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 10000);
