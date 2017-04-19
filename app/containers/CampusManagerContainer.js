import React from 'react'
import { connect } from 'react-redux'

class CampusManagerContainer extends React.Component{

    render() {
        return (<h1>Campus Manager</h1>)
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
)(CampusManagerContainer);