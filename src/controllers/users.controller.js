const router = require('express').Router()
const { validateUser, storeUser, getUsers } = require('../interactors/index')

router.get('/', async (req, res) => {
    const users = await getUsers()
    return res.send(users)
})

router.post('/', async (req, res) => {
    console.log('create user controller')

    const { error } = await validateUser({ data: req.body})
    if (error) 
        return res.status(400).send(error.details[0].message)
    
    const data = await storeUser(req.body)
    return res.send(data)
})

module.exports = router