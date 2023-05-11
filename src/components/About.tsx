import React from "react";
import styled, { keyframes } from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <div className="wave"></div>
      <div className="about-container">
        <h1>About</h1>
        <p>
          I started my journey into the world of app development in 2020. After
          immersing myself in the discipline, I recently graduated with a
          Professional Diploma in Computer Science from TU Dublin. As a lifelong
          learner, I continually enhance my skills, specializing in frontend
          technologies like Typescript, React and Angular. On the backend, I'm
          comfortable with Node.js, Express, and MongoDB. Right now, I'm excited
          to be working on a full-stack application incorporating all these
          technologies.
        </p>
        <h1>About This App</h1>
        <p>
          This application emphasizes user experience by ensuring intuitive
          functionality and seamless performance. It's built using modern web
          technologies such as React, TypeScript, and styled-components for
          wide-ranging compatibility and responsive design, enhancing its appeal
          to users.
        </p>
      </div>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 1rem 2rem;

  .about-container {
    max-width: 800px;
    padding: 40px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 1s ease-in-out;
  }

  .about-container * {
    margin: 1rem;
  }

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid white;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
    animation: ${fadeIn} 2s ease-in-out;
  }
`;

export default About;
