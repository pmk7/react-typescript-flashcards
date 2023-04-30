import React from "react";
import styled from "styled-components";
import { testimonials } from "../utils/constants";

const Testimonial = () => {
  return (
    <Wrapper>
      {testimonials.map((testimonial) => {
        const { id, name, title, quote, image } = testimonial;
        return (
          <div className="testimonial" key={id}>
            <div className="profile">
              <img src={image} alt={name} className="headshot-images" />
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;

  .testimonial * {
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export default Testimonial;
