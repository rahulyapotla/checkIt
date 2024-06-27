import React from "react";
import "./HomeNavbar.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/Logo.svg";
// import { Link } from "react-router-dom";

export default function HomeNav() {
  return (
    <Navbar
      bg="white"
      fixed="top"
      expand="lg"
      style={{
        boxShadow: "0px 6px 10px rgba(0, 20, 73, 0.14)",
        borderRadius: "0vw 0vw 10vw 10vw",
        padding: "0% 5% 0% 5%"
      }}
    >
      <Navbar.Brand href="/">
        <img className="chq-logo" src={logo} alt="Cheqit-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/login" className="home-nav">
            Dashboard
          </Nav.Link>
          <Nav.Link href="/price" className="home-nav">
            Pricing
          </Nav.Link>
          <Nav.Link href="/cert" className="home-nav">
            Get Certificate
          </Nav.Link>
          <Nav.Link href="/blog" className="home-nav">
            Blogs
          </Nav.Link>
          <Nav.Link href="/about" className="home-nav">
            About Us
          </Nav.Link>
          <Nav.Link href="/contact" className="home-nav">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
