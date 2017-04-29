import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getProfilesForUser } from './actions'
import Dashboard from './Dashboard'

class DashboardContainer extends React.Component{

    openCampusManager(e){
        hashHistory.push('/campus_manager')
    }

    openScheduler(e){
        hashHistory.push('/scheduler')
    }

    render() {
        return (
          <Dashboard openCampusManager={this.openCampusManager} 
          openScheduler={this.openScheduler}/>
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
)(DashboardContainer);