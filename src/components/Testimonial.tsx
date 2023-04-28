import React from "react";
import styled from "styled-components";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const Testimonial = () => {
  return (
    <Wrapper className="section-testimonial">
      <div className="testimonial-container">
        <div className="profile-one">
          <h2>Lorem ipsum dolor</h2>
          <img className="headshot-images" src={profile1} alt="" />
          <p>
            I'm baby austin XOXO man bun, kale chips poke hexagon waistcoat
            ascot. Mumblecore blog hammock, bruh sus echo park photo booth
            poutine +1 mlkshk tacos ennui venmo.
          </p>
        </div>
        <div className="profile-two">
          <h2>Lorem ipsum dolor</h2>
          <img className="headshot-images" src={profile2} alt="" />
          <p>
            I'm baby locavore art party franzen kinfolk. Brunch yr hell of
            dreamcatcher, next level kogi subway tile truffaut pour-over hashtag
            mumblecore tbh microdosing stumptown cred.
          </p>
        </div>
        <div className="profile-three">
          <h2>Lorem ipsum dolor</h2>
          <img className="headshot-images" src={profile3} alt="" />
          <p>
            I'm baby asymmetrical meditation neutra affogato farm-to-table, raw
            denim celiac skateboard ennui taxidermy praxis pabst scenester banh
            mi.
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

  .headshot-images {
    object-fit: cover;
    border-radius: 50%;
    width: 50%;
  }
  @media screen and (min-width: 750px) {
  }

  @media screen and (min-width: 1200px) {
    .testimonial-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .headshot-images {
      object-fit: cover;
      border-radius: 50%;
      width: 50%;
    }
  }
`;

export default Testimonial;
