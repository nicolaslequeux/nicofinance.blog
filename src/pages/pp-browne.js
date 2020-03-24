import React from "react"

import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (

  <Layout>

    <SEO title="Portefeuille Permanent" />

    <Container style={{ maxWidth: "700px", margin: "auto" }}>
    
      <h2 className="text-center pt-4 pb-3">Le Portefeuille Permanent de Harry Browne</h2>

      <div className="text-center">

        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLxbXq7cxo596eRQ5ACZm2XAPHV9xGUR4G_luLTgmLtof4N_XFgFDyBSgGF3WemptwywXL4mP740Aa/pubchart?oid=1518794513"
          title="PP-Graphique"
          width="660"
          height="400"
          style={{
            border: "0"
          }}
        ></iframe>


        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLxbXq7cxo596eRQ5ACZm2XAPHV9xGUR4G_luLTgmLtof4N_XFgFDyBSgGF3WemptwywXL4mP740Aa/pubhtml?gid=1224187303&amp;single=true&amp;widget=true&amp;headers=false"
          title="PP-Calcul"
          width="660"
          height="400"
          style={{
            border: "0"
          }}
        ></iframe>

      </div>

    </Container>




    <hr></hr>

  </Layout>

)

export default SecondPage
