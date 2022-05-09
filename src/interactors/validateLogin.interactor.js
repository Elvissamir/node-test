const validateLogin = require('../validators/login.validator')

module.exports = (UserDataSource) => async (loginData) => {
    const { error } = validateLogin(loginData)

    if (error)
        return { error }

    const user = await UserDataSource.findByUserName({ userName: loginData.userName })

    const samePassword = loginData.password === user.password
    if (!samePassword)
        return { error: { details: [{ message: 'Invalid email or password' }]}}

    //const token = user.generateAuthToken()

    //return { token: token }
    return { token: 'token' }
}