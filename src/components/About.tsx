import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <main>
        <section className="about-section">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
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
    background-color: white;
    border-radius: 1rem;
    box-shadow: var(--darkShadow);
    padding: 2rem;
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
