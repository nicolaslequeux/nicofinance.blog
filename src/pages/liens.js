import React from "react"
import { Link } from "gatsby"
import { Container, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Liens = () => (

  <Layout>

    <SEO title="Liens" />

    <Container>

    <h1>Hi from the second page</h1>

    <p>Welcome to page 2</p>
      <h2>Economie</h2>
    <div className="m-0 p-0">


      <p><a href="https://us.econoday.com/byweek.asp?cust=us" target="_blank" rel="noopener noreferrer">Econoday Calendars</a></p>
      <p><a href="http://www.forexfactory.com/" target="_blank" rel="noopener noreferrer">Forex Factory</a></p>
      <p><a href="http://finviz.com/" target="_blank" rel="noopener noreferrer">finviz</a></p>
      <p><a href="http://www.tradingeconomics.com/" target="_blank" rel="noopener noreferrer">Trading Economics</a></p>
      <p><a href="http://www.etf.com/" target="_blank" rel="noopener noreferrer">ETF.com</a></p>
      <p><a href="https://www.markiteconomics.com/Public/Release/PressReleases" target="_blank" rel="noopener noreferrer">PMI Data</a></p>
      <p><a href="https://research.stlouisfed.org/fred2/series/UNRATE#" target="_blank" rel="noopener noreferrer">US Civilian Unemployment Rate (UNRATE)</a></p>

    </div>




    </Container>


    <p><a href="https://fred.stlouisfed.org/series/USSLIND" target="_blank" rel="noopener noreferrer">Leading Index for the United States (USSLIND)</a></p>
    <p><a href="https://fred.stlouisfed.org/series/T10Y3M" target="_blank" rel="noopener">10-Year Treasury Constant Maturity Minus 3-Month Treasury Constant Maturity</a></p>
    <p><a href="https://fred.stlouisfed.org/series/USSLIND" target="_blank" rel="noopener noreferrer"></a></p>
    <p><a href="https://fred.stlouisfed.org/series/T10Y2Y" target="_blank" rel="noopener">10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity</a></p>
    <p><a href="https://fred.stlouisfed.org/graph/?g=j3d3" target="_blank" rel="noopener">Germany 10Y Government Bond - Italy 10Y Government Bond</a></p>
    <p><a href="https://www.bloomberg.com/quote/GBTPGR10:IND" target="_blank" rel="noopener">Italy Generic Govt 10Y Yield</a></p>
    <p><a href="https://fred.stlouisfed.org/series/DGS30" target="_blank" rel="noopener">30-Year Treasury Constant Maturity Rate (DGS30)</a></p>
    <p><a href="https://fred.stlouisfed.org/series/DGS10" target="_blank" rel="noopener">10-Year Treasury Constant Maturity Rate (DGS10)</a></p>
    <p><a href="https://fred.stlouisfed.org/series/DGS2" target="_blank" rel="noopener">2-Year Treasury Constant Maturity Rate (DGS2)</a></p>
    <p><a href="https://fred.stlouisfed.org/series/DGS1" target="_blank" rel="noopener">1-Year Treasury Constant Maturity Rate (DGS1)</a></p>
    <p>Bloomberg US Bonds : <a href="https://www.bloomberg.com/markets/rates-bonds/government-bonds/us" target="_blank" rel="noopener">US Rates</a></p>
    <p><a href="http://www.optimalmomentum.com/performance.html">Dual Momentum Performance</a></p>
    <p><a href="http://stockcharts.com/freecharts/perf.php?spy,veu,agg,shy" target="_blank" rel="noopener noreferrer">GEM (SPY/VEU/AGG/SPY)</a></p>

    <p><a href="http://stockcharts.com/freecharts/perf.php?schb,schf,schz,shy" target="_blank" rel="noopener noreferrer">GEM (Schwab Free)</a></p>
    <p><a href="http://stockcharts.com/freecharts/perf.php?schx,schf,schz,shy" target="_blank" rel="noopener noreferrer"></a></p>
    <p><a href="https://www.portfoliovisualizer.com/" target="_blank" rel="noopener noreferrer">Portfolio Visualizer</a></p>
    <p><a href="https://portfoliocharts.com/" target="_blank" rel="noopener">Portfolio Charts</a></p>
    <p><a href="http://www.macrotrends.net/" target="_blank" rel="noopener noreferrer">Macro Trends</a></p>
    <p><a href="http://stockcharts.com/freecharts/" target="_blank" rel="noopener noreferrer">Stock Charts</a></p>
    <p><a href="https://dits.deloitte.com/#TaxGuides" target="_blank" rel="noopener">Deloitte Tax Guides</a></p>
    <p><a href="http://taxsummaries.pwc.com/ID/tax-summaries-home" target="_blank" rel="noopener">pwc Worldwide Tax Summaries</a></p>
    <p><a href="http://www.ey.com/gl/en/services/tax/global-tax-guide-archive" target="_blank" rel="noopener">EY Tax Guide Archive</a></p>    
    <p><a href="http://www.worldwide-tax.com/" target="_blank" rel="noopener">Worldwide Tax</a></p>
    <p><a href="https://expatexplorer.hsbc.com/country-guides/" target="_blank" rel="noopener">HSBC Expat Explorer</a></p>
    <p><a href="https://www.numbeo.com/cost-of-living/" target="_blank" rel="noopener">Numbeo.com (cost-of-living)</a></p>
    <p><a href="https://www.omnicalculator.com/" target="_blank" rel="noopener">Omni Calculator</a></p>
    <p><a href="http://www.globalpropertyguide.com/" target="_blank" rel="noopener">Global Property Guide</a></p>
    <p><a href="http://taxsummaries.pwc.com/ID/tax-summaries-home"></a></p>
    <p><a href="http://www.heritage.org/index/ranking" target="_blank" rel="noopener">Economic Freedom Index</a></p>
    <p><a href="http://www.doingbusiness.org/" target="_blank" rel="noopener">Doing Business - The World Bank</a></p>

    <hr></hr>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default Liens
