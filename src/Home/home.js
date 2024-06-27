import React from "react";
import "./hom.css";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import thumb from "../images/1.svg";
import main from "../images/topImage.svg";
import blur from "../images/translucent one.svg";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import vid from "../images/vid.mp4";
import HomeNav from "../HomeNavbar/HomeNavbar";
import Features from "../Features/feat";
import Process from "../Process/Process";
import Demo from "../Demo/Demo";
import CommonFooter from "../Footer/Footer";

export default function Home() {
  AOS.init();
  return (
    <div className="main-container">
      <Row>
        <HomeNav />
      </Row>
      <Row className="topDiv">
        <Col
          lg={{ span: 4, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          data-aos="fade-right"
        >
          <Row>
            <Col>
              <p className="tagline">The Power in your Scan!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="topText">
                Anti-Counterfeiting solutions to protect your brand through
                continual innovations and keeping pace with your end customers
                expectations by delivering authentic products to ensure better
                customer satisfaction, enhanced productivity, thus sustainable
                growth and business profitability
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/try">
                <div className="tryNow">
                  <p className="tryNow-text">Try Now</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col
          lg={{ span: 7, offset: 0 }}
          xs={{ span: 12 }}
          className="imageColumn"
        >
          <img
            src={main}
            alt="main"
            className="topImage"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "8vh" }}>
        <Col
          lg={{ span: 5, offset: 0 }}
          md={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="blur-bg"
        >
          <img
            src={blur}
            alt="blur"
            className="blur-bg-image"
            data-aos="fade-up"
            data-aos-duration="500"
          />
          <div className="blurDiv" data-aos="fade-up" data-aos-duration="1000">
            <Row>
              <Col>
                <p className="tagline">What we do?</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="topText">
                  In a world full of competition, how CheqIt will help you to
                  stand out and grow
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col>
          <Row>
            <Col
              xl={6}
              lg={6}
              sm={6}
              className="wwd-col"
              style={{ justifyContent: "center" }}
            >
              <div
                className="wwd-box"
                data-aos="fade-down-right"
                data-aos-duration="1000"
              >
                <p className="wwd-text">
                  Give you up to <span className="wwd-text2">10x customer</span>{" "}
                  engagement
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              sm={6}
              className="wwd-col"
              style={{ justifyContent: "center", alignItems: "flex-end" }}
            >
              <div
                className="wwd-box"
                data-aos="fade-down-left"
                data-aos-duration="1000"
              >
                <p className="wwd-text">
                  End-to-End <span className="wwd-text2">Product Tracking</span>
                </p>
              </div>
            </Col>
          </Row>
          <Row className="bottomColHome">
            <Col xl={6} lg={6} md={6} sm={6} className="wwd-col">
              <div
                className="wwd-box"
                data-aos="fade-up-right"
                data-aos-duration="1000"
              >
                <p className="wwd-text">
                  Give you a <span className="wwd-text2">Competitive Edge</span>
                </p>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={6}
              sm={6}
              className="wwd-col"
              style={{ alignItems: "flex-end" }}
            >
              <div
                className="wwd-box"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <p className="wwd-text">
                  Better <span className="wwd-text2">Market Knowledge</span> and
                  Analysis
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Features />
        </Col>
      </Row>
      <Process />
      <Row className="work">
        <Col xs={12} md={10} lg={7} xl={6}>
          <div className="vid" data-aos="fade-up" data-aos-duration="1000">
            <ReactPlayer
              className="player"
              controls="true"
              url={vid}
              light={thumb}
            />
          </div>
        </Col>
      </Row>
      <Demo />
      <CommonFooter />
    </div>
  );
}
