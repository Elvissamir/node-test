const { readData, writeData } = require('./dataActions')

const findByUserName = async userName => {
    const databaseData = await readData()
    const user = databaseData.users.find(user => user.user === userName)

    if (!user)
        return null
    
    return user
}

const createUser = async (user) => {
    console.log('create user', user)
    const databaseData = await readData()
    databaseData.users.push(user)

    console.log(databaseData)

    const result = await writeData(databaseData)

    if (!result)
        return null 
    return user
}

module.exports = {
    findByUserName,
    createUser
}