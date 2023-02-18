import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <h1>Contact Us</h1>
        <div className="form-container">
          <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message' />
            <button>Send message</button>
          </form>
        </div>
      </ContactContainer>
    </>
  )
}

export default Contact

const ContactContainer = styled.div`
  background-color: #fbfbfb;
  padding: 2rem 0;
  border-radius: 10px 10px 0 0;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #425D70;
    text-align: center;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 80%;

      input {
        margin: 1rem 0;
        width: 60%;
        height: 55px;
        border-radius: 10px;
        padding: 0 0 0 12px;
        font-size: 21px;
        font-weight: 500;
        border: 3px solid #425D70;
        color: #425D70;
        ::placeholder {
        color: #425D70;
        font-weight: 600;
        }
       
      @media screen and (max-width: 768px) {
        width: 92%;
        border: 1px solid #425D70;
      }
      }

      textarea {
        resize: none;
        width: 60%;
        padding: 10px 0 0 10px;
        border-radius: 10px;
        margin: 1rem 0 2rem;
        font-size: 21px;
        border: 3px solid #425D70;

        ::placeholder {
        color: #425D70;
        font-size: 21px;
        font-weight: 600;
        }

        @media screen and (max-width: 768px) {
        width: 92%;
        border: 1px solid #425D70;
      }
      }

      button {
        padding: 1rem 2rem;
        font-size: 24px;
        font-weight: 500;
        color: #D9D9D9;
        background-color: #425D70;
        border-radius: 15px;
        border: none;
        cursor: pointer;

        @media screen and (max-width: 768px) {
        font-size: 18px;
        padding: 0.9rem 1.7rem;
      }
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`