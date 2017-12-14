import React from 'react'
import {
  ListItem,
  ListItemAvatar,
  // ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import MusicNoteIcon from 'material-ui-icons/MusicNote'
import DeleteIcon from 'material-ui-icons/Delete'

const ArtistItem = ({
  artist,
  onArtistDelete
}) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <MusicNoteIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={artist.name}
      secondary={artist.bio}
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => onArtistDelete(artist._id)} >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

export default ArtistItem