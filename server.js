const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const bucketListController = require('./controllers/bucketList')


app.use('/bucketList', bucketListController)
app.use(express.json())

app.listen(PORT, () => console.log('listening on port', PORT))
