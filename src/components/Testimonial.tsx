import React from "react";
import styled from "styled-components";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const Testimonial = () => {
  return (
    <Wrapper className="section-testimonial">
      <div className="testimonial-container">
        <div className="profile profile-one">
          <img className="headshot-images" src={profile1} alt="Profile 1" />
          <h3>John</h3>
          <h2>Language Enthusiast</h2>
          <p>
            The interactive flashcards made learning languages a breeze. Highly
            recommended!
          </p>
        </div>
        <div className="profile profile-two">
          <img className="headshot-images" src={profile2} alt="Profile 2" />
          <h3>Jane</h3>
          <h2>Traveler</h2>
          <p>
            A game-changer for communicating with locals during my travels. Love
            it!
          </p>
        </div>
        <div className="profile profile-three">
          <img className="headshot-images" src={profile3} alt="Profile 3" />
          <h3>Sarh</h3>
          <h2>Business Professional</h2>
          <p>
            Mastered multiple languages, expanding my business worldwide.
            Outstanding!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .testimonial-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
  }

  .testimonial-container * {
    margin: 1rem;
  }

  .profile {
    background-color: #f6f7fb;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .profile:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .headshot-images {
    object-fit: cover;
    border-radius: 5px;
    width: 80%;
  }

  @media screen and (min-width: 750px) {
    .testimonial-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Testimonial;
