import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="img/Frame 57.png" alt=""></img>

        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#catalogue">CATALOGUE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fashion">FASHION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#lifestyle">LIFESTYLE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#singup"><button>SING UP</button></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;