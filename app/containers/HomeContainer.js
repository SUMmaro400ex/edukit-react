import React from 'react'
import Styles from '../styles'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Home from '../components/Home'


class HomeContainer extends React.Component{
    componentDidUpdate(evt){
        if (this.props.user.userProfiles){
            let profileCount = this.props.user.userProfiles.length
            if (profileCount == 1) {
                browserHistory.push('/dashboard');
            }
            else if (profileCount > 1){
                browserHistory.push('/select_profile');
            }
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