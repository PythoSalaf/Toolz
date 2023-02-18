import React from "react";
import styled from "styled-components";
import { Subscribe } from "../../Components";

const About = () => {
  return (
    <>
      <AboutContainer>
        <h1>About TOOLZ</h1>
        <div className="content-container">
          <div className="top">
            <h3>WHO WE ARE</h3>
            <p> We make online things easier and accessible for everyone</p>
          </div>
          <h3>WHY WE ARE DIFFERENT FROM THE REST</h3>
          <p>
            By making complicated usage of tech simple, we strive hard <br/> to enable
            individuals and businesses in all form of sizes to benefit. <br/> All our
            tools are created to make things easier for users who <br/> want to
            download from YouTube, get their URL shorten for <br/> easier usage and
            remove unnecessary backgrounds from their images.
          </p>
        </div>
      </AboutContainer>
      <Subscribe />
    </>
  );
};

export default About;

const AboutContainer = styled.section`
  padding: 2rem 0;
  background-color: #fbfbfb;

  h1 {
    text-align: center;
    font-size: 50px;
    font-weight: 600;
    margin: 2rem 0;

    @media screen and (max-width: 768px) {
        font-size: 30px;
       
      }
  }

  .content-container {
    background-color:  #425D70;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    width: 90%;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 1rem;
    color: #fff;
    .top {
      h3 {
        font-size: 30px;
        font-weight: 700;
        margin: 1rem 0 ;

        @media screen and (max-width: 768px) {
        font-size: 24px;
       
      }
      }
      p {
        font-size: 24px;
        font-weight: 500;

        @media screen and (max-width: 768px) {
        font-size: 19px;
       
      }
      }
    }
    h3 {
        font-size: 30px;
        font-weight: 700;
        margin: 2rem 0 1rem;

        @media screen and (max-width: 768px) {
        font-size: 21px;
       
      }
      }
      p {
        font-size: 24px;
        font-weight: 500;
        line-height: 3rem;

        @media screen and (max-width: 768px) {
        font-size: 17px;
        line-height: 2rem;
       
      }
      }
  }
`;
