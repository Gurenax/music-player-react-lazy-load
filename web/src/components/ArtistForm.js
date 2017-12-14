import React from 'react'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'

const ArtistForm = ({
  onArtistSave
}) => {
  return (
    <div>
      <Typography type="subheading">Artist Form</Typography>
      <form className="width100"
            onSubmit={event => {
              event.preventDefault()
              const form = event.target
              const elements = form.elements // Allows looking up fields using their 'name' attributes

              // Get entered values from fields
              const name = elements.name.value
              const bio = elements.bio.value

              // Pass this information along to the parent component
              onArtistSave({ name, bio })

              // Clear form values after save
              elements.name.value = ''
              elements.bio.value = ''
            }}
      >
        <TextField
          required
          type="text"
          name="name"
          label="Name"
          placeholder="Enter name"
          margin="normal"
          className="width100"
        /><br/>
        <TextField
          name="bio"
          label="Biography"
          multiline
          rows="4"
          rowsMax="4"
          margin="normal"
          className="width100"
        /><br/>
        <Button type="submit" raised color="primary">
          Save Artist
        </Button>
      </form>
    </div>
  )
}

export default ArtistForm