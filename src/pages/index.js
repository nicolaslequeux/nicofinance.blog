import React from "react"
import Hero from "../components/hero"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { FaSignal } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>

    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Hero/>

      <Container>

        <Row className="d-flex justify-content-around">

        <div>
          <Col className="text-center p-3">
            <Card style={{ width: "18rem" }}>
              <Card.Header as="h3">PP Harry Browne</Card.Header>
              <Card.Body>
              <FaSignal size={64}/>
                <Card.Text>
                  Permanent Portfolio
                </Card.Text>
                <a href="https://nicolaslequeux.shinyapps.io/nlx-pp-input/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-warning">Simuler</Button>
                </a>
              </Card.Body>
            </Card>    
          </Col>
        </div>

        <div>
          <Col className="text-center p-3">
            <Card style={{ width: "18rem" }}>
              <Card.Header as="h3">GBM</Card.Header>
              <Card.Body>
              <FaSignal size={64}/>
                <Card.Text>
                  Global Balanced Momentum
                </Card.Text>
                <a href="https://nicolaslequeux.shinyapps.io/nlx-gbm-input/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-warning">Simuler</Button>
                </a>
              </Card.Body>
            </Card>    
          </Col>
        </div>

        <div>
          <Col className="text-center p-3">
            <Card style={{ minWidth: '18rem' }}>
              <Card.Header as="h3">VAA</Card.Header>
              <Card.Body>
              <FaSignal size={64}/>
                <Card.Text>
                  Vigilant Asset Allocation
                </Card.Text>
                <a href="https://nicolaslequeux.shinyapps.io/nlx-vaa-input/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-warning">Simuler</Button>
                </a>
              </Card.Body>
            </Card>    
          </Col>
        </div>

        </Row>

      </Container>


  </Layout>

)

export default IndexPage
