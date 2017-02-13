import React from 'react'
import Styles from '../styles'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'
const homeStyle = Styles.home;

@connect((store) =>{
    return {
        user: store.user.user
    };
})
export default class Home extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchUser());
    }
    render() {
        console.log(this.props)
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
}