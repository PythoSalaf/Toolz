import React from "react";
import styled from "styled-components";
import { Group } from "../../Assets";
import { Subscribe } from "../../Components";

const BgRemover = () => {
  return (
    <div>
      <BgContainer>
        <div className="container">
          <h2>
            Remove background <br /> from your images using <br /> TOOLZ
          </h2>
          <button>Upload Image</button>
        </div>
        <Subscribe />
      </BgContainer>
    </div>
  );
};

export default BgRemover;

const BgContainer = styled.section`
  .container {
    background: linear-gradient(rgb(9, 9, 9, 0.2), rgb(9, 9, 9, 0.2)),
      url(${Group});
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;

    h2 {
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      color: #2c3a44;
      margin-bottom: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 25px;
      }
    }

    button {
      background: #425d70;
      color: #fff;
      font-size: 24px;
      font-weight: 500;
      padding: 1rem 2rem;
      border: none;
      border-radius: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #fff;
        color: #425d70;
        font-weight: 600;

        @media screen and (max-width: 768px) {
          display: none;
          cursor: pointer;
        }
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
    @media screen and (max-width: 768px) {
      height: 50vh;
    }
  }
`;
