const express = require('express')
const Artist = require('../models/Artist')
const Song = require('../models/Song')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// GET - Read all artists
router.get('/artists', (req, res) => {
  Artist.find()
    .then(artists => {
      res.json(artists)
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// GET - Read an individual artist document
router.get('/artists/:id', (req, res) => {
  const id = req.params.id
  Artist.findById(id)
    .then(artist => {
      if (artist) {
        res.json(artist)
      } else {
        res.status(404).json({ error: `Artist not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// POST - Create a new artist document
router.post('/artists', authMiddleware.requireJWT, (req, res) => {
  const attributes = req.body
  Artist.create(attributes)
    .then(artist => {
      res.status(201).json(artist)
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// PATCH - Update a artist document
router.patch('/artists/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  const attributes = req.body
  Artist.findByIdAndUpdate(id, attributes, { new: true, runValidators: true })
    .then(artist => {
      if (artist) {
        res.status(200).json(artist)
      } else {
        res.status(404).json({ error: `Artist not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// DELETE - Destroy a artist document
router.delete('/artists/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  // First, delete the songs of that artist
  Song.remove(
    { artist : id }
  )
  .then( song => {
    // Then, delete the artist
    Artist.findByIdAndRemove(id)
    .then(artist => {
      if (artist) {
        res.status(200).json(artist)
      } else {
        res.status(404).json({ error: `Artist not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
  })
  .catch(error => {
    res.status(400).json({ error: error })
  })
})

module.exports = router
