const validateLoginInteractor = require('./validateLogin')

const UserJson = require('../dataSources/User')

const validateLogin = validateLoginInteractor(UserMongo)

module.exports = {
    validateLogin,
}