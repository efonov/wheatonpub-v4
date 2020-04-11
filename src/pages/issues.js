import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { withPrefix } from "gatsby"
import { StyledLink } from "../css/StyledLink.js"

import '../css/webflow.css'
import '../css/normalize.css'
import '../css/imported-styles.css'
import '../css/custom-styles.css'

const AboutPage = () => (
    <div class="body">
        <Layout>
            <Helmet>
                <script src={withPrefix('webflow.js')} type="text/javascript" />
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
            <div data-w-id="63b8498e-1639-aebb-9ce4-f79485e68895" class="page">
                <section class="page-section content">
                    <div class="page-heading-parent">
                        <h1 class="large-title">Past Issues.</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="collection-list-wrapper w-dyn-list">
                        <div class="content-grid issues w-dyn-items">
                            <div id="w-node-99ed1da72093-426986d0" class="card issue w-dyn-item">
                                <a id="w-node-af092f6fe9c0-426986d0" href="#" class="image-card w-inline-block">
                                    <div class="card-cover-image issue"></div>
                                    <div class="card-info issue">
                                        <div class="card-title issue"></div>
                                        <div class="card-subtitle">
                                            <div class="text-block-7"></div>
                                            <div class="card-subtitle-line"></div>
                                        </div>
                                    </div>
                                </a>
                                <div id="w-node-03e1f70075f7-426986d0" class="preview"><a href="#" class="title small"></a>
                                    <div class="small-subtiti"><strong>Contributors:</strong></div>
                                    <div class="contents w-richtext"></div>
                                </div>
                            </div>
                        </div>
                        <div class="w-dyn-empty">
                            <div>No items found.</div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default AboutPage