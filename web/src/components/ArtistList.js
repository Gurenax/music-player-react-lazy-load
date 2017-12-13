import React from 'react'

import ArtistItem from './ArtistItem'

import Grid from 'material-ui/Grid'
import List, { ListSubheader } from 'material-ui/List';
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';

const ArtistList = ({
  artists
}) => {
  return (
    <Grid container xs>
      <List dense={false} subheader={<ListSubheader>Artists</ListSubheader>}>
        {!!artists && artists.map( artist => (
          <ArtistItem artist={artist.name} bio={artist.bio} />
        ))}
      </List>
    </Grid>
  )
}

export default ArtistList