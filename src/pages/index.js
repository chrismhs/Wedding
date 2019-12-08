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
    <section id="welcome">
      <Intro />
    </section>
    <section id="wedding">
      <Wedding />
    </section>
    <section id="camping">
      <Camping />
    </section>
    <section id="location">
      <Venue />
    </section>
  </Layout>
)

export default IndexPage
