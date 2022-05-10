const { loginEndpoint, userEnpoint, imagesEndpoint } = require('../endpoints/index')
const loginController = require('../controllers/login.controller')
const usersController = require('../controllers/users.controller')
const imagesController = require('../controllers/images.controller')
const error = require('../middleware/error')
const express = require('express')

module.exports = function (app) {
   app.use(loginEndpoint, loginController)
   app.use(userEnpoint, usersController)
   app.use(imagesEndpoint, imagesController)
   app.use(error)
}