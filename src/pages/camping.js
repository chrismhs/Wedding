import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import theme from "../styles/theme"
import { Link, List, Button, Title, Subtitle, Text } from "../styles/typography"

import BrightonPhoto from "../images/brighton.jpg"

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

const Spacer = styled.div`
  height: 40px;
  border-bottom: 1px solid ${theme.darkgreen};
  margin-bottom: 80px;
`

const Image = styled.div`
  margin-top: 50px;
  background-image: url(${BrightonPhoto});
  background-size: cover;
  background-position: center center;
  height: 600px;
  width: 100%;

  @media (max-width: 768px) {
    height: 350px;
  }
`

const Camping = () => (
  <Layout>
    <Title>Carefree camping</Title>
    <Text>BBQs, breakfasts and a bloody good time.</Text>
    <Text>
      We love camping and there's plenty of camping space stumbling distance
      from the wedding, so you can either pitch your own tent or rent a bell
      tent. Camper vans are welcome too.
    </Text>
    <Subtitle>Tell me more...</Subtitle>
    <Text>
      If you do stay on site, we will be providing additional facilities to make
      your stay more comfortable.
    </Text>
    <ul>
      <List>Breakfast (Saturday &amp; Sunday morning)</List>
      <List>A kitchenette for teas &amp; water</List>
      <List>Toilets</List>
      <List>Showers</List>
      <List>Hair-dryers</List>
      <List>Iron &amp; ironing board</List>
    </ul>
    <Text>
      Bell tents are from £150 per tent (for a couple) for both the Friday and
      Saturday night. Bedding for two is included in the bell tent price, but
      speaking from experience it's worth bringing a sleeping bag if you are a
      cold sleeper. Spots are availble to pitch your own tent or if you are
      coming in a camper van.
    </Text>
    <OutboundLink
      href="https://victorialilyevents.co.uk/chris-and-rosalys-2020/"
      target="_blank"
    >
      <Button target="_blank">Book a bell tent</Button>
    </OutboundLink>
    <Text>
      Password:<b> marchemanor</b>
    </Text>
    <Spacer />
    <Title>Other accommodation</Title>
    <Text>
      If you prefer having a proper roof over your head, the house is 25 minutes
      drive from Shrewsbury and there are a few local options also.
    </Text>
    <Text>
      <TableRow>
        <TableColumn>
          <Link href="http://www.wollastonlodge.co.uk/" target="_blank">
            Wollaston Lodge
          </Link>
        </TableColumn>
        <TableColumn>1.5 miles</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <Link href="https://rowtonbarns.co.uk/" target="_blank">
            Rowton Barns
          </Link>
        </TableColumn>
        <TableColumn>3.5 miles</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <Link
            href="https://www.premierinn.com/gb/en/hotels/england/shropshire/shrewsbury/shrewsbury-town-centre.html"
            target="_blank"
          >
            Premier Inn
          </Link>
        </TableColumn>
        <TableColumn>Shrewsbury</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <Link href="https://www.princeruperthotel.co.uk/" target="_blank">
            Prince Rupert
          </Link>
        </TableColumn>
        <TableColumn>Shrewsbury</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <Link href="https://thelordhill.co.uk/" target="_blank">
            Lord Hill
          </Link>
        </TableColumn>
        <TableColumn>Shrewsbury</TableColumn>
      </TableRow>
      <TableRow>
        <TableColumn>
          <Link href="http://theexchangeshrewsbury.com/" target="_blank">
            Morgans
          </Link>
        </TableColumn>
        <TableColumn>Shrewsbury</TableColumn>
      </TableRow>
    </Text>
    <Text>
      There are of course many other b&amp;b's or holiday lets in the area.
    </Text>
    <Subtitle>Taxis</Subtitle>
    <Text>Please book taxis in advance - Uber is not a thing here!</Text>
    <TableRow>
      <TableColumn>Go Carz</TableColumn>
      <TableColumn>01743 441144</TableColumn>
    </TableRow>
    <TableRow>
      <TableColumn>Shrewsbury Taxis</TableColumn>
      <TableColumn>01743 242424</TableColumn>
    </TableRow>
    <br />
    <Image />
  </Layout>
)

export default Camping
