import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";
let handler = async (m, { conn, usedPrefix, command }) => {
conn.unblur_high = conn.unblur_high ? conn.unblur_high : {}
if (m.sender in conn.unblur_high) throw "*┊↳🎖️┊ 𝐇𝐚𝐲 𝐮𝐧 𝐩𝐞𝐝𝐢𝐝𝐨 𝐩𝐞𝐧𝐝𝐢𝐞𝐧𝐭𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐧𝐨 𝐬𝐚𝐭𝐮𝐫𝐞𝐬 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐬𝐞 𝐩𝐮𝐞𝐝𝐚 𝐞𝐧𝐯𝐢𝐚𝐫*"
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!mime) throw `*┊↳🎖️┊ 𝐄𝐧𝐯𝐢𝐚 𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${usedPrefix + command}*`
if (!/image\/(jpe?g|png)/.test(mime)) throw `*┊↳🎖️┊ 𝐄𝐥 𝐟𝐨𝐫𝐦𝐚𝐭𝐨 𝐝𝐞𝐥 𝐚𝐫𝐜𝐡𝐢𝐯𝐨: (${mime}) 𝐧𝐨 𝐞𝐬 𝐜𝐨𝐦𝐩𝐚𝐭𝐢𝐛𝐥𝐞, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐧𝐯𝐢𝐚 𝐮𝐧𝐚 𝐟𝐨𝐭𝐨/𝐯𝐢𝐝𝐞𝐨*`
else conn.unblur_high[m.sender] = true
m.reply('*┊↳🎖️┊ 𝐏𝐫𝐨𝐜𝐞𝐬𝐚𝐧𝐝𝐨 𝐢𝐦𝐚𝐠𝐞𝐧... 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨, 𝐞𝐬𝐭𝐞 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 𝐬𝐮𝐞𝐥𝐞 𝐭𝐚𝐫𝐝𝐚𝐫*')
let img = await q.download?.()
let upld = await uploadImage(img)
let img2
try {
img2 = await fetch(`https://api.itsrose.site/image/unblur?url=${upld}&apikey=${global.itsrose}`)
let image = await img2.arrayBuffer()
conn.sendFile(m.chat, image, null, '', m)
} catch {
m.reply("*┊↳🎖️┊ 𝐄𝐫𝐫𝐨𝐫, 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫𝐥𝐨 𝐥𝐮𝐞𝐠𝐨...*");
} finally {
delete conn.unblur_high[m.sender]
}}
handler.help = ["remini", "hd", "enhance"]
handler.tags = ["ai", "tools"]
handler.command = ["remini", "hd", "enhance"]
export default handler
