import React from 'react'
import TAEditor from './TAEditor'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'

export default class TAManager extends React.Component{
    render(){
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey='addTa'>
                    <Row className="clearfix">
                    <Col sm={2} style={this.props.styles.navColumn}>
                        <h3>TA Manager</h3>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey='addTa' >
                                Add a TA
                            </NavItem>
                            <NavItem eventKey='editTa' >
                                Edit a TA
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content animation>
                        <Tab.Pane eventKey='addTa'>
                            <TAEditor action='Add'/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='editTa'>
                            <TAEditor action='Edit'/>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    } 
}