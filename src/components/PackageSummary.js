import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import {connect} from "react-redux";
import {selectPackage} from "../actions";
import Form from 'react-bootstrap/Form'
import DetailCard from "./DetialCard";
import CoverageSelection from "./CoverageSelector";

const PackageSummary = props => {
    const handleClick = event => props.selectPackage(event.target.id);
    const handleButton = id => id === props.selectPackage ? 'primary' : 'outline-primary';

    return (
        <Container fluid={true}>
            <CardDeck className='relaxed'>
                <DetailCard handleClick={handleClick} handleButton={handleButton} />
                <DetailCard handleClick={handleClick} handleButton={handleButton} />
                <DetailCard handleClick={handleClick} handleButton={handleButton} />
            </CardDeck>
            <Form>
                <Form.Row>
                    <CoverageSelection />
                    <CoverageSelection />
                </Form.Row>
            </Form>
        </Container>
    );
};

export default connect(state => ({ selectedPackage: state.selectedPackage }), { selectPackage })(PackageSummary);