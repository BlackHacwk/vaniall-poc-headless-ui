import React from 'react';
import Button from "react-bootstrap/Button";
import AccountSummary from "./AccountSummary";
import Fade from 'react-bootstrap/Fade'
import AccountEdit from "./AccountEdit";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Message from "./Message";
import faker from 'faker';
import Questionnaire from "./Questionnaire";
import ProgressBar from "react-bootstrap/ProgressBar";
import {api} from "../api";
import {account_endpoint, gateway_context_root, host, metadata_endpoint} from "../constants/endpoints";
import axios from "axios";

class Flow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            pages: [
                { title: "Account Review", component:<AccountSummary/>, prev: 'Exit', next: 'Edit' },
                { title: "Account Edit", component:<AccountEdit/>, prev: 'Previous', next: 'Save' },
                { title: "Account 3",
                    component:<Message title={faker.lorem.sentence()} message={faker.lorem.paragraph()}/>,
                    prev: 'Previous', next: 'Next' },
                { title: "Questionnaire",
                    component:<Questionnaire questions={[
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase()
                    ]}/>,
                    prev: 'Previous', next: 'Done' },
            ]
        }
    }

    //TODO: REMOVE
    componentDidMount() {
        const headers = {
            'Content-Type': 'application/json',
            'Accept-Language':'en_US',
            "Access-Control-Allow-Origin": "*",
            'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImtleS1pZC0xIiwidHlwIjoiSldUIn0.eyJqdGkiOiJmZDEyZTFlMzg2OTc0NjUzYjJjNDg0NDcxMzBhZTZhZiIsIm5vbmNlIjoibmtkbmxRYlFTeHRBSWt6aiIsInN1YiI6IjcwNGJiNjdkLWI1NmMtNDJjNS1iOWU5LTczMWE4MjIwMDM5MSIsInNjb3BlIjpbIm9wZW5pZCJdLCJjbGllbnRfaWQiOiJHYXRld2F5QXBwbGljYXRpb24tYWdlbnRzIiwiY2lkIjoiR2F0ZXdheUFwcGxpY2F0aW9uLWFnZW50cyIsImF6cCI6IkdhdGV3YXlBcHBsaWNhdGlvbi1hZ2VudHMiLCJ1c2VyX2lkIjoiNzA0YmI2N2QtYjU2Yy00MmM1LWI5ZTktNzMxYTgyMjAwMzkxIiwib3JpZ2luIjoicG9saWN5Y2VudGVyIiwidXNlcl9uYW1lIjoic3UiLCJlbWFpbCI6InN1QHVzZXIuZnJvbS5wb2xpY3ljZW50ZXIuY2YiLCJhdXRoX3RpbWUiOjE1NjI2MTk2NDMsInJldl9zaWciOiJmZjk1Njc2OSIsImlhdCI6MTU2MjYyMDQyOSwiZXhwIjoxNTYyNjIyMjI5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvdWFhL29hdXRoL3Rva2VuIiwiemlkIjoidWFhIiwiYXVkIjpbIm9wZW5pZCIsIkdhdGV3YXlBcHBsaWNhdGlvbi1hZ2VudHMiXX0.mUzg8zNCHqk9uxy1JMMS3KWVe8kg2IZGkZZtDIMJbK21EjWjwUK0-DJsk6zD0pPN0p79SdI6Q_2-k3yuhqiR0PpKmarkqg-5WU_E8Rt8Nm1tpfAEYXNb76hnYg4HQk-1BlL302y3RSMtwXg9QLOYaogZ3fOdQy8E4HOAv5ZnzYnznynWD9ZoUyvwA6BC_JfWZe6mfK6mk3Oy7QVqI0uw2X53bx0U08w2GDXUZpsqtE1TcczgUVI6G5YTM-5ztSht0JIj2c_3lrx12OxGCOBYNfjO8vWmUL9xhTXDt2nlzqXbHTErjCCdIwzgKNvoKPRIRHBl-U7wAf8DszENNr_yQA"
        };
        api.post(
            host + gateway_context_root + account_endpoint,
            {"id":"a7eb6534-772c-475a-b270-97752998eeec","jsonrpc":"2.0","method":"getAccountDetails","params":["C000143542"]},
            {headers: headers}
        );
    }

    render() {
        const { current, pages} = this.state;
        return (
            <div>
                <Container fluid={true}>
                    <Row>
                        <Col lg={4}>
                            <h1 className='title'>{pages[current].title}</h1>
                        </Col>
                        <Col>
                            <div className="float-lg-right"
                                style={{ paddingTop: "42px" }}>
                                Step {this.state.current +1} of {this.state.pages.length}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Fade in={true} appear={true}>
                    <div className='relaxed'>
                        <ProgressBar min={0} max={pages.length} now={this.state.current +1}/>
                        <div className='relaxed'>{pages[current].component}</div>
                    </div>
                </Fade>
                <div style={{"marginTop":"150px"}} className="float-lg-right">
                    <Button
                        style={{"margin": "10px"}}
                        onClick={ ()=> this.setState(prevState => ({ current: prevState.current -1 })) }
                        size='lg'
                        variant='outline-primary' >{pages[current].prev}</Button>
                    <Button
                        style={{"margin": "10px"}}
                        onClick={ ()=> this.setState(prevState => ({ current: prevState.current +1 })) }
                        size='lg'
                        variant='primary'>{pages[current].next}</Button>
                </div>
            </div>
        );
    }
}

export default Flow;