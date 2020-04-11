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
            resolve()
        })
    })
}
