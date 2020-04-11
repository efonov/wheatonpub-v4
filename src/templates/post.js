import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { withPrefix, graphql } from "gatsby"
import Img from 'gatsby-image'
import { StyledLink } from "../css/StyledLink.js"

const PostTemplate = () => (
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
                    <div id="w-node-0bda0d93c8fe-1d27e5f8" class="card-cover-image blog"></div>
                    <div class="blog-post">
                        <div class="card blog">
                            <div class="details blog">
                                <h1 class="title"></h1>
                                <div class="author-info"><img src="" alt="" class="image" />
                                    <a href="#" class="link w-inline-block">
                                        <div class="author-name"></div>
                                    </a>
                                    <div> on </div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="letter-2">
                            <div class="rich-text-block template w-richtext"></div>
                        </div>
                        <div class="issue-buttons bottom end">
                            <a id="w-node-56de80a7cc7a-1d27e5f8" href="#" class="simple-button-2 fill w-inline-block">
                                <div>Share This Post</div>
                            </a>
                            <a href="blog.html" id="w-node-56de80a7cc7d-1d27e5f8" class="simple-button-2 _2nd w-inline-block">
                                <div>Back to Blog</div>
                            </a>
                        </div>
                    </div>
                    <div id="w-node-07b65d50125a-1d27e5f8" class="further-reading">
                        <h1 class="heading-5">Further Reading</h1>
                        <div class="post-features">
                            <div class="featured-posts">
                                <div class="collection-list-wrapper-3 w-dyn-list">
                                    <div class="veritcal-list w-dyn-items">
                                        <div class="preview w-dyn-item">
                                            <a href="#" class="link w-inline-block">
                                                <h1 class="blog-post-title featured"></h1>
                                            </a>
                                            <p class="paragraph preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                            <div class="content-detail">
                                                <div class="text-block-13">by </div>
                                                <a href="#" class="link w-inline-block">
                                                    <div class="card-title"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="no-empty-state w-dyn-empty">
                                        <div>No items found.</div>
                                    </div>
                                </div>
                                <div class="collection-list-wrapper-3 w-dyn-list">
                                    <div class="veritcal-list w-dyn-items">
                                        <div class="preview w-dyn-item">
                                            <a href="#" class="link w-inline-block">
                                                <h1 class="blog-post-title featured"></h1>
                                            </a>
                                            <p class="paragraph preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                            <div class="content-detail">
                                                <div class="text-block-13">by </div>
                                                <a href="#" class="link w-inline-block">
                                                    <div class="card-title"></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="no-empty-state w-dyn-empty">
                                        <div>No items found.</div>
                                    </div>
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