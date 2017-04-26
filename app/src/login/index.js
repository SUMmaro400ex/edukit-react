import React from 'react'
import styles from './styles'
import Login from './Login'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../actions/userActions'
import { hashHistory } from 'react-router'

class LoginContainer extends React.Component{

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.updateEmailValue = this.updateEmailValue.bind(this);
        this.updatePasswordValue = this.updatePasswordValue.bind(this);
    }

    updateEmailValue(evt) {
        this.props.loginEmailEntered(evt.target.value);
    }

    updatePasswordValue(evt) {
        this.props.loginPasswordEntered(evt.target.value);
    }

    login(e){
        this.props.loginUser(this.props.user.email, this.props.user.password);
    }

    render() {
        return (
            <Login style={styles} 
            updateEmailValue={this.updateEmailValue} 
            updatePasswordValue={this.updatePasswordValue}
            login={this.login}/>
        )
    }
}

function mapStateToProps(state){
    return {user: state.user};
}

function mapDispatchToProps(dispatch) {
    return(
        {
            loginEmailEntered: function(email){dispatch({type: 'LOGIN_EMAIL_ENTERED', payload: email})},
            loginPasswordEntered: function(password){dispatch({type: 'LOGIN_PASSWORD_ENTERED', payload: password})},
            loginUser: function(email, password){dispatch(loginUser(email, password))},
        }
    );
}
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
