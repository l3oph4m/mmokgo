import React from "react";

import "./styles.css";
import Logo from "../icons/logo";

class TopNav extends React.Component {
  tweet = "MMOK-GO – smaz.tech";

  render() {
    // We need that to show the extension button only if not running in extension
    const isRunningExtension =
      window.chrome && window.chrome.runtime && window.chrome.runtime.id;

    return (
      <div className="top-nav">
        <div className="container clearfix">
          <a
            href="https://smaz.tech/"
            rel="noopener noreferrer"
            target="_blank"
            className="logo clearfix float-left"
          >
            <Logo />
            <div className="logo-text">
              <h4>MMOK-GO</h4>
              <p className="text-muted d-none d-sm-inline-block d-md-inline-block d-xl-inline-block d-lg-inline-block">
                Your fans' great moments become NTFs!
              </p>
              <p className="text-muted d-inline-block d-sm-none d-md-none d-xl-none d-lg-none">
                Fans'NFTs!
              </p>
            </div>
          </a>
          <div className="float-right external-btns">
            <a
              href="https://api.smaz.tech/oauth"
              //target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="fa fa-github mr-1"></i> Continue with TikTok
            </a>
            {!isRunningExtension && (
              <a
                href="#"
                // target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger d-none d-sm-none d-md-inline-block d-xl-inline-block d-lg-inline-block"
              >
                <i className="fa fa-chrome mr-1"></i> Use Extension
              </a>
            )}
            {isRunningExtension && (
              <a
                href="https://twitter.com/LeoPh060489"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger d-none d-sm-none d-md-inline-block d-xl-inline-block d-lg-inline-block"
              >
                <i className="fa fa-comment mr-1"></i> Give Feedback
              </a>
            )}
            <a
              href={`https://twitter.com/intent/tweet?text=${this.tweet}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-tweet d-none d-sm-none d-md-none d-xl-inline-block d-lg-inline-block"
            >
              <i className="fa fa-twitter mr-1"></i> Tweet
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
