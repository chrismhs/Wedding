import React from "react"
import styled from "styled-components"
import { Link, Title, Subtitle, Text, BigText } from "../styles/typography"

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

const Image = styled.div`
  margin: -25vh -10% 50px;
  background-image: url(${BrazilPhoto});
  background-size: cover;
  background-position: center center;
  height: 600px;
  width: 120%;

  @media (max-width: 1050px) {
    width: 100%;
    margin: -25vh 0 50px;
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

const Wedding = () => (
  <Layout>
    <Image
      data-sal="fade"
      data-sal-delay="000"
      data-sal-duration="600"
      data-sal-easing="cubic-bezier(.55, .085, .68, .53)"
      src={BrazilPhoto}
      alt=""
    />
    <LocationTitle>
      <BigText
        data-sal="fade"
        data-sal-delay="300"
        data-sal-duration="600"
        data-sal-easing="cubic-bezier(.55, .085, .68, .53)"
      >
        Weekend events
      </BigText>
    </LocationTitle>

    <Subtitle>Friday</Subtitle>
    <Text>
      If you fancy saying hi the night before, the barbeque will be fired up -
      just bring whatever you would like to drink. We aim to wrap up early-ish
      so please eat on route if you are arriving later.
    </Text>
    <Text>
      <TableRow>
        <TableColumnBold>From 6pm</TableColumnBold>
        <TableColumn>Camping check-in</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>7pm - 9.30pm</TableColumnBold>
        <TableColumn>Barbeque (Bring your own drinks)</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>8.30pm</TableColumnBold>
        <TableColumn>Sunset DJ set - Artemix</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumnBold>10pm</TableColumnBold>
        <TableColumn>Wrap up</TableColumn>
      </TableRow>
    </Text>
    <Subtitle>Saturday - The Wedding</Subtitle>
    <Text>
      The entire wedding will be held at{" "}
      <Link
        href="https://www.google.com/maps/@52.6882705,-2.9853312,3a,60.5y,230.77h,99.12t/data=!3m6!1e1!3m4!1sKiTp8c-SiL_1rSgS6bN7aw!2e0!7i13312!8i6656"
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
      <Link href="https://www.weddingshop.com/Buy/View/65694" target="_blank">
        gift website
      </Link>
      .
    </Text>
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
  </Layout>
)

export default Wedding
