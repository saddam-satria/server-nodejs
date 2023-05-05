require('dotenv').config()


const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || "127.0.0.1"


const BASE_URL = `${process.env.BASE_URL}:${PORT}` || `http://localhost:${PORT}`;
const BASE_ASSET = `${BASE_URL}/assets`

module.exports = { PORT, HOST, BASE_ASSET, BASE_URL }