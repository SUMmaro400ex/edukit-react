import React from 'react'

export default class UserProfileSelection extends React.Component{
    render() {
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
                            <h3>Choose a profile!</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}