import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

const Questionnaire = props => (
        <div>
            <h2>Questionnaire</h2>
            <ListGroup variant='flush'>
                { props.questions.map(q => <ListGroup.Item key={ q }>{ q }?</ListGroup.Item>) }
            </ListGroup>
        </div>
    );

export default Questionnaire;