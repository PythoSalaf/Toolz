import React from "react";
import styled from "styled-components";

const ForgetPassword = () => {
  return (
    <>
      <ForgetpassContainer>
        <h1>Forget Password</h1>
        <input type="email" placeholder="Enter your email address" />
        <button>Continue</button>
      </ForgetpassContainer>
    </>
  );
};

export default ForgetPassword;

const ForgetpassContainer = styled.section`
  background-color: #fbfbfb;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    margin: 1rem 0 3rem;
    padding: 1rem 0 0;
    color: #425d70;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        font-weight: 600;
    }
  }

  input {
    width: 45%;
    height: 3rem;
    margin: 1rem 0 2rem;
    padding: 0 0 0 10px;
    border-radius: 10px;
    font-size: 20px;
    color: #222;
    font-weight: 600;
    border: 2px solid #425d70;
    &::placeholder {
        color: #222;
    }

    
    @media screen and (max-width: 768px) {
        width: 80%;
        font-size: 18px;
        font-weight: 500;
    }
  }
  button {
    width: 25%;
    color: #D9D9D9;
    background-color: #425d70;
    padding: 1rem 2rem ;
    font-size: 22px;
    border-radius: 10px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        border: 1px solid #425d70;
        background-color: inherit;
        color: #425d70;
    }

    @media screen and (max-width: 768px) {
        width: 60%;
        font-size: 18px;
        font-weight: 500;
    }
  }
`;
