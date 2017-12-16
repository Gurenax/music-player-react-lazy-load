const Artist = require('./Artist')
const Song = require('./Song')
const Genre = require('./Genre')

Promise.all([
  Artist.deleteMany(),
  Song.deleteMany(),
  Genre.deleteMany()
])
.then ( () => {
  console.log('Artist, Song, Genre deleted')
  process.exit()
})