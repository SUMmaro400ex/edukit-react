import React from 'react'
import NewStaffEditorContainer from './staff_editor/NewStaffEditorContainer'
import CurrentStaffEditorContainer from './staff_editor/CurrentStaffEditorContainer'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'

export default class StaffManager extends React.Component{
    render(){
        let {sessionData, newStaff, currentStaff, styles} = this.props;
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey='addStaff'>
                    <Row className="clearfix">
                    <Col sm={2} style={styles.navColumn}>
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
                            <NewStaffEditorContainer sessionData={sessionData} staff={newStaff}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey='editStaff'>
                            <CurrentStaffEditorContainer sessionData={sessionData} staff={currentStaff}/>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    } 
}