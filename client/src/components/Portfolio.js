import React, { useEffect, useState } from "react";

function Portfolio() {
    document.body.style.backgroundColor = "#9D8AE3";

    const [projects, setProjects] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`/api/projects`)
        .then(r => r.json())
        .then(projects => {
          setProjects(projects)
          // projects.map(p => {
          //   console.log(p)
          //   setProject(p)
            setIsLoaded(true)
          })
          })
        // }, [])
    // }, [])

    if (!isLoaded) return <p>Loading...</p>


  return (
    <div className="projects">
    <div className="project">
        <h1 id="project">{projects[0].name.toLowerCase()}</h1>
        <img id="project" src={projects[0].image} alt="project"></img>
        <h3 id="project">{projects[0].description.toLowerCase()}</h3>
        <a className="project" href={projects[0].github}>github</a>
        <a className="project" href={projects[0].demo}>demo</a>
    </div>
    <div className="project">
        <h1 id="project">{projects[1].name.toLowerCase()}</h1>
        <img id="project" className="resize" src={projects[1].image} alt="project"></img>
        <h3 id="project">{projects[1].description.toLowerCase()}</h3>
        <a className="project" href={projects[1].github}>github</a>
        <a className="project" href={projects[1].demo}>demo</a>
    </div>
      <div id="nav">
        <a className="outsider" href="/">home</a>
        <a className="outsider" href="/resume">resume</a>
        <a className="outsider" href="/about">about</a>
        <a className="outsider" href="/contact">contact</a>
      </div> 
    </div>
  )
}

export default Portfolio;