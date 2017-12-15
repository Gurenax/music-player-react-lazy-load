import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
// import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    textAlign: 'center'
  },
  field: {
    minWidth: '300px'
  },
  button: {
    margin: theme.spacing.unit,
  }
})

const SignInForm = ({ 
  classes,
  onSignIn
}) => {
  return (
    <div className={classes.root}>
      <form
        onSubmit={event => {
          event.preventDefault()
          const form = event.target
          const elements = form.elements // Allows looking up fields using their 'name' attributes

          // Get entered values from fields
          const email = elements.email.value
          const password = elements.password.value

          // Pass this information along to the parent component
          onSignIn({ email, password })
        }}
      >
        <TextField
          type="email"
          name="email"
          label="E-mail"
          placeholder="Enter e-mail"
          margin="normal"
          className={classes.field}
        /><br/>
        <TextField
          type="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          margin="normal"
          className={classes.field}
        /><br/>
        <Button type="submit" raised color="primary" className={classes.button}>
          Sign In
        </Button>
        <Button type="button" raised color="primary" className={classes.button}>
          Sign Up
        </Button>
      </form>
    </div>
  )
}

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignInForm)