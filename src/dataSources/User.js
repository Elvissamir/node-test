const { readData, writeData } = require('./dataActions')

const findByUserName = async userName => {
    const databaseData = await readData()
    const user = databaseData.users.find(user => user.user === userName)

    if (!user)
        return null
    
    return user
}

const getAll = async () => {
    const databaseData = await readData()
    const users = databaseData.users

    return users
}

const createUser = async (user) => {
    const databaseData = await readData()
    databaseData.users.push(user)

    const result = await writeData(databaseData)

    if (!result)
        return null 
    return user
}

module.exports = {
    createUser,
    findByUserName,
    getAll
}