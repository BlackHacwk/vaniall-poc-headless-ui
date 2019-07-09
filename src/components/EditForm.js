import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FormControl} from "react-bootstrap";
import * as RES from "../__mocks__";

const EditForm = () => (
    <Form>
        <Form.Group controlId="formGroupLicense">
            <Form.Label variant='secondary'>License</Form.Label>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>License Number</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.licenseNumber}/>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>License State</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.licenseState}/>
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formGroupPersonal">
            <Form.Label>Personal</Form.Label>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text  style={{"background": "none"}}>Name</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.displayName}/>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>DOB</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={`${RES.dateOfBirth.day}/${RES.dateOfBirth.month}/${RES.dateOfBirth.year}`}/>
            </InputGroup>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>Phone Number</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.cellNumber}/>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>Email</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.emailAddress1}/>
            </InputGroup>
        </Form.Group>
        <Form.Group controlId="formGroupAddress">
            <Form.Label>Address</Form.Label>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>line 1</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.addressLine1}/>
            </InputGroup>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>City</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.city}/>
            </InputGroup>
            <InputGroup size='lg'>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>State</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.state}/>
                <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>Zip Code</InputGroup.Text></InputGroup.Prepend>
                <FormControl placeholder={RES.primaryAddress.postalCode}/>
            </InputGroup>
        </Form.Group>
    </Form>
);

export default EditForm;