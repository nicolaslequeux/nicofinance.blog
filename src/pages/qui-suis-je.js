import React from "react"
import { graphql, Link } from 'gatsby'
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

      <p className="text-justify">J'ai créé ce blog pour partager mes connaissances et mon expérience personnelle, pour qui voudrait prendre en main son autonomie financière. C'est à dire, ne plus dépendre exclusivement d'un salaire mensuel, pour maintenir son niveau de vie et avoir plus de temps pour profiter de la vie. La condition du succès repose sur la constitution d'une épargne financière, qui va permettre au fils du temps, de générer suffisamment d'intérêts pour couvrir les dépenses.</p>

      <p className="text-justify">Les stratégies de gestion que j'utilise sont le plus souvent dites « systématiques », c'est-à-dire que nous pouvons les programmer, les tester sur des données historiques et ainsi comprendre leurs comportements en fonction des évènements passés. Car même si les recettes sont connues, en matière de gestion financière, rien ne vaut une simulation pour bien comprendre les interactions.</p>

      <p className="text-justify">Cette façon de travailler apporte une certaine tranquillité d'esprit, car la feuille de route est tracée et je n'ai plus qu'à suivre un plan définit à l'avance.</p>

      <p className="text-justify" >Je vous invite à débuter votre lecture par les <Link to="/prologue">principes de base</Link>.</p>

      <p className="text-justify">Puisse mon expérience vous apporter un peu plus de liberté,
      <br/>Bonne lecture à tous,
      <br/>Nicolas
      </p>

      <br></br>

      <p className="text-center font-italic font-weight-bold">Avertissement</p>

      <p className="text-justify font-italic font-weight-light">Ce site web exprime mon avis personnel sur divers sujets, notamment ceux liés à l'économie et à la gestion d’un portefeuille financier. Rien de ce qui figure dans mes articles ne doit être interprété comme un conseil d'investissement personnalisé.  Je ne suis pas un conseiller financier. Vous êtes responsable de vos actes et vous devriez toujours demander des conseils auprès de personnes qualifiées concernant votre propre situation. Ce site web est uniquement destiné à des fins d'information et d'échanges. Vous devez faire vos recherches par vous-même et faire vos propres choix avec votre argent, en fonction de votre situation particulière. Toute personne qui utilise ce site à des fins d'investissement le fait à ses propres risques. Les performances présentées sont simulées et n'ont pas pour but de refléter la situation réelle. Elles ne reflètent pas les coûts de transaction, les taxes, les frais de gestion ou autres dépenses. Les résultats hypothétiques de performances sont présentés à titre d'illustration uniquement et ne doivent pas être interprétés comme une indication des performances futures. Les opinions, recherches, analyses, prix ou autres informations contenues sur ce site web sont fournies à titre de commentaire et d’illustration des publications de blog et ne constituent pas des conseils d'investissement. Certains liens conduisent à d'autres sites web dans le but de partager des informations. L'inclusion de ces liens n'implique pas une approbation des opinions ou des conseils des autres sites.</p>

      {/* <p>EN UTILISANT LE CONTENU DE CE SITE, L'UTILISATEUR ACCEPTE QUE L'AUTEUR ET TOUTE AUTRE ENTITÉ QUI LUI EST ASSOCIÉE NE SOIENT PAS TENUS POUR RESPONSABLES DE TOUTE PERTE DIRECTE, INDIRECTE, CONSÉCUTIVE OU DE TOUT DOMMAGE QUEL QU'IL, SOIT DÉCOULANT DE CETTE UTILISATION.</p>
      <p>LES PERFORMANCES PASSÉES NE CONSTITUENT PAS UNE GARANTIE DES RÉSULTATS FUTURS.</p> */}

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
