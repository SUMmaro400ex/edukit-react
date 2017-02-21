import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import Home from '../components/Home'


class HomeContainer extends React.Component{

    componentDidUpdate(){
        let profiles = this.props.user.userProfiles;
        if (profiles && profiles.length == 1) {
            hashHistory.push('/dashboard');
        }
        else if (profiles && profiles.length > 1){
            hashHistory.push('/select_profile');
        }    
    }

    render() {
        return (
            <Home />
        )
    }
}

function mapStateToProps(state){
    return {user: state.user};
}

export default connect(mapStateToProps)(HomeContainer);