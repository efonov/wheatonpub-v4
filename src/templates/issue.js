import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import Img from 'gatsby-image'
import { withPrefix, graphql } from "gatsby"
import { StyledLink } from "../css/StyledLink.js"

export const query = graphql`
query IssueQuery($slug: String!) {
    datoCmsIssue(slug: {eq: $slug}) {
      slug
      releaseDate
      issueTheme
      contriubtors
      letterFromTheEditorNode {
        childMarkdownRemark {
          html
        }
      }
      identifier
      coverImage {
        fluid(maxWidth: 1000, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
      }
    }
  }
`

const IssueTemplate = ({ data }) => (
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
            <div class="page">
                <section class="page-section content">
                    <div class="card issue template">
                        <div class="image-card w-inline-block">
                            <Img class="card-cover-image issue" fluid={data.datoCmsIssue.coverImage.fluid} initial='false' />
                            <div class="card-info issue">
                                <div class="card-title">{data.datoCmsIssue.identifier}</div>
                                <div class="card-subtitle">
                                    <div class="text-block-7">{data.datoCmsIssue.releaseDate}</div>
                                    <div class="card-subtitle-line"></div>
                                </div>
                            </div>
                        </div>
                        <div class="details">
                            <h1 class="title">{data.datoCmsIssue.issueTheme}</h1>
                            <div class="issue-info">
                                <div><strong>Contributors:</strong></div>
                                <div class="contents w-richtext">{data.datoCmsIssue.contriubtors}</div>
                            </div>
                            <div class="issue-buttons bottom">
                                <a href="#" class="simple-button fill w-inline-block">
                                    <div>Read </div>
                                    <div></div>
                                </a>
                                <StyledLink to="/issues"><div class="simple-button _2nd w-inline-block">
                                    Back to Issues
                                </div></StyledLink>
                            </div>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="small-subtiti"><strong>Letter From The Editor:</strong></div>
                        <div class="rich-text-block template w-richtext" dangerouslySetInnerHTML={{
                            __html: data.datoCmsIssue.letterFromTheEditorNode.childMarkdownRemark.html,
                        }} />
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default IssueTemplate