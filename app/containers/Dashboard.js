import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getProfilesForUser } from '../actions/userProfileActions'

class Dashboard extends React.Component{

    openCampusManager(e){
        hashHistory.push('/campus_manager')
    }

    openScheduler(e){
        hashHistory.push('/scheduler')
    }

    render() {
        return (
            <div>
                <button className='btn btn-default btn-success'onClick={this.openCampusManager}>Open Campus Manager</button>
                <br/><br/>
                <button className='btn btn-default btn-success' onClick={this.openScheduler}>Open Scheduler</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {user: state.user};
}

function mapDispatchToProps(dispatch) {
    return(
        {
        }    
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Dashboard);