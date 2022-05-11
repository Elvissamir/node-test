const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.query.token
    if (!token) return res.status(401).send('Access denied. No token provided.')

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        
        if (req.url.split('/')[1] !== decoded.user)
            return res.status(403).send('Can not access this resource')

        next()
    }
    catch (ex) {
        res.status(400).send('Invalid token.')
    }
}

module.exports = auth