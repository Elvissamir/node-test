const router = require('express').Router()
const { validateUser, 
    storeUser, 
    getUsers, 
    findUser,
    updateUser,
    deleteUser } = require('../interactors/index')
const admin = require('../middleware/admin')
const auth = require('../middleware/auth')

router.get('/', [auth, admin], async (req, res) => {
    const users = await getUsers()
    return res.send(users)
})

router.get('/:user', [auth, admin], async (req, res) => {
    const user = await findUser(req.params.user)

    return res.send(user)
})

router.post('/', [auth, admin], async (req, res) => {
    const { error } = await validateUser({ data: req.body})
    if (error) 
        return res.status(400).send(error.details[0].message)
    
    const data = await storeUser(req.body)
    return res.send(data)
})

router.put('/:user', [auth, admin], async (req, res) => {
    console.log('put user controller')
    console.log(req.body)
    const { error } = await validateUser({ data: req.body})
    if (error) 
        return res.status(400).send(error.details[0].message)
    
    const data = await updateUser(req.params.user, req.body)
    return res.send(data)
})

router.delete('/:user', [auth, admin], async (req, res) => {
    if (req.params.user === req.user.user)
        return res.status(400).send('Can not delete your own account')

    const user = await deleteUser(req.params.user)

    if (!user) 
        return res.status(404).send('The user does not exist.')

    return res.send(user)
})

module.exports = router