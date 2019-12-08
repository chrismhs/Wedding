import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Welcome from "./welcome"
import Intro from "./intro"
import Wedding from "./wedding"
import Camping from "./camping"
import Venue from "./venue"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Welcome />
    <Intro />
    <Wedding />
    <Camping />
    <Venue />
  </Layout>
)

export default IndexPage
