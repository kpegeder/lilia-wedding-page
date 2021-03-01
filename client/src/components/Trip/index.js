import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Trip = () => {
  return (
    <Container>
      <Row>
        <Col className="flying primaryText">Cities to fly into</Col>
      </Row>
      <Row>
        <Col className="cities">Helena (56mi)</Col>
        <Col className="cities">Great Falls (88mi)</Col>
        <Col className="cities">Missoula (77mi)</Col>
      </Row>
      <Row>
        <Col className="lodging primaryText">Lodging - Hotel/Motel</Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="lodgingDesc">
          We have blocked the following rooms for Friday, April 30th and
          Saturday, May 1st. All rooms are in town within walking distance from
          reception (at Hotel Lincoln). Please call for availability,
          reservations under Brown Wedding.
        </Col>
      </Row>
      <Row>
        <Col className="hotel">Lincoln Log Hotel - 6 rooms - (406)362-4822</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 1 }} className="hotelDesc">
          5 Single Queens
        </Col>
        <Col md={{ span: 3 }} className="hotelDesc">
          1 Double Twin
        </Col>
        <Col md={{ span: 4 }} className="hotelDesc">
          Hookups available for RV/campers
        </Col>
      </Row>
      <Row>
        <Col className="hotel">Three Bears Motel - 5 rooms - (406)362-4355</Col>
      </Row>
      <Row>
        <Col className="hotelDesc">All Double Queens</Col>
      </Row>
      <Row>
        <Col className="hotel">Blue Sky Motel - 4 rooms - (406)362-4450</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }} className="hotelDesc">
          3 Double Queens
        </Col>
        <Col md={{ span: 3 }} className="hotelDesc">
          1 Single Queens
        </Col>
      </Row>
      <Row>
        <Col className="lodging primaryText">Lodging - Airbnb</Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="lodgingDesc">
          There are some Airbnbs and other vacation rentals available in the
          surrounding area. This is a very small town and there is another
          wedding on the same weekend so book early!
        </Col>
      </Row>
    </Container>
  );
};

export default Trip;
