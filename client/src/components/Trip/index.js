import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Trip = () => {
  return (
    <Container>
      <Row>
        <Col className="flying">Cities to fly into</Col>
      </Row>
      <Row>
        <Col className="cities">Helena (56mi)</Col>
        <Col className="cities">Great Falls (88mi)</Col>
        <Col className="cities">Missoula (77mi)</Col>
      </Row>
      <Row>
        <Col className="lodging">Lodging - Hotel/Motel</Col>
      </Row>
      <Row>
        <Col className="lodgingDesc">
          We have blocked the following rooms for Friday, April 30th and
          Saturday, May 1st. All rooms are in town within walking distance from
          reception (at Hotel Lincoln). Please call for availability,
          reservations under Brown Wedding.
        </Col>
      </Row>
      <Row>
        <Col className="hotel">Hotel Lincoln - 14 rooms - (406)362-4822</Col>
      </Row>
      <Row>
        <Col className="hotelDesc">2 Single Kings</Col>
        <Col className="hotelDesc">12 Single Queens</Col>
        <Col className="hotelDesc">Hookups available for RV/campers</Col>
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
        <Col className="hotelDesc">3 Double Queens</Col>
        <Col className="hotelDesc">1 Single Queens</Col>
      </Row>
      <Row>
        <Col className="lodging">Lodging - Airbnb</Col>
      </Row>
      <Row>
        <Col className="lodgingDesc">
          There are some Airbnbs and other vacation rentals available in the
          surrounding area. This is a very small town and there is another
          wedding on the same weekend so book early!
        </Col>
      </Row>
    </Container>
  );
};

export default Trip;
