import React from 'react'
import StaffEditor from './StaffEditor'
import styles from '../../styles'
import { connect } from 'react-redux'
import { submit } from '../actions'

class NewStaffEditorContainer extends React.Component{

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.updateField = this.updateField.bind(this);
        this.getPasswordConfirmationValidationState = this.getPasswordConfirmationValidationState.bind(this);
        this.passwordValidationState = this.passwordValidationState.bind(this);
    }

    getPasswordConfirmationValidationState() {
        let {staff} = this.props;
        return staff.password === staff.passwordConfirmation ? 'success' : 'error';
    }

    passwordValidationState(){
        let {staff} = this.props;
        return staff.password.length > 6 ? 'success' : 'error';
    }

    updateField(evt) {
        let {firstNameEntered, lastNameEntered, emailEntered, passwordEntered, passwordConfirmationEntered, hourlyEntered, typeEntered} = this.props;
        switch(evt.target.id){
            case 'formHorizontalFirstName':{firstNameEntered(evt.target.value);break;}
            case 'formHorizontalLastName':{lastNameEntered(evt.target.value);break;}
            case 'formHorizontalEmail':{emailEntered(evt.target.value);break;}
            case 'formHorizontalPassword':{passwordEntered(evt.target.value);break;}
            case 'formHorizontalPasswordConfirmation':{passwordConfirmationEntered(evt.target.value);break;}
            case 'formHorizontalHourly':{hourlyEntered(evt.target.value);break;}
            case 'formControlsSelect':{typeEntered(evt.target.value);break;}
        }
    }

    submit(e){
        this.props.submit(this.props.newStaff, this.props.user.authToken, this.props.sessionData.businessEntity.id);
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
                passwordConfirmationValidationState={this.getPasswordConfirmationValidationState}
                passwordValidationState={this.passwordValidationState}
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
            firstNameEntered: function(value){dispatch({type: 'CURRENT_STAFF_FIRST_NAME_ENTERED', payload: value})},
            lastNameEntered: function(value){dispatch({type: 'CURRENT_STAFF_LAST_NAME_ENTERED', payload: value})},
            emailEntered: function(value){dispatch({type: 'CURRENT_STAFF_EMAIL_ENTERED', payload: value})},
            passwordEntered: function(value){dispatch({type: 'CURRENT_STAFF_PASSWORD_ENTERED', payload: value})},
            passwordConfirmationEntered: function(value){dispatch({type: 'CURRENT_STAFF_PASSWORD_CONFIRMATION_ENTERED', payload: value})},
            hourlyEntered: function(value){dispatch({type: 'CURRENT_STAFF_HOURLY_ENTERED', payload: value})},
            typeEntered: function(value){dispatch({type: 'CURRENT_STAFF_TYPE_ENTERED', payload: value})},
            submit: function(staff, authToken, businessEntityId){dispatch(submit(staff, authToken, businessEntityId))},
        }   
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(NewStaffEditorContainer);