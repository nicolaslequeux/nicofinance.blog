import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { FaHome } from "react-icons/fa"

export default () => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/"><FaHome size={24}/></Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <NavDropdown title="Stratégies" id="basic-nav-dropdown">
          <NavDropdown.Item href="/pp-browne">PP-Browne</NavDropdown.Item>
          <NavDropdown.Item href="/gem-gbm">GEM/GBM</NavDropdown.Item>
          <NavDropdown.Item href="/vaa">VAA</NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="/pp-browne">PP-Browne</Nav.Link>         */}
        <Nav.Link href="/prologue">Prologue</Nav.Link>
        <Nav.Link href="/liens">Liens</Nav.Link>
        <Nav.Link href="/qui-suis-je">Qui suis-je?</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
