import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="celebrate center">WE’RE GETTING MARRIED!</Col>
      </Row>
      <br />
      <Row>
        <Col className="aboutMe center test1">
          Welcome to our website- we’re so happy you’re here!
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col className="aboutMe center test2">
          This website was created as a helpful resource to get all the
          important information out to our guests in preparation for our big
          day. Have a look around and let’s get excited!
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="aboutMe center test3">
          Invitations are on the way- Don’t forget to RSVP once you receive it
          in the mail.
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="aboutMe center test4">
          Finally- Thank you so much for supporting us and being a part of our
          love story. We cannot wait to celebrate our marriage with all of our
          closest friends and family!
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="aboutMe center test5">With love, Lilia and Dave</Col>
      </Row>
    </Container>
  );
};

export default About;
