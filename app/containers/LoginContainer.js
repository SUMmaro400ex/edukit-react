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
              <div style={loginStyle.mainDiv}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" onChange={this.updateEmailValue}/>
                    <input type="password" className="form-control" placeholder="Password" onChange={this.updatePasswordValue}/>
                    <button type="button"  onClick={this.login} className="btn btn-default btn-success">Login</button>
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