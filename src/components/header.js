// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"
import theme from "../styles/theme"
import AnchorLink from "react-anchor-link-smooth-scroll"

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const HeaderContainer = styled.header`
  opacity: 0;
  position: fixed;
  background-color: ${theme.darkgreen};
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 3s;
`

const Anchor = styled(AnchorLink)`
  font-size: 1rem;
  font-family: "Crimson Text", "Georgia", "serif";
  font-weight: normal;
  color: ${theme.white};
  text-decoration: none;
  margin: 0 15px;
  transition: 0.2s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0);

  :hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
`

const Header = ({ siteTitle }) => (
  <div>
    <HeaderContainer>
      <Anchor href="#welcome">Welcome</Anchor>
      <Anchor href="#wedding">Weekend</Anchor>
      <Anchor href="#camping">Stay</Anchor>
      <Anchor href="#location">Location</Anchor>
    </HeaderContainer>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
