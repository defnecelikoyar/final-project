import React from "react";

function Cover({loggedIn, handleLogOut}) {
    document.body.style.backgroundColor = "#CCCC00";

    // const [loggedIn, setLoggedIn] = useState(false);

    console.log(loggedIn);

  const toggle = loggedIn === true ? <div className="insider-nav"><a className="insider" href="/blog">blog</a><input className="insider" type="submit" value="logout" onClick={handleLogOut}/></div> : <div className="outsider-nav"><a className="outsider" href="/guestbook">guestbook</a><a className="outsider" href="/whoareu">login</a><a className="outsider" href="/signup">sign up</a></div>

  return (
    <div>
        <img id="evil-eye" alt="evil-eye" src="https://www.pinclipart.com/picdir/big/197-1977785_-kil-evil-eye-svg-clipart.png"></img>
        <div id="nav">
          <a className="outsider" href="/resume">resume</a>
          <a className="outsider" href="/portfolio">projects</a>
          <a className="outsider" href="/about">about</a>
          <a className="outsider" href="/contact">contact</a>
          {toggle}
        </div>
    </div>
  );
}

export default Cover;