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
router.get('/:id', async (req, res) => {
  try {
    const foundBucketItem = await BucketList.findById(req.params.id)
    res.status(200).json(foundBucketItem)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

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
router.delete('/:id', async (req, res) => {
  try {
    const deletedBucketItem = await BucketList.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedBucketItem)
  } catch(error) {
    res.status(400).json({ error: err.message })
  }
})

// -- update --


module.exports = router
