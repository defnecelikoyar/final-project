import React, { useEffect, useState } from "react";

function Portfolio() {
  document.body.style.backgroundColor = "#9d8ae3";

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
          }, [])
        // }, [])
    // }, [])

    if (!isLoaded) return <p>Loading...</p>


  return (
    <div className="projects">
      <h1 className="projects-title">projects</h1>
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
    <div className="project">
        <h1 id="project">{projects[2].name.toLowerCase()}</h1>
        <img id="project" className="resize" src={projects[2].image} alt="project"></img>
        <h3 id="project">{projects[2].description.toLowerCase()}</h3>
        <a className="project" href={projects[2].github}>github</a>
        <a className="project" href={projects[2].demo}>demo</a>
    </div>
      <div id="projects-nav">
        <a className="projects-link" href="/">home</a>
        <a className="projects-link" href="/resume">resume</a>
        <a className="projects-link" href="/about">about</a>
        <a className="projects-link" href="/contact">contact</a>
      </div> 
    </div>
  )
}

export default Portfolio;