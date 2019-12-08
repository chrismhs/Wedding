import styled from "styled-components"
import theme from "./theme"

export const Link = styled.a`
  font-size: 1rem;
  font-family: "Crimson Text", "Georgia", "serif";
  font-weight: normal;
  color: ${theme.darkpink};
  text-decoration: none;
  border-bottom: 1px solid ${theme.darkpink};
`

export const Button = styled.a`
  text-align: center;
  background-color: transparent;
  border: 2px solid ${theme.darkpink};
  margin: 30px 0;
  display: inline-block;
  cursor: pointer;
  padding: 7px 30px 9px;
  text-decoration: none;
  color: ${theme.darkpink};
  transition: all linear 0.1s;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Playfair Display SC", "Georgia", "serif";
  font-weight: normal;
  margin: 30px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h1`
  font-size: 1.5rem;
  font-family: "Playfair Display SC", "Georgia", "serif";
  font-weight: normal;
  margin: 30px 0 15px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

export const Text = styled.p`
  font-size: 1rem;
  font-family: "Crimson Text", "Georgia", "serif";
  font-weight: normal;
`

export const List = styled.li`
  font-size: 1rem;
  font-family: "Crimson Text", "Georgia", "serif";
  font-weight: normal;
  margin-right: 0px;
  list-style-type: circle;
`

export const TitleCenter = styled(Title)`
  text-align: center;
`

export const TextCenter = styled(Text)`
  text-align: center;
`

export default TitleCenter
