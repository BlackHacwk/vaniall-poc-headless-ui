import React from 'react';
import './styles/app.css';
import Flow from "./components/Flow";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import PackageSummary from "./components/PackageSummary";
import {connect} from 'react-redux'
import {setCurrentComponent} from "./actions";

class App extends React.Component {

    setCurrentView = tag => tag === "#packages" ? <PackageSummary/> : <Flow/>;

    render() {
        return (
            <div>
                <Navbar bg='light' expand='lg' onSelect={ tag => this.props.setCurrentComponent(tag)}>
                    <Navbar.Brand href="#">Ricsurance</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#summary">Account Summary</Nav.Link>
                        <Nav.Link href="#packages">Package Selection</Nav.Link>
                    </Nav>
                </Navbar>
                {this.setCurrentView(this.props.nav)}
            </div>
        );
    }
}

export default connect(state => ({ nav: state.nav }), { setCurrentComponent })(App);