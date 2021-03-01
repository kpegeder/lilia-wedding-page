import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";

const Guest = (props) => {
  return (
    <Container>
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
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Guest;
