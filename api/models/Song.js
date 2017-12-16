const mongoose = require('./init')
const Schema = mongoose.Schema

const songSchema = new Schema({
  title: { type: String, required : true }, // e.g. Perfect Duet
  lyrics: { type: String, required : true },  // e.g. I found a love / For me / Oh darling, just dive right in
  artist: { type: Schema.ObjectId, ref: 'Artist', required: true }, // e.g. Ed Sheeran
  featArtist: [{ type: Schema.ObjectId, ref: 'Artist', default: [] }], // e.g. Beyonce
  genres: [{ type: Schema.ObjectId, ref: 'Genre', default: [] }] // e.g. Pop
})

// songSchema.pre('save', function(next) { // For `this` to work: https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave/41212614#41212614
//   console.log('PRE SAVE', this)  
//   next()
// })

// songSchema.pre('remove', next => {
//   console.log('PRE REMOVE')
//   next()
// })

// songSchema.post('save', function(song) {
//   console.log('POST SAVE: Song saved', song.artist, song._id)
//   // Artist.update(
//   //   { _id: song.artist },
//   //   { $addToSet : { songs: song._id } }
//   // ).exec()
// })

const Song = mongoose.model('Song', songSchema)

module.exports = Song