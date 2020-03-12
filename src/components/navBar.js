import React from "react"

import { Nav, Navbar, NavDropdown } from "react-bootstrap"

export default () => (

    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mx-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/prologue">Prologue</Nav.Link>
        <NavDropdown title="Stratégies" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#">PP</NavDropdown.Item>
        <NavDropdown.Item href="#">GEM/GBM</NavDropdown.Item>
        <NavDropdown.Item href="#">VAA</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Autres</NavDropdown.Item>
      </NavDropdown>
        <Nav.Link href="/page-2">Page-2</Nav.Link>
        <Nav.Link href="/qui-suis-je">Qui suis-je?</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>

)


