module.exports = (UserDatasource) => async (data) => {    
    const result = await UserDatasource.findByName(data)

    return result
}