import React from "react";

const Resume = ({ data }) => {
    let educationElements;
    let workElements;
    let skillsElements;
    let skillMessage;

  if (data) {
    let { skillmessage, education, work, skills } = data

    skillMessage = skillmessage

    educationElements = education.map( (education, index) => {
      return (
        <div key={index}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <p className="date">{education.graduated}</p>
          </p>
          <p>- {education.description}</p>
        </div>
      );
    });

    workElements = work.map( (work, index) => {
      return (
        <div key={index}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    skillsElements = skills.map( (skills, index) => {
      let className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={index}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationElements}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workElements}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillMessage}</p>

          <div className="bars">
            <ul className="skills">{skillsElements}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
