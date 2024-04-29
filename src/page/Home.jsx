import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";
import home from "../asset/home.png";

function Home() {
  return (
    <>
      <section id="home">
        <div className="container-fluid px-0">
          <div className="container">
            <div className="row mt-lg-4">
              <div className="col-lg-8 col-md-12">
                <h1 className="primary-text" style={{ marginTop: "3rem" }}>
                  Profiles Explored, Locations Unveiled
                </h1>
                <h3
                  className="para-1 d-flex justify-content-center align-items-center"
                  style={{ marginTop: "1rem", lineHeight: "1.3rem" }}
                >
                  Xplore aims to provide an intuitive and user-friendly way to
                  navigate through profiles and visualise the geographic
                  locations associated with each individual. It is a robust and
                  user-friendly web application that meets the needs of both
                  users and administrators while ensuring its long-term
                  viability and success.
                </h3>
                <Link to="/explore">
                  <Button label="Start" cName="main-btn" type="start" />
                </Link>
              </div>
              <div className="col-lg-4 col-md-12 d-flex justify-content-center align-items-center Graphics-1">
                <img
                  src={home}
                  alt="loading..."
                  height="400px"
                  style={{ borderRadius: "1rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
