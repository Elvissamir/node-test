const UserModel = require('../models/User.model')

module.exports = (UserDataSource) => async (loginData) => {
    console.log('validate login interactor')

    console.log('loginData', loginData)
    const user = await UserDataSource.findByName(loginData.user)

    console.log('after finding', user)

    if (!user)
        return { error: { details: [{ message: 'Invalid user or password' }]}}

    const samePassword = loginData.password === user.password
    console.log('same password: ', samePassword)
    if (!samePassword)
        return { error: { details: [{ message: 'Invalid user or password' }]}}

    const token = UserModel.generateAuthToken({ 
        user: user.user, 
        roles: user.roles 
    })
    console.log('return from login interactor')
    return { token }
}