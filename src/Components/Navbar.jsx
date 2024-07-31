import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 " >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Gyat Drip</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarScroll" 
            aria-controls="navbarScroll" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 mx-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">New and Featured</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kids</a>
              </li>

              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Sale
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Air Force 1</a></li>
                  <li><a className="dropdown-item" href="#">Jordan</a></li>
                  <li><a className="dropdown-item" href="#">Running</a></li>
                  <li><a className="dropdown-item" href="#">Basketball</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="#">Hehe Boy</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href='#'>SNKRS</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
              <button className="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
