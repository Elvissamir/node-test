const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const authStatic = require('../middleware/authStatic')

module.exports = function(app) {
    app.use(express.json())
    app.use(helmet())
    app.use(cors())
    app.use('/api/images', authStatic)
    app.use('/api/images', express.static('./images'))
}