const { loginEndpoint, userEnpoint } = require('../endpoints/index')
const loginController = require('../controllers/login.controller')
const usersController = require('../controllers/users.controller')

module.exports = function (app) {
   app.use(loginEndpoint, loginController)
   app.use(userEnpoint, usersController)
}