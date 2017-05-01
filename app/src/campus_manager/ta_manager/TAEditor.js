import React from 'react'
import {Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

export default class TAEditor extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.action} TA </h2>
                <div className="management">
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalFirstName">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                First Name
                            </Col>
                            <Col sm={6}>
                                <FormControl type="firstname" placeholder="Enter First Name"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalLastName">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Last Name
                            </Col>
                            <Col sm={6}>
                                <FormControl type="lastName" placeholder="Enter Last Name"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Email
                            </Col>
                            <Col sm={6}>
                                <FormControl type="email" placeholder="Enter Email"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Password
                            </Col>
                            <Col sm={6}>
                                <FormControl type="password" placeholder="Enter Password"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPasswordConfirmation">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Password Confirmation
                            </Col>
                            <Col sm={6}>
                                <FormControl type="password" placeholder="Enter Password"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalHourly">
                            <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                                Hourly Rate
                            </Col>
                            <Col sm={6}>
                                <FormControl type="money" placeholder="Enter Hourly Rate"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col sm={4} />
                            <Col sm={1}>
                                <Button bsStyle="success" type="submit">
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