import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"
import { StyledLink } from "../css/StyledLink.js"

const NotFoundPage = () => (
  <div class="body">
    <Layout>
      <Helmet>
        <title>The Pub - 404</title>
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
            <h1 class="large-title">404</h1>
            <div class="card-subtitle-line heading"></div>
          </div>
          <div class="subtitle wrap">The page you&#x27;re looking for does not exist! Try these pages instead:<a href="https://the-pub.webflow.io/help-out#"><br /></a></div>
          <div class="link-list">
            <StyledLink to="/issues">
              <div class="simple-button fill leading w-inline-block">
                Issues
            </div>
            </StyledLink>
            <StyledLink to="/blog">
              <div class="simple-button fill leading w-inline-block">
                Blog
            </div>
            </StyledLink>
            <StyledLink to="/help-out">
              <div class="simple-button fill leading w-inline-block">
                Help Out
            </div>
            </StyledLink>
          </div>
        </section>
      </div>
    </Layout>
  </div>
)
export default NotFoundPage