import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { getProfilesForUser } from './actions'
import Dashboard from './Dashboard'
import { frontLoadData } from './actions'
import styles from './styles'
import './Dashboard.css'

class DashboardContainer extends React.Component{

    constructor(props){
        super(props);
        let profiles = this.props.user.userProfiles;
        this.openCampusManager = this.openCampusManager.bind(this);
        this.openScheduler = this.openScheduler.bind(this);
        if(!this.props.user.dataLoaded){
            this.props.frontLoadData(profiles[0].id, this.props.user.authToken) 
        }
    }
    componentWillUpdate(){
        this.props.appSelected("Dashboard");
    }
    openCampusManager(e){
        this.props.appSelected("Campus Manager");
        hashHistory.push('/campus_manager');
    }

    openScheduler(e){
        this.props.appSelected("Scheduler");
        hashHistory.push('/scheduler')
    }

    render() {
        return (
          <Dashboard openCampusManager={this.openCampusManager} 
          styles={styles}
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
            appSelected: function(value){dispatch({type: 'APP_SELECTED', payload: value})},
            frontLoadData: function(userProfileId, authToken){dispatch(frontLoadData(userProfileId, authToken))}
        }    
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(DashboardContainer);