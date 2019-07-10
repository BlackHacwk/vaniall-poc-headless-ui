import React from 'react';
import Col from "react-bootstrap/Col";

class ZipCode extends React.Component {


    constructor() {
        super();

        this.state = {
            isZipValid: false
        }
    }

    validateZipCode(e) {
        let regex = new RegExp('^' + this.props.zipMetadata.metadata[0].value.expression.params[0].value + '$');
        this.setState({isZipValid: regex.exec(e.target.value) !== null});
    }

    render() {
        console.log(this.state);
        return (
            <div>
                Zip Code &nbsp; <input type="text" onChange={e => this.validateZipCode(e)} />
                <br/>
                is valid? {this.state.isZipValid ? ( <span>yes</span> ) : ( <span>no</span> )}
            </div>
        );
    }
}

export default (ZipCode);