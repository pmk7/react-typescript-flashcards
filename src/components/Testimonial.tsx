import React from "react";
import styled from "styled-components";
import { testimonials } from "../utils/constants";

interface TestimonialProps {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

const Testimonial: React.FC = () => {
  return (
    <Wrapper>
      {testimonials.map((testimonial: TestimonialProps) => {
        const { id, name, title, quote, image } = testimonial;
        return (
          <div className="testimonial" key={id}>
            <div className="profile">
              <img src={image} alt={name} className="headshot-images" />
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p>{quote}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  .testimonial * {
    margin: 1rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: var(--off-white);
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

  @media screen and (min-width: 778px) {
    .headshot-images {
      width: 12rem;
      height: 9rem;
    }
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }

  .headshot-images {
    width: 15rem;
    height: 12rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.3rem;
  }
`;

export default Testimonial;
