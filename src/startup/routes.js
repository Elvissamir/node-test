const { loginEndpoint } = require('../endpoints/index')
const loginController = require()

module.exports = function (app) {
   app.use(loginEndpoint, loginController)
}