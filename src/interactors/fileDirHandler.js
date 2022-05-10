const fs = require('fs/promises')

module.exports = () => async ({ user, imageName}) => {
    const result = await fs.readdir('./images')

    const destDir = `./images/${user.user}`
    if (!result.includes(user.user))
        await fs.mkdir(destDir)

    return destDir
}