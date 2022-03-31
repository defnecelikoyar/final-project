import React from "react";

function Cover() {
    document.body.style.backgroundColor = "#CCCC00";

  return (
    <div>
        <a href="/home"><img id="evil-eye" alt="evil-eye" src="https://www.pinclipart.com/picdir/big/197-1977785_-kil-evil-eye-svg-clipart.png"></img></a>
        <div id="nav">
          <a className="outsider" href="/resume">resume</a>
          <a className="outsider" href="/portfolio">projects</a>
          <a className="outsider" href="/about">about</a>
          <a className="outsider" href="/contact">contact</a>
        </div>
    </div>
  );
}

export default Cover;