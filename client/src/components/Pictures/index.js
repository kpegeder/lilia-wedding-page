import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import Photo1 from "../../assets/images/engagement/Lilia_Dave_1.jpg";
import Photo2 from "../../assets/images/engagement/Lilia_Dave_2.jpg";
import Photo3 from "../../assets/images/engagement/Lilia_Dave_3.jpg";
import Photo4 from "../../assets/images/engagement/Lilia_Dave_4.jpg";
import Photo5 from "../../assets/images/engagement/Lilia_Dave_5.jpg";
import Photo6 from "../../assets/images/engagement/Lilia_Dave_6.jpg";
import Photo7 from "../../assets/images/engagement/Lilia_Dave_7.jpg";
import Photo8 from "../../assets/images/engagement/Lilia_Dave_8.jpg";
import Photo9 from "../../assets/images/engagement/Lilia_Dave_9.jpg";
import Photo10 from "../../assets/images/engagement/Lilia_Dave_10.jpg";
import Photo11 from "../../assets/images/engagement/Lilia_Dave_11.jpg";
import Photo12 from "../../assets/images/engagement/Lilia_Dave_12.jpg";
import "./style.css";

const Pictures = () => {
  return (
    <div>
      <Container>
        <Carousel className="spacing">
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo3} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo6} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo7} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo8} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo10} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo11} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo12} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo9} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo4} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img className="d-block picStyle" src={Photo5} alt="First slide" />
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col>
            <Image src={Photo1} fluid />
          </Col>
          <Col>
            <Image src={Photo2} fluid />
          </Col>
          <Col>
            <Image src={Photo3} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pictures;
