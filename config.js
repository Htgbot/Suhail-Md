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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_33_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICA2NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY3LFxuICAgICAgICA4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDMzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk3LFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNOUlFsUDRyeHkrc2loOGk0d3hDN1VhZVJ4RjdRZm9EKzFLbzFuSVZhR3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzU0NzU2NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg4NEY0NDM4MzBDQ0M3MjAyNjM1NzA5MTE5QTJCQ0I4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk2OTU4N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzc1NDc1NjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2N0UwMEZFQjFDRUU5REE3NkM3RTM3NjI5MEFCNEIyOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5Njk1OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3NTQ3NTY1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkE1OEQyMTQ5NTVFQTFBMzQ3QTczREY1Mzg3OTQ1ODBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTY5NTkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzU0NzU2NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ4QTU1NEQ3QzU1RERERjI3OUI1MEMyODYzODEwMEJGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODk2OTU5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsUWRzdUNRd1M5bUZ1QVBsN2dGd1FBXCIsXG4gIFwicGhvbmVJZFwiOiBcImY0Nzc0MTg1LWI5NjktNDUyYS04OTNlLTIzMjkxOTUxNjg1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAzLFxuICAgICAgMTUzLFxuICAgICAgMTkwLFxuICAgICAgMTA3LFxuICAgICAgMjE1LFxuICAgICAgMTc1LFxuICAgICAgMTIxLFxuICAgICAgMTYxLFxuICAgICAgMjYsXG4gICAgICAxMTgsXG4gICAgICAxNzYsXG4gICAgICAxNjMsXG4gICAgICAxNjUsXG4gICAgICAyMTYsXG4gICAgICAxODIsXG4gICAgICAyNTEsXG4gICAgICAxMjIsXG4gICAgICAxNjcsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICAxMjMsXG4gICAgICA3MSxcbiAgICAgIDM1LFxuICAgICAgMTE3LFxuICAgICAgMjA3LFxuICAgICAgMzQsXG4gICAgICA0NSxcbiAgICAgIDEzMCxcbiAgICAgIDczLFxuICAgICAgMTgzLFxuICAgICAgMTc4LFxuICAgICAgMTc3LFxuICAgICAgMTA1LFxuICAgICAgMTAxLFxuICAgICAgMjUwLFxuICAgICAgNDAsXG4gICAgICAxOTQsXG4gICAgICAxNjUsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0gzWjQ4NTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzc1NDc1NjU5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MDIzMTIyMjExNjM5OToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2YXlxc0VFTzdKMWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSUMveEJZZGJSWTdVNEFqSjZnOFNDRnV0SU90Wm4rcGN3VWU3SWp0d2hXbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJqQk5NMyt4ZVQwUk1EZ1R0cmNrOU92aEF4RDJCSmlGa0pSZjl3UUlVclBzdGRXMFJzVFNWNExlWnRzYmpQZzE0RE44SC9KYkNwclg3Y1lXUnBTWEdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwaWszbjlocDNwcU91bUE5K3lkaVJPekZnZHpTVFNtdHNNQ3V2M2I4OGZyakhpZnN3dFJxeG82YUtyamZ6aFVkTnA3S291TzBnMm5GWVA5aEt3NkVDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTQ3NTY1OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5Njk1ODVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
