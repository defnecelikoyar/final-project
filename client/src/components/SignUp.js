import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp( {handleLogin} ) {
    document.body.style.backgroundColor = "#9D8AE3";

    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState("");
    const [bio, setBio] = useState("");

    let navigate = useNavigate();

    const signUpData = {
        user: {
            username,
            password,
            avatar,
            bio,
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUpData)
        }).then(res => {
            if (res.ok) {
                res.json().then((json) => {
                    handleLogin(json.user);
                    navigate(`/`);
                });
            } else {
                res.json().then((json) => {
                    setErrors(json.errors);
                })
            }
        })
    }

  return (
    <form onSubmit={handleSubmit} className="container">
    <h1>sign up</h1>
    <div className="row">
      <div className='six columns'>
        <label className="username">username </label>
        <input id="username" className="u-full-width" type="text" placeholder="yes" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='six columns'>
        <label className="password">password </label>
        <input id="password" className="u-full-width" type="password" placeholder="no" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='six columns'>
        <label className="avatar">avatar </label>
        <input id="avatar" className="u-full-width" type="avatar" placeholder="pix" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </div>
      <div className='six columns'>
        <label className="bio">bio </label>
        <input id="bio" className="u-full-width" type="bio" placeholder="biö" value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
    </div>
    {/* <br></br> */}
    <input type="submit" value="sign up" className='button button-first'/>
    
    {/* if there is error, it will be displayed, other wise do null */}
    {errors?<h5 style={{color: "#E13914"}}>{errors}</h5>:null}
  </form>
  );
}

export default SignUp;