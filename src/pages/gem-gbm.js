import React from "react"

import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (

  <Layout>

    <SEO title="Portefeuille Permanent" />

    <Container style={{ maxWidth: "700px", margin: "auto" }}>
    
      <h2 className="text-center pt-4 pb-3">Global Equity/Balanced Momentum</h2>

      <p>The Global Balanced Momentum (GBM) is a rules-based approach using relative and absolute momentum applied to S&P 500 (SPY), the MSCI All Country World ex-US (VEU) and the Barclays Capital US Aggregate Bond (AGG). Relative momentum looks for strength relative to other assets, while absolute momentum looks for positive past returns in excess of US Treasury bill returns (BIL). A constant allocation is maintained in the bond allocation according to the investor appetite.The default model uses a 12-month relative momentum with a 30% permanent allocation to bonds.References

Gary Antonacci, Dual Momentum Investing: An Innovative Strategy for High Returns with Lower Risk, November 2014
https://www.amazon.com/Dual-Momentum-Investing-Innovative-Strategy/dp/0071849440

      </p>



    </Container>

    <hr></hr>

  </Layout>

)

export default SecondPage
