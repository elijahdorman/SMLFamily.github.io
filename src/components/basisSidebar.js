//fix this spaghetti

// compile a set of JSON
// break into modules
// add specific definitions for each module
// do all that layout programatically instead

/* JSON format
[
  {
    name: "Array",
    description: "some description",
    definitions: [
      {
        name: "thing",
        type: "function",
        description: "some description"
      }
    ]
  }
]
*/

/*
The Array structure
The Array2 structure
The ARRAY_SLICE signature
The BinIO structure
The BIT_FLAGS signature
The Bool structure
The Byte structure
The CHAR signature
The CommandLine structure
The Date structure
The General structure
The GenericSock structure
The IEEEReal structure
The IMPERATIVE_IO signature
The ImperativeIO functor
The INetSock structure
The INTEGER signature
The IntInf structure
The IO structure
The List structure
The ListPair structure
The MATH signature
The MONO_ARRAY signature
The MONO_ARRAY2 signature
The MONO_ARRAY_SLICE signature
The MONO_VECTOR signature
The MONO_VECTOR_SLICE signature
The NetHostDB structure
The NetProtDB structure
The NetServDB structure
The Option structure
The OS structure
The OS.FileSys structure
The OS.IO structure
The OS.Path structure
The OS.Process structure
The PACK_REAL signature
The PACK_WORD signature
The Posix structure
The Posix.Error structure
The Posix.FileSys structure
The Posix.IO structure
The Posix.ProcEnv structure
The Posix.Process structure
The Posix.Signal structure
The Posix.SysDB structure
The Posix.TTY structure
The PRIM_IO signature
The PrimIO functor
The REAL signature
The Socket structure
The STREAM_IO signature
The StreamIO functor
The STRING signature
The StringCvt structure
The SUBSTRING signature
The TEXT signature
The TEXT_IO signature
The TEXT_STREAM_IO signature
The Time structure
The Timer structure
The Unix structure
The UnixSock structure
The Vector structure
The VECTOR_SLICE signature
The Windows structure
The WORD signature
*/

