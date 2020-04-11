import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { withPrefix } from "gatsby"
import { StyledLink } from "../css/StyledLink.js"

import '../css/webflow.css'
import '../css/normalize.css'
import '../css/imported-styles.css'
import '../css/custom-styles.css'

const BlogPage = () => (
    <div class="body">
        <Layout>
            <Helmet>
                <script src={withPrefix('webflow.js')} type="text/javascript" />
                <title>The Pub - Blog</title>
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
                <section class="page-section">
                    <div class="page-heading-parent">
                        <h1 class="large-title">Updates—Pubdates.</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="collection-list-wrapper-2 w-dyn-list">
                        <div class="content-grid blog w-dyn-items">
                            <div class="preview w-dyn-item">
                                <div id="w-node-cfa85c07b166-8c3b2b8f" class="card">
                                    <div class="blog-post-link">
                                        <a href="#" class="link w-inline-block">
                                            <h1 class="blog-post-title"></h1>
                                        </a>
                                        <p class="post-summary"></p>
                                        <div class="card-info blog">
                                            <div class="author-info">
                                                <div class="text-block-12">by </div>
                                                <a href="#" class="link w-inline-block">
                                                    <div class="card-title"></div>
                                                </a>
                                                <div class="text-block-12"> — </div>
                                                <div class="text-block-7"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="empty-state-4 w-dyn-empty">
                            <div>No items found.</div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default BlogPage