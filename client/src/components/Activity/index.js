import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Activity = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <div>
          <p className="activityDesc">
            Yellowstone National Park- 4hr drive SE
          </p>
          <p className="activityDesc">Glacier Park- 2.5hr drive N</p>
        </div>
      </Row>
    </Container>
  );
};

export default Activity;
