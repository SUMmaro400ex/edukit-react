import React from 'react'
import {Grid, Col, Thumbnail, Row, Button} from 'react-bootstrap'

export default class Dashboard extends React.Component{
    render(){
        return (
        <div style={this.props.styles.main}>
            <Grid>
                <Row>
                    <Col smOffset={2} xs={4}>
                    <Thumbnail src="http://icons.iconarchive.com/icons/hamzasaleem/stock-apps-style-2-part-2/512/Settings-icon.png" alt="242x200">
                        <h2>Campus Manager</h2>
                        <p>Manage Staff, Cohorts, Budget, and more</p>
                        <br/>
                        <p>
                            <Button bsStyle="primary" onClick={this.props.openCampusManager}>Go!</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={4}>
                    <Thumbnail src="http://www.racedepartment.com/images/rd_calext/calendar.png" alt="242x200" >
                        <h2>Scheduler</h2>
                        <p>Manage you schedule. Create, update, delete, and view events</p>
                        <p>
                            <Button onClick={this.props.openScheduler} bsStyle="primary">Go!</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                </Row>
            </Grid>
        </div>
        )
    } 
}