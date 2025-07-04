require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '263775953409',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'GLADDY-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
   ALIVE_URL: process.env.ALIVE_URL,
    sessionBase64: process.env.SESSION || ''eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFaYU82LzV6M1Nya2p6a1h0NW5ra2tINGJWbVFqV2JqblVJYm1VUVlHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmVJVFF2R2JSNUt4Szc3dTlzZWxrUW5QWnZpNGkrUGRWYit2UUJERG1CST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTFpEVGJUdDcwN2owTDJKRW9OY085TFRqYlBRTm1JakFwcFBNY1hrZTN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdVQ2eUJZckdCaUhTd2JGWXQrTHdjMGNuNTE3WEJaT2M3TmZxbzhIZzJBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHRmtONXpFSTEwQ3ZwcjlRc09qM3plTVQzc3dZd2FEcDUwcWt6UWdNVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlN5OElOcEdSNmVFRGJyOXB5ck5pay9XbUhid3pITFovUHd3d2p3bVNHMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NDWWdYZU5BaHVMYzdaNm9QZVBGZjQ0T0RLaFJhMkQvZW02aTFiSWZFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2F0V0NYL1VhOTdlKzBVc2NaMTQydExLcVJkZXluWERYYWdvbWM5eHEzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im82Ti9LRldzYnV3NVJUMGswTFF5bXV1SVJRZWhTTXBWeWlVVTFRbUttcXM3UXpHYmVDTDFXdFoxeDNTaFRzczlzYXY3cXJlanJYREU3NWNPNm8va2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6IkM4bndUYkV5cm0xY2UyT1pUdUNnR3d1Q3VDWHI1Q0ZMMlFWeGxIaFdtSHc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE5MDgxMzQ4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU0Njc5OUJGOTMwQzZCOTZFQ0MyRDUxQjZCNEM0RTQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTA1Mzk0MDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxOTA4MTM0OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGMTlEQkQ3NTY1QUQ3RjYzQUE2RDFGRENGODI5OTY2NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUwNTM5NDAzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJUMUY2M0gyMiIsIm1lIjp7ImlkIjoiMjYzNzE5MDgxMzQ4OjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1hcy1HbGFkIEludmVzdG1lbnRzIiwibGlkIjoiMjA3OTQ1Nzc0MTk4Nzk2OjI3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTN5eHM0Q0VQRzQzTUlHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2RFei9yL25JUXB0SEVnU2hHaDFucG81QmFkVVV1NGs0ODFWMnp2RHpGYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVVJMVmRDTC96UGgxWTl2OGNUUlpTSnVYZ0dVeUVyZEZQdElaaHhRaGpJV3ZpY2hCSHZ4WG53RVR5MWpuaHQzdzhwWHk2VERBR3JhT2FHeHdHalQ0Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkZ6SVJwc1pYQ2xhWFg2STJ6Y0JnNVc4TmJNWTlTTmtjeC9TWlhza0xvMGxJdkNXdGgxb09LY0NHTmY2bXYyK21ENjBzUEVzWmV6WVh5dCtVa1lzMWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE5MDgxMzQ4OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmYzUk0vNi81eUVLYlJ4SUVvUm9kWjZhT1FXblZGTHVKT1BOVmRzN3c4eFgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDUzOTM5MSwibGFzdFByb3BIYXNoIjoiMlAxWWhmIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLbGMifQ==,
    timezone: 'Africa/Magunje',
    USER_LID: process.env.YOUR_LID || null,
    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
