import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faHandHoldingMedical)
class VictimGS extends React.Component {
    state ={
        data:"",
        sembuh:"",
        isLoading : true,
        error : null
    };

    KorbanSembuh(){
        axios.get('https://api.kawalcorona.com/sembuh/')
        .then (response => {
            let data = response.data;
            let sembuh = data.value;
            console.log(sembuh);
            this.setState({ sembuh, isLoading : false })
            }
        )
        
        
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount(){
        this.KorbanSembuh();
    }

    render(){
        let isLoading = this.state.isLoading;
        let sembuh = this.state.sembuh;
        return(
            <React.Fragment>
                {!isLoading ? 
                    <Col xl={4} md={6} className="mb-4 mx-auto">
                    <Card className="border-left-success shadow h-100 py-2">
                        <Card.Body>
                        <Row className="no-gutters align-items-center">
                            <Col className="mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Sembuh</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{sembuh}</div>
                            </Col>
                            <Col className="col-auto text-gray-500">
                            <FontAwesomeIcon icon={['fas', 'hand-holding-medical']} size="2x"/>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                :   
                <Col xl={4} md={6} className="mb-4 mx-auto">
                <Card className="border-left-success shadow h-100 py-2">
                    <Card.Body>
                    <Row className="no-gutters align-items-center">
                        <Col className="mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Sembuh</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Loading..</div>
                        </Col>
                        <Col className="col-auto text-gray-500">
                        <FontAwesomeIcon icon={['fas', 'hand-holding-medical']} size="2x"/>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
                </Col> 
                }
            </React.Fragment>
        )
        
    }
}

export default VictimGS;