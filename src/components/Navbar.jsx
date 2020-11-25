import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="#">
        <img
          src="/assets/images/logo.png"
          style={{ width: "100px", height: "55px" }}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link font-weight-bold" href="#">
              TV Shows
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link font-weight-bold" href="#">
              My List
            </a>
          </li>
        </ul>
        <div className="d-flex my-3 my-lg-0">
          <i className="fa fa-search icons mr-3"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons mx-3"></i>
          <i className="fa fa-user icons mx-3"></i>
        </div>
      </div>
    </nav>
  );
}
