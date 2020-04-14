import React from "react"
import { Container } from "react-bootstrap"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

export default ({ data, pageContext }) => {
  
  const post = data.markdownRemark
  const { previous, next } = pageContext

  const baseURL = 'http://nicofinance.blog'
  
  const disqusShortname = "nicofinanceblog";
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.frontmatter.title,
    url: baseURL + pageContext.slug
  };

  return (

    <Layout id="top">

      <SEO
        title="nicofinance.blog - Blog"
        description={post.frontmatter.title}
        image={post.frontmatter.cover.publicURL}
      />

      <Container style={{ maxWidth: "700px", margin: "auto" }}>

        <div className="py-4 text-center">
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.date}</p>
          <hr></hr>
            <div dangerouslySetInnerHTML={{ __html: post.html }} className="text-justify" />
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
              to="/blog"
              rel="blog"
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

        <br></br>
        <hr></hr>
        
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

        {/* <h3 className="text-center">
            Share this post
          </h3>
          <div className="text-center social-share-links">
            <ul>

              <li>
                <a href={'https://www.facebook.com/sharer/sharer.php?u' + baseURL + pageContext.slug } className="facebook" target="_blank" rel="noopener noreferrer">facebook</a>
              </li>
              
              <li>
                <a href={
                  'https://www.twitter.com/share?url='
                  + baseURL
                  + pageContext.slug
                  + '&text='
                  + post.frontmatter.title
                  + '&via='
                  + 'nicofinance.blog'
                  } className="twitter" target="_blank" rel="noopener noreferrer">twitter</a>
              </li>

              <li>
                <a href={'https://www.linkedin.com/shareArticle?=' + baseURL + pageContext.slug } className="linkedin" target="_blank" rel="noopener noreferrer">linkedIn</a>
              </li>

            </ul>
          </div> */}

        </Container>

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
        date(formatString: "DD MMMM YYYY", locale: "fr")
        title
        cover {
          publicURL
          childImageSharp {
            fluid(maxWidth: 125, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
