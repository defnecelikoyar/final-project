import React, { useState } from "react";

function Contact() {
  document.body.style.backgroundImage = "url('https://i.ibb.co/9pV3nw2/Screen-Shot-2022-01-25-at-6-14-38-PM.png')";

  const [ formData, setFormData ] = useState({
    "name": "",
    "email": "",
    "message": "",
    "nickname": ""
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3000/contacts', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  };

  return (
    <div style={{color: "#8B0000"}} className="container">
    <h3 className="about">call me XOXO</h3>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <div className="form-hidden">
          <label htmlFor="nickname">nickname</label>
          <textarea className="form-control" rows="5" value={formData.nickname} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    {/* <div id="about-nav">
      <a className="outsider" href="/">home</a>
      <a className="outsider" href="/resume">resume</a>
      <a className="outsider" href="/portfolio">projects</a>
      <a className="outsider" href="/about">about</a>
    </div>  */}
  </div>
  );
}

export default Contact;