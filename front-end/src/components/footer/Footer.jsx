import React from "react";
import "./footer.css";
import logo from "../../assets/1.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__title">
          <img src={logo} alt="" className="footer__title" />
        </div>
        <ul className="footer__list">
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/GPVdev/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/gabe.vllrl/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/GPVdev"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; GPVdev. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
