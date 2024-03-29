import React from 'react'
import Navbar from './Navbar'
import styles from './styles'
import { connect } from 'react-redux'
import { logoutUser } from '../actions'


class NavbarContainer extends React.Component{

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e){
        this.props.logoutUser(this.props.user.authToken);
    }

    render(){   
        return (
            <Navbar logout={this.logout}
            sessionData={this.props.sessionData} 
            userState={this.props.user}
            styles={styles}/>
        )
    } 
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.user.loggedIn,
        sessionData: state.sessionData,
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return(
        {
            logoutUser: function(authToken){dispatch(logoutUser(authToken))}
        }
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarContainer);