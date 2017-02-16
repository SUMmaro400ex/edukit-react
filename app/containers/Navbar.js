import React from 'react'
import Styles from '../styles'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'

class Navbar extends React.Component{
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

    render(){
        return (
            <nav className="navbar navbar-default" style={Styles.navbar.nav}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" 
                                src="https://s3-us-west-1.amazonaws.com/www.edukit.co/images/logo_small.png" 
                                style={Styles.navbar.img}/>
                        </a>
                        <h2 className='navbar-text'>EduKit</h2>
                    </div>
                    <form className="navbar-form navbar-right" role="login">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" onChange={this.updateEmailValue}/>
                            <input type="password" className="form-control" placeholder="Password" onChange={this.updatePasswordValue}/>
                            <button type="button"  onClick={this.login} className="btn btn-default btn-success">Login</button>
                        </div>
                    </form>
                </div>
            </nav>
        )
    } 
}

function mapStateToProps(state){
    return {user: state.user};
}

function mapDispatchToProps(dispatch, ownProps) {
    return(
        {
            loginEmailEntered: function(email){dispatch({type: 'LOGIN_EMAIL_ENTERED', payload: email})},
            loginPasswordEntered: function(password){dispatch({type: 'LOGIN_PASSWORD_ENTERED', payload: password})},
            loginUser: function(email, password){dispatch((loginUser(email, password)))}
        }
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Navbar);