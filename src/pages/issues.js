import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import Img from 'gatsby-image'
import { StyledLink } from "../css/StyledLink"

export const query = graphql`
query IssuesQuery {
    allDatoCmsIssue {
      edges {
        node {
          slug
          releaseDate
          issueTheme
          contriubtors
          coverImage {
            fluid(maxWidth: 450, imgixParams: {fm: "jpg", auto: "compress"}) {
                                  ...GatsbyDatoCmsSizes

            }
          }
          id
          identifier
        }
      }
    }
  }
`

const IssuesPage = ({ data }) => (
    <div class="body">
        <Layout>
            <Helmet>
                <title>The Pub - Issues</title>
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
                    <div class="page-heading-parent">
                        <h1 class="large-title">Past Issues.</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="collection-list-wrapper w-dyn-list">
                        <div class="content-grid issues w-dyn-items">
                            {data.allDatoCmsIssue.edges.map(({ node: issue }) => (
                                <div key={issue.id} class="card issue w-dyn-item">
                                    <StyledLink to={`/issues/${issue.slug}`}>                                    <div class="image-card w-inline-block">
                                        <Img class="card-cover-image issue" fluid={issue.coverImage.fluid} initial='false' />
                                        <div class="card-info issue">
                                            <div class="card-title issue">{issue.identifier}</div>
                                            <div class="card-subtitle">
                                                <div class="text-block-7">{issue.releaseDate}</div>
                                                <div class="card-subtitle-line"></div>
                                            </div>
                                        </div>
                                    </div></StyledLink>
                                    <div class="preview"><StyledLink to={`/issues/${issue.slug}`} class="link w-inline-block"><div class="title small">{issue.issueTheme}</div></StyledLink>
                                        <div class="small-subtiti"><strong>Contributors:</strong></div>
                                        <div class="contents">{issue.contriubtors}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default IssuesPage