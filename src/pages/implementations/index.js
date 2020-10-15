import React from "react"
// import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ImplementationsIndexPage = () => (
  <Layout>
    <SEO title="SML Implementations" />
    Basic Documentation for select SML implementations will go here
    <div>
      <p>
        <a
          href="http://www.smlnj.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Standard ML of New Jersey (SML/NJ)
        </a>
        A free, open-source implementation of SML '97 that generates native code
        for a broad range of platforms.
      </p>
      <p>
        <a href="http://mosml.org/" target="_blank" rel="noopener noreferrer">
          Moscow ML.
        </a>
        With Version 2.0, now implements SML '97 (including modules) with some
        extensions.
      </p>
      <p>
        <a
          href="http://www.dcs.ed.ac.uk/home/mlj/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLj.
        </a>
        Implements an SML '97 subset, compiling to the JVM with extensions for
        working with Java. [MLj has moved from Persimmon IT to Edinburgh.]
      </p>
      <p>
        <a
          href="http://melsman.github.io/mlkit"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLKit.
        </a>
        Version 3 implements SML '97, uses region analysis for memory
        management.
      </p>

      {/* this site is basically always down.... */}
      <p>
        <a
          href="http://www.smlserver.org/smltojs"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMLtoJs.
        </a>
        A compiler from SML to JavaScript, based on MLKit.
      </p>
      <p>
        <a
          href="http://www.smlserver.org/ide"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMLonline.
        </a>
        Compile and run SML programs in the browser, based on SMLtoJs.
      </p>
      <p>
        <a
          href="http://www.mlton.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLton.
        </a>
        A whole-program optimizing SML Compiler. (SML '97)
      </p>
      <p>
        <a
          href="http://www.polyml.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Poly/ML, Dave Matthew's Standard ML Compiler.
        </a>
        Formerly a product of Abstract, Inc., Poly/ML is now is now available as
        a free, open source implementation. Version 4 implements SML '97.
      </p>
      <p>
        <a
          href="http://www.cs.bham.ac.uk/research/poplog/freepoplog.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Poplog Standard ML.
        </a>
        Now available as free software (SML '90).
      </p>
      <p>
        <a
          href="https://github.com/RobertHarper/TILT-Compiler.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          TILT.
        </a>
        A certifying compiler for Standard ML based on typed intermediate
        languages.
      </p>
      <p>
        <a
          href="https://github.com/Ravenbrook/mlworks"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLWorks
        </a>
        Formerly a product of Harlequin, Ltd, ML Works is now a freely
        available, open-source system owned by Ravenbrook.
      </p>
      <p>
        <a
          href="http://www.mpi-sws.org/~rossberg/hamlet/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HaMLet
        </a>
        A faithful interpreter for SML'97, written entirely in SML, as a direct
        translation of the formal language definition.
      </p>
      <p>
        <a href="https://cakeml.org/" target="_blank" rel="noopener noreferrer">
          CakeML
        </a>
        CakeML is a dialect of ML designed to be both easy to program in and
        easy to reason about formally in proof assistants for higher-order
        logic.
      </p>
      <p>
        <a
          href="http://www.pllab.riec.tohoku.ac.jp/smlsharp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SML#
        </a>
        SML# is a new programming language in the Standard ML family being
        developed at RIEC (Research Institute of Electrical Communication),
        Tohoku University . Its design goal is to provide practically important
        extensions while maintaining the compatibility of the Definition of
        Standard ML.
      </p>
      <p>
        <a
          href="http://www.ps.uni-saarland.de/alice/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alice ML
        </a>
        An extension of SML with rich support for concurrent and distributed
        programming, e.g., futures, threads, higher-order marshalling (including
        code), and type-safe dynamic module import & export.
      </p>
      <p>
        <a
          href="http://manticore.cs.uchicago.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manticore
        </a>
        Manticore is a high-level parallel programming language aimed at
        general-purpose applications running on multi-core processors. Manticore
        supports parallelism at multiple levels: explicit concurrency and
        coarse-grain parallelism via CML-style constructs and fine-grain
        parallelism via various light-weight notations, such as parallel tuple
        expressions and NESL/Nepal-style parallel array comprehensions.
      </p>
    </div>
    Close Cousins of the SML Family
    <p>
      <a href="http://ocaml.org/" target="_blank" rel="noopener noreferrer">
        OCaml
      </a>
      OCaml is an industrial strength programming language supporting
      functional, imperative and object-oriented styles. It is a close relative
      of the SML family that is enjoying considerable adoption in industry, and
      inspiring new dialects in the ML family, such as F#.
    </p>
    <p>
      <a href="http://fsharp.org/" target="_blank" rel="noopener noreferrer">
        F#
      </a>
      F# is a mature, open source, cross-platform, functional-first programming
      language which empowers users and organizations to tackle complex
      computing problems with simple, maintainable and robust code. Originally
      derived from O'Caml, F# is a full-scale industrial-strength language in
      the ML family that is now open source.
    </p>
    <p>
      <a
        href="http://mth.github.io/yeti/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Yeti
      </a>
      Yeti is ML style functional programming language, that runs on the JVM.
    </p>
    <div></div>
  </Layout>
)

export default ImplementationsIndexPage
