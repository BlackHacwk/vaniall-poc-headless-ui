import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardImg from "react-bootstrap/CardImg";
import check from "../check.svg";
import cap from "../cap.svg";

const CardDetails = props => {
    const {contact} = props;

    if(! contact)
        return <div>Loading...</div>;

    else {
        return (
            <Card style={{ width: '30rem' }} >
                <Card.Header>
                    { contact.displayName } { contact.policyContactRoles.includes('PolicyPriNamedInsured') ? '(account holder)' : null }
                </Card.Header>
                <Card.Body>
                    <Container fluid={false}>
                        <Row>
                            <Col lg={3}>
                                <CardImg variant="bottom" src={
                                    contact.policyContactRoles.includes('PolicyPriNamedInsured')
                                    ? check
                                    : cap
                                } height="150px" />
                            </Col>
                            <Col>
                                <div>DOB: {contact.dateOfBirth.day}/{contact.dateOfBirth.month}/{contact.dateOfBirth.year}</div>
                                <div>{contact.cellNumber}</div>
                                <div>{contact.emailAddress1}</div>
                                <div>{contact.licenseNumber} ({contact.licenseState})</div>
                                <div>{contact.primaryAddress.addressLine1}, {contact.primaryAddress.city}, {contact.primaryAddress.state} {contact.primaryAddress.postalCode}</div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        )
    }
};

export default CardDetails;