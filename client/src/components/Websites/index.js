import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bedBath from "../../assets/images/bedBathandBeyond1.png";
import amazon from "../../assets/images/amazon.png";

import "./style.css";

function Websites() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={{ span: 4, offset: 2 }} className="registryWeb">
          <a
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549776481"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={bedBath} fluid className="logo" />
          </a>
        </Col>
        <Col xs={12} sm={6} md={4} className="registryWeb">
          <a
            href="https://www.amazon.com/wedding/share/liliaanddave"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={amazon} fluid className="logo amazonLogo" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={{ span: 4, offset: 2 }} className="registryWeb">
          <a
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549776481"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={bedBath} fluid className="logo1" />
          </a>
        </Col>
        <Col xs={12} sm={6} md={4} className="registryWeb">
          <a
            href="https://www.amazon.com/wedding/share/liliaanddave"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={amazon} fluid className="logo1 amazonLogo" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={{ span: 4, offset: 2 }} className="registryWeb">
          <a
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549776481"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={bedBath} fluid className="logo2" />
          </a>
        </Col>
        <Col xs={12} sm={6} md={4} className="registryWeb">
          <a
            href="https://www.amazon.com/wedding/share/liliaanddave"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={amazon} fluid className="logo2 amazonLogo" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Websites;
