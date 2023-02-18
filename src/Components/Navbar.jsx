import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import styled from "styled-components";

const Navbar = () => {
 
  
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setToggle(!toggle);
  return (
    <>
      <NavContainer extendNav={toggle}>
        <InnerContainer>
          <LeftContainer>
            <Logo to="/">Toolz</Logo>
          </LeftContainer>
          <RightContainer>
            <LinkContainer>
             <Container>
             <li><NavLink to="/" className={({isActive}) => (isActive ? "activeLink" : "normalLink") }>Youtube downloader</NavLink></li>
             <li><NavLink to="urlshort" className={({isActive}) => (isActive ? "activeLink" : "normalLink") }>Url shortner</NavLink></li>
             <li><NavLink to="removebg" className={({isActive}) => (isActive ? "activeLink" : "normalLink") }>Background remover</NavLink></li>
             <li> <NavLink to="about"  className={({isActive}) => (isActive ? "activeLink" : "normalLink") }>About us</NavLink></li>
             <li><NavLink to="contact"  className={({isActive}) => (isActive ? "activeLink" : "normalLink") }>Contact us</NavLink></li>
             </Container>
            </LinkContainer>
            <ButtonContainer>
              <button>
                <Link to="login">Login</Link>
              </button>
              <button>
                <Link to="signup">Sign Up</Link>
              </button>
            </ButtonContainer>
            <Hambuger
              onClick={() => {
                setToggle(prevState => !prevState);
              }}
            >
              {toggle ? <VscChromeClose /> : <VscMenu />}
            </Hambuger>
          </RightContainer>
        </InnerContainer>
        {toggle && (
          <MobileMenu>
            <MenuLinks to="/" onClick={handleClose}>
              Youtube downloader
            </MenuLinks>
            <MenuLinks to="urlshort" onClick={handleClose}>
              Url shortner
            </MenuLinks>
            <MenuLinks to="removebg" onClick={handleClose}>
              Background remover
            </MenuLinks>
            <MenuLinks to="about" onClick={handleClose}>
              About us
            </MenuLinks>
            <MenuLinks to="contact" onClick={handleClose}>
              Contact us
            </MenuLinks>
            <Link to="login" onClick={handleClose}>
              <button>Login</button>
            </Link>
            <Link to="signup" onClick={handleClose}>
              <button>Sign up</button>
            </Link>
          </MobileMenu>
        )}
      </NavContainer>
    </>
  );
};

export default Navbar;

const Container = styled.ul`
 display: flex;
 align-items: center;
 justify-content: space-between;
  li {
    list-style-type: none;
    margin: 0 1.2rem 0 0;
    .activeLink {
    color: white;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 3px solid #f4f4f4;
    text-decoration: none;
    padding: 0 0 5px 0;
    transition: 0.3s all ease-in-out;
  }
  .normalLink {
    color: white;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    padding: 0 0 5px 0;
  }
  }
  
  
  @media screen and (max-width: 1439px) {
    font-size: 13px;
    font-weight: 700;
    line-height: 43px;
    margin: 0 1rem 0 0;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95px;
  width: 100%;
  padding: 1rem 0;
  background-color: #5c6266;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 904px) {
    height: ${(props) => (props.extendNav ? "100vh" : "85px")};
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const LeftContainer = styled.div`
  flex: 5%;
`;
const RightContainer = styled.div`
  flex: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;

  @media screen and (max-width: 904px) {
    justify-content: right;
  }
`;
const Logo = styled(Link)`
  color: #cacaca;
  font-size: 45px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media screen and (max-width: 1439px) {
    font-size: 34px;
  }
`;
const LinkContainer = styled.div`
  flex: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 904px) {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  flex: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    padding: 0.7rem 1.2rem;
    background-color: #fff;
    cursor: pointer;
    a {
      color: #425d70;
      text-decoration: none;
    }
    @media screen and (max-width: 1439px) {
      font-size: 12px;
      padding: 0.4rem 0.8rem;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 904px) {
    display: none;
  }
`;


const Hambuger = styled.div`
  color: #f5f5f5;
  font-size: 40px;
  font-weight: 800;
  cursor: pointer;

  @media screen and (min-width: 904px) {
    display: none;
  }
`;

const MenuLinks = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  font-weight: 600;
  margin: 1rem 0;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0 0;

  a {
    margin: 1rem 0;
    text-align: center;
    font-size: 22px;
    width: 100%;
    button {
      width: 100%;
      padding: 0.8rem 2.2rem;
      font-size: 20px;
      border-radius: 10px;
      border: none;
    }
  }
  @media screen and (min-width: 904px) {
    display: none;
  }
`;
