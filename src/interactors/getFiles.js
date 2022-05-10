const fs = require('fs/promises')

module.exports = () => async (user) => {
    try {
        console.log('get files interactor')
        const folders = await fs.readdir('./images')
        
        if (!folders.includes(user.user))
            return []
        
        const dir = `./images/${user.user}`
        const images = await fs.readdir(dir)
        console.log('the dir', images)

        const imagesUrls = images.map(image => `/images/${user.user}/${image}`)
    
        return imagesUrls

    }
    catch (ex) {
        console.log(ex)
    }
}