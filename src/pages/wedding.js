import React from "react"
import styled from "styled-components"
import { Link, Title, Subtitle, Text } from "../styles/typography"

import BrazilPhoto from "../images/brazil.jpg"

const Layout = styled.div`
  width: 100%;
  padding: 150px 0 0;

  @media (max-width: 768px) {
    padding: 50px 0 0;
  }
`

const TableRow = styled.tr`
  margin-right: 0px;
  border: none;
`

const TableColumn = styled.td`
  min-width: 150px;
`

const TableColumnBold = styled(TableColumn)`
  font-weight: 600;
`

const Space = styled.div`
  height: 20px;

  @media (max-width: 768px) {
    height: 0px;
  }
`

const Image = styled.div`
  margin-top: 50px;
  background-image: url(${BrazilPhoto});
  background-size: cover;
  background-position: center center;
  height: 600px;
  width: 100%;

  @media (max-width: 768px) {
    height: 350px;
  }
`

const Wedding = () => (
  <Layout>
    <Title>Weekend events</Title>

    <Subtitle>Friday</Subtitle>
    <Text>
      For those of you who would like to camp, the barbeque will be fired up,
      ready to go - just bring whatever you want to eat and drink. Anyone not
      staying on site, you are also very welcome to join!
    </Text>
    <Text>
      <TableRow>
        <TableColumnBold>From 6pm</TableColumnBold>
        <TableColumn>Camping check-in</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>7pm - 10pm</TableColumnBold>
        <TableColumn>Barbeque (BYOB + food)</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>8.30pm</TableColumnBold>
        <TableColumn>DJ set - Artemix</TableColumn>
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
        <TableColumnBold>8.30am until 11.30am</TableColumnBold>
        <TableColumn>
          Breakfast bap, tea and coffee (for those camping)
        </TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>1pm</TableColumnBold>
        <TableColumn>Find your seats</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>1.30pm</TableColumnBold>
        <TableColumn>The Ceremony</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>2.30pm</TableColumnBold>
        <TableColumn>Reception</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>5pm</TableColumnBold>
        <TableColumn>Dinner</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>until 1am</TableColumnBold>
        <TableColumn>Music and groovin'</TableColumn>
      </TableRow>
    </Text>
    <Text>
      <em>Fashion statements: </em>Dress for a summer wedding, in whatever makes
      you comfortable and ready to party!
    </Text>
    <Text>
      <em>Children: </em>Unfortunately, we are unable to accommodate children
      unless you are family.
    </Text>
    <Text>
      <em>Gifts: </em>If you would like to give a gift, we love our little flat
      in London and are always looking for ways to redecorate! We are also
      hugely looking forward to our honeymoon in Greece, the Monday after the
      wedding! If you would like to contribute to either of these, please visit
      our{" "}
      <a href="https://www.weddingshop.com/Buy/View/65694" target="_blank">
        gift website
      </a>
      .
    </Text>
    <Space />
    <Subtitle>Sunday</Subtitle>
    <Text>
      If you fancy breakfast the day after, we'll be providing it. Just let us
      know when you RSVP.
    </Text>
    <Text>
      <TableRow>
        <TableColumnBold>10am</TableColumnBold>
        <TableColumn>Survivor's breakfast</TableColumn>
      </TableRow>
    </Text>
    <br />
    <Image src={BrazilPhoto} alt="" />
  </Layout>
)

export default Wedding
