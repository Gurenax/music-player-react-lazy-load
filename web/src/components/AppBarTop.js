import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

import AppDrawer from './AppDrawer'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const AppBarTop = ({
  classes,
  title,
  signedIn,
  onSignOut,
  leftDrawer,
  toggleDrawer
}) => {
  // const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
            onClick={toggleDrawer('leftDrawer', true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {title}
          </Typography>
          {signedIn ? (
            <Button color="contrast" onClick={onSignOut}>
              Sign Out
            </Button>
          ) : (
            <Button color="contrast">
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <AppDrawer leftDrawer={ leftDrawer } toggleDrawer={ toggleDrawer } />

    </div>
  )
}

AppBarTop.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarTop)
