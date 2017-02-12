var React = require('react');
var navbarStyle = require('../styles').navbar;

var Navbar = React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-default" style={navbarStyle.nav}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="Brand" 
                                src="https://s3-us-west-1.amazonaws.com/www.edukit.co/images/logo_small.png" 
                                style={navbarStyle.img}/>
                            <h2 style={navbarStyle.edukit}>EduKit</h2>
                        </a>
                    </div>
                </div>
            </nav>
        );
    } 
});

module.exports = Navbar;