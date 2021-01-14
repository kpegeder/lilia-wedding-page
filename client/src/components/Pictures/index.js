import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import Engagement1 from "../../assets/images/engagement/Lilia_Dave_1.jpg";
import Engagement2 from "../../assets/images/engagement/Lilia_Dave_2.jpg";
import Engagement3 from "../../assets/images/engagement/Lilia_Dave_3.jpg";
import Engagement4 from "../../assets/images/engagement/Lilia_Dave_4.jpg";
import Engagement5 from "../../assets/images/engagement/Lilia_Dave_5.jpg";
import Engagement6 from "../../assets/images/engagement/Lilia_Dave_6.jpg";
import Engagement7 from "../../assets/images/engagement/Lilia_Dave_7.jpg";
import Engagement8 from "../../assets/images/engagement/Lilia_Dave_8.jpg";
import Engagement9 from "../../assets/images/engagement/Lilia_Dave_9.jpg";
import Engagement10 from "../../assets/images/engagement/Lilia_Dave_10.jpg";
import Engagement11 from "../../assets/images/engagement/Lilia_Dave_11.jpg";
import Engagement12 from "../../assets/images/engagement/Lilia_Dave_12.jpg";
import Fun1 from "../../assets/images/fun/Lilia_Dave1.JPG";
import Fun2 from "../../assets/images/fun/Lilia_Dave2.JPG";
import Fun3 from "../../assets/images/fun/Lilia_Dave3.JPG";
import Fun4 from "../../assets/images/fun/Lilia_Dave4.JPG";
import Fun5 from "../../assets/images/fun/Lilia_Dave5.JPG";
import Fun6 from "../../assets/images/fun/Lilia_Dave6.JPG";
import Fun7 from "../../assets/images/fun/Lilia_Dave7.JPG";
import Fun8 from "../../assets/images/fun/Lilia_Dave8.JPG";
import Fun9 from "../../assets/images/fun/Lilia_Dave9.JPG";
import Fun10 from "../../assets/images/fun/Lilia_Dave10.JPG";
import Fun11 from "../../assets/images/fun/Lilia_Dave11.JPG";
import Fun12 from "../../assets/images/fun/Lilia_Dave12.JPG";
import Fun13 from "../../assets/images/fun/Lilia_Dave13.JPG";
import Fun14 from "../../assets/images/fun/Lilia_Dave14.JPG";
import Fun15 from "../../assets/images/fun/Lilia_Dave15.JPG";
import "./style.css";

const Pictures = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement6}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement7}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement8}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement10}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement11}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement12}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement9}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block picStyle"
              src={Engagement5}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun4} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun5} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun6} className="photoStyle" />
          </Col>
        </Row>{" "}
        <Row>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun7} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun8} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun9} className="photoStyle" />
          </Col>
        </Row>{" "}
        <Row>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun10} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun1} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun12} className="photoStyle" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun13} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun14} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun15} className="photoStyle" />
          </Col>
        </Row>{" "}
        <Row>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun11} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun2} className="photoStyle" />
          </Col>
          <Col xs={12} md={4} className="spacing">
            <Image src={Fun3} className="photoStyle" />
          </Col>
        </Row>{" "}
      </Container>
    </div>
  );
};

export default Pictures;
