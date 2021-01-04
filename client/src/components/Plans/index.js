import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Plans = () => {
  return (
    <Container>
      <Row className="center">
        <Col xs={12} sm={2}>
          <span className="primaryText">April 30, 2021</span>
        </Col>
        <Col>
          <span className="secondaryText">
            Cocktail Hour at Hotel Lincoln @ 7:00pm
          </span>
        </Col>
      </Row>
      <Row className="center">
        <Col xs={12} sm={2}>
          <span className="primaryText">May 1, 2021</span>
        </Col>
        <Col>
          <span className="secondaryText">
            Ceremony @ 2:00pm?? - 2100 Stemple Pass Rd, Lincoln, MT, 59639
          </span>
        </Col>
        <Col>
          <span className="secondaryText">
            Reception @ 3:00pm??- Hotel Lincoln, Lincoln, MT, 59639
          </span>
        </Col>
      </Row>
      <Row className="center">
        <Col xs={12} sm={2}>
          <span className="primaryText">May 2, 2021</span>
        </Col>
        <Col>
          <span className="secondaryText">
            Coffee bar @ Hotel Lincoln: 9:00-11:00
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Plans;
