const express = require('express')
const app = express()
const errors = require('./startup/errors')
const middleware = require('./startup/middleware')
const routes = require('./startup/routes')
const dotenv = require('dotenv')

dotenv.config()
require('express-async-errors')

errors()
routes(app)
middleware(app)

module.exports = app