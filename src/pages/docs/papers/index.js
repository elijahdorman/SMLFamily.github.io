import React from "react"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const PapersIndexPage = () => (
  <Layout>
    <SEO title="Successor ML" />
    Successor ML is an effort to evolve the Standard ML language while keeping
    true to its clean and elegant design.
    <div>
      critiques of the definitions
      <a
        href="http://www.cs.ukc.ac.uk/pubs/1993/569/"
        target="_blank"
        rel="noopener noreferrer"
        alt="Mistakes and Ambiguities in The Definition of Standard ML"
      >
        Mistakes and Ambiguities in The Definition of Standard ML
      </a>
      <a
        href="http://www.mpi-sws.org/~rossberg/sml-defects.html"
        target="_blank"
        rel="noopener noreferrer"
        alt="Defects in the Revised Definition of Standard ML"
      >
        Defects in the Revised Definition of Standard ML
      </a>
    </div>
    <div>
      Machine-checked meta-theory of Standard ML:
      <a
        href="https://github.com/SMLFamily/ttsml"
        target="_blank"
        rel="noopener noreferrer"
        alt="Mechanization of the Type-Theoretic Definition of Standard ML."
      >
        Mechanization of the Type-Theoretic Definition of Standard ML.
      </a>
      Twelf formalization by Karl Crary and Robert Harper of the Harper-Stone
      <a
        href="http://www.cs.cmu.edu/~rwh/papers/ttisml/ttisml.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Type-Theoretic Interpretation of Standard ML
      </a>
      , together with a complete verification of type safety for Standard ML.
    </div>
    <div>
      Language design critiques and reviews:
      <p>
        <a
          href="https://smlfamily.github.io/papers/Appel-critique-SML.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Critique of Standard ML
        </a>{" "}
        by Andrew Appel, Princeton CS-TR-364-92, Nov 1992. Also published in
        Journal of Functional Programming, 3,4, 1993, pp. 391-429.
      </p>
      <p>
        <a
          href="https://smlfamily.github.io/papers/MacQueen-reflections.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reflections on Standard ML
        </a>{" "}
        by David MacQueen. Published in "Functional Programming, Concurrency,
        Simulation and Automated Reasoning", Peter Lauer, Editor,
        Springer-Verlag LNCS Vol 693, 1994, pp. 32-46.
      </p>
    </div>
    <div>
      The SourceForge project hosts two mailing lists relating to Standard ML.
      Visit the info page for a list to subscribe.
      <br />
      Name: sml-implementers
      <br />
      Address: sml-implementers@lists.sourceforge.net
      <br />
      Info: http://lists.sourceforge.net/mailman/listinfo/sml-implementers
      <br />
      Subscribers: http://lists.sourceforge.net/lists/roster/sml-implementers
      <br />
      Name: sml-list Address: sml-list@lists.sourceforge.net
      <br />
      Info: http://lists.sourceforge.net/mailman/listinfo/sml-list
      <br />
      Subscribers: http://lists.sourceforge.net/lists/roster/sml-list
    </div>
  </Layout>
)

export default PapersIndexPage
