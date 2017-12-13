const Artist = require('./Artist')
const Song = require('./Song')
const Genre = require('./Genre')

Artist.create(
  {
    name: 'Ed Sheeran',
    bio:
      'Edward Christopher Sheeran, (born 17 February 1991) is an English singer, songwriter, guitarist, and record producer. Sheeran was born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk.'
  }
)
  .then(artist => {
    console.log('Created artist', artist)
    
    console.log('artist id', artist._id)
    Song.create(
      {
        title: 'Perfect Duet',
        artist: artist._id,
        lyrics: `I found a love for me
          Oh darling, just dive right in and follow my lead
          Well, I found a girl beautiful and sweet
          Oh, I never knew you were the someone waiting for me
          
          'Cause we were just kids when we fell in love
          Not knowing what it was, I will not give you up this time
          But darling, just kiss me slow, your heart is all I own
          And in your eyes, you're holding mine
          
          Baby, I'm dancing in the dark with you between my arms
          Barefoot on the grass, listening to our favorite song
          When you said you looked a mess, I whispered underneath my breath
          But you heard it, darling, you look perfect tonight
          
          
          Well, I found a man stronger than anyone I know
          He shares my dreams, I hope that someday we'll share a home
          I found a love, to carry more than just my secrets
          To carry love, to carry children of our own
          
          We are still kids, but we're so in love
          Fighting against all odds, I know we'll be alright this time
          Darling, just hold my hand, be your girl, you'll be my man
          And I see my future in your eyes
          
          Well baby, I'm dancing in the dark, with you between my arms
          Barefoot on the grass, while listening to our favorite song
          When I saw you in that dress, looking so beautiful
          I don't deserve this, darling, you look perfect tonight
          
          Baby, I'm dancing in the dark, with you between my arms
          Barefoot on the grass, while listening to our favorite song
          I have faith in what I see, now I know I have met
          An angel in person, and she looks perfect
          
          No, I don't deserve it, you look perfect tonight`
      }
    )
      .then(song => {
        console.log('Created song', song)
      })
      .catch(error => {
        console.error('Error creating song', error)
      })
  })
  .catch(error => {
    console.error('Error creating artist', error)
  })

Genre.create(
  {
    name: 'Pop',
  }
)
  .then(genre => {
    console.log('Created genre', genre)
  })
  .catch(error => {
    console.error('Error creating genre', error)
  })