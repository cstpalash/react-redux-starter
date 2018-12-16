import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  infoGrid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    height: 400
  },
});

export class Home extends React.Component{

    render(){

      const { classes } = this.props;

      return (
        <Grid container spacing={24} className={classes.mainFeaturedPost}>
          <Grid item xs={12} md={6} className={classes.infoGrid}>
            
            <Typography variant="h4" color="inherit" gutterBottom>
            {'<>'} CodeComp on Fabric
            </Typography>

          </Grid>
          <Grid item xs={12} md={6}>
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

              `}</pre>
            
          </Grid>      
        </Grid>
      );
    }
  
}

export default withStyles(styles)(Home);

