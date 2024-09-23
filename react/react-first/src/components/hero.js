import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'bootstrap';  // Bootstrap JavaScript
import '@popperjs/core';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg-2.jpg" alt="" className="hero-bg" />
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4 order-lg-last hero-img">
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>Build Your Landing Page With <span>Bootslander</span></h1>
            <p>We are a team of talented designers making websites with Bootstrap</p>
            <div className="d-flex">
              <Button href="#about" className="btn-get-started">Get Started</Button>
              <Button className="btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
