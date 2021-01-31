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
        <p className="contribute">
          If you would rather contribute to our honeymoon/house fund, our
          mailing address is:{" "}
          <span style={{ color: "white" }}>PO BOX 365, Wrangell, AK 99929</span>{" "}
          But PLEASE do not feel obligated, your presence is enough!
        </p>
      </Row>
    </Container>
  );
}

export default Websites;
