export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*┊↳🎖️┊ 𝐇𝐨𝐥𝐚 @${m.sender.split`@`[0]}, 𝐄𝐬𝐭á 𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐡𝐚𝐛𝐥𝐚𝐫 𝐚𝐥 𝐩𝐫𝐢𝐯𝐚𝐝𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭, 𝐩𝐨𝐫 𝐥𝐨 𝐭𝐚𝐧𝐭𝐨 𝐬𝐞𝐫á𝐬 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨...*`, false, { mentions: [m.sender] })
await this.updateBlockStatus(m.chat, 'block')}
return !1
}
