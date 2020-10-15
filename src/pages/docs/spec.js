import React from "react"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const StandardMLSpecPage = () => (
  <Layout>
    <SEO title="SML Language Specification" />
    <a
      href="https://github.com/SMLFamily/The-Definition-of-Standard-ML"
      alt="Link to 1990 SML spec"
    >
      The Definition of Standard ML
    </a>{" "}
    -- The original (1990) version of the specification by Robin Milner, Mads
    Tofte, and Robert Harper.
    <a
      href="https://github.com/SMLFamily/The-Definition-of-Standard-ML-Revised"
      alt="Link to 1997 SML spec"
    >
      The Definition of Standard ML
    </a>{" "}
    -- The revised (1997) version of the specification by Robin Milner, Mads
    Tofte, Robert Harper, and David MacQueen.
  </Layout>
)

export default StandardMLSpecPage
