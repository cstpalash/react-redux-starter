import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Teams from './teams';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400
  },
});

class Register extends React.Component{

  render(){

    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Teams/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4" gutterBottom>
                  Register
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

}



export default withStyles(styles)(Register);