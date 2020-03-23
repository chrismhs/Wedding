import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Link, Button, TitleCenter, TextCenter } from "../styles/typography"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  height: 80vh;
  min-height: 600px;

  /* border-bottom: 1px solid ${theme.darkgreen}; */

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

const BackgroundColor = styled.div`
  background-color: ${theme.white};
  width: 100%;
  position: absolute;
  left: 0;
  z-index: -5;
  height: 80vh;
  min-height: 600px;
`

const ContentWrapper = styled.div``

const OutboundLinkStyled = styled(OutboundLink)`
  text-decoration: none;
`

const ButtonContainer = styled.div`
  text-align: center;
`

const Intro = () => (
  <Layout>
    <BackgroundColor />
    <ContentWrapper>
      <TitleCenter>19th June 2021</TitleCenter>

      <TextCenter>
        <OutboundLinkStyled
          target="blank"
          href="https://www.addevent.com/event/TW3460747"
        >
          <Link>Add the new, better date to your calendar</Link>
        </OutboundLinkStyled>
      </TextCenter>
      <TextCenter>
        We feel very lucky to be able to welcome you to{" "}
        <Link href="https://goo.gl/maps/K3T8puL6ymQTNiU56" target="_blank">
          Marche Manor
        </Link>{" "}
        where Chris holds many fond memories of his childhood and where he asked
        Rose to be his girlfriend over 5 years ago on their 3rd date (when you
        know, you know)!
      </TextCenter>
      <TextCenter>
        With our ceremony, reception and camping options on site, we can't wait
        to celebrate with you on our wedding day in the heart of the Shropshire
        countryside.
      </TextCenter>

      <ButtonContainer>
        <Button href="https://forms.gle/ybU5Aedrw5Ym3aSm9" target="_blank">
          RSVP
        </Button>
      </ButtonContainer>
    </ContentWrapper>
  </Layout>
)

export default Intro
