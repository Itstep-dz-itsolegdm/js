import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <h2>Gallery</h2>
        <Row>
          <Col md={4}><img src="assets/img/gallery-1.jpg" alt="Gallery 1" className="img-fluid" /></Col>
          <Col md={4}><img src="assets/img/gallery-2.jpg" alt="Gallery 2" className="img-fluid" /></Col>
          <Col md={4}><img src="assets/img/gallery-3.jpg" alt="Gallery 3" className="img-fluid" /></Col>
        </Row>
      </div>
    </section>
  );
};

export default Gallery;
