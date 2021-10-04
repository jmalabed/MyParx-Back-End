const express = require('express')
const app = express()
require('./db/db')
const PORT = process.env.PORT || 9000
const bucketListController = require('./controllers/bucketList')
const packingListItemController = require('./controllers/packingListItem')
const packingListController = require('./controllers/packingList')


app.use(express.json())
app.use('/bucketList', bucketListController)
app.use('/packingListItem', packingListItemController)
app.use('/packingList', packingListController)


app.listen(PORT, () => console.log('listening on port', PORT))
