const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "r!"
let bot = client

client.login("");//
/*client.on("ready", () => 
  console.log("[PANEL-INFO] Script started!"));
client.on("ready", () => {
  console.log(`${client.user.tag} ist gestartet!`);
  let statuses = [`v.1.2.7`, `Sponsorspace.de`, `Netflix` , `${client.guilds.cache.size} Servern zu` ,  `den Usern beim Chatten zu` ];

  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setStatus("online")
    client.user.setActivity(status, {
    type: "WATCHING",
      url: "https://twitch.tv/thejocraft_live"
    });
  }, 10000);
});*/

client.on('ready', () => {
	//client.user.setStatus('idle');
	//client.user.setStatus("dnd");
	client.user.setStatus('online');

	//

	let sstatuses = [
		{
			name: `RedCrafter07_LIVE hosten`,
			type: 'STREAMING',
			url: 'https://twitch.tv/redcrafter07_live'
		}
	];

	let statusess = [
		{
			name: `Wartungsarbeiten`,
			type: 'PLAYING',
			url: 'https://twitch.tv/redcrafter07_live'
		}
	];
	//let statuses = [`revox und RedCrafter07`, `tool:help`, `Fehler bitte melden!`];

	let statuses = [
		{
			name: 'r!help',
			type: 'LISTENING',
			url: 'https://twitch.tv/redcrafter07_live'
		},
		{
			name: 'Spotify',
			type: 'LISTENING',
			url: 'https://twitch.tv/redcrafter07_live'
		},
		{
			name: 'den Usern beim Chatten zu',
			type: 'WATCHING',
			url: 'https://twtch.tv/redcrafter07_live'
		},
		{
			name: ` ${client.guilds.cache.size} Servern zu`,
			type: 'WATCHING',
			url: 'https://twitch.tv/redcrafter07_live'
		},
		{
			name: `mit seinem Entwickler`,
			type: 'PLAYING',
			url: 'https://twitch.tv/redcrafter07_live'
		},
		{
			name: `Netflix`,
			type: 'STREAMING',
			url: 'https://twitch.tv/revoX_live_1'
		}
	];

	// let statuses = [`🧰 Wartungsarbeiten`];
	const statusInterval = setInterval(function() {
		let status = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setActivity(status);
	}, 100000);

	console.log('Bot started!');
});

process.on("SIGINT", () => {
  bot.channels.cache.get("750729404929278043").send("Bot ist now offline")
  process.exit(0)
});


/*if(message.content === "<@684045228205801536>")
    message.channel.send("Die Hilfesiete kann mit dem Befehl `r!help` aufgerufen werden")
})*/

client.on("message", async message => {
  
  //Bots ignorieren:
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  var args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g); 

  var command = args.shift().toLowerCase();
  
    try {
    delete require.cache[require.resolve(`./cmds/${command}.js`)];

    let commandFile = require(`./cmds/${command}.js`);
    if(!commandFile) return;
    commandFile.run(bot, message, args);
  } catch (e) {
    return;
  }
});
  
process.on("SIGINT", () => {
  bot.channels.cache.get("750729404929278043").send("Bot ist now offline")
  process.exit(0)
});
 


