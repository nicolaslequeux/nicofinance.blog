import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { FaSignal } from "react-icons/fa"
import { Helmet } from "react-helmet"

import BlogCard from "../components/card"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = ({ data }) => {

  const posts = data.allMarkdownRemark.edges;
  
  return (

    <Layout pageInfo={{ pageName: "index" }}>

      <Helmet>

       {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8EE8WL2B96"></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());  
        gtag('config', 'G-8EE8WL2B96');
      `}
      </script>

      </Helmet>

      <SEO title="nicofinance.blog" />

      <Hero/>

        <Container>

          <Row className="d-flex justify-content-around">

            <div>
              <Col className="text-center p-3">
                <Card style={{ width: "17rem" }}>
                  <Card.Header as="h3">PP Browne</Card.Header>
                  <Card.Body>
                  <FaSignal size={64}/>
                    <Card.Text>
                      Portefeuille Permanent
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                      {/* <a href="/pp-browne">
                        <Button variant="outline-info">Comprendre</Button>
                      </a> */}
                      <a href="https://nicolaslequeux.shinyapps.io/nlx-pp-input/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-info">Simuler</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>    
              </Col>
            </div>

            <div>
              <Col className="text-center p-3">
                <Card style={{ width: "17rem" }}>
                  <Card.Header as="h3">GEM-GBM</Card.Header>
                  <Card.Body>
                  <FaSignal size={64}/>
                    <Card.Text>
                      Global Balanced Momentum
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                      {/* <a href="/gem-gbm">
                          <Button variant="outline-info">Comprendre</Button>
                      </a> */}
                      <a href="https://nicolaslequeux.shinyapps.io/nlx-gbm-input/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-info">Simuler</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>    
              </Col>
            </div>

            <div>
              <Col className="text-center p-3">
                <Card style={{ minWidth: '17rem' }}>
                  <Card.Header as="h3">VAA</Card.Header>
                  <Card.Body>
                  <FaSignal size={64}/>
                    <Card.Text>
                      Vigilant Asset Allocation
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                      {/* <a href="/vaa">
                          <Button variant="outline-info">Comprendre</Button>
                      </a> */}
                      <a href="https://nicolaslequeux.shinyapps.io/nlx-vaa-input/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-info">Simuler</Button>
                      </a>
                    </div>                  
                  </Card.Body>
                </Card>    
              </Col>
            </div>

          </Row>

          <Row>
            <Col style={{ maxWidth: "800px", margin: "auto" }}>

            <h2 className="text-center p-4">Mes derniers posts</h2>

            { posts.map(({ node }) => (
              <BlogCard
                key={node.id}
                title={node.frontmatter.title}
                excerpt={node.excerpt}
                date={node.frontmatter.date}
                slug={node.fields.slug}
                timeToRead={node.timeToRead}
                cover={node.frontmatter.cover.childImageSharp.fluid}
              />
            ))}

            </Col>
          </Row>
          
        </Container>

    </Layout>
  )


}


export const latestPosts = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      filter: {fields: {sourceName: {eq: "blog"}}},
      limit: 3) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY", locale: "fr")
              cover {
                childImageSharp {
                  fluid(maxWidth: 125, fit: COVER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
              sourceName
            }
            excerpt
            timeToRead
            id
          }
        }
      }
  }

`



export default IndexPage
