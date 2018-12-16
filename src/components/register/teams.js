import React from 'react';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import DataTable from '../shared/dataTable';

import * as actions from '../../reducers/registerReducer';

const data = [
    ['Pinaka', 'India-Pune-MGP', 'palash.roy@db.com; gopi.ram@db.com'],
    ['Astra', 'India-Pune-BB', 'adam.spencer@db.com; michael.lamb@db.com'],
    ['Barak', 'UK-London-CW', 'sayeed.chowdhury@db.com; pawan.acharya@db.com'],
    ['Trishul', 'US-Carry', 'suart.cookson@db.com; tom.guilbert@db.com'],
    ['Prithvi', 'Singapore', 'guy.sayar@db.com; pankaj.hasija@db.com']
  ];
  
  let id = 0;
  function createData(name, location, members) {
    id += 1;
    return { id, name, location, members };
  }
  
  const rows = [];
  
  for (let i = 0; i < 200; i += 1) {
    const randomSelection = data[Math.floor(Math.random() * data.length)];
    rows.push(createData(...randomSelection));
  }

class Teams extends React.Component{
    render(){
        const { classes } = this.props;

        return  <DataTable
                    rowCount={rows.length}
                    rowGetter={({ index }) => rows[index]}
                    onRowClick={event => console.log(event)}
                    columns={[
                        {
                            width: 150,
                            flexGrow: 1.0,
                            label: 'Team',
                            dataKey: 'name',
                        },
                        {
                            width: 150,
                            label: 'Location',
                            dataKey: 'location'
                        },
                        {
                            width: 300,
                            label: 'Members',
                            dataKey: 'members'
                        }
                    ]}
                />
        
    }
}

const mapStateToProps = state => ({
    state: state.registerReducer
})

const mapDispatchToProps = dispatch => ({
    register: () => dispatch(actions.register())
})
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Teams);