import React from "react"
import styled from "styled-components"
import {
  Link,
  Button,
  TitleCenter,
  TextCenter,
  Subtitle,
  Text,
  BigText,
} from "../styles/typography"

import HousePhoto from "../images/house-01.jpeg"
import ConfettiGif from "../images/pazazz.gif"

const Layout = styled.div`
  width: 100%;
  padding: 150px 0 0;

  @media (max-width: 768px) {
    padding: 50px 0 0;
  }
`

const Space = styled.div`
  height: 40px;
`

const Image = styled.div`
  margin: 0 -10% 50px;
  background-image: url(${HousePhoto});
  background-size: cover;
  background-position: center center;
  height: 600px;
  width: 120%;

  @media (max-width: 1050px) {
    width: 100%;
    margin: 0 0 50px;
  }

  @media (max-width: 768px) {
    height: 350px;
    margin: 0 0 50px 0;
  }
`
const LocationTitle = styled.div`
  margin: 50px 0 0 -10%;

  @media (max-width: 1050px) {
    margin: 50px 0 0 0px;
  }
`

const BackgroundColor = styled.div`
  background-color: #fff;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: -5;
  height: 850px;
  min-height: 600px;
`

const ButtonContainer = styled.div`
  margin: 100px 0;
  text-align: center;
`

const Venue = () => (
  <Layout>
    <Image
      data-sal="fade"
      data-sal-delay="000"
      data-sal-duration="600"
      data-sal-easing="cubic-bezier(.55, .085, .68, .53)"
      alt=""
    />
    <LocationTitle>
      <BigText
        data-sal="fade"
        data-sal-delay="300"
        data-sal-duration="600"
        data-sal-easing="cubic-bezier(.55, .085, .68, .53)"
      >
        Marche Manor
      </BigText>
    </LocationTitle>
    <Text>Address:&nbsp;
      <Link
        href="https://www.google.com/maps/@52.6880025,-2.9860512,238m/data=!3m1!1e3"
        target="_blank"
      >
        Marche Manor, Halfway House, SY5 9DE
      </Link>
    </Text>
    <Text>
      <em>Please note,</em> that if you are using a Sat Nav, it will tell you
      that you've arrived when you haven't quite!
    </Text>
    <Text>
      From Shrewsbury take the A458 towards Welshpool. Turn left at the white
      Halfway House pub. The turn is signed to Marche &amp; Vennington. Drive
      just under a mile.
    </Text>
    <Text>
      The camping entrance for Friday night or Saturday morning is{" "}
      <Link
        href="https://www.google.com/maps/@52.6893679,-2.986573,3a,75y,184.74h,83.95t/data=!3m6!1e1!3m4!1s3GdpCAROddKR_5hn-4FC-Q!2e0!7i13312!8i6656"
        target="_blank"
      >
        here
      </Link>
      .
    </Text>
    <Subtitle>Coming by train</Subtitle>
    <Text>
      The nearest train station is Shrewsbury. You can travel from London Euston
      (via Crew or Birmingham International), which will take approximately 2.5
      hours. You will then need to take a 20 minute taxi to the house, which you
      should be able to flag down outside the station, although it doesn't hurt
      to pre-book one if you have the time.
    </Text>
    <Subtitle>Driving in on the day</Subtitle>
    <Text>
      The main entrance and car park can be found just after the campsite
      entrance. It has a stone wall &amp; a gravel drive leading up to the black
      &amp; white house. It will be sign posted.
    </Text>
    <Text>
      The entrance on the day is{" "}
      <Link
        href="https://www.google.com/maps/@52.6884963,-2.9855973,3a,75y,204.87h,86.08t/data=!3m6!1e1!3m4!1syDPZDbP39ubARBmFGJd_vA!2e0!7i13312!8i6656"
        target="_blank"
      >
        here
      </Link>
      .
    </Text>
    <br />

    <Space />
    <BackgroundColor />
    <Link name="rsvp"></Link>
    <ButtonContainer>
      <TitleCenter>Any questions?</TitleCenter>
      <TextCenter>
        Feel free to drop us an email to{" "}
        <Link href="mailto:rosalysbryan@gmail.com">rosalysbryan@gmail.com</Link>{" "}
        or <Link href="mailto:chrismhs@gmail.com">chrismhs@gmail.com</Link> if
        you have any questions about the weekend.
      </TextCenter>
      <Button href="https://forms.gle/ybU5Aedrw5Ym3aSm9" target="_blank">
        RSVP
      </Button>
      <Space />
      <TextCenter>
        <img src={ConfettiGif} alt="" />
      </TextCenter>
    </ButtonContainer>
  </Layout>
)

export default Venue
