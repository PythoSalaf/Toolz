import React from "react";
import styled from "styled-components";
import { Youtubebg } from "../../Assets";
import { Subscribe } from "../../Components";
import YoutubeData from "../YoutubeDonwload/YoutubeData";
import YoutubeCards from "./YoutubeCards";
import { motion } from "framer-motion";
const Youtube = () => {
  const Data = YoutubeData.map((items) => (
    <YoutubeCards key={items.id} {...items} />
  ));
  return (
    <>
      <YoutubeContainer>
        <div className="container">
          <input type="search" placeholder="Paste your video link here..." />
          <button>Start Download</button>
        </div>
        <div className="content">
          <motion.h2
            whileInView={{ x: [-200, 0] }}
            transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
          >
            WHY CHOOSE TOOLZ?
          </motion.h2>
          <div className="card-data">{Data}</div>
        </div>
        <Subscribe />
      </YoutubeContainer>
    </>
  );
};

export default Youtube;

const YoutubeContainer = styled.section`
  .container {
    background: linear-gradient(rgb(9, 9, 9, 0.2), rgb(9, 9, 9, 0.2)),
      url(${Youtubebg});
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

    input {
      width: 60%;
      height: 4rem;
      border-radius: 20px;
      border: none;
      outline: none;
      padding: 30px 16px;
      color: #030303;
      font-size: 24px;
      margin-bottom: 2rem;
      padding: 0 1.5rem;
      background-color: #d9d9d9;

      @media screen and (max-width: 768px) {
        height: 3rem;
        width: 90%;
        font-size: 14px;
      }
    }

    button {
      color: #d9d9d9;
      background-color: #425d70;
      font-size: 24px;
      font-weight: 500;
      padding: 20px 30px;
      border-radius: 15px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      transition: 0.3s ease-in-out;

      &:hover {
        color: #425d70;
        background-color: #d9d9d9;
      }
      @media screen and (max-width: 768px) {
        font-size: 15px;
        padding: 14px 20px;
        font-weight: 600;
      }
    }
    @media screen and (max-width: 768px) {
      height: 50vh;
    }
  }
  .content {
    background-color: #fbfbfb;
    padding: 2rem 0;

    h2 {
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }
    .card-data {
      margin: 5.5rem 0 2rem;
      display: grid;
      /* padding: 1rem 0; */
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 3.5rem 0 2rem;
      }
    }
  }
`;
