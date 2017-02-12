var React = require('react');
var homeStyle = require('../styles').home;

var Home = React.createClass({
    render: function(){
        return (
            <div style={homeStyle.mainDiv}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 style={{fontSize: '5rem'}}>EduKit</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Your complete education toolkit in the cloud</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Coming Soon!</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

module.exports = Home;