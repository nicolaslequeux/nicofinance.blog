import React from "react"
import { Link } from "gatsby"
import { Jumbotron, Button } from "react-bootstrap"

export default () => (

  <Jumbotron>

    <h2>Conseils pour générer des revenus financiers</h2>

    <p className="text-justify font-weight-light">J'ai créé ce blog pour partager mes connaissances et mon expérience personnelle, pour qui voudrait devenir financièrement autonome. La condition du succès repose sur la constitution d'une épargne financière, qui va permettre au fils du temps, de générer suffisamment d'intérêts pour couvrir les dépenses.</p>

    <Link to="/prologue"><Button variant="outline-primary">Introduction</Button></Link>

  </Jumbotron>

)
