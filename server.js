const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000
const parksController = require('./controllers/parks')

app.use('/parks', parksController)


app.listen(PORT, () => console.log('listening on port', PORT))
