import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { withPrefix, graphql } from "gatsby"

const IssueTemplate = () => (
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
                    <div class="card issue template">
                        <a id="w-node-021ecc50ca80-ee869044" href="#" class="image-card w-inline-block">
                            <div class="card-cover-image issue"></div>
                            <div class="card-info issue">
                                <div class="card-title"></div>
                                <div class="card-subtitle">
                                    <div class="text-block-7"></div>
                                    <div class="card-subtitle-line"></div>
                                </div>
                            </div>
                        </a>
                        <div id="w-node-021ecc50ca89-ee869044" class="details">
                            <h1 class="title"></h1>
                            <div class="issue-info">
                                <div><strong>Contributors:</strong></div>
                                <div class="contents w-richtext"></div>
                            </div>
                            <div class="issue-buttons bottom">
                                <a id="w-node-021ecc50ca9e-ee869044" href="#" class="simple-button fill w-inline-block">
                                    <div>Read </div>
                                    <div></div>
                                </a>
                                <a id="w-node-021ecc50caa3-ee869044" href="archive.html" class="simple-button _2nd w-inline-block">
                                    <div>Back to Issues</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="small-subtiti"><strong>Letter From The Editor:</strong></div>
                        <div class="rich-text-block template w-richtext"></div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default IssueTemplate