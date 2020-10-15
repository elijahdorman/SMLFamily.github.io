import React from "react"
// import { Link } from "gatsby"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const BasisIndexPage = () => (
  <Layout>
    <SEO title="SML Basis Library" />
    Documentation for the SML Basis Library
    <div>
      Introduction
      <p>
        These web pages contain the interface specifications for the modules of
        the SML Basis Library, which is a standard library for the 1997 Revision
        of SML[CITE]. The SML Basis Library provides interfaces and operations
        for basic types, such as integers and strings, support for input and
        output (I/O), interfaces to basic operating system interfaces, and
        support for standard datatypes, such as options and lists. The Library
        does not attempt to define higher-level APIs, such as collection types
        or graphical user-interface components. These APIs are left for other
        libraries.
      </p>
      <p>
        This document may be distributed freely over the internet as long as the
        copyright notice and license terms below are prominently displayed
        within every machine-readable copy. The SML Basis Library is also
        published as a book by
        <a
          href="http://www.cambridge.org/us/academic/subjects/computer-science/programming-languages-and-applied-logic/standard-ml-basis-library?format=PB?format=PB"
          target="_blank"
          rel="noopener noreferrer"
          alt="Link to Cambridge University Press"
        >
          Cambridge University Press
        </a>
        . In addition to the manual pages, the book also contains tutorial
        descriptions of programming techniques and idioms for effective use of
        the Library's interfaces.
      </p>
      <p>
        The design philosophy of the SML Basis Library is to use the SML module
        system as an organizing tool. All type, exception, and value identifiers
        are bound in some module. A small number of these, which are called
        pervasive identifiers, are also bound at top-level (i.e., without
        qualification). In addition, the top-level environment defines
        overloading of some identifiers.
      </p>
      <p>
        The components (i.e., signatures, structures, and functors) of the SML
        Basis Library are divided into required and optional components.
        Required components must be provided by all SML implementations, while
        optional components are just that. In some cases, support for one
        optional component entails providing support for others.
      </p>
      <p>
        These webpages are organized as follows: the overview page describes the
        different kinds of interfaces provided by the SML Basis Library as well
        as which components are required and optional. The bulk of this document
        is a collection of manual pages, each of which describes an interface
        (i.e., signature) and its implementations.
      </p>
    </div>
    <div>
      Overview This section gives an overview of the organization of the SML
      Basis Library.
      <p>
        <h3>Top-level environment</h3>
        The top-level environment consists of those type, exception, and value
        identifiers that can be used without qualification. These identifiers
        are called pervasive. For example, the unqualified type int is bound to
        the type Int.int and the function length is bound to List.length. In
        addition to the pervasive identifiers, the top-level environment also
        consists of overloaded identifiers (e.g., + and *) and infix
        definitions. The top-level environment is described in [Top-level
        environment].
      </p>
      <p>
        <h3>Basic types</h3>
        Operations of the various basic types (i.e., bool, int, word, and real)
        are all provided by the SML Basis Library. Additional support for
        computing with real numbers is provided by the Math and IEEEReal
        structures. In addition, implementations may implement multiple
        different precisions of integers, words, or reals.
      </p>
      <p>
        <h3>Standard datatypes</h3>
        The SML Basis Library provides support for basic operations on the
        standard option and list datatypes with the Option, List, ListPair
        structures.
      </p>
      <p>
        <h3>Vectors and arrays</h3>
        The SML Basis Library supports of mutable array and immutable vector
        types. In addition to the array and vector type constructors, there are
        a variety of monomorphic array and vector types. The monomorphic types
        provide a more compact representation at the cost of less polymorphism.
        The Library also defines slices of arrays and vectors, which are an
        abstraction of contiguous subsequences.
      </p>
      <p>
        <h3>Text</h3>
        Text processing is supported in the form three basic types: char,
        string, and substring. Strings are immutable vectors of characters and
        substrings are string slices (in fact, the types string is just another
        name for CharVector.vector and substring is another name for
        CharVectorSlice.slice). The SML Basis Library also provides functions
        for converting to and from basic types and strings.
      </p>
      <p>
        <h3>Input/output</h3>
        The SML Basis Library supports both binary and text input/output (I/O)
        using a three-level I/O stack. At the lowest level, the PRIM_IO
        interface provides unbuffered I/O on abstract readers and writers. The
        STREAM_IO interface provides buffering on top of the primitive readers
        and writers; it also provides a functional input model that supports
        arbitrary lookahead. The top-level of I/O support is the IMPERATIVE_IO
        interface, which supports dynamically bound streams (i.e., one can
        redirect an imperative I/O stream after it has been opened).
      </p>
      <p>
        <h3>System interfaces</h3>
        The SML Basis Library provides support for writing portable code that
        uses common systems services (e.g., directory navigation). The OS
        structure collects together support for file system operations
        (OS.FileSys), low-level I/O (OS.FileSys), pathnames (OS.Path), and
        process control (OS.Process). There is also support for time and date
        manipulations, as well as interval timing.
      </p>
      <p>
        <h3>Sockets</h3>
        Network programming using sockets is supported by a collection of
        optional structures. The Socket structure collects together the various
        operations for socket control and I/O. Three structures are provided for
        socket creation: INetSock for Internet-domain sockets, UnixSock for
        Unix-domain sockets, and GenericSock for arbitrary sockets. The
        NetHostDB, NetProtDB, and NetServDB structures provide access to the
        network database (e.g., for hostname lookup).
      </p>
      <p>
        <h3>Unix-specific interfaces</h3>
        The SML Basis Library supports access to additional system services on
        Unix systems via the optional Unix and Posix structures.
      </p>
      <p>
        <h3>Microsoft Windows-specific interfaces</h3>
        The SML Basis Library supports access to additional system services on
        Microsoft Microsoft Windows systems via the optional Windows structure.
      </p>
      <p>
        <h3>Required components</h3>
        For an implementation to be compliant with the SML Basis Library
        specification, it must provide all of the required components.
        Furthermore, these components must be implemented as defined by
        specification; extending these interfaces is not permitted.
      </p>
    </div>
  </Layout>
)

export default BasisIndexPage
