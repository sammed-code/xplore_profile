import React from "react";
import AboutItem from "../component/AboutItem";

function AboutUs() {
  return (
    <>
      <section id="about">
        <div className="container-fluid px-0">
          <div className="container mb-md-0 mt-5" style={{ height: "800px" }}>
            <h1 className="heading-text au-text">About Us</h1>

            <div className="row mt-lg-3 d-flex align-items-center justify-content-center">
              <div className="col-lg-12 col-md-12 mt-3 aboutus-main-card">
                <AboutItem
                  q="About The Page: "
                  a="It is an innovative solution for users interested in exploring the geographic distribution of profiles, enhancing user engagement and interaction."
                />

                <AboutItem
                  q="Our Mission: "
                  a="Our mission is to provide a user-friendly platform that simplifies profile exploration and fosters meaningful connections among individuals."
                />

                <AboutItem
                  q="What We Do: "
                  a="We develop and maintain an interactive profile viewer application that enables users to easily explore, connect with, and manage diverse profiles."
                />

                <AboutItem q="Thank You " a="Thank you for choosing Xplore." />

                <AboutItem
                  q="Contact Details:"
                  a="Pune, Maharashtra, India +91**********."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
