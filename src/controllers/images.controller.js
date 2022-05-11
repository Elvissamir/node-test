const router = require('express').Router()
const auth = require('../middleware/auth')
const uploadImage = require('../middleware/uploadImage')
const { getFiles, deleteFile } = require('../interactors/index')

router.post('/', [auth, uploadImage], async (req, res) => {
    console.log('images post controller')

    if (!req.file)
        return res.status(400).send('Invalid format file. Only images are allowed')
    return res.send('uploaded')
})

router.get('/', [auth], async (req, res) => {
    console.log('images get controller')
    const images = await getFiles(req.user)

    return res.send(images)
})

router.delete('/', [auth], async (req, res) => {
    console.log('images delete controller')

    if (!req.body.imageName)
        return res.status(400).send('The image name is required')

    const result = await deleteFile(req.user, req.body.imageName)

    if (!result)
        return res.status(404).send('The file does not exist')

    return res.send(req.body.imageName)
})

module.exports = router