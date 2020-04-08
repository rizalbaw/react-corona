import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faViruses, faHandHoldingMedical, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, faViruses, faHandHoldingMedical, faSkullCrossbones)
class Victim extends React.Component{
    state = {
        datas : [],
        isLoading : false,
        error : null,
    }

    DataKorban(){
        axios
            .get('https://api.kawalcorona.com/indonesia/')
            .then (response =>
                response.data.map(
                    korbandata => ({
                        positif : `${korbandata.positif}`,
                        sembuh : `${korbandata.sembuh}`,
                        meninggal : `${korbandata.meninggal}`
                    })
                )
            )

            .then(datas =>{
                this.setState(
                    {
                        datas,
                        isLoading : false
                    }
                );
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount(){
        this.DataKorban();
    }

    render(){
        const {
            isLoading,
            datas
        } = this.state;

        return(
            <React.Fragment>
                {!isLoading ? (
                    datas.map(data => {
                        const{
                            positif,
                            sembuh,
                            meninggal
                        } = data;

                        return(
                            <Row>
                                
                                <Col xl={4} md={6} className="mb-4 mx-auto">
                                <Card className="border-left-warning shadow h-100 py-2">
                                    <Card.Body>
                                    <Row className="no-gutters align-items-center">
                                        <Col className="mr-2">
                                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Positif</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{positif}</div>
                                        </Col>
                                        <Col className="col-auto text-gray-500">
                                        <FontAwesomeIcon icon={['fas', 'viruses']} size="2x"/>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                                </Card>
                                </Col>
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
                                <Col xl={4} md={6} className="mb-4 mx-auto">
                                <Card className="border-left-danger shadow h-100 py-2">
                                    <Card.Body>
                                    <Row className="no-gutters align-items-center">
                                        <Col className="mr-2">
                                        <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Meninggal</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{meninggal}</div>
                                        </Col>
                                        <Col className="col-auto text-gray-500">
                                        <FontAwesomeIcon icon={['fas', 'skull-crossbones']} size="2x"/>
                                        </Col>
                                    </Row>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        )
                    })
                ) : (
                    <Container>
                        <p className="text-center">Loading..</p>
                    </Container>
                )}
                
            </React.Fragment>
        )
    }
}

export default Victim
