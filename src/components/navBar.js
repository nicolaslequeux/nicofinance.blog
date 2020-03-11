import React from "react"

import { Navbar, Nav } from "react-bootstrap"

export default () => (

    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mx-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/prologue">Prologue</Nav.Link>
        <Nav.Link href="/page-2">Page-2</Nav.Link>
        <Nav.Link href="/about">A propos</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>

)


