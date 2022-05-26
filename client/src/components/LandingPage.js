import React from "react";

function LandingPage() {
  document.body.style.backgroundColor = "#000000";
  
  return (
    <div className="landing-container">
      <ul>
        <li><a className="landing-link" href="/about">ABOUT</a></li>
        <li><a className="landing-link" href="/resume">RESUME</a></li>  
        <li><a className="landing-link" href="/portfolio">PROJECTS</a></li>
        <li><a className="landing-link" href="/contact">CONTACT</a></li>
      </ul>
    </div>
  );
}

export default LandingPage;