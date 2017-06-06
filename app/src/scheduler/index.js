import React from 'react'
import { connect } from 'react-redux'

class SchedulerContainer extends React.Component{

    render() {
        return (<h1 style={{height: '100vh', backgroundColor:'white'}}>Scheduler</h1>)
    }
}

function mapStateToProps(state){
    return {user: state.user};
}

function mapDispatchToProps(dispatch) {
    return(
        {
        }    
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SchedulerContainer);