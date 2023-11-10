module.exports = {

    token: 'MTE2MzE2MTg2MTkxOTg2NjkxMQ.GerYAE.DzGRlQGTIWQuFS9d_LPefeudGYHxy9lC_1SiX8',
    
    authDevelopers: ['1055679428744728627','1043550134249726012'], // developers
    authOwners: ['1055679428744728627'], // whitelist

    webhook: {
        name: 'AuthCord',
        avatar: 'https://cdn.discordapp.com/avatars/1009773285577347193/fd0968c08b2cb3311672d030836da7c8.png',
        url: 'https://discord.com/api/webhooks/1050862599765504030/46YIqo_8J60gHItLsRRG7NzOinuK8t4xl9r2fjX9XsfHtMJc_unWxQyjVByAuG-k5678',
    },

    client: {
        id: "1163161861919866911",
        secret: "lv5Z8EXCk6_duPGyE38X9KkSAG519k7W",
        redirect_uri: "http://93.190.8.234:319/auth/discord/callback",
        scope: ['identify', 'guilds.join'],
        footer: "AuthCord v1.0", // footer
        serverLink: "https://discord.gg/badge", // server
    },

    web: {
        port: 319,
        apiKey: "oefduqyk2w2vxiju"
    },

    database: {

        URI: 'mongodb+srv://Rowy:Rowy2004@cluster0.kvegz.mongodb.net/ahmett?retryWrites=true&w=majority',

    }

}
