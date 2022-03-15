import React, { useEffect, useState } from "react";
import About from "./About";
import Cover from "./Cover";
import WhoAreU from "./WhoAreU";
import SignUp from "./SignUp";
import Blog from "./Blog";
import GuestBook from "./GuestBook";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import { useNavigate, Routes, Route } from "react-router-dom";
import '../index.css';

function App() {
  const token = localStorage.getItem("jwt");
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleLogin(user) {
    setCurrentUser(user);
    setLoggedIn(true);
    navigate(`/`);
  };


  function handleLogOut() {
    setLoggedIn(false);
    localStorage.clear();
    navigate(`/`);
  };


  useEffect(() => {
    fetch('/api/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(res => {
      if(res.ok) {
        res.json().then(data => {
          setCurrentUser(data.user)
          setLoggedIn(true);
        })
      } else {
        res.json().then(data => {
          setErrors(data.errors)
        })
      }
    })
  }, [token])

  if(!currentUser) return <WhoAreU setCurrentUser={setCurrentUser} />

  if (loggedIn === false) {
    return (
      <div>
        <Routes>
            <Route path="/signup" element={<SignUp handleLogin={handleLogin} />} />
            <Route path="/whoareu" element={<WhoAreU onLogin={handleLogin}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Cover loggedIn={loggedIn} handleLogOut={handleLogOut}/>} />
            {errors ? errors.map((e) => <div>{e}</div>) : null}
        </Routes>
      </div>
    )
  }

  return (
    <div className="App">
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/whoareu" element={<WhoAreU setCurrentUser={setCurrentUser}/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Cover loggedIn={loggedIn} handleLogOut={handleLogOut}/>} />
        </Routes>
    </div>
  );
}

export default App;