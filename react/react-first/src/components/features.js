import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-eye" style={{ color: "#ffbb2c" }}></i>
              <h3>Lorem Ipsum</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="features-item">
              <i className="bi bi-infinity" style={{ color: "#5578ff" }}></i>
              <h3>Dolor Sitema</h3>
            </div>
          </div>
          {/* Add more features as necessary */}
        </div>
      </div>
    </section>
  );
};

export default Features;
