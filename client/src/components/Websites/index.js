import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import bedBath from "../../assets/images/bedBathandBeyond1.png";
import amazon from "../../assets/images/amazon.png";

import "./style.css";

function Websites() {
  return (
    <Container>
      <Row>
        <Col className="registryWeb">
          <a
            href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549776481"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={bedBath} fluid className="logo" />
          </a>
        </Col>
        <Col className="registryWeb">
          <a
            href="https://www.amazon.com/wedding/share/liliaanddave"
            target="_blank"
            rel="noreferrer"
            className="centerLogo"
          >
            <Image src={amazon} fluid className="logo" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Websites;
