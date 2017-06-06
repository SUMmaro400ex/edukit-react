import React from 'react'
import {Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap'

export default class Login extends React.Component{
    render(){
        return (
          <div style={this.props.style.main}>
            <div style={this.props.style.container}>
              <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                      Email
                    </Col>
                    <Col sm={6}>
                      <FormControl type="email" placeholder="Email" onChange={this.props.updateEmailValue}/>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} smOffset={1} sm={3}>
                      Password
                    </Col>
                    <Col sm={6}>
                      <FormControl type="password" placeholder="Password" onChange={this.props.updatePasswordValue}/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col smOffset={4} sm={10}>
                      <Button bsStyle="success" type="submit" onClick={this.props.login}>
                        Sign in
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
            </div>
          </div>
        )
    } 
}