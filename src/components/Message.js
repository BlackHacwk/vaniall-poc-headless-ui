import React from 'react';
import Alert from "react-bootstrap/Alert";

const Message = props => (
    <Alert variant='success'>
        <Alert.Heading>{props.title}</Alert.Heading>
        <p>{props.message}</p>
    </Alert>
);
export default Message;