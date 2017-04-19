import React from 'react'
import Styles from '../styles'

export default class Navbar extends React.Component{
    render(){
        return (
            <div>
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
                        <div className="navbar-form navbar-right">
                            <div className="form-group">
                                <p className='navbar-text'>Hello {this.props.firstName} {this.props.lastName}</p>
                                <button type="button"  onClick={this.props.logout} className="btn btn-default btn-success">Logout</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    } 
}