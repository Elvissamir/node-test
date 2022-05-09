const validateLoginInteractor = require('./validateLogin.interactor')
const validateUserInteractor = require('./validateUser.interactor')
const storeUserInteractor = require('./storeUser.interactor')

// DATA SOURCES
const UserJson = require('../dataSources/User')

const storeUser = storeUserInteractor(UserJson)
const validateLogin = validateLoginInteractor(UserJson)
const validateUser = validateUserInteractor(UserJson)

module.exports = {
    validateLogin,
    validateUser,
    storeUser,
}