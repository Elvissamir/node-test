const app = require('./src/app')
const port = process.env.DEV_PORT || 3001
const {join} = require('path');

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'instructions.html'));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
