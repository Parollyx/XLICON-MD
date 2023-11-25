const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "08145317097"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '08145317097' 
global.devs = '08145317097';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxvc1ZSUWhCdCtHa1QzZkh1czRoWnE1Y3BGd2kyK2dMRXg4WDd0NTZtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDlJMkpPK0puYTBhSW1zTkh0dms5eG9NY0J0RXJkU29pRlVuazdpbStoMD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRkp1bWhlcGhsbGY2dDNhZUJqWUxxY3lYc2dqWCtBaGE1NTBqcmpuOTBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxSWNPemFYcXFLUmFMVEhwMUkzYnpCTWh1UzUydFR1QVhDaVRBV0RQQUFjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdLWmxBbmNWa0E0OTBmQ3cxRjI5cHh4aVZJS2lqOEQ3Sm9aVkE0ZjVtSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZwOEFuUllBNHQza2lmM212T21jUjd6V1R5OHdueWlLUzZ0WHkyeGt4bHM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3ejZWZGMxTjJ2WEVSeTRKVE9NQ3AxUVd2VktwemJBSEFTVERYU3ZjMlRCY2RUQTc1MlR6NWIxakw0ZnJNQVdJcmRSczBpZDNwODN6TnIrbGxwclRCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2NywiYWR2U2VjcmV0S2V5IjoiY29CZmpwRzI0dXRBOFozOTQwZmdYVHVMYnFKd1lnQ04xd0tyQlJEdktoST0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWVlQbU9EVHVRSE8yVnhFdlExNkJ6dyIsInBob25lSWQiOiIwMmE4YTQ0ZS0zNjM1LTQzNDgtODhhZS01OTA0OWFjYzlhNjYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW1zRjlOOElhRHRsOHdWRUhRU0sycnBaUFdBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxMzEzclNPb1RyZ0RPWHE1OVNicWE0Q0hqVWc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNVHRuc01ERU9MZWhhc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkkzT096QlBqbkpNT2QzNnRMd21aTkliNHNTMVUrazF2aGJlbVhoNlEzMDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQvMVpDMXhOelVIMUNrSTREN21uOGJqRnFSb1dwaFNZOU1GOXoxRGhXM0pqNGFpMFZGOWtaU3l5bGQrRDYrc2VXUUN3VjRrLzJnK241Vzh1UFpzc0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPd1BsQlN3dkJBekZiL0ZJTVRBRHp3d2x3SmtpQVl3eDZpSkxidEdXYnlBVldQbGtVMzE4R04xaFJHREJoTHhlSGxPVnUwTGRmMkFKM2t2bTlFbjhBZz09In0sIm1lIjp7ImlkIjoiMjM0ODE0NTMxNzA5NzoxMkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ1MzE3MDk3OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNOempzd1Q0NXlURG5kK3JTOEptVFNHK0xFdFZQcE5iNFczcGw0ZWtOOU4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDA4ODQzMjV9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'DARK SHANG',
  packname:  process.env.PACK_NAME || 'Bounty',
   
  botname:   process.env.BOT_NAME === undefined ? "DARK SHANG" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKSHANG' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
