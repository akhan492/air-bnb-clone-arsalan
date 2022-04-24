import React from "react";
import { Globe, Facebook, Twitter, Instagram } from "react-feather";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="social">
          <Globe />
          <span>INDIA</span>
          <span className="rupya">₹INR</span>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <div className="copyRight">
            <p>© 2022 Airbnb, Inc.</p>
        <a href="https://www.airbnb.co.in/help/article/2855/airbnb-privacy" target="_blank">Privacy</a> <span>. </span>
        <a href="https://www.airbnb.co.in/terms" target="_blank">Terms</a>  <span>. </span>
        <a href="https://www.airbnb.co.in/sitemaps/v2" target="_blank">Sitemap</a>  <span>. </span>
        <a href="https://www.airbnb.co.in/about/company-details" target="_blank">Company Details</a>
        </div>

      </footer>
    </>
  );
};
