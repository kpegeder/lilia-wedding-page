import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Activity = () => {
  return (
    <Container>
      <Row>
        <Col className="parks">Parks to Visit</Col>
      </Row>
      <Row>
        <Col className="activityDesc">
          Yellowstone National Park - 4hr drive SE
        </Col>
        <Col className="activityDesc">Glacier Park - 2.5hr drive N</Col>
        <Col className="activityDesc">Flathead Lake - 2hr drive NW</Col>
      </Row>
      <Row>
        <Col className="parks">Websites to Checkout</Col>
      </Row>
      <Row>
        <Col className="center">
          <a
            className="websites"
            target="_blank"
            rel="noreferrer"
            href="http://www.lincolnmontana.com/"
          >
            Visit Lincoln, Montana
          </a>
        </Col>
        <Col className="center">
          <a
            className="websites"
            target="_blank"
            rel="noreferrer"
            href="https://southwestmt.com/communities/lincoln.htm"
          >
            Visit Southwest Montana
          </a>
        </Col>
        <Col className="center">
          <a
            className="websites"
            target="_blank"
            rel="noreferrer"
            href="https://continentaldividetrail.org/cdt-gateway-communities/lincoln/"
          >
            Continental Divide Trail
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Activity;
