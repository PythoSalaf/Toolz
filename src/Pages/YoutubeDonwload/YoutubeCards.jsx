import React from "react";
import styled from "styled-components";

const YoutubeCards = ({ image, title, describtion }) => {
  return (
    <>
      <CardContainer>
        <img src={image} alt="icons" />
        <h3> {title} </h3>
        <p>{describtion}</p>
      </CardContainer>
    </>
  );
};

export default YoutubeCards;

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 90%;
    height: 250px;
    margin: 1rem 0;
    transition: 0.3s all ease-in-out;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    padding: 0 5px;
    margin: 0.9rem 0;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  p {
    font-size: 18px;
    text-align: center;
    padding: 0 5px;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
