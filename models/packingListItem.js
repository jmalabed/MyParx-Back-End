const mongoose = require('mongoose');


const packingListItemSchema = mongoose.Schema({
    item: String,
    isPacked: Boolean, default: false,  packingList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PackingList',
        required: true
      }
}, { timestamps: true })


module.exports = mongoose.model('PackingListItem', packingListItemSchema)
