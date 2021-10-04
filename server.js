const express = require('express')
const app = express()
require('./db/db')
const PORT = process.env.PORT || 9000
const bucketListController = require('./controllers/bucketList')
const packingListItemController = require('./controllers/packingListItem')


app.use(express.json())
app.use('/bucketList', bucketListController)
app.use('/packingListItem', packingListItemController)


app.listen(PORT, () => console.log('listening on port', PORT))
