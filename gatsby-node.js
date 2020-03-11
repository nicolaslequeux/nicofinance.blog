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
      value: slug,
    })
  
  }

}

// CREATE PAGES FOR MARKDOWNS
// --------------------------------------
exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions
  
  // get md files whose post page will be created
  const result = await graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: fields___slug}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
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
  const mds = result.data.allMarkdownRemark.edges

  // Create page with previous, next variable populated
  mds.forEach((md, index) => {

    const previous = index === mds.length - 1 ? null : mds[index +1].node
    const next = index === 0 ? null : mds[index - 1].node

    createPage({
      path: md.node.fields.slug,
      component: path.resolve(`./src/templates/prologue-post.js`),
      context: {
        slug: md.node.fields.slug,
        previous,
        next
      },
    })

  })


}


