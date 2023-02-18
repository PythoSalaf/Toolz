import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <Logo to="/">Toolz</Logo>
      <LoginContainer>
        <div className="container">
          <h1>Login</h1>
          <p>
            Don't have an account?{" "}
            <span>
              <button>
                <Link to="/signup">Sign Up</Link>
              </button>
            </span>
          </p>

          <div className="form-container">
            <form>
              <input
                required
                type="email"
                placeholder="Email"
                autocomplete="off"
              />

              <input
                required
                type="password"
                placeholder="Password"
                autocomplete="off"
              />
              <Link to="/resetpassword" className="forget-password">Forget Password ?</Link>
              <button>Login</button>
            </form>
          </div>
          <p>
            By creating an account, you agree to TOOLZ <br /> Terms of
            Service,Privacy Policy.
          </p>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;


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

const LoginContainer = styled.section`
  background-color: #fbfbfb;
  margin: 4rem 0;
  padding: 2rem 0;
  border-radius: 20px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;

    h1 {
      color: #425d70;
      font-size: 32px;
      font-weight: 700;
      margin: 0 0 2rem;
    }
    p {
      font-size: 26px;
      color: #425d70;
      font-weight: 600;
      margin: 1rem 0;
      padding: 0 1rem;

      span {
        button {
          font-size: 24px;
          font-weight: 500;
          padding: 6px 15px;
          border: 2.5px solid #425d70;
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

        input {
          width: 100%;
          height: 3rem;
          border: 1px solid #425d70;
          border-radius: 0.5rem;
          padding: 2rem 0 2rem 1rem;
          font-size: 22px;
          font-weight: 500;
          margin: 2rem 0;
          ::placeholder {
            color: #425d70;
            font-weight: 500;
            font-size: 24px;
          }
          :focus {
            border: none;
          }
          @media screen and (max-width: 768px) {
            width: 100%;
            margin: 1.8rem 0;
          }
        }

        .forget-password {
          text-align: right;
          text-decoration: none;
          font-size: 22px;
          font-weight: 500;
          color: #425d70;
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
    p {
      font-size: 19px;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
