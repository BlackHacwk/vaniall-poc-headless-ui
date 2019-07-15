import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from 'react';
import {connect} from "react-redux";
import {selectPackage} from "../actions";

const PackageCard = props =>{
    const handleButton = id => id === props.selectedPackage ? 'primary' : 'outline-primary';
    const handleClick = event => props.selectPackage(event.target.id);
    const getButtonText = id => id === props.selectedPackage ? 'Buy Package' : 'Select Package';
    const {pack} = props;

    return (
        <Card>
            <Card.Body className='text-center'>
                <div className='card-title'>{pack.branchName}</div>
                <div className='monthly-amount'>${pack.premium.monthlyPremium.amount}/mo</div>
                <Button id={props.id} onClick={e => handleClick(e)} variant={handleButton(props.id)}>
                    {getButtonText(props.id)}
                </Button>
                <div className='premium-amount'>${pack.premium.totalBeforeTaxes.amount} six-month auto premium</div>
            </Card.Body>
        </Card>
    );
};

const mapDispatchToProps = state => ({ selectedPackage: state.selectedPackage });

export default connect(mapDispatchToProps, { selectPackage })(PackageCard);