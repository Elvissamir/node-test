module.exports = (UserDatasource) => async (user, data) => {
    console.log('update user interactor')    
    const result = await UserDatasource.updateByName(user, data)

    return result
}