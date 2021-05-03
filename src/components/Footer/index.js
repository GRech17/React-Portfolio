import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright 2021
          <strong>
            <span></span>
          </strong>
        </div>
      </div>
      <a href="#about" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </footer>
  );
}

export default Footer;