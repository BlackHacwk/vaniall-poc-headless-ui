import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import DetailCard from "./DetailCard";

const AccountSummary = () => (
    <CardDeck>
        <DetailCard holder={true} />
        <DetailCard holder={false} />
    </CardDeck>
);

export default AccountSummary;