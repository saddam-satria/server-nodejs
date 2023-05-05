const express = require('express')
const cors = require('cors')
const app = express()
const routes = require("./app/routes")
const { PORT } = require('./app/config/constant')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static("./assets"));
app.use(cors())
app.use(routes)



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})