module.exports = function (req, res, next) {
    console.log('admin middleware')
    if (!req.user.isAdmin) 
        return res.status(403).send('Access denied.')
    next()
}