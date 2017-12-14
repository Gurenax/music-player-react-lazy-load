const express = require('express')
const Song = require('../models/Song')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// GET - Read all songs
router.get('/songs', (req, res) => {
  Song.find()
    .then(songs => {
      res.json(songs)
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// GET - Read an individual song document
router.get('/songs/:id', (req, res) => {
  const id = req.params.id
  Song.findById(id)
    .then(song => {
      if (song) {
        res.json(song)
      } else {
        res.status(404).json({ error: `Song not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// POST - Create a new song document
router.post('/songs', authMiddleware.requireJWT, (req, res) => {
  const attributes = req.body
  Song.create(attributes)
    .then(song => {
      res.status(201).json(song)
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// PATCH - Update a song document
router.patch('/songs/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  const attributes = req.body
  Song.findByIdAndUpdate(id, attributes, { new: true, runValidators: true })
    .then(song => {
      if (song) {
        res.status(200).json(song)
      } else {
        res.status(404).json({ error: `Song not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// DELETE - Destroy a song document
router.delete('/songs/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  Song.findByIdAndRemove(id)
    .then(song => {
      if (song) {
        res.status(200).json(song)
      } else {
        res.status(404).json({ error: `Song not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

module.exports = router
