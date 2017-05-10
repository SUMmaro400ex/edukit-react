import React from 'react'
import CampusManager from './CampusManager'
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