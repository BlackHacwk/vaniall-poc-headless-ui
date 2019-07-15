import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import PackageCard from "./PackageCard";
import CoverageSelection from "./CoverageSelector";
import {connect} from "react-redux";

const PackageSummary = props =>
        <Container fluid={true}>
            <h1 className='title'>Package Selection (GOOD, BETTER, BEST)</h1>
            <CardDeck className='relaxed'>
                {props.gbb.result.quoteData.offeredQuotes.map(pack => <PackageCard key={pack.branchName} id={pack.branchCode} pack={pack} />)}
            </CardDeck>
            <Form>
                <CoverageSelection/>
            </Form>
        </Container>;

export default connect(state=> ({ gbb: state.gbb }), null)(PackageSummary);