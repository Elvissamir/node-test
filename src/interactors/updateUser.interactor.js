module.exports = (UserDatasource) => async (user, data) => {  
    const result = await UserDatasource.updateByName(user, data)

    return result
}