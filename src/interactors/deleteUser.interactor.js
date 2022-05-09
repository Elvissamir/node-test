module.exports = (UserDatasource) => async (name) => {    
    console.log('delete user interactor')
    const result = await UserDatasource.deleteByName(name)

    return result
}