import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/Layout"
import { motion } from "framer-motion"
import { withPrefix, graphql } from "gatsby"
import Img from 'gatsby-image'
import { StyledLink } from "../css/StyledLink.js"

import '../css/webflow.css'
import '../css/normalize.css'
import '../css/imported-styles.css'
import '../css/custom-styles.css'

export const query = graphql`
query StaffQuery {
    allDatoCmsStaffMember(filter: {profilePhoto: {size: {gt: 10}}}) {
        edges {
          node {
            name
            profilePhoto {
                fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsSizes
            }
            }
            bio
            email
            id
            major
            role
            slug
          }
        }
      }
  }
`

const StaffPage = ({ data }) => (
    <div class="body">
        <Layout>
            <Helmet>
                <script src={withPrefix('webflow.js')} type="text/javascript" />
                <title>The Pub - Staff</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />
                <link href="css/normalize.css" rel="stylesheet" type="text/css" />
                <link href="css/webflow.css" rel="stylesheet" type="text/css" />
                <link href="css/the-pub-2.webflow.css" rel="stylesheet" type="text/css" />
                <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
                <script src="https://use.typekit.net/cwm8iqt.js" type="text/javascript"></script>
                <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
                <link rel="stylesheet" href="https://use.typekit.net/ggb0fjm.css" />
            </Helmet>
            <div data-w-id="63b8498e-1639-aebb-9ce4-f79485e68895" class="page">
                <section class="page-section content">
                    <div class="page-heading-parent">
                        <h1 class="large-title">Meet the Team.</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="collection-list-wrapper w-dyn-list">
                        <div class="content-grid staff w-dyn-items">
                            {data.allDatoCmsStaffMember.edges.map(({ node: staffMember }) => (
                                <StyledLink to={`/staff/${staffMember.slug}`}>
                                    <div key={staffMember.id} class="card w-dyn-item" onHoverStart={() => console.log('Hover starts')}>
                                        <Img id="w-node-dd9d58d9ddea-6a777c53" className="card-cover-image" fluid={staffMember.profilePhoto.fluid} initial='false' />
                                        <div id="w-node-dd9d58d9ddeb-6a777c53" class="card-info">
                                            <div class="card-title staff-name">{staffMember.name}</div>
                                            <div class="staff-outline" />
                                        </div>
                                    </div>
                                </StyledLink>
                            ))}
                        </div>
                        <div class="empty-state-5 w-dyn-empty">
                            <div>No items found.</div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default StaffPage