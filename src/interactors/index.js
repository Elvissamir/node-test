const validateLoginInteractor = require('./validateLogin.interactor')
const validateUserInteractor = require('./validateUser.interactor')
const storeUserInteractor = require('./storeUser.interactor')
const getUsersInteractor = require('./getUsers.interactor')
const findUserInteractor = require('./findUser.interactor')
const deleteUserInteractor = require('./deleteUser.interactor')
const updateUserInteractor = require('./updateUser.interactor')
const fileDirHandlerInteractor = require('./fileDirHandler')

// DATA SOURCES
const UserJson = require('../dataSources/User')

const getUsers = getUsersInteractor(UserJson)
const storeUser = storeUserInteractor(UserJson)
const deleteUser = deleteUserInteractor(UserJson)
const validateLogin = validateLoginInteractor(UserJson)
const validateUser = validateUserInteractor(UserJson)
const findUser = findUserInteractor(UserJson)
const updateUser = updateUserInteractor(UserJson)
const fileDirHandler = fileDirHandlerInteractor()

module.exports = {
    validateLogin,
    validateUser,
    getUsers,
    findUser,
    storeUser,
    updateUser,
    deleteUser,
    fileDirHandler
}