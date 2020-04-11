import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { withPrefix } from "gatsby"
import Img from 'gatsby-image'
import { StyledLink } from "../css/StyledLink"

export const query = graphql`
query BlogPostQuery($slug: String!) {
    datoCmsBlogPost(slug: {eq: $slug}) {
      author {
        slug
        profilePhoto {
            fluid(maxWidth: 40, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
        }
        name
      }
      slug
      title
      postBodyNode {
        childMarkdownRemark {
          html
        }
      }
      mainImage {
        fluid(maxWidth: 1080, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsSizes
          }
      }
      id
      meta {
        publishedAt(formatString: "MMMM Do, YYYY")
      }
    }
    allDatoCmsBlogPost(filter: {slug: {ne: $slug}}, limit: 4) {
      edges {
        node {
          postSummary
          slug
          title
          id
          author {
            slug
            name
            id
          }
          meta {
            publishedAt(formatString: "M/D/YYYY")
          }
        }
      }
    }
  }
`

const PostTemplate = ({ data }) => (
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
                <section class="page-section content blog">
                    <div id="w-node-0bda0d93c8fe-1d27e5f8" class="card-cover-image blog"><Img fluid={data.datoCmsBlogPost.mainImage.fluid} initial='false' /></div>
                    <div class="blog-post">
                        <div class="card blog">
                            <div class="details blog">
                                <h1 class="title">{data.datoCmsBlogPost.title}</h1>
                                <div class="author-info">
                                    <div class="image"><Img fluid={data.datoCmsBlogPost.author.profilePhoto.fluid} initial='false' /></div>
                                    <StyledLink to={`/staff/${data.datoCmsBlogPost.author.slug}`}>
                                        <div class="link w-inline-block">
                                            <div class="author-name">{data.datoCmsBlogPost.author.name}</div>
                                        </div>
                                    </StyledLink>
                                    <div> on </div>
                                    <div>{data.datoCmsBlogPost.meta.publishedAt}</div>
                                </div>
                            </div>
                        </div>
                        <div class="letter-2">
                            <div class="rich-text-block template w-richtext" dangerouslySetInnerHTML={{
                                __html: data.datoCmsBlogPost.postBodyNode.childMarkdownRemark.html,
                            }} />
                        </div>
                        <div class="issue-buttons bottom end">
                            <StyledLink to="/blog"><div id="w-node-56de80a7cc7d-1d27e5f8" class="simple-button-2 fill w-inline-block">
                                <div>Back to Blog</div>
                            </div></StyledLink>
                        </div>
                    </div>
                    <div id="w-node-07b65d50125a-1d27e5f8" class="further-reading">
                        <h1 class="heading-5">Further Reading</h1>
                        <div class="post-features">
                            <div class="featured-posts">
                                <div class="collection-list-wrapper-3 w-dyn-list">
                                    {data.allDatoCmsBlogPost.edges.map(({ node: post }) => (
                                        <div key={post.id} class="preview w-dyn-item">
                                            <div id="w-node-cfa85c07b166-8c3b2b8f" class="card">
                                                <div class="blog-post-link">
                                                    <StyledLink to={`/blog/${post.slug}`} class="link w-inline-block">
                                                        <h1 class="blog-post-title featured">{post.title}</h1>
                                                    </StyledLink>
                                                    <p class="post-summary">{post.postSummary}</p>
                                                    <div class="card-info blog">
                                                        <div class="author-info">
                                                            <div class="text-block-12" style={{ marginRight: 0.3 + 'em' }}>by</div>
                                                            <StyledLink to={`/staff/${post.author.slug}`} class="link"><strong>{post.author.name}</strong></StyledLink>
                                                            <div class="text-block-12">—</div>
                                                            <div class="text-block-7">{post.meta.publishedAt}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default PostTemplate