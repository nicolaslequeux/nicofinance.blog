import React from "react"
import styled from "styled-components"
import { Container, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Lien = styled.a`
  display: block;
  padding-bottom: 5px;
  color: black;
  &:hover {
    color: red;
    text-decoration: none;
  }
  &:visisted {
    color: black;
  }
`

const Liens = () => (

  <Layout>

    <SEO title="Liens" />

    <Container style={{ maxWidth: "700px", margin: "auto" }}>

      <h2 className="text-center p-4">Liens intéressants</h2>

      <Card className="mb-3">
        <Card.Header as="h5">Economie</Card.Header>
        <Card.Body>
          <Card.Text>
            <Lien href="http://www.tradingeconomics.com/" target="_blank" rel="noopener noreferrer">Trading Economics</Lien>
            <Lien href="https://www.markiteconomics.com/Public/Release/PressReleases" target="_blank" rel="noopener noreferrer">PMI Data</Lien>
            <Lien href="https://research.stlouisfed.org/fred2/series/UNRATE#" target="_blank" rel="noopener noreferrer">US Civilian Unemployment Rate (UNRATE)</Lien>
            <Lien href="https://fred.stlouisfed.org/series/USSLIND" target="_blank" rel="noopener noreferrer">Leading Index for the United States (USSLIND)</Lien>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-3">
        <Card.Header as="h5">Taux</Card.Header>
        <Card.Body>
          <Card.Text>
            <Lien href="https://fred.stlouisfed.org/series/DGS30" target="_blank" rel="noopener noreferrer">30-Year Treasury Constant Maturity Rate (DGS30)</Lien>
            <Lien href="https://fred.stlouisfed.org/series/DGS10" target="_blank" rel="noopener noreferrer">10-Year Treasury Constant Maturity Rate (DGS10)</Lien>
            <Lien href="https://fred.stlouisfed.org/series/DGS2" target="_blank" rel="noopener noreferrer">2-Year Treasury Constant Maturity Rate (DGS2)</Lien>
            <Lien href="https://fred.stlouisfed.org/series/DGS1" target="_blank" rel="noopener noreferrer">1-Year Treasury Constant Maturity Rate (DGS1)</Lien>
            <Lien href="https://www.bloomberg.com/markets/rates-bonds/government-bonds/us" target="_blank" rel="noopener noreferrer">US Rates</Lien>
            <Lien href="https://fred.stlouisfed.org/series/T10Y3M" target="_blank" rel="noopener noreferrer">10-Year Treasury Constant Maturity Minus 3-Month Treasury Constant Maturity</Lien>
            <Lien href="https://fred.stlouisfed.org/series/USSLIND" target="_blank" rel="noopener noreferrer"></Lien>
            <Lien href="https://fred.stlouisfed.org/series/T10Y2Y" target="_blank" rel="noopener noreferrer">10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity</Lien>
            <Lien href="https://fred.stlouisfed.org/graph/?g=j3d3" target="_blank" rel="noopener noreferrer">Germany 10Y Government Bond - Italy 10Y Government Bond</Lien>
            <Lien href="https://www.bloomberg.com/quote/GBTPGR10:IND" target="_blank" rel="noopener noreferrer">Italy Generic Govt 10Y Yield</Lien>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-3">
        <Card.Header as="h5">Expatriation - Liberté - Fiscalité</Card.Header>
        <Card.Body>
          <Card.Text>

            <Lien href="https://dits.deloitte.com/#TaxGuides" target="_blank" rel="noopener noreferrer">Deloitte Tax Guides</Lien>

            <Lien href="http://taxsummaries.pwc.com/ID/tax-summaries-home" target="_blank" rel="noopener noreferrer">pwc Worldwide Tax Summaries</Lien>

            <Lien href="http://www.ey.com/gl/en/services/tax/global-tax-guide-archive" target="_blank" rel="noopener noreferrer">EY Tax Guide Archive</Lien>

            <Lien href="http://www.worldwide-tax.com/" target="_blank" rel="noopener noreferrer">Worldwide Tax</Lien>

            <Lien href="https://expatexplorer.hsbc.com/country-guides/" target="_blank" rel="noopener noreferrer">HSBC Expat Explorer</Lien>

            <Lien href="http://www.globalpropertyguide.com/" target="_blank" rel="noopener noreferrer">Global Property Guide</Lien>

            <Lien href="http://taxsummaries.pwc.com/ID/tax-summaries-home" target="_blank" rel="noopener noreferrer"></Lien>

            <Lien href="http://www.heritage.org/index/ranking" target="_blank" rel="noopener noreferrer">Economic Freedom Index</Lien>

            <Lien href="http://www.doingbusiness.org/" target="_blank" rel="noopener noreferrer">Doing Business - The World Bank</Lien>

            <Lien href="https://www.numbeo.com/cost-of-living/" target="_blank" rel="noopener noreferrer">Numbeo.com (cost-of-living)</Lien>

          </Card.Text>
        </Card.Body>
      </Card>

      {/* <Lien href="https://us.econoday.com/byweek.asp?cust=us" target="_blank" rel="noopener noreferrer">Econoday Calendars</Lien>
      <Lien href="http://finviz.com/" target="_blank" rel="noopener noreferrer">finviz</Lien>
      <Lien href="http://www.etf.com/" target="_blank" rel="noopener noreferrer">ETF.com</Lien>
      <Lien href="http://www.forexfactory.com/" target="_blank" rel="noopener noreferrer">Forex Factory</Lien>
      <Lien href="http://www.optimalmomentum.com/performance.html" target="_blank" rel="noopener noreferrer">Dual Momentum Performance</Lien>
      <Lien href="http://stockcharts.com/freecharts/perf.php?spy,veu,agg,shy" target="_blank" rel="noopener noreferrer">GEM (SPY/VEU/AGG/SPY)</Lien>
      <Lien href="https://www.portfoliovisualizer.com/" target="_blank" rel="noopener noreferrer">Portfolio Visualizer</Lien>
      <Lien href="https://portfoliocharts.com/" target="_blank" rel="noopener noreferrer">Portfolio Charts</Lien>
      <Lien href="http://www.macrotrends.net/" target="_blank" rel="noopener noreferrer">Macro Trends</Lien>
      <Lien href="http://stockcharts.com/freecharts/" target="_blank" rel="noopener noreferrer">Stock Charts</Lien>
      <Lien href="https://www.omnicalculator.com/" target="_blank" rel="noopener noreferrer">Omni Calculator</Lien> */}

    </Container>

  </Layout>
)

export default Liens
