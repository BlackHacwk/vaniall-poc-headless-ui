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
import {connect} from "react-redux";
import {requestGoodBetterBest, requestPolicyContacts, updateAccount} from "../actions";
import {accountDTO} from "../__mocks__";

class Flow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            pages: [
                {title: "Account Review", component: <AccountSummary/>, prev: 'Exit', next: 'Edit', callback: null},
                {
                    title: "Account Edit",
                    component: <AccountEdit/>,
                    prev: 'Previous',
                    next: 'Save',
                    callback: () => this.props.updateAccount(accountDTO)
                },
                {
                    title: "Account 3",
                    component: <Message title={faker.lorem.sentence()} message={faker.lorem.paragraph()}/>,
                    prev: 'Previous',
                    next: 'Next',
                    callback: null
                },
                {
                    title: "Questionnaire",
                    component: <Questionnaire questions={[
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase(),
                        faker.hacker.phrase()
                    ]}/>,
                    prev: 'Previous',
                    next: 'Done',
                    callback: null
                },
            ]
        }
    }

    componentDidMount() {
        const {requestPolicyContacts, requestGoodBetterBest} = this.props;

        requestPolicyContacts("1424066131");
        requestGoodBetterBest();
    }

    handlePrevClick = () => this.setState(prevState => ({ current: prevState.current -1 }));

    handleNextClick = callback => {
        this.setState(prevState => ({ current: prevState.current +1 }));
        if(callback) callback();
    };


    render() {
        const { current, pages } = this.state;
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
                        onClick={ this.handlePrevClick }
                        size='lg'
                        variant='outline-primary' >{pages[current].prev}</Button>
                    <Button
                        style={{"margin": "10px"}}
                        onClick={ ()=> this.handleNextClick(pages[current].callback) }
                        size='lg'
                        variant='primary'>{pages[current].next}</Button>
                </div>
            </div>
        );
    }
}

export default connect(state => ({license: state.license}), {updateAccount, requestPolicyContacts, requestGoodBetterBest})(Flow);