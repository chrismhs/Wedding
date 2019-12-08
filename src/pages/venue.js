import React from "react"
import styled from "styled-components"
import {
  Link,
  Button,
  Title,
  TitleCenter,
  Subtitle,
  Text,
} from "../styles/typography"

import HousePhoto from "../images/house-01.jpeg"

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
    <a name="venue"></a>
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
    <Subtitle>Driving in on the day</Subtitle>
    <Text>
      The main entrance and car park can be found just after the campsite
      entrance. It has a stone wall &amp; a gravel drive leading up to the black
      &amp; white house. It will be sign posted.
    </Text>
    <br />
    <Image src={HousePhoto} alt="" />
    <Space />
    <Link name="rsvp"></Link>
    <ButtonContainer>
      <TitleCenter>See you all soon!</TitleCenter>
      <Button href="https://forms.gle/ybU5Aedrw5Ym3aSm9" target="_blank">
        RSVP
      </Button>
    </ButtonContainer>
  </Layout>
)

export default Camping
