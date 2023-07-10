import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
//let vn = './media/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `*╭═✦͜͡ৡৢ╡♛UNSC♛╞ৡৢ͜͡✦═*
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟*      
║◄🍁┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🍁►
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈
║┊:      *Menu Herramientas* 
║┊:        ${taguser}
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈
║◄🍁┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🍁►
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟*      
*╰═✦͜͡ৡৢ╡♛UNSC♛╞ৡৢ͜͡✦═*

╭────────────────╮
*⊱✦•HERRAMIENTAS ⚙️*
╰────────────────╯
■█⚙️█■▱▰▱▰▱█⚙️█■
▋┋ ${usedPrefix}ia <texto>
▋┋ ${usedPrefix}ia2 <texto>
▋┋ ${usedPrefix}dall-e <texto>
▋┋ ${usedPrefix}spamwa <numero|texto|cantidad>
▋┋ ${usedPrefix}tamaño <cantidad> <imagen / video>
▋┋ ${usedPrefix}readviewonce <imagen / video>
▋┋ ${usedPrefix}clima <país> <ciudad>
▋┋ ${usedPrefix}encuesta <texto1|texto2...>
▋┋ ${usedPrefix}afk <motivo>
▋┋ ${usedPrefix}ocr <responde a imagen>
▋┋ ${usedPrefix}hd <responde a imagen>
▋┋ ${usedPrefix}acortar <enlace / link / url>
▋┋ ${usedPrefix}calc <operacion math>
▋┋ ${usedPrefix}del <mensaje>
▋┋ ${usedPrefix}whatmusic <audio>
▋┋ ${usedPrefix}readqr <imagen (QR)>
▋┋ ${usedPrefix}qrcode <texto>
▋┋ ${usedPrefix}readmore <texto1| texto2>
▋┋ ${usedPrefix}styletext <texto>
▋┋ ${usedPrefix}traducir <texto>
▋┋ ${usedPrefix}nowa <numero>
▋┋ ${usedPrefix}covid <pais>
▋┋ ${usedPrefix}horario
■█⚙️█■▱▰▱▰▱█⚙️█■
`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(all|todo|todos)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
