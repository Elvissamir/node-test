const UserModel = require('../models/User.model')

module.exports = (UserDataSource) => async (loginData) => {
    const user = await UserDataSource.findByName(loginData.user)

    if (!user)
        return { error: { details: [{ message: 'Invalid user or password' }]}}

    const samePassword = loginData.password === user.password
    if (!samePassword)
        return { error: { details: [{ message: 'Invalid user or password' }]}}

    const token = UserModel.generateAuthToken({ 
        user: user.user, 
        roles: user.roles 
    })
    
    return { token }
}