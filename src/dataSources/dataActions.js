const fs = require('fs/promises')
const databaseDir = __dirname+'/data.json'
const format = 'utf-8'

const readData = async () => {  
    try {
        const result = await fs.readFile(databaseDir, format)
        const data = JSON.parse(result)
        return data
    }
    catch (ex) {
        return ex
    }
}

module.exports = {
    readData
}