import React from "react"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const PapersIndexPage = () => (
  <Layout>
    <SEO title="Successor ML" />
    Successor ML is an effort to evolve the Standard ML language while keeping
    true to its clean and elegant design.
    <a
      href="https://github.com/SMLFamily/Successor-ML"
      alt="Link to SuccessorML Github"
    >
      SuccessorML Github
    </a>
  </Layout>
)

export default PapersIndexPage
