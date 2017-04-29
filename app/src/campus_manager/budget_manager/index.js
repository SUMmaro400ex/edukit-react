import React from 'react'
import BudgetManager from './BudgetManager'
import { connect } from 'react-redux'

class BudgetManagerContainer extends React.Component{

    render() {
        return (<BudgetManager />)
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
)(BudgetManagerContainer);