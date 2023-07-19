let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = `@${m.sender.split`@`[0]}`
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*┊↳🎖️┊ 𝐄𝐥 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐞𝐬𝐭á 𝐚𝐜𝐭𝐢𝐯𝐨, 𝐩𝐞𝐫𝐨 𝐧𝐨 𝐭𝐞 𝐩𝐫𝐞𝐨𝐜𝐮𝐩𝐞𝐬, 𝐧𝐨 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐧 𝐚𝐝𝐦𝐢𝐧𝐬!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await this.sendMessage(m.chat, { text: `*┊↳🎖️┊「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝐍𝐨𝐬 𝐯𝐞𝐦𝐨𝐬 👋 ${user} 𝐍𝐨 𝐬𝐞 𝐚𝐝𝐦𝐢𝐭𝐞𝐧 𝐥𝐢𝐧𝐤𝐬, 𝐬𝐞𝐫á𝐬 𝐞𝐱𝐩𝐮𝐥𝐬𝐚𝐝𝐨 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨...!!*`, mentions: [m.sender] }) 
if (!isBotAdmin) return m.reply('*┊↳🎖️┊𝐄𝐥 𝐛𝐨𝐭 𝐧𝐨 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧, 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞 𝐬𝐚𝐜𝐚𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐬*')  
//await conn.sendButton(m.chat, `*「 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊𝐒 」*\n*𝙷𝙰𝚂𝚃𝙰 𝙻𝙰 𝚅𝙸𝚂𝚃𝙰 𝙱𝙰𝙱𝚈 👋, ${await this.getName(m.sender)} 𝚁𝙾𝙼𝙿𝙸𝚂𝚃𝙴𝚂 a𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴𝚁𝙰𝚂 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾...!!*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁 𝙰 𝙻𝙰𝚂 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝚂*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply('*┊↳🎖️┊ 𝐄𝐥 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐛𝐨𝐭 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐚𝐝𝐚 𝐥𝐚𝐬 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐜𝐢𝐨𝐧𝐞𝐬 𝐧𝐞𝐜𝐞𝐬𝐚𝐫𝐢𝐚𝐬 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐞 𝐜𝐨𝐧 𝐞𝐥 𝐩𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐥𝐚𝐬 𝐡𝐚𝐛𝐢𝐥𝐢𝐭𝐞*')
}
return !0
}
