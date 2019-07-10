import React from 'react';
import './styles/app.css';
import Flow from "./components/Flow";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import PackageSummary from "./components/PackageSummary";
import {connect} from 'react-redux'
import {setCurrentComponent} from "./actions";
import PolicyIntegration from "./components/PolicyIntegration";

const App = props => {

    const setCurrentView = tag => {
        if (tag === "#packages") {
            return <PackageSummary/>
        } else if (tag === "#summary") {
            return <Flow/>
        } else if (tag === "#policy") {
            return <PolicyIntegration/>
        } else {
            return <PolicyIntegration/>;
        }
    };

    return (
        <div>
            <Navbar bg='primary' variant='dark' onSelect={ tag => props.setCurrentComponent(tag)}>
                <Navbar.Brand href="#">Ricsurance</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#summary">Account Summary</Nav.Link>
                    <Nav.Link href="#packages">Package Selection</Nav.Link>
                    <Nav.Link href="#policy">Policy Integration</Nav.Link>
                </Nav>
            </Navbar>
            {setCurrentView(props.nav)}
        </div>
    );
};

export default connect(state => ({ nav: state.nav }), { setCurrentComponent })(App);