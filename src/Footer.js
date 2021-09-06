import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Locations</h2>
                  <ul>
                    <li>
                      <Link to="/">Toronto</Link>
                    </li>
                    <li>
                      <Link to="/">Windsor</Link>
                    </li>
                    <li>
                      <Link to="/">London</Link>
                    </li>
                    <li>
                      <Link to="/">Vancouver</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <Link to="/">Call</Link>
                    </li>
                    <li>
                      <Link to="/">Service Ticket</Link>
                    </li>
                    <li>
                      <Link to="/">Email</Link>
                    </li>
                    <li>
                      <Link to="/">Link</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <Link to="/">Money Transfer</Link>
                    </li>
                    <li>
                      <Link to="/">Pay Bills</Link>
                    </li>
                    <li>
                      <Link to="/">Exchange Rate</Link>
                    </li>
                    <li>
                      <Link to="/">Payments</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">

                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.facebook.com"
                        target="facebook">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com"
                        target="instagram">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.youtube.com"
                        target="youtube">
                      <i class="fab fa-youtube fontawesome-style"></i>
                      </a>
                    </div>

                    <div className="col-3 mx-auto">
                    <a
                        href="https://www.twitter.com"
                        target="twitter">
                      <i class="fab fa-twitter fontawesome-style"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 JazPay. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
