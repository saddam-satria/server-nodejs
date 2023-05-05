const { PORT, HOST, BASE_ASSET } = require("../config/constant")


const welcomeController = (_request, response) => {
    const responsePayload = {
        message: 'welcome to server node TS boilerplate',
        status: 'success',
        owner: 'Saddam Satria',
        github: 'https://github.com/saddam-satria',
        linkedIn: 'https://www.linkedin.com/in/saddam-satria-ardhi-837570170/',
        instagram: 'https://instagram.com/saddamsatria_12',
        PORT,
        HOST,
        BASE_ASSET,
    }
    response.status(200).json(responsePayload)
}

module.exports = welcomeController