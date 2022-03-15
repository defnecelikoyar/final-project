import React from "react";

function Contact() {
  document.body.style.backgroundImage = "url('https://i.ibb.co/9pV3nw2/Screen-Shot-2022-01-25-at-6-14-38-PM.png')"

  return (
    <div style={{color: "#8B0000"}} className="container">
    <h3 className="about">call me XOXO</h3>
    <div id="about-nav">
      <a className="outsider" href="/">home</a>
      <a className="outsider" href="/resume">resume</a>
      <a className="outsider" href="/portfolio">projects</a>
      <a className="outsider" href="/about">about</a>
    </div> 
  </div>
  );
}

export default Contact;