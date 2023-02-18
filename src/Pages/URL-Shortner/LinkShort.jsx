import React from "react";
import styled from "styled-components";
import { Linkbg } from "../../Assets";
import { Subscribe } from "../../Components";

const LinkShort = () => {
  return (
    <>
      <LinkContainer>
        <div className="container">
          <input type="text" placeholder="Paste your URL link here..." />
          <button>SHORTEN URL</button>
        </div>
        <TextContainer>
          <h2>Simple, Fast and Easy to use URL shortener</h2>
          <p>
            TOOLZ URL Shortener allows you to reduce long links from various
            social media <br /> and top sites on the Internet by just pasting
            the long URL and click the <span>SHORTEN URL Button</span>.
          </p>
          <p>
            On the next screen, copy the shortened URL and share it anywhere
          </p>
        </TextContainer>
        <Subscribe />
      </LinkContainer>
    </>
  );
};

export default LinkShort;

const LinkContainer = styled.section`
  .container {
    background: linear-gradient(rgb(9, 9, 9, 0.2), rgb(9, 9, 9, 0.2)),
      url(${Linkbg});
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;

    input {
      width: 50%;
      height: 3rem;
      border-radius: 20px 0 0 20px;
      border: none;
      outline: none;
      padding: 30px 16px;
      color: #000;
      font-size: 21px;
      background-color: #d9d9d9;
      @media screen and (max-width: 768px) {
        width: 95%;
        padding: 24px 16px;
        font-size: 18px;
        border-radius: 20px 20px;
      }
    }
    button {
      border: none;
      background-color: #425d70;
      color: #d9d9d9;
      padding: 1.02rem 2rem;
      font-size: 23px;
      font-weight: 500;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: #425d70;
        background-color: #fff;
      }
      @media screen and (max-width: 768px) {
        margin-top: 2rem;
        padding: 0.7rem 1rem;
        border-radius: 1rem;
        font-size: 16px;
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 50vh;
    }
  }
`;

const TextContainer = styled.div`
  background-color: #fbfbfb;
  padding: 3rem 0.8rem;
  h2 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding: 1rem 0;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
  p {
    font-size: 22px;
    font-weight: 500;
    padding: 1rem 0;
    text-align: center;

    span {
      font-size: 25px;
      font-weight: 600;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }

    @media screen and (max-width: 768) {
      font-size: 14px;
    }
  }
  p {
    margin-top: 1.4rem;
    text-align: center;

    font-size: 20px;
    font-weight: 500;
  }
`;
