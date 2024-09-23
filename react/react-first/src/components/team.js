import React from 'react';

const Team = () => {
  return (
    <section id="team" className="team section">
      <div className="container">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="member">
              <img src="assets/img/team-1.jpg" alt="Team 1" className="img-fluid" />
              <h4>John Doe</h4>
              <span>CEO</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="member">
              <img src="assets/img/team-2.jpg" alt="Team 2" className="img-fluid" />
              <h4>Jane Smith</h4>
              <span>CTO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
