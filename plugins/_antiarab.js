let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antiArab2 && !isAdmin && !isOwner && !isROwner && bot.restrict) {
		
if (m.sender.startsWith('212' || '212')) {
m.reply(`*┊↳🎖️┊ 𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫á 𝐭𝐨𝐝𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐬𝐨𝐬𝐩𝐞𝐜𝐡𝐨𝐬𝐨 𝐨 𝐚𝐫𝐚𝐛𝐞 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦 𝐲 𝐦𝐚𝐧𝐭𝐞𝐧𝐞𝐫 𝐥𝐚 𝐬𝐞𝐠𝐮𝐫𝐢𝐝𝐚𝐝 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨!*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}
   
if (m.sender.startsWith('265' || '265')) {
m.reply(`*┊↳🎖️┊ 𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫á 𝐭𝐨𝐝𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐬𝐨𝐬𝐩𝐞𝐜𝐡𝐨𝐬𝐨 𝐨 𝐚𝐫𝐚𝐛𝐞 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦 𝐲 𝐦𝐚𝐧𝐭𝐞𝐧𝐞𝐫 𝐥𝐚 𝐬𝐞𝐠𝐮𝐫𝐢𝐝𝐚𝐝 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨!*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 
	
if (m.sender.startsWith('92' || '92')) {
m.reply(`*┊↳🎖️┊ 𝐒𝐞 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐫á 𝐭𝐨𝐝𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐬𝐨𝐬𝐩𝐞𝐜𝐡𝐨𝐬𝐨 𝐨 𝐚𝐫𝐚𝐛𝐞 𝐩𝐚𝐫𝐚 𝐞𝐯𝐢𝐭𝐚𝐫 𝐬𝐩𝐚𝐦 𝐲 𝐦𝐚𝐧𝐭𝐞𝐧𝐞𝐫 𝐥𝐚 𝐬𝐞𝐠𝐮𝐫𝐢𝐝𝐚𝐝 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨!*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 	
   
}}
export default handler
