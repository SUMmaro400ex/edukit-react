import React from 'react'

export default class Dashboard extends React.Component{
    render(){
        return (
        <div>
            <button className='btn btn-default btn-success'onClick={this.props.openCampusManager}>Open Campus Manager</button>
            <br/><br/>
            <button className='btn btn-default btn-success' onClick={this.props.openScheduler}>Open Scheduler</button>
        </div>
        )
    } 
}