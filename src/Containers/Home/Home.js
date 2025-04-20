import React from "react";
import "./home.css";

import {
  sass,
  tailwind,
  react,
  js,
  css,
  html,
  Hello,
} from "../../assets/imports";
export default function Home(props) {
  return (
    <section id="Home" className="home-section">
      <div className="home-container max-width">
        <div className="home-text">
          <h2>
            Front-End React Developer <img src={Hello} alt="imageforhii" />
          </h2>
          <p>
            Hi, I'm Dhanji Sharma . A passionate Front-end React Developer based
            in Bihar, Sasaram. 📍
          </p>
          <span>
            <a
              href="https://www.linkedin.com/in/dhanji-sharma-50223a240"
              target="_main"
            >
              <i className="fa-brands fa-linkedin colorfor"></i>
            </a>
            <a href="https://github.com/git-dhanji" target="_main">
              <i className="fa-brands fa-github colorfor"></i>
            </a>
          </span>
        </div>
        <div className="home-blob"></div>
      </div>
      <div className="tech-stack">
        <span>Tech Stack</span>
        <div className="pae" />
        <div className="home-logo">
          <ul>
            <li>
              <img src={html} alt="htmllogo" />
            </li>
            <li>
              <img src={css} alt="htmllog" />
            </li>
            <li>
              <img src={js} alt="htmllogo" />
            </li>
            <li>
              <img src={react} alt="htmllogo" />
            </li>
            <li>
              <img src={tailwind} alt="htmllogo" />
            </li>
            <li>
              <img src={sass} alt="htmllogo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
