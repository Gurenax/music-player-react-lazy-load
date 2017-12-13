const express = require('express')
const Genre = require('../models/Genre')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// GET - Read all genres
router.get('/genres', authMiddleware.requireJWT, (req, res) => {
  Genre.find()
    .then(genres => {
      res.json(genres)
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// GET - Read an individual genre document
router.get('/genres/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  Genre.findById(id)
    .then(genre => {
      if (genre) {
        res.json(genre)
      } else {
        res.status(404).json({ error: `Genre not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error.message })
    })
})

// POST - Create a new genre document
router.post('/genres', authMiddleware.requireJWT, (req, res) => {
  const attributes = req.body
  Genre.create(attributes)
    .then(genre => {
      res.status(201).json(genre)
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// PATCH - Update a genre document
router.patch('/genres/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  const attributes = req.body
  Genre.findByIdAndUpdate(id, attributes, { new: true, runValidators: true })
    .then(genre => {
      if (genre) {
        res.status(200).json(genre)
      } else {
        res.status(404).json({ error: `Genre not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

// DELETE - Destroy a genre document
router.delete('/genres/:id', authMiddleware.requireJWT, (req, res) => {
  const id = req.params.id
  Genre.findByIdAndRemove(id)
    .then(genre => {
      if (genre) {
        res.status(200).json(genre)
      } else {
        res.status(404).json({ error: `Genre not found with id: ${id}` })
      }
    })
    .catch(error => {
      res.status(400).json({ error: error })
    })
})

module.exports = router
