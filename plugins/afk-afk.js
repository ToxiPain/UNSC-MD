let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*┊↳🎖️┊ ${conn.getName(m.sender)} 𝐄𝐬𝐭𝐚𝐫á 𝐀𝐅𝐊, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐧𝐨 𝐥𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐧*\n\n*𝐌𝐨𝐭𝐢𝐯𝐨:${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
