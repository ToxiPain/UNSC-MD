let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`*[❗] BORRANDO LA BASE DE DATOS CON EXITO!!*`)    
} catch (error1) {   
console.log(error1)
throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`   
}} 
handler.command = ['datosborrar']
export default handler
