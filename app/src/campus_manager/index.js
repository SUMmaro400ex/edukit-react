import React from 'react'
import CampusManager from './CampusManager'
import { connect } from 'react-redux'

class CampusManagerContainer extends React.Component{

    render() {
        return (<CampusManager />)
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