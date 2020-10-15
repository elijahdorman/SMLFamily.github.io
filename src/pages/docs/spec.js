import React from "react"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const StandardMLSpecPage = () => (
  <Layout>
    <SEO title="SML Language Specification" />
    <div>
      With the permission of MIT Press, we are able to make
      <a
        href="https://smlfamily.github.io/sml90-defn.pdf"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to 1990 SML spec"
      >
        The Definition of Standard ML
      </a>
      (SML '90) and
      <a
        href="https://smlfamily.github.io/sml97-defn.pdf"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to 1997 SML spec"
      >
        The Definition of Standard ML, Revised
      </a>
      (SML '97) available for downloading as pdf files. These are (currently)
      formatted for US letter page size. Printed copies of the SML '97
      definition are available from
      <a
        href="http://mitpress.mit.edu/books/definition-standard-ml"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to MIT Press"
      >
        MIT Press
      </a>
      .
    </div>
    <div>
      <a
        href="https://github.com/SMLFamily/The-Definition-of-Standard-ML"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to 1990 SML spec"
      >
        The Definition of Standard ML
      </a>{" "}
      -- The original (1990) version of the specification by Robin Milner, Mads
      Tofte, and Robert Harper.
      <a
        href="https://github.com/SMLFamily/The-Definition-of-Standard-ML-Revised"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to 1997 SML spec"
      >
        The Definition of Standard ML
      </a>{" "}
      -- The revised (1997) version of the specification by Robin Milner, Mads
      Tofte, Robert Harper, and David MacQueen.
    </div>
    <div>
      This document is also available in hard copy with additional tutorial
      material from
      <a
        href="http://www.cambridge.org/us/academic/subjects/computer-science/programming-languages-and-applied-logic/standard-ml-basis-library?format=PB?format=PB"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to Cambridge University Press"
      >
        Cambridge University Press
      </a>
      .
    </div>
  </Layout>
)

export default StandardMLSpecPage
