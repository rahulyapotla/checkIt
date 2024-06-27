import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./calc.css";

export default function Calculator() {
  const [plan, setPlan] = useState("");
  const [volume, setVolume] = useState(0);
  const [total, setTotal] = useState(0);
  const Calculate = (e) => {
    if (plan === "A") {
    }
    if (plan === "B") {
    }
    if (plan === "C") {
    }
    if (plan === "D") {
    }
    if (plan === "E") {
    }
  };
  return (
    <div>
      <Form>
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Label
              className="mr-sm-2"
              htmlFor="inlineFormCustomSelect"
              srOnly
            >
              Preference
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="0">Choose A Plan</option>
              <option value="1">Starter</option>
              <option value="2">Pro</option>
              <option value="3">Powerhouse+</option>
              <option value="4">Business Class</option>
              <option value="5">Enterprise</option>

            </Form.Control>
          </Col>
          <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
              Number of ACT codes
            </Form.Label>
          </Col>
          <Col sm={3} className="my-1">
            <Form.Label htmlFor="inlineFormInputGroupUsername" readOnly>
              Total Prize
            </Form.Label>
          </Col>
          
        </Form.Row>
      </Form>
    </div>
  );
}
