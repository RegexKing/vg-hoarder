import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
React.PropTypes = PropTypes;

const styles = theme => ({
  footer: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: "#58646e",
    color: '#ffffff',
    padding: 15,
    marginTop: 50,
    borderBottom: '2px solid #c7c2c2',
    '&& ul':{
      margin: 0,
      padding: 0,
    },
    '&& li':{
      display: 'block',
      color: '#d0caca',
      fontSize: 14,
      padding: 4,
    },
    '&& h3':{
      color: '#fff',
      fontSize: 16,
      margin: '9px 2px'
    },
    '&& a':{
      color: '#fff',
      display:'block',
      fontSize: 12,
      marginBottom: 5
    }
  },

});

const Footer = ( props ) => {

    const { classes } = props;
    return (
      <div className={classes.root}>
        <footer className={classes.footer}>
          <Grid container className={classes.root} >
            <Grid item xs={12} sm={4}>
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Nose Pickers Anonymous</a></li>
                <li><a href="#">Hair Legs International</a></li>
                <li><a href="#">Sofa King Special</a></li>
                <li><a href="#">Can't Stop This Train</a></li>
                <li><a href="#">Can't Tuna Fish</a></li>
                <li><a href="#">travel@MushroomLand</a></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
            <h3>OIG &amp; Administration</h3>
              <ul>
                <li><a href="#">Low Hanging Fruit</a></li>
                <li><a href="#">Corporate Hacks</a></li>
                <li><a href="#">Business and Electrical Conduct</a></li>
                <li><a href="#">Getting Real</a></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
            <h3>Ethics Line</h3>
              <ul>
                <li><a href="#">Phone: 1-888-999-7771 (Caller ID disabled)</a></li>
                <li><a href="#">Fax: 1-888-999-3344 (Caller ID enabled)</a></li>
                <li>Anytime between 6 a.m. and 6:03 a.m. PT</li>
              </ul>
            </Grid>
          </Grid>
        </footer>
      </div>
    )
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Footer);
