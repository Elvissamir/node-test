module.exports = (UserDatasource) => async ({ data }) => {    
    const result = await UserDatasource.createUser(data)

    return result
}