import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <h2>Pricing Plans</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Basic Plan</Card.Title>
                <Card.Text>
                  $9/month
                  <br /> Access to basic features.
                </Card.Text>
                <Button variant="primary">Choose Plan</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more pricing cards */}
        </Row>
      </div>
    </section>
  );
};

export default Pricing;
