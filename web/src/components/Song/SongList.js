import React from 'react'

import SongItem from './SongItem'

import Grid from 'material-ui/Grid'
import List, { ListSubheader } from 'material-ui/List';

const SongList = ({
  songs,
  onSongDelete
}) => {
  return (
    <div>
      {!!songs ? (
      <List dense={false} subheader={<ListSubheader>Songs</ListSubheader>}>
        {songs.map( song => (
          <SongItem key={song._id} song={song} onSongDelete={onSongDelete} />
        ))}
      </List>
      ) : (
        <p>Loading songs...</p>
      )}
    </div>
  )
}

export default SongList