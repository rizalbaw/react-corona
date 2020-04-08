import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faSkullCrossbones)
class VictimGM extends React.Component {
    state ={
        data:"",
        meninggal:"",
        isLoading : true,
        error : null
    };

    KorbanMeninggal(){
        axios.get('https://api.kawalcorona.com/meninggal/')
        .then (response => {
            let data = response.data;
            let meninggal = data.value;
            console.log(meninggal);
            this.setState({ meninggal, isLoading : false })
            }
        )
        
        
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount(){
        this.KorbanMeninggal();
    }

    render(){
        let isLoading = this.state.isLoading;
        let meninggal = this.state.meninggal;
        return(
            <React.Fragment>
                {!isLoading ? 
                    <Col xl={4} md={6} className="mb-4 mx-auto">
                    <Card className="border-left-danger shadow h-100 py-2">
                        <Card.Body>
                        <Row className="no-gutters align-items-center">
                            <Col className="mr-2">
                            <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">meninggal</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{meninggal}</div>
                            </Col>
                            <Col className="col-auto text-gray-500">
                            <FontAwesomeIcon icon={['fas', 'skull-crossbones']} size="2x"/>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                :   
                <Col xl={4} md={6} className="mb-4 mx-auto">
                <Card className="border-left-danger shadow h-100 py-2">
                    <Card.Body>
                    <Row className="no-gutters align-items-center">
                        <Col className="mr-2">
                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">meninggal</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">Loading...</div>
                        </Col>
                        <Col className="col-auto text-gray-500">
                        <FontAwesomeIcon icon={['fas', 'skull-crossbones']} size="2x"/>
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

export default VictimGM;