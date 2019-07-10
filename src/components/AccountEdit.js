import React from 'react';
import EditForm from "./EditForm";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {connect} from "react-redux";

const AccountEdit = props => {
    console.log(props);
    return (
    <Tabs variant={'pills'} defaultActiveKey={props.contacts.length > 0 ? props.contacts[0].displayName: ""} className={'relaxed'}>
        {props.contacts.map(contact =>
            <Tab key={contact.displayName} eventKey={contact.displayName} title={contact.displayName}><EditForm contact={contact}/></Tab>)}
    </Tabs>
    );
};

export default connect(state => ({contacts: state.contacts}))(AccountEdit);