const fs = require('fs/promises')

module.exports = () => async (user) => {
    try {
       
        const folders = await fs.readdir('./images')
        
        if (!folders.includes(user.user))
            return []
        
        const dir = `./images/${user.user}`
        const images = await fs.readdir(dir)

        const imagesUrls = images.map(image => `/images/${user.user}/${image}`)
    
        return imagesUrls

    }
    catch (ex) {
        console.log(ex)
    }
}