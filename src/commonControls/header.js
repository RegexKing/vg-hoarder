import React from 'react';
import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from "prop-types";
React.PropTypes = PropTypes;

const styles = theme => ({
  header: {
    backgroundColor: "#fff",
    height: 99,
    boxShadow: 'none',
    paddingBottom: 31,
    borderBottom: '2px solid #c7c2c2'
  },

  logo: {
    width: '90%',
    marginTop: '0px'
  },
  root: {
    width: '100%',
  },
  grow: {
    textAlign: 'center',
    flexGrow: 1,
  },
  heading1: {
    fontSize: 24,
    letterSpacing: 2,
    margin: 0
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#333',
    position: 'absolute',
    top: 51,
    left: '3px',
    zIndex: '10000'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  rightText: {
    fontSize: 18,
    textAlign: 'right',
    textTransform: 'uppercase',
    fontFamily: 'Arial, Helvetica, sans-serif',
    '&& h3':{
      margin: 0,
      padding: 0,
      fontSize: 14,
      color: '#0039a7'
    },
    '&& h4':{
      margin: 0,
      padding: '5px 0px 2px 0',
      fontSize: 10,
      color: '#0039a7'
    }
  },
  chip: {
    position: 'absolute',
    color: '#333',
    margin: 0,
    height: '29px',
    textAlign: 'right',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    backgroundColor: '#ffffff',
    top: '68px',
    right: 0,
    borderRadius: '0px',
    left: '6px',
    width: '95%',
    display: 'block',
    paddingLeft: 15
  },
  smlTitle:{
      textTransform: 'capitalize',
      fontSize: 12,
      display: 'block',
      letterSpacing: 0.8,
      color: '#c7c5c5'
  },
  initials:{
    color: '#ffffff',
    fontSize: '12px'
  }
});

const Header = ( props ) => {
    const { classes } = props;
    return (
      <div className={classes.root}>
       <AppBar className={classes.header} position="static">
          <Toolbar disableGutters={true}>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            </Typography>
            <div className={classes.grow}>
            <IconButton onClick={props.sendFunction('left', true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Chip
                label="Welcome, Mr. Bean"
                className={classes.chip}
              />
            </div>
            <div className={classes.rightText}>
            <h4>Office of Internal Incompetance</h4>
            <h3>Global Software Administration</h3>

          </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
