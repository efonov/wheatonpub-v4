import * as React from "react";
import { motion } from "framer-motion";
import { StyledLink } from "../css/StyledLink.js"
const isBrowser = typeof window !== `undefined`

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="#e5e5e5"
        strokeLinecap="round"
        {...props}
    />
);

const bg = {
    open: {
        x: -35, transition: {
            type: "spring",
            stiffness: 250,
            damping: 40
        }
    },
    closed: {
        x: -450, transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const toc = {
    open: {
        x: 350, transition: {
            type: "spring",
            stiffness: 250,
            damping: 40
        }
    },
    closed: {
        x: 0, transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const bgMobile = {
    open: {
        x: 0, transition: {
            type: "spring",
            stiffness: 250,
            damping: 40
        }
    },
    closed: {
        x: isBrowser ? -window.innerWidth * 1.1 : 800, transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const tocMobile = {
    open: {
        x: isBrowser ? window.innerWidth : 500, transition: {
            type: "spring",
            stiffness: 250,
            damping: 40
        }
    },
    closed: {
        x: 0, transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Navigation = ({ toggle }) => (
    <div onClick={toggle} class="menu">
        <motion.div variants={toc} className="table-of-contents-parent">
            <div class="table-of-contents">
                <div data-w-id="dea1a3cf-804b-4797-d964-92ab4ff6fd1f" class="toc-items-1">
                    <div class="toc-child" />
                    <div class="toc-child">
                        <motion.svg whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} width="30" height="35" viewBox="0 0 35 35">
                            <Path
                                variants={{
                                    closed: { d: "M 0 6 L 35 6" },
                                    open: { d: "M 5.1 29.9 L 29.9 5" }
                                }}
                            />
                            <Path
                                d="M 0 17.5 L 35 17.5"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                transition={{ duration: 0.03 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: "M 0 28 L 35 28" },
                                    open: { d: "M 5.1 5.1 L 29.9 29.9" }
                                }}
                            />
                        </motion.svg>
                    </div>
                    <div id="w-node-92ab4ff6fd2d-4ff6fd1c" class="toc-text-parent">
                        <div class="toc-text">Table of Contents</div>
                    </div>
                </div>
                <div class="toc-menu">
                    <div class="toc-link-parent">
                        <div class="toc-links">
                            <StyledLink to="/" class="toc-menu-link" >
                                <div class="toc-menu-link">Home</div>
                            </StyledLink>
                            <StyledLink to="/about" class="toc-menu-link">
                                <div class="toc-menu-link">About</div>
                            </StyledLink>
                            <StyledLink to="/issues" class="toc-menu-link">
                                <div class="toc-menu-link">Issues</div>
                            </StyledLink>
                            <StyledLink to="/blog" class="toc-menu-link">
                                <div class="toc-menu-link">Blog</div>
                            </StyledLink>
                            <StyledLink to="/staff" class="toc-menu-link">
                                <div class="toc-menu-link">Staff</div>
                            </StyledLink>
                            <StyledLink to="/help-out" class="toc-menu-link">
                                <div class="toc-menu-link">Help Out</div>
                            </StyledLink>
                            <div class="final-things"><a href="https://www.instagram.com/wheatonpub/" class="menu-bottom-link w-inline-block">Instagram</a><a href="mailto:wheatonpub@gmail.com" class="menu-bottom-link w-inline-block">Contact</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div variants={bg} className="toc-background" />
    </div>
);
export const MobileNav = ({ toggle }) => (
    <div class="menu">
        <div className="table-of-contents-parent">
            <div class="table-of-contents">
                <div data-w-id="dea1a3cf-804b-4797-d964-92ab4ff6fd1f" class="toc-items-1">
                    <div class="toc-child"><StyledLink to="/" class="header-logo"><div class="logo">THE<br />PUB</div></StyledLink></div>
                    <div onClick={toggle} className="toc-child">
                        <motion.svg whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} width="30" height="35" viewBox="0 0 35 35">
                            <Path
                                variants={{
                                    closed: { d: "M 0 6 L 35 6" },
                                    open: { d: "M 5.1 29.9 L 29.9 5" }
                                }}
                            />
                            <Path
                                d="M 0 17.5 L 35 17.5"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                transition={{ duration: 0.03 }}
                            />
                            <Path
                                variants={{
                                    closed: { d: "M 0 28 L 35 28" },
                                    open: { d: "M 5.1 5.1 L 29.9 29.9" }
                                }}
                            />
                        </motion.svg>
                    </div>
                    <div id="w-node-92ab4ff6fd2d-4ff6fd1c" class="toc-text-parent">
                        <div class="toc-text">Table of Contents</div>
                    </div>
                </div>
                <motion.div variants={tocMobile} className="toc-menu">
                    <div class="toc-link-parent">
                        <div class="toc-links">
                            <StyledLink to="/">
                                <div class="toc-menu-link">Home</div>
                            </StyledLink>
                            <StyledLink to="/about">
                                <div class="toc-menu-link">About</div>
                            </StyledLink>
                            <StyledLink to="/issues">
                                <div class="toc-menu-link">Issues</div>
                            </StyledLink>
                            <StyledLink to="/blog">
                                <div class="toc-menu-link">Blog</div>
                            </StyledLink>
                            <StyledLink to="/staff">
                                <div class="toc-menu-link">Staff</div>
                            </StyledLink>
                            <StyledLink to="/help-out">
                                <div class="toc-menu-link">Help Out</div>
                            </StyledLink>
                            <div class="final-things"><a href="https://www.instagram.com/wheatonpub/" class="menu-bottom-link w-inline-block">Instagram</a><a href="mailto:wheatonpub@gmail.com" class="menu-bottom-link w-inline-block">Contact</a></div>
                        </div>
                    </div>
                    <div class="toc-link-parent mobile">
                        <a href="submissions.html" class="simple-button w-inline-block">
                            <div>Submit Work</div>
                        </a>
                        <a href="index.html" data-w-id="8139caae-a48a-5072-7691-42208ac0775e" class="simple-button fill w-inline-block">
                            <div>Latest Issue</div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
        <motion.div variants={bgMobile} className="toc-background" />
    </div>
);