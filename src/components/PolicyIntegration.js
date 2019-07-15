import React from 'react';
import {postGetPolicyMetaData} from "../actions/actions";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Highlight from "react-highlight";
import ZipCode from "./ZipCode";
import City from "./City";

class PolicyIntegration extends React.Component {


    constructor() {
        super();

        this.state = {
            isZipValid: false
        }

        this.policyMetadata = {};
    }

    componentDidMount() {
        this.props.postGetPolicyMetaData('asdf.asdf.asdf--asdf-asdf-asdf-asdf')
    }

    renderPolicy() {

        console.log('policyMetadata: ');
        console.log(this.policyMetadata);

        this.props.metadata.result.newTypeMeta.forEach(o => {
            this.policyMetadata[o.name] = o.metadata;
        });

        return <div>
            <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/ocean.css"></link>
            <br /><br />
            <h1>Typesets</h1>
            <Container>
                <Row>
                    <Col>
                        Gender: &nbsp;
                        <select>
                            {this.policyMetadata['typekey.GenderType'].value.codes.map( (o, key) =>  <option key={key}>{o.code}</option>)}
                        </select>
                        <br/><br/>
                        Gender: &nbsp;
                        <select>
                            {this.policyMetadata['typekey.GenderType'].value.codes.map( (o, key) =>  <option key={key}>{o.displayKey}</option>)}
                        </select>
                    </Col>
                    <Col>
                        <div style={{overflow: 'auto', maxHeight: '400px', width: '800px', margin: '25px 0px'}}>
                        <Highlight language="json" className="json">
                            {`{
                "metadata": {
                    "type": "edge.metadata.typeinfo.typelistinfo.dto.TypelistMetadataDTO",
                    "value": {
                        "filters": [],
                        "codes": [
                            {
                                "code": "F",
                                "categories": [],
                                "displayKey": "typekey.GenderType.F",
                                "priority": -1
                            },
                            {
                                "code": "M",
                                "categories": [],
                                "displayKey": "typekey.GenderType.M",
                                "priority": -1
                            }
                        ],
                        "namedMetadata": []
                    }
                },
                "name": "typekey.GenderType"
            }`}
                        </Highlight>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Name Prefix: &nbsp;
                        <select>
                            {this.policyMetadata['typekey.NamePrefix'].value.codes.map( (o, key) => <option key={key}>{o.code}</option>)}
                        </select>
                        <br/><br/>
                        Name Prefix: &nbsp;
                        <select>
                            {this.policyMetadata['typekey.NamePrefix'].value.codes.map( (o, key) => <option key={key}>{o.displayKey}</option>)}
                        </select>
                    </Col>
                    <Col>
                        <div style={{overflow: 'auto', maxHeight: '400px', width: '800px', margin: '25px 0px'}}>
                        <Highlight language="json">
                            {`{
                "metadata": {
                    "type": "edge.metadata.typeinfo.typelistinfo.dto.TypelistMetadataDTO",
                    "value": {
                        "filters": [],
                        "codes": [
                            {
                                "code": "mr",
                                "categories": [],
                                "displayKey": "typekey.NamePrefix.mr",
                                "priority": 1
                            },
                            {
                                "code": "mrs",
                                "categories": [],
                                "displayKey": "typekey.NamePrefix.mrs",
                                "priority": 2
                            },
                            {
                                "code": "ms",
                                "categories": [],
                                "displayKey": "typekey.NamePrefix.ms",
                                "priority": 3
                            },
                            {
                                "code": "dr",
                                "categories": [],
                                "displayKey": "typekey.NamePrefix.dr",
                                "priority": 4
                            }
                        ],
                        "namedMetadata": []
                    }
                },
                "name": "typekey.NamePrefix"
            }`}
                        </Highlight>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        All the states: &nbsp;
                        <select>
                            {this.policyMetadata['typekey.State'].value.codes.map( (o, key) => <option value={o.code} key={key}>{o.code}</option>)}
                        </select>
                        <br/><br/>
                        All the states: &nbsp;
                        <select>
                            {this.policyMetadata['typekey.State'].value.codes.map( (o, key) => <option value={o.code} key={key}>{o.displayKey}</option>)}
                        </select>
                    </Col>
                    <Col>
                        <div style={{overflow: 'auto', maxHeight: '400px', width: '800px', margin: '25px 0px'}}>
                        <Highlight language="json">
                            {`{
                    "type": "edge.metadata.typeinfo.typelistinfo.dto.TypelistMetadataDTO",
                    "value": {
                        "filters": [],
                        "codes": [
                            {
                                "code": "Hokkaido",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Hokkaido",
                                "priority": 1
                            },
                            {
                                "code": "Aomori",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Aomori",
                                "priority": 2
                            },
                            {
                                "code": "Iwate",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Iwate",
                                "priority": 3
                            },
                            {
                                "code": "Miyagi",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Miyagi",
                                "priority": 4
                            },
                            {
                                "code": "Akita",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Akita",
                                "priority": 5
                            },
                            {
                                "code": "Yamagata",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Yamagata",
                                "priority": 6
                            },
                            {
                                "code": "Fukushima",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Fukushima",
                                "priority": 7
                            },
                            {
                                "code": "Ibaraki",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Ibaraki",
                                "priority": 8
                            },
                            {
                                "code": "AU_JBT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_JBT"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_JBT",
                                "priority": 9
                            },
                            {
                                "code": "Tochigi",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Tochigi",
                                "priority": 9
                            },
                            {
                                "code": "Gumma",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Gumma",
                                "priority": 10
                            },
                            {
                                "code": "Saitama",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Saitama",
                                "priority": 11
                            },
                            {
                                "code": "Chiba",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Chiba",
                                "priority": 12
                            },
                            {
                                "code": "Tokyo",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Tokyo",
                                "priority": 13
                            },
                            {
                                "code": "Kanagawa",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Kanagawa",
                                "priority": 14
                            },
                            {
                                "code": "Niigata",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Niigata",
                                "priority": 15
                            },
                            {
                                "code": "Toyama",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Toyama",
                                "priority": 16
                            },
                            {
                                "code": "Ishikawa",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Ishikawa",
                                "priority": 17
                            },
                            {
                                "code": "Fukui",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Fukui",
                                "priority": 18
                            },
                            {
                                "code": "Yamanashi",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Yamanashi",
                                "priority": 19
                            },
                            {
                                "code": "Nagano",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Nagano",
                                "priority": 20
                            },
                            {
                                "code": "Gifu",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Gifu",
                                "priority": 21
                            },
                            {
                                "code": "Shizuoka",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Shizuoka",
                                "priority": 22
                            },
                            {
                                "code": "Aichi",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Aichi",
                                "priority": 23
                            },
                            {
                                "code": "Mie",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Mie",
                                "priority": 24
                            },
                            {
                                "code": "Shiga",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Shiga",
                                "priority": 25
                            },
                            {
                                "code": "Kyoto",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Kyoto",
                                "priority": 26
                            },
                            {
                                "code": "Osaka",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Osaka",
                                "priority": 27
                            },
                            {
                                "code": "Hyogo",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Hyogo",
                                "priority": 28
                            },
                            {
                                "code": "Nara",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Nara",
                                "priority": 29
                            },
                            {
                                "code": "Wakayama",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Wakayama",
                                "priority": 30
                            },
                            {
                                "code": "Tottori",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Tottori",
                                "priority": 31
                            },
                            {
                                "code": "Shimane",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Shimane",
                                "priority": 32
                            },
                            {
                                "code": "Okayama",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Okayama",
                                "priority": 33
                            },
                            {
                                "code": "Hiroshima",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Hiroshima",
                                "priority": 34
                            },
                            {
                                "code": "Yamaguchi",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Yamaguchi",
                                "priority": 35
                            },
                            {
                                "code": "Tokushima",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Tokushima",
                                "priority": 36
                            },
                            {
                                "code": "Kagawa",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Kagawa",
                                "priority": 37
                            },
                            {
                                "code": "Ehime",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Ehime",
                                "priority": 38
                            },
                            {
                                "code": "Kochi",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Kochi",
                                "priority": 39
                            },
                            {
                                "code": "Fukuoka",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Fukuoka",
                                "priority": 40
                            },
                            {
                                "code": "Saga",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Saga",
                                "priority": 41
                            },
                            {
                                "code": "Nagasaki",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Nagasaki",
                                "priority": 42
                            },
                            {
                                "code": "Kumamoto",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Kumamoto",
                                "priority": 43
                            },
                            {
                                "code": "Oita",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Oita",
                                "priority": 44
                            },
                            {
                                "code": "Miyazaki",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Miyazaki",
                                "priority": 45
                            },
                            {
                                "code": "Kagoshima",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Kagoshima",
                                "priority": 46
                            },
                            {
                                "code": "Okinawa",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "JP"
                                    }
                                ],
                                "displayKey": "typekey.State.Okinawa",
                                "priority": 47
                            },
                            {
                                "code": "AU_ACT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_ACT"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_ACT",
                                "priority": -1
                            },
                            {
                                "code": "AL",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AL"
                                    }
                                ],
                                "displayKey": "typekey.State.AL",
                                "priority": -1
                            },
                            {
                                "code": "AK",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AK"
                                    }
                                ],
                                "displayKey": "typekey.State.AK",
                                "priority": -1
                            },
                            {
                                "code": "AB",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AB"
                                    }
                                ],
                                "displayKey": "typekey.State.AB",
                                "priority": -1
                            },
                            {
                                "code": "AZ",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AZ"
                                    }
                                ],
                                "displayKey": "typekey.State.AZ",
                                "priority": -1
                            },
                            {
                                "code": "AR",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AR"
                                    }
                                ],
                                "displayKey": "typekey.State.AR",
                                "priority": -1
                            },
                            {
                                "code": "DE_BW",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_BW"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_BW",
                                "priority": -1
                            },
                            {
                                "code": "DE_BY",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_BY"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_BY",
                                "priority": -1
                            },
                            {
                                "code": "DE_BE",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_BE"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_BE",
                                "priority": -1
                            },
                            {
                                "code": "DE_BB",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_BB"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_BB",
                                "priority": -1
                            },
                            {
                                "code": "DE_HB",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_HB"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_HB",
                                "priority": -1
                            },
                            {
                                "code": "BC",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "BC"
                                    }
                                ],
                                "displayKey": "typekey.State.BC",
                                "priority": -1
                            },
                            {
                                "code": "CA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "CA"
                                    }
                                ],
                                "displayKey": "typekey.State.CA",
                                "priority": -1
                            },
                            {
                                "code": "CO",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "CO"
                                    }
                                ],
                                "displayKey": "typekey.State.CO",
                                "priority": -1
                            },
                            {
                                "code": "CT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "CT"
                                    }
                                ],
                                "displayKey": "typekey.State.CT",
                                "priority": -1
                            },
                            {
                                "code": "DE",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE"
                                    }
                                ],
                                "displayKey": "typekey.State.DE",
                                "priority": -1
                            },
                            {
                                "code": "DC",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DC"
                                    }
                                ],
                                "displayKey": "typekey.State.DC",
                                "priority": -1
                            },
                            {
                                "code": "FM",
                                "categories": [
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "FM"
                                    }
                                ],
                                "displayKey": "typekey.State.FM",
                                "priority": -1
                            },
                            {
                                "code": "FL",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "FL"
                                    }
                                ],
                                "displayKey": "typekey.State.FL",
                                "priority": -1
                            },
                            {
                                "code": "GA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "GA"
                                    }
                                ],
                                "displayKey": "typekey.State.GA",
                                "priority": -1
                            },
                            {
                                "code": "GU",
                                "categories": [
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "GU"
                                    }
                                ],
                                "displayKey": "typekey.State.GU",
                                "priority": -1
                            },
                            {
                                "code": "DE_HH",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_HH"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_HH",
                                "priority": -1
                            },
                            {
                                "code": "HI",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "HI"
                                    }
                                ],
                                "displayKey": "typekey.State.HI",
                                "priority": -1
                            },
                            {
                                "code": "DE_HE",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_HE"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_HE",
                                "priority": -1
                            },
                            {
                                "code": "ID",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "ID"
                                    }
                                ],
                                "displayKey": "typekey.State.ID",
                                "priority": -1
                            },
                            {
                                "code": "IL",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "IL"
                                    }
                                ],
                                "displayKey": "typekey.State.IL",
                                "priority": -1
                            },
                            {
                                "code": "IN",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "IN"
                                    }
                                ],
                                "displayKey": "typekey.State.IN",
                                "priority": -1
                            },
                            {
                                "code": "IA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "IA"
                                    }
                                ],
                                "displayKey": "typekey.State.IA",
                                "priority": -1
                            },
                            {
                                "code": "KS",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "KS"
                                    }
                                ],
                                "displayKey": "typekey.State.KS",
                                "priority": -1
                            },
                            {
                                "code": "KY",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "KY"
                                    }
                                ],
                                "displayKey": "typekey.State.KY",
                                "priority": -1
                            },
                            {
                                "code": "LA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "LA"
                                    }
                                ],
                                "displayKey": "typekey.State.LA",
                                "priority": -1
                            },
                            {
                                "code": "DE_NI",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_NI"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_NI",
                                "priority": -1
                            },
                            {
                                "code": "ME",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "ME"
                                    }
                                ],
                                "displayKey": "typekey.State.ME",
                                "priority": -1
                            },
                            {
                                "code": "MB",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MB"
                                    }
                                ],
                                "displayKey": "typekey.State.MB",
                                "priority": -1
                            },
                            {
                                "code": "MH",
                                "categories": [
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MH"
                                    }
                                ],
                                "displayKey": "typekey.State.MH",
                                "priority": -1
                            },
                            {
                                "code": "MD",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MD"
                                    }
                                ],
                                "displayKey": "typekey.State.MD",
                                "priority": -1
                            },
                            {
                                "code": "MA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MA"
                                    }
                                ],
                                "displayKey": "typekey.State.MA",
                                "priority": -1
                            },
                            {
                                "code": "DE_MV",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_MV"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_MV",
                                "priority": -1
                            },
                            {
                                "code": "MI",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MI"
                                    }
                                ],
                                "displayKey": "typekey.State.MI",
                                "priority": -1
                            },
                            {
                                "code": "MN",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MN"
                                    }
                                ],
                                "displayKey": "typekey.State.MN",
                                "priority": -1
                            },
                            {
                                "code": "MS",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MS"
                                    }
                                ],
                                "displayKey": "typekey.State.MS",
                                "priority": -1
                            },
                            {
                                "code": "MO",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MO"
                                    }
                                ],
                                "displayKey": "typekey.State.MO",
                                "priority": -1
                            },
                            {
                                "code": "MT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MT"
                                    }
                                ],
                                "displayKey": "typekey.State.MT",
                                "priority": -1
                            },
                            {
                                "code": "NE",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NE"
                                    }
                                ],
                                "displayKey": "typekey.State.NE",
                                "priority": -1
                            },
                            {
                                "code": "NV",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NV"
                                    }
                                ],
                                "displayKey": "typekey.State.NV",
                                "priority": -1
                            },
                            {
                                "code": "NB",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NB"
                                    }
                                ],
                                "displayKey": "typekey.State.NB",
                                "priority": -1
                            },
                            {
                                "code": "NH",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NH"
                                    }
                                ],
                                "displayKey": "typekey.State.NH",
                                "priority": -1
                            },
                            {
                                "code": "NJ",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NJ"
                                    }
                                ],
                                "displayKey": "typekey.State.NJ",
                                "priority": -1
                            },
                            {
                                "code": "NM",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NM"
                                    }
                                ],
                                "displayKey": "typekey.State.NM",
                                "priority": -1
                            },
                            {
                                "code": "AU_NSW",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_NSW"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_NSW",
                                "priority": -1
                            },
                            {
                                "code": "NY",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NY"
                                    }
                                ],
                                "displayKey": "typekey.State.NY",
                                "priority": -1
                            },
                            {
                                "code": "NL",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NL"
                                    }
                                ],
                                "displayKey": "typekey.State.NL",
                                "priority": -1
                            },
                            {
                                "code": "NC",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NC"
                                    }
                                ],
                                "displayKey": "typekey.State.NC",
                                "priority": -1
                            },
                            {
                                "code": "ND",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "ND"
                                    }
                                ],
                                "displayKey": "typekey.State.ND",
                                "priority": -1
                            },
                            {
                                "code": "DE_NW",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_NW"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_NW",
                                "priority": -1
                            },
                            {
                                "code": "MP",
                                "categories": [
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "MP"
                                    }
                                ],
                                "displayKey": "typekey.State.MP",
                                "priority": -1
                            },
                            {
                                "code": "AU_NT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_NT"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_NT",
                                "priority": -1
                            },
                            {
                                "code": "NT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NT"
                                    }
                                ],
                                "displayKey": "typekey.State.NT",
                                "priority": -1
                            },
                            {
                                "code": "NS",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NS"
                                    }
                                ],
                                "displayKey": "typekey.State.NS",
                                "priority": -1
                            },
                            {
                                "code": "NU",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "NU"
                                    }
                                ],
                                "displayKey": "typekey.State.NU",
                                "priority": -1
                            },
                            {
                                "code": "OH",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "OH"
                                    }
                                ],
                                "displayKey": "typekey.State.OH",
                                "priority": -1
                            },
                            {
                                "code": "OK",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "OK"
                                    }
                                ],
                                "displayKey": "typekey.State.OK",
                                "priority": -1
                            },
                            {
                                "code": "ON",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "ON"
                                    }
                                ],
                                "displayKey": "typekey.State.ON",
                                "priority": -1
                            },
                            {
                                "code": "OR",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "OR"
                                    }
                                ],
                                "displayKey": "typekey.State.OR",
                                "priority": -1
                            },
                            {
                                "code": "PA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "PA"
                                    }
                                ],
                                "displayKey": "typekey.State.PA",
                                "priority": -1
                            },
                            {
                                "code": "PE",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "PE"
                                    }
                                ],
                                "displayKey": "typekey.State.PE",
                                "priority": -1
                            },
                            {
                                "code": "PR",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "PR"
                                    }
                                ],
                                "displayKey": "typekey.State.PR",
                                "priority": -1
                            },
                            {
                                "code": "QC",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "QC"
                                    }
                                ],
                                "displayKey": "typekey.State.QC",
                                "priority": -1
                            },
                            {
                                "code": "AU_QLD",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_QLD"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_QLD",
                                "priority": -1
                            },
                            {
                                "code": "DE_RP",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_RP"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_RP",
                                "priority": -1
                            },
                            {
                                "code": "RI",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "RI"
                                    }
                                ],
                                "displayKey": "typekey.State.RI",
                                "priority": -1
                            },
                            {
                                "code": "DE_SL",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_SL"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_SL",
                                "priority": -1
                            },
                            {
                                "code": "SK",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "SK"
                                    }
                                ],
                                "displayKey": "typekey.State.SK",
                                "priority": -1
                            },
                            {
                                "code": "DE_SN",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_SN"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_SN",
                                "priority": -1
                            },
                            {
                                "code": "DE_ST",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_ST"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_ST",
                                "priority": -1
                            },
                            {
                                "code": "DE_SH",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_SH"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_SH",
                                "priority": -1
                            },
                            {
                                "code": "AU_SA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_SA"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_SA",
                                "priority": -1
                            },
                            {
                                "code": "SC",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "SC"
                                    }
                                ],
                                "displayKey": "typekey.State.SC",
                                "priority": -1
                            },
                            {
                                "code": "SD",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "SD"
                                    }
                                ],
                                "displayKey": "typekey.State.SD",
                                "priority": -1
                            },
                            {
                                "code": "AU_TAS",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_TAS"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_TAS",
                                "priority": -1
                            },
                            {
                                "code": "TN",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "TN"
                                    }
                                ],
                                "displayKey": "typekey.State.TN",
                                "priority": -1
                            },
                            {
                                "code": "TX",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "TX"
                                    }
                                ],
                                "displayKey": "typekey.State.TX",
                                "priority": -1
                            },
                            {
                                "code": "DE_TH",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "DE"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "DE_TH"
                                    }
                                ],
                                "displayKey": "typekey.State.DE_TH",
                                "priority": -1
                            },
                            {
                                "code": "UT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "UT"
                                    }
                                ],
                                "displayKey": "typekey.State.UT",
                                "priority": -1
                            },
                            {
                                "code": "VT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "VT"
                                    }
                                ],
                                "displayKey": "typekey.State.VT",
                                "priority": -1
                            },
                            {
                                "code": "AU_VIC",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_VIC"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_VIC",
                                "priority": -1
                            },
                            {
                                "code": "VI",
                                "categories": [
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "VI"
                                    }
                                ],
                                "displayKey": "typekey.State.VI",
                                "priority": -1
                            },
                            {
                                "code": "VA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "VA"
                                    }
                                ],
                                "displayKey": "typekey.State.VA",
                                "priority": -1
                            },
                            {
                                "code": "WA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "WA"
                                    }
                                ],
                                "displayKey": "typekey.State.WA",
                                "priority": -1
                            },
                            {
                                "code": "WV",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "WV"
                                    }
                                ],
                                "displayKey": "typekey.State.WV",
                                "priority": -1
                            },
                            {
                                "code": "AU_WA",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "AU"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "AU_WA"
                                    }
                                ],
                                "displayKey": "typekey.State.AU_WA",
                                "priority": -1
                            },
                            {
                                "code": "WI",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "WI"
                                    }
                                ],
                                "displayKey": "typekey.State.WI",
                                "priority": -1
                            },
                            {
                                "code": "WY",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "US"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "WY"
                                    }
                                ],
                                "displayKey": "typekey.State.WY",
                                "priority": -1
                            },
                            {
                                "code": "YT",
                                "categories": [
                                    {
                                        "typelist": "Country",
                                        "typecode": "CA"
                                    },
                                    {
                                        "typelist": "Jurisdiction",
                                        "typecode": "YT"
                                    }
                                ],
                                "displayKey": "typekey.State.YT",
                                "priority": -1
                            }
                        ],
                        "namedMetadata": []
                    }
                }`}
                        </Highlight>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        City: &nbsp;
                        <select>
                            {this.policyMetadata['']}
                        </select>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <h1>DTOs</h1>
            <Container>
                <Row>
                    <h3>AddressDTO</h3>
                </Row>
                <Row>
                    <Col>
                        <ZipCode
                            zipMetadata={this.policyMetadata['edge.capabilities.address.dto.AddressDTO'].value.properties.PostalCode}
                            />
                    </Col>
                    <Col>
                        Validation Rule: Matches pattern
                        {this.policyMetadata['edge.capabilities.address.dto.AddressDTO'].value.properties.PostalCode.metadata[0].value.expression.params[0].value} <br />
                        <br />
                        This is the 'PostalCode' property on the 'properties' object.<br />
                        <div style={{overflow: 'auto', maxHeight: '400px', width: '800px', margin: '25px 0px'}}>
                        <Highlight language="json">
                            {`{
    "valueType": {
        "name": "String",
        "kind": "primitive"
    },
    "metadata": [
        {
            "type": "edge.aspects.validation.dto.ValidationRuleDTO",
            "value": {
                "expression": {
                    "params": [
                        {
                            "value": "[0-9]{5}(-[0-9]{4})?",
                            "type": "string",
                            "kind": "const"
                        },
                        {
                            "index": 0,
                            "kind": "parameter"
                        }
                    ],
                    "container": "edge.aspects.validation.ValidationFunctions",
                    "name": "matchesPattern",
                    "kind": "nativecall"
                },
                "message": {
                    "arguments": [],
                    "displayKey": "displaykey.Edge.Web.Api.Model.PostalCode",
                    "kind": "translate"
                }
            }
        },
        {
            "type": "edge.aspects.validation.dto.VisibilityAndRequirednessRuleDTO",
            "value": {
                "expression": {
                    "params": [
                        {
                            "params": [
                                {
                                    "params": [
                                        {
                                            "index": 2,
                                            "kind": "parameter"
                                        },
                                        {
                                            "value": "AdditionalAddressesSet",
                                            "type": "string",
                                            "kind": "const"
                                        }
                                    ],
                                    "container": "edge.aspects.validation.ValidationFunctions",
                                    "name": "getContextValue",
                                    "kind": "nativecall"
                                },
                                {
                                    "value": true,
                                    "type": "boolean",
                                    "kind": "const"
                                }
                            ],
                            "container": ":sys:ops:",
                            "name": "eq",
                            "kind": "nativecall"
                        },
                        {
                            "value": "REQUIRED",
                            "type": "enum edge.aspects.validation.VisibilityAndRequiredness",
                            "kind": "const"
                        }
                    ],
                    "container": "edge.aspects.validation.ValidationFunctions",
                    "name": "optionalVisibility",
                    "kind": "nativecall"
                },
                "message": {
                    "arguments": [],
                    "displayKey": "displaykey.Edge.Web.Api.Model.NotNull",
                    "kind": "translate"
                }
            }
        }
    ],
    "name": "PostalCode"
}
                            `}
                        </Highlight>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <City cityMetadata={this.policyMetadata['edge.capabilities.address.dto.AddressDTO'].value.properties.City} />
                    </Col>
                    <Col>
                        <div style={{overflow: 'auto', maxHeight: '400px', width: '800px', margin: '25px 0px'}}>
                        <Highlight language="json">
                            {`{
    "valueType": {
        "name": "String",
        "kind": "primitive"
    },
    "metadata": [
        {
            "type": "edge.aspects.validation.dto.ValidationRuleDTO",
            "value": {
                "expression": {
                    "params": [
                        {
                            "params": [
                                {
                                    "params": [
                                        {
                                            "base": {
                                                "index": 0,
                                                "kind": "parameter"
                                            },
                                            "propertyName": "length",
                                            "kind": "getfield"
                                        },
                                        {
                                            "value": 0,
                                            "type": "int",
                                            "kind": "const"
                                        }
                                    ],
                                    "container": ":sys:ops:",
                                    "name": "less",
                                    "kind": "nativecall"
                                },
                                {
                                    "params": [
                                        {
                                            "base": {
                                                "index": 0,
                                                "kind": "parameter"
                                            },
                                            "propertyName": "length",
                                            "kind": "getfield"
                                        },
                                        {
                                            "value": 60,
                                            "type": "int",
                                            "kind": "const"
                                        }
                                    ],
                                    "container": ":sys:ops:",
                                    "name": "greater",
                                    "kind": "nativecall"
                                }
                            ],
                            "container": ":sys:ops:",
                            "name": "or",
                            "kind": "nativecall"
                        }
                    ],
                    "container": ":sys:ops:",
                    "name": "not",
                    "kind": "nativecall"
                },
                "message": {
                    "arguments": [
                        {
                            "value": 0,
                            "type": "int",
                            "kind": "const"
                        },
                        {
                            "value": 60,
                            "type": "int",
                            "kind": "const"
                        }
                    ],
                    "displayKey": "displaykey.Edge.Web.Api.Model.Size",
                    "kind": "translate"
                }
            }
        },
        {
            "type": "edge.aspects.validation.dto.VisibilityAndRequirednessRuleDTO",
            "value": {
                "expression": {
                    "params": [
                        {
                            "params": [
                                {
                                    "params": [
                                        {
                                            "index": 2,
                                            "kind": "parameter"
                                        },
                                        {
                                            "value": "IsNonSpecificLocation",
                                            "type": "string",
                                            "kind": "const"
                                        }
                                    ],
                                    "container": "edge.aspects.validation.ValidationFunctions",
                                    "name": "getContextValue",
                                    "kind": "nativecall"
                                }
                            ],
                            "container": ":sys:ops:",
                            "name": "not",
                            "kind": "nativecall"
                        },
                        {
                            "value": "REQUIRED",
                            "type": "enum edge.aspects.validation.VisibilityAndRequiredness",
                            "kind": "const"
                        }
                    ],
                    "container": "edge.aspects.validation.ValidationFunctions",
                    "name": "optionalVisibility",
                    "kind": "nativecall"
                },
                "message": {
                    "arguments": [],
                    "displayKey": "displaykey.Edge.Web.Api.Model.NotNull",
                    "kind": "translate"
                }
            }
        }
    ],
    "name": "City"
}
                            `}
                        </Highlight>
                        </div>
                    </Col>
                </Row>
            </Container>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    }

    render() {
        console.log(this.props);
        return (
            (this.props.metadata.id != 0) ?
            <div>
                {this.renderPolicy()}
            </div>
                :
                <div>
                    Loading...
                </div>
        );
    }
}

const mapStateToProps = state => ({metadata: state.metadata});

export default connect(mapStateToProps, {postGetPolicyMetaData})(PolicyIntegration);