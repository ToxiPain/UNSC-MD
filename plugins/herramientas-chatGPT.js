import fetch from 'node-fetch'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*┊↳🎖️┊ 𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐮𝐧𝐚 𝐩𝐞𝐭𝐢𝐜𝐢𝐨𝐧 𝐩𝐚𝐫𝐚 𝐡𝐚𝐜𝐞𝐫𝐥𝐞 𝐚 𝐥𝐚 𝐈𝐀*\n\n*${usedPrefix + command} Dame un codigo en JS para un juego de cartas*`
try {
await conn.sendPresenceUpdate('composing', m.chat)
let syms = `Actuaras como un Bot de WhatsApp el cual fue creado por ToxiPain, tu seras UNSC - Bot.`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=BrunoSobrino&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
throw `*┊↳🎖️┊ 𝐄𝐫𝐫𝐨𝐫 𝐈𝐧𝐭𝐞𝐧𝐭𝐚 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨!!*`
}}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
