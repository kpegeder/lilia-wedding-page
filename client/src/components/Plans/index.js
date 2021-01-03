import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Plans = () => {
  return (
    <Container>
      <Row className="center">
        <Col xs={12} sm={2}>
          <h1>April 30, 2021</h1>
        </Col>
        <Col>
          <h3>Cocktail Hour at Hotel Lincoln @ 7:00pm</h3>
        </Col>
      </Row>
      <Row className="center">
        <Col xs={12} sm={2}>
          <h1>May 1, 2021</h1>
        </Col>
        <Col>
          <h3>
            Ceremony @ 2:00pm?? - 2100 Stemple Pass Rd, Lincoln, MT, 59639
          </h3>
        </Col>
        <Col>
          <h3>Reception @ 3:00pm??- Hotel Lincoln, Lincoln, MT, 59639</h3>
        </Col>
      </Row>
      <Row className="center">
        <Col xs={12} sm={2}>
          <h1>May 2, 2021</h1>
        </Col>
        <Col>
          <h3>Coffee bar @ Hotel Lincoln: 9:00-11:00</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Plans;
