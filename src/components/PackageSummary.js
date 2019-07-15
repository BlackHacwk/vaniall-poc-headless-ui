import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import PackageCard from "./PackageCard";
import CoverageSelection from "./CoverageSelector";
import {gbbRes} from "../__mocks__";

const PackageSummary = () => (
        <Container fluid={true}>
            <h1 className='title'>Package Selection (GOOD, BETTER, BEST)</h1>
            <CardDeck className='relaxed'>
                {gbbRes.result.quoteData.offeredQuotes.map(pack => <PackageCard key={pack.branchName} id={pack.branchName} pack={pack} />)}
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