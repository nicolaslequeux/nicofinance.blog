import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import Card from "../components/card"

import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListPosts = ({ data }) => {

  // const posts = data.allMarkdownRemark.edges.filter(
  //   name => name.node.fields.sourceName === 'prologue'
  // );
  // Je fais le filtre dans la graphql query avec le champs sourceName

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blog" />
      <Container style={{ maxWidth: "700px", margin: "auto" }}>
        <h2 className="text-center pt-4 pb-3">Liste des posts</h2>
        <div style={{ width: "100%", margin: "auto"}}>
          { posts.map((post) => {
              return (
                <div key={post.node.id} className="py-1">
                  <Card
                    title={post.node.frontmatter.title}
                    excerpt={post.node.excerpt}
                    date={post.node.frontmatter.date}
                    slug={post.node.fields.slug}
                    timeToRead={post.node.timeToRead}
                    cover={post.node.frontmatter.cover.childImageSharp.fluid}
                  />
                  <br></br>
                </div>
              )
            })
          }
        </div>
      </Container>
    </Layout>
  )
}

export const queryAll = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC},
      filter: {fields: {sourceName: {eq: "blog"}}}) {
        totalCount
        edges {
          node {
            id
            fields {
              slug
              sourceName
            }
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
            excerpt
            timeToRead
          }
        }
    }
  }
`

export default ListPosts
