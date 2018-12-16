import React from 'react';
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import DataTable from '../shared/dataTable';

import * as actions from '../../reducers/teamReducer';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    }
});

class Teams extends React.Component{
    componentDidMount(){
        this.props.fetchTeams();
    }
    render(){

        console.log('render - team');
        const { classes } = this.props;

        let rows = this.props.state.teams;
        let teamLabel = 'Team (Total:' + rows.length + ')';
        let columnDef = [
            {
                width: 300,
                flexGrow: 1.0,
                label: teamLabel,
                dataKey: 'name'
            },
            {
                width: 300,
                label: 'Location',
                dataKey: 'location'
            }
        ];

        return  this.props.state.busy ? <CircularProgress className={classes.progress} /> :
                <DataTable
                    rowCount={rows.length}
                    rowGetter={({ index }) => rows[index]}
                    onRowClick={event => console.log(event)}
                    columns={columnDef}
                />
        
    }
}

const mapStateToProps = state => ({
    state: state.teamReducer
})

const mapDispatchToProps = dispatch => ({
    fetchTeams: () => dispatch(actions.fetchTeams())
})
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Teams));