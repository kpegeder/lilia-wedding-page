import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Trip = () => {
  return (
    <Container>
      <Row>
        <Col className="flying">
          Closest cities to fly into: Helena (56mi), Great Falls (88mi), or
          Missoula (77mi)
        </Col>
      </Row>
    </Container>
  );
};

export default Trip;
