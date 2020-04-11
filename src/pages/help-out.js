import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { withPrefix } from "gatsby"

const HelpPage = () => (
    <div class="body">
        <Layout>
            <Helmet>
                <script src={withPrefix('webflow.js')} type="text/javascript" />
                <title>The Pub - Help Out</title>
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
                        <h1 class="large-title">We Need Your Support.</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="subtitle wrap">To continue producing independent student media, The Pub relies on support from alumni, students, community members, academic departments, and local businesses.<a href="https://the-pub.webflow.io/help-out#"><br /></a></div>
                    <div class="link-list">
                        <a href="#" class="simple-button fill leading w-inline-block">
                            <div>Make a Donation</div>
                        </a>
                        <a href="#" class="simple-button fill leading w-inline-block">
                            <div>Purchase Ad Space</div>
                        </a>
                        <a href="#" class="simple-button fill w-inline-block">
                            <div>Subscribe to our Newsletter</div>
                        </a>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default HelpPage