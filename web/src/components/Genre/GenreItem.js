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
import LibraryMusicIcon from 'material-ui-icons/LibraryMusic'
import DeleteIcon from 'material-ui-icons/Delete'

const GenreItem = ({
  genre,
  onGenreDelete
}) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar>
        <LibraryMusicIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={genre.name}
      // secondary={}
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => onGenreDelete(genre._id)} >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
)

export default GenreItem