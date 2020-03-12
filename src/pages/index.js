import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>

    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Container>

      <p className="text-center font-weight-bold">Conseils pour générer des revenus financiers<br/>et devenir financièrement autonome</p>

      <p className="text-justify font-weight-light">J'ai créé ce blog pour partager mes connaissances et mon expérience personnelle, pour qui voudrait devenir financièrement autonome. La condition du succès repose sur la constitution d'une épargne financière, qui va permettre au fils du temps, de générer suffisamment d'intérêts pour couvrir les dépenses. Je vous invite à débuter votre lecture par <Link to="/prologue">les principes de base à comprendre</Link>.</p>

      





    </Container>

  </Layout>

)

export default IndexPage
