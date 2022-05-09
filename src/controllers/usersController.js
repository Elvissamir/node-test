const router = require('express').Router()
const { validateUser } = require('../interactors/index')

router.post('/', async (req, res) => {
    const { error } = await validateUser({ data: req.body})
    if (error) 
        return res.status(400).send(error.details[0].message)
    
    const data = await storeUser(req.body)
    
    return res
            .header('x-auth-token', data.token)
            .header('access-control-expose-headers', 'x-auth-token')
            .send(req.body)
})

module.exports = router