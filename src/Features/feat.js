import React from "react";
import "./feat.css";
import { Row, Col } from "react-bootstrap";
import Fake from "../images/Fake.svg";
import Magnet from "../images/Magnet.svg";
import Analytics from "../images/analytics 1.svg";
import End from "../images/End to end 1.svg";
import secure from "../images/secure 1.svg";
import track from "../images/track 1.svg";
import AOS from 'aos';


export default function Features() {
  AOS.init();

  return (
    <div className="features-maindiv container-fluid"  data-aos="zoom-in"  data-aos-duration="1000">
      <Row className="feat-head-row">
        <Col className="feat-head-col">
          <p className="feat-head-para">Our Specialities</p>
        </Col>
      </Row>
      <Row className="feat-box-row">
        <Col xl={4} lg={4} md={6} sm={{span:12}} xs={{span:12}} className="feat-box-col">
          <div className="feat-box" data-aos="fade-right">
            <Row className="feat-img-row">
              <Col lg={12} className="feat-img-col">
                <img src={Fake} className="feat-img"></img>
              </Col>
            </Row>
            <Row className="feat-text-row">
              <Col lg={12} className="feat-text-col">
                <p className="feat-text-para">Anti-Counterfeiting Solution</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={{span:12}} xs={{span: 12}}  className="feat-box-col">
          <div className="feat-box" data-aos="fade-down">
            <Row className="feat-img-row">
              <Col lg={12} className="feat-img-col">
                <img src={Analytics} className="feat-img"></img>
              </Col>
            </Row>
            <Row className="feat-text-row">
              <Col lg={12} className="feat-text-col">
                <p className="feat-text-para">User Analytics</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={{span:12}} xs={{span: 12}}  className="feat-box-col">
          <div className="feat-box" data-aos="fade-left">
            <Row className="feat-img-row">
              <Col lg={12} className="feat-img-col">
                <img src={track} className="feat-img"></img>
              </Col>
            </Row>
            <Row className="feat-text-row">
              <Col lg={12} className="feat-text-col">
                <p className="feat-text-para">Track 'N' Trace</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={{span:12}} xs={{span: 12}}  className="feat-box-col">
          <div className="feat-box" data-aos="fade-right">
            <Row className="feat-img-row">
              <Col lg={12} className="feat-img-col">
                <img src={Magnet} className="feat-img"></img>
              </Col>
            </Row>
            <Row className="feat-text-row">
              <Col lg={12} className="feat-text-col">
                <p className="feat-text-para">Customer <br></br>Engagement</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={{span:12}} xs={{span: 12}}  className="feat-box-col">
          <div className="feat-box" data-aos="fade-up">
            <Row className="feat-img-row">
              <Col lg={12} className="feat-img-col">
                <img src={secure} className="feat-img"></img>
              </Col>
            </Row>
            <Row className="feat-text-row">
              <Col lg={12} className="feat-text-col">
                <p className="feat-text-para">Highly Secured</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xl={4} lg={4} md={6} sm={{span:12}} xs={{span: 12}}  className="feat-box-col">
          <div className="feat-box" data-aos="fade-left">
            <Row className="feat-img-row">
              <Col lg={12} className="feat-img-col">
                <img src={End} className="feat-img"></img>
              </Col>
            </Row>
            <Row className="feat-text-row">
              <Col lg={12} className="feat-text-col">
                <p className="feat-text-para">End-To -End <br></br> Integration</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
