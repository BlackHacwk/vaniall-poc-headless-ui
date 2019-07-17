import React from 'react';
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import PackageCard from "./PackageCard";
import CoverageSelection from "./Coverages";
import {connect} from "react-redux";
import Alert from "react-bootstrap/Alert";

const PackageSummary = props =>{

    if (props.gbb.result)
        return (
            <Container fluid={true}>
                <h1 className='title'>Package Selection (GOOD, BETTER, BEST)</h1>
                <CardDeck className='relaxed'>
                    {props.gbb.result.quoteData.offeredQuotes.map(pack => <PackageCard key={pack.branchName} id={pack.branchCode} pack={pack} />)}
                </CardDeck>
                <h1 className='title'>Coverages</h1>
                <Form>
                    <CoverageSelection/>
                </Form>
            </Container>
        );

    else return (
        <Alert variant='warning'>
            <Alert.Heading>Ooops</Alert.Heading>
            <p>No package data was received</p>
        </Alert>
    );
};

export default connect(state=> ({ gbb: state.gbb }), null)(PackageSummary);