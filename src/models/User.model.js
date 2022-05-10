const jwt = require("jsonwebtoken")

generateAuthToken = function ({ user, roles }) {
    const data = {user}
    
    if (roles && roles.includes('admin'))
        data.isAdmin = true

    const token = jwt.sign(data, process.env.JWT_KEY)
    return token
}

const user = {
    generateAuthToken
}

module.exports = user