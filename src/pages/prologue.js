import React from "react"
import { graphql, Link } from "gatsby"

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

      <h2>Liste des chapitres</h2>

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

      <hr></hr>

      <Link to="/">Go back to the homepage</Link>

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
