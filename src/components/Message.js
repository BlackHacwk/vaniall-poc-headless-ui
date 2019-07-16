import React from 'react';

import {connect} from "react-redux";
import {requestMessage} from "../actions";
import Alert from "react-bootstrap/Alert";

class Message extends React.Component {

    componentWillMount() {
        this.props.requestMessage("low", "This is a high priority message");
    }

    determineStyleToUse = priority => {
        switch(priority) {
            case 'urgent': return 'danger';
            case 'high' : return 'warning';
            case 'low' : return 'info';
            case 'normal' : return 'success';
            default : return '   ';
        }
    };

    render() {
        if(!this.props.message) return <div>Loading ...</div>;

        else return (
            <Alert variant={this.determineStyleToUse(this.props.message.priority)}>
                <Alert.Heading>{this.props.message.subject}</Alert.Heading>
                <p>{this.props.message.description}</p>
                <small>Created on: {this.props.message.dueDate}</small>
            </Alert>
        );
    };
}

export default connect (state=>({message: state.message}), {requestMessage}) ( Message ) ;