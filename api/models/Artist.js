const mongoose = require('./init')
const Schema = mongoose.Schema

const artistSchema = new Schema({
  name: { type: String, required : true }, // e.g. Ed Sheeran
  bio: { type: String, required : false }, // e.g. Edward Christopher Sheeran, (born 17 February 1991) is an English singer, songwriter, guitarist, and record producer. Sheeran was born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk.
  songs: [{ type: Schema.ObjectId, ref: 'Songs', default: [] }]
})

// artistSchema.pre('remove', next => {
//   // this.songs.map( song => {
//   //   Song.findByIdAndRemove(song).exec()
//   // })
//   // console.log('Artist remove pre hook', this.songs)
//   Song.remove( { _id : { $in: this.songs } } ).exec()
//   next()
//     // .then( songs => {
//     //   Promise.all( songs.map( song => Song.findByIdAndRemove(song._id)))
//     //     .then( next( ))
//     // })

//   // Song.remove(
//   //   { _id : { $in: this.songs } }
//   // )
//   // .exec()
//   // next()
// })

// artistSchema.pre('remove', next => {
//   this.songs.map( song => {
//     console.log('Removing song', song._id)
//     Songs.findOneAndRemove({
//       _id: song._id
//     }).exec()
//   })
//   next()
// })

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist