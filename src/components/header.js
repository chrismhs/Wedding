// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import AnchorLink from "react-anchor-link-smooth-scroll"

const HeaderContainer = styled.header`
  position: fixed;
  background-color: ${theme.darkgreen};
  width: 100%;
  /* height: 56px; */
  padding: 12px;
  display: flex;
  justify-content: center;
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
  <HeaderContainer>
    <Anchor href="#wedding">The Wedding</Anchor>
    <Anchor href="#camping">Camping</Anchor>
    <Anchor href="#location">Location</Anchor>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
