const fs = require('fs/promises')

module.exports = () => async ({ user, imageName}) => {
    const folders = await fs.readdir('./images')

    const destDir = `./images/${user.user}`
    if (!folders.includes(user.user))
        await fs.mkdir(destDir)

    return destDir
}