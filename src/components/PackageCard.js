import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from 'react';
import {connect} from "react-redux";
import {selectPackage} from "../actions";

const DetailCard = props =>{
    const handleButton = id => id === props.selectedPackage ? 'primary' : 'outline-primary';
    const handleClick = event => props.selectPackage(event.target.id);
    const getButtonText = id => id === props.selectedPackage ? 'Buy Package' : 'Select Package';

    return (
        <Card>
            <Card.Body className='text-center'>
                <div className='card-title'>Standard Coverage</div>
                <div className='monthly-amount'>$112.22/mo</div>
                <div className='premium-amount'>$660.33 six-month auto premium</div>
                <Button id={props.id} onClick={e => handleClick(e)} variant={handleButton(props.id)}>
                    {getButtonText(props.id)}
                </Button>
                <div className='first-amount'>$101.32 first payment</div>
            </Card.Body>
        </Card>
    );
};

const mapDispatchToProps = state => ({ selectedPackage: state.selectedPackage });

export default connect(mapDispatchToProps, { selectPackage })(DetailCard);