import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardImg from "react-bootstrap/CardImg";
import check from "../check.svg";
import cap from "../cap.svg";
import * as RES from "../__mocks__/index"

const CardDetails = props => (
        <Card style={{ width: '30rem' }} >
            <Card.Header>
                { props.holder
                    ? `${RES.prefix} ${RES.displayName} (${RES.accountNumber})`
                    : `mr John Doe (000002222)` }
            </Card.Header>
            <Card.Body>
                <Container fluid={false}>
                    <Row>
                        <Col lg={3}>
                            <CardImg variant="bottom" src={props.holder ? check : cap} height="150px" />
                        </Col>
                        <Col>
                            <div>DOB: {RES.dateOfBirth.day}/{RES.dateOfBirth.month}/{RES.dateOfBirth.year}</div>
                            <div>{RES.cellNumber}</div>
                            <div>{RES.emailAddress1}</div>
                            <div>{RES.licenseNumber} ({RES.licenseState})</div>
                            <div>{RES.primaryAddress.addressLine1}, {RES.primaryAddress.city}, {RES.primaryAddress.state} {RES.primaryAddress.postalCode}</div>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );

export default CardDetails;