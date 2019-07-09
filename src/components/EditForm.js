import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FormControl} from "react-bootstrap";
import {connect} from "react-redux";

const EditForm = props => {
    const {accountHolder} = props.account;

    return (
        <Form>
            <Form.Group controlId="formGroupLicense">
                <Form.Label variant='secondary'>License</Form.Label>
                <InputGroup size='lg'>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>License Number</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.licenseNumber}/>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>License State</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.licenseState}/>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formGroupPersonal">
                <Form.Label>Personal</Form.Label>
                <InputGroup size='lg'>
                    <InputGroup.Prepend><InputGroup.Text  style={{"background": "none"}}>Name</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.displayName}/>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>DOB</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={`${accountHolder.dateOfBirth.day}/${accountHolder.dateOfBirth.month}/${accountHolder.dateOfBirth.year}`}/>
                </InputGroup>
                <InputGroup size='lg'>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>Phone Number</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.cellNumber}/>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>Email</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.emailAddress1}/>
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <InputGroup size='lg'>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>line 1</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.primaryAddress.addressLine1}/>
                </InputGroup>
                <InputGroup size='lg'>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>City</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.primaryAddress.city}/>
                </InputGroup>
                <InputGroup size='lg'>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>State</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.primaryAddress.state}/>
                    <InputGroup.Prepend><InputGroup.Text style={{"background": "none"}}>Zip Code</InputGroup.Text></InputGroup.Prepend>
                    <FormControl placeholder={accountHolder.primaryAddress.postalCode}/>
                </InputGroup>
            </Form.Group>
        </Form>
    );
};

export default connect(state => ({account: state.account}), null)(EditForm);