import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa"

export default () => (
    <Navbar
      bg="dark"
      // fixed="bottom"
      sticky="bottom"
      className="justify-content-between"
      style={{ height: "30px" }}
    >
      <Nav className="mx-auto">
        <Nav.Link href="#" style={{color: "lightgray"}}><FaTwitter /></Nav.Link>
        <Nav.Link href="#" style={{color: "lightgray"}}><FaLinkedinIn /></Nav.Link>
      </Nav>
  </Navbar>
)