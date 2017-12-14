import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
// import Button from 'material-ui/Button'
import List from 'material-ui/List'
import Divider from 'material-ui/Divider'
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import AppDrawerSideList from './AppDrawerSideList'

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
}

const AppDrawer = ({
  classes,
  leftDrawer,
  toggleDrawer
}) => {
  // const { classes, leftDrawer } = this.props

  const sideList = (
    <div className={classes.list}>
      <List>
        <AppDrawerSideList />
      </List>
      <Divider />
    </div>
  )

  return (
    <Drawer
      open={leftDrawer}
      onRequestClose={toggleDrawer('leftDrawer', false)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={toggleDrawer('leftDrawer', false)}
        onKeyDown={toggleDrawer('leftDrawer', false)}
      >
        {sideList}
      </div>
    </Drawer>
  )
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppDrawer)
