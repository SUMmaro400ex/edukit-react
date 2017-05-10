import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getProfilesForUser } from './actions'
import Dashboard from './Dashboard'
import { frontLoadData } from './actions'

class DashboardContainer extends React.Component{

    constructor(props){
        super(props);
        let profiles = this.props.user.userProfiles;
        if(!this.props.user.dataLoaded){
            this.props.frontLoadData(profiles[0].id, this.props.user.authToken) 
        }
    }

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
             frontLoadData: function(userProfileId, authToken){dispatch(frontLoadData(userProfileId, authToken))}
        }    
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DashboardContainer);