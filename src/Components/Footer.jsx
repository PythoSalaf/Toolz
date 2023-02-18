import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Section>
      <p>&copy; 2023 All Right Reserved License and terms</p>
    </Section>
  )
}

export default Footer
const Section = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  background-color: #FBFBFB;
  padding: 2.5rem 0;

  @media screen and (max-width: 768px) {
      
      font-size: 12px;
    }
`