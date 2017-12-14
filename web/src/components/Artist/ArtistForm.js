import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Card, { CardContent } from 'material-ui/Card'

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

const ArtistForm = ({ classes, title, onArtistSave }) => {
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
            fullWidth={true}
          />
          
          <TextField
            name="bio"
            label="Biography"
            multiline
            rows="4"
            rowsMax="4"
            margin="normal"
            fullWidth={true}
          />
          
          <Button
            type="submit"
            raised
            color="primary"
            className={classes.button}
          >
            Save Artist
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

ArtistForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ArtistForm)
