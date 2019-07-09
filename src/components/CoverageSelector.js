import React from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const CoverageSelection = () =>
<Form.Group as={Col} controlId="formGridState">
    <Form.Label>Bodily Injury</Form.Label>
    <Form.Control as="select">
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
    </Form.Control>
</Form.Group>;

export default CoverageSelection;