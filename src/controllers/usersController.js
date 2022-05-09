const router = require('express').Router()

router.post('/', async (req, res) => {

    const { error } = await validateUser({ data: req.body, options: { checkEmail: true }})
    if (error) 
        return res.status(400).send(error.details[0].message)
    
    const data = await storeUser(req.body)
    
    return res
            .header('x-auth-token', data.token)
            .header('access-control-expose-headers', 'x-auth-token')
            .send(data.user)
})

module.exports = router