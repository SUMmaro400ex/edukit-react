import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import Main from './Main'

class MainContainer extends React.Component{
    
    componentWillMount(){
       let profiles = this.props.user.userProfiles;
        if (profiles && profiles.length == 1) {
            hashHistory.push('/dashboard');
        }
        else if (profiles && profiles.length > 1){
            hashHistory.push('/select_profile');
        } 
    }
    componentDidUpdate(){
        let profiles = this.props.user.userProfiles;
        if (profiles && profiles.length == 1) {
            hashHistory.push('/dashboard');
        }
        else if (profiles && profiles.length > 1){
            hashHistory.push('/select_profile');
        }    
    }

    render(){
        return (<Main />)
    } 
}
function mapStateToProps(state){
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(MainContainer);