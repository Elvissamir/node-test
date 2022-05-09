const validateLoginInteractor = require('./validateLogin.interactor')

const UserJson = require('../dataSources/User')
const validateLogin = validateLoginInteractor(UserJson)

module.exports = {
    validateLogin,
}