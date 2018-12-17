import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  infoGrid: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    textAlign: 'center',
  },
  middleGrid: {
    paddingTop: 100
  },
  codeGrid: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
  }
});

export class Home extends React.Component{

    render(){

      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6} className={classes.infoGrid}>
              <div className={classes.middleGrid}>
                <Typography variant="h3" color="inherit" gutterBottom>
                  {'<>'} CodeComp on Fabric
                </Typography>
                <Typography variant="h6" color="inherit" gutterBottom>
                  Participate in an algorithmic battle
                </Typography>
                <Button variant="contained" color="secondary" href="/register">Register</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} className={classes.codeGrid}>
              <pre>{`
public static intelligent main(string[] args) \{
  console.WriteLine(env.FIRST_EVER_ALGO_BATTLE_ON_FABRIC); //true
  me.Wow();
  me.Register(); //individual or team
  if(!me.DO_I_KNOW_FABRIC) me.QuickLearn(env.FABRIC); //1 day

  if(me.ReadRules()){
    me.GetStarted(); //less than 15 minutes

    while(me.Satisfied){
      me.DeployInFabric(me.Algo);
      me.PlayWithDummies(); //against test server
      me.ImproveAlgo(me.Algo);
    }
  }

  //Final day
  var result = me.PlayWithNinjas(); //against each other
  if(result.Win) me.Party();
  else me.WaitForNext();
}

`             }</pre>
            </Grid>
          </Grid>
        </div>
      );
    }
  
}

export default withStyles(styles)(Home);

