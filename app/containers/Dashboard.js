import React from 'react'
import { connect } from 'react-redux'
import { getProfilesForUser } from '../actions/userProfileActions'

class Dashboard extends React.Component{

    render() {
        return (<h1>Dashboard</h1>)
    }
}

function mapStateToProps(state){
    return {user: state.user};
}

function mapDispatchToProps(dispatch) {
    return(
        {
            getProfilesForUser: function(userId, token){dispatch((getProfilesForUser(userId, token)))}
        }    
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Dashboard);