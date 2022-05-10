const multer = require('multer')
const { fileDirHandler } = require('../interactors/index')

const multerConfig = multer.diskStorage({
    destination: async (req, file, callback) => {
        const user = req.user 
        const imageName = req.body.imageName
        const dir = await fileDirHandler({ user, imageName })

        callback(null, dir)
    },
    filename: (req, file, callback) => {
        const extension = file.mimetype.split('/')[1]
        console.log('img name', req.body.imageName)
        callback(null, `${Date.now()}.${extension}`)
    }
})

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image'))
        callback(null, true)
    else 
        callback(null, false)
}

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage
})

const uploadImage = upload.single('image')

module.exports = uploadImage