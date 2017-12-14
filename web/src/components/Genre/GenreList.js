import React from 'react'
import GenreItem from './GenreItem'
import List, { ListSubheader } from 'material-ui/List'

const GenreList = ({
  genres,
  onGenreDelete
}) => {
  return (
    <div>
      {!!genres ? (
      <List dense={false} subheader={<ListSubheader>Genre</ListSubheader>}>
        {genres.map( genre => (
          <GenreItem key={genre._id} genre={genre} onGenreDelete={onGenreDelete} />
        ))}
      </List>
      ) : (
        <p>Loading genres...</p>
      )}
    </div>
  )
}

export default GenreList