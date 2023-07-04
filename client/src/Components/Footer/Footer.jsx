import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer>
            <div id="footer-wrap" className="max-width">
                <div id="about-me">
                    <img className="icon" src="./logos/logo.svg" alt="main-logo" />
                    <h1>Thanks</h1>
                    <h2>For checking out my page.</h2>
                    <p>My name is Andy Sen. I've taught myself Unity, C#, Pixel Animation and more with online videos and tutorials. I created the pixel art/animations in Aesprite.</p>
                </div>
                <div id="social">
                    <div id="social-links">
                        <a href="https://www.linkedin.com/in/andy-sen/" rel="noreferrer" target="_blank">
                            <img className="icon anim-hover-sm" src="./logos/linkedin.png" alt="linkedin-logo" />
                        </a>
                        <a href="https://github.com/sen-andy" rel="noreferrer" target="_blank">
                            <img className="icon anim-hover-sm" src="./logos/github.png" alt="github-logo" />
                        </a>
                        <a href="mailto: andy.sen@icloud.com" rel="noreferrer" target="_blank">
                            <img className="icon anim-hover-sm" src="./logos/email.png" alt="email-logo" />
                        </a>
                    </div>
                    <h1>Connect with me.</h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;