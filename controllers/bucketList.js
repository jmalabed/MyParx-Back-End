const express = require('express')
const router = express.Router()
const BucketList = require('../models/bucketList');
// -- index --
router.get('/', async (req, res) => {
  try {
    const bucketItem = BucketList.create(req.body)
    res.status(200).json(bucketItem)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// -- show --


// -- create --


// -- destory --


// -- update --


module.exports = router
