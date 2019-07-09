import React from 'react';
import EditForm from "./EditForm";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const AccountEdit = () => (
    <Tabs variant={'pills'} defaultActiveKey="jane" className={'relaxed'}>
        <Tab eventKey="jane" title="Jane Doe">
            <EditForm/>
        </Tab>
    </Tabs>
);

export default AccountEdit;