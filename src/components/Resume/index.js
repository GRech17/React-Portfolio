import React from 'react';
import resume from '../../imgs/resume.pdf';

function Resume() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <div className="section-title about content">
              <h2>Resume</h2>
              <button className="about content resume-btn">
                <a href={resume} target="blank">
                  <span className="resume-btn">
                    Click here to Download my Resume
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;