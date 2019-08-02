import React from 'react';
import Button from "react-bootstrap/Button";
import Fade from 'react-bootstrap/Fade'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
import {connect} from "react-redux";
import IFrame from "./IFrame";

class Flow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            pages: [
                {title: "title", component: <IFrame/>, prev: 'Exit', next: 'Next', callback: null}
            ]
        }
    }

    componentDidMount() {
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

export default connect()(Flow);