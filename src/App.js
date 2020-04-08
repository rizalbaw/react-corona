import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {Helmet} from "react-helmet";
import Navbarcov from './components/Navbarcov'
import Victim from './components/Victim'
import VictimGS from './components/VictimGS'
import VictimGP from './components/VictimGP'
import VictimGM from './components/VictimGM'
import ChartLine from'./components/ChartLine'
import TableNegara from './components/TableNegara'
import CardArticles from './components/CardArticles'
import MapIndo from './components/MapIndo'
import FooterCov from './components/FooterCov'
// import axios from 'axios'

// // Make a request for a user with a given ID
// axios.get('https://api.kawalcorona.com/indonesia')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
// });

class App extends Component {
  
  render() {
    return (
      <div>
        <Helmet>
          
          <title>Corona Update - Selalu Sukses Digital Agency</title>
        </Helmet>
        <Navbarcov/>
        <Container>
          <Row className="mt-4">
          <Col xl={12} lg={12}>
            <MapIndo/>
          </Col>
          </Row>
          <Row>
          <Col xl={12} lg={12}>
          <div className="d-sm-flex align-items-center justify-content-between my-4">
            <h1 className="h4 mb-0 text-gray-800">Indonesia</h1>
          </div>
          </Col> 
          </Row>
          <Victim/>
          <div className="d-sm-flex align-items-center justify-content-between my-4">
            <h1 className="h4 mb-0 text-gray-800">Global</h1>
          </div>
          <Row>
            <VictimGP/>
            <VictimGS/>
            <VictimGM/>
          </Row>
          <Row>
            <Col xl={12} lg={12}>
              <Card className="shadow mb-4">
                <Card.Header>
                <h5 class="m-0 font-weight-bold text-primary">Grafik Corona di Indonesia</h5>
                </Card.Header>
                <Card.Body>
                <ChartLine />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12} lg={12}>
              <Card className="shadow mb-4">
                <Card.Header>
                <h5 class="m-0 font-weight-bold text-primary">Grafik Corona di Indonesia</h5>
                </Card.Header>
                <Card.Body>
                <TableNegara />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12} lg={12}>
              <CardArticles/>
            </Col>
            
            
          </Row>
        </Container>
        <FooterCov/>
      </div>
      
    );
  }
}

export default App;
