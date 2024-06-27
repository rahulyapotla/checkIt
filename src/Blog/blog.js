import React from "react";
import "./blog.css";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import CommonFooter from "../Footer/Footer";
import { Row, Col } from "react-bootstrap";
import coin from "../images/coin.jpg";
import auto from "../images/auto.jpg";
import med from "../images/med.jpg";
import good from "../images/good.jpg";
import pest from "../images/pest.jpg";
import bev from "../images/bev.jpg";
import AOS from "aos";

export default function Blog() {
  AOS.init();
  return (
    <div className="blog-container">
      <Row>
        <Col>
          <HomeNavbar />
        </Col>
      </Row>
      <Row className="topRowHeading">
        <Col>
          <p className="tt" data-aos="fade-down"
     data-aos-duration="1000">Blogs</p>
        </Col>
      </Row>
      <hr width="10%" />
      <Row className="blogRow" data-aos="fade-up"
     data-aos-duration="1000">
        <Col
          className="imgCol"
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
        >
          <img src={coin} alt="coin" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row>
            <Col>
              <p className="aboutSir">
                Counterfeiting, manufacture of false money for gain, a kind of
                forgery in that something is copied so as to defraud by passing
                it for the original or..
                <a
                  href="https://www.britannica.com/topic/counterfeiting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr width="5%" />
      <Row className="blogRow" data-aos="fade-up"
     data-aos-duration="1000">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="imgCol"
        >
          <img src={auto} alt="auto" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row>
            <Col>
              <p className="aboutSir">
                According to the Authentication Solution Providers’ Association
                (ASPA), the overall counterfeit products across various
                industries in India are..
                <a
                  href="https://auto.economictimes.indiatimes.com/news/auto-components/opinion-its-time-to-call-a-fake-a-fake/74225240"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr width="5%" />
      <Row className="blogRow" data-aos="fade-up"
     data-aos-duration="1000">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="imgCol"
        >
          <img src={med} alt="med" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row>
            <Col>
              <p className="aboutSir">
                $200 Billion Pharma Counterfeit Drug Market Growing by 20% Per
                Year alarming growth i.e. twice the rate of the legitimate
                pharmaceutical market, and..
                <a
                  href="https://www.packworld.com/home/article/21102806/200-billion-pharma-counterfeit-drug-market-growing-by-20-per-year"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr width="5%" />
      <Row className="blogRow" data-aos="fade-up"
     data-aos-duration="1000">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="imgCol"
        >
          <img src={good} alt="med" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row>
            <Col>
              <p className="aboutSir">
                Fast-moving consumer goods (FMCG) packaging remains the worst
                affected industry due to fraudulent products which account for
                over 30%..
                <a
                  href="https://brandequity.economictimes.indiatimes.com/news/business-of-brands/fmcg-loses-30-of-its-business-due-to-counterfeit-products/56965353"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr width="5%" />
      <Row className="blogRow" data-aos="fade-up"
     data-aos-duration="1000">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="imgCol"
        >
          <img src={pest} alt="pest" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row>
            <Col>
              <p className="aboutSir">
                There is a significant share of non-genuine pesticides in the
                Indian market, which can be counterfeit, spurious, adulterated
                or sub-standard..
                <a
                  href="https://kashmirreader.com/2020/06/14/fake-pesticide-mafia-and-destruction-of-apple-industry/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr width="5%" />
      <Row className="blogRow" data-aos="fade-up"
     data-aos-duration="1000">
        <Col
          xl={{ span: 4, offset: 2 }}
          lg={{ span: 5, offset: 1 }}
          md={{ span: 5, offset: 1 }}
          xs={{ span: 10, offset: 1 }}
          className="imgCol"
        >
          <img src={bev} alt="bev" />
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          md={{ span: 5, offset: 0 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Row>
            <Col>
              <p className="aboutSir">
                Counterfeit alcohol is defined as “fake or illegally produced
                alcohol made in unlicensed distilleries or people’s homes,
                packaged to look like..
                <a
                  href="https://alcoholchange.org.uk/blog/2020/counterfeit-alcohol-getting-to-grips-with-fake-booze#:~:text=Recent%20seizures%20of%20counterfeit%20alcohol,of%20fake%20Smirnoff%20were%20found"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </p>
            </Col>
          </Row>
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
