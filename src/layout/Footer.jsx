import React from 'react';

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer bg-secondary">
        <div className="container footer-content text-white">
          <span>© 2017-2020 my-stock inc. </span>
          <a className="text-white" target="_blank" href="https://iexcloud.io">Data provided by IEX Cloud</a>
        </div>
    </footer>
  );
};

export default Footer;
