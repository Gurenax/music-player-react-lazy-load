const mongoose = require('./init')
const Schema = mongoose.Schema

const genreSchema = new Schema({
  name: { type: String, required : true }, // e.g. Pop
  songs: [{ type: Schema.ObjectId, ref: 'Songs', default: [] }]
})

const Genre = mongoose.model('Genre', genreSchema)

module.exports = Genre