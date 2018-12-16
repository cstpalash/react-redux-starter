import React from 'react';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import * as actions from '../../reducers/registerReducer';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
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
  }
});

class Register extends React.Component{

  render(){

    const { classes } = this.props;
    
    return (
      <main className={classes.layout}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Register
            </Typography>
          </div>
          {/* End hero unit */}
          
      </main>
    );
  }

}

const mapStateToProps = state => ({
  state: state.registerReducer
})

const mapDispatchToProps = dispatch => ({
  register: () => dispatch(actions.register())
 })


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Register));