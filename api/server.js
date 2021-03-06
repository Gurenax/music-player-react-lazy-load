const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = express()

// Middleware Plugins
server.use(bodyParser.json())

// Cross-Origin Resource Sharing
server.use(cors())

// Routes
server.use('/', [
  require('./routes/auth'),
  require('./routes/artist.js'),
  require('./routes/song.js'),
  require('./routes/genre.js')
])

// Start the server
server.listen(7000, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7000')
})