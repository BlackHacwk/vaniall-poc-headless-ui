import React from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const CoverageSelection = props =>
<Form.Group as={Col} controlId="formGridState">
    <Form.Label>Bodily Injury</Form.Label>
    <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
    </Form.Control>
</Form.Group>;

export default CoverageSelection;