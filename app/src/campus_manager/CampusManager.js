import React from 'react'
import {Nav, NavItem, Col, Tab, Row} from 'react-bootstrap'
import BudgetManagerContainer from './budget_manager'
import StaffManagerContainer from './staff_manager'

export default class CampusManager extends React.Component{
    
    render(){
        let {styles} = this.props;
        return (
            <div style={styles.container}>
                <Tab.Container id="left-tabs-example" defaultActiveKey='staffManager'>
                    <Row className="clearfix">
                        <Col sm={1} style={styles.navColumn}>
                            <Nav bsStyle="pills" stacked>
                                <NavItem eventKey='staffManager'>
                                    <i className="fa fa-users" style={styles.navIcon}/>
                                    <h4>Staff</h4>
                                </NavItem>
                                <NavItem eventKey='budgetManager' >
                                    <i className="fa fa-money" style={styles.navIcon}/>
                                    <h4>Budget</h4>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={11} style={styles.contentColumn}>
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