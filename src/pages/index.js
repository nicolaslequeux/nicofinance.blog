import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>

    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Container className="text-justify">

      <p className="text-center font-weight-bold">Conseils pour générer des revenus financiers<br/>et devenir financièrement autonome</p>

      <p className="font-weight-lighter">J'ai créé ce blog pour partager mes connaissances et mon expérience personnelle, pour qui voudrait devenir financièrement autonome. C'est à dire, ne plus dépendre d'un salaire mensuel pour maintenir son niveau de vie et avoir plus de temps pour profiter de la vie. La condition du succès repose sur la constitution d'une épargne financière, qui va permettre au fils du temps, de générer suffisamment d'intérêts pour couvrir les dépenses. Je vous invite à débuter votre lecture par les principes de base.</p>

      <p className="font-weight-lighter">Les stratégies de gestion que j'utilisent sont toutes systématiques, c'est-à-dire que nous pouvons les programmer, les tester sur des données historiques et ainsi comprendre leurs comportements en fonction des évènements passés. Car même si les recettes sont connues, en matière de gestion financière, rien ne vaut une bonne petite simulation.</p>

      <p className="font-weight-lighter">Cette façon de travailler apporte une tranquillité d'esprit, car la feuille de route est tracée et je n'ai plus qu'à suivre un plan définit à l'avance, enfin le plus important, cette façon de travailler me procure une grande liberté. Mes opérations ne me demandent pas plus d'une demi-journée de travail par mois, ce me laisse un peu de temps pour m'amuser et vous faire partager mon expérience.</p>

      <p className="font-weight-lighter">Puisse cette expérience pour apporter un peu de liberté,<br/>Bonne route à tous,<br/>Nicolas</p>








      



    </Container>

  </Layout>

)

export default IndexPage
