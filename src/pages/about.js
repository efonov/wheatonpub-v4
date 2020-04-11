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
                <title>The Pub - About</title>
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
                        <h1 class="large-title">Our Missions.</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="content-grid about">
                        <div class="preview">
                            <div class="title small">The Pub</div>
                            <div class="contents">The Pub creates a forum for academic and artistic discussion at Wheaton by producing diverse and thoughtful content which engages the intersection of intellectual life and Christian faith. The Pub serves as an opportunity for Wheaton students to participate in an editorial and production process that seeks to provide a window to the broader world of academia and challenge students to put their voice into the mix. The Pub is a place where discussions of academia and art can happen student-to-student, and the joy which comes with learning can be shared side by side.</div>
                        </div>
                        <div class="preview">
                            <div class="title small">The Pub Reading Club</div>
                            <div class="contents">The Pub Reading Club exists to continue the conversation of The Pub journal beyond the confines of our print issues. We seek to further cultivate intellectual conversation and community on our campus. Through studying, conversing, supporting, challenging, and mentoring, The Pub Reading Club seeks to develop as an organic community of staff members and other students who desire to be lifelong learners, whether that be through the pursuit of graduate studies, or merely through the pursuit of excellence in their academic work.</div>
                        </div>
                        <div class="preview">
                            <div class="title small">The PubCast</div>
                            <div class="contents">The PubCast is an offshoot of The Pub Journal. We seek to engage our campus in a variety of topics pertaining to intellectual development and spiritual flourishing. Through interviews of professors and students, our hope is to continue the expansion of excellent intellectual thought from the perspective of faith on our campus and in our world in an up and coming digital landscape.</div>
                        </div>
                        <div class="preview">
                            <div class="title small">The PubChats</div>
                            <div class="contents">Pubchats is an intentional conversation group fostered by The Pub. We utilize social media and other resources to gather conversation topics pertinent to our campus. We seek to bridge the gap on our campus by making this group a space which intentionally seeks out and welcomes student groups on campus who are often not sought out.</div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default AboutPage