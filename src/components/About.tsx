import React from "react";
import styled from "styled-components";
// import image1 from "../assets/image1.jpg";
// import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";

const About = () => {
  return (
    <Wrapper>
      <main>
        <section className="about-section">
          <div className="content">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio.
            </p>
          </div>
          <div className="image-container">
            {/* <img src={image1} alt="Image 1" /> */}
          </div>
        </section>
        <section className="about-section reversed">
          <div className="content">
            <h1>Our Mission</h1>
            <p>Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
          </div>
          <div className="image-container">
            {/* <img src={image2} alt="Image 2" /> */}
          </div>
        </section>
        <section className="about-section">
          <div className="content">
            <h1>Our Vision</h1>
            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
              semper porta.
            </p>
          </div>
          <div className="image-container">
            {/* <img src={image3} alt="Image 3" /> */}
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  main {
    margin-top: 3rem;
    padding: 0 1rem;
  }

  .about-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    box-shadow: var(--darkShadow);
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .about-section.reversed {
    flex-direction: row-reverse;
  }

  .content {
    flex: 1;
  }

  .image-container {
    flex: 1;
    padding: 0 1rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
  }

  /* Tablet and desktop styles */
  @media screen and (min-width: 768px) {
    main {
      margin-top: 5rem;
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
    }

    .about-section {
      padding: 3rem;
    }

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export default About;
