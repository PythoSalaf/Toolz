import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <>
      <Error>
        <motion.h2 initial={{ y: -100 }} animate={{ y: 0 }} transition={{type: "spring", stiffness: 190}}>
          404
        </motion.h2>
        <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{type: "spring", stiffness: 50}}>PAGE NOT FOUND</motion.p>
      </Error>
    </>
  );
};

export default ErrorPage;

const Error = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  h2 {
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    margin: 1rem 0 1.5rem;
  }
`;
