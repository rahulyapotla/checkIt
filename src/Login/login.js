import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";
import logpic from "../images/signin.jpg";
import Home from "../Home/home";
import HomeNav from "../HomeNavbar/HomeNavbar";
import { Redirect } from "react-router-dom";
import Admin from "../layouts/Admin";
import Features from "../Features/feat";
import CommonFooter from "../Footer/Footer";


export default function Login() {
  const AdminUser = {
    email: "scan@cheqit",
    password: "client",
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const [error, setError] = useState("");

  const [sign, setSign] = useState(false);
  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const loginSubmit = (e) => {
    if (email === AdminUser.email && password === AdminUser.password) {
      setSign(true);
    } else {
      setError("incorrect");
    }
  };
  console.log(user);

  return (
    <div className="login-main">
      {sign === true ? (
        <Redirect to="/admin/dashboard"></Redirect>
      ) : (
        <div>
          <Row>
            <HomeNav />
          </Row>
          <Row>
            <Col sm={6} className="login-col-1">
              <img src={logpic} className="login-pic"></img>
            </Col>
            <Col
              xl={{ span: 4, offset: 0 }}
              lg={{ span: 4, offset: 0 }}
              md={{ span: 5, offset: 0 }}
              sm={{ span: 10, offset: 1 }}
              xs={{ span: 10, offset: 1 }}
              className="login-col-2"
            >
              <Row>
                <Col xs={{ span: 8, offset: 2 }}>
                  <p className="getintouchText">Login</p>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 8, offset: 2 }}>
                  <Form className="login-form" onSubmit={loginSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="login-fields">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={handleDetails}
                        className="login-input"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="login-fields">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleDetails}
                        className="login-input"
                      />
                    </Form.Group>

                    <Button className="login-btn" type="submit">
                      Login
                    </Button>
                  </Form>
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
      )}
    </div>
  );
}
