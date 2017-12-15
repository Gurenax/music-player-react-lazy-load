const mongoose = require('./init')
const Artist = require('./Artist')
const Schema = mongoose.Schema

const songSchema = new Schema({
  title: { type: String, required : true }, // e.g. Perfect Duet
  lyrics: { type: String, required : true },  // e.g. I found a love / For me / Oh darling, just dive right in
  artist: { type: Schema.ObjectId, ref: 'Artist', required: true }, // e.g. Ed Sheeran
  featArtist: [{ type: Schema.ObjectId, ref: 'Artist', default: [] }], // e.g. Beyonce
  genres: [{ type: Schema.ObjectId, ref: 'Genre', default: [] }] // e.g. Pop
})

songSchema.post('save', doc => {
  // console.log('Song saved! Post hook..', doc.artist, doc._id)
  Artist.updateOne(
    { _id: doc.artist },
    { $addToSet : { songs: doc._id } }
  ).exec()
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song