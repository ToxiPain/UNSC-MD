import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*┊↳🎖️┊ 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐲 𝐜𝐚𝐦𝐛𝐢𝐚𝐥𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*┊↳🎖️┊ 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐲 𝐜𝐚𝐦𝐛𝐢𝐚𝐥𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞*'
let img = await m.quoted.download()
if (!img) throw '*┊↳🎖️┊ 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐲 𝐜𝐚𝐦𝐛𝐢𝐚𝐥𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*┊↳🎖️┊ 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐲 𝐜𝐚𝐦𝐛𝐢𝐚𝐥𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|robar|wm$/i
export default handler
