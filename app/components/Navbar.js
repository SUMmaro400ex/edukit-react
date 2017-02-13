import React from 'react'
import Styles from '../styles'

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-default" style={Styles.navbar.nav}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" 
                                src="https://s3-us-west-1.amazonaws.com/www.edukit.co/images/logo_small.png" 
                                style={Styles.navbar.img}/>
                            <h2 style={Styles.navbar.edukit}>EduKit</h2>
                        </a>
                    </div>
                </div>
            </nav>
        )
    } 
}