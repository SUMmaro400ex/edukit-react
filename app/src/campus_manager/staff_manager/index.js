import React from 'react'
import StaffManager from './StaffManager'
import styles from '../styles'
import { connect } from 'react-redux'
import { submit } from './actions'

class StaffManagerContainer extends React.Component{

    render() {
        return (<StaffManager sessionData={this.props.sessionData} 
                styles={styles}
                newStaff={this.props.newStaff}
                currentStaff={this.props.currentStaff}/>)
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        sessionData: state.sessionData,
        newStaff: state.staffEditor.newStaff,
        currentStaff: state.staffEditor.currentStaff
    }
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
)(StaffManagerContainer);