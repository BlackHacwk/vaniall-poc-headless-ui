import React from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {connect} from "react-redux";
import {gbbRes} from "../__mocks__";

const CoverageSelection = props =>
        <Form.Row>
            {gbbRes.result.lobData.personalAuto.offerings.filter(offer =>
                offer.branchCode === props.selectedPackage)[0].coverages.lineCoverages.map(coverage =>
                coverage.terms.length > 0
                ? <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>{coverage.name}</Form.Label>
                        <Form.Control as="select">{coverage.terms[0].options.map(option=> <option>{option.name}</option>)}</Form.Control>
                  </Form.Group>
                : null
            )}
        </Form.Row>;

export default connect(state=> ({selectedPackage: state.selectedPackage}), null)(CoverageSelection);