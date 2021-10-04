const mongoose = require('mongoose');


const packingListItemSchema = mongoose.Schema({
    item: String,
    isPacked: Boolean, default: false
}, { timestamps: true })

module.exports = mongoose.model('PackingListItem', packingListItemSchema)
