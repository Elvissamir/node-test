module.exports = (UserDatasource) => async (data) => {    
    console.log('store user interactor')
    const result = await UserDatasource.createUser(data)

    return result
}