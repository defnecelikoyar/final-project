import React from "react";

function About() {
  document.body.style.backgroundColor = "#ff251d";

  return (
    <div className="about-container">
      <h3 className="about-title"><a className="name-link" href="https://forvo.com/word/defne/" target="_blank" rel="noreferrer">DEFNE</a> LEMAN ÇELİKOYAR</h3>
      <h3 className="about-description">is a software developer, coder/designer, writer & artist living in brooklyn.</h3>
      <h3 className="about-switch">she is uncomfortable writing in third-person, so she'll be switching to first starting... now. I was raised in the great city of istanbul, the largest city and cultural capital of turkey. from an early age, I developed a great curiosity about our world — how it worked, where it failed, and what it could become. <a className="in-my-code" href="/portfolio">in my code,</a> I try to bring my dynamic approach and <a className="artistic-training" href="/resume">artistic training</a> together to create products that connect human beings, establish healthy, working systems, and challenge the ways we perceive our world.</h3>
      
      <h3 className="contact-me">if you want to <a className="about-link" href="https://www.linkedin.com/in/defnecelikoyar/" target="_blank" rel="noreferrer">hire me</a> (or just want to chat), you can <a className="about-link" href="/contact">contact me here</a>.</h3>
      <h3 className="contact-me">if you want to go back to the start, you can <a className="about-link" href="/">return home here</a>.</h3>
    </div>
  );
}

export default About;