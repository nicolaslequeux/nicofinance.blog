import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { FaHome } from "react-icons/fa"

export default () => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/"><FaHome size={24}/></Nav.Link>
        <Nav.Link href="/prologue">Prologue</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/pp-browne">PP</Nav.Link>        
        <Nav.Link href="/liens">Liens</Nav.Link>
        <Nav.Link href="/qui-suis-je">Qui suis-je?</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
