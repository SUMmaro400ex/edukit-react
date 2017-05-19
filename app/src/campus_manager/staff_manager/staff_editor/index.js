import React from 'react'
import StaffEditor from './StaffEditor'
import styles from '../../styles'
import { connect } from 'react-redux'
import { submit } from '../actions'

class StaffEditorContainer extends React.Component{

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    updateField(evt) {
        // Case statement based on evt target
        switch(evt.target.id){
            case 'formHorizontalFirstName':{
                this.firstNameChanged(evt.target.value);
                break;
            }
            case 'formHorizontalLastName':{
                this.lastNameChanged(evt.target.value);
                break;
            }
            case 'formHorizontalEmail':{
                this.emailChanged(evt.target.value);
                break;
            }
            case 'formHorizontalPassword':{
                this.passwordChanged(evt.target.value);
                break;
            }
            case 'formHorizontalPasswordConfirmation':{
                this.passwordConfirmationChanged(evt.target.value);
                break;
            }
            case 'formHorizontalHourly':{
                this.hourlyChanged(evt.target.value);
                break;
            }
            case 'formControlsSelect':{
                this.staffTypeChanged(evt.target.value);
                break;
            }
        }
    }

    firstNameChanged(firstName){
        if (this.props.action === 'Add'){
            this.props.newStaffFirstNameEntered(firstName);
        }else{
            this.props.editingStaffFirstNameEntered(firstName);
        }
    }

    lastNameChanged(lastName){
        if (this.props.action === 'Add'){
            this.props.newStaffLastNameEntered(lastName);
        }else{
            this.props.editingStaffLastNameEntered(lastName);
        }
    }

    emailChanged(email){
        if (this.props.action === 'Add'){
            this.props.newStaffEmailEntered(email);
        }else{
            this.props.editingStaffEmailEntered(email);
        }
    }

    passwordChanged(password){
        if (this.props.action === 'Add'){
            this.props.newStaffPasswordEntered(password);
        }else{
            this.props.editingStaffPasswordEntered(password);
        }
    }

    passwordConfirmationChanged(passworConfirmation){
        if (this.props.action === 'Add'){
            this.props.newStaffPasswordConfirmationEntered(passworConfirmation);
        }else{
            this.props.editingStaffPasswordConfirmationEntered(passworConfirmation);
        }
    }

    hourlyChanged(hourly){
        if (this.props.action === 'Add'){
            this.props.newStaffHourlyEntered(hourly);
        }else{
            this.props.editingStaffHourlyEntered(hourly);
        }
    }

    staffTypeChanged(type){
        if (this.props.action === 'Add'){
            this.props.newStaffTypeEntered(type);
        }else{
            this.props.editingStaffTypeEntered(type);
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
                styles={styles} 
                staff={this.props.staff}
                action={this.props.action}
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
            newStaffFirstNameEntered: function(firstName){dispatch({type: 'NEW_STAFF_FIRST_NAME_ENTERED', payload: firstName})},
            editingStaffFirstNameEntered: function(firstName){dispatch({type: 'CURRENT_STAFF_FIRST_NAME_ENTERED', payload: firstName})},
            newStaffLastNameEntered: function(lastName){dispatch({type: 'NEW_STAFF_LAST_NAME_ENTERED', payload: lastName})},
            editingStaffLastNameEntered: function(lastName){dispatch({type: 'CURRENT_STAFF_LAST_NAME_ENTERED', payload: lastName})},
            newStaffEmailEntered: function(email){dispatch({type: 'NEW_STAFF_EMAIL_ENTERED', payload: email})},
            editingStaffEmailEntered: function(email){dispatch({type: 'CURRENT_STAFF_EMAIL_ENTERED', payload: email})},
            newStaffPasswordEntered: function(password){dispatch({type: 'NEW_STAFF_PASSWORD_ENTERED', payload: password})},
            editingStaffPasswordEntered: function(password){dispatch({type: 'CURRENT_STAFF_PASSWORD_ENTERED', payload: password})},
            newStaffPasswordConfirmationEntered: function(passwordConfirmation){dispatch({type: 'NEW_STAFF_PASSWORD_CONFIRMATION_ENTERED', payload: passwordConfirmation})},
            editingStaffPasswordConfirmationEntered: function(passwordConfirmation){dispatch({type: 'CURRENT_STAFF_PASSWORD_CONFIRMATION_ENTERED', payload: passwordConfirmation})},
            newStaffHourlyEntered: function(hourly){dispatch({type: 'NEW_STAFF_HOURLY_ENTERED', payload: hourly})},
            editingStaffHourlyEntered: function(hourly){dispatch({type: 'CURRENT_STAFF_HOURLY_ENTERED', payload: hourly})},
            newStaffTypeEntered: function(type){dispatch({type: 'NEW_STAFF_TYPE_ENTERED', payload: type})},
            editingStaffTypeEntered: function(type){dispatch({type: 'CURRENT_STAFF_TYPE_ENTERED', payload: type})},
            submit: function(staff, authToken, businessEntityId){dispatch(submit(staff, authToken, businessEntityId))},
        }   
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(StaffEditorContainer);