import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Calista from "../../assets/images/weddingParty/calista.png";
import Liv from "../../assets/images/weddingParty/liv.png";
import Kaari from "../../assets/images/weddingParty/kaari.png";
import Myra from "../../assets/images/weddingParty/myra.png";
import Nicole from "../../assets/images/weddingParty/nicole.png";
import Jeffry from "../../assets/images/weddingParty/jeffry.png";
import Seth from "../../assets/images/weddingParty/seth.png";
import Erik from "../../assets/images/weddingParty/erik.png";
import Ethan from "../../assets/images/weddingParty/ethan.png";
import Daniel from "../../assets/images/weddingParty/daniel.png";
import James from "../../assets/images/weddingParty/james.png";
import Amanda from "../../assets/images/weddingParty/amanda.png";
import "./style.css";

const Friends = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <div className="headParty">Bridesmaids</div>
          <Image
            className="portrait"
            src={Calista}
            alt="Calista - Maid of Honor"
            rounded
            loading="lazy"
          />
          <div className="partyList">Calista Pegeder - Maid of Honor</div>
          <Image
            className="portrait"
            src={Kaari}
            alt="Kaari - Bridesmaid"
            rounded
            loading="lazy"
          />
          <div className="partyList">Kaari Selven</div>
          <Image
            className="portrait"
            src={Liv}
            alt="Olivia - Bridesmaid"
            rounded
            loading="lazy"
          />
          <div className="partyList">Olivia Roberts</div>
          <Image
            className="portrait"
            src={Amanda}
            alt="Amanda - Bridesmaid"
            rounded
            loading="lazy"
          />
          <div className="partyList">Amanda Leslie</div>
          <Image
            className="portrait"
            src={Nicole}
            alt="Nicole - Bridesmaid"
            rounded
            loading="lazy"
          />
          <div className="partyList">Nicole Bull</div>
          <Image
            className="portrait"
            src={Myra}
            alt="Myra - Bridesmaid"
            rounded
            loading="lazy"
          />
          <div className="partyList">Myra Newingham</div>
        </Col>
        <Col xs={12} md={6}>
          <div className="headParty">Groomsmen</div>
          <Image
            className="portrait"
            src={Jeffry}
            alt="Jeffry - Groomsman"
            rounded
            loading="lazy"
          />
          <div className="partyList">Jeffry Davidson - Best Man</div>
          <Image
            className="portrait"
            src={James}
            alt="James - Groomsman"
            rounded
            loading="lazy"
          />
          <div className="partyList">James Leslie</div>
          <Image
            className="portrait"
            src={Seth}
            alt="Seth - Groomsman"
            rounded
            loading="lazy"
          />
          <div className="partyList">Seth Fehringer</div>
          <Image
            className="portrait"
            src={Erik}
            alt="Erik - Groomsman"
            rounded
            loading="lazy"
          />
          <div className="partyList">Erik Gile</div>
          <Image
            className="portrait"
            src={Ethan}
            alt="Ethan - Groomsman"
            rounded
            loading="lazy"
          />
          <div className="partyList">Ethan Pempek</div>
          <Image
            className="portrait"
            src={Daniel}
            alt="Daniel - Groomsman"
            rounded
            loading="lazy"
          />
          <div className="partyList">Daniel Powell</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Friends;
