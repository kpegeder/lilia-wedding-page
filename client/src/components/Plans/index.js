import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Plans = () => {
  return (
    <Container>
      <Row>
        <Col className="center">
          <span className="inviteInfo">Dressy Casual Attire</span>
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <span className="inviteInfo">
            Ceremony will take place in a meadow followed by the reception
            outside at the Hotel Lincoln
          </span>
        </Col>
      </Row>

      <Row>
        <Col className="center">
          <span className="primaryText">Friday, April 30th</span>
        </Col>
      </Row>
      <Row>
        <Col
          xs={4}
          sm={3}
          md={{ span: 2, offset: 2 }}
          className="removePadding"
        >
          <span className="secondaryText">6:30-8:00pm</span>
        </Col>
        <Col>
          <span className="thirdText">Cocktail Hour at Hotel Lincoln</span>
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <span className="primaryText">Saturday, May 1st</span>
        </Col>
      </Row>
      <Row>
        <Col
          xs={4}
          sm={3}
          md={{ span: 2, offset: 2 }}
          className="removePadding"
        >
          <span className="secondaryText">2:30pm</span>
        </Col>
        <Col>
          <span className="thirdText">Ceremony at 2100 Stemple Pass Rd</span>
        </Col>
      </Row>
      <Row>
        <Col
          xs={4}
          sm={3}
          md={{ span: 2, offset: 2 }}
          className="removePadding"
        >
          <span className="secondaryText">3:30-5:00pm</span>
        </Col>
        <Col>
          <span className="thirdText">Cocktail Hour at Hotel Lincoln</span>
        </Col>
      </Row>
      <Row>
        <Col
          xs={4}
          sm={3}
          md={{ span: 2, offset: 2 }}
          className="removePadding"
        >
          <span className="secondaryText">5:00pm</span>
        </Col>
        <Col>
          <span className="thirdText">Reception Dinner</span>
        </Col>
      </Row>
      <Row>
        <Col className="center">
          <span className="primaryText">Sunday, May 2nd</span>
        </Col>
      </Row>
      <Row>
        <Col
          xs={4}
          sm={3}
          md={{ span: 2, offset: 2 }}
          className="removePadding"
        >
          <span className="secondaryText">9:00-11:00am</span>
        </Col>
        <Col>
          <span className="thirdText">Coffee Bar at Hotel Lincoln</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Plans;
