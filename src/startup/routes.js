const { loginEndpoint } = require('../endpoints/index')
const loginController = require('../controllers/login.controller')

module.exports = function (app) {
   app.use(loginEndpoint, loginController)
}