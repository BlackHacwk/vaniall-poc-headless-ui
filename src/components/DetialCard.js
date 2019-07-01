import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from 'react';

const DetailCard = props =>
<Card>
    <Card.Body className='text-center'>
        <div className='card-title'>Standard Coverage</div>
        <div className='monthly-amount'>$112.22/mo</div>
        <div className='premium-amount'>$660.33 six-month auto premium</div>
        <Button
            id='standard'
            onClick={event => props.handleClick(event)}
            variant={props.handleButton('standard')}
        >
            select This Package
        </Button>
        <div className='first-amount'>$101.32 first payment</div>
    </Card.Body>
</Card>;

export default DetailCard;