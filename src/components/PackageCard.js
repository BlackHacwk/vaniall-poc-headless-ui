import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from 'react';
import {connect} from "react-redux";
import {buyPackage, selectPackage} from "../actions";

const PackageCard = props =>{
    const handleButton = id => id === props.selectedPackage ? 'primary' : 'outline-primary';
    const handleClick = e => e.target.id !== props.selectedPackage ? props.selectPackage(e.target.id) : props.buyPackage(e.target.id, props.sessionUUID);
    const getButtonText = id => id === props.selectedPackage ? 'Buy Package' : 'Select Package';
    const {pack} = props;
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

    return (
        <Card>
            <Card.Body className='text-center'>
                <div className='card-title'>{pack.branchName}</div>
                <div className='monthly-amount'>{formatter.format(pack.premium.monthlyPremium.amount)}/mo</div>
                <Button id={props.id} onClick={e => handleClick(e)} variant={handleButton(props.id)}>
                    {getButtonText(props.id)}
                </Button>
                <div className='premium-amount'>{formatter.format(pack.premium.totalBeforeTaxes.amount)} six-month auto premium</div>
            </Card.Body>
        </Card>
    );
};

const mapDispatchToProps = state => ({ selectedPackage: state.selectedPackage, sessionUUID: state.sessionUUID });

export default connect(mapDispatchToProps, { selectPackage, buyPackage })(PackageCard);