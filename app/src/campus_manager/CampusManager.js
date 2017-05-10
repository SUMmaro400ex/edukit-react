import React from 'react'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'
import BudgetManagerContainer from './budget_manager'
import StaffManagerContainer from './staff_manager'

export default class CampusManager extends React.Component{
    render(){
        return (
            <div style={this.props.styles.container}>
                <Tab.Container id="left-tabs-example" defaultActiveKey='staffManager'>
                    <Row className="clearfix">
                        <Col sm={2} style={this.props.styles.navColumn}>
                            <h3>Campus Manager</h3>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey='staffManager' >
                                    Staff Manager
                                </NavItem>
                                <NavItem eventKey='budgetManager' >
                                    Budget Manager
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={10} style={this.props.styles.contentColumn}>
                            <Tab.Content animation>
                            <Tab.Pane eventKey='staffManager'>
                                <StaffManagerContainer />
                            </Tab.Pane>
                            <Tab.Pane eventKey='budgetManager'>
                                <BudgetManagerContainer />
                            </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    } 
}