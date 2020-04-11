const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsStaffMember {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsIssue {
            edges {
              node {
                slug
              }
            }
          }
          allDatoCmsBlogPost {
            edges {
              node {
                slug
              }
            }
          }
      }
    `).then(result => {
      result.data.allDatoCmsStaffMember.edges.map(({ node: staff }) => {
        createPage({
          path: `staff/${staff.slug}`,
          component: path.resolve(`./src/templates/staff.js`),
          context: {
            slug: staff.slug,
          },
        })
      })
      result.data.allDatoCmsBlogPost.edges.map(({ node: post }) => {
        createPage({
          path: `blog/${post.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.slug,
          },
        })
      })
      result.data.allDatoCmsIssue.edges.map(({ node: issue }) => {
        createPage({
          path: `issues/${issue.slug}`,
          component: path.resolve(`./src/templates/issue.js`),
          context: {
            slug: issue.slug,
          },
        })
      })
      resolve()
    })
  })
}
