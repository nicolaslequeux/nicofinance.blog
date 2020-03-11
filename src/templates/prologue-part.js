import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  
  const chapitre = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout id="top">
      <div>
        <h1>{chapitre.frontmatter.title}</h1>
        <hr></hr>
          <div dangerouslySetInnerHTML={{ __html: chapitre.html }} className="text-justify" />
          <div className="py-2"></div>
        <hr></hr>
      </div>
      <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                style={{textDecoration: "none"}}
                className="text-center text-dark">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            <Link
              to="/prologue"
              rel="prologue"
              style={{textDecoration: "none"}}
              className="text-center text-dark">
              Retour à la liste
            </Link>
          </li>
          <li>
            {next && (
              <Link
                to={next.fields.slug}
                rel="next"
                style={{textDecoration: "none"}}
                className="text-center text-dark">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
    </Layout>
  )
}

// Only page query accept variable as argument
// when query is resolved, return the data object
// the page query looks inside context populated by gatsby-node 
// to find the slug variable passed as argument !!!!
//
// markdownRemark() is like a function taking arguments
// the name of the argument is "fields"
// to pass the slug value to fields, we pass the object {slug}
// query($slug) is declaring a variable of type string in graphql to query
// the String! asks graphql to throw an error is the variable is not provided

export const queryPost = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      timeToRead
    }
  }
`
