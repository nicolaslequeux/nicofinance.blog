import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (

  <Layout>
    <SEO title="Nicolas Lequeux" />
    <Container style={{ maxWidth: "700px", margin: "auto" }}>
      <h2 className="text-center p-4">Qui suis-je ?</h2>
      <Img
        fixed={data.file.childImageSharp.fixed}
        className="img-thumbnail mx-auto d-block"
        alt="Alias Nicolas"
      />
      <br></br>   
      <p className="text-justify">J'ai créé ce blog pour partager mes connaissances et mon expérience personnelle, pour qui voudrait devenir financièrement autonome. C'est à dire, ne plus dépendre d'un salaire mensuel pour maintenir son niveau de vie et avoir plus de temps à lui. La condition du succès repose sur la constitution d'une épargne financière, qui va permettre au fils du temps, de générer suffisamment d'intérêts pour couvrir les dépenses.</p>
      <p className="text-justify">Les stratégies de gestion que j'utilisent sont dites "systématiques", c'est-à-dire que nous pouvons les programmer, les tester sur des données de marché historiques et ainsi comprendre leurs comportements en fonction des évènements passés. Car même si les recettes sont connues, en matière de gestion financière, rien ne vaut une bonne petite simulation.</p>
      <p className="text-justify">Cette façon de travailler apporte une grande liberté et tranquillité d'esprit, car la feuille de route est tracée et je n'ai plus qu'à suivre un plan définit à l'avance.</p>
      <p className="text-justify">Puisse mon expérience vous apporter un peu plus de liberté,
      <br/>Bonne lecture à tous,
      <br/>Nicolas
      </p>
    </Container>

  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "alias-nicolas.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
