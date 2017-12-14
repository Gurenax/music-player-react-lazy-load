import api from './init'

export const listSongs = () => {
  return api
    .get('/songs')
    .then(res => res.data)
    .catch(error => {
      throw error
    })
}

export const deleteSong = songId => {
  return api
    .delete(`/songs/${songId}`)
    .then(res => res.data)
    .catch(error => {
      throw error
    })
}
