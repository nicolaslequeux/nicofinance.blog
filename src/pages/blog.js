import React, { useState } from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"

import Card from "../components/card"

import { Container, Modal, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import addToMailChimp from "gatsby-plugin-mailchimp"


const ListPosts = ({ data }) => {

  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(true);

  const inputChangeHandler = (e) => {
    console.log(e.currentTarget.value);
    setEmail(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email: ", email)
    addToMailChimp(email)
      .then((data) => {
        console.log("data", data);
        setShowForm(false);
        handleShow();
      })
      .catch((error) => {
        console.log("error", error);
      })
  }


  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // const posts = data.allMarkdownRemark.edges.filter(
  //   name => name.node.fields.sourceName === 'prologue'
  // );
  // Je fais le filtre dans la graphql query avec le champs sourceName

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>

      <SEO title="Blog Liste" />
      
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

      {
        showForm ? (
          <form onSubmit={submitHandler}>
          <div style={{ textAlign: 'center' }}>
            <p>Si vous souhaitez être informé des nouvelles publications</p>
            <input
              placeholder="Adresse email"
              name="email"
              type="email"
              onChange={inputChangeHandler}
            />
            <button type="submit">Souscrire</button>
          </div>
        </form>
        ) : null
      }

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>Votre inscription a bien été pris en compte</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        
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
                  fluid(maxWidth: 200, fit: COVER) {
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
