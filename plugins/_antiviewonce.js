let { downloadContentFromMessage } = (await import('@adiwajshing/baileys'));

export async function before(m, { isAdmin, isBotAdmin }) {
 
let chat = db.data.chats[m.chat]
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiviewonce || chat.isBanned) return
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}\n\n*𝐍𝐨 𝐞𝐬𝐭á 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨 𝐨𝐜𝐮𝐥𝐭𝐚𝐫 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬!*`, m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}\n\n*𝐍𝐨 𝐞𝐬𝐭á 𝐩𝐞𝐫𝐦𝐢𝐭𝐢𝐝𝐨 𝐨𝐜𝐮𝐥𝐭𝐚𝐫 𝐢𝐦𝐚𝐠𝐞𝐧𝐞𝐬!*`, m)
}}}
