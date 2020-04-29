import React from "react"
import Navbar from "./navBar"
import Footer from "./footer"

export default ({ children }) => (
  <>
    <Navbar />
      <main
        style={{
          marginBottom: "50px",
          minHeight: "calc(100vh - 100px)"
        }}
      >
        {children}
      </main>
    <Footer />
  </>
)