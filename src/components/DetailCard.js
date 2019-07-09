import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardImg from "react-bootstrap/CardImg";
import check from "../check.svg";
import cap from "../cap.svg";
import {connect} from "react-redux";
import {requestAccountDetails} from "../actions";

class CardDetails extends React.Component {

    componentDidMount() {
        this.props.requestAccountDetails(this.props.accountNumber);
    }

    render() {
        if( ! this.props.account)
            return <div>Loading...</div>;

        else {
            const {accountHolder} = this.props.account;
            console.log(this.props.account);
            return (
                <Card style={{ width: '30rem' }} >
                    <Card.Header>
                        { this.props.holder // TODO: figure out the right prop for this
                            ? `${accountHolder.displayName} (${this.props.account.accountNumber})`
                            : `mr John Doe (000002222)` }
                    </Card.Header>
                    <Card.Body>
                        <Container fluid={false}>
                            <Row>
                                <Col lg={3}>
                                    <CardImg variant="bottom" src={this.props.holder ? check : cap} height="150px" />
                                </Col>
                                <Col>
                                    <div>DOB: {accountHolder.dateOfBirth.day}/{accountHolder.dateOfBirth.month}/{accountHolder.dateOfBirth.year}</div>
                                    <div>{accountHolder.cellNumber}</div>
                                    <div>{accountHolder.emailAddress1}</div>
                                    <div>{accountHolder.licenseNumber} ({accountHolder.licenseState})</div>
                                    <div>{accountHolder.primaryAddress.addressLine1}, {accountHolder.primaryAddress.city}, {accountHolder.primaryAddress.state} {accountHolder.primaryAddress.postalCode}</div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            )
        };
    }
}

const mapStateToProps = state => ({account: state.account});

export default connect(mapStateToProps, {requestAccountDetails})(CardDetails);