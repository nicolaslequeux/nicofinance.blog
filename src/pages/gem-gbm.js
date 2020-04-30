import React, { Component } from "react"
import { Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spinner from "../ui/spinner/spinner";

class gemGbm extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      spinner: true
    })
  }

  hideSpinner = () => {
    this.setState({spinner: false});
  };


  render() {

    return(

      <Layout>
        <SEO title="Portefeuille GEM/GBM" />
        <Container style={{ maxWidth: "700px", margin: "auto" }}>

          <h2 className="text-center pt-4 pb-3">Global Equity/Balanced Momentum</h2>
          <p className="text-center">Feuille de calcul Google Sheet - Performances à 1-12-36 mois</p>
        
          <div className="text-center" style={{ position: "relative" }}>

            <div style={{ position: "absolute", top: "100px", left: "320px" }}>
              { this.state.spinner ? <Spinner /> : null }
            </div>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTS2vl73kDI6-6sriLmCdLiqN03QRghntsZUhTKkTfsBYMazRrkREIZXkj-zEFdSE6nGXrgBxtL2wFA/pubhtml?gid=495218194&amp;single=true&amp;widget=true&amp;headers=false"
              title="GEM-GBM"
              width="660"
              height="600"
              onLoad={this.hideSpinner}
            ></iframe>

          </div>

          <br></br>

          <p>Le meilleur moyen de comprendre une stratégie, c'est encore de la back-tester et d'étudier son comportement passé. A cet effet j'ai développé un simulateur en ligne:</p>

          <div className="text-center m-4">
            <a href="https://nicolaslequeux.shinyapps.io/nlx-gbm-input/" target="_blank" rel="noopener noreferrer">
              <Button variant="success">
                Simulateur GEM/GBM
              </Button>
            </a>
          </div>

          <h5 className="text-center p-3">Résumé de la stratégie GEM/GBM</h5>

          <p className="text-justify">The Global Balanced Momentum (GBM) is a rules-based approach using relative and absolute momentum applied to S&P 500 (SPY), the MSCI All Country World ex-US (VEU) and the Barclays Capital US Aggregate Bond (AGG). Relative momentum looks for strength relative to other assets, while absolute momentum looks for positive past returns in excess of US Treasury bill returns (BIL). A constant allocation is maintained in the bond allocation according to the investor appetite. The default model uses a 12-month relative momentum with a 30% permanent allocation to bonds.</p>

          <p>Gary Antonacci, <a href="https://www.amazon.com/Dual-Momentum-Investing-Innovative-Strategy/dp/0071849440" target="_blank" rel="noopener noreferrer">Dual Momentum Investing</a>: An Innovative Strategy for High Returns with Lower Risk, November 2014</p>

          <br></br>
          
      </Container>
      <hr></hr>
    </Layout>
  )

  }
}

export default gemGbm;
