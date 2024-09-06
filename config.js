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
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "50947567596";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUt3V0RSZWNCY0xsazlBZlNLRmdaRTFLZUVyTkxtcjMyMXpqR1ZxNFkwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDZIbFZXOUc1RWp0VTNjRkRRcHBpdDB0TVlURmhtU2JGUC9vZXpEeVVSdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UDZaNS9aaWdxVks2c3V0bS9VL1hsOHlnMnBSSkU2N0pzbzg3clJmTTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6OEFnUDdsRjRLdG9icU04UXZjT1J1dTR1dFkxMUNjVkVsdkFOYkc1NUNrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBZVM4Zk43amdjMzRWR1o5Y0drVjFVZGE0ZExxL2poWTV6djdESWxERVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIZEFPYjJCNFRVN2FNMmZ6NWo1SlYyRnNHL1MxNytNWGN3QWlaOURCeXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhMdzFzdnkyZDNsbGJZcUtWQ1dGbW9kUkhtcFF4dHFYQi9hdVMzK1pubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVdibENuR0diQldqb3FtclpvQTZRTmhZdXN5L1ZyU2k2R0JTUjBjSUkyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhhRCtOM1NMcnpyL2FhaGt6Rm1HZDhKVWJmL0s2dDFoTHlYZFFHS1E4TTJKSHJTREZ0a2dKNm1jUEZGdnBlcEM2Ly8zbGVhOEFkQmhuSW9vM2U0UUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJWVDNpTGI4dVFCajJobnVqcHVaQy9lQWh0ZHFFZVY5ZVZoZUFxRVBtN2xVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQ3NTY3NTk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVBRjFFNjc2MzE2NEU1NUYzNTg1Q0Q2MkM1ODg4MEI4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU2Mzk4NTF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1EdTN6TlVOUjBLdE1EOXVfTEtjWVEiLCJwaG9uZUlkIjoiM2JiZDk2YWUtYmFhZi00NzZhLWJjZTMtYjJiNzAxYTcyMWY5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGYnhjc0dnYVlDV2ZxNDRwL0g1L21QOG9paz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyUTNwWlpaQ1I0Q0J0RlBScXN6Ty9UZEp1UVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREtZUzM2NUUiLCJtZSI6eyJpZCI6IjUwOTQ3NTY3NTk2OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6In5CIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQT0puTFVFRUp6WjdMWUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJEeGNVanBzZlZSOXRWc1lRQ20vc2xsZEo3bnI3WGdhN2lOUmErcXFzQ2d3PSIsImFjY291bnRTaWduYXR1cmUiOiJTdnpFazdmVHpsUVJjdkx0a0VidEdFSGdlNTVQays0TlM2WTUwVjlKRkwyZENBVjY0ZTZCU3dGUFJMdDVSeUVrMmcwZm5zZVBjRVpHRUUzUDA1bEtDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFdNRUIzSjFFZkhRZ3kwcW1nUHRwTllhS1Z6b0Rtc3Q0ZDJEWEJlMXVsY3QxYkI2bkdPYXpqMkRnNFZoYmFJcElhNU5IbkVDK2YxZVc5WGJ1Zzl5QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0NzU2NzU5NjoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJROFhGSTZiSDFVZmJWYkdFQXB2N0paWFNlNTYrMTRHdTRqVVd2cXFyQW9NIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NjM5ODQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVsNiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
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
