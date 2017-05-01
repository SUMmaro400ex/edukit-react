import React from 'react'
import CampusManager from './CampusManager'
import BudgetManagerContainer from './budget_manager'
import TAManagerContainer from './ta_manager'
import styles from './styles'

import { connect } from 'react-redux'

class CampusManagerContainer extends React.Component{

    render() {
        return (<CampusManager styles={styles}/>)
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        campusManager: state.campusManager
    };
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