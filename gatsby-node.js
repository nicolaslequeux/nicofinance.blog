const path = require(`path`)

// Je require la function "createFilePath" du module "garsby-source-filesystem"
const { createFilePath } = require(`gatsby-source-filesystem`)

// CREATE 'SLUG' FIELD TO THE NODE OBJECT
// --------------------------------------
exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {

    // helper function from `gatsby-source-filesystem`  
    const slug = createFilePath({ node, getNode })
  
    createNodeField({
      node,
      name: `slug`,
      value: `/prologue${slug}`,
    })
  
  }

}

// CREATE PAGES FOR MARKDOWNS
// --------------------------------------
exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  
  // get md files whose prologue pages will be created
  const resultPrologue = await graphql(`
    {
      allMarkdownRemark(
        sort: {fields: fields___slug, order: DESC},
        filter: {fields: {sourceName: {eq: "prologue"}}}) {
          totalCount
          edges {
            node {
              frontmatter {
                date
                title
              }
              fields {
                slug
                sourceName
              }
            }
          }
        }
    }
  `)

    // get md files whose blog pages will be created
    const resultBlog = await graphql(`
    {
      allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC},
        filter: {fields: {sourceName: {eq: "blog"}}}) {
          totalCount
          edges {
            node {
              frontmatter {
                date
                title
              }
              fields {
                slug
                sourceName
              }
            }
          }
        }
    }
  `)

  // Je stock la "array" résultat dans une variable
  const mdPrologue = resultPrologue.data.allMarkdownRemark.edges
  const mdBlog = resultBlog.data.allMarkdownRemark.edges

  // Create prologue pages with previous, next variable populated
  mdPrologue.forEach((md, index) => {

    const previous = index === mdPrologue.length - 1 ? null : mdPrologue[index +1].node
    const next = index === 0 ? null : mdPrologue[index - 1].node

    createPage({
      path: md.node.fields.slug,
      component: path.resolve(`./src/templates/prologue-part.js`),
      context: {
        slug: md.node.fields.slug,
        previous,
        next
      },
    })

  })

    // Create blog pages with previous, next variable populated
    mdBlog.forEach((md, index) => {

      const previous = index === mdBlog.length - 1 ? null : mdBlog[index +1].node
      const next = index === 0 ? null : mdBlog[index - 1].node
  
      createPage({
        path: md.node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: md.node.fields.slug,
          previous,
          next
        },
      })
  
    })


}


