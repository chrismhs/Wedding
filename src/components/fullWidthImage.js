import React from "react"
import styled from "styled-components"

import HousePhoto from "../images/house.jpg"

const Layout = styled.div`
  margin: 0 auto;
  height: 100vh;
`

const Image = styled.div`
  background: url(${HousePhoto}) no-repeat;
  height: 100vh;
  position: absolute;
  width: 100vw;
  left: 0;
  z-index: -1;
`

const FullWidthImage = () => (
  <Layout>
    <Image />
  </Layout>
)

export default FullWidthImage
