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
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline'
import DeleteIcon from 'material-ui-icons/Delete';

const SongItem = ({
  song,
  onSongDelete
}) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <PlayCircleOutlineIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={song.title}
      secondary={song.artist.name}
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => onSongDelete(song._id)} >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

export default SongItem