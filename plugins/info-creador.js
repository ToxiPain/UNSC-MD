let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `*𝐍𝐮𝐦𝐞𝐫𝐨 𝐝𝐞 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫:*
𝐓𝐨𝐱𝐢𝐩𝐚𝐢𝐧 - wa.me/50557418454 

𝐄𝐧 𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐜𝐢ó𝐧 𝐜𝐨𝐧 𝐥𝐚 𝐂𝐨𝐦𝐮𝐧𝐢𝐝𝐚𝐝 𝐔𝐍𝐒𝐂 (𝐒𝐩𝐚𝐫𝐭𝐚𝐧)
https://chat.whatsapp.com/L4KS1KNAMB1Lv98z9EXZSd
⌜𝗥𝗲𝗰𝘂𝗲𝗿𝗱𝗮, 𝘀𝗶 𝘁𝗶𝗲𝗻𝗲𝘀 𝘂𝗻 𝗿𝗼𝗹 𝘆 𝗾𝘂𝗶𝗲𝗿𝗲𝘀 𝗽𝗿𝗼𝗴𝗿𝗲𝘀𝗮𝗿. 𝗡𝗼𝘀𝗼𝘁𝗿𝗼𝘀 𝗽𝗼𝗱𝗲𝗺𝗼𝘀 𝗮𝘆𝘂𝗱𝗮𝗿𝘁𝗲, 𝘂𝗻𝗲 𝘁𝘂 𝗴𝗿𝘂𝗽𝗼 𝗮 𝗹𝗮 𝗰𝗮𝘂𝘀𝗮 #𝗨𝗡𝗦𝗖⌝•`.trim()   
let buttonMessage= {
'document': { url: `https://www.youtube.com/channel/UCE96GnKsR71fvtnLWlVfSpw` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://www.youtube.com/channel/UCE96GnKsR71fvtnLWlVfSpw',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCE96GnKsR71fvtnLWlVfSpw' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
