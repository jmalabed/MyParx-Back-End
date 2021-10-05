const express = require('express')
const router = express.Router()
const PackingList = require('../models/packingList');

// -- index --
router.get('/', async (req, res) => {
  try {
    const PackingLists = await PackingList.find()
    res.status(200).json(PackingLists)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// -- show --
router.get('/:id', async (req, res) => {
  try {
    const foundPackingList = await PackingList.findById(req.params.id)
    res.status(200).json(foundPackingList)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

// -- create --
router.post('/', async (req, res) => {
  try {
    const newPackingList = await PackingList.create(req.body)
    res.status(200).json(newPackingList)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})

// -- destory --
router.delete('/:id', async (req, res) => {
  try {
    const deletedPackingList = await PackingList.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedPackingList)
  } catch(error) {
    res.status(400).json({ error: err.message })
  }
})

// -- update --
router.put('/:id', async (req, res) => {
  try {
    const updatedPackingList = await PackingList.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedPackingList)
  } catch(error) {
    res.status(400).json({ error: error.message })
  }
})


module.exports = router
