import React from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import { Link, List, Button, Title, Subtitle, Text } from "../styles/typography"

import Image from "../components/image"

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

const Space = styled.div`
  height: 40px;
  border-bottom: 1px solid ${theme.darkgreen};
  margin-bottom: 80px;
`

const Camping = () => (
  <Layout>
    <a name="camping"></a>
    <Title>Carefree campers</Title>
    <Text>BBQs, breakfasts and a bloody good time.</Text>
    <Text>
      There's plenty of camping space 100m from the wedding where you can either
      pitch your own tent or rent a plush bell tent. It all depends on your
      budget! Camper vans are welcome too.
    </Text>
    <Subtitle>Tell me more...</Subtitle>
    <Text>
      If you need convincing, we've attempted to quell your fears with
      additional facilities:
    </Text>
    <ul>
      <List>Breakfast (Saturday &amp; Sunday morning)</List>
      <List>Water (bring a water bottle)</List>
      <List>Toilets</List>
      <List>Showers</List>
      <List>Hair-dryer &amp; make-up stations</List>
      <List>Iron &amp; ironing board</List>
    </ul>
    <Text>
      As always, tents aren't heated, so bring layers in case it gets cold at
      night.
    </Text>
    <Button
      href="https://victorialilyevents.co.uk/chris-and-rosalys-2020/"
      target="_blank"
    >
      Book a bell tent
    </Button>
    <Text>
      Password:<b> marchemanor</b>
    </Text>
    <Space />
    <Title>Nearby accommodation</Title>
    <Text>
      The house is 25 minutes drive from Shrewsbury but there are a few local
      options also.
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
    <Text>Please book taxis in advance - Uber is not a thing!</Text>
    <TableRow>
      <TableColumn>Go Carz</TableColumn>
      <TableColumn>01743 441144</TableColumn>
    </TableRow>
    <TableRow>
      <TableColumn>Shrewsbury Taxis</TableColumn>
      <TableColumn>01743 242424</TableColumn>
    </TableRow>
    <br />
    <Image imageRef={"brighton.jpg"} />
  </Layout>
)

export default Camping
