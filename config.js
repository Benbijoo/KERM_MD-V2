//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/47567596 , https://wa.me/47567596";
global.sudo = process.env.SUDO || "47567596";
global.owner = process.env.OWNER_NUMBER || "47567596";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 2;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUg4RVoxQ1QwZmNRUEJQY2lnUUFWSVQwRDA1TllkNFF4eHhKR3pZNTQxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2JaSkZpRW1Od094c1hjbkk4WkwxZy9NVVRqaFliWVpWQTd4d3lrbUl6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRFVnVVU0NmJhakhoeWg1QUhZMjliRDNGeUViK3JOZklXN21nQTN0UUdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrWkRTTWd0akxrcUgzelB4NXFZUHFnQ2dOQmJXRkV3UXR0U29Ha0ZiWEhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQQ2FJWjc4ai9jQm05Qm84V1hCcTkzK05uYlgyMFNqVENDRG16bnVrMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1yQ3RRdjFXOUNxSWZMQlIyTUhBdDF4MUYvVytHUzQ0MTVNWTk1Q2tMVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEoveVVkc0RyN1psaU8xbTE1aU01RHdKa2VPWXM5MGJyT21HRmFnb2VVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3hicUUxT0dSckNHUmNodXByaVVoMmxaVS9yOUFCaHpHejlFNzFPakJYVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAzMUY4bUNKV1JQMDJ4SC9Bb0pyTHBhYnV6aTVrTTltVVYvdnRTK0xIeEc3cUR4WFl5emIvNUFsdDFxMGFOR1ZzMmpPMHVXM2l0VTQrYVRvM0NUYUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAsImFkdlNlY3JldEtleSI6InkwekRMdzYyY3ppbjNUL1lwc2tKbHZoMUV0alB4SFVGd0RoVFM3cVlGWkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDc1Njc1OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0YxMjU0RjcxMDlGNTU0QTdDNzRGNEUzMzQ3MUU1NDMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjIwNTkxOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSUs4MG51MVBRTVM3SUNFSXFhaEZYdyIsInBob25lSWQiOiIzMmFjMmJkMi0wOGI5LTRmMjktYTQwMS04MjJlNzJjNTYzNWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkV6eWZlQlgra0cxUy9vSXpidU9rYkkvRGU4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN2RFlpRHkzc01BRVpsNEVsN3lNMDdxZEUyRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxU1Y2V01SWCIsIm1lIjp7ImlkIjoiNTA5NDc1Njc1OTY6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifkIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BlSm5MVUVFTStmajdjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkR4Y1VqcHNmVlI5dFZzWVFDbS9zbGxkSjducjdYZ2E3aU5SYStxcXNDZ3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldKb3F3bzdtS2ZmRWNTR201YlZSaU92dXlVbFdXVlRWTmw2YUpVT2RTMjlHRzlqdXBwOC8wVUhyVXJYVHkzTXZwUzd4d1lCQko3aGQveENFazJ5MkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzR2grQlhaUmhyTG9VNlhwOE90UTI2ZFNxdjM5cEQ5OHN6emcyS2gzNFlRQjdHaUhVSnZrNW1ONnZaMFh4clVvY1lMUFdnTW9qSURKSWZJT012ME9Edz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ3NTY3NTk2OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE4WEZJNmJIMVVmYlZiR0VBcHY3SlpYU2U1NisxNEd1NGpVV3ZxcXJBb00ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYyMDU5MTUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUJ1In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "•",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF copy ninja alpha",
  author: process.env.PACK_AUTHER || "alpha",
  packname: process.env.PACK_NAME || "alpha-MD-V2",
  botname: process.env.BOT_NAME || "alpha-MD-V2",
  ownername: process.env.OWNER_NAME || "alpha",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
