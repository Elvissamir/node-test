const { readData } = require('./dataActions')

const findByUserName = async userName => {
    const databaseData = await readData()
    const user = databaseData.users.find(user => user.user === userName)

    if (!user)
        return null
    
    return user
}

module.exports = {
    findByUserName
}