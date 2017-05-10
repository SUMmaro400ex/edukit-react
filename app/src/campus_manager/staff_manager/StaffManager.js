import React from 'react'
import StaffEditorContainer from './staff_editor'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'

export default class StaffManager extends React.Component{
    render(){
        let {sessionData} = this.props;
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey='addStaff'>
                    <Row className="clearfix">
                    <Col sm={2} style={this.props.styles.navColumn}>
                        <h3>Staff Manager</h3>
                        <Nav bsStyle="pills" stacked>
                            <NavItem eventKey='addStaff' >
                                Add Staff
                            </NavItem>
                            <NavItem eventKey='editStaff' >
                                Edit Staff
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content animation>
                        <Tab.Pane eventKey='addStaff'>
                            <StaffEditorContainer sessionData={sessionData} action='Add' staff={this.props.newStaff}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='editStaff'>
                            <StaffEditorContainer sessionData={sessionData} action='Edit'staff={this.props.currentStaff}/>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    } 
}