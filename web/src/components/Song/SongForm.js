import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Card, { CardContent } from 'material-ui/Card'
// import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';


const styles = theme => ({
  root: {
    width: '100%'
  },
  card: {
    minWidth: 300,
  },
  button: {
    marginTop: theme.spacing.unit,
  }
})

const SongForm = ({
  classes,
  title,
  artists,
  onSongSave
}) => {
  return (
    // <div className={classes.root}>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="subheading">{ title }</Typography>
        <form
          onSubmit={event => {
            event.preventDefault()
            const form = event.target
            const elements = form.elements // Allows looking up fields using their 'name' attributes

            // Get entered values from fields
            const title = elements.title.value
            const lyrics = elements.lyrics.value
            const artist = elements.artist.value

            // Pass this information along to the parent component
            onSongSave({ title, lyrics, artist })

            // Clear form values after save
            elements.title.value = ''
            elements.lyrics.value = ''
            elements.artist.value = ''
          }}
        >
          <TextField
            required
            type="text"
            name="title"
            label="Title"
            placeholder="Enter title"
            margin="normal"
            fullWidth={true}
          />
          
          <TextField
            name="lyrics"
            label="Lyrics"
            multiline
            rows="4"
            rowsMax="4"
            margin="normal"
            fullWidth={true}
          />
          
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="name-readonly">Artist</InputLabel>
            <Select
              native={true}
              input={<Input name="artist" id="artist" />}
            >
              <option value="" />
              {!!artists && artists.map( artist => (
                <option key={artist._id} value={artist._id}>{artist.name}</option>
              ))}
            </Select>
          </FormControl>
          
          <Button
            type="submit"
            raised
            color="primary"
            className={classes.button}
          >
            Save Song
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

SongForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SongForm)
