import React, { Component } from 'react'
import './App.css'
import { signIn, signUp, signOutNow } from './api/auth'
import { getDecodedToken } from './api/token'
import { listArtists } from './api/artist'

import SignInForm from './components/SignInForm'
import Error from './components/Error'
import ArtistList from './components/ArtistList'

import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'


class App extends Component {
  state = {
    decodedToken: getDecodedToken(), // Sign In Data
    error: null
  }

  onSignIn = ({ email, password }) => {
    signIn({ email, password }).then(decodedToken => {
      this.setState({
        decodedToken,
        error: null,
        products: null
      })
    })
    .catch( error => {
      this.setState({ error })
    })
  }

  onSignUp = ({ email, password, firstName, lastName }) => {
    signUp({ email, password, firstName, lastName }).then(decodedToken => {
      this.setState({ decodedToken })
    })
    .catch( error => {
      this.setState({ error })
    })
  }

  onSignOut = () => {
    signOutNow()
    this.setState({
      decodedToken: null,
      error: null
    })
  }

  render() {
    const { decodedToken, error } = this.state
    const signedIn = !!decodedToken

    return (
      <div className="App">
        <Typography type="display1">
          Music Player using React with Lazy Load Pattern
        </Typography>

        {!!error && <Error error={ error } />}
        
        {!signedIn && <SignInForm onSignIn={ this.onSignIn } />}

        {signedIn && <Button raised color="primary" onClick={ this.onSignOut } >Sign Out</Button>}

        <ArtistList artists={ this.dataForSection('artists') } />
      </div>
    )
  }

  sections = {
    artists: {
      requireAuth: true,
      load: listArtists,
    }
  }

  loadSection(section) {
    const { pending, requireAuth, load } = this.sections[section]
    // If already loading
    if (pending) {
      return
    }

    // If requires authentication and not signed in
    if (requireAuth && this.state.decodedToken == null) {
      return
    }

    // If already loaded
    if (this.state[section]) {
      return
    }
    
    this.sections[section].pending = true
    
    load()
      .then((data) => {
        this.setState({
          [section]: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }

  dataForSection(section) {
    this.loadSection(section)
    return this.state[section]
  }
}

export default App
