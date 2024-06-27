import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Process.css";
import MI from "../images/manuIcon.svg";
import M from "../images/manu.svg";
import WI from "../images/wareIcon.svg";
import W from "../images/ware.svg";
import CI from "../images/consumerIcon.svg";
import C from "../images/consumer.svg";
import AOS from 'aos';

export default function Process() {
  AOS.init();
  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <p className="process-head" data-aos="zoom-in-up"  data-aos-duration="1000">How it happens...</p>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col
            lg={{ span: 5, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
            data-aos="zoom-in-up" data-aos-duration="1000"
          >
            <Row>
              <Col style={{ display: "inline-flex", alignItems: "center" }}>
                <img src={MI} alt="Manufacturer" width="70px" height="70px" />
                <p className="level">Manufacturer</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="level-desc">
                  The ACT Track n’ Traceable code is applied uniquely on every
                  item at the packaging center.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="level-points">The ERP System stores:</p>
                <ul>
                  <li>
                    <p className="level-points">The product's details</p>
                  </li>
                  <li>
                    <p className="level-points">
                      History of transactions to enable tracking of the product
                      along the distribution chain.
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={M} alt="Manufacturer" data-aos="zoom-in-up" data-aos-duration="1000" className="processImage"/>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col
            lg={6}
            md={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={W} alt="Warehouse" data-aos="zoom-in-up" data-aos-duration="1000" className="processImage"/>
          </Col>
          <Col
            xl={{ span: 5, offset: 0, order: "last" }}
            lg={{ span: 5, offset: 0, order: "last" }}
            md={{ span: 10, offset: 1, order: "first" }}
            sm={{ span: 10, offset: 1, order: "first" }}
            xs={{ span: 10, offset: 1, order: "first" }}
            data-aos="zoom-in-up" data-aos-duration="1000"
          >
            <Row>
              <Col style={{ display: "inline-flex", alignItems: "center" }}>
                <img src={WI} alt="Warehouse" width="70px" height="70px" />
                <p className="level">Warehouse | Distributor | Retailer</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="level-desc">
                  Track and Trace each smart product to secure product
                  diversions and for inventory supervision and management
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="level-points">Offers:</p>
                <ul>
                  <li>
                    <p className="level-points">Track ‘N’ Trace</p>
                  </li>
                  <li>
                    <p className="level-points">Inventory Management</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col
            lg={{ span: 5, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            sm={{ span: 10, offset: 1 }}
            xs={{ span: 10, offset: 1 }}
            data-aos="zoom-in-up" data-aos-duration="1000"
          >
            <Row>
              <Col style={{ display: "inline-flex", alignItems: "center" }}>
                <img src={CI} alt="Consumer" width="70px" height="70px" />
                <p className="level">Consumer</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="level-desc">
                  Ensure happy and informed customers who can scan and verify
                  authenticity and remain loyal to the brand
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="level-points">Allows consumers to:</p>
                <ul>
                  <li>
                    <p className="level-points">
                      Trace products back to their origin
                    </p>
                  </li>
                  <li>
                    <p className="level-points">
                      Participate in Consumer Reward Programs (Extension)
                    </p>
                  </li>
                  <li>
                    <p className="level-points">Report Fakes</p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={C} alt="Consumer" data-aos="zoom-in-up" data-aos-duration="1000" className="processImage" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
