import React, {useState} from 'react'

function WhoAreU({onLogin}) {
  document.body.style.backgroundColor = "#CCCC00";
  const token = localStorage.getItem("jwt");

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const loginData = {
    user: {
    username: username,
    password: password
  }}

  function handleSubmit(e){
    e.preventDefault();
    fetch('/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(loginData)
    }).then(r => {
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("jwt", data.jwt);
          onLogin(data.user);
        })
      } else {
        r.json().then(error => setErrors(error))
      }
    })
    setUsername('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit} className="container">
    <h1>login</h1>
    <div className="row">
      <div className='six columns'>
        <label for="username">username </label>
        <input id="username" className="u-full-width" type="text" placeholder="yes" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className='six columns'>
        <label for="password">password </label>
        <input id="password" className="u-full-width" type="password" placeholder="no" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
    </div>
    {/* <br></br> */}
    <input type="submit" value="login" className='button button-first' />
    {/* <input type="submit" value="logout" className='button button-first' onClick={onLogOut}/> */}
    
    {/* if there is error, it will be displayed, other wise do null */}
    {errors ? <p className="error" style={{color: "#E13914"}}>{errors.error}</p> : null}
  </form>
  );
}

export default WhoAreU;