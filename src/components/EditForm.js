import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FormControl} from "react-bootstrap";
import * as RES from "../__mocks__";

const EditForm = () => (
    <Form>
        <Form.Group controlId="formGroupLicense">
            <Form.Label>License</Form.Label>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text>License Number</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.licenseNumber}/>
                <InputGroup.Prepend><InputGroup.Text>License State</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.licenseState}/>
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formGroupPersonal">
            <Form.Label>Personal</Form.Label>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text>Name</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.displayName}/>
                <InputGroup.Prepend><InputGroup.Text>DOB</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={`${RES.dateOfBirth.day}/${RES.dateOfBirth.month}/${RES.dateOfBirth.year}`}/>
            </InputGroup>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text>Phone Number</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.cellNumber}/>
                <InputGroup.Prepend><InputGroup.Text>Email</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.emailAddress1}/>
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formGroupAddress">
            <Form.Label>Address</Form.Label>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text>line 1</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.addressLine1}/>
            </InputGroup>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text>City</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.city}/>
            </InputGroup>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text>State</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.state}/>
                <InputGroup.Prepend><InputGroup.Text>Zip Code</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.postalCode}/>
            </InputGroup>
        </Form.Group>
    </Form>
);

export default EditForm;