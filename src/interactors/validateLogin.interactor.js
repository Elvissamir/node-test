module.exports = (UserDataSource) => async (loginData) => {
    console.log('interactor')

    const user = await UserDataSource.findByName(loginData.user)

    console.log('user', user)
    console.log('login data', loginData)

    const samePassword = loginData.password === user.password
    console.log('same password: ', samePassword)
    if (!samePassword)
        return { error: { details: [{ message: 'Invalid email or password' }]}}

    //const token = user.generateAuthToken()
    //return { token: token }

    console.log('return from login interactor')
    return { token: 'token' }
}