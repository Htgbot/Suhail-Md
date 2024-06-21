const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/HTGBOT";
global.gurl  =process.env.GURL  || "https://wa.me/+94706918599?text=GROUP%20BOT";
global.website=process.env.GURL || "https://wa.me/+94706918599?text=GROUP%20BOT" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Htgbot/OWNER-FOR-BOT/main/PosterMaker_20072022_184127.png?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94706918599";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_10_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieEZGOGp0eit4dkxoZ25GazQxMDFyNUtQdGl6Rm92Slg0LzcxZXlGOVMyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSXZLREh3UE1SMVNyNVA0al9qMERQQVwiLFxuICBcInBob25lSWRcIjogXCI0YmViYjI2Yi1jYWQ3LTQwMjAtYTkzZi1mNGU3MWE4MDI1OWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNzMsXG4gICAgICAyMjksXG4gICAgICAxODYsXG4gICAgICAxODgsXG4gICAgICAxMDQsXG4gICAgICAxNTcsXG4gICAgICA0OSxcbiAgICAgIDEzNyxcbiAgICAgIDY1LFxuICAgICAgMjQ5LFxuICAgICAgMTQ0LFxuICAgICAgMjMxLFxuICAgICAgMTUzLFxuICAgICAgMTkwLFxuICAgICAgMTUyLFxuICAgICAgMjE0LFxuICAgICAgNjYsXG4gICAgICAxNjQsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDE3NyxcbiAgICAgIDEwMSxcbiAgICAgIDkyLFxuICAgICAgMTI5LFxuICAgICAgMjA0LFxuICAgICAgMTQ5LFxuICAgICAgMjQxLFxuICAgICAgMjM2LFxuICAgICAgODQsXG4gICAgICAyNDQsXG4gICAgICAxOTIsXG4gICAgICAyMjQsXG4gICAgICAxMDYsXG4gICAgICA1NSxcbiAgICAgIDM3LFxuICAgICAgMTczLFxuICAgICAgMTMxLFxuICAgICAgMTUwLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMemF5cXNFRU1EYjFiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklDL3hCWWRiUlk3VTRBako2ZzhTQ0Z1dElPdFpuK3Bjd1VlN0lqdHdoV289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYU43QWswWm1YNmhTVXhUNmNIc3ZRdkVVUlRnKzJlR0UxMHNjUEFzY0c0dEZxWHg0RkFGSmFub3Z6ejZUZVVkQzgrSlA0SE5IRUlwQ3A1am9qanJVRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQ0Z0ZUk5a3VKdTNvdW9LdmROS2FadElocFhQaUZCWXdEVkQvMnFnN2N6eVE2TFpHcDh6SGxxa2tIMnhyQVRzSE1POTFDd1pHOTgzMzNHNWFMZ1hpQ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTQ3NTY1OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzAyMzEyMjIxMTYzOTk6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc1NDc1NjU5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODk3MTg0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU41TFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjVMLmpzb24iOiAie1wia2V5RGF0YVwiOlwibTFGVkVtaGdMcWVLdTF6NkRTQVROTEdodWd6Z2RIc3VkYW9iczhvVG8vYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTY1MTQzMzU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HTG BOT",
  ownername:process.env.OWNER_NAME|| "HTG GAMER YT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
