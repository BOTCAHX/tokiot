let handler = async m => m.reply(`
☕ *Tokio :* a whatsapp bot\n\n🔗 *URL :* Hamdeh nyari sc sendiri lah Asu
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
