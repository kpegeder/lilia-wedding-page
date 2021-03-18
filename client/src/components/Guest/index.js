import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";

const Guest = (props) => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="inviteInfo">
          Once you've received your invitation in the mail, please RSVP below by
          inputting your name and the number in your party.
        </Col>
      </Row>
      <Row>
        <Col style={{ justifyContent: "center" }}>
          <Form
            action="https://script.google.com/macros/s/AKfycbxGwXiEM7OTBEwgww84EkOBgkifAMkNMzBHC9uzVQ/exec"
            method="POST"
            id="contactForm"
            className="response"
            onSubmit={(e) => props.handleSubmit(e)}
          >
            <Row>
              <Col>
                <Form.Label>Full Name</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Full Name"
                  type="text"
                  name="Guest"
                  style={{ width: "200px" }}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Party Size</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  placeholder="Party Size"
                  type="number"
                  name="Number"
                  style={{ width: "100px" }}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Attending</Form.Label>
              </Col>
              <Form.Check
                inline
                label="Yes"
                type="checkbox"
                name="Yes"
                id="Yes"
              />
              <Form.Check inline label="No" type="checkbox" name="No" id="No" />
            </Row>
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
            <div className="thankyou_message" style={{ display: "none" }}>
              <span className="thanks">Thank You!</span>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Guest;