client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const globals = JSON.parse(fs.readFileSync("./cmds/ahaundefined.json", "utf8"));
  if (!globals[message.guild.id]) {
    globals[message.guild.id] = {
      globalchat: "700263604129366086"
    };
  }
  const msg = message;
  const globis = globals[message.guild.id].globalchat;
  if (message.channel.id === globis) {
    const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
    if (!pols[message.author.id]) {
      pols[message.author.id] = {
        rank: "spieler"
      };
    }
    const polices = pols[message.author.id].rank;
    if (pols[message.author.id].rank == "ban") return;
    if (pols[message.author.id].rank == "supporter") return;
    if (pols[message.author.id].rank == "developer") return;
    if(pols[message.author.id].rank == "moderator") return;
    if (pols[message.author.id].rank == "admin") return;
    if (pols[message.author.id].rank == "partner") return;

    const embed = new Discord.MessageEmbed();
    embed.setTitle("Nutzer: " +  message.author.tag);

   
     message.delete()
   embed.setThumbnail(message.author.avatarURL({ dynamic: true}));
    embed.setColor("RANDOM");
    embed.setDescription(message.content);
       embed.addField("Links","[Invite](https://discord.com/api/oauth2/authorize?client_id=684045228205801536&permissions=8&scope=bott) | [Support Server](https://discord.gg/DGW8pZy)" );
    embed.setFooter(`Server: ${message.guild.name} | UserID:${message.author.id}`, message.guild.iconURL({ dynamic: true }));
      embed.setTimestamp();
    client.guilds.cache.forEach(g => {
      try {
        client.channels.cache.get(globals[g.id].globalchat).send(embed);
      } catch (e) {
        return;
      }
    });
    //}
    if (!globals[message.guild.id]) {
      globals[msg.guild.id] = {
        globalchat: "700263604129366086"
      };
    }
    // } else{ return; }
  }

  if (message.channel.id === "695180176996171776") {
    message.delete();
    client.channels
      .get("695180817999069185")
      .send(message.author.tag + "\n" + message.content);
  }
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  const sett = JSON.parse(fs.readFileSync("./cmds/ahaundefined.json", "utf8"));
  if (!sett[message.guild.id]) {
    sett[message.guild.id] = {
      globalchat: "747149103317778575"
    };
  }
  const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
  if (!pols[message.author.id]) {
    pols[message.author.id] = {
      rank: "spieler"
    };
  }
  if (pols[message.author.id].rank == "ban") return;
  if (pols[message.author.id].rank == "spieler") return;
  if (pols[message.author.id].rank == "developer") return;
  if(pols[message.author.id].rank == "moderator") return;
  if (pols[message.author.id].rank == "admin") return;
  if (pols[message.author.id].rank == "partner") return;

  const globis = sett[message.guild.id].globalchat;
  if (message.channel.id === globis) {
      message.delete()
    const embed = new Discord.MessageEmbed();
      embed.setTitle("Supporter: "  + message.author.tag);
    
    embed.setThumbnail(message.author.avatarURL({ dynamic: true}));
    embed.setColor("#FFFF00");
    embed.setDescription(message.content);
      embed.addField("Links","[Invite](https://discord.com/api/oauth2/authorize?client_id=684045228205801536&permissions=8&scope=bott) | [Support Server](https://discord.gg/DGW8pZy)" );
    embed.setFooter(`Server: ${message.guild.name} | UserID:${message.author.id} `, message.guild.iconURL({ dynamic: true }));
     embed.setTimestamp();
    client.guilds.cache.forEach(g => {
      try {
        client.channels.cache.get(sett[g.id].globalchat).send(embed);
      } catch (e) {
        return;
      }
    });
  }
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  const sett = JSON.parse(fs.readFileSync("./cmds/ahaundefined.json", "utf8"));
  if (!sett[message.guild.id]) {
    sett[message.guild.id] = {
      globalchat: "700263604129366086"
    };
  }
  const globis = sett[message.guild.id].globalchat;
  if (message.channel.id === globis) {
    const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
    if (!pols[message.author.id]) {
      pols[message.author.id] = {
        rank: "spieler"
      };
    }
    if (pols[message.author.id].rank == "supporter") return;
    if (pols[message.author.id].rank == "developer") return;
    if (pols[message.author.id].rank == "admin") return;
    if(pols[message.author.id].rank == "moderator") return;
    if (pols[message.author.id].rank == "spieler") return;
    if (pols[message.author.id].rank == "partner") return;

    message.delete();
    message.channel
      .send("Du bist ... Gebannt! \nMelde dich bei **revoX#8935**")
      .then(m => m.delete(10000));
  }
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  const sett = JSON.parse(fs.readFileSync("./cmds/ahaundefined.json", "utf8"));
  if (!sett[message.guild.id]) {
    sett[message.guild.id] = {
      globalchat: "700263604129366086"
    };
  }
  const globis = sett[message.guild.id].globalchat;
  if (message.channel.id === globis) {
    const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
    if (!pols[message.author.id]) {
      pols[message.author.id] = {
        rank: "spieler"
      };
    }
    if (pols[message.author.id].rank == "ban") return;
    if (pols[message.author.id].rank == "supporter") return;
    if (pols[message.author.id].rank == "admin") return;
    if(pols[message.author.id].rank == "moderator") return;
    if (pols[message.author.id].rank == "spieler") return;
    if (pols[message.author.id].rank == "developer") return;

    const embed = new Discord.MessageEmbed();
      message.delete()
     embed.setTitle("Partner:" + message.author.tag);
   
      embed.setThumbnail(message.author.avatarURL({ dynamic: true}));
    embed.setColor("RED");
   embed.setDescription(message.content);
     embed.addField("Links","[Invite](https://discord.com/api/oauth2/authorize?client_id=684045228205801536&permissions=8&scope=bott) | [Support Server](https://discord.gg/DGW8pZy)" );
    embed.setFooter(`Server: ${message.guild.name} | UserID:${message.author.id} `, message.guild.iconURL({ dynamic: true }));
     embed.setTimestamp();
    client.guilds.cache.forEach(g => {
      try {
        client.channels.get(sett[g.id].globalchat).send(embed);
      } catch (e) {
        return;
      }
    });
  }
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  const sett = JSON.parse(fs.readFileSync("./cmds/ahaundefined.json", "utf8"));
  if (!sett[message.guild.id]) {
    sett[message.guild.id] = {
      globalchat: "700263604129366086"
    };
  }
  const globis = sett[message.guild.id].globalchat;
  if (message.channel.id === globis) {
    const pols = JSON.parse(fs.readFileSync("./ranks.json", "utf8"));
    if (!pols[message.author.id]) {
      pols[message.author.id] = {
        rank: "spieler"
      };
    }
    if (pols[message.author.id].rank == "ban") return;
    if (pols[message.author.id].rank == "supporter") return;
    if (pols[message.author.id].rank == "admin") return;
    if(pols[message.author.id].rank == "moderator") return;
    if (pols[message.author.id].rank == "spieler") return;
    if (pols[message.author.id].rank == "partner") return;

  const embed = new Discord.MessageEmbed();
    message.delete();
    embed.setTitle("Owner: " + message.author.tag );
      
    
    embed.setThumbnail(message.author.avatarURL({ dynamic: true}));
    embed.setColor("BLUE");
    embed.setDescription(message.content );
    embed.addField("Links","[Invite](https://discord.com/api/oauth2/authorize?client_id=684045228205801536&permissions=8&scope=bott) | [Support Server](https://discord.gg/DGW8pZy)" );
    embed.setFooter(`Server: ${message.guild.name} | UserID:${message.author.id}`, message.guild.iconURL({ dynamic: true }));
    embed.setTimestamp();
    client.guilds.cache.forEach(g => {
      try {
        client.channels.cache.get(sett[g.id].globalchat).send(embed);
      } catch (e) {
        return;
      }
    });
  }
})

require("http")
  .createServer(function(request, response) {
    response.end("revoX Bot Made by revoX Development!");
  })
  .listen(process.env.PORT);
