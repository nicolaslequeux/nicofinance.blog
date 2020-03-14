import React from "react"
import { graphql, Link } from "gatsby"

import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListParts = ({ data }) => {

  const parts = data.allMarkdownRemark.edges.filter(
    name => name.node.fields.sourceName === 'prologue'
  );

  let count = 0;

  return (
    <Layout>
      <SEO title="Prologue" />

      <Container style={{ maxWidth: "700px", margin: "auto" }}>

        <h2 className="text-center pt-4 pb-3">Liste des chapitres</h2>

        <p className="text-justify">La lecture de ce petit exposé, vous donnera en moins d'une heure, les éléments nécessaires à la compréhension des articles de ce blog.</p>

        <div style={{ width: "320px", margin: "auto"}}>
          { parts.map((part) => {
              count++;
              return (
                <div key={part.node.id} className="py-1">
                  <Link
                    to={part.node.fields.slug}
                    className="text-dark"
                    >
                      {count} - {part.node.frontmatter.title}
                  </Link>
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
    allMarkdownRemark(sort: {fields: fields___slug, order: ASC}) {
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
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

export default ListParts
