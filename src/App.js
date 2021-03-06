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
import Rules from './components/rules';
import Schedule from './components/schedule';
import GetStarted from './components/getStarted';
import Faq from './components/faq';
import ApiDoc from './components/apiDoc';

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
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
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
    description: ['Symphony:CodeComp', 'Email:codecomp@db.list.com'],
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
              <NavLink exact={false} to="/rules" className={classes.menu} activeClassName={classes.activeMenu}><Button>Game Rules</Button></NavLink>
              <NavLink exact={false} to="/schedule" className={classes.menu} activeClassName={classes.activeMenu}><Button>Schedule</Button></NavLink>
              <NavLink exact={false} to="/getstarted" className={classes.menu} activeClassName={classes.activeMenu}><Button>Get started</Button></NavLink>
              <NavLink exact={false} to="/register" className={classes.menu} activeClassName={classes.activeMenu}><Button color="secondary">Register</Button></NavLink>
              <NavLink exact={false} to="/faq" className={classes.menu} activeClassName={classes.activeMenu}><Button>FAQ</Button></NavLink>
              <NavLink exact={false} to="/apidef" className={classes.menu} activeClassName={classes.activeMenu}><Button>API Doc</Button></NavLink>
            </Toolbar>
          </AppBar>
          <main className={classes.layout}>
            <Route exact path="/" component={Home} />
            <Route path="/rules" component={Rules} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/getstarted" component={GetStarted} />
            <Route path="/register" component={Register} />
            <Route path="/faq" component={Faq} />
            <Route path="/apidef" component={ApiDoc} />
          </main>
          
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