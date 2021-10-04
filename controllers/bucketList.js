const express = require('express')
const router = express.Router()
const BucketList = require('../models/bucketList');

// -- index --
router.get('/', async (req, res) => {
  try {
    const bucketItems = await BucketList.find()
    res.status(200).json(bucketItems)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// -- show --


// -- create --
router.post('/', async (req, res) => {
  try {
    const newBucketItem = await BucketList.create(req.body)
    res.status(200).json(newBucketItem)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

// -- destory --


// -- update --


module.exports = router
