import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {selectPackage} from "../actions";
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/Col";

const PackageSummary = props => {

    const handleClick = event => props.selectPackage(event.target.id);
    const handleButton = id => id === props.selectPackage ? 'primary' : 'outline-primary';

    console.log(props);
    return (
        <Container fluid={true}>
            <CardDeck className='relaxed'>
                <Card>
                    <Card.Body className='text-center'>
                        <div className='card-title'>Standard Coverage</div>
                        <div className='monthly-amount'>$112.22/mo</div>
                        <div className='premium-amount'>$660.33 six-month auto premium</div>
                        <Button
                            id='standard'
                            onClick={event => handleClick(event)}
                            variant={handleButton('standard')}
                        >
                            select This Package
                        </Button>
                        <div className='first-amount'>$101.32 first payment</div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className='text-center'>
                        <div className='card-title'>Premium Coverage</div>
                        <div className='monthly-amount'>$166.22/mo</div>
                        <div className='premium-amount'>$632.33 six-month auto premium</div>
                        <Button
                            id='standard'
                            onClick={event => handleClick(event)}
                            variant={handleButton('standard')}
                        >
                            select This Package
                        </Button>
                        <div className='first-amount'>$151.60 first payment</div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body className='text-center'>
                        <div className='card-title'>Minimum Coverage</div>
                        <div className='monthly-amount'>$112.22/mo</div>
                        <div className='premium-amount'>$99.21 six-month auto premium</div>
                        <Button
                            id='standard'
                            onClick={event => handleClick(event)}
                            variant={handleButton('standard')}
                        >
                            select This Package
                        </Button>
                        <div className='first-amount'>$96 first payment</div>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Bodily Injury</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Bodily Injury</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
            </Form>

        </Container>
    );
};

export default connect(state => ({ selectedPackage: state.selectedPackage }), { selectPackage })(PackageSummary);