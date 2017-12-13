const mongoose = require('./init')
const Schema = mongoose.Schema

const artistSchema = new Schema({
  name: { type: String, required : true }, // e.g. Ed Sheeran
  bio: { type: String, required : false }, // e.g. Edward Christopher Sheeran, (born 17 February 1991) is an English singer, songwriter, guitarist, and record producer. Sheeran was born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk.
  songs: [{ type: Schema.ObjectId, ref: 'Songs', default: [] }]
})

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist