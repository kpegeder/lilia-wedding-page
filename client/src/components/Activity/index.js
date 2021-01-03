import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Activity = () => {
  return (
    <Container>
      <Row>
        <Col className="activityDesc">
          Yellowstone National Park- 4hr drive SE
        </Col>
      </Row>
      <Row>
        <Col className="activityDesc">Glacier Park- 2.5hr drive N</Col>
      </Row>
    </Container>
  );
};

export default Activity;
