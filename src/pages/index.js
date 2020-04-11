import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { withPrefix } from "gatsby"

import '../css/imported-styles.css'
import '../css/custom-styles.css'

import '../css/webflow.css'
import '../css/normalize.css'

const { scrollYProgress } = useViewportScroll();
const HomePage = () => (
  <div class="body">

    <Layout>
      <Helmet>
        <script src={withPrefix('webflow.js')} type="text/javascript" />
        <title>The Pub</title>
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
      <div id="introduction" data-w-id="63b8498e-1639-aebb-9ce4-f79485e68895" class="page">
        <motion.section style={{ scale: useTransform(scrollYProgress, [0, 0.1], [0.5, 1]), y: useTransform(scrollYProgress, [0, 0.1], [-200, 300]), rotateZ: useTransform(scrollYProgress, [0, 0.1], [30, 0]) }} data-w-id="0fc8a664-f1b8-e341-0a97-d308d8b0a522" class="page-section introduction">
          <section class="div-block">
            <h1 class="heading-2">THE<br />PUB</h1>
            <h1 class="subtitle">Wheaton&#x27;s Independent Undergraduate <br />Academic Journal</h1>
            <h1 class="subtitle-mobile">Wheaton&#x27;s Independent<br />Undergraduate<br />Academic Journal</h1>
            <div class="toc-link-parent mobile intro">
              <a href="https://forms.gle/uFxYLDCXFkN1cEsdA" class="simple-button dark w-inline-block">
                <div>Submit Work</div>
              </a>
              <a href="https://the-pub.webflow.io/volumes/busyness-and-boredom" class="simple-button fill dark w-inline-block">
                <div>Latest Issue</div>
              </a>
            </div>
          </section>
          <motion.h1 style={{ scale: useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1.1]) }} id="mission" data-w-id="4047144d-7004-a61d-e858-60c64c48c70a" class="subtitle-paragraph">The Pub is an <span class="highlighted-text">independent</span> journal, <span class="highlighted-text">unhindered</span> by institutional expectations, and designed to fill the spaces that other campus publications leave empty. Put simply, The Pub is by the students, for the students.</motion.h1>
          <div class="rich-text-block w-richtext">
            <p>The Pub creates a forum for academic and artistic discussion at Wheaton College by producing diverse and thoughtful content which engages the intersection of intellectual life and Christian faith.</p>
            <p>Through poetry, art, narrative, and essay, The Pub intends to encourage the student body to engage in authentic, diverse, and thoughtful conversations outside of the classroom. The Pub serves as an opportunity for Wheaton students to participate in an editorial and production process that seeks to provide a window to the broader world of academia and challenge students to put their voice into the mix. The Pub is a place where discussions of academia and art can happen student-to-student, and the joy which comes with learning can be shared side by side. </p>
            <p>Kristen Scharold, our founder, described the journal as a creative forum designed to “be an artistic outlet for what students are feeling an urgency for.”</p>
            <p>‍</p>
            <figure class="w-richtext-align-center w-richtext-figure-type-image">
              <div><img src="images/Artboard1.png" alt="" /></div>
            </figure>
          </div>
        </motion.section>
        <section data-w-id="0fc8a664-f1b8-e341-0a97-d308d8b0a522" class="page-section introduction mobile">
          <section class="div-block">
            <h1 class="heading-2">THE<br />PUB</h1>
            <h1 class="subtitle">Wheaton&#x27;s Independent Undergraduate <br />Academic Journal</h1>
            <h1 class="subtitle-mobile">Wheaton&#x27;s Independent<br />Undergraduate<br />Academic Journal</h1>
            <div class="toc-link-parent mobile intro">
              <a href="https://forms.gle/uFxYLDCXFkN1cEsdA" class="simple-button dark w-inline-block">
                <div>Submit Work</div>
              </a>
              <a href="https://the-pub.webflow.io/volumes/busyness-and-boredom" class="simple-button fill dark w-inline-block">
                <div>Latest Issue</div>
              </a>
            </div>
          </section>
          <motion.h1 style={{ scale: useTransform(scrollYProgress, [0.1, 0.6], [0.8, 1.1]) }} id="mission" data-w-id="4047144d-7004-a61d-e858-60c64c48c70a" class="subtitle-paragraph">The Pub is an <span class="highlighted-text">independent</span> journal, <span class="highlighted-text">unhindered</span> by institutional expectations, and designed to fill the spaces that other campus publications leave empty. Put simply, The Pub is by the students, for the students.</motion.h1>
          <div class="rich-text-block w-richtext">
            <p>The Pub creates a forum for academic and artistic discussion at Wheaton College by producing diverse and thoughtful content which engages the intersection of intellectual life and Christian faith.</p>
            <p>Through poetry, art, narrative, and essay, The Pub intends to encourage the student body to engage in authentic, diverse, and thoughtful conversations outside of the classroom. The Pub serves as an opportunity for Wheaton students to participate in an editorial and production process that seeks to provide a window to the broader world of academia and challenge students to put their voice into the mix. The Pub is a place where discussions of academia and art can happen student-to-student, and the joy which comes with learning can be shared side by side. </p>
            <p>Kristen Scharold, our founder, described the journal as a creative forum designed to “be an artistic outlet for what students are feeling an urgency for.”</p>
            <p>‍</p>
            <figure class="w-richtext-align-center w-richtext-figure-type-image">
              <div><img src="Artboard1" alt="" /></div>
            </figure>
          </div>
        </section>

        <section class="page-section spacer"></section>
        <section class="page-section home">
          <div class="features">
            <div class="issue-features">
              <div class="page-heading-parent home">
                <h1 class="large-title">Latest Issues</h1>
                <div class="card-subtitle-line heading"></div>
              </div>
              <div class="featured-issue">
                <div class="collection-list-wrapper w-dyn-list">
                  <div class="content-grid issues featured w-dyn-items">
                    <div id="w-node-91cebece6eb9-1486903f" class="card-2 issue featured w-dyn-item">
                      <div id="w-node-b962f098bf97-1486903f" class="issue-details"><a href="#" class="title small"></a>
                        <div><strong>Contributors:</strong></div>
                        <div class="contents w-richtext"></div>
                      </div>
                      <a id="w-node-fff9086f9d24-1486903f" href="#" class="issue-card-3 w-inline-block">
                        <div class="card-cover-image issue"></div>
                        <div class="card-info issue">
                          <div class="card-title issue"></div>
                          <div class="card-subtitle">
                            <div class="text-block-7"></div>
                            <div class="card-subtitle-line-2"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="empty-state-3 w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="post-features">
              <div class="page-heading-parent home">
                <h1 class="large-title">Recent Posts</h1>
                <div class="card-subtitle-line heading"></div>
              </div>
              <div class="featured-posts">
                <div class="home-featured-posts w-dyn-list">
                  <div class="w-dyn-items">
                    <div class="collection-item-2 w-dyn-item">
                      <div class="card-2 blog">
                        <div class="blog-post-link-2">
                          <a href="#" class="link-3 w-inline-block">
                            <h1 class="blog-post-title featured"></h1>
                          </a>
                          <p class="paragraph preview"></p>
                          <div class="content-detail">
                            <div class="text-block-13">by </div>
                            <a href="#" class="link w-inline-block">
                              <div class="card-title"></div>
                            </a>
                            <div class="text-block-13"> ・ </div>
                            <div class="text-block-7"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="empty-state-6 w-dyn-empty">
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
export default HomePage