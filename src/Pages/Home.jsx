import React from "react";
import "./home.css";

import img21 from "./images/21.jpg";
import img1 from "./images/1.webp";
import img3 from "./images/3.jpg";
import img4 from "./images/4.webp";

import {
  FaBolt,
  FaLaptop,
  FaBatteryFull,
  FaLock,
  FaMicrochip,
  FaCamera,
  FaWifi,
  FaHeartPulse,
  FaPersonRunning,
  FaCarBurst,
  FaWater,
  FaClock
} from "react-icons/fa6";

import { MdDisplaySettings } from "react-icons/md";

const Home = () => {
  return (
    <div className="main1 h-100" id="Home">

      <div id="appleCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#appleCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#appleCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-indicators">
            <button type="button" data-bs-target="#appleCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#appleCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#appleCarousel" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-item active">
            <img src={img21} className="d-block w-100" alt="MacBook Air" height="650" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-dark">MacBook Air</h2>
              <p className="text-dark">Power. It’s in the Air.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="iPhone 16 Pro Max" height="600" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold text-dark">iPhone 16 Pro Max</h2>
              <p className="text-dark">Pro Beyond.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="iPhone Series Watch" height="600" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="fw-bold">iPhone 8 Series</h2>
              <p>Adventure awaits on your wrist.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="main3">
        <section className="container my-5">
          <div className="macbook-section mx-auto p-4 shadow-lg rounded-4 bg-white">
            <div className="row align-items-center">

              <h2 className="fw-bold mb-4 text-center">MacBook Air</h2>

              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img src={img4} alt="MacBook Air" className="img-fluid rounded-4 shadow-sm" id="scale" />
              </div>

              <div className="col-md-6">

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaBolt className="text-warning fs-4 me-3" />
                  <div>
                    <strong>M-series Chip</strong>
                    <p className="mb-0">Unparalleled performance and efficiency with Apple’s own M-series silicon.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaLaptop className="text-dark fs-4 me-3" />
                  <div>
                    <strong>Ultra-Thin Design</strong>
                    <p className="mb-0">A sleek design that’s easy to carry and comfortable to use anywhere.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaBatteryFull className="text-success fs-4 me-3" />
                  <div>
                    <strong>All-Day Battery Life</strong>
                    <p className="mb-0">Work, create, and explore all day without needing to recharge.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <MdDisplaySettings className="text-warning fs-4 me-3" />
                  <div>
                    <strong>Retina Display</strong>
                    <p className="mb-0">A high-resolution display that brings visuals to life with stunning detail.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaLock className="text-warning fs-4 me-3" />
                  <div>
                    <strong>Advanced Security</strong>
                    <p className="mb-0">Built-in security features like Touch ID to keep your data safe.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main4">
        <section className="container my-5">
          <div className="macbook-section mx-auto p-4 shadow-lg rounded-4 bg-white">
            <div className="row align-items-center flex-md-row-reverse">

              <h2 className="fw-bold mb-4 text-center">iPhone 16 Pro Features</h2>

              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img src={img1} alt="iPhone 16 Pro" className="img-fluid rounded-4 shadow-sm" id="scale" />
              </div>

              <div className="col-md-6">

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaMicrochip className="text-primary fs-4 me-3" />
                  <div>
                    <strong>A18 Pro Chip</strong>
                    <p className="mb-0">Superfast and energy-efficient, making your phone more responsive than ever.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <MdDisplaySettings className="text-danger fs-4 me-3" />
                  <div>
                    <strong>Stunning Display</strong>
                    <p className="mb-0">Experience colors and clarity with the 6.3-inch Super Retina XDR display.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaCamera className="text-warning fs-4 me-3" />
                  <div>
                    <strong>Advanced Camera System</strong>
                    <p className="mb-0">Capture every moment with a triple-lens camera setup.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaWifi className="text-success fs-4 me-3" />
                  <div>
                    <strong>Wi-Fi</strong>
                    <p className="mb-0">Faster download speeds and better connectivity.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main5">
        <section className="container my-5">
          <div className="macbook-section mx-auto p-4 shadow-lg rounded-4 bg-white">
            <div className="row align-items-center flex-md-row-reverse">

              <h2 className="fw-bold mb-4 text-center">Apple Watch Series</h2>

              <div className="col-md-6">

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaHeartPulse className="text-danger fs-4 me-3" />
                  <div>
                    <strong>Health Monitoring</strong>
                    <p className="mb-0">Track your heart rate, ECG, and more.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaPersonRunning className="text-success fs-4 me-3" />
                  <div>
                    <strong>Fitness Tracking</strong>
                    <p className="mb-0">Monitor workouts and calories.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaCarBurst className="text-warning fs-4 me-3" />
                  <div>
                    <strong>Crash Detection</strong>
                    <p className="mb-0">Automatic accident detection.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center mb-3 p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaWater className="text-primary fs-4 me-3" />
                  <div>
                    <strong>Water Resistance</strong>
                    <p className="mb-0">Swim-ready design.</p>
                  </div>
                </div>

                <div className="feature-item d-flex align-items-center p-3 rounded-3 bg-light shadow-sm" id="scale">
                  <FaClock className="text-dark fs-4 me-3" />
                  <div>
                    <strong>Always-On Display</strong>
                    <p className="mb-0">See info at a glance.</p>
                  </div>
                </div>

              </div>

              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img src={img3} alt="Apple Watch Series" className="img-fluid rounded-4 shadow-sm" id="scale" />
              </div>

            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;
