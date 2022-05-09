const { readData, writeData } = require('./dataActions')

const findByName = async userName => {
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

const updateByName = async (userName, data) => {
    const databaseData = await readData()
    const index = databaseData.users.findIndex(user => user.user === userName)

    if (index === -1)
        return null
    
    const updatedUser = databaseData.users[index]
    databaseData.users[index] = data
    
    await writeData(databaseData)

    return updatedUser
}

const deleteByName = async userName => {
    const databaseData = await readData()
    const index = databaseData.users.findIndex(user => user.user === userName)

    if (index === -1)
        return null
    
    const deletedUser = databaseData.users.splice(index, 1)[0]
    
    await writeData(databaseData)

    return deletedUser
}

module.exports = {
    createUser,
    findByName,
    deleteByName,
    updateByName,
    getAll
}