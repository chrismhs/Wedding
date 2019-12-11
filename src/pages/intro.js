import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Link, Button, TitleCenter, TextCenter } from "../styles/typography"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Layout = styled.div`
  width: 100%;
  padding: 200px 0;
  margin: 0 auto;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.darkgreen};

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

const OutboundLinkStyled = styled(OutboundLink)`
  text-decoration: none;
`

const ButtonContainer = styled.div`
  text-align: center;
`

const Intro = () => (
  <Layout>
    <TitleCenter>4th July 2020</TitleCenter>
    <TextCenter>
      <OutboundLinkStyled
        target="blank"
        href="https://www.addevent.com/event/TW3460747"
      >
        <Link>Add to calendar</Link>
      </OutboundLinkStyled>
    </TextCenter>
    <TextCenter>
      We feel very lucky to be able to welcome you to{" "}
      <Link
        href="https://www.google.com/maps/@52.6884963,-2.9855973,3a,75y,204.87h,86.08t/data=!3m6!1e1!3m4!1syDPZDbP39ubARBmFGJd_vA!2e0!7i13312!8i6656"
        target="_blank"
      >
        Marche Manor
      </Link>{" "}
      where Chris holds many fond memories of his childhood and where he asked
      Rose to be his girlfriend over 5 years ago on their 3rd date (when you
      know, you know)!
    </TextCenter>
    <TextCenter>
      With our ceremony, reception and camping options on site, we can't wait to
      celebrate with you on our wedding day in the heart of the Shropshire
      countryside.
    </TextCenter>
    <ButtonContainer>
      <Button href="https://forms.gle/ybU5Aedrw5Ym3aSm9" target="_blank">
        RSVP
      </Button>
    </ButtonContainer>
  </Layout>
)

export default Intro
