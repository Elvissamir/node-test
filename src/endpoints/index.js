const endpoints = {
    userEnpoint: '/api/users',
    createUserEnpoint: `${this.userEnpoint}`,
    singleUserEndpoint: `${this.userEnpoint}/:user`,
    updateUserEndpoint: `${this.userEnpoint}/:user`,
    deleteUserEnpoint: `${this.userEnpoint}/:user`,
    loginEndpoint: '/api/login',
    imagesEndpoint: '/api/images'
}

module.exports = endpoints