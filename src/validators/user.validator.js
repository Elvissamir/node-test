const Joi = require('joi')

const schema = Joi.object({
    user: Joi.string()
        .required()
        .label('User'),
    roles: Joi.array(),
    password: Joi
        .string()
        .required()
        .label('Password')
})

module.exports = function (userData) {
    const validation = schema.validate(userData)
    
    return validation
}