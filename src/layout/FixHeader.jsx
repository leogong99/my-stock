import React from 'react';

const FixHeader = () => {
  return (
    <header className="fix-header">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-secondary">
        <a className="navbar-brand" href="#">Smarter Stock</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default FixHeader;
