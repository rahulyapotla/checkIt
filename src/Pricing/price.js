import React from "react";
import { Col, Row } from "react-bootstrap";
import "./price.css";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import CommonFooter from "../Footer/Footer";
import AOS from "aos";

export default function Price() {
  AOS.init();
  return (
    <div className="price-container">
      <Row>
        <Col>
          <HomeNavbar />
        </Col>
      </Row>
      <Row className="top-row-price">
        <Col>
          <p className="fp" data-aos="zoom-in-up" data-aos-duration="1000">
            <span style={{ color: "#518071" }}>Flexible</span> Plans
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="fps" data-aos="zoom-in-up" data-aos-duration="1000">
            Choose a plan that works best for you <br></br>and your company.
          </p>
        </Col>
      </Row>
      <hr width="10%" />
      <Row>
        <Col
          xl={{ span: 4 }}
          lg={{ span: 6 }}
          md={{span: 6}}
          xs={12}
          className="priceBox-col firstCol"
        >
          <div className="priceBox">
            <Row>
              <Col>
                <p className="planType">Starter</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="typePrice">$10,000</p>
              </Col>
            </Row>
            <hr width="80%" align="left"></hr>
            <Row>
              <Col>
                <p className="offerings">✔ 5000 Anti Counterfeiting Tags</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customized Dashboard</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customer Demographics</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ CheQIT Analytics Integration</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Upfront contractual period price- $9000</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xl={{ span: 4 }}
          lg={{ span: 6 }}
          md={{span: 6}}
          xs={12}
          className="priceBox-col secondCol"
          style={{ justifyContent: "center" }}
        >
          <div className="priceBox">
            <Row>
              <Col>
                <p className="planType">Pro</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="typePrice">$15,000</p>
              </Col>
            </Row>
            <hr width="80%" align="left"></hr>
            <Row>
              <Col>
                <p className="offerings">✔ 10000 Anti Counterfeiting Tags</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customized Dashboard</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customer Demographics</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ CheQIT Analytics Integration</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Upfront contractual period price- $13000</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xl={{ span: 4 }}
          lg={{ span: 6 }}
          md={{span: 6}}
          xs={12}
          className="priceBox-col thirdCol"
          style={{ justifyContent: "flex-start" }}
        >
          <div className="priceBox">
            <Row>
              <Col>
                <p className="planType">Powerhouse+</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="typePrice">$25,000</p>
              </Col>
            </Row>
            <hr width="80%" align="left"></hr>
            <Row>
              <Col>
                <p className="offerings">✔ 50000 Anti Counterfeiting Tags</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customized Dashboard</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customer Demographics</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ CheQIT Analytics Integration</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Upfront contractual period price- $22000</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 6 }}
          md={{span: 6}}
          xs={12}
          className="priceBox-col secondCol"
          style={{ justifyContent: "center" }}
        >
          <div className="priceBox">
            <Row>
              <Col>
                <p className="planType">Business Class</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="typePrice">$35,000</p>
              </Col>
            </Row>
            <hr width="80%" align="left"></hr>
            <Row>
              <Col>
                <p className="offerings">✔ 100000 Anti Counterfeiting Tags</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customized Dashboard</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customer Demographics</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ CheQIT Analytics Integration</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Upfront contractual period price- $30000</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 6, offset: 3 }}
          md={{ span: 6, offset: 3 }}
          xs={12}
          className="priceBox-col secondCol"
          style={{ justifyContent: "center" }}
        >
          <div className="priceBox">
            <Row>
              <Col>
                <p className="planType">Enterprise</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="typePrice">Get in touch</p>
              </Col>
            </Row>
            <hr width="80%" align="left"></hr>
            <Row>
              <Col>
                <p className="offerings">✔ 100000+ Anti Counterfeiting Tags</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customized Dashboard</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Customer Demographics</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ CheQIT Analytics Integration</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="offerings">✔ Upfront contractual period price- Custom</p>
              </Col>
            </Row>
          </div>
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
