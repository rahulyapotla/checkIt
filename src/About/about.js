import React from "react";
import { Col, Row } from "react-bootstrap";
import "./about.css";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import CommonFooter from "../Footer/Footer";
import N from "../images/N.png";
import RA from "../images/RA.png";
import RI from "../images/RI.png";
import Am from "../images/Am.png";
import AOS from "aos";

export default function About() {
  AOS.init();
  return (
    <div className="about-container">
      <Row>
        <Col>
          <HomeNavbar />
        </Col>
      </Row>
      <Row className="top-row">
        <Col
          xl={{ span: 3, offset: 3 }}
          lg={{ span: 3, offset: 2 }}
          md={{ span: 4, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <p
            className="gtkText"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            Get To Know Us
          </p>
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 10, offset: 1 }}
          className="about-box"
        >
          <p
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="topTextRight"
          >
            We help you build stronger, more secure and transparent supply chain
            and help your consumers verify authenticity of your products to make
            them your forever loyal customers. <br></br>
            <br></br>CheqIt came into existence with an only aim to secure and
            grow your brand value and enable trust in your customers
          </p>
        </Col>
      </Row>
      <hr width="10%" />
      <Row>
        <Col>
          <p className="tt" data-aos="zoom-in-up" data-aos-duration="1000">
            The Team
          </p>
        </Col>
      </Row>
      <Row className="sirRow">
        <Col
          className="imgCol"
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <img
            src={N}
            alt="Naman Agarwal"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row data-aos="zoom-in-left" data-aos-duration="1000">
            <Col>
              <p className="nameText">Naman Agarwal</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-left" data-aos-duration="1000">
            <Col>
              <p className="desig">Founder</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-left" data-aos-duration="1000">
            <Col>
              <p className="aboutSir">
                CheqIt came into existence with an only aim to secure and grow
                your brand value and enable trust in your customers
              </p>
              <a
                href="www.linkedin.com/in/amtul-maswara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-linkedin-square fa-2x"
                  style={{ color: "#518071" }}
                  aria-hidden="true"
                ></i>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="sirRow">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row data-aos="zoom-in-right" data-aos-duration="1000">
            <Col>
              <p className="nameText">Raj Kumar</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-right" data-aos-duration="1000">
            <Col>
              <p className="desig">Tech-Lead | Co-Founder</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-right" data-aos-duration="1000">
            <Col>
              <p className="aboutSir">
                CheqIt came into existence with an only aim to secure and grow
                your brand value and enable trust in your customers
              </p>
              <a
                href="www.linkedin.com/in/amtul-maswara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-linkedin-square fa-2x"
                  style={{ color: "#518071" }}
                  aria-hidden="true"
                ></i>
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          className="imgCol"
          xl={{ span: 4, offset: 0, order: "last" }}
          lg={{ span: 5, offset: 0, order: "last" }}
          md={{ span: 5, offset: 0, order: "last" }}
          xs={{ span: 10, offset: 1, order: "first" }}
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <img src={RA} alt="Raj Kumar" />
        </Col>
      </Row>
      <Row className="sirRow">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="imgCol"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <img src={RI} alt="Ritesh Kumar" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row data-aos="zoom-in-left" data-aos-duration="1000">
            <Col>
              <p className="nameText">Ritesh Lamba</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-left" data-aos-duration="1000">
            <Col>
              <p className="desig">DevOps | Co-Founder</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-left" data-aos-duration="1000">
            <Col>
              <p className="aboutSir">
                CheqIt came into existence with an only aim to secure and grow
                your brand value and enable trust in your customers
              </p>
              <a
                href="www.linkedin.com/in/amtul-maswara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-linkedin-square fa-2x"
                  style={{ color: "#518071" }}
                  aria-hidden="true"
                ></i>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="sirRow">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row data-aos="zoom-in-right" data-aos-duration="1000">
            <Col>
              <p className="nameText">Amtul Maswara Ahmed</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-right" data-aos-duration="1000">
            <Col>
              <p className="desig">Webmaster | Product Head</p>
            </Col>
          </Row>
          <Row data-aos="zoom-in-right" data-aos-duration="1000">
            <Col>
              <p className="aboutSir">
                CheqIt came into existence with an only aim to secure and grow
                your brand value and enable trust in your customers
              </p>
              <a
                href="www.linkedin.com/in/amtul-maswara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-linkedin-square fa-2x"
                  style={{ color: "#518071" }}
                  aria-hidden="true"
                ></i>
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          className="imgCol"
          xl={{ span: 4, offset: 0, order: "last" }}
          lg={{ span: 5, offset: 0, order: "last" }}
          md={{ span: 5, offset: 0, order: "last" }}
          xs={{ span: 10, offset: 1, order: "first" }}
          data-aos="zoom-in-left"
          data-aos-duration="1000"
        >
          <img src={Am} alt="Raj Kumar" />
        </Col>
      </Row>

      <Row>
        <Col>
          <CommonFooter />
        </Col>
      </Row>
    </div>
  );
}
