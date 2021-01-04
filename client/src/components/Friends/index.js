import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Calista from "../../assets/images/weddingParty/calista.png";
import Liv from "../../assets/images/weddingParty/liv.png";
import Kaari from "../../assets/images/weddingParty/kaari.png";
import "./style.css";

const Friends = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="headParty">Bridesmaid</div>
          <div className="partyList">Calista Pegeder - Maid of Honor</div>
          <Image
            className="portrait"
            src={Calista}
            alt="Calista - Maid of Honor"
            rounded
          />
          <div className="partyList">Kaari Selven</div>
          <Image
            className="portrait"
            src={Kaari}
            alt="Kaari - Bridesmaid"
            rounded
          />
          <div className="partyList">Olivia Roberts</div>
          <Image
            className="portrait"
            src={Liv}
            alt="Olivia - Bridesmaid"
            rounded
          />
          <div className="partyList">Amanda Leslie</div>
          <div className="partyList">Nicole Bull</div>
          <div className="partyList">Myra Newingham</div>
        </Col>
        <Col xs={12} md={6}>
          <div className="headParty">Groomsman</div>
          <div className="partyList">Jeffry Davidson - Best Man</div>
          <div className="partyList">James Leslie</div>
          <div className="partyList">Seth Fehringer</div>
          <div className="partyList">Erik Gile</div>
          <div className="partyList">Ethan Pempek</div>
          <div className="partyList">Daniel Powell</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Friends;
