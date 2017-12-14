import api from './init'

export const listArtists = () => {
  return api
    .get('/artists')
    .then(res => res.data)
    .catch(error => {
      throw error
    })
}

// export const getArtist = artistId => {
//   return api
//     .get(`/artists/${artistId}`)
//     .then(res => res.data)
//     .catch(error => {
//       throw error
//     })
// }

export const addArtist = artist => {
  return api
    .post('/artists', artist)
    .then(res => {
      const newArtist = res.data
      return newArtist
    })
    .catch(error => {
      throw error
    })
}

// export const updateProduct = product => {
//   return api
//     .patch(`/artists/${product.id}`, {
//       brandName: product.brandName,
//       name: product.name,
//       categories: product.categories
//     })
//     .then(res => {
//       const newProduct = res.data
//       return newProduct
//     })
//     .catch(error => {
//       throw error
//     })
// }

// export const deleteProduct = artistId => {
//   return api
//     .delete(`/artists/${artistId}`)
//     .then(res => res.data)
//     .catch(error => {
//       this.setState({ error })
//     })
// }
