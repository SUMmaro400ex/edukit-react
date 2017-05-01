import React from 'react'
import TAManager from './TAManager'
import styles from '../styles'
import { connect } from 'react-redux'

class TAManagerContainer extends React.Component{

    render() {
        return (<TAManager styles={styles}/>)
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