import React from 'react';

class City extends React.Component {
    constructor() {
        super();

        this.state = {
            isCityValid: false
        }
    }

    validateCity(e) {
        let validationRule = this.props.cityMetadata.metadata[0].value;
        console.log(validationRule);




        this.setState({isCityValid: false});
    }

    render() {
        return (
            <div>
                City &nbsp; <input type="text" onChange={e => this.validateCity(e)} />
                <br/>
                is valid? {this.state.isCityValid ? ( <span>yes</span> ) : ( <span>no</span> )}
            </div>
        );
    }
}

export default (City);