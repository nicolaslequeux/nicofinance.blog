import React, { Component } from "react";
import { Container, Button, Card } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Spinner from "../ui/spinner/spinner";

class strategies extends Component {
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

      <SEO title="Stratégies" />
      
      <Container style={{ maxWidth: "700px", margin: "auto" }}>

        <h2 className="text-center pt-4">Suivi des stratégies</h2>
        <p className="text-center">Feuilles de calcul Google Sheet - Performances à 1-12-36 mois</p>
        <br></br>

        {/* STRATEGIE #1 */}
        <h4 className="text-center pb-3">Portefeuille Permament de Browne</h4>
        <div className="text-center" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "100px", left: "320px" }}>
            { this.state.spinner ? <Spinner /> : null }
          </div>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLxbXq7cxo596eRQ5ACZm2XAPHV9xGUR4G_luLTgmLtof4N_XFgFDyBSgGF3WemptwywXL4mP740Aa/pubhtml?gid=1224187303&amp;single=true&amp;widget=true&amp;headers=false"
            title="PP-Calcul"
            width="640"
            height="600"
            onLoad={this.hideSpinner}
          ></iframe>
        </div>
        <p className="text-center font-weight-light pt-3">Source: Harry Browne, <a href="https://www.amazon.com/gp/product/031226321X/" target="_blank" rel="noopener noreferrer">Fail-Safe Investing</a> - 1999</p>
        <br></br>

        {/* STRATEGIE #2 */}
        <h4 className="text-center pb-3">Global Equity/Balanced Momentum</h4>
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
        <p className="text-center font-weight-light pt-3">Source: Gary Antonacci, <a href="https://www.amazon.com/Dual-Momentum-Investing-Innovative-Strategy/dp/0071849440" target="_blank" rel="noopener noreferrer">Dual Momentum Investing</a> - Novembre 2014</p>
        <br></br>

        {/* STRATEGIE #3 */}
        <h4 className="text-center pb-3">Vigilant Asset Allocation</h4>
        <div className="text-center" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "100px", left: "320px" }}>
            { this.state.spinner ? <Spinner /> : null }
          </div>
          <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQq2naS1KpG_SjtEe5Oa2CKW-0ekt009n-QLCD3V0lOG0wR0EULDEb0HI-yL9KvZnMp127s2BuoMrQZ/pubhtml?gid=940276903&amp;single=true&amp;widget=true&amp;headers=false"
              title="VAA"
              width="660"
              height="600"
              onLoad={this.hideSpinner}
            ></iframe>
        </div>
        <p className="text-center font-weight-light pt-3">Source: Keller & Keuning, <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3002624" target="_blank" rel="noopener noreferrer">Vigilant Asset Allocation</a> - July 2017</p>
        <br></br>
        
      </Container>

      <hr></hr>

    </Layout>

    )

  }
}

export default strategies;
