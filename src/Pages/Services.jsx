import React from "react";
import "./services.css";
import {
  FaTools,
  FaShieldAlt,
  FaTruck,
  FaSyncAlt,
  FaHeadset,
  FaApple
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-page py-5">

      <div className="container">

        <div className="text-center mb-5">
          <h3 className="text-danger fw-semibold">Services</h3>
          <h1 className="fw-bold">Premium Apple Services</h1>
          <p className="text-muted mt-3 fs-5">
            Designed to support you. Built to last.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="service-card shadow-lg rounded-4 p-4 text-center h-100">
              <FaTools className="service-icon text-danger mb-3" />
              <h4 className="fw-bold">Authorized Repairs</h4>
              <p className="text-muted">
                Expert repairs using genuine Apple parts by certified technicians.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card shadow-lg rounded-4 p-4 text-center h-100">
              <FaShieldAlt className="service-icon text-primary mb-3" />
              <h4 className="fw-bold">Warranty Protection</h4>
              <p className="text-muted">
                Comprehensive warranty coverage for peace of mind and reliability.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card shadow-lg rounded-4 p-4 text-center h-100">
              <FaTruck className="service-icon text-success mb-3" />
              <h4 className="fw-bold">Fast Delivery</h4>
              <p className="text-muted">
                Secure and fast delivery across the country with real-time tracking.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card shadow-lg rounded-4 p-4 text-center h-100">
              <FaSyncAlt className="service-icon text-warning mb-3" />
              <h4 className="fw-bold">Easy Upgrades</h4>
              <p className="text-muted">
                Upgrade to the latest Apple devices with seamless data transfer.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card shadow-lg rounded-4 p-4 text-center h-100">
              <FaHeadset className="service-icon text-info mb-3" />
              <h4 className="fw-bold">24/7 Support</h4>
              <p className="text-muted">
                Dedicated customer support whenever you need assistance.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card shadow-lg rounded-4 p-4 text-center h-100">
              <FaApple className="service-icon text-dark mb-3" />
              <h4 className="fw-bold">Apple Ecosystem</h4>
              <p className="text-muted">
                Seamless integration across all Apple devices and services.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Services;
