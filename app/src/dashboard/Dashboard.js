import React from 'react'
import {Grid, Col, Thumbnail, Row, Button} from 'react-bootstrap'

export default class Dashboard extends React.Component{
    render(){
        let {styles, openCampusManager, openScheduler} = this.props;
        return (
        <div style={styles.main}>
            <Grid>
                <Row>
                    <Col smOffset={2} xs={4}>
                    <Thumbnail src="https://s3-us-west-1.amazonaws.com/www.edukit.co/images/school.png" alt="242x200">
                        <h2 style={styles.text}>Campus Manager</h2>
                        <p style={styles.text}>Manage Staff, Cohorts, Budget, and more</p>
                        <br/>
                        <p>
                            <Button style={styles.goButton} bsSize="large" block bsStyle="primary" onClick={openCampusManager}>Go!</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                    <Col xs={4}>
                    <Thumbnail src="https://s3-us-west-1.amazonaws.com/www.edukit.co/images/calendar.png" alt="242x200" >
                        <h2 style={styles.text}>Scheduler</h2>
                        <p style={styles.text}>Manage you schedule. Create, update, delete, and view events</p>
                        <p>
                            <Button style={styles.goButton} bsSize="large" block onClick={openScheduler} bsStyle="primary">Go!</Button>
                        </p>
                    </Thumbnail>
                    </Col>
                </Row>
            </Grid>
            <div style={{paddingTop: '25em', color: 'gray', fontSize: '7px', textDecoration: 'none'}}>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </div>
        )
    } 
}