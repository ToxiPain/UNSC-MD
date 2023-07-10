import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
//let vn = './media/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `*╭═✦͜͡ৡৢ╡♛UNSC♛╞ৡৢ͜͡✦═*
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟*      
║◄🍁┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🍁►
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈
║┊:      *Menu Completo* 
║┊:        ${taguser}
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈
║◄🍁┢ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┧🍁►
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟*      
*╰═✦͜͡ৡৢ╡♛UNSC♛╞ৡৢ͜͡✦═*
${readMore}

╭▬▬▬▬▬▬▬ *˚✯ཻ⸙ ̥•┉┉•
*⊱✦•GENERAL ℹ️*
▋╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅   
▋┋ ${usedPrefix}grupos
▋┋ ${usedPrefix}infobot
▋┋ ${usedPrefix}labiblia
▋┋ ${usedPrefix}animes
▋┋ ${usedPrefix}speedtest
▋┋ ${usedPrefix}grouplist
▋┋ ${usedPrefix}owner
▋┋ ${usedPrefix}script
▋┋ ${usedPrefix}listprem
■█ℹ️█■▱▰▱▰▱█ℹ️█■
╭────────────────╮
*⊱✦•GRUPO 🔏*
╰────────────────╯
■█🔏█■▱▰▱▰▱█🔏█■
▋┋ ${usedPrefix}add <numero>
▋┋ ${usedPrefix}kick <@tag>
▋┋ ${usedPrefix}kick2 <@tag>
▋┋ ${usedPrefix}listanum <texto>
▋┋ ${usedPrefix}kicknum <texto>
▋┋ ${usedPrefix}grupo <abrir / cerrar>
▋┋ ${usedPrefix}grouptime <opcion> <tiempo>
▋┋ ${usedPrefix}promote <@tag>
▋┋ ${usedPrefix}demote <@tag>
▋┋ admins <texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
▋┋ ${usedPrefix}demote <@tag>
▋┋ ${usedPrefix}infogroup
▋┋ ${usedPrefix}resetlink
▋┋ ${usedPrefix}link
▋┋ ${usedPrefix}setname <texto>
▋┋ ${usedPrefix}setdesc <texto>
▋┋ ${usedPrefix}invocar <texto>
▋┋ ${usedPrefix}setwelcome <texto>
▋┋ ${usedPrefix}setbye <texto>
▋┋ ${usedPrefix}hidetag <texto>
▋┋ ${usedPrefix}hidetag <audio>
▋┋ ${usedPrefix}hidetag <video>
▋┋ ${usedPrefix}hidetag <imagen>
▋┋ ${usedPrefix}warn <@tag>
▋┋ ${usedPrefix}unwarn <@tag>
▋┋ ${usedPrefix}listwarn
▋┋ ${usedPrefix}fantasmas
▋┋ ${usedPrefix}destraba
▋┋ ${usedPrefix}setpp <imagen>
■█🔏█■▱▰▱▰▱█🔏█■
╭────────────────╮
*⊱✦•JUEGOS 🎯*
╰────────────────╯
■█🎯█■▱▰▱▰▱█🎯█■
▋┋ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
▋┋ ${usedPrefix}ppt <papel / tijera /piedra>_
▋┋ ${usedPrefix}prostituto <nombre / @tag>
▋┋ ${usedPrefix}prostituta <nombre / @tag>
▋┋ ${usedPrefix}gay2 <nombre / @tag>
▋┋ ${usedPrefix}lesbiana <nombre / @tag>
▋┋ ${usedPrefix}pajero <nombre / @tag>
▋┋ ${usedPrefix}pajera <nombre / @tag>
▋┋ ${usedPrefix}puto <nombre / @tag>
▋┋ ${usedPrefix}puta <nombre / @tag>
▋┋ ${usedPrefix}manco <nombre / @tag>
▋┋ ${usedPrefix}manca <nombre / @tag>
▋┋ ${usedPrefix}rata <nombre / @tag>
▋┋ ${usedPrefix}love <nombre / @tag>
▋┋ ${usedPrefix}doxear <nombre / @tag>
▋┋ ${usedPrefix}pregunta <texto>
▋┋ ${usedPrefix}suitpvp <@tag>
▋┋ ${usedPrefix}slot <apuesta>
▋┋ ${usedPrefix}ttt <nombre sala>
▋┋ ${usedPrefix}delttt
▋┋ ${usedPrefix}acertijo
▋┋ ${usedPrefix}simi <texto>
▋┋ ${usedPrefix}top <texto>
▋┋ ${usedPrefix}topgays
▋┋ ${usedPrefix}topotakus
▋┋ ${usedPrefix}formarpareja
▋┋ ${usedPrefix}verdad
▋┋ ${usedPrefix}reto
▋┋ ${usedPrefix}cancion
▋┋ ${usedPrefix}pista
▋┋ ${usedPrefix}akinator
▋┋ ${usedPrefix}wordfind
■█🎯█■▱▰▱▰▱█🎯█■
╭────────────────╮
*⊱✦•DESCARGAS 📥*
╰────────────────╯
■█📥█■▱▰▱▰▱■█📥█■
▋┋ ${usedPrefix}instagram <enlace / link / url>
▋┋ ${usedPrefix}mediafire <enlace / link / url>
▋┋ ${usedPrefix}gitclone <enlace / link / url>
▋┋ ${usedPrefix}gdrive <enlace / link / url>
▋┋ ${usedPrefix}tiktok <enlace / link / url>
▋┋ ${usedPrefix}xnxxdl <enlace / link / url>
▋┋ ${usedPrefix}xvideosdl <enlace / link / url>
▋┋ ${usedPrefix}twitter <enlace / link / url>
▋┋ ${usedPrefix}fb <enlace / link / url>
▋┋ ${usedPrefix}ytmp3 <enlace / link / url>
▋┋ ${usedPrefix}ytmp4 <enlace / link / url>
▋┋ ${usedPrefix}ytmp3doc <enlace / link / url>
▋┋ ${usedPrefix}ytmp4doc <enlace / link / url>
▋┋ ${usedPrefix}videodoc <enlace / link / url>
▋┋ ${usedPrefix}dapk2 <enlace / link / url>
▋┋ ${usedPrefix}stickerpack <enlace / link / url>
▋┋ ${usedPrefix}play <texto>
▋┋ ${usedPrefix}pla3 <texto>
▋┋ ${usedPrefix}play.1 <texto>
▋┋ ${usedPrefix}play.2 <texto>
▋┋ ${usedPrefix}playdoc <texto>
▋┋ ${usedPrefix}playlist <texto>
▋┋ ${usedPrefix}playlist2 <texto>
▋┋ ${usedPrefix}spotify <texto>
▋┋ ${usedPrefix}ringtone <texto>
▋┋ ${usedPrefix}soundcloud <texto>
▋┋ ${usedPrefix}imagen <texto>
▋┋ ${usedPrefix}pinterest <texto>
▋┋ ${usedPrefix}wallpaper <texto>
▋┋ ${usedPrefix}wallpaper2 <texto>
▋┋ ${usedPrefix}pptiktok <nombre de usuario>
▋┋ ${usedPrefix}igstalk <nombre de usuario>
▋┋ ${usedPrefix}igstory <nombre de usuario>
▋┋ ${usedPrefix}tiktokstalk <username>
■█📥█■▱▰▱▰▱■█📥█■
╭────────────────╮
*⊱✦•CHAT ANONIMO 📳*
╰────────────────╯
■█📳█■▱▰▱▰▱█📳█■
▋┋ ${usedPrefix}start
▋┋ ${usedPrefix}next
▋┋ ${usedPrefix}leave
■█📳█■▱▰▱▰▱█📳█■
╭────────────────╮
*⊱✦•MAKER 🖍️*
╰────────────────╯
■█🖍️█■▱▰▱▰▱█🖍️█■
▋┋ *--- STICKER ---*
▋┋ ${usedPrefix}sticker <responder a imagen o video>
▋┋ ${usedPrefix}sticker <enlace / link / url>
▋┋ ${usedPrefix}sticker2 <responder a imagen o video>
▋┋ ${usedPrefix}sticker2 <enlace / link / url>
▋┋ ${usedPrefix}s <responder a imagen o video>
▋┋ ${usedPrefix}s <enlace / link / url>
▋┋ ${usedPrefix}s2 <responder a imagen o video>
▋┋ ${usedPrefix}s2 <enlace / link / url>
▋┋ ${usedPrefix}emojimix <emoji 1>&<emoji 2>
▋┋ ${usedPrefix}scircle <imagen>
▋┋ ${usedPrefix}sremovebg <imagen>
▋┋ ${usedPrefix}semoji <tipo> <emoji>
▋┋ ${usedPrefix}attp <texto>
▋┋ ${usedPrefix}attp2 <texto>
▋┋ ${usedPrefix}attp3 <texto>
▋┋ ${usedPrefix}ttp <texto>
▋┋ ${usedPrefix}ttp2 <texto>
▋┋ ${usedPrefix}ttp3 <texto>
▋┋ ${usedPrefix}ttp4 <texto>
▋┋ ${usedPrefix}ttp5 <texto>
▋┋ ${usedPrefix}pat <@tag>
▋┋ ${usedPrefix}slap <@tag>
▋┋ ${usedPrefix}kiss <@tag>
▋┋ ${usedPrefix}dado
▋┋ ${usedPrefix}wm <packname> <author>
▋┋ ${usedPrefix}stickermarker <efecto> <imagen>
▋┋ ${usedPrefix}stickerfilter <efecto> <imagen>
▋┋ *--- CONVERTIR ---*
▋┋ ${usedPrefix}toanime <imagen>
▋┋ ${usedPrefix}togifaud <video>
▋┋ ${usedPrefix}toimg <sticker>
▋┋ ${usedPrefix}tomp3 <video>
▋┋ ${usedPrefix}tomp3 <nota de voz>
▋┋ ${usedPrefix}toptt <video / audio>
▋┋ ${usedPrefix}tovideo <sticker>
▋┋ ${usedPrefix}tourl <video / imagen / audio>
▋┋ ${usedPrefix}tts es <texto>
■█🖍️█■▱▰▱▰▱█🖍️█■
╭────────────────╮
*⊱✦•HERRAMIENTAS ⚙️*
╰────────────────╯
■█⚙️█■▱▰▱▰▱█⚙️█■
▋┋ ${usedPrefix}ia <texto>
▋┋ ${usedPrefix}ia2 <texto>
▋┋ ${usedPrefix}dall-e <texto>
▋┋ ${usedPrefix}spamwa <numero|texto|cantidad>
▋┋ ${usedPrefix}tamaño <cantidad> <imagen / video>
▋┋ ${usedPrefix}readviewonce <imagen / video>
▋┋ ${usedPrefix}clima <país> <ciudad>
▋┋ ${usedPrefix}encuesta <texto1|texto2...>
▋┋ ${usedPrefix}afk <motivo>
▋┋ ${usedPrefix}ocr <responde a imagen>
▋┋ ${usedPrefix}hd <responde a imagen>
▋┋ ${usedPrefix}acortar <enlace / link / url>
▋┋ ${usedPrefix}calc <operacion math>
▋┋ ${usedPrefix}del <mensaje>
▋┋ ${usedPrefix}whatmusic <audio>
▋┋ ${usedPrefix}readqr <imagen (QR)>
▋┋ ${usedPrefix}qrcode <texto>
▋┋ ${usedPrefix}readmore <texto1| texto2>
▋┋ ${usedPrefix}styletext <texto>
▋┋ ${usedPrefix}traducir <texto>
▋┋ ${usedPrefix}nowa <numero>
▋┋ ${usedPrefix}covid <pais>
▋┋ ${usedPrefix}horario
■█⚙️█■▱▰▱▰▱█⚙️█■
╭────────────────╮
*⊱✦•BUSCADORES 🔍*
╰────────────────╯
■█🔍█■▱▰▱▰▱█🔍█■
▋┋ ${usedPrefix}cuevana <texto>
▋┋ ${usedPrefix}pelisplus <texto>
▋┋ ${usedPrefix}modapk <texto>
▋┋ ${usedPrefix}stickersearch <texto>
▋┋ ${usedPrefix}stickersearch2 <texto>
▋┋ ${usedPrefix}xnxxsearch <texto>
▋┋ ${usedPrefix}animeinfo <texto>
▋┋ ${usedPrefix}google <texto>
▋┋ ${usedPrefix}letra <texto>
▋┋ ${usedPrefix}wikipedia <texto>
▋┋ ${usedPrefix}ytsearch <texto>
▋┋ ${usedPrefix}playstore <texto>
■█🔍█■▱▰▱▰▱█🔍█■
╭────────────────╮
*⊱✦•EFECTO DE AUDIO 🎤*
╰────────────────╯
■█🎤█■▱▰▱▰▱█🎤█■
▋┋ ${usedPrefix}menuaudios
▋┋ ${usedPrefix}bass
▋┋ ${usedPrefix}blown
▋┋ ${usedPrefix}deep
▋┋ ${usedPrefix}earrape
▋┋ ${usedPrefix}fast
▋┋ ${usedPrefix}fat
▋┋ ${usedPrefix}nightcore
▋┋ ${usedPrefix}reverse
▋┋ ${usedPrefix}robot
▋┋ ${usedPrefix}slow
▋┋ ${usedPrefix}smooth
▋┋ ${usedPrefix}tupai
■█🎤█■▱▰▱▰▱█🎤█■
╭────────────────╮
*➼✰︙OWNERS 🎭*
╰────────────────╯
■█🎭█■▱▰▱▰▱█🎭█■
▋┋ ${usedPrefix}setprefix <prefijo>
▋┋ ${usedPrefix}desactivarwa <numero>
▋┋ ${usedPrefix}resetprefix
▋┋ ${usedPrefix}autoadmin
▋┋ ${usedPrefix}leavegc
▋┋ ${usedPrefix}cajafuerte
▋┋ ${usedPrefix}blocklist
▋┋ ${usedPrefix}block <@tag / numero>
▋┋ ${usedPrefix}unblock <@tag / numero>
▋┋ ${usedPrefix}enable restrict
▋┋ ${usedPrefix}disable restrict
▋┋ ${usedPrefix}enable autoread
▋┋ ${usedPrefix}disable autoread
▋┋ ${usedPrefix}enable public
▋┋ ${usedPrefix}disable public
▋┋ ${usedPrefix}enable pconly
▋┋ ${usedPrefix}disable pconly
▋┋ ${usedPrefix}enable gconly
▋┋ ${usedPrefix}disable gconly
▋┋ ${usedPrefix}enable anticall
▋┋ ${usedPrefix}disable anticall
▋┋ ${usedPrefix}enable antiprivado
▋┋ ${usedPrefix}disable antiprivado
▋┋ ${usedPrefix}enable modejadibot
▋┋ ${usedPrefix}disable modejadibot
▋┋ ${usedPrefix}msg <texto>
▋┋ ${usedPrefix}banchat
▋┋ ${usedPrefix}unbanchat
▋┋ ${usedPrefix}banuser <@tag>
▋┋ ${usedPrefix}unbanuser <@tag>
▋┋ ${usedPrefix}banuser <@tag>
▋┋ ${usedPrefix}bc <texto>
▋┋ ${usedPrefix}bcchats <texto>
▋┋ ${usedPrefix}bcgc <texto>
▋┋ ${usedPrefix}bcgc2 <audio>
▋┋ ${usedPrefix}bcgc2 <video>
▋┋ ${usedPrefix}bcgc2 <imagen>
▋┋ ${usedPrefix}bcbot <texto>
▋┋ ${usedPrefix}cleartpm
▋┋ ${usedPrefix}restart
▋┋ ${usedPrefix}update
▋┋ ${usedPrefix}banlist
▋┋ ${usedPrefix}addprem <@tag> <tiempo>
▋┋ ${usedPrefix}addprem2 <@tag> <tiempo>
▋┋ ${usedPrefix}addprem3 <@tag> <tiempo>
▋┋ ${usedPrefix}addprem4 <@tag> <tiempo>
▋┋ ${usedPrefix}delprem <@tag>
▋┋ ${usedPrefix}listcmd
▋┋ ${usedPrefix}setppbot <responder a imagen>
▋┋ ${usedPrefix}addcmd <texto> <responder a sticker/imagen>
▋┋ ${usedPrefix}delcmd <responder a sticker/imagen con comando o texto asignado>
■█🎭█■▱▰▱▰▱█🎭█■
`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(all|todo|todos)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}


//const { levelling } = '../lib/levelling.js'
//import PhoneNumber from 'awesome-phonenumber'
//let handler = async (m, { conn, usedPrefix }) => {
//let pp = imagen4
//try {
//} catch (e) {
//} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
//let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let str = `
//*ミ💖 𝙷𝙾𝙻𝙰 ${taguser} 💖彡*
/*<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
° ඬ⃟🔊 _Te diagnostico con gay_
° ඬ⃟🔊 _A nadie le importa_
° ඬ⃟🔊 _Fiesta del admin_
° ඬ⃟🔊 _Fiesta del administrador_ 
° ඬ⃟🔊 _Vivan los novios_
° ඬ⃟🔊 _Feliz cumpleaños_
° ඬ⃟🔊 _Noche de paz_
° ඬ⃟🔊 _Buenos dias_
° ඬ⃟🔊 _Buenos tardes_
° ඬ⃟🔊 _Buenos noches_
° ඬ⃟🔊 _Audio hentai_
° ඬ⃟🔊 _Chica lgante_
° ඬ⃟🔊 _Feliz navidad_
° ඬ⃟🔊 _Vete a la vrg_
° ඬ⃟🔊 _Pasa pack Bot_
° ඬ⃟🔊 _Atencion grupo_
° ඬ⃟🔊 _Marica quien_
° ඬ⃟🔊 _Murio el grupo_
° ඬ⃟🔊 _Oh me vengo_
° ඬ⃟🔊 _tio que rico_
° ඬ⃟🔊 _Viernes_
° ඬ⃟🔊 _Baneado_
° ඬ⃟🔊 _Sexo_
° ඬ⃟🔊 _Hola_
° ඬ⃟🔊 _Un pato_
° ඬ⃟🔊 _Nyanpasu_
° ඬ⃟🔊 _Te amo_
° ඬ⃟🔊 _Yamete_
° ඬ⃟🔊 _Bañate_
° ඬ⃟🔊 _Es puto_
° ඬ⃟🔊 _La biblia_
° ඬ⃟🔊 _Onichan_
° ඬ⃟🔊 _Mierda de Bot_
° ඬ⃟🔊 _Siuuu_
° ඬ⃟🔊 _Epico_
° ඬ⃟🔊 _Shitpost_
° ඬ⃟🔊 _Rawr_
° ඬ⃟🔊 _UwU_
° ඬ⃟🔊 _:c_
° ඬ⃟🔊 _a_
`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i
handler.fail = null
export default  handler*/
