let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*┊↳🎖️┊ 𝐄𝐥 𝐛𝐨𝐭 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨 𝐞𝐧 𝐞𝐬𝐭𝐞 𝐜𝐡𝐚𝐭!*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^on$/i
handler.rowner = true
export default handler
