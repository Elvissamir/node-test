module.exports = (UserDatasource) => async (data) => {    
    const result = await UserDatasource.getAll()

    return result
}