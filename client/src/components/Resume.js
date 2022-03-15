import React from 'react';

function Resume() {
    document.body.style.backgroundColor = "#DEDED1";

    return (
        <div className="resume">
            <div id="nav">
                <a className="outsider" href="/">home</a>
                <a className="outsider" href="/portfolio">projects</a>
                <a className="outsider" href="/about">about</a>
            </div> 
            <div className="jobs">
                <h1 id="experience">experience</h1>
                <div className="job">
                    <h2 className="company">BAAD! Bronx Academy of Arts and Dance</h2>
                    <h3 className="job-title">Development Associate</h3>
                    <div className="job-info">
                        <p className="location">Bronx, NY</p>
                        <p className="date">• April 2019 - November 2021</p>
                    </div>
                    <ul className="job-description">
                        <li className="job-description">Led fundraising and grant writing efforts that launched organization’s budget to over $1 million for first time</li>
                        <li className="job-description">Adopted a new CRM software to maximize donor retention and improve online record keeping</li>
                        <li className="job-description">Drafted and assessed budgets for programming, special projects, grant applications and board meetings</li>
                        <li className="job-description">Conducted legal research to support organization’s efforts to make space fully accessible</li>
                    </ul>
                </div>
                <div className="job">
                    <h2 className="company">SwissPost Solutions, Inc.</h2>
                    <h3 className="job-title">Receptionist</h3>
                    <div className="job-info">
                        <p className="location">New York, NY</p>
                        <p className="date">• August 2018 - April 2019</p>
                    </div>
                    <ul className="job-description">
                        <li className="job-description">Managed email lists of 500+ contacts and edited content in the guest list and events calendar </li>
                        <li className="job-description">Greeted and directed employees and clients of Deutsche Bank’s Wall Street location</li>
                    </ul>
                </div>    
            </div>
            <div className="education">
                <h1 id="education">education</h1>
                <div className="school">
                        <h2 className="school">University of Virginia</h2>
                        <div className="school-info">
                            <p className="location">Charlottesville, VA</p>
                            <p className="date">• May 2018</p>
                        </div>
                        <div className="school-description">
                            <p className="school-description">Bachelor of Arts in Political Science and Art History, Minor in Gender & Sexuality</p>
                            <ul className="school-description">
                                <li className="school-description">Echols Scholar (Awarded to the top 7% of incoming students for academic leadership and extracurricular achievement)</li>
                                <li className="school-description">Study abroad: School of International Training (Ulaanbaatar, Mongolia) & University of Arts London (London, UK)</li>
                            </ul>
                        </div>
                    </div> 
                    <div className="school">
                        <h2 className="school">Flatiron School</h2>
                        <div className="school-info">
                            <p className="location">New York, NY</p>
                            <p className="date">• November 2021 - March 2022</p>
                        </div>
                        <p className="school-description">15-week intensive focusing on skills around Javascript, React and Ruby on Rails</p>
                    </div>   
            </div>
            <div className="skills">
                <h1 id="skills">technical skills</h1>
                <ul id="skills">
                    <li className="skill">Javascript</li>
                    <li className="skill">React</li>
                    <li className="skill">Redux</li>
                    <li className="skill">Node.js</li>
                    <li className="skill">Ruby on Rails</li>
                    <li className="skill">Sinatra</li>
                    <li className="skill">Rack</li>
                    <li className="skill">PostgreSQL</li>
                    <li className="skill">ActiveRecord</li>
                    <li className="skill">SQL</li>
                    <li className="skill">HTML5</li>
                    <li className="skill">CSS3</li>
                    <li className="skill">Linux</li>
                    <li className="skill">Git</li>
                    <li className="skill">Heroku</li>
                </ul>
            </div>                                                  
        </div>
    )
}

export default Resume;