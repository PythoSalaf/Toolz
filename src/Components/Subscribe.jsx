import React from "react";
import styled from "styled-components";

const Subscribe = () => {
  return (
    <>
      <Section>
        <div className="update-content">
          <h2>Sign up to receive new updates from TOOLZ</h2>
          <div className="input-content">
            <input type="email" placeholder="Enter Email Address" />
            <button>Submit</button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Subscribe;

const Section = styled.section`
    background-color: #3B4043;
    .update-content {

    h2 {
      text-align: center;
      color: #d9d9d9;
      font-size: 27px;
      font-weight: 500;
      padding: 2rem 0;

      @media screen and (max-width: 768px) {
          font-size: 15px;
      }
    }
    
    .input-content {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      padding: 2rem 0;
      
      input {
        width: 60%;
        height: 55px;
        padding: 1rem;
        font-size: 18px;
        background-color: #F2EAEA;
        @media screen and (max-width: 768px) {
          width: 80%;
          font-size: 16px;
      }
      }
      button {
        padding: 1rem 1.5rem;
        background-color: #425d70;
        font-size: 20px;
        font-weight: 600;
        border: none;
        color: #d9d9d9;
        cursor: pointer;
        width: 15%;
        @media screen and (max-width: 768px) {
          width: 40%;
          font-size: 18px;
          padding: 0.7rem 1rem;
          border-radius: 5px;
      }
        
      }
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;
