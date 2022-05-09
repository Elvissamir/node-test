const app = require('./src/app')
const port = process.env.DEV_PORT || 3000

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})
