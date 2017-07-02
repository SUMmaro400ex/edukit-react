import React from 'react'
import NewStaffEditorContainer from './staff_editor/NewStaffEditorContainer'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'
import './StaffManager.css'

export default class StaffManager extends React.Component{
    render(){
        let {sessionData, newStaff, currentStaff, styles, staffList, newStaffClicked, currentStaffPanes} = this.props;
        return (
            <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey='newStaff'>
                    <Row className="clearfix">
                        <Col sm={3} style={styles.navColumn}>
                            <Nav bsStyle="pills" stacked>
                                {staffList}
                            </Nav>
                        </Col>
                        <Col sm={9} style={styles.contentColumn}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey='newStaff'>
                                    <NewStaffEditorContainer staff={newStaff}/>
                                </Tab.Pane>
                                {currentStaffPanes}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    } 
}