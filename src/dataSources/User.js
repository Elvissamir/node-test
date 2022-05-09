const { readData } = require('./dataActions')

const findByUserName = async userName => {
    const databaseData = await readData()
    const user = databaseData.users.find(user => user.user === userName)

    if (!user)
        return null
    
    return user
}

const createUser = async ({ user, password }) => {
    const databaseData = await readData()
}

module.exports = {
    findByUserName,
    createUser
}