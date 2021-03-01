import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./style.css";

function SearchResults(props) {
  return (
    <Container>
      {props.results.map((res, index) => {
        // console.log(res, index);
        return (
          <div key={res._id}>
            <Row>
              <Col className="guestName">{res.name}</Col>
              <Col>
                {/* All class name for the form and button */}
                <Form
                  onClick={(e) => {
                    // console.log(e);
                    props.selectOnlyThis(e.target.id);
                  }}
                >
                  <div>
                    <Form.Check
                      type="checkbox"
                      id={`accept_${index}`}
                      label="Delightful accepts"
                      value="Yes"
                      className="guestResponse"
                      inline
                    />
                    <Form.Check
                      type="checkbox"
                      id={`decline_${index}`}
                      label="Regretfully declines"
                      value="No"
                      className="guestResponse"
                      inline
                    />
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
}

export default SearchResults;
