import React, { useState } from "react";
import { Row, Col, Modal, ModalFooter } from "react-bootstrap";
import logo from "../images/cheqitlogo.svg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import trypic from "../images/try.jpg";
import Form from "react-bootstrap/Form";
import apk from "../images/APK.svg";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { saveAs } from "file-saver";
import "./cert.css";
import HomeNav from "../HomeNavbar/HomeNavbar";
import CommonFooter from "../Footer/Footer";
import AOS from "aos";

export default function Cert() {
  AOS.init();
  const [file, setfile] = useState({
    name: "",
    description: "",
  });
  const { name, description } = file;
  const initialState = {
    businessID: "",
    businessName: "",
    corNo: "",
    spaNo: "",
    bpa: "",
    plotNo: "",
    issueDate: "",
    dateExp: "",
    county: "",
    countySub: "",
    pinNo: "",
    vatNo: "",
    poBox: "",
    postCode: "",
    postTown: "",
    telNo1: "",
    telNo2: "",
    fax: "",
    email: "",
    busiActivity: "",
    detailActivity: "",
  };
  const [data, setData] = useState(initialState);
  const {
    businessID,
    businessName,
    corNo,
    spaNo,
    bpa,
    plotNo,
    issueDate,
    dateExp,
    county,
    countySub,
    pinNo,
    vatNo,
    poBox,
    postCode,
    postTown,
    telNo1,
    telNo2,
    fax,
    email,
    busiActivity,
    detailActivity,
  } = data;
  const [pdf, setPdf] = useState({
    pdf: null,
  });
  const handleData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const changehandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfile((prevdata) => ({ ...prevdata, [name]: value }));
  };
  // console.log(file);
  const [code, setCode] = useState({
    code: logo,
  });
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const HandleOpen = () => setOpen(true);
  const OffOpen = () => {
    setData(initialState);
    setOpen(false);
  };
  const [model, setModel] = useState(false);
  const handleClose = () => setModel(false);
  const handleShow = () => setModel(true);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(file);
    axios
      .post("https://cheqit.in/Identify/web-checker/genDemoQR", file)
      .then((res) => {
        console.log(res);
        setCode({
          code: res.data,
        });
        setShow(true);
        setModel(true);
      });
  };

  const handlepdf = (e) => {
    e.preventDefault();
    console.log(data);
    let sendData = {
      businessID: businessID,
      businessName: businessName,
      corNo: corNo,
      spaNo: spaNo,
      bpa: bpa,
      plotNo: plotNo,
      issueDate: new Date(issueDate).getTime(),
      dateExp: new Date(dateExp).getTime(),
      county: county,
      countySub: countySub,
      pinNo: pinNo,
      vatNo: vatNo,
      poBox: poBox,
      postCode: postCode,
      postTown: postTown,
      telNo1: telNo1,
      telNo2: telNo2,
      fax: fax,
      email: email,
      busiActivity: busiActivity,
      detailActivity: detailActivity,
    };
    console.log(sendData);

    axios
      .post("https://cheqit.in/Identify/web-checker/generatePDF", sendData, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res);

        let blob = new Blob([res.data], { type: "application/pdf" });
        console.log(blob);
        const fileURL = URL.createObjectURL(blob);

        saveAs(blob, businessName + ".pdf");
      });
  };
  console.log(code);
  console.log(model);
  console.log(dateExp);
  console.log(pdf);

  // process to auto download it

  const tabstyle = {
    color: "#212121",
  };

  return (
    <div className="try-main">
      <Row>
        <Col sm={12}>
          <HomeNav />
        </Col>
      </Row>
      <Row className="cert-section">
        <Col
          xl={{ span: 7, offset: 1 }}
          lg={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="cert-col-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Form onSubmit={handlepdf} className="detail">
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri imp"
                  >
                    Business ID No.
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="businessID"
                      value={businessID}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri imp">
                    Business Name
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="businessName"
                      value={businessName}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri imp"
                  >
                    CoR No.
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="corNo"
                      value={corNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri imp">
                    SBP No.
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="spaNo"
                      value={spaNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri imp"
                  >
                    BPA
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="bpa"
                      value={bpa}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri imp">
                    Plot No.
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="plotNo"
                      value={plotNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri imp"
                  >
                    Date of Issue
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="date"
                      name="issueDate"
                      value={issueDate}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri imp">
                    Date of Expiry
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="date"
                      name="dateExp"
                      value={dateExp}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    County
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="county"
                      value={county}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri">
                    Sub County
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="countySub"
                      value={countySub}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    Pin No.
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="pinNo"
                      value={pinNo}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri">
                    VAT No.
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="vatNo"
                      value={vatNo}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    P.O.Box
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="poBox"
                      value={poBox}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri">
                    Postal Code
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="postCode"
                      value={postCode}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    Postal Town
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="postTown"
                      value={postTown}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    Telephone No.1
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="telNo1"
                      value={telNo1}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri">
                    Telephone No.2
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="telNo2"
                      value={telNo2}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    FAX
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="fax"
                      value={fax}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri">
                    Email Address
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleData}
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label
                    column
                    lg={{ span: 11, offset: 1 }}
                    md="12"
                    xs="12"
                    className="cri"
                  >
                    Business Activity Code & Description
                  </Form.Label>
                  <Col lg={{ span: 11, offset: 1 }} md="12" xs="12">
                    <Form.Control
                      className="certInputs"
                      name="busiActivity"
                      value={busiActivity}
                      onChange={handleData}
                      as="textarea"
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column lg="11" sm="12" className="cri">
                    Detailed Activity Description
                  </Form.Label>
                  <Col lg="11" sm="12">
                    <Form.Control
                      className="certInputs"
                      name="detailActivity"
                      value={detailActivity}
                      onChange={handleData}
                      as="textarea"
                    />
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row className="cert-btn">
              <Button className="get-pdf-btn" type="submit">
                Get PDF
              </Button>
            </Row>
          </Form>
          <Modal
            show={model}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header style={{ justifyContent: "center" }}>
              <Modal.Title className="scan">Scan It !!!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col
                  sm={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  {show === false ? (
                    <img src={logo}></img>
                  ) : (
                    <img
                      src={"data:image/png;base64," + code.code}
                      className="qr-img"
                    ></img>
                  )}
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} className="download-app-btn">
                Done
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal
            show={open}
            onHide={OffOpen}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header style={{ justifyContent: "center" }}>
              <Modal.Title className="scan">
                Fill the required Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handlepdf}>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    Business ID No.
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="businessID"
                      value={businessID}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    Business Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="text"
                      name="businessName"
                      value={businessName}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    CoR No.
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="corNo"
                      value={corNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    SBP No.
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="spaNo"
                      value={spaNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    BPA No.
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="bpa"
                      value={bpa}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    Plot No.
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="number"
                      name="plotNo"
                      value={plotNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    Date of Issue
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="date"
                      name="issueDate"
                      value={issueDate}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextPassword">
                  <Form.Label column sm="10" className="cri">
                    Date of Expiry
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      className="certInputs"
                      type="date"
                      name="dateExp"
                      value={dateExp}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Row>
                  <Button className="btn-learn" type="submit">
                    Get PDF
                  </Button>
                </Row>
              </Form>
            </Modal.Body>
            <ModalFooter>
              <Button onClick={OffOpen} className="download-app-btn">
                Done
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
        <Col
          xl={{ span: 4, offset: 0 }}
          lg={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          sm={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="imageCol"
        >
          <Row>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <img src={apk} width="90%" alt="apk" style={{position:"sticky",top:"0"}}></img>
            </Col>
          </Row>
          <Row>
            <Col
              sm={12}
              style={{ display: "flex", justifyContent: "center" }}
              className="cert-col-2"
            >
              <Button
                className="download-app-btn"
                href="https://cheqit.in/Identify/download/androidAPK"
                style={{ paddingTop: "1%" }}
              >
                <span>Download APP</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <CommonFooter />
    </div>
  );
}
