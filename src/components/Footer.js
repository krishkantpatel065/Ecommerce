import React from "react";
import "../styleFolder/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>shop</h4>
            <ul>
              <li>
                <a href="">True Wireless Earbuds</a>
              </li>
              <li>
                <a href="">Mobile Accessories</a>
              </li>
              <li>
                <a href="">Smartwatch</a>
              </li>
              <li>
                <a href="">Soundbars</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">order</a>
              </li>
              <li>
                <a href="">return</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <div>
              {" "}
              <ul>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">our service</a>
                </li>
                <li>
                  <a href="">contact</a>
                </li>
                <li>
                  <a href="">privacy policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <div className="social-links">
              <a href="">
                <i class="fa-brands fa-facebook"></i>
              </a>

              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>

              <a href="https://instagram.com/gurjar_krishnakant111">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
