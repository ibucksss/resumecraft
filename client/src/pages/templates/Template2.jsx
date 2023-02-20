import React, { useState } from "react";
import "../../styles/templates.css";
function Template2() {
  const user = JSON.parse(localStorage.getItem("ResumeCraft-user"));
  return (
    <div className="template2-container t-container">
      <div className="t-header">
        <h1 className="t-name">
          {user.firstName} {user.lastName}
        </h1>
        <div className="additional-personal-info t-info">
          {user.email && <p>{user.email}</p>}
          {user.phoneNumber && <p>{user.phoneNumber}</p>}
          {user.address && <p>{user.address}</p>}
          {user.website && <p>{user.website}</p>}
        </div>
      </div>
      <div className="main-content">
        <div className="main-left">
          {user.education.length != 0 && (
            <div className="education">
              <h2 className="t-title">Education</h2>
              {user.education.map((education) => {
                return (
                  <div className="education-container-2 container">
                    <h3 className="t-subtitle">{education.school}</h3>
                    <h5 className="t-med-header">{education.degree}</h5>

                    <h6 className=" t-small-header">
                      {education.educationYears}
                    </h6>
                    <h6 className="t-small-header">GPA: {education.gpa}</h6>
                  </div>
                );
              })}
            </div>
          )}
          {user.userSkills.length != 0 && (
            <div className="skills skills-2">
              <h2 className="t-title">Skills</h2>

              {user.userSkills.map((skill) => {
                return (
                  <div className="skill-container-2 container">
                    <h3 className="t-subtitle">{skill.skill}</h3>
                    <p className="t-text">{skill.skillOverview}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="main-right">
          {user.objective && (
            <div>
              <h2 className="t-title">Objective</h2>

              <p className="t-text">{user.objective}</p>
            </div>
          )}
          {user.jobs.length != 0 && (
            <div className="jobs">
              <h2 className="t-title">Experience</h2>
              <hr className="hr"></hr>
              {user.jobs.map((job) => {
                return (
                  <div className="container experience-container">
                    <div className="left">
                      <h3 className="t-subtitle">{job.company}</h3>
                      <h5 className="t-med-header">{job.position}</h5>
                      <p className="t-text">{job.jobOverview}</p>
                    </div>
                    <div className="right">
                      <h6 className="t-small-header">{job.years}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {user.projects.length != 0 && (
            <div className="projects">
              <h2 className="t-title">Projects</h2>
              <hr></hr>
              {user.projects.map((project) => {
                return (
                  <div className="project-container container ">
                    <div className="left">
                      <h3 className="t-subtitle">{project.projectName}</h3>
                      <p className="t-text">{project.projectOverview}</p>
                    </div>

                    <div className="right">
                      <h6 className="t-small-header">{project.projectDates}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* <div className="header">
        <h1 className="t-name">
          {user.firstName} {user.lastName}
        </h1>
        <div className="additional-personal-info t-info">
          {user.email && <p>{user.email}</p>}
          {user.phoneNumber && <p>{user.phoneNumber}</p>}
          {user.address && <p>{user.address}</p>}
          {user.website && <p>{user.website}</p>}
        </div>
      </div>
      <div className="divider"></div>
      {user.objective && (
        <div className="objective">
          <h2 className="t-title">Objective</h2>
          <hr className="hr" />
          <p className="t-text">{user.objective}</p>
        </div>
      )}
      {user.education.length != 0 && (
        <div className="education">
          <h2 className="t-title">Education</h2>
          <hr className="hr"></hr>
          {user.education.map((education) => {
            return (
              <div className="education-container container">
                <div className="left">
                  <h3 className="t-subtitle">{education.school}</h3>
                  <h5 className="t-med-header">{education.degree}</h5>
                </div>
                <div>
                  <h6 className="right t-small-header">
                    {education.educationYears}
                  </h6>
                  <h6 className="right t-small-header">GPA: {education.gpa}</h6>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {user.jobs.length != 0 && (
        <div className="jobs">
          <h2 className="t-title">Experience</h2>
          <hr className="hr"></hr>
          {user.jobs.map((job) => {
            return (
              <div className="container experience-container">
                <div className="left">
                  <h3 className="t-subtitle">{job.company}</h3>
                  <h5 className="t-med-header">{job.position}</h5>
                  <p className="t-text">{job.jobOverview}</p>
                </div>
                <div className="right">
                  <h6 className="t-small-header">{job.years}</h6>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {user.userSkills.length != 0 && (
        <div className="skills">
          <h2 className="t-title">Skills</h2>
          <hr></hr>
          {user.userSkills.map((skill) => {
            return (
              <div className="skill-container container">
                <h3 className="t-subtitle">{skill.skill}</h3>
                <p className="t-text">{skill.skillOverview}</p>
              </div>
            );
          })}
        </div>
      )}
      {user.projects.length != 0 && (
        <div className="projects">
          <h2 className="t-title">Projects</h2>
          <hr></hr>
          {user.projects.map((project) => {
            return (
              <div className="project-container container ">
                <div className="left">
                  <h3 className="t-subtitle">{project.projectName}</h3>
                  <p className="t-text">{project.projectOverview}</p>
                </div>

                <div className="right">
                  <h6 className="t-small-header">{project.projectDates}</h6>
                </div>
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
}

export default Template2;
