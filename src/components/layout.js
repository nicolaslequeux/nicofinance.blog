import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "./navBar"
import Footer from "./footer"

export default ({ children }) => (
  <>

    <Navbar />
  
    {/* <Container
      style={{
        // maxWidth: "800px",
        minHeight: "calc(100vh - 100px)",
        marginBottom: "50px"
      }}
      className="mt-5"
    > */}



      <main style={{ marginBottom: "50px" }}>
        {children}
      </main>
    
    {/* </Container> */}

    <Footer />

  </>
)