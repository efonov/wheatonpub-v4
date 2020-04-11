import React from "react"
import Helmet from "react-helmet"
import { Layout } from "../components/layout"

const SubmissionsPage = () => (
    <div class="body">
        <Layout>
            <Helmet>
                <title>The Pub - Submissions</title>
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
                        <h1 class="large-title">Submit to The Pub!</h1>
                        <div class="card-subtitle-line heading"></div>
                    </div>
                    <div class="content-grid about">
                        <div class="preview">
                            <div class="title small">Essays<br /></div>
                            <div class="small-subtiti no-padding"><strong>2500 word limit, Chicago Manual of Style, endnotes, citations required.</strong></div>
                            <div class="contents">Essays include critical essays, reviews, and interviews. For the Essays section, you can either submit a complete essay for editing, or submit a 500-word essay proposal which will be coached and edited by our Essays editors throughout the semester. The first option is best if you already have a piece you wrote for a class or another reason and it only need minor edits for publication. The second option is best if you have an idea you’ve wanted to carry out for a while and The Pub looks like a good reason to do it! For the former, the submission process is normal: submit before March 21 and you will be contacted about edits and copyediting if accepted. For the latter, essay proposals should be submitted by March 1 and will be reviewed by the Editorial team. If accepted, you will work with the Essays section throughout the semester on your piece. This is a great choice if you want experience in a collaborative editing process. You are welcome to submit more than one piece, but only one essay will be published per individual.</div>
                            <a href="#" class="simple-button fill leading w-inline-block">
                                <div>Submit an Essay</div>
                            </a>
                        </div>
                        <div class="preview">
                            <div class="title small">Art</div>
                            <div class="small-subtiti no-padding">4 or more artworks.</div>
                            <div class="contents">The Pub accepts all mediums of visual artwork for publication. You may submit a standalone piece or a series. We believe art to be an essential part of intellectual Christian discussion. In order to spark discussion, we require artists to submit a statement to accompany their work. This statement might be a short piece of creative writing, an explanation of your process, an exploration of the subject matter, a relation of it to the issue’s themes, etc. It does not need to be a stiff or explanatory statement––we trust your work speaks for itself. We welcome the collaboration of essayists and artists in the exploration of a piece. Please be sure you have submitted your highest quality image and your statement is in an editable Google Doc.You may submit more than one image, but typically only two spreads (4 pages) will be devoted to one artist.</div>
                            <a href="#" class="simple-button fill leading w-inline-block">
                                <div>Submit Artwork</div>
                            </a>
                        </div>
                        <div class="preview">
                            <div class="title small">Narrative</div>
                            <div class="small-subtiti no-padding"><strong>3500 word limit.</strong></div>
                            <div class="contents">Published per semester: 2 or more narrative piecesNarrative accepts both fiction and non-fiction storytelling. You are welcome to submit more than one piece, but only one will be published per individual.</div>
                            <a href="#" class="simple-button fill leading w-inline-block">
                                <div>Submit a Narrative</div>
                            </a>
                        </div>
                        <div class="preview">
                            <div class="title small">Poetry</div>
                            <div class="small-subtiti no-padding"><strong>No word limit.</strong></div>
                            <div class="contents">Published per semester: 4 or more poetry piecesPoetry is always a popular section of The Pub! Please make sure your document is editable and includes your name at the top. You can submit as many pieces as you wish, though our maximum for publication is 2 per person.</div>
                            <a href="#" class="simple-button fill leading w-inline-block">
                                <div>Submit a Poem</div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    </div>
)
export default SubmissionsPage