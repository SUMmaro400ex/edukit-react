import React from 'react'
import { connect } from 'react-redux'
import LoginContainer from '../login'
import NavbarContainer from '../navbar'

class HomeContainer extends React.Component{

    render() {
        if (this.props.isLoggedIn) {
            return(
                <div>
                    <NavbarContainer />
                    {this.props.children}
                </div>
            )
        }
        else {
            return (<LoginContainer />)
        }
    }
}

function mapStateToProps(state){
    return {
        isLoggedIn: state.user.loggedIn,
        user: state.user
    };
}

export default connect(mapStateToProps)(HomeContainer);