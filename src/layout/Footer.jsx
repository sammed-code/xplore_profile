import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-dark fixed-bottom">
        <p className="d-flex justify-content-center  align-items-center">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#fff", height: "40px" }}
          >
            © Xplore 2024.
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Footer;
