import React from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {gbbRes} from "../__mocks__";

const CoverageSelection = props =>{
        console.log(gbbRes.result.lobData.personalAuto.offerings.filter(offer => offer.branchName === props.selectedPackage));
        return (
            <Form.Row>
                {
                    gbbRes.result.lobData.personalAuto.offerings.filter(offer =>
                        offer.branchName === "CUSTOM")[0].coverages.lineCoverages.map(coverage =>
                    {
                        if(coverage.terms.length > 0)
                        return (
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>{coverage.name}</Form.Label>
                                <Form.Control as="select">
                                    {coverage.terms[0].options.map(option=> <option>{option.name}</option>)}
                                </Form.Control>
                            </Form.Group>
                        )
                    })
                }
            </Form.Row>
        );

};

export default connect(state=> ({selectedPackage: state.selectedPackage}), null)(CoverageSelection);
