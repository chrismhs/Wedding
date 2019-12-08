import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Link, Title, Subtitle, Text } from "../styles/typography"

import HousePhoto from "../images/house.jpg"

const Layout = styled.div`
  width: 100%;
  padding: 150px 0 0;
`

const TableRow = styled.tr`
  margin-right: 0px;
  border: none;
`

const TableColumn = styled.td`
  min-width: 150px;
`

const Space = styled.div`
  height: 40px;
`

const Image = styled.img`
  margin-top: 50px;
  border: 20px solid ${theme.white};
`

const Wedding = () => (
  <Layout>
    <a name="anchor"></a>
    <Title>Weekend events</Title>

    <Subtitle>Friday</Subtitle>
    <Text>
      For those of you who would like to camp, the barbeque will be fired up,
      ready to go - just bring whatever you want to eat and drink. Anyone not
      staying on site, you are also very welcome to join!
    </Text>
    <Text>
      <TableRow>
        <TableColumn>From 6pm</TableColumn>
        <TableColumn>Camping check-in</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>7pm - 10pm</TableColumn>
        <TableColumn>Barbeque (BYOB + food)</TableColumn>
      </TableRow>
    </Text>
    <Space />
    <Subtitle>Saturday - The Wedding</Subtitle>
    <Text>
      The entire wedding will be held at{" "}
      <Link
        href="https://www.google.com/maps/@52.6884963,-2.9855973,3a,75y,204.87h,86.08t/data=!3m6!1e1!3m4!1syDPZDbP39ubARBmFGJd_vA!2e0!7i13312!8i6656"
        target="_blank"
      >
        Marche Manor
      </Link>
      , so no need to plan tranfers once you have arrived.
    </Text>
    <Text>
      <TableRow>
        <TableColumn>1pm</TableColumn>
        <TableColumn>Find your seats</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>1.30pm</TableColumn>
        <TableColumn>The Ceremony</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>2.30pm</TableColumn>
        <TableColumn>Reception</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>5pm</TableColumn>
        <TableColumn>Dinner</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>until 1am</TableColumn>
        <TableColumn>Music and groovin'</TableColumn>
      </TableRow>
    </Text>
    <Text>
      <em>Fashion statements: </em>We would ask that guests would dress for a
      summer wedding, in whatever makes you comfortable and ready to party!
    </Text>
    <Space />
    <Subtitle>Sunday</Subtitle>
    <Text>
      If you fancy breakfast the day after, we'll be providing it. Just let us
      know when you RSVP.
    </Text>
    <Text>
      <TableRow>
        <TableColumn>10am</TableColumn>
        <TableColumn>Survivor's breakfast</TableColumn>
      </TableRow>
    </Text>
    <br />
    <Image src={HousePhoto} alt="" />
  </Layout>
)

export default Wedding
