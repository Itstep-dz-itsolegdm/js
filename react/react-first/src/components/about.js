import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-xl-5">
            <h3>About Us</h3>
            <h2>Ducimus rerum libero reprehenderit cumque</h2>
            <p>
              Ipsum sit sint. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non.
            </p>
            <a href="#" className="read-more">
              <span>Read More</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              <div className="col-md-6">
                <div className="icon-box">
                  <i className="bi bi-buildings"></i>
                  <h3>Eius provident</h3>
                  <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="icon-box">
                  <i className="bi bi-clipboard-pulse"></i>
                  <h3>Rerum aperiam</h3>
                  <p>Autem saepe animi et aut aspernatur culpa facere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
