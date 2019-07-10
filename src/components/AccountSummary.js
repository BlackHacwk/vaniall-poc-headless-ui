import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import DetailCard from "./DetailCard";
import {connect} from "react-redux";

const AccountSummary = props => (
    <CardDeck>
        {props.contacts.map(contact => <DetailCard key={contact.accountContactPublicID} contact={contact} holder={true} />)}
    </CardDeck>
);

export default connect(state => ({contacts: state.contacts}))(AccountSummary);