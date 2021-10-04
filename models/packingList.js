const mongoose = require('mongoose')

const packingListSchema = mongoose.Schema({
  name: {type: String, required: true},
  bucketList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BucketList',
  }
}, {timestamps: true})


module.exports = mongoose.model('PackingList', packingListSchema)
