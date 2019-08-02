import React from 'react';
import './styles/app.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
import {connect} from 'react-redux'
import {setCurrentComponent} from "./actions";
import Flow from "./components/Flow";

class App extends React.Component {

    setCurrentView = tag => tag === "#page2" ? <div>page 2</div> : <Flow/>;

    render() {
        return (
            <div>
                <Navbar bg='light' expand='lg' onSelect={ tag => this.props.setCurrentComponent(tag)}>
                    <Navbar.Brand href="#">Ricsurance</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#page1">page 1</Nav.Link>
                        <Nav.Link href="#page2">page 2</Nav.Link>
                    </Nav>
                </Navbar>
                {this.setCurrentView(this.props.nav)}
            </div>
        );
    }
}

export default connect(state => ({ nav: state.nav }), { setCurrentComponent })(App);