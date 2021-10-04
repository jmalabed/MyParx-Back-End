const express = require('express')
const router = express.Router()
const PackingList = require('../models/packingList');

// -- index --
router.get('/', async (req, res) => {
  try {
    const PackingItems = await PackingList.find()
    res.status(200).json(PackingItems)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// -- show --
router.get('/:id', async (req, res) => {
  try {
    const foundPackingItem = await PackingList.findById(req.params.id)
    res.status(200).json(foundPackingItem)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

// -- create --
router.post('/', async (req, res) => {
  try {
    const newPackingItem = await PackingList.create(req.body)
    res.status(200).json(newPackingItem)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

// -- destory --
router.delete('/:id', async (req, res) => {
  try {
    const deletedPackingItem = await PackingList.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedPackingItem)
  } catch(error) {
    res.status(400).json({ error: err.message })
  }
})

// -- update --
router.put('/:id', async (req, res) => {
  try {
    const updatedPackingItem = await PackingList.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPackingItem)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})


module.exports = router
