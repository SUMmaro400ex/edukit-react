import React from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import { submit, loadStaff} from '../actions'
import {ListGroupItem} from 'react-bootstrap'
import StaffEditor from './StaffEditor'


class CurrentStaffEditorContainer extends React.Component{

    constructor(props) {
        super(props);
        let {sessionData, user, loadStaff} = props;
        this.submit = this.submit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    updateField(evt) {
        let {firstNameEntered, lastNameEntered, emailEntered, passwordEntered, passwordConfirmationEntered, hourlyEntered, typeEntered, staff} = this.props;
        switch(evt.target.id){
            case 'formHorizontalFirstName':{firstNameEntered(evt.target.value, staff.id);break;}
            case 'formHorizontalLastName':{lastNameEntered(evt.target.value, staff.id);break;}
            case 'formHorizontalEmail':{emailEntered(evt.target.value, staff.id);break;}
            case 'formHorizontalHourly':{hourlyEntered(evt.target.value, staff.id);break;}
            case 'formControlsSelect':{typeEntered(evt.target.value, staff.id);break;}
        }
    }

    submit(e){
        let {sessionData, user, newStaff, submit} = this.props;
        submit(newStaff, sessionData.businessEntity.id, user.authToken, sessionData.userProfileId);
    }

    roles(){
        return (
                this.props.sessionData.roles.map((role) =>
                    <option key={role.code} value={role.code}>{role.name}</option>
                )
            )
    }
    render() {
        return (<StaffEditor roles={this.roles()}
                isEditing={true}
                styles={styles}
                staff={this.props.staff}
                action="Edit"
                submit={this.submit}
                updateField={this.updateField}/>)
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
            firstNameEntered: function(value, staffId){dispatch({type: 'CURRENT_STAFF_FIRST_NAME_ENTERED', payload: {value: value, staffId: staffId}})},
            lastNameEntered: function(value, staffId){dispatch({type: 'CURRENT_STAFF_LAST_NAME_ENTERED', payload: {value: value, staffId: staffId}})},
            emailEntered: function(value, staffId){dispatch({type: 'CURRENT_STAFF_EMAIL_ENTERED', payload: {value: value, staffId: staffId}})},
            hourlyEntered: function(value, staffId){dispatch({type: 'CURRENT_STAFF_HOURLY_ENTERED', payload: {value: value, staffId: staffId}})},
            typeEntered: function(value, staffId){dispatch({type: 'CURRENT_STAFF_TYPE_ENTERED', payload: {value: value, staffId: staffId}})},
            submit: function(staff, businessEntityId, authToken, userProfileId){dispatch(submit(staff, businessEntityId,  authToken, userProfileId))},
        }   
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CurrentStaffEditorContainer);