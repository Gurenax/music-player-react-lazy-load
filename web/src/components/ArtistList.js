import React from 'react'

import ArtistItem from './ArtistItem'

import Grid from 'material-ui/Grid'
import List, { ListSubheader } from 'material-ui/List';

const ArtistList = ({
  artists,
  onArtistDelete
}) => {
  return (
    <div>
      {!!artists ? (
      <List dense={false} subheader={<ListSubheader>Artists</ListSubheader>}>
        {artists.map( artist => (
          <ArtistItem key={artist._id} artist={artist} onArtistDelete={onArtistDelete} />
        ))}
      </List>
      ) : (
        <p>Loading artists...</p>
      )}
    </div>
  )
}

export default ArtistList