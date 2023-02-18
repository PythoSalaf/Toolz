import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <Logo to="/">toolz</Logo>
      <SignupContainer>
        <div className="container">
          <h1>Sign Up</h1>
          <p>
            Already have an account?{" "}
            <span>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </span>
          </p>

          <div className="form-container">
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" required />
              <label htmlFor="email">Email Address</label>
              <input type="email" required />
              <label htmlFor="pwd">Password</label>
              <input type="password" required />
              <label htmlFor="pwd">Confirm Password</label>
              <input type="password" required />
              <div className="check">
                <input type="checkbox" />
                <p>
                  By creating an account, you agree to TOOLZ Terms of
                  Service,Privacy Policy.
                </p>
              </div>
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </SignupContainer>
    </>
  );
};

export default Signup;

const Logo = styled(Link)`
  font-size: 2.8rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin: 1rem 0 0;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const SignupContainer = styled.section`
  background-color: #fbfbfb;
  margin: 3rem 0;
  padding: 2rem 0;
  border-radius: 20px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      color: #425d70;
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 2rem;
    }
    p {
      font-size: 21px;
      color: #425d70;
      font-weight: 600;
      margin: 1rem 0;
      padding: 0 1rem;

      span {
        button {
          font-size: 24px;
          font-weight: 500;
          padding: 5px 15px;
          border: 3px solid #425d70;
          border-radius: 10px;
          transition: 0.3s ease-in-out;
          a {
            text-decoration: none;
            color: #000;
            &:hover {
              color: #fff;
            }
          }
          @media screen and (max-width: 768px) {
            font-size: 20px;
            margin: 1rem 0 0;
            border: 2px solid #425d70;
          }
          &:hover {
            background-color: #425d70;
            color: #fff;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
      }

      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
    .form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70%;
      margin: 0 auto;

      form {
        padding: 15px 0 0 0;
        display: flex;
        width: 80%;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        label {
          margin: 2rem 0 1.4rem;
          font-size: 20px;
          font-weight: 600;
          color: #425d70;
          text-align: l;
          @media screen and (max-width: 768px) {
            width: 90%;
            margin: 2rem auto;
            font-size: 18px;
          }
        }
        input {
          width: 100%;
          height: 3rem;
          border: 1px solid #425d70;
          border-radius: 0.5rem;
          padding: 0 0 0 1rem;
          font-size: 21px;
          font-weight: 500;
          :focus {
            border: none;
          }
          @media screen and (max-width: 768px) {
            width: 100%;
            margin: auto;
          }
        }
        .check {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 1rem 0 0;

          input {
            flex: 5%;
            width: 30px;
            height: 30px;

            @media screen and (max-width: 768px) {
              width: 50px;
              height: 50px;
            }
          }
          p {
            flex: 90%;
            font-size: 22px;
            text-align: center;

            @media screen and (max-width: 768px) {
              font-size: 13px;
            }
          }
        }

        button {
          background-color: #425d70;
          color: #fff;
          border-radius: 15px;
          font-size: 21px;
          padding: 0.9rem 2.2rem;
          width: 30%;
          border: none;
          margin: 4rem auto 2rem;
          cursor: pointer;

          @media screen and (max-width: 768px) {
            font-size: 18px;
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          width: 100%;
          margin: 0;
        }
      }
    }
  }
`;
