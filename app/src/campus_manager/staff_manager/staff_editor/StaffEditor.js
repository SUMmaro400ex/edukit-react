import React from 'react'
import ImageUpload from '../../../core/image_upload'
import {Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

export default class StaffEditor extends React.Component{

    passwordsMustMatch(){
        return (
            !this.props.isEditing && !this.passwordsMatch() &&
                <FormGroup>
                    <Col sm={3}/>
                    <Col sm={7} style={this.props.styles.validationError}>
                        Passwords Must Match
                        <br/>
                    </Col>
                </FormGroup>
            )
    }

    passwordsLengthShort(){
        return (
            !this.props.isEditing && !this.passwordMinimumLength() &&
                <FormGroup>
                    <Col sm={3}/>
                    <Col sm={7} style={this.props.styles.validationError}>
                        Password Too Short
                        <br/>
                    </Col>
                </FormGroup>
            )
    }

    passwordsMatch(){
        return(this.props.passwordConfirmationValidationState() !== "error")
    }

    passwordMinimumLength(){
        return(!this.props.staff.password || this.props.staff.password.length >= 6)
    }

    requiredFieldsComplete(){
        let {firstName, lastName, email, hourly} = this.props.staff;
        return(firstName && lastName && email && hourly)
    }
    submitButton(){
        let {submit, styles, staff, isEditing} = this.props;
        let {firstName, lastName, email, password, passwordConfirmation, hourly} = staff;
        let enabled = isEditing || (this.requiredFieldsComplete() && this.passwordMinimumLength() && this.passwordsMatch())
        return(
            <div>
                <FormGroup>
                    <Col sm={3} />
                    <Col sm={1}>
                        <Button bsStyle="success" type="submit" onClick={submit} disabled={!enabled}>Submit</Button>
                    </Col>
                </FormGroup>
                {!isEditing && !this.passwordMinimumLength() &&
                <FormGroup>
                    <Col sm={3} />
                    <Col sm={7} style={styles.validationError}>
                        - Password Too Short
                    </Col>
                </FormGroup>}
                {!isEditing && !this.passwordsMatch() &&
                <FormGroup>
                    <Col sm={3} />
                    <Col sm={7} style={styles.validationError}>
                        - Passwords Must Match
                    </Col>
                </FormGroup>}
                {!isEditing && !this.requiredFieldsComplete(isEditing) &&
                <FormGroup>
                    <Col sm={3} />
                    <Col sm={7} style={styles.validationError}>
                        - Required Fields Missing
                    </Col>
                </FormGroup>}
            </div>
        )
    }

    render(){
        let {updateField, staff, action, roles, passwordConfirmationValidationState, passwordValidationState, isEditing} = this.props;
        return (
            <div>
                <Col sm={3}>
                    <br/>
                    <br/>
                    <ImageUpload />
                </Col>
                <Col sm={9}>
                    <h2>{action} Staff </h2>
                    <div className="management">
                        <Form horizontal>
                            <FormGroup controlId="formControlsSelect">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Staff Type
                                </Col>
                                <Col sm={7}>
                                    <FormControl componentClass="select" placeholder="select" className="form-control" onChange={updateField} defaultValue={roles[0].code} >
                                        {roles}
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalFirstName">
                                <Col componentClass={ControlLabel} sm={3}>
                                    First Name
                                </Col>
                                <Col sm={7}>
                                    <FormControl type="firstname" placeholder="Enter First Name" onChange={updateField} defaultValue={staff.firstName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalLastName">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Last Name
                                </Col>
                                <Col sm={7}>
                                    <FormControl type="lastName" placeholder="Enter Last Name" onChange={updateField} defaultValue={staff.lastName}/>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Email
                                </Col>
                                <Col sm={7}>
                                    <FormControl type="email" placeholder="Enter Email" onChange={updateField} defaultValue={staff.email}/>
                                </Col>
                            </FormGroup>
                            {!isEditing && 
                            <FormGroup controlId="formHorizontalPassword"
                                validationState={passwordValidationState()}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password
                                </Col>
                                <Col sm={7}>
                                    <FormControl type="password" placeholder="Enter Password" onChange={updateField} defaultValue={staff.password}/>
                                </Col>
                            </FormGroup>}
                            {this.passwordsLengthShort()}
                            {!isEditing && 
                            <FormGroup controlId="formHorizontalPasswordConfirmation"
                                validationState={passwordConfirmationValidationState()}>
                                <Col componentClass={ControlLabel} sm={3}>
                                    Password Confirmation
                                </Col>
                                <Col sm={7}>
                                    <FormControl type="password" placeholder="Enter Password" onChange={updateField} defaultValue={staff.passwordConfirmation}/>
                                </Col>
                            </FormGroup>}
                            {this.passwordsMustMatch()}
                            <FormGroup controlId="formHorizontalHourly">
                                <Col componentClass={ControlLabel} sm={3}>
                                    Hourly Rate
                                </Col>
                                <Col sm={7}>
                                    <FormControl type="money" placeholder="Enter Hourly Rate" onChange={updateField} defaultValue={staff.hourly}/>
                                </Col>
                            </FormGroup>
                            {this.submitButton()}
                        </Form>
                    </div>
                </Col>
            </div>
        )
    }
}
