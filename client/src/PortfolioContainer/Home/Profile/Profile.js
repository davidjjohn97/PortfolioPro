import React from "react";
import ScrollService from "../../../utilities/scrollService"
import './Profile.css';

import { useTypewriter, cursor } from "react-simple-typewriter";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Tech Enthusiast 😃",
      "Full Stack Dev 🧑🏽‍💻",
      "MERN Stack Dev 🖥️ ",
      "AWS Certified Cloud Practitioner 🌐 ",
      "Data Analyst 🥸 ",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/davidjjohn97/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/davidjjohn97">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC5tcXZy3bsSsH09xQn3159w">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.instagram.com/_davijo_/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">David Johnson</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text" >
              {" "}
              <h1>
                {" "}
                <span style={{ fontWeight: "bold"}}>{typeEffect}</span>
              </h1>
            </span>
            <span className="profile-role-tagline">
              Recent Masters Graduate looking for opportunities to "Learn",
              "Contribute" & "Grow"
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" 
            onClick={() => ScrollService.scrollService.scrollToHireMe()}> Hire Me </button>
            <a href="DavidResume.pdf" download="DavidJohnsonResume.pdf">
              <button className="btn highlighted-btn">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
