import React from 'react';
import Iframe from 'react-iframe';

class IFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => this.setState({ width: window.innerWidth, height: window.innerHeight });

    render(){
        return <Iframe url="https://dev-pe.usaadev.guidewire.net/ProducerEngage/dist/html/index-agents.html#/auth/login"
                width={this.state.width -100}
                height={this.state.height}
                id="myId"
                className="frame"
                display="initial"
                position="relative"/>;
    }
}

export default IFrame;