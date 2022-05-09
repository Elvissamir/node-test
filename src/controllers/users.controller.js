const router = require('express').Router()
const { validateUser, 
    storeUser, 
    getUsers, 
    findUser,
    deleteUser } = require('../interactors/index')

router.get('/', async (req, res) => {
    const users = await getUsers()
    return res.send(users)
})

router.get('/:user', async (req, res) => {
    const user = await findUser(req.params.user)

    return res.send(user)
})

router.post('/', async (req, res) => {
    console.log('create user controller')

    const { error } = await validateUser({ data: req.body})
    if (error) 
        return res.status(400).send(error.details[0].message)
    
    const data = await storeUser(req.body)
    return res.send(data)
})

router.delete('/:user', async (req, res) => {
    console.log('delete user controller')
    const user = await deleteUser(req.params.user)
    
    if (!user) 
        return res.status(404).send('The user does not exist.')

    return res.send(user)
})

module.exports = router