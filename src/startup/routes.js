const { loginEndpoint, userEnpoint } = require('../endpoints/index')
const loginController = require('../controllers/login.controller')
const usersController = require('../controllers/users.controller')
const error = require('../middleware/error')

module.exports = function (app) {
   app.use(loginEndpoint, loginController)
   app.use(userEnpoint, usersController)
   app.use(error)
}