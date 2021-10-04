const mongoose = require('mongoose')

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))


// Connection string (we will be replacing this later with environmental variables)
mongoose.connect('mongodb://localhost:27017/bucketList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})
