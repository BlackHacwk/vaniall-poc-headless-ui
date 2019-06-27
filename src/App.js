import React from 'react';
import './styles/app.css';
import Flow from "./components/Flow";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import PackageSummary from "./components/PackageSummary";
import {connect} from 'react-redux'
import {setCurrentComponent} from "./actions";

const App = props => {

    const setCurrentView = tag => tag === "#edit" ? <Flow/> : <PackageSummary/>;

    return (
        <div>
            <Navbar bg='primary' variant='dark' onSelect={ tag => props.setCurrentComponent(tag)}>
                <Navbar.Brand href="#">Ricsurance</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#summary">Summary</Nav.Link>
                    <Nav.Link href="#edit">Edit</Nav.Link>
                </Nav>
            </Navbar>
            {setCurrentView(props.nav)}
        </div>
    );
};

export default connect(state => ({ nav: state.nav }), { setCurrentComponent })(App);