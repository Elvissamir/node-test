const router = require('express').Router()
const auth = require('../middleware/auth')
const uploadImage = require('../middleware/uploadImage')

router.post('/', [auth, uploadImage], async (req, res) => {
    console.log('images post controller')
    console.log('the file', req.file)
    if (!req.file)
        return res.status(400).send('Invalid format file. Only images are allowed')
    return res.send('uploaded')
})

module.exports = router