let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*┊↳🎖️┊ 𝐄𝐥 𝐛𝐨𝐭 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐝𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐜𝐡𝐚𝐭!!*\n\n*𝐄𝐥 𝐛𝐨𝐭 𝐧𝐨 𝐜𝐨𝐧𝐭𝐞𝐬𝐭𝐚𝐫á 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐡𝐚𝐬𝐭𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐬𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞...*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^off$/i
handler.rowner = true
export default handler
