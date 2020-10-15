import React from "react"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const AndreasRossbergSyntaxPage = () => (
  <Layout>
    <SEO title="Andreas Rossberg Concrete Syntax for StandardML" />

    <h1>Standard ML Grammar</h1>

    <p>
      This page describes the full grammar of the core and module language of{" "}
      <a href="http://mitpress.mit.edu/books/definition-standard-ml">
        Standard ML ('97 revision)
      </a>
      , including all "derived forms" from Appendix A of the language definition
      {/* (a few minor omissions are noted in the respective sections below)*/}.
    </p>

    <p>
      See <a href="#notation">below</a> for explanation of the notation.
    </p>

    <h2>
      <a name="core">Core Language</a>
    </h2>

    <h3>
      <a name="con">Constants</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>con</i>{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>int</i>{" "}
        </td>
        <td> integer </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>word</i>{" "}
        </td>
        <td> word </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>float</i>{" "}
        </td>
        <td> floating point </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>char</i>{" "}
        </td>
        <td> character </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>string</i>{" "}
        </td>
        <td> string </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>int</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<tt>~</tt>&rang;<i>num</i>{" "}
        </td>
        <td> decimal </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>~</tt>&rang;<tt>0x</tt>
          <i>hex</i>{" "}
        </td>
        <td> hexadecimal </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>word</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>0w</tt>
          <i>num</i>{" "}
        </td>
        <td> decimal </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>0wx</tt>
          <i>hex</i>{" "}
        </td>
        <td> hexadecimal </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>float</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<tt>~</tt>&rang;<i>num</i>
          <tt>.</tt>
          <i>num</i>{" "}
        </td>
        <td> floating point </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>~</tt>&rang;<i>num</i>&lang;<tt>.</tt>
          <i>num</i>&rang;<tt>e</tt>&lang;<tt>~</tt>&rang;<i>num</i>{" "}
          &nbsp;&nbsp;{" "}
        </td>
        <td> scientific </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>char</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>#"</tt>
          <i>ascii</i>
          <tt>"</tt>{" "}
        </td>
        <td> character </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>string</i>&nbsp;&nbsp;{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>"</tt>&lang;<i>ascii</i>&rang;*<tt>"</tt>{" "}
        </td>
        <td> string </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>num</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>digit</i>&rang;<sup>+</sup>{" "}
        </td>
        <td> number </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>hex</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>digit</i> | <i>letter</i>&rang;<sup>+</sup>{" "}
        </td>
        <td> hexadecimal number (letters may only be in the range A-F) </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>ascii</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td> ... </td>
        <td>
          {" "}
          single non-<tt>"</tt> ASCII character or <tt>\</tt>-headed escape
          sequence{" "}
        </td>
      </tr>
    </table>

    <h3>
      <a name="id">Identifiers</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>id</i>{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>letter</i>&lang;<i>letter</i> | <i>digit</i> | <tt>'</tt> |{" "}
          <tt>_</tt>&rang;*{" "}
        </td>
        <td> alphanumeric </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>!</tt> | <tt>%</tt> | <tt>&amp;</tt> | <tt>$</tt> |{" "}
          <tt>#</tt> | <tt>+</tt> | <tt>-</tt> | <tt>/</tt> | <tt>:</tt> |{" "}
          <tt>&lt;</tt> | <tt>=</tt> | <tt>&gt;</tt> | <tt>?</tt> | <tt>@</tt> |{" "}
          <tt>\</tt> | <tt>~</tt> | <tt>`</tt> | <tt>^</tt> | <tt>|</tt> |{" "}
          <tt>*</tt>&rang;<sup>+</sup> &nbsp;&nbsp;
        </td>
        <td>
          {" "}
          symbolic (not allowed for type variables or module language
          identifiers){" "}
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>var</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>'</tt>&lang;<i>letter</i> | <i>digit</i> | <tt>'</tt> | <tt>_</tt>
          &rang;*{" "}
        </td>
        <td> unconstrained </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>''</tt>&lang;<i>letter</i> | <i>digit</i> | <tt>'</tt> |{" "}
          <tt>_</tt>&rang;*{" "}
        </td>
        <td> equality </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>longid</i> &nbsp;&nbsp;{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i>
          <sub>1</sub>
          <tt>.</tt>&middot;&middot;&middot;<tt>.</tt>
          <i>id</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          qualified (<i>n</i> &ge; 1){" "}
        </td>
      </tr>

      <tr>
        <td>
          {" "}
          <i>lab</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i>{" "}
        </td>
        <td> identifier </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>num</i>{" "}
        </td>
        <td>
          {" "}
          number (may not start with <tt>0</tt>){" "}
        </td>
      </tr>
    </table>

    <h3>
      <a name="exp">Expressions</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>exp</i>{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>con</i>{" "}
        </td>
        <td> constant </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>op</tt>&rang; <i>longid</i>{" "}
        </td>
        <td> value or constructor identifier </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>exp</i>
          <sub>1</sub> <i>exp</i>
          <sub>2</sub>{" "}
        </td>
        <td> application </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>exp</i>
          <sub>1</sub> <i>id</i> <i>exp</i>
          <sub>2</sub>{" "}
        </td>
        <td> infix application </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>exp</i> <tt>)</tt>{" "}
        </td>
        <td> parentheses </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>exp</i>
          <sub>1</sub> <tt>,</tt> ... <tt>,</tt>
          <i>exp</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          <tt>)</tt>{" "}
        </td>
        <td>
          {" "}
          tuple (<i>n</i> &ne; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>{"{"}</tt> &lang;<i>exprow</i>&rang; <tt>{"}"}</tt> &nbsp;&nbsp;{" "}
        </td>
        <td> record </td>
        {/*
    <td> <tt>{</tt> <i>lab</i><sub>1</sub> <tt>=</tt> <i>exp</i><sub>1</sub> <tt>,</tt> ... <tt>,</tt>
                    <i>lab</i><sub><i>n</i></sub> <tt>=</tt> <i>exp</i><sub><i>n</i></sub> <tt>}</tt> &nbsp;&nbsp; </td>
    <td> record (<i>n</i> &ge; 0) </td>
*/}
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>#</tt> <i>lab</i>{" "}
        </td>
        <td> record selector </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>[</tt> <i>exp</i>
          <sub>1</sub> <tt>,</tt> ... <tt>,</tt>
          <i>exp</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          <tt>]</tt>{" "}
        </td>
        <td>
          {" "}
          list (<i>n</i> &ge; 0){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>exp</i>
          <sub>1</sub> <tt>;</tt> ... <tt>;</tt>
          <i>exp</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          <tt>)</tt>{" "}
        </td>
        <td>
          {" "}
          sequence (<i>n</i> &ge; 2){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>let</tt> <i>dec</i>
          <tt>in</tt> <i>exp</i>
          <sub>1</sub> <tt>;</tt> ... <tt>;</tt>
          <i>exp</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          <tt>end</tt> &nbsp;&nbsp;{" "}
        </td>
        <td>
          {" "}
          local declaration (<i>n</i> &ge; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>exp</i> <tt>:</tt> <i>typ</i>{" "}
        </td>
        <td> type annotation </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>raise</tt> <i>exp</i>{" "}
        </td>
        <td> exception raising </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>exp</i> <tt>handle</tt> <i>match</i>{" "}
        </td>
        <td> exception handling </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>exp</i>
          <sub>1</sub> <tt>andalso</tt> <i>exp</i>
          <sub>2</sub>{" "}
        </td>
        <td> conjunction </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>exp</i>
          <sub>1</sub> <tt>orelse</tt> <i>exp</i>
          <sub>2</sub>{" "}
        </td>
        <td> disjunction </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>if</tt> <i>exp</i>
          <sub>1</sub>
          <tt>then</tt> <i>exp</i>
          <sub>2</sub>
          <tt>else</tt> <i>exp</i>
          <sub>3</sub>{" "}
        </td>
        <td> conditional </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>while</tt> <i>exp</i>
          <sub>1</sub>
          <tt>do</tt> <i>exp</i>
          <sub>2</sub>{" "}
        </td>
        <td> iteration </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>case</tt> <i>exp</i> <tt>of</tt> <i>match</i>{" "}
        </td>
        <td> case analysis </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>fn</tt> <i>match</i>{" "}
        </td>
        <td> function </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>exprow</i> &nbsp;&nbsp;
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>lab</i> <tt>=</tt> <i>exp</i> &lang;<tt>,</tt> <i>exprow</i>&rang;{" "}
        </td>
        <td> expression row </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>match</i> &nbsp;&nbsp;
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>pat</i> <tt>{"=>"}</tt> <i>exp</i> &lang;<tt>|</tt> <i>match</i>
          &rang;{" "}
        </td>
        <td> match </td>
        {/*
    <td> <i>pat</i><sub>1</sub> <tt>=></tt> <i>exp</i><sub>1</sub> <tt>|</tt> ... <tt>|</tt>
         <i>pat</i><sub><i>n</i></sub> <tt>=></tt> <i>exp</i><sub><i>n</i></sub> </td>
    <td> match (<i>n</i> &ge; 1) </td>
*/}
      </tr>
    </table>

    <h3>
      <a name="pat">Patterns</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>pat</i> &nbsp;&nbsp;{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>con</i>{" "}
        </td>
        <td> constant </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>_</tt>{" "}
        </td>
        <td> wildcard </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>op</tt>&rang; <i>id</i>{" "}
        </td>
        <td> variable </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>op</tt>&rang; <i>longid</i> &lang;<i>pat</i>&rang;{" "}
        </td>
        <td> construction </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>pat</i>
          <sub>1</sub> <i>id</i> <i>pat</i>
          <sub>2</sub>{" "}
        </td>
        <td> infix construction </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>pat</i> <tt>)</tt>{" "}
        </td>
        <td> parentheses </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>pat</i>
          <sub>1</sub> <tt>,</tt> ... <tt>,</tt>
          <i>pat</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          <tt>)</tt>{" "}
        </td>
        <td>
          {" "}
          tuple (<i>n</i> &ne; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>{"{"}</tt> &lang;<i>patrow</i>&rang; <tt>{"}"}</tt> &nbsp;&nbsp;{" "}
        </td>
        <td> record </td>
        {/*
    <td> <tt>{</tt> <i>lab</i><sub>1</sub> &lang;<tt>=</tt> <i>pat</i><sub>1</sub>&rang; <tt>,</tt> ... <tt>,</tt>
                    <i>lab</i><sub><i>n</i></sub> &lang;<tt>=</tt> <i>pat</i><sub><i>n</i></sub>&rang; 
                    &lang;<tt>,</tt> <tt>...</tt>&rang; <tt>}</tt> &nbsp;&nbsp; </td>
    <td> record (<i>n</i> &ge; 0) </td>
*/}
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>[</tt> <i>pat</i>
          <sub>1</sub> <tt>,</tt> ... <tt>,</tt>
          <i>pat</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          <tt>]</tt>{" "}
        </td>
        <td>
          {" "}
          list (<i>n</i> &ge; 0){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>pat</i> <tt>:</tt> <i>typ</i>{" "}
        </td>
        <td> type annotation </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<tt>op</tt>&rang; <i>id</i> &lang;<tt>:</tt> <i>typ</i>&rang;
          <tt>as</tt> <i>pat</i>{" "}
        </td>
        <td> layered </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>patrow</i> &nbsp;&nbsp;
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>...</tt>{" "}
        </td>
        <td> wildcard </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>lab</i> <tt>=</tt> <i>pat</i> &lang;<tt>,</tt> <i>patrow</i>&rang;{" "}
        </td>
        <td> pattern </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>id</i> &lang;<tt>:</tt> <i>typ</i>&rang; &lang;<tt>as</tt>{" "}
          <i>pat</i>&rang; &lang;<tt>,</tt> <i>patrow</i>&rang; &nbsp;&nbsp;
        </td>
        <td> variable </td>
      </tr>
    </table>

    {/*
<p><sub>Note: Omitted layered patterns on record labels.</sub></p>
*/}

    <h3>
      <a name="typ">Types</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>typ</i> &nbsp;&nbsp;
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>var</i>{" "}
        </td>
        <td> variable </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          &lang;<i>typ</i>&rang;<sup>(,)</sup> <i>longid</i>{" "}
        </td>
        <td> constructor </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>typ</i> <tt>)</tt>{" "}
        </td>
        <td> parentheses </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>typ</i>
          <sub>1</sub> <tt>{"->"}</tt> <i>typ</i>
          <sub>2</sub>{" "}
        </td>
        <td> function </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>typ</i>
          <sub>1</sub> <tt>*</tt> ... <tt>*</tt>
          <i>typ</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          tuple (<i>n</i> &ge; 2){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>{"{"}</tt> &lang;<i>typrow</i>&rang; <tt>{"}"}</tt> &nbsp;&nbsp;{" "}
        </td>
        <td> record </td>
        {/*
    <td> <tt>{</tt> <i>lab</i><sub>1</sub> <tt>:</tt> <i>typ</i><sub>1</sub> <tt>,</tt> ... <tt>,</tt>
                    <i>lab</i><sub><i>n</i></sub> <tt>:</tt> <i>typ</i><sub><i>n</i></sub> <tt>}</tt> &nbsp;&nbsp;</td>
    <td> record (<i>n</i> &ge; 0) </td>
*/}
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>typrow</i> &nbsp;&nbsp;
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>lab</i> <tt>:</tt> <i>typ</i> &lang;<tt>,</tt> <i>typrow</i>&rang;
          &nbsp;&nbsp;
        </td>
        <td> type row </td>
      </tr>
    </table>

    <h3>
      <a name="dec">Declarations</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>dec</i>{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>val</tt> &lang;<i>var</i>&rang;<sup>(,)</sup> <i>valbind</i>{" "}
        </td>
        <td> value </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>fun</tt> &lang;<i>var</i>&rang;<sup>(,)</sup> <i>funbind</i>{" "}
        </td>
        <td> function </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>type</tt> <i>typbind</i>{" "}
        </td>
        <td> type </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>datatype</tt> <i>datbind</i> &lang;<tt>withtype</tt>{" "}
          <i>typbind</i>&rang;{" "}
        </td>
        <td> data type </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>datatype</tt> <i>id</i> <tt>=</tt> <tt>datatype</tt> <i>longid</i>{" "}
        </td>
        <td> data type replication </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>abstype</tt> <i>datbind</i> &lang;<tt>withtype</tt> <i>typbind</i>
          &rang; <tt>with</tt> <i>dec</i> <tt>end</tt>{" "}
        </td>
        <td> abstract type </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>exception</tt> <i>exnbind</i>{" "}
        </td>
        <td> exception </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>structure</tt> <i>strbind</i>{" "}
        </td>
        <td> structure (not allowed inside expressions) </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td> </td>
        <td> empty </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>dec</i>
          <sub>1</sub> &lang;<tt>;</tt>&rang; <i>dec</i>
          <sub>2</sub>{" "}
        </td>
        <td> sequence </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>local</tt> <i>dec</i>
          <sub>1</sub> <tt>in</tt> <i>dec</i>
          <sub>2</sub> <tt>end</tt>{" "}
        </td>
        <td> local </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>open</tt> <i>longid</i>
          <sub>1</sub> ... <i>longid</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          inclusion (<i>n</i> &ge; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>nonfix</tt> <i>id</i>
          <sub>1</sub> ... <i>id</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          nonfix (<i>n</i> &ge; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>infix</tt> &lang;<i>digit</i>&rang; <i>id</i>
          <sub>1</sub> ... <i>id</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          left-associative infix (<i>n</i> &ge; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>infixr</tt> &lang;<i>digit</i>&rang; <i>id</i>
          <sub>1</sub> ... <i>id</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          right-associative infix (<i>n</i> &ge; 1){" "}
        </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>valbind</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>pat</i> <tt>=</tt> <i>exp</i> &lang;<tt>and</tt> <i>valbind</i>
          &rang;{" "}
        </td>
        <td> destructuring </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>rec</tt> <i>valbind</i>{" "}
        </td>
        <td> recursive </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>funbind</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>funmatch</i> &lang;<tt>and</tt> <i>funbind</i>&rang;{" "}
        </td>
        <td> clausal function </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>funmatch</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<tt>op</tt>&rang; <i>id</i> <i>pat</i>
          <sub>1</sub> ... <i>pat</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          &lang;<tt>:</tt> <i>typ</i>&rang; <tt>=</tt> <i>exp</i> &lang;
          <tt>|</tt> <i>funmatch</i>&rang; &nbsp;&nbsp;
        </td>
        <td>
          {" "}
          nonfix (<i>n</i> &ge; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>pat</i>
          <sub>1</sub> <i>id</i> <i>pat</i>
          <sub>2</sub> &lang;<tt>:</tt> <i>typ</i>&rang; <tt>=</tt> <i>exp</i>{" "}
          &lang;<tt>|</tt> <i>funmatch</i>&rang;{" "}
        </td>
        <td> infix </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>(</tt> <i>pat</i>
          <sub>1</sub> <i>id</i> <i>pat</i>
          <sub>2</sub> <tt>)</tt> <i>pat'</i>
          <sub>1</sub> ... <i>pat'</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          &lang;<tt>:</tt> <i>typ</i>&rang; <tt>=</tt> <i>exp</i> &lang;
          <tt>|</tt> <i>funmatch</i>&rang; &nbsp;&nbsp;{" "}
        </td>
        <td>
          {" "}
          infix (<i>n</i> &ge; 0){" "}
        </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>typbind</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>var</i>&rang;<sup>(,)</sup> <i>id</i> <tt>=</tt> <i>typ</i>{" "}
          &lang;<tt>and</tt> <i>typbind</i>&rang;{" "}
        </td>
        <td> abbreviation </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>datbind</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>var</i>&rang;<sup>(,)</sup> <i>id</i> <tt>=</tt>
          <i>conbind</i> &lang;<tt>and</tt> <i>datbind</i>&rang; &nbsp;&nbsp;{" "}
        </td>
        <td> data type </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>conbind</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> &lang;<tt>of</tt> <i>typ</i>&rang; &lang;<tt>|</tt>{" "}
          <i>conbind</i>&rang; &nbsp;&nbsp;{" "}
        </td>
        <td> data constructor </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>exnbind</i>&nbsp;&nbsp;{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> &lang;<tt>of</tt> <i>typ</i>&rang; &lang;<tt>and</tt>{" "}
          <i>exnbind</i>&rang;{" "}
        </td>
        <td> generative </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>id</i> <tt>=</tt> <i>longid</i> &lang;<tt>and</tt> <i>exnbind</i>
          &rang;{" "}
        </td>
        <td> renaming </td>
      </tr>
    </table>

    <p>
      <sub>
        Note: Omitted <tt>op</tt> on constructors.
      </sub>
    </p>

    <h2>
      <a name="module">Module Language</a>
    </h2>

    <h3>
      <a name="str">Structures</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>str</i> &nbsp;&nbsp;
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>longid</i>{" "}
        </td>
        <td> identifier </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>struct</tt> <i>dec</i> <tt>end</tt>{" "}
        </td>
        <td> structure </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>str</i> <tt>:</tt> <i>sig</i>{" "}
        </td>
        <td> transparent annotation </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>str</i> <tt>{":>"}</tt> <i>sig</i>{" "}
        </td>
        <td> opaque annotation </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>id</i> <tt>(</tt> <i>str</i> <tt>)</tt>{" "}
        </td>
        <td> functor application </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>id</i> <tt>(</tt> <i>dec</i> <tt>)</tt>{" "}
        </td>
        <td> functor application </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>let</tt> <i>dec</i>
          <tt>in</tt> <i>str</i> <tt>end</tt> &nbsp;&nbsp;
        </td>
        <td> local declaration </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>strbind</i>&nbsp;&nbsp;{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> &lang;<tt>:</tt>&lang;<tt>{">"}</tt>&rang; <i>sig</i>&rang;{" "}
          <tt>=</tt> <i>str</i> &lang;<tt>and</tt> <i>strbind</i>&rang;
          &nbsp;&nbsp;
        </td>
        <td> structure </td>
      </tr>
    </table>

    <h3>
      <a name="sig">Signatures</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>sig</i>{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i>{" "}
        </td>
        <td> identifier </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>sig</tt> <i>spec</i> <tt>end</tt>{" "}
        </td>
        <td> signature </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>sig</i> <tt>where</tt> <tt>type</tt> <i>typrefin</i>{" "}
        </td>
        <td> refinement </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>typrefin</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>var</i>&rang;<sup>(,)</sup> <i>longid</i> <tt>=</tt>{" "}
          <i>typ</i> &lang;<tt>and</tt> <tt>type</tt> <i>typrefin</i>&rang;{" "}
        </td>
        <td> type refinement </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>spec</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <tt>val</tt> <i>valdesc</i>{" "}
        </td>
        <td> value </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>type</tt> <i>typdesc</i>{" "}
        </td>
        <td> type </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>eqtype</tt> <i>typdesc</i>{" "}
        </td>
        <td> equality type </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>type</tt> <i>typbind</i>{" "}
        </td>
        <td> type abbreviation </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>datatype</tt> <i>datdesc</i>{" "}
        </td>
        <td> data type </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>datatype</tt> <i>id</i> <tt>=</tt> <tt>datatype</tt> <i>longid</i>{" "}
        </td>
        <td> data type replication </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>exception</tt> <i>exndesc</i>{" "}
        </td>
        <td> exception </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>structure</tt> <i>strdesc</i>{" "}
        </td>
        <td> structure </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td> </td>
        <td> empty </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>spec</i>
          <sub>1</sub> &lang;<tt>;</tt>&rang; <i>spec</i>
          <sub>2</sub>{" "}
        </td>
        <td> sequence </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>include</tt> <i>sigexp</i>{" "}
        </td>
        <td> inclusion </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>include</tt> <i>id</i>
          <sub>1</sub> ... <i>id</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          inclusion (<i>n</i> &ge; 1){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>spec</i> <tt>sharing</tt> <tt>type</tt> <i>longid</i>
          <sub>1</sub> <tt>=</tt> ... <tt>=</tt> <i>longid</i>
          <sub>
            <i>n</i>
          </sub>{" "}
          &nbsp;&nbsp;
        </td>
        <td>
          {" "}
          type sharing (<i>n</i> &ge; 2){" "}
        </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>spec</i> <tt>sharing</tt> <i>longid</i>
          <sub>1</sub> <tt>=</tt> ... <tt>=</tt> <i>longid</i>
          <sub>
            <i>n</i>
          </sub>{" "}
        </td>
        <td>
          {" "}
          structure sharing (<i>n</i> &ge; 2){" "}
        </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>valdesc</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> <tt>:</tt> <i>typ</i> &lang;<tt>and</tt> <i>valdesc</i>
          &rang;{" "}
        </td>
        <td> value </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>typdesc</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>var</i>&rang;<sup>(,)</sup> <i>id</i> &lang;<tt>and</tt>{" "}
          <i>typdesc</i>&rang;{" "}
        </td>
        <td> abstract type </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>datdesc</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          &lang;<i>var</i>&rang;<sup>(,)</sup> <i>id</i> <tt>=</tt>
          <i>condesc</i> &lang;<tt>and</tt> <i>datdesc</i>&rang; &nbsp;&nbsp;
        </td>
        <td> data type </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>condesc</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> &lang;<tt>of</tt> <i>typ</i>&rang; &lang;<tt>|</tt>{" "}
          <i>condesc</i>&rang; &nbsp;&nbsp;{" "}
        </td>
        <td> data constructor </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>exndesc</i>&nbsp;&nbsp;{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> &lang;<tt>of</tt> <i>typ</i>&rang; &lang;<tt>and</tt>{" "}
          <i>exndesc</i>&rang;{" "}
        </td>
        <td> exception </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>strdesc</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> <tt>:</tt> <i>sig</i> &lang;<tt>and</tt> <i>strdesc</i>
          &rang;{" "}
        </td>
        <td> structure </td>
      </tr>
    </table>

    <h3>
      <a name="prog">Programs</a>
    </h3>

    <table>
      <tr>
        <td>
          {" "}
          <i>prog</i>{" "}
        </td>
        <td>::=&nbsp;&nbsp;</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>dec</i>{" "}
        </td>
        <td> core declaration </td>
      </tr>
      {/*
  <tr>
    <td></td> <td></td>
    <td> <i>exp</i> <tt>;</tt> </td>
    <td> expression </td>
  </tr>
*/}
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>functor</tt> <i>fctbind</i>{" "}
        </td>
        <td> functor declaration </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <tt>signature</tt> <i>sigbind</i>{" "}
        </td>
        <td> signature declaration </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td> </td>
        <td> empty </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>prog</i>
          <sub>1</sub> &lang;<tt>;</tt>&rang; <i>prog</i>
          <sub>2</sub>{" "}
        </td>
        <td> sequence </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>fctbind</i>{" "}
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i>
          <sub>1</sub> <tt>(</tt> <i>id</i>
          <sub>2</sub> <tt>:</tt> <i>sig</i> <tt>)</tt> &lang;<tt>:</tt>&lang;
          <tt>{">"}</tt>&rang; <i>sig</i>&rang; <tt>=</tt> <i>str</i> &lang;
          <tt>and</tt> <i>fctbind</i>&rang; &nbsp;&nbsp;
        </td>
        <td> plain </td>
      </tr>
      <tr>
        <td></td> <td></td>
        <td>
          {" "}
          <i>id</i> <tt>(</tt> <i>spec</i> <tt>)</tt> &lang;<tt>:</tt>&lang;
          <tt>{">"}</tt>&rang; <i>sig</i>&rang; <tt>=</tt> <i>str</i> &lang;
          <tt>and</tt> <i>fctbind</i>&rang;{" "}
        </td>
        <td> opened </td>
      </tr>

      <tr>
        <td></td>
      </tr>
      <tr>
        <td>
          {" "}
          <i>sigbind</i> &nbsp;&nbsp;
        </td>
        <td>::=</td>
        {/*
  </tr>
  <tr>
    <td></td> <td></td>
*/}
        <td>
          {" "}
          <i>id</i> <tt>=</tt> <i>sig</i> &lang;<tt>and</tt> <i>sigbind</i>
          &rang;{" "}
        </td>
        <td> signature </td>
      </tr>
    </table>

    <p>
      <sub>
        Note: Omitted <i>exp</i>
        <tt>;</tt> derived form for interactive toplevel.
      </sub>
    </p>

    <h2>
      <a name="notation">Notation</a>
    </h2>

    <p>We liberally use the following notation in the grammar:</p>
    <ul>
      {/*
<li> <tt>typewriter</tt> font for terminal symbols</li>
*/}
      <li>
        {" "}
        &lang;<i>foo</i>&rang; for 0 or 1 occurrences of <i>foo</i>
      </li>
      <li>
        {" "}
        &lang;<i>foo</i>&rang;* for 0 to many occurrences of <i>foo</i>
      </li>
      <li>
        {" "}
        &lang;<i>foo</i>&rang;<sup>+</sup> for 1 to many occurrences of{" "}
        <i>foo</i>
      </li>
      <li>
        {" "}
        &lang;<i>foo</i> | <i>bar</i>&rang; for one of <i>foo</i> or <i>bar</i>{" "}
        (also with more alternatives{/*, or iterated with * or <sup>+</sup>*/})
      </li>
      {/*
<li> <i>foo</i><sub>1</sub> <tt>@</tt> ... <tt>@</tt> <i>foo</i><sub><i>n</i></sub> for <i>n</i> occurrences of <i>foo</i>, separated by <tt>@</tt></li>
*/}
      <li>
        {" "}
        &lang;<i>foo</i>&rang;<sup>(,)</sup> for 0 or 1 occurrences of{" "}
        <i>foo</i>, or 1 to many comma-separated occurrences enclosed in
        parentheses (i.e., either empty, <i>foo</i>, or <tt>(</tt>
        <i>foo</i>
        <sub>1</sub>
        <tt>,</tt>...<tt>,</tt>
        <i>foo</i>
        <sub>
          <i>n</i>
        </sub>
        <tt>)</tt> for <i>n</i> &ge; 1)
      </li>
    </ul>

    <hr />

    <table cellpadding="0" width="100%">
      <tr>
        <td>
          <a href="http://www.mpi-sws.org/~rossberg/">Andreas Rossberg</a>,
          <a href="mailto:rossberg@mpi-sws.org">rossberg@mpi-sws.org</a>. <br />
          Last modified: 2014/02/08 /{" "}
          <a href="https://imprint.mpi-klsb.mpg.de/sws/people/rossberg">
            Imprint
          </a>
          /{" "}
          <a href="https://data-protection.mpi-klsb.mpg.de/sws/people/rossberg">
            Data protection
          </a>
        </td>

        <td align="right">
          <a href="http://validator.w3.org/check?uri=referer">
            <img
              border="0"
              src="http://www.w3.org/Icons/valid-xhtml10-blue"
              alt="Valid XHTML 1.0 Transitional"
              height="31"
              width="88"
            />
          </a>
        </td>
      </tr>
    </table>
  </Layout>
)

export default AndreasRossbergSyntaxPage
