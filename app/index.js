var React = require('react');
var ReactDOM = require('react-dom');
import { Button, Row, Col, Icon } from 'react-materialize';

var HelloWorld = React.createClass({
    render: function(){
    return (
            <Row>
            <Col s={6}>
                <Button waves='light'>Add<Icon right>add</Icon></Button>
            </Col>
            <Col s={6}>
                <Button waves='light'>Remove<Icon right>remove</Icon></Button>
            </Col>
            </Row>
        )
    }   
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);
