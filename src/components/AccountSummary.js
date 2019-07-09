import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import DetailCard from "./DetailCard";

const AccountSummary = props => (
    <CardDeck>
        {props.household.map(person => <DetailCard key={person.account} accountNumber={'C000143542'} holder={true} />)}
    </CardDeck>
);

export default AccountSummary;