var raw = (
  <div>
    <center>
      <table align="center">
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="array.html#ARRAY:SIG:SPEC">ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="array-slice.html#ARRAY_SLICE:SIG:SPEC">ARRAY_SLICE</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="bin-io.html#BIN_IO:SIG:SPEC">BIN_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="bool.html#BOOL:SIG:SPEC">BOOL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="byte.html#BYTE:SIG:SPEC">BYTE</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="char.html#CHAR:SIG:SPEC">CHAR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="command-line.html#COMMAND_LINE:SIG:SPEC">
                  COMMAND_LINE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="date.html#DATE:SIG:SPEC">DATE</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="general.html#GENERAL:SIG:SPEC">GENERAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="ieee-float.html#IEEE_REAL:SIG:SPEC">IEEE_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="imperative-io.html#IMPERATIVE_IO:SIG:SPEC">
                  IMPERATIVE_IO
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="integer.html#INTEGER:SIG:SPEC">INTEGER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="io.html#IO:SIG:SPEC">IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="list.html#LIST:SIG:SPEC">LIST</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="list-pair.html#LIST_PAIR:SIG:SPEC">LIST_PAIR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="math.html#MATH:SIG:SPEC">MATH</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="option.html#OPTION:SIG:SPEC">OPTION</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="os.html#OS:SIG:SPEC">OS</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="os-file-sys.html#OS_FILE_SYS:SIG:SPEC">OS_FILE_SYS</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="os-io.html#OS_IO:SIG:SPEC">OS_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="os-path.html#OS_PATH:SIG:SPEC">OS_PATH</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="os-process.html#OS_PROCESS:SIG:SPEC">OS_PROCESS</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="real.html#REAL:SIG:SPEC">REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="stream-io.html#STREAM_IO:SIG:SPEC">STREAM_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="string.html#STRING:SIG:SPEC">STRING</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="string-cvt.html#STRING_CVT:SIG:SPEC">STRING_CVT</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="substring.html#SUBSTRING:SIG:SPEC">SUBSTRING</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="text.html#TEXT:SIG:SPEC">TEXT</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="text-io.html#TEXT_IO:SIG:SPEC">TEXT_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="text-stream-io.html#TEXT_STREAM_IO:SIG:SPEC">
                  TEXT_STREAM_IO
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="time.html#TIME:SIG:SPEC">TIME</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="timer.html#TIMER:SIG:SPEC">TIMER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="vector.html#VECTOR:SIG:SPEC">VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="vector-slice.html#VECTOR_SLICE:SIG:SPEC">
                  VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="word.html#WORD:SIG:SPEC">WORD</a>
              </code>
            </code>
          </td>
        </tr>
      </table>
    </center>
    {/* TABLE END */}
    <hr />
    <h4>
      <a name="section:13"></a>Required structures
    </h4>
    <p>
      The following table lists the structures that every SML implementation is
      required to provide:
    </p>
    <hr />
    {/* TABLE */}
    <center>
      <table align="center">
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="array.html#Array:STR:SPEC">Array</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="array.html#ARRAY:SIG:SPEC">ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="array-slice.html#ArraySlice:STR:SPEC">ArraySlice</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="array-slice.html#ARRAY_SLICE:SIG:SPEC">ARRAY_SLICE</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="bin-io.html#BinIO:STR:SPEC">BinIO</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="bin-io.html#BIN_IO:SIG:SPEC">BIN_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prim-io.html#BinPrimIO:STR:SPEC">BinPrimIO</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="bool.html#Bool:STR:SPEC">Bool</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="bool.html#BOOL:SIG:SPEC">BOOL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="byte.html#Byte:STR:SPEC">Byte</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="byte.html#BYTE:SIG:SPEC">BYTE</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#CharArray:STR:SPEC">CharArray</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#CharArraySlice:STR:SPEC">
                  CharArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="char.html#Char:STR:SPEC">Char</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="char.html#CHAR:SIG:SPEC">CHAR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#CharVector:STR:SPEC">CharVector</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#CharVectorSlice:STR:SPEC">
                  CharVectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="command-line.html#CommandLine:STR:SPEC">CommandLine</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="command-line.html#COMMAND_LINE:SIG:SPEC">
                  COMMAND_LINE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="date.html#Date:STR:SPEC">Date</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="date.html#DATE:SIG:SPEC">DATE</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="general.html#General:STR:SPEC">General</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="general.html#GENERAL:SIG:SPEC">GENERAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="ieee-float.html#IEEEReal:STR:SPEC">IEEEReal</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="ieee-float.html#IEEE_REAL:SIG:SPEC">IEEE_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="integer.html#Int:STR:SPEC">Int</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="integer.html#INTEGER:SIG:SPEC">INTEGER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="io.html#IO:STR:SPEC">IO</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="io.html#IO:SIG:SPEC">IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="integer.html#LargeInt:STR:SPEC">LargeInt</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="integer.html#INTEGER:SIG:SPEC">INTEGER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="real.html#LargeReal:STR:SPEC">LargeReal</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="real.html#REAL:SIG:SPEC">REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="word.html#LargeWord:STR:SPEC">LargeWord</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="word.html#WORD:SIG:SPEC">WORD</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="list.html#List:STR:SPEC">List</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="list.html#LIST:SIG:SPEC">LIST</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="list-pair.html#ListPair:STR:SPEC">ListPair</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="list-pair.html#LIST_PAIR:SIG:SPEC">LIST_PAIR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="math.html#Math:STR:SPEC">Math</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="math.html#MATH:SIG:SPEC">MATH</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="option.html#Option:STR:SPEC">Option</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="option.html#OPTION:SIG:SPEC">OPTION</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="os.html#OS:STR:SPEC">OS</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="os.html#OS:SIG:SPEC">OS</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="integer.html#Position:STR:SPEC">Position</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="integer.html#INTEGER:SIG:SPEC">INTEGER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="real.html#Real:STR:SPEC">Real</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="real.html#REAL:SIG:SPEC">REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="string-cvt.html#StringCvt:STR:SPEC">StringCvt</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="string-cvt.html#STRING_CVT:SIG:SPEC">STRING_CVT</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="string.html#String:STR:SPEC">String</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="string.html#STRING:SIG:SPEC">STRING</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="substring.html#Substring:STR:SPEC">Substring</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="substring.html#SUBSTRING:SIG:SPEC">SUBSTRING</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="text-io.html#TextIO:STR:SPEC">TextIO</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="text-io.html#TEXT_IO:SIG:SPEC">TEXT_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prim-io.html#TextPrimIO:STR:SPEC">TextPrimIO</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="text.html#Text:STR:SPEC">Text</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="text.html#TEXT:SIG:SPEC">TEXT</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="timer.html#Timer:STR:SPEC">Timer</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="timer.html#TIMER:SIG:SPEC">TIMER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="time.html#Time:STR:SPEC">Time</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="time.html#TIME:SIG:SPEC">TIME</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="vector-slice.html#VectorSlice:STR:SPEC">VectorSlice</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="vector-slice.html#VECTOR_SLICE:SIG:SPEC">
                  VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="vector.html#Vector:STR:SPEC">Vector</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="vector.html#VECTOR:SIG:SPEC">VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#Word8Array:STR:SPEC">Word8Array</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#Word8ArraySlice:STR:SPEC">
                  Word8ArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#Word8Vector:STR:SPEC">Word8Vector</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#Word8VectorSlice:STR:SPEC">
                  Word8VectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="word.html#Word8:STR:SPEC">Word8</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="word.html#WORD:SIG:SPEC">WORD</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="word.html#Word:STR:SPEC">Word</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="word.html#WORD:SIG:SPEC">WORD</a>
              </code>
            </code>
          </td>
        </tr>
      </table>
    </center>
    {/* TABLE END */}
    <hr />
    <H3>
      <a name="section:14"></a>Optional components
    </H3>
    <p>
      In addition to the required components, an implementation may choose to
      provide some optional components. While these components are optional, if
      present, they must be implemented as defined by specification; extending
      these interfaces is not permitted.
    </p>
    <h4>
      <a name="section:15"></a>Optional signatures
    </h4>
    <p>
      The following table lists the optional signatures that an SML
      implementation may choose to provide:
    </p>
    <hr />
    {/* TABLE */}
    <center>
      <table align="center">
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="array2.html#ARRAY2:SIG:SPEC">ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="generic-sock.html#GENERIC_SOCK:SIG:SPEC">
                  GENERIC_SOCK
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="inet-sock.html#INET_SOCK:SIG:SPEC">INET_SOCK</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="int-inf.html#INT_INF:SIG:SPEC">INT_INF</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="net-host-db.html#NET_HOST_DB:SIG:SPEC">NET_HOST_DB</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prot-db.html#NET_PROT_DB:SIG:SPEC">NET_PROT_DB</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="serv-db.html#NET_SERV_DB:SIG:SPEC">NET_SERV_DB</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-float.html#PACK_REAL:SIG:SPEC">PACK_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-word.html#PACK_WORD:SIG:SPEC">PACK_WORD</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix.html#POSIX:SIG:SPEC">POSIX</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-error.html#POSIX_ERROR:SIG:SPEC">POSIX_ERROR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-file-sys.html#POSIX_FILE_SYS:SIG:SPEC">
                  POSIX_FILE_SYS
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-io.html#POSIX_IO:SIG:SPEC">POSIX_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-proc-env.html#POSIX_PROC_ENV:SIG:SPEC">
                  POSIX_PROC_ENV
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-process.html#POSIX_PROCESS:SIG:SPEC">
                  POSIX_PROCESS
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-signal.html#POSIX_SIGNAL:SIG:SPEC">
                  POSIX_SIGNAL
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-sys-db.html#POSIX_SYS_DB:SIG:SPEC">
                  POSIX_SYS_DB
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix-tty.html#POSIX_TTY:SIG:SPEC">POSIX_TTY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="socket.html#SOCKET:SIG:SPEC">SOCKET</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="unix.html#UNIX:SIG:SPEC">UNIX</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="unix-sock.html#UNIX_SOCK:SIG:SPEC">UNIX_SOCK</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="windows.html#WINDOWS:SIG:SPEC">WINDOWS</a>
              </code>
            </code>
          </td>
        </tr>
      </table>
    </center>
    {/* TABLE END */}
    <hr />
    <h4>
      <a name="section:16"></a>Optional structures
    </h4>
    <p>
      The following table lists the optional structures that an SML
      implementation may choose to provide:
    </p>
    <hr />
    {/* TABLE */}
    <center>
      <table align="center">
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="array2.html#Array2:STR:SPEC">Array2</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="array2.html#ARRAY2:SIG:SPEC">ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#BoolArray:STR:SPEC">BoolArray</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#BoolArray2:STR:SPEC">BoolArray2</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#BoolArraySlice:STR:SPEC">
                  BoolArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#BoolVector:STR:SPEC">BoolVector</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#BoolVectorSlice:STR:SPEC">
                  BoolVectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#CharArray2:STR:SPEC">CharArray2</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="integer.html#FixedInt:STR:SPEC">FixedInt</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="integer.html#INTEGER:SIG:SPEC">INTEGER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="generic-sock.html#GenericSock:STR:SPEC">GenericSock</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="generic-sock.html#GENERIC_SOCK:SIG:SPEC">
                  GENERIC_SOCK
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="inet-sock.html#INetSock:STR:SPEC">INetSock</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="inet-sock.html#INET_SOCK:SIG:SPEC">INET_SOCK</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#IntArray:STR:SPEC">IntArray</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#IntArray2:STR:SPEC">IntArray2</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#IntArraySlice:STR:SPEC">
                  IntArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#IntVector:STR:SPEC">IntVector</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#IntVectorSlice:STR:SPEC">
                  IntVectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#Int{N}Array:STR:SPEC">
                  Int<I>&lt;N&gt;</I>Array
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#Int{N}Array2:STR:SPEC">
                  Int<I>&lt;N&gt;</I>Array2
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#Int{N}ArraySlice:STR:SPEC">
                  Int<I>&lt;N&gt;</I>ArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="integer.html#Int{N}:STR:SPEC">
                  Int<I>&lt;N&gt;</I>
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="integer.html#INTEGER:SIG:SPEC">INTEGER</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#Int{N}Vector:STR:SPEC">
                  Int<I>&lt;N&gt;</I>Vector
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#Int{N}VectorSlice:STR:SPEC">
                  Int<I>&lt;N&gt;</I>VectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="int-inf.html#IntInf:STR:SPEC">IntInf</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="int-inf.html#INT_INF:SIG:SPEC">INT_INF</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="net-host-db.html#NetHostDB:STR:SPEC">NetHostDB</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="net-host-db.html#NET_HOST_DB:SIG:SPEC">NET_HOST_DB</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prot-db.html#NetProtDB:STR:SPEC">NetProtDB</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="prot-db.html#NET_PROT_DB:SIG:SPEC">NET_PROT_DB</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="serv-db.html#NetServDB:STR:SPEC">NetServDB</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="serv-db.html#NET_SERV_DB:SIG:SPEC">NET_SERV_DB</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-word.html#PackWord{N}Big:STR:SPEC">
                  PackWord<I>&lt;N&gt;</I>Big
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="pack-word.html#PACK_WORD:SIG:SPEC">PACK_WORD</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-word.html#PackWord{N}Little:STR:SPEC">
                  PackWord<I>&lt;N&gt;</I>Little
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="pack-word.html#PACK_WORD:SIG:SPEC">PACK_WORD</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-float.html#PackRealBig:STR:SPEC">PackRealBig</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="pack-float.html#PACK_REAL:SIG:SPEC">PACK_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-float.html#PackRealLittle:STR:SPEC">
                  PackRealLittle
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="pack-float.html#PACK_REAL:SIG:SPEC">PACK_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-float.html#PackReal{N}Big:STR:SPEC">
                  PackReal<I>&lt;N&gt;</I>Big
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="pack-float.html#PACK_REAL:SIG:SPEC">PACK_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="pack-float.html#PackReal{N}Little:STR:SPEC">
                  PackReal<I>&lt;N&gt;</I>Little
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="pack-float.html#PACK_REAL:SIG:SPEC">PACK_REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="posix.html#Posix:STR:SPEC">Posix</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="posix.html#POSIX:SIG:SPEC">POSIX</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#RealArray2:STR:SPEC">RealArray2</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#RealArray:STR:SPEC">RealArray</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#RealArraySlice:STR:SPEC">
                  RealArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#RealVector:STR:SPEC">RealVector</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#RealVectorSlice:STR:SPEC">
                  RealVectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#Real{N}Array:STR:SPEC">
                  Real<I>&lt;N&gt;</I>Array
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top"></td>
          <code>
            <code>
              <a href="mono-array2.html#Real{N}Array2:STR:SPEC">
                Real<I>&lt;N&gt;</I>Array2
              </a>
            </code>{" "}
            :&gt;{" "}
            <code>
              <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
            </code>
          </code>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#Real{N}ArraySlice:STR:SPEC">
                  Real<I>&lt;N&gt;</I>ArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="real.html#Real{N}:STR:SPEC">
                  Real<I>&lt;N&gt;</I>
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="real.html#REAL:SIG:SPEC">REAL</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#Real{N}Vector:STR:SPEC">
                  Real<I>&lt;N&gt;</I>Vector
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#Real{N}VectorSlice:STR:SPEC">
                  Real<I>&lt;N&gt;</I>VectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="socket.html#Socket:STR:SPEC">Socket</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="socket.html#SOCKET:SIG:SPEC">SOCKET</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="word.html#SysWord:STR:SPEC">SysWord</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="word.html#WORD:SIG:SPEC">WORD</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="unix-sock.html#UnixSock:STR:SPEC">UnixSock</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="unix-sock.html#UNIX_SOCK:SIG:SPEC">UNIX_SOCK</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="unix.html#Unix:STR:SPEC">Unix</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="unix.html#UNIX:SIG:SPEC">UNIX</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#WideCharArray:STR:SPEC">
                  WideCharArray
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#WideCharArray2:STR:SPEC">
                  WideCharArray2
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#WideCharArraySlice:STR:SPEC">
                  WideCharArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="char.html#WideChar:STR:SPEC">WideChar</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="char.html#CHAR:SIG:SPEC">CHAR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#WideCharVector:STR:SPEC">
                  WideCharVector
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#WideCharVectorSlice:STR:SPEC">
                  WideCharVectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="string.html#WideString:STR:SPEC">WideString</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="string.html#STRING:SIG:SPEC">STRING</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="substring.html#WideSubstring:STR:SPEC">
                  WideSubstring
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="substring.html#SUBSTRING:SIG:SPEC">SUBSTRING</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prim-io.html#WideTextPrimIO:STR:SPEC">
                  WideTextPrimIO
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="text.html#WideText:STR:SPEC">WideText</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="text.html#TEXT:SIG:SPEC">TEXT</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="windows.html#Windows:STR:SPEC">Windows</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="windows.html#WINDOWS:SIG:SPEC">WINDOWS</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array.html#Word{N}Array:STR:SPEC">
                  Word<I>&lt;N&gt;</I>Array
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array2.html#Word{N}Array2:STR:SPEC">
                  Word<I>&lt;N&gt;</I>Array2
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-array-slice.html#Word{N}ArraySlice:STR:SPEC">
                  Word<I>&lt;N&gt;</I>ArraySlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">
                  MONO_ARRAY_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector.html#Word{N}Vector:STR:SPEC">
                  Word<I>&lt;N&gt;</I>Vector
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="mono-vector-slice.html#Word{N}VectorSlice:STR:SPEC">
                  Word<I>&lt;N&gt;</I>VectorSlice
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">
                  MONO_VECTOR_SLICE
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="word.html#Word{N}:STR:SPEC">
                  Word<I>&lt;N&gt;</I>
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="word.html#WORD:SIG:SPEC">WORD</a>
              </code>
            </code>
          </td>
        </tr>
      </table>
    </center>
    {/* TABLE END */}
    <hr />
    <h4>
      <a name="section:17"></a>Optional functors
    </h4>
    <p>
      The following table lists the optional functors that an SML implementation
      may choose to provide:
    </p>
    <hr />
    <center>
      {/* TABLE */}
      <table align="center">
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="imperative-io-fn.html#ImperativeIO:FCT:SPEC">
                  ImperativeIO
                </a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="imperative-io.html#IMPERATIVE_IO:SIG:SPEC">
                  IMPERATIVE_IO
                </a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <code>
              <code>
                <a href="prim-io-fn.html#PrimIO:FCT:SPEC">PrimIO</a>
              </code>{" "}
              :&gt;{" "}
              <code>
                <a href="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</a>
              </code>
            </code>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top"></td>
          <code>
            <code>
              <a href="stream-io-fn.html#StreamIO:FCT:SPEC">StreamIO</a>
            </code>{" "}
            :&gt;{" "}
            <code>
              <a href="stream-io.html#STREAM_IO:SIG:SPEC">STREAM_IO</a>
            </code>
          </code>
        </tr>
      </table>
    </center>
    {/* TABLE END */}
  </div>
)
