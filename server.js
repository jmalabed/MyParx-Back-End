const express = require('express')
const app = express()
require('./db/db')
const PORT = process.env.PORT || 9000
const bucketListController = require('./controllers/bucketList')

app.use(express.json())
app.use('/bucketList', bucketListController)

app.listen(PORT, () => console.log('listening on port', PORT))
