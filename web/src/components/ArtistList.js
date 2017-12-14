import React from 'react'

import ArtistItem from './ArtistItem'

import Grid from 'material-ui/Grid'
import List, { ListSubheader } from 'material-ui/List';

const ArtistList = ({
  artists
}) => {
  return (
    <Grid container>
      <List dense={false} subheader={!!artists && <ListSubheader>Artists</ListSubheader>}>
        {!!artists && artists.map( artist => (
          <ArtistItem key={artist._id} artist={artist} />
        ))}
      </List>
    </Grid>
  )
}

export default ArtistList