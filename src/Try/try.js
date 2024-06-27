import React, { useState } from "react";
import { Row, Col, Modal, ModalFooter } from "react-bootstrap";
import logo from "../images/cheqitlogo.svg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./try.css";
import Form from "react-bootstrap/Form";
import apk from "../images/APK.svg";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { saveAs } from "file-saver";
import HomeNav from "../HomeNavbar/HomeNavbar";
import CommonFooter from "../Footer/Footer";
import AOS from "aos";

export default function Try() {
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
    baNo: "",
    plotNo: "",
    issueDate: "",
    dateExp: "",
  };
  const [data, setData] = useState(initialState);
  const {
    businessID,
    businessName,
    corNo,
    spaNo,
    baNo,
    plotNo,
    issueDate,
    dateExp,
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
      baNo: baNo,
      plotNo: plotNo,
      issueDate: new Date(issueDate).getTime(),
      dateExp: new Date(dateExp).getTime(),
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

  return (
    <div className="try-main">
      <Row>
        <Col sm={12}>
          <HomeNav />
        </Col>
      </Row>
      <Row className="try-section">
        <Col
          xl={{ span: 6, offset: 0 }}
          lg={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          sm={12}
          style={{ padding: "4%" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Form onSubmit={handlesubmit} className="Form">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="cri">Name</Form.Label>
              <Form.Control
                className="field na"
                style={{ borderRadius: "50px" }}
                type="text"
                placeholder="Name of product/company"
                value={name}
                onChange={changehandle}
                name="name"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="cri">Description</Form.Label>
              <Form.Control
                className="field des"
                style={{ borderRadius: "20px" }}
                as="textarea"
                name="description"
                value={description}
                onChange={changehandle}
                rows={3}
                required
              />
            </Form.Group>
            <Row style={{ justifyContent: "space-around" }}>
              <Button className="get-pdf-btn" type="submit">
                <span>Get ACT Code</span>
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
                    <img src={logo} alt="logo"></img>
                  ) : (
                    <img
                      src={"data:image/png;base64," + code.code}
                      className="qr-img"
                      alt="qr"
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
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    Business ID No.
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      name="businessID"
                      value={businessID}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    Business Name
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="text"
                      name="businessName"
                      value={businessName}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    CoR No.
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      name="corNo"
                      value={corNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    SBP No.
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      name="spaNo"
                      value={spaNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    BPA No.
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      name="baNo"
                      value={baNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    Plot No.
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="number"
                      name="plotNo"
                      value={plotNo}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    Date of Issue
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
                      type="date"
                      name="issueDate"
                      value={issueDate}
                      onChange={handleData}
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5" className="cri">
                    Date of Expiry
                  </Form.Label>
                  <Col sm="7">
                    <Form.Control
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
              <Button onClick={OffOpen} className="btn-learn">
                Done
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
        <Col
          xl={{ span: 6, offset: 0 }}
          lg={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          sm={12}
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <Row>
            <Col sm={12} style={{ display: "flex", justifyContent: "center" }}>
              <img src={apk} alt="apk" width="80%"></img>
            </Col>
          </Row>
          <Row>
            <Col sm={12} style={{ display: "flex", justifyContent: "center", marginBottom: "4%" }}>
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
