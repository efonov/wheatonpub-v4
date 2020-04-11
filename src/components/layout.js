import * as React from "react";
import { motion, useViewportScroll, useTransform, useCycle } from "framer-motion"
import { useRef } from "react";
import { Navigation, MobileNav } from "./navigation";
import { StyledLink } from "../css/StyledLink.js"

export const Layout = ({ children }) => {
    const { scrollYProgress } = useViewportScroll();

    const containerRef = useRef(null);
    const [isOpen, toggleOpen] = useCycle(false, true);

    const isBrowser = typeof window !== `undefined`
    const rawHTML =
        (
            <div className="layout">
                {children}
                <div class="header">
                    <div id="w-node-428e8a752d58-8a752d57">
                        <StyledLink to="/" class="link-block-2 w-inline-block">
                            <div class="logo">
                                <strong><em>THE <br />PUB</em></strong>
                            </div>
                        </StyledLink>
                    </div>
                    <div id="w-node-428e8a752d60-8a752d57" class="header-child">
                        <a href="submissions.html" class="simple-button w-inline-block">
                            <div class="button-text">Submit Work</div>
                        </a>
                        <a href="https://the-pub.webflow.io/volumes/busyness-and-boredom" class="simple-button fill w-inline-block">
                            <div class="button-text">Latest Issue</div>
                        </a>
                    </div>
                </div>
                <motion.nav ref={containerRef} initial={false} animate={isOpen ? "open" : "closed"}>
                    <div className="desktop-nav"><Navigation toggle={() => toggleOpen()} /></div>
                    <div className="mobile-nav"><MobileNav toggle={() => toggleOpen()} /></div>
                </motion.nav>
                <section class="page-section footer">
                    <div class="footer-text">
                        <div id="w-node-552eb64915d6-b64915d4" class="grid-container">
                            <div class="title">Wheaton&#x27;s Independent<br />Undergraduate <br />Academic Journal</div>
                            <div class="form-block w-form">
                                <form id="wf-form-Newsletter-Form" name="wf-form-Newsletter-Form" data-name="Newsletter Form" action="/#" method="post" data-netlify="&quot;true&quot;" class="form">
                                    <div href="#support-us" class="link _2">
                                        <div class="text-block-5">Get The Pub newsletter delivered right to your inbox.</div>
                                    </div>
                                    <div class="div-block-2"><input type="email" class="text-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required="" /><input type="submit" value="Sign Up" data-wait="Please wait..." class="simple-button fill w-button" /></div>
                                </form>
                                <div class="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div class="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                        <div id="w-node-552eb64915eb-b64915d4" class="footer-column">
                            <div class="footer-column-name">Issues</div><StyledLink to="/"><div class="footer-link">Latest</div></StyledLink><StyledLink to="/issues"><div class="footer-link">Issues</div></StyledLink></div>
                        <div id="w-node-552eb64915f2-b64915d4" class="footer-column">
                            <div class="footer-column-name">Information</div><StyledLink to="/about"><div class="footer-link">About</div></StyledLink><StyledLink to="/staff"><div class="footer-link">Staff</div></StyledLink><StyledLink to="/blog"><div class="footer-link">Blog</div></StyledLink></div>
                        <div class="footer-column">
                            <div class="footer-column-name">Contact</div><StyledLink to="/submissions"><div class="footer-link">Submit Work</div></StyledLink><StyledLink to="/help-out"><div class="footer-link">Support The Pub</div></StyledLink><StyledLink to="/"><div class="footer-link">Staff Applications</div></StyledLink><a href="https://www.instagram.com/wheatonpub/" class="footer-link">Instagram</a><a href="mailto:wheatonpub@gmail.com" class="footer-link">Email</a></div>
                        <div id="w-node-552eb649160c-b64915d4" class="final-things-copy">
                            <div class="small-text">Copyright © 2020 The Pub </div>
                            <div class="text-block-9">Website by <a href="http://efonov.com" class="link-2">@efonov</a></div>
                        </div>
                    </div>
                    <motion.div style={{ x: useTransform(scrollYProgress, [0.5, 1], [0, -(isBrowser ? window.innerWidth / 2 : 900)]) }} data-w-id="226e33ee-d99f-4b37-a51c-552eb6491613" class="bg-logo">PUB</motion.div>
                </section>
            </div>
        )
    return rawHTML;
}