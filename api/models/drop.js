const Artist = require('./Artist')
const Song = require('./Song')
const Genre = require('./Genre')

Artist.deleteMany().then(() => {
  console.log('Deleted artists')
})

Song.deleteMany().then(() => {
  console.log('Deleted songs')
})

Genre.deleteMany().then(() => {
  console.log('Deleted genre')
})