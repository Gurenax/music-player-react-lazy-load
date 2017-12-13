# Music Player using React Lazy Load pattern

## Modules
### API
- express
- body-parser
- nodemon --dev
- mongoose
- passport
- passport-local
- passport-local-mongoose
- passport-jwt
- dotenv --dev

### WEB
- create-react-app
- axios
- jwt-decode
- material-ui@next
- material-ui-icons


## Models
### Artist
- name: String
- bio: String
- songs: [Song]

### Song
- title: String
- lyrics: String
- artist: Artist
- featArtist: [Artist]
- genres: [Genre]

### Genre
- name: String
- songs: [Song]

## Relationships
- Artist has many Songs
- Song has one Artist
- Song has many featArtist
- Song has many Genres
- Genre has many Songs