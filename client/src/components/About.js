import React from "react";

function About() {
  document.body.style.backgroundColor = "#DEDED1";

  return (
    <div style={{color: "#8B0000"}} className="container">
      <h3 className="about">hi I'm defne and this is my personal website...</h3>
      <div id="about-nav">
        <a className="outsider" href="/">home</a>
        <a className="outsider" href="/resume">resume</a>
        <a className="outsider" href="/portfolio">projects</a>
        <a className="outsider" href="/contact">contact</a>
      </div> 
    </div>
  );
}

export default About;