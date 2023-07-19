export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *┊↳🎖️┊ 𝐃𝐞𝐣𝐚𝐬𝐭𝐞 𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐀𝐅𝐊* ${user.afkReason ? ' *𝐓𝐢𝐞𝐦𝐩𝐨 𝐲 𝐦𝐨𝐭𝐢𝐯𝐨:* ' + user.afkReason : ''}
  
  *𝐓𝐢𝐞𝐦𝐩𝐨 𝐈𝐧𝐚𝐜𝐭𝐢𝐯𝐨:* ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*┊↳🎖️┊ 𝐍𝐨 𝐥𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐬!*

*𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐪𝐮𝐞 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 𝐞𝐬𝐭𝐚 𝐈𝐧𝐚𝐜𝐭𝐢𝐯𝐨/𝐀𝐅𝐊*      
*—◉ ${reason ? '𝐌𝐨𝐭𝐢𝐯𝐨: ' + reason : '𝐌𝐨𝐭𝐢𝐯𝐨: _El usuario no especificó un motivo._'}*
*—◉ 𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝚁𝙰𝙽𝚂𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙳𝙴 𝙸𝙽𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
