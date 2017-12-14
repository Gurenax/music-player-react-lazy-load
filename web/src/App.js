import React, { Component } from 'react'
import './App.css'
import { signIn, signUp, signOutNow } from './api/auth'
import { getDecodedToken } from './api/token'
import { listArtists, addArtist } from './api/artist'

import SignInForm from './components/SignInForm'
import Error from './components/Error'
import ArtistList from './components/ArtistList'
import ArtistForm from './components/ArtistForm'

import AppBarTop from './components/AppBarTop'
// import AppDrawer from './components/AppDrawer'

// import Grid from 'material-ui/Grid'
// import Button from 'material-ui/Button'
// import Typography from 'material-ui/Typography'
// import Toolbar from 'material-ui/Toolbar'
// import IconButton from 'material-ui/IconButton'
// import MenuIcon from 'material-ui-icons/Menu';
// import AccountCircle from 'material-ui-icons/AccountCircle';
// import Menu, { MenuItem } from 'material-ui/Menu';

class App extends Component {
  state = {
    decodedToken: getDecodedToken(), // Sign In Data
    error: null,
    leftDrawer: false
  }

  onSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then(decodedToken => {
        this.setState({
          decodedToken,
          error: null
        })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  onSignUp = ({ email, password, firstName, lastName }) => {
    signUp({ email, password, firstName, lastName })
      .then(decodedToken => {
        this.setState({ decodedToken })
      })
      .catch(error => {
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

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  onArtistSave = data => {
    addArtist(data)
      .then(artist => {
        this.setState(prevState => {
          const artists = prevState.artists.concat(artist)
          return {
            artists,
            error: null
          }
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { decodedToken, error, leftDrawer } = this.state
    const signedIn = !!decodedToken

    return (
      <div className="App">
        <AppBarTop
          title="Music Player"
          signedIn={signedIn}
          onSignOut={this.onSignOut}
          leftDrawer={leftDrawer}
          toggleDrawer={this.toggleDrawer}
        />

        {!!error && <Error error={error} />}

        {!signedIn && <SignInForm onSignIn={this.onSignIn} />}

        {<ArtistList artists={this.dataForSection('artists')} />}

        {!!signedIn && <ArtistForm onArtistSave={this.onArtistSave} />}
      </div>
    )
  }

  sections = {
    artists: {
      requireAuth: false,
      load: listArtists
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
      .then(data => {
        this.setState({
          [section]: data
        })
      })
      .catch(error => {
        this.setState({
          error
        })
      })
  }

  dataForSection(section) {
    console.log('dataForSection', section)
    this.loadSection(section)
    return this.state[section]
  }

  componentDidUpdate() {

  }
}

export default App
