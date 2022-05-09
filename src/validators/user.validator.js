const rules = require('../rules/userRules')
const Joi = require('joi')

const schema = Joi.object({
    user: Joi.string()
        .required()
        .label('User'),
    password: Joi
        .string()
        .required()
        .label('Password')
})

module.exports = function (userData) {
    const validation = schema.validate(userData)
    
    return validation
}