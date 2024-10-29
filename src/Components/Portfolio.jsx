/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import demo from '../images/demo.mp4'

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Smart India Hackathon",
    description: "I successfully advanced to the final round of the Smart India Hackathon, a national initiative where students develop innovative solutions to real-world problems through collaborative efforts.",
    url: "https://drive.google.com/file/d/1HJ_-gyLqa1eOUIsnrMDHi82s6bcdP0DR/view?usp=sharing",
  }
  ,
  {
    title: "Movie Web Application",
    description: "I developed a movie web application that allows users to watch trailers and manage movie details, featuring JWT authentication for secure access.",
    url: "https://github.com/manjaycoder/Movie_APP",
  },
  
  {
    title: "My Resume",
    description: "This document showcases my skills and knowledge, detailing the technologies I am proficient in and how I have implemented them in various projects.",
    url: "https://drive.google.com/file/d/1HPOgYnGCid-alk1D4ld8EwgmFh4BRTVK/view?usp=sharing",
  },
  
  {
    title: "LeetCode GitHub Repository",
    description: "This repository contains my solutions to various LeetCode problems, showcasing my coding skills and problem-solving abilities.",
    url: "https://github.com/manjaycoder/leetcode-solution",
  }
  
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <video
            src={demo}
            autoPlay={true}
            loop={true}
            style={{ height: "90%", width: "100%",paddingLeft:"2rem",border:"2rem", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
