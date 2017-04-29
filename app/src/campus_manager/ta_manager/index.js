import React from 'react'
import TAManager from './TAManager'
import { connect } from 'react-redux'

class TAManagerContainer extends React.Component{

    render() {
        return (<TAManager />)
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
)(TAManagerContainer);