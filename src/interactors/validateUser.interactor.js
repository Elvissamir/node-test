const userValidator = require('../validators/user.validator')

module.exports = (UserDatasource) => async ({ data }) => {    
    const validation = userValidator(data)
    return validation
}
