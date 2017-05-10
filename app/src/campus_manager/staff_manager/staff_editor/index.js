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
            // this.props.editingStaffFirstNameEntered(evt.target.value);
        }
    }

    emailChanged(email){
        if (this.props.action === 'Add'){
            this.props.newStaffEmailEntered(email);
        }else{
            // this.props.editingStaffFirstNameEntered(evt.target.value);
        }
    }

    passwordChanged(password){
        if (this.props.action === 'Add'){
            this.props.newStaffPasswordEntered(password);
        }else{
            // this.props.editingStaffFirstNameEntered(evt.target.value);
        }
    }

    passwordConfirmationChanged(password){
        if (this.props.action === 'Add'){
            this.props.newStaffPasswordConfirmationEntered(password);
        }else{
            // this.props.editingStaffFirstNameEntered(evt.target.value);
        }
    }

    submit(e){
        debugger
        this.props.submit(this.props.user.email, this.props.user.password);
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
    }
}

function mapDispatchToProps(dispatch) {
    return(
        {
            newStaffFirstNameEntered: function(firstName){dispatch({type: 'NEW_STAFF_FIRST_NAME_ENTERED', payload: firstName})},
            editingStaffFirstNameEntered: function(firstName){dispatch({type: 'CURRENT_STAFF_FIRST_NAME_ENTERED', payload: firstName})},
            newStaffLastNameEntered: function(lastName){dispatch({type: 'NEW_STAFF_LAST_NAME_ENTERED', payload: lastName})},
            newStaffEmailEntered: function(email){dispatch({type: 'NEW_STAFF_EMAIL_ENTERED', payload: email})},
            newStaffPasswordEntered: function(password){dispatch({type: 'NEW_STAFF_PASSWORD_ENTERED', payload: password})},
            newStaffPasswordConfirmationEntered: function(password){dispatch({type: 'NEW_STAFF_PASSWORD_CONFIRMATION_ENTERED', payload: password})},
            submit: function(email, password){dispatch(submit(email, password))},
        }   
    );
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(StaffEditorContainer);