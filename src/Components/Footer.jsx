import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">About Apple Store</h5>
            <p className="text-secondary mb-3">
              Your one-stop destination for the latest Apple products including
              iPhones, MacBooks, iPads, Apple Watches, and premium accessories.
            </p>

            <p className="text-secondary small mb-1">
              <FaClock className="me-2" />
              Support: Mon – Sat (10:00 AM – 8:00 PM)
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link d-block mb-2">
                  <FaChevronRight className="me-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link d-block mb-2">
                  <FaChevronRight className="me-2" /> About
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link d-block mb-2">
                  <FaChevronRight className="me-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link d-block">
                  <FaChevronRight className="me-2" /> Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Customer Support</h5>

            <p className="text-secondary mb-2">
              <FaLocationDot className="me-2" />
              Lahore, Pakistan
            </p>

            <p className="text-secondary mb-2">
              <FaPhone className="me-2" />
              +92 300 123 4567
            </p>

            <p className="text-secondary mb-2">
              <FaEnvelope className="me-2" />
              support@applestore.pk
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
              <a href="#" className="text-white social-icon" aria-label="Facebook">
                <FaFacebook id="blue" />
              </a>
              <a href="#" className="text-white social-icon" aria-label="Instagram">
                <FaInstagram id="blue"  />
              </a>
              <a href="#" className="text-white social-icon" aria-label="Twitter">
                <FaXTwitter id="blue"  />
              </a>
              <a href="#" className="text-white social-icon" aria-label="YouTube">
                <FaYoutube id="blue"  />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-secondary text-center">
          <p className="mb-2 mb-md-0">
            © 2025 <strong className="text-white">Apple Store</strong>. All Rights Reserved.
          </p>
          <p className="mb-0">
            Designed & Developed by{" "}
            <strong className="text-white">MUHAZIB MUSHEER</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
