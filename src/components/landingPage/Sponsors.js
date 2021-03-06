import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import SdWf from '../../images/San-Diego-Workforce-Partnership.png';
import Vus from '../../images/vista-unified-school-district.jpg';
import { CardHeader } from "./styles"
import Sdth from '../../images/san-diego-tech-hub.png'

const Sponsors = () => {
  return (
    <div>
      <Card>
        <CardHeader className="card-header text-center">
          <h4>A Special Thank You To Our Sponsors:</h4>
        </CardHeader>
        <div className="card-body">
          <Row className="mb-1">
            <Col className="col-sm-12">
              <center>
                <a href="https://www.sandiegotechhub.com/" target="_blank"><img src={Sdth} alt='sdth' width="100%" height="100%" /></a>
              </center>
            </Col>
          </Row>
          <Row className="py-2 mr-2">
            <Col className="col-sm-6 text-center">
              <center>
              <div className="mr-2">
                <a href="https://www.vistausd.org/" target="_blank"><img src={Vus} alt='vus' width="70%" height="70%" /></a>
                </div>
                </center>
            </Col>
            <Col className="col-sm-6 text-center">
              <center>
                <div className="mt-4">
                  <a href="https://workforce.org/" target="_blank"><img src={SdWf} alt='sdwf' height="70%" width="100%" /></a>
                </div>
              </center>
            </Col>
          </Row>
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  )
}

export default Sponsors;
