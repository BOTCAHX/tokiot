let handler = async m => m.reply(`
ā *Tokio :* a whatsapp bot\n\nš *URL :* Hamdeh nyari sc sendiri lah Asu
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
