import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "./navBar"

export default ({ children }) => (
  <>
    <Navbar />
    <Container style={{ maxWidth: "800px" }} className="mt-5">
      <main>{children}</main>
    </Container>
  </>
)