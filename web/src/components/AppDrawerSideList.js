import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
// import InboxIcon from 'material-ui-icons/MoveToInbox';
// import DraftsIcon from 'material-ui-icons/Drafts';
// import SendIcon from 'material-ui-icons/Send';
// import ExpandLess from 'material-ui-icons/ExpandLess';
// import ExpandMore from 'material-ui-icons/ExpandMore';
// import StarBorder from 'material-ui-icons/StarBorder';

import MusicNoteIcon from 'material-ui-icons/MusicNote'
import PlayCircleOutlineIcon from 'material-ui-icons/PlayCircleOutline'
import LibraryMusicIcon from 'material-ui-icons/LibraryMusic'
import CreateIcon from 'material-ui-icons/Create'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  link: {
    textDecoration: 'none'
  }
});

const AppDrawerSideList = ({
  classes
}) => {
  // state = { open: true };

  // handleClick = () => {
  //   this.setState({ open: !this.state.open });
  // };

  // const { classes } = this.props;

  return (
    <List className={classes.root} subheader={<ListSubheader>Menu</ListSubheader>}>
      
      <Link className={classes.link} to='/artists'>
        <ListItem button>
          <ListItemIcon>
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText inset primary="Artists" />
        </ListItem>
      </Link>
      <List disablePadding>
        <Link className={classes.link} to='/artists/new'>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText inset primary="New" />
          </ListItem>
        </Link>
      </List>

      <Link className={classes.link} to='/songs'>
        <ListItem button>
          <ListItemIcon>
            <PlayCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText inset primary="Songs" />
        </ListItem>
      </Link>
      <List disablePadding>
        <Link className={classes.link} to='/songs/new'>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText inset primary="New" />
          </ListItem>
        </Link>
      </List>
      

      <Link className={classes.link} to='/genres'>
        <ListItem button>
          <ListItemIcon>
            <LibraryMusicIcon />
          </ListItemIcon>
          <ListItemText inset primary="Genres" />
        </ListItem>
      </Link>
      <List disablePadding>
        <Link className={classes.link} to='/genres/new'>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText inset primary="New" />
          </ListItem>
        </Link>
      </List>
    </List>
  )
}

AppDrawerSideList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppDrawerSideList);