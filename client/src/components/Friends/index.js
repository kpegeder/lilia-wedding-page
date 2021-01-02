import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const Friends = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="headParty">Groomsman</div>
          <ul>
            <li className="partyList">Jeffry Davidson - Best Man</li>
            <li className="partyList">James Leslie</li>
            <li className="partyList">Seth Fehringer</li>
            <li className="partyList">Erik Gile</li>
            <li className="partyList">Ethan Pempek</li>
            <li className="partyList">Daniel Powell</li>
          </ul>
        </Col>
        <Col>
          <div className="headParty">Bridesmaid</div>
          <ul>
            <li className="partyList">Calista Pegeder - Maid of Honor</li>
            <li className="partyList">Kaari Selven</li>
            <li className="partyList">Olivia Roberts</li>
            <li className="partyList">Amanda Leslie</li>
            <li className="partyList">Nicole Bull</li>
            <li className="partyList">Myra Newingham</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Friends;
