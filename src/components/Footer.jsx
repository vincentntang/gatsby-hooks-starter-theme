import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "./UserLinks";

const Footer = (props) => {
  const { config } = props;
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <UserLinks config={config} labeled />
      <div className="notice-container">
        <h4>{copyright}</h4>

        <Link to={url}>
          <button>Subscribe</button>
        </Link>
        <h4>
          Based on{" "}
          <a href="https://github.com/vincentntang/gatsby-hooks-starter-theme">
            Gatsby Hooks Starter Theme
          </a>
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
