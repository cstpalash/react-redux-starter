import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Home from './components/home';
import Register from './components/register';

import _ from 'lodash';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  menu:{
    textDecoration: 'none'
  },
  activeMenu: {
    backgroundColor: 'lightGray',
    textDecoration: 'none'
  }
});

const footers = [
  {
    title: 'Supported by',
    description: ['Fabric', 'dbPLEX', 'dbAcademy'],
  },
  {
    title: 'Developed by',
    description: ['Our beloved grads'],
  },
  {
    title: 'Contact us',
    description: ['Symphoney:CodeComp', 'Email:codecomp@db.list.com'],
  }
];

export class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                dbCodeComp
              </Typography>
              <NavLink exact={true} to="/" className={classes.menu} activeClassName={classes.activeMenu}><Button>Home</Button></NavLink>
              <NavLink exact={false} to="/register" className={classes.menu} activeClassName={classes.activeMenu}><Button>Register</Button></NavLink>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          {/* Footer */}
          <footer className={classNames(classes.footer, classes.layout)}>
            <Grid container spacing={32} justify="space-evenly">
              {_.map(footers, footer => (
                <Grid item xs key={footer.title}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>
                  {footer.description.map(item => (
                    <Typography key={item} variant="subtitle1" color="textSecondary">
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </footer>
          {/* End footer */}
        </React.Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(App);