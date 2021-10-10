const mongoose = require('mongoose');
const falseBool = { type: Boolean, default: false }

const bucketListSchema = mongoose.Schema({
    name: { type: String, required: true },
    isFav: falseBool,
    visited: falseBool,
    date: { type: Date, default: Date.now },
    people: [String],
    dogFriendly: falseBool
}, { timestamps: true })


module.exports = mongoose.model('BucketList', bucketListSchema)
