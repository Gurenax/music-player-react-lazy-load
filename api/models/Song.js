const mongoose = require('./init')
const Schema = mongoose.Schema

const songSchema = new Schema({
  title: { type: String, required : true }, // e.g. Perfect Duet
  lyrics: { type: String, required : true },  // e.g. I found a love / For me / Oh darling, just dive right in
  artist: { type: Schema.ObjectId, ref: 'Artist', required: true }, // e.g. Ed Sheeran
  featArtist: [{ type: Schema.ObjectId, ref: 'Artist', default: [] }], // e.g. Beyonce
  genre: [{ type: Schema.ObjectId, ref: 'Genre', default: [] }] // e.g. Pop
})

const Artist = mongoose.model('Artist', songSchema)

module.exports = Artist