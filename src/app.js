const express = require('express')
const app = express()
const routes = require('./startup/routes')
const middleware = require('./startup/middleware')
const dotenv = require('dotenv')
const errors = require('./startup/errors')

dotenv.config()
require('express-async-errors')

module.exports = app