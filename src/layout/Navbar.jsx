import { Groups2Outlined, HomeOutlined } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../component/Button";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Xplore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home <HomeOutlined />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/aboutus" ? "active" : ""
                  }`}
                  to="/aboutus"
                >
                  About Us <Groups2Outlined />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  <div
                    style={{
                      paddingLeft: "0.8rem",
                      paddingRight: "2rem",
                    }}
                  >
                    <Button label="Start" cName="login-btn" type="start" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
