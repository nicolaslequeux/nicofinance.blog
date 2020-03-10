import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListChapters = ({ data }) => {

  // const chapters = data.allMarkdownRemark.edges.filter(
  //   name => name.node.fields.sourceName === 'content'
  // );

  const chapters = data.allMarkdownRemark.edges.filter(
    name => name.node.fields.sourceName === 'preambule'
  );

  return (

    <Layout>

      <SEO title="Page two" />

      <h1>Hi from the second page</h1>

      { chapters.map((chapter) => (
          <p>{chapter.node.frontmatter.title}</p>
        )
      )}

      {/* {chapters.map(({ chapter }) => (

        // <Card
        //   key={node.id}
        //   title={node.frontmatter.title}
        //   excerpt={node.excerpt}
        //   date={node.frontmatter.date}
        //   slug={node.fields.slug}
        //   cover={node.frontmatter.cover.childImageSharp.fluid}
        // />

      // <p>article : {chapter.frontmatter.title}</p>
      <p>hi</p>

      ))} */}

      <Link to="/">Go back to the homepage</Link>

    </Layout>

  )
}

export const queryAll = graphql`
  query {
    allMarkdownRemark {
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

export default ListChapters
