import api from './init'

export const listGenres = () => {
  return api
    .get('/genres')
    .then(res => res.data)
    .catch(error => {
      throw error
    })
}

export const addGenre = genre => {
  return api
    .post('/genres', genre)
    .then(res => {
      const newGenre = res.data
      return newGenre
    })
    .catch(error => {
      throw error
    })
}

export const deleteGenre = genreId => {
  return api
    .delete(`/genres/${genreId}`)
    .then(res => res.data)
    .catch(error => {
      throw error
    })
}
