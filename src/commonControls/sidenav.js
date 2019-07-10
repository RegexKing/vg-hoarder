import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Header from './header';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Portrait from '@material-ui/icons/Portrait';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import AccountBox from '@material-ui/icons/AccountBox';
import Dashboard from '@material-ui/icons/Dashboard';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import PropTypes from "prop-types";
React.PropTypes = PropTypes;

const styles = theme => ({
  userName:{
    margin: 0,
    padding: '13px 10px 8px 10px',
    borderBottom: '1px solid #efebeb'
  },
  textColor: {
    color: 'white'
  },
  sidebarBg: {
    width: 275,
    fontFamily:'Arial, helvetica',
    fontSize: 14
  },
  paper: {
    top: '98px',
    left: '8px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});



class Sidenav extends React.Component {

  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleClick = (menu) => {
    this.setState({[menu+'Open']:!this.state[menu+'Open']})
  };
  selectJSON = [
    {
      name: "Service Request1",
      values: "Service Request1"
    }
  ]

  // userProfile = [
  //   {
  //     id: 1,
  //     name: "User1",
  //     email: "User1@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     name: "User2",
  //     email: "User2@gmail.com"
  //   }
  // ]

  render() {
    const { classes } = this.props;

    return (
      <section>
        <Header sendFunction={this.toggleDrawer}></Header>
        <SwipeableDrawer classes={{ paper: classes.paper }} open={this.state.left}
          onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
          <div className={classes.sidebarBg}>
            <List>
              <ListItem button component={Link} to="/userprofile" onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText className={classes.userName} inset primary="Nate Miller" />
              </ListItem>
              <ListItem button component={Link} to="/admin" onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Portrait />
                </ListItemIcon>
                <ListItemText inset primary="Admin" />
              </ListItem>
              <ListItem button component={Link} to="/" onClick={this.toggleDrawer('left', false)}>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText inset primary="Dashboard" />
              </ListItem>
              <ListItem button onClick={() => this.handleClick('savedSearch')}>

                <ListItemText inset primary="Saved Searches" />
                {this.state.savedSearchOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.savedSearchOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* will be added soon */}
                </List>
              </Collapse>

              <ListItem button onClick={() => this.handleClick('sharedSearch')}>

                <ListItemText inset primary="Shared Searches" />
                {this.state.sharedSearchOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.sharedSearchOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* will be added soon */}
                </List>
              </Collapse>

              <ListItem button component={Link} to="/" onClick={this.toggleDrawer('left', false)}>

                <ListItemText inset primary="Manage Request Group" />
              </ListItem>

              <ListItem button onClick={() => this.handleClick('spectrum')}>

                <ListItemText inset primary="Spectrum" />
                {this.state.spectrumOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.spectrumOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested} component={Link} to="/bpirequest" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="BP Request" />
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link} to="/srrequest" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Service Request" />
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link} to="/srdetails" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="SR Details" />
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link} to="/search" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Search" />
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link} to="/" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="ASR" />
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link} to="/" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="Equipment" />
                  </ListItem>
                  <ListItem button className={classes.nested} component={Link} to="/" onClick={this.toggleDrawer('left', false)}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText inset primary="License" />
                  </ListItem>
                </List>
              </Collapse>

              <ListItem button onClick={() => this.handleClick('uroc')}>
                <ListItemText inset primary="UROC" />
                {this.state.urocOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.urocOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* will be added soon */}
                </List>
              </Collapse>

              <ListItem button onClick={() => this.handleClick('electromagnetics')}>
                <ListItemText inset primary="Electromagnetics" />
                {this.state.electromagneticsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.electromagneticsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* will be added soon */}
                </List>
              </Collapse>

              <ListItem button onClick={() => this.handleClick('compliance')}>
                <ListItemText inset primary="Compliance" />
                {this.state.complianceOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.complianceOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* will be added soon */}
                </List>
              </Collapse>

              <ListItem button onClick={() => this.handleClick('spectrumPlanning')}>
                <ListItemText inset primary="Spectrum Planning" />
                {this.state.spectrumPlanningOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.spectrumPlanningOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                 {/* will be added soon */}
                </List>
              </Collapse>

            </List>
          </div>

        </SwipeableDrawer>
      </section>
    );
  }
}

Sidenav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidenav);
