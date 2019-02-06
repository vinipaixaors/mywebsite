import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Curriculo = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Currículo</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Curriculo
