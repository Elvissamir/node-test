const fs = require('fs/promises')

module.exports = () => async (user, fileName) => {
    console.log('delete file interactor')
    try {
        const files = await fs.readdir('./images')
        if (!files.includes(user.user))
            return false

        const userDir = `./images/${user.user}`
        const userFiles = await fs.readdir(userDir)
        if (!userFiles.includes(fileName))
            return false

        await fs.rm(`${userDir}/${fileName}`)
        return true
    }
    catch (ex) {
        console.log(ex)
    }
}