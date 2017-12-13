import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

const SignInForm = ({ onSignIn }) => {
  return (
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
      /><br/>
      <TextField
        type="password"
        name="password"
        label="Password"
        placeholder="Enter password"
        margin="normal"
      /><br/>
      <Button type="submit" raised color="primary">
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm
