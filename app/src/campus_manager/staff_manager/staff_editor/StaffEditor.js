import React from 'react'
import {Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

export default class StaffEditor extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.action} Staff </h2>
                <div className="management">
                    <Form horizontal>
                        <FormGroup controlId="formControlsSelect">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Staff Type
                            </Col>
                            <Col sm={6}>
                                <FormControl componentClass="select" placeholder="select" onChange={this.props.updateField}>
                                    {this.props.roles}
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalFirstName">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                First Name
                            </Col>
                            <Col sm={6}>
                                <FormControl type="firstname" placeholder="Enter First Name" onChange={this.props.updateField} defaultValue={this.props.staff.firstName}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalLastName">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Last Name
                            </Col>
                            <Col sm={6}>
                                <FormControl type="lastName" placeholder="Enter Last Name" onChange={this.props.updateField} defaultValue={this.props.staff.lastName}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Email
                            </Col>
                            <Col sm={6}>
                                <FormControl type="email" placeholder="Enter Email" onChange={this.props.updateField} defaultValue={this.props.staff.email}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Password
                            </Col>
                            <Col sm={6}>
                                <FormControl type="password" placeholder="Enter Password" onChange={this.props.updateField} defaultValue={this.props.staff.password}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPasswordConfirmation"
                            validationState={this.props.passwordConfirmationValidationState()}>
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Password Confirmation
                            </Col>
                            <Col sm={6}>
                                <FormControl type="password" placeholder="Enter Password" onChange={this.props.updateField} defaultValue={this.props.staff.passwordConfirmation}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalHourly">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Hourly Rate
                            </Col>
                            <Col sm={6}>
                                <FormControl type="money" placeholder="Enter Hourly Rate" onChange={this.props.updateField} defaultValue={this.props.staff.hourly}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={4} />
                            <Col sm={1}>
                                <Button bsStyle="success" type="submit" onClick={this.props.submit}>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    } 
}