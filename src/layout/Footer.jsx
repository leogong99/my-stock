import React from 'react';

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer-content">
          <span>© 2017-2020 my-stock inc. </span>
          <a target="_blank" href="https://iexcloud.io">Data provided by IEX Cloud</a>
        </div>
    </footer>
  );
};

export default Footer;
