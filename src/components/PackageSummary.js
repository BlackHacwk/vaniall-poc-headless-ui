import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import PackageCard from "./PackageCard";
import CoverageSelection from "./CoverageSelector";

const PackageSummary = () => (
        <Container fluid={true}>
            <CardDeck className='relaxed'>
                <PackageCard id='standard' />
                <PackageCard id='premium' />
                <PackageCard id='minimum' />
            </CardDeck>
            <Form>
                <Form.Row>
                    <CoverageSelection />
                    <CoverageSelection />
                    <CoverageSelection />
                    <CoverageSelection />
                    <CoverageSelection />
                </Form.Row>
            </Form>
        </Container>
    );

export default PackageSummary;