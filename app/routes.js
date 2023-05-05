const routes = require('express').Router()
const welcomeController = require("./controllers/welcome")


routes.get("/", welcomeController)



module.exports = routes
