module.exports = (UserDatasource) => async (name) => {    
    const result = await UserDatasource.deleteByName(name)

    return result
}