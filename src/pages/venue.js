import React from "react"
import styled from "styled-components"
import {
  Link,
  Button,
  Title,
  TitleCenter,
  TextCenter,
  Subtitle,
  Text,
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
  margin-top: 50px;
  background-image: url(${HousePhoto});
  background-size: cover;
  background-position: center center;
  height: 600px;
  width: 100%;

  @media (max-width: 768px) {
    height: 350px;
  }
`

const ButtonContainer = styled.div`
  margin: 100px 0;
  text-align: center;
`

const Camping = () => (
  <Layout>
    {/* <a name="venue"></a> */}
    <Title>Marche Manor</Title>
    <Text>
      If using a Sat Nav it will tell you that youve arrived when you haven't
      quite!
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
    <Subtitle>Driving in on the day</Subtitle>
    <Text>
      The main entrance and car park can be found just after the campsite
      entrance. It has a stone wall &amp; a gravel drive leading up to the black
      &amp; white house. It will be sign posted.
    </Text>
    <Text>
      The entrace on the day is{" "}
      <Link
        href="https://www.google.com/maps/@52.6884963,-2.9855973,3a,75y,204.87h,86.08t/data=!3m6!1e1!3m4!1syDPZDbP39ubARBmFGJd_vA!2e0!7i13312!8i6656"
        target="_blank"
      >
        here
      </Link>
      .
    </Text>
    <br />
    <Image src={HousePhoto} alt="" />
    <Space />
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

export default Camping
