import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>“Take into account that great love and great achievements involve great risk.” —Dalai Lama</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
