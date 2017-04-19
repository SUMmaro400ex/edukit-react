import React from 'react'
import Styles from '../styles'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../actions/userActions'
import { hashHistory } from 'react-router'


const loginStyle = Styles.login;

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

          <div style={loginStyle.container}>
            <div style={loginStyle.form} action="index.html" method="post">
              <input type="text" placeholder="Email" onChange={this.updateEmailValue}
              style={loginStyle.input}/>
              <br/><br/>
              <input type="password" placeholder="Password" onChange={this.updatePasswordValue}
              style={loginStyle.input}/>
              <br/><br/>
              <input type="submit" value="Login" onClick={this.login}/>
            </div>
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
