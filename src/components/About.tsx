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

const Wrapper = styled.div``;

export default About;
