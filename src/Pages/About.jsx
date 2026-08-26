import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-page py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h6 className="text-primary fw-semibold text-uppercase text-danger">
            About Apple Store
          </h6>
          <h1 className="fw-bold mt-2">
            Innovation That Shapes the Future
          </h1>
          <p className="text-muted mt-3 fs-5">
            Designed to inspire. Engineered to perform.
          </p>
        </div>

        <div className="row align-items-center g-5">

          <div className="col-lg-6">
            <p className="lh-lg fs-5 text-secondary">
              Apple continues to redefine technology through beautifully crafted
              products that deliver seamless performance, exceptional design,
              and an unmatched user experience.
            </p>

            <p className="lh-lg fs-5 text-secondary">
              From ultra-thin MacBooks to powerful iPhones and intelligent Apple
              Watches, every device reflects Apple’s commitment to innovation,
              precision, and long-term reliability.
            </p>

            <p className="lh-lg fs-5 text-secondary">
              Whether you are a student, professional, or creative thinker,
              Apple empowers you with tools that are powerful, intuitive,
              and built for the future.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="about-card shadow-lg rounded-4 p-4 bg-white">
              <h4 className="fw-bold mb-4">Why Choose Apple?</h4>

              <ul className="list-unstyled fs-5 text-secondary">
                <li className="mb-3">✔ Premium design & build quality</li>
                <li className="mb-3">✔ Seamless ecosystem integration</li>
                <li className="mb-3">✔ Industry-leading performance</li>
                <li className="mb-3">✔ Strong focus on privacy & security</li>
                <li>✔ Future-ready technology</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
