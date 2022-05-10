const router = require('express').Router()
const auth = require('../middleware/auth')
const multer = require('multer')

const multerConfig = multer.diskStorage({
    destination: async (req, file, callback) => {
        console.log(req.user.user)
        
        callback(null, `images/`)
    },
    filename: (req, file, callback) => {
        console.log('filename')
        const extension = file.mimetype.split('/')[1]
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

router.post('/', [auth, uploadImage], async (req, res) => {
    console.log('images post controller')
    console.log('the file', req.file)
    if (!req.file)
        return res.status(400).send('Invalid format file. Only images are allowed')
    return res.send('uploaded')
})

module.exports = router