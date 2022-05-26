import React from "react";
import eye from "../new_evileye.png";

function Cover() {
    document.body.style.backgroundColor = "#CCCC00";
    console.log(eye);

  return (
    <div>
        <a className="eye-link" href="/home">
          <img className="round-eye" alt="evil-eye" src={eye}></img>
        </a>
        {/* <div id="nav">
          <a className="outsider" href="/resume">resume</a>
          <a className="outsider" href="/portfolio">projects</a>
          <a className="outsider" href="/about">about</a>
          <a className="outsider" href="/contact">contact</a>
        </div> */}
    </div>
  );
}

export default Cover;