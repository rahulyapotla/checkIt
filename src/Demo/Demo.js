import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Demo.css";
import AOS from "aos";
import { Link } from "react-router-dom";

export default function Demo() {
  AOS.init();
  return (
    <div className="Demo-main" data-aos="fade-up" data-aos-duration="1000">
      <Row className="demo-head-row">
        <Col className="demo-head-col">
          <p className="demo-head-para">
            Seeing is believing.<br></br> Get a demo now!
          </p>
        </Col>
      </Row>
      <Row data-aos="fade-up" data-aos-duration="1300">
        <Col className="demo-head-col">
          <div className="tryNow-button">
            <Link to="/try">
              <p className="demo-text">Try Now</p>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
