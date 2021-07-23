module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "m", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODY3OTY3Mzc3OTIzNTE0NDE4.YPoznA._S526Xdsfq7w_6h6t7u0SY98UVs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "867967377923514418", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "Hgh-DyF1s4xgYt8Tibr5u7qHzU3f0XkW", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Made by BATTL3", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "192.168.1.1",
    port: 4500,
    pass: "Gopal123m", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "india.lavalink.org",
    port: 2333,
    pass: "youshallnotpass", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "9f44a97c3cb349eba417cc0f14ee38a7", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "23a2dc724ce44c4fa841c1871a01494f", //Spotify Client Secret
  },
};
