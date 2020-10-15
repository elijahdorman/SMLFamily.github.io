var streamIOSignature = `


<H2><A NAME="section:0"></A>The <CODE>STREAM_IO</CODE> signature</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="STREAM_IO:SIG:SPEC"></A><CODE>STREAM_IO</CODE><BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>STREAM_IO</CODE> signature defines the interface of the <EM>Stream I/O</EM> layer in the I/O stack. This layer provides buffering over the readers and writers of the <A HREF="prim-io.html#PrimIO:Layer">Primitive I/O</A> layer.
<P>
Input streams are treated in the lazy functional style: that is, input from a stream <VAR>f</VAR> yields a finite vector of elements, plus a new stream <VAR>f'</VAR>.  Input from <VAR>f</VAR> again will yield the same elements; to advance within the stream in the usual way, it is necessary to do further input from <VAR>f'</VAR>.  This interface allows arbitrary lookahead to be done very cleanly, which should be useful both for <I>ad hoc</I> lexical analysis and for table-driven, regular-expression-based lexing.
<P>
Output streams are handled more conventionally, since the lazy functional style does not seem to make sense for output.
<P>
Stream I/O functions may raise the <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> exception if a resulting vector of elements would exceed the maximum vector size, or the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">IO.Io</A></CODE> exception. In general, when <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">IO.Io</A></CODE> is raised as a result of a failure in a lower-level module, the underlying exception is caught and propagated up as the <CODE>cause</CODE> component of the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">IO.Io</A></CODE> exception value. This will usually be a <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE>,  <CODE><A HREF="io.html#SIG:IO.ClosedStream:EXN:SPEC">IO.ClosedStream</A></CODE>, <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">OS.SysErr</A></CODE>, or <CODE><A HREF="general.html#SIG:GENERAL.Fail:EXN:SPEC">Fail</A></CODE> exception (the last possible because of user-supplied readers or writers), but the stream I/O module will rarely (perhaps never) need to inspect it. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.elem:TY:SPEC" HREF="#SIG:STREAM_IO.elem:TY">elem</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.vector:TY:SPEC" HREF="#SIG:STREAM_IO.vector:TY">vector</A><BR>
<BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.instream:TY:SPEC" HREF="#SIG:STREAM_IO.instream:TY">instream</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.outstream:TY:SPEC" HREF="#SIG:STREAM_IO.outstream:TY">outstream</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.out_pos:TY:SPEC" HREF="#SIG:STREAM_IO.out_pos:TY">out_pos</A><BR>
<BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.reader:TY:SPEC" HREF="#SIG:STREAM_IO.reader:TY">reader</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.writer:TY:SPEC" HREF="#SIG:STREAM_IO.writer:TY">writer</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:STREAM_IO.pos:TY:SPEC" HREF="#SIG:STREAM_IO.pos:TY">pos</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.input:VAL:SPEC" HREF="#SIG:STREAM_IO.input:VAL">input</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;vector&nbsp;<B>*</B>&nbsp;instream<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.input1:VAL:SPEC" HREF="#SIG:STREAM_IO.input1:VAL">input1</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;(elem&nbsp;<B>*</B>&nbsp;instream)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.inputN:VAL:SPEC" HREF="#SIG:STREAM_IO.inputN:VAL">inputN</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;vector&nbsp;<B>*</B>&nbsp;instream<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.inputAll:VAL:SPEC" HREF="#SIG:STREAM_IO.inputAll:VAL">inputAll</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;vector&nbsp;<B>*</B>&nbsp;instream<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.canInput:VAL:SPEC" HREF="#SIG:STREAM_IO.canInput:VAL">canInput</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.closeIn:VAL:SPEC" HREF="#SIG:STREAM_IO.closeIn:VAL">closeIn</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.endOfStream:VAL:SPEC" HREF="#SIG:STREAM_IO.endOfStream:VAL">endOfStream</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.output:VAL:SPEC" HREF="#SIG:STREAM_IO.output:VAL">output</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>*</B>&nbsp;vector&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.output1:VAL:SPEC" HREF="#SIG:STREAM_IO.output1:VAL">output1</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.flushOut:VAL:SPEC" HREF="#SIG:STREAM_IO.flushOut:VAL">flushOut</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.closeOut:VAL:SPEC" HREF="#SIG:STREAM_IO.closeOut:VAL">closeOut</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.mkInstream:VAL:SPEC" HREF="#SIG:STREAM_IO.mkInstream:VAL">mkInstream</A>&nbsp;<B>:</B>&nbsp;reader&nbsp;<B>*</B>&nbsp;vector&nbsp;<B>-&gt;</B>&nbsp;instream<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.getReader:VAL:SPEC" HREF="#SIG:STREAM_IO.getReader:VAL">getReader</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;reader&nbsp;<B>*</B>&nbsp;vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.filePosIn:VAL:SPEC" HREF="#SIG:STREAM_IO.filePosIn:VAL">filePosIn</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;pos<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.setBufferMode:VAL:SPEC" HREF="#SIG:STREAM_IO.setBufferMode:VAL">setBufferMode</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>*</B>&nbsp;IO.buffer_mode&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.getBufferMode:VAL:SPEC" HREF="#SIG:STREAM_IO.getBufferMode:VAL">getBufferMode</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>-&gt;</B>&nbsp;IO.buffer_mode<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.mkOutstream:VAL:SPEC" HREF="#SIG:STREAM_IO.mkOutstream:VAL">mkOutstream</A>&nbsp;<B>:</B>&nbsp;writer&nbsp;<B>*</B>&nbsp;IO.buffer_mode&nbsp;<B>-&gt;</B>&nbsp;outstream<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.getWriter:VAL:SPEC" HREF="#SIG:STREAM_IO.getWriter:VAL">getWriter</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>-&gt;</B>&nbsp;writer&nbsp;<B>*</B>&nbsp;IO.buffer_mode<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.getPosOut:VAL:SPEC" HREF="#SIG:STREAM_IO.getPosOut:VAL">getPosOut</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>-&gt;</B>&nbsp;out_pos<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.setPosOut:VAL:SPEC" HREF="#SIG:STREAM_IO.setPosOut:VAL">setPosOut</A>&nbsp;<B>:</B>&nbsp;out_pos&nbsp;<B>-&gt;</B>&nbsp;outstream<BR>
<B>val</B>&nbsp;<A NAME="SIG:STREAM_IO.filePosOut:VAL:SPEC" HREF="#SIG:STREAM_IO.filePosOut:VAL">filePosOut</A>&nbsp;<B>:</B>&nbsp;out_pos&nbsp;<B>-&gt;</B>&nbsp;pos</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:STREAM_IO.elem:TY"></A><CODE><B>type</B>&nbsp;elem<BR>
<B>type</B>&nbsp;vector</CODE>
<DD>
        The abstract types of stream elements and vectors of  elements.  For text streams, these are <CODE><A HREF="char.html#SIG:CHAR.char:TY:SPEC">Char.char</A></CODE> and  <CODE><A HREF="string.html#SIG:STRING.string:TY:SPEC">String.string</A></CODE>,  while for binary streams, these are <CODE><A HREF="word.html#SIG:WORD.word:TY:SPEC">Word8.word</A></CODE> and  <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">Word8Vector.vector</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.instream:TY"></A><CODE><B>type</B>&nbsp;instream</CODE>
<DD>
 The type of buffered functional input streams.
<P>
Input streams are in one of three states: active, truncated, or closed. When initially created, the stream is active. When disconnected from its underlying primitive reader (<I>e.g.</I>, by <CODE><A HREF="stream-io.html#SIG:STREAM_IO.getReader:VAL:SPEC">getReader</A></CODE>), the stream is truncated. When <CODE><A HREF="stream-io.html#SIG:STREAM_IO.closeIn:VAL:SPEC">closeIn</A></CODE> is applied to the stream, the stream enters the closed state. A closed stream is also truncated. The only real difference between a truncated stream and a closed one is that in the latter case, the stream's primitive I/O reader is closed.
<P>
Reading from a truncated input stream will never block; after all buffered elements are read, input operations always return empty vectors. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.outstream:TY"></A><CODE><B>type</B>&nbsp;outstream</CODE>
<DD>
 The type of buffered output streams.  Unlike input streams, these are imperative objects.
<P>
Output streams are in one of three states: active, terminated, or closed. When initially created, the stream is active. When disconnected from its underlying primitive writer (<I>e.g.</I>, by <CODE><A HREF="stream-io.html#SIG:STREAM_IO.getWriter:VAL:SPEC">getWriter</A></CODE>), the stream is terminated. When <CODE><A HREF="stream-io.html#SIG:STREAM_IO.closeOut:VAL:SPEC">closeOut</A></CODE> is applied to the stream, the stream enters the closed state. A closed stream is also terminated. The only real difference between a terminated stream and a closed one is that in the latter case, the stream's primitive I/O writer is closed.
<P>
In a terminated output stream, there is no mechanism for performing more output, so any output operations will raise the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">IO.Io</A></CODE> exception. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.out_pos:TY"></A><CODE><B>type</B>&nbsp;out_pos</CODE>
<DD>
 The type of positions in output streams. This can be used to reconstruct an output stream at the position recorded in the <CODE><A HREF="stream-io.html#SIG:STREAM_IO.out_pos:TY:SPEC">out_pos</A></CODE> value. Thus, the canonical representation for the type is <CODE>(<CODE><A HREF="stream-io.html#SIG:STREAM_IO.outstream:TY:SPEC">outstream</A></CODE> * <CODE><A HREF="stream-io.html#SIG:STREAM_IO.pos:TY:SPEC">pos</A></CODE>)</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.reader:TY"></A><CODE><B>type</B>&nbsp;reader<BR>
<B>type</B>&nbsp;writer</CODE>
<DD>
        The types of the readers and writers that underlie the  input and output streams. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.pos:TY"></A><CODE><B>type</B>&nbsp;pos</CODE>
<DD>
 This is the type of positions in the underlying readers and writers. In some instantiations of this signature (<I>e.g.</I>, <CODE><A HREF="text-io.html#SIG:TEXT_IO.StreamIO:STR:SPEC">TextIO.StreamIO</A></CODE>), <CODE><A HREF="stream-io.html#SIG:STREAM_IO.pos:TY:SPEC">pos</A></CODE> is abstract; in others it may be concrete (<I>e.g.</I>, <CODE><A HREF="integer.html#SIG:INTEGER.int:TY:SPEC">Position.int</A></CODE> in <CODE><A HREF="imperative-io.html#SIG:IMPERATIVE_IO.StreamIO:STR:SPEC">BinIO.StreamIO</A></CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.input:VAL"></A>
<DT> <CODE>input <VAR>f</VAR> </CODE>
<DD>
returns a vector of one or more elements from <VAR>f</VAR> and the  remainder of the stream, if any elements are available.  If an end-of-stream has been reached, then the empty vector is returned. The function may block until one of these conditions is satisfied.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is an error in the underlying reader. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.input1:VAL"></A>
<DT> <CODE>input1 <VAR>f</VAR> </CODE>
<DD>
returns the next element in the stream <VAR>f</VAR> and the  remainder of the stream.  If the stream is at the end, then <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned. It may block until one of these conditions is satisfied.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is an error in the underlying reader. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.inputN:VAL"></A>
<DT> <CODE>inputN (<VAR>f</VAR>, <VAR>n</VAR>) </CODE>
<DD>
returns a vector of the next <VAR>n</VAR> elements from <VAR>f</VAR>  and the rest of the stream.  If fewer than <VAR>n</VAR> elements are available before the next end-of-stream, it returns all  of the elements up to that end-of-stream. It may block until it can determine if additional characters are available or an end-of-stream condition holds.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is  an error in the underlying reader. It raises <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> if <VAR>n</VAR> &lt; 0 or the number of elements to be returned is greater than <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.maxLen:VAL:SPEC">maxLen</A></CODE>. Also, <CODE><CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE>(f,0)</CODE> returns immediately with an empty vector and <CODE>f</CODE>, so this cannot be used as an indication of end-of-stream. 
<P>
          Using <CODE><A HREF="stream-io.html#SIG:STREAM_IO.instream:TY:SPEC">instream</A></CODE>s, one can synthesize a non-blocking version of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE> from <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE> and <CODE><A HREF="stream-io.html#SIG:STREAM_IO.canInput:VAL:SPEC">canInput</A></CODE>, as <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE> is guaranteed not to block if a previous call to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.canInput:VAL:SPEC">canInput</A></CODE> returned <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(_)</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.inputAll:VAL"></A>
<DT> <CODE>inputAll <VAR>f</VAR> </CODE>
<DD>
returns the vector of the rest of the elements in the stream  <VAR>f</VAR> (<I>i.e.</I>, up to an end-of-stream), and a new stream <VAR>f'</VAR>.  Care should be taken when using this function, since it can  block indefinitely on interactive streams.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is  an error in the underlying reader.  The stream <VAR>f'</VAR> is immediately past the next end-of-stream of <VAR>f</VAR>.  For ordinary files in which only one  end-of stream is expected, <VAR>f'</VAR> can be ignored.  If a file has multiple end-of-stream conditions (which can happen under some operating systems), <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputAll:VAL:SPEC">inputAll</A></CODE> returns all the elements up to the next end-of-stream. It raises <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> if the number of elements to be returned is greater than <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.maxLen:VAL:SPEC">maxLen</A></CODE> for the relevant <CODE><A HREF="stream-io.html#SIG:STREAM_IO.vector:TY:SPEC">vector</A></CODE> type. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.canInput:VAL"></A>
<DT> <CODE>canInput (<VAR>f</VAR>, <VAR>n</VAR>) </CODE>
<DD>
returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> if any attempt at input would block. It returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>k</VAR>)</CODE>, where  0 &lt;= <VAR>k</VAR> &lt;= <VAR>n</VAR>, if a call to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> would return immediately with at least <VAR>k</VAR> characters. Note that <VAR>k</VAR> = 0 corresponds to the stream being at end-of-stream. 
<P>
 Some streams may not support this operation, in which case the  <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception will be raised.  This function also raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is an error in the underlying reader.  It raises the <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> exception if <CODE>n</CODE> &lt; 0. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
It is suggested that implementations of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.canInput:VAL:SPEC">canInput</A></CODE> should attempt to return as large a <VAR>k</VAR> as possible. For example, if the buffer contains 10 characters and the user calls <CODE>canInput (<VAR>f</VAR>, 15)</CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.canInput:VAL:SPEC">canInput</A></CODE> should call <CODE>readVecNB(5)</CODE> to see if an additional 5 characters are available. 
<P>
          Such a lookahead commits the stream to the characters read by <CODE>readVecNB</CODE> but it does not commit the stream to return those characters on the next call to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE>. Indeed, a typical implementation will simply return the remainder of the current buffer, in this case, consisting of 10 characters, if <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> is called. On the other hand, an implementation can decide to always respond to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> with all the elements currently available, provided an earlier call to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> has not committed the stream to a particular response. The only requirement is that any future call of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> on the same input stream must return the same vector of elements. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.closeIn:VAL"></A>
<DT> <CODE>closeIn <VAR>f</VAR> </CODE>
<DD>
marks the stream closed, and closes the underlying reader. Applying <CODE><A HREF="stream-io.html#SIG:STREAM_IO.closeIn:VAL:SPEC">closeIn</A></CODE> on a closed stream has no effect.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is  an error in the underlying reader. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.endOfStream:VAL"></A>
<DT> <CODE>endOfStream <VAR>f</VAR> </CODE>
<DD>
tests if <VAR>f</VAR> satisfies the end-of-stream condition.  If there is no further input in the stream, then this returns  <CODE>true</CODE>; otherwise it returns <CODE>false</CODE>.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is  an error in the underlying reader. 
<P>
 This function may block when checking for more input.  It is equivalent to 
<PRE>
(<A HREF="mono-vector.html#SIG:MONO_VECTOR.length:VAL:SPEC">length</A>(#1(<A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A> <VAR>f</VAR>)) = 0)
</PRE>
  where <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.length:VAL:SPEC">length</A></CODE> is the vector length operation 
<P>
 Note that even if <CODE><A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A></CODE> returns  <CODE>true</CODE>, subsequent input  operations may succeed if more data becomes available. A stream can have multiple end-of-streams interspersed with normal elements. This can happen on Unix, for example, if a user types control-D (<CODE>#&quot;\^D&quot;</CODE>) on a terminal device, and then keeps typing characters; it may also occur on file descriptors connected to sockets.  
<P>
Multiple end-of-streams is a property of the underlying reader. Thus, <CODE>readVec</CODE> on a <CODE><A HREF="stream-io.html#SIG:STREAM_IO.reader:TY:SPEC">reader</A></CODE> may return an empty string, then another call to <CODE>readVec</CODE> on the same <CODE><A HREF="stream-io.html#SIG:STREAM_IO.reader:TY:SPEC">reader</A></CODE> may return a nonempty string, then a third call may return an empty string. It is always true, however, that 
<PRE>
<A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A> <VAR>f</VAR> = <A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A> <VAR>f</VAR>
</PRE>
 In addition, if <CODE><CODE><A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A></CODE> <VAR>f</VAR></CODE> returns <CODE>true</CODE>, then <CODE><CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> <VAR>f</VAR></CODE> returns <CODE>(&quot;&quot;,<VAR>f'</VAR>)</CODE> and  <CODE><CODE><A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A></CODE> <VAR>f'</VAR></CODE> may or may not be true. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.output:VAL"></A>
<DT> <CODE>output (<VAR>f</VAR>, <VAR>vec</VAR>) </CODE>
<DD>
writes the vector of elements <VAR>vec</VAR> to the stream <VAR>f</VAR>.  This raises the exception <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> if <VAR>f</VAR> is terminated.  This function also raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is an error in the underlying writer. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.output1:VAL"></A>
<DT> <CODE>output1 (<VAR>f</VAR>, <VAR>el</VAR>) </CODE>
<DD>
writes the element <VAR>el</VAR> to the stream <VAR>f</VAR>.  This raises the exception <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> if <VAR>f</VAR> is terminated.  This function also raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is an error in the underlying writer. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.flushOut:VAL"></A>
<DT> <CODE>flushOut <VAR>f</VAR> </CODE>
<DD>
flushes any output in <VAR>f</VAR>'s buffer to the underlying  writer; it is a no-op on terminated streams.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is  an error in the underlying writer. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.closeOut:VAL"></A>
<DT> <CODE>closeOut <VAR>f</VAR> </CODE>
<DD>
flushes <VAR>f</VAR>'s buffers, marks the stream closed, and  closes the underlying writer.  This operation has no effect if <VAR>f</VAR> is already closed. Note that if <VAR>f</VAR> is terminated, no flushing will occur.  This function raises the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if there is an error in the underlying writer or if flushing fails. In the latter case, the stream is left open. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.mkInstream:VAL"></A>
<DT> <CODE>mkInstream (<VAR>rd</VAR>, <VAR>v</VAR>) </CODE>
<DD>
returns a new <CODE><A HREF="stream-io.html#SIG:STREAM_IO.instream:TY:SPEC">instream</A></CODE> built on top of the reader <VAR>rd</VAR>  with the initial buffer contents <VAR>v</VAR>.  
<P>
 If the reader does not implement all of its fields (for example,  if random access operations are missing), then certain operations  will raise exceptions when applied to the resulting <CODE><A HREF="stream-io.html#SIG:STREAM_IO.instream:TY:SPEC">instream</A></CODE>.  The following table describes the minimal relationship between  <CODE><A HREF="stream-io.html#SIG:STREAM_IO.instream:TY:SPEC">instream</A></CODE> operations and a reader:  
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=LEFT VALIGN=TOP>
<B>instream supports:</B>  
<TH ALIGN=LEFT VALIGN=TOP>
<B>if reader implements:</B>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE>, etc.  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>readVec</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.canInput:VAL:SPEC">canInput</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>readVecNB</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>readVec</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.filePosIn:VAL:SPEC">filePosIn</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>getPos</CODE> and <CODE>setPos</CODE>  
</TABLE>
</CENTER>
<HR>
 If the reader provides more operations, the resulting stream may use them. 
<P>
 <CODE><A HREF="stream-io.html#SIG:STREAM_IO.mkInstream:VAL:SPEC">mkInstream</A></CODE> should construct the input stream using the reader provided. If the user wishes to employ synthesized functions in the reader, the user may call <CODE><A HREF="stream-io.html#SIG:STREAM_IO.mkInstream:VAL:SPEC">mkInstream</A></CODE> with  an augmented reader <CODE><CODE><A HREF="prim-io.html#SIG:PRIM_IO.augmentReader:VAL:SPEC">augmentReader</A></CODE>(<VAR>rd</VAR>)</CODE>.  See <CODE><A HREF="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</A></CODE> for a description of the functions generated by <CODE><A HREF="prim-io.html#SIG:PRIM_IO.augmentReader:VAL:SPEC">augmentReader</A></CODE>.  
<P>
 Building more than one input stream on top of a single  reader has unpredictable effects, since readers are imperative  objects. In general, there should be a 1-1 correspondence between a reader and a sequence of input streams. Also note that creating an input stream this way means that the stream could be unaware that the reader has been closed until the stream actually attempts to read from it. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.getReader:VAL"></A>
<DT> <CODE>getReader <VAR>f</VAR> </CODE>
<DD>
marks the input stream <VAR>f</VAR> as truncated and returns the underlying  reader along with any unconsumed data from its buffer. The data returned will have the value <CODE>(closeIn f; inputAll f)</CODE>.  The function raises the exception <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE>  if <VAR>f</VAR> is closed or truncated. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.filePosIn:VAL"></A>
<DT> <CODE>filePosIn <VAR>f</VAR>  </CODE>
<DD>
returns the primitive-level reader position that corresponds to the  next element to be read from the buffered stream <VAR>f</VAR>.  This raises the exception <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE>  if the stream does not support the operation, or if <VAR>f</VAR> has been truncated. 
<P>
    It should be true that, if <CODE>#1(inputAll <VAR>f</VAR>)</CODE> returns vector <CODE>v</CODE>, then 
<PRE>
(setPos (filePosIn <VAR>f</VAR>); readVec (length v))
</PRE>
 should also return <CODE>v</CODE>, assuming all operations are defined and terminate. 
<P>
    
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
If the <CODE><A HREF="stream-io.html#SIG:STREAM_IO.pos:TY:SPEC">pos</A></CODE> type is a concrete integer corresponding to a byte offset, and the translation function (between bytes and elements) is known, the value can be computed directly. If not, the value is given by 
<PRE>
fun pos (bufp, n, r as RD rdr) = let
      val readVec = valOf (#readVec rdr)
      val getPos = valOf (#getPos rdr)
      val setPos = valOf (#setPos rdr)
      val savep = getPos()
      in
        setPos bufp;
        readVec n;
        getPos () before setPos savep
      end
</PRE>
 where <CODE>bufp</CODE> is the file position corresponding to the beginning of the current buffer, <CODE>n</CODE> is the number of elements already read from the current buffer, and <CODE>r</CODE> is the stream's underlying reader. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.setBufferMode:VAL"></A>
<DT> <CODE>setBufferMode (<VAR>f</VAR>, <VAR>mode</VAR>) </CODE>
<DT> <CODE>          getBufferMode <VAR>f</VAR> </CODE>
<DD>
These functions set and get the buffering mode of the output stream <VAR>f</VAR>. Setting the buffer mode to <CODE><A HREF="io.html#SIG:IO.buffer_mode:TY:SPEC">IO.NO_BUF</A></CODE> causes any buffered output to be flushed. If the flushing fails, the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception is raised. Switching the mode between <CODE><A HREF="io.html#SIG:IO.buffer_mode:TY:SPEC">IO.LINE_BUF</A></CODE> and <CODE><A HREF="io.html#SIG:IO.buffer_mode:TY:SPEC">IO.BLOCK_BUF</A></CODE> should not cause flushing. If, in going from <CODE><A HREF="io.html#SIG:IO.buffer_mode:TY:SPEC">IO.BLOCK_BUF</A></CODE> to <CODE><A HREF="io.html#SIG:IO.buffer_mode:TY:SPEC">IO.LINE_BUF</A></CODE>, the user desires that the buffer contain no newline characters, the user should call <CODE><A HREF="stream-io.html#SIG:STREAM_IO.flushOut:VAL:SPEC">flushOut</A></CODE> explicitly. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.mkOutstream:VAL"></A>
<DT> <CODE>mkOutstream (<VAR>wr</VAR>, <VAR>mode</VAR>) </CODE>
<DD>
returns a new output stream built on top of the writer <VAR>wr</VAR> with the indicated buffer mode.
<P>
 If the writer does not implement all of its fields (for example,  if random access operations are missing), then certain operations  will raise exceptions when applied to the resulting <CODE><A HREF="stream-io.html#SIG:STREAM_IO.outstream:TY:SPEC">outstream</A></CODE>.  The following table describes the minimal relationship between  <CODE><A HREF="stream-io.html#SIG:STREAM_IO.outstream:TY:SPEC">outstream</A></CODE> operations and a writer:  
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=LEFT VALIGN=TOP>
<B>outstream supports:</B>  
<TH ALIGN=LEFT VALIGN=TOP>
<B>if augmented writer implements:</B>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.output:VAL:SPEC">output</A></CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.output1:VAL:SPEC">output1</A></CODE>, etc.  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>writeArr</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.flushOut:VAL:SPEC">flushOut</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>writeArr</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.setBufferMode:VAL:SPEC">setBufferMode</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>writeArr</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.getPosOut:VAL:SPEC">getPosOut</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>writeArr</CODE> and <CODE>getPos</CODE>  
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="stream-io.html#SIG:STREAM_IO.setPosOut:VAL:SPEC">setPosOut</A></CODE>  
<TD ALIGN=LEFT VALIGN=TOP>
<CODE>writeArr</CODE> and <CODE>setPos</CODE>  
</TABLE>
</CENTER>
<HR>
 If the writer provides more operations, the resulting stream may use them. 
<P>
 <CODE><A HREF="stream-io.html#SIG:STREAM_IO.mkOutstream:VAL:SPEC">mkOutstream</A></CODE> should construct the output stream using the writer provided. If the user wishes to employ synthesized functions in the writer, the user may call <CODE><A HREF="stream-io.html#SIG:STREAM_IO.mkOutstream:VAL:SPEC">mkOutstream</A></CODE> with  an augmented writer <CODE><CODE><A HREF="prim-io.html#SIG:PRIM_IO.augmentWriter:VAL:SPEC">augmentWriter</A></CODE>(<VAR>wr</VAR>)</CODE>.  See <CODE><A HREF="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</A></CODE> for a description of the functions generated by <CODE><A HREF="prim-io.html#SIG:PRIM_IO.augmentWriter:VAL:SPEC">augmentWriter</A></CODE>.
<P>
Building more than one <CODE><A HREF="stream-io.html#SIG:STREAM_IO.outstream:TY:SPEC">outstream</A></CODE> on top of a single writer has unpredictable effects, since buffering may change the order of output. In general, there should be a 1-1 correspondence between a writer and an output stream. Also note that creating an output stream this way means that the stream could be unaware that the writer has been closed until the stream actually attempts to write to it. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.getWriter:VAL"></A>
<DT> <CODE>getWriter <VAR>f</VAR> </CODE>
<DD>
flushes the stream <VAR>f</VAR>, marks it as being terminated and returns the underlying writer and the stream's buffer mode.  This raises the exception <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> if <VAR>f</VAR> is closed, or if the flushing fails. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.getPosOut:VAL"></A>
<DT> <CODE>getPosOut <VAR>f</VAR>  </CODE>
<DD>
returns the current position of the stream <VAR>f</VAR>.  This raises the exception <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE>  if the stream does not support the operation, if any implicit flushing fails, or if <VAR>f</VAR> is terminated. 
<P>
     
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
A typical implementation of this function will require calculating a value of type <CODE><A HREF="stream-io.html#SIG:STREAM_IO.pos:TY:SPEC">pos</A></CODE>, capturing where the next element written to <VAR>f</VAR> will be written in the underlying file. If the <CODE><A HREF="stream-io.html#SIG:STREAM_IO.pos:TY:SPEC">pos</A></CODE> type is a concrete integer corresponding to a byte offset, and the translation function (between bytes and elements) is known, the value can be computed directly using <CODE>getPos</CODE>. If not, the value is given by 
<PRE>
fun pos (f, w as WR wtr) = let
      val getPos = valOf (#getPos wtr)
      in
        flushOut f;
        getPos ()
      end
</PRE>
 where <CODE>f</CODE> is the output stream and <CODE>w</CODE> is the stream's underlying writer. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.setPosOut:VAL"></A>
<DT> <CODE>setPosOut <VAR>opos</VAR>  </CODE>
<DD>
flushes the output buffer of the stream underlying <VAR>opos</VAR>,  sets the current position of the stream to the position recorded in <VAR>opos</VAR>, and returns the stream. This can raise an <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">Io</A></CODE> exception if the flushing fails, if the stream does not support the operation, or if the stream underlying <VAR>opos</VAR> is terminated. 
<BR>
<BR>

<DT> <A NAME="SIG:STREAM_IO.filePosOut:VAL"></A>
<DT> <CODE>filePosOut <VAR>opos</VAR>  </CODE>
<DD>
returns the primitive-level writer position that corresponds to the  abstract output stream position <VAR>opos</VAR>. 
<P>
    Suppose we are given an output stream <CODE>f</CODE> and a vector of elements <CODE>v</CODE>, and let <CODE>opos</CODE> equal <CODE>getPosOut(f)</CODE>. Then the code 
<PRE>
(setPos opos; writeVec{buf=v,i=0,sz=NONE})
</PRE>
 should have the same effect as the last line of the function 
<PRE>
fun put (outs,x) = (flushOut outs;
                    output(outs,x);flushOut outs)
</PRE>
 when called with <CODE>(f,v)</CODE> assuming all operations are defined and terminate, and that the call to <CODE>writeVec</CODE> returns <CODE>length v</CODE>. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="imperative-io.html#IMPERATIVE_IO:SIG:SPEC">IMPERATIVE_IO</A></CODE>, <CODE><A HREF="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</A></CODE>, <CODE><A HREF="stream-io-fn.html#StreamIO:FCT:SPEC">StreamIO</A></CODE>, <CODE><A HREF="text-stream-io.html#TEXT_STREAM_IO:SIG:SPEC">TEXT_STREAM_IO</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
The signature of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input1:VAL:SPEC">input1</A></CODE> is inconsistent with all of the other input functions. This is intentional: its type makes it a  <CODE>(char,instream) <CODE><A HREF="string-cvt.html#SIG:STRING_CVT.reader:TY:SPEC">StringCvt.reader</A></CODE></CODE> and thus a source of characters for the various scan functions.
<P>
Another point to notice about <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input1:VAL:SPEC">input1</A></CODE> is that it cannot be used to read beyond an end-of-stream. When an end-of-stream is encountered. the programmer will need to use one of the other input functions to obtain the stream after the end-of-stream. For example, if <CODE>input1(f)</CODE> returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>, a call to <CODE>inputN(f,1)</CODE> will return immediately with  <CODE>(fromList [], f')</CODE>, and <CODE>f'</CODE> can be used to continue input.
<P>
It is possible that a stream's underlying reader/writer, or its operating system file descriptor, could be closed while the stream is still active. When this condition is detected, typically by an exception being raised by the lower level, the stream should raise the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">IO.Io</A></CODE> exception with <CODE>cause</CODE> set to <CODE><A HREF="io.html#SIG:IO.ClosedStream:EXN:SPEC">IO.ClosedStream</A></CODE>. On a related point, one can close a truncated or terminated string. This is intended as a convenience, with the inactive stream providing a handle to the underlying file, but it also provides an opportunity to close a reader or writer being actively used by another stream.
<P>
Output flushing can occur by calls to any output operation, or by calls to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.flushOut:VAL:SPEC">flushOut</A></CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.closeOut:VAL:SPEC">closeOut</A></CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.getWriter:VAL:SPEC">getWriter</A></CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.setPosOut:VAL:SPEC">setPosOut</A></CODE>, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.getPosOut:VAL:SPEC">getPosOut</A></CODE>, or if <CODE><A HREF="stream-io.html#SIG:STREAM_IO.setBufferMode:VAL:SPEC">setBufferMode</A></CODE> is called with mode <CODE><A HREF="io.html#SIG:IO.buffer_mode:TY:SPEC">IO.NO_BUF</A></CODE>. If flushing finds that it can do only a partial write (<I>i.e.</I>, <CODE>writeVec</CODE> or a similar function returns a number of elements written less than its <VAR>sz</VAR> argument), then the stream function must adjust the stream's buffer for the items written and then try again. If the first or any successive write attempt raises an exception, then the stream function must raise the <CODE><A HREF="io.html#SIG:IO.Io:EXN:SPEC">IO.Io</A></CODE> exception.
<P>
For the remainder of this chapter, we shall assume the following binding: 
<PRE>
structure TS = TextIO.StreamIO
</PRE>
 and that <CODE>elem = char</CODE>. Also, the predicates used to illustrate a point should all evaluate to true, assuming they complete without exception.
<P>
Input is semi-deterministic: <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> may read any number of elements from <VAR>f</VAR> the ``first'' time, but then it is committed to its choice, and must return the same number of elements on subsequent reads from the same point: 
<PRE>
fun chkInput f= let 
      val (a,_) = TS.input f
      val (b,_) = TS.input f
      in a=b end
</PRE>
 always returns true. In general, any expression involving input streams and functions defined in the <CODE><A HREF="stream-io.html#STREAM_IO:SIG:SPEC">STREAM_IO</A></CODE> signature should always evaluate to the same value, barring exceptions.
<P>
Closing or truncating a stream just causes the not-yet-determined part of the stream to be empty: 
<PRE>
fun chkClose f = let 
      val (a,f') = TS.input f
      val _ = TS.closeIn f
      val (b,_) = TS.input f
      in  a=b andalso TS.endOfStream f' end
</PRE>
<P>
Closing a closed stream is legal and harmless: 
<PRE>
fun closeTwice f = (TS.closeIn f; TS.closeIn f; true)
</PRE>
<P>
If a stream has already been at least partly determined, then <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> cannot possibly block: 
<PRE>
fun noBlock f = let 
      val (s,_) = TS.input f
      in 
        case TS.canInput (f, 1) of
          SOME 0 =&gt; (size s) = 0
        | SOME _ =&gt; (size s) &gt; 0
        | NONE =&gt; false
      end
</PRE>
 Note that a successful <CODE><A HREF="stream-io.html#SIG:STREAM_IO.canInput:VAL:SPEC">canInput</A></CODE> does not imply that more characters remain before end-of-stream, just that reading will not block. 
<P>
A freshly opened stream is still undetermined (no ``read'' has yet been done on the underlying reader): 
<PRE>
fun newStr rdr = let 
      val a = TS.mkInstream (rdr, &quot;&quot;)
      in 
        TS.closeIn a;
        size(#1(TS.input a)) = 0
      end
</PRE>
 This has the useful consequence that if one opens a stream, then extracts the underlying reader, the reader has not yet been advanced in its file.
<P>
A generalization of this property says that the first time any stream value is produced, it is up-to-date with respect to its reader: 
<PRE>
fun nreads(f,0) = f 
  | nreads(f,n) = let 
      val (_,f') = TS.input f
      in 
        nreads(f',n-1)
      end
fun reads (rdr, n) = let (* for any n&gt;=0 *)
      val f = nreads(TS.mkInstream (rdr, &quot;&quot;),n)
      in 
        TS.closeIn f;
        size(#1(TS.input f)) = 0
      end
</PRE>
<P>
The sequence of strings returned from a fresh stream by <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> is exactly the sequence returned by the underlying reader.  This includes end-of-stream conditions, which the reader indicates by returning a zero-element vector and <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> indicates in the same way.
<P>
The <CODE><A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A></CODE> test is equivalent to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> returning an empty sequence: 
<PRE>
fun isEOS f = let 
      val (a,_) = TS.input f  
      in 
        ((size a)=0) = (TS.endOfStream f)   
      end
</PRE>
<P>
The semantics of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputAll:VAL:SPEC">inputAll</A></CODE> can be defined in terms of  <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE>: 
<PRE>
fun inputAll f  =
      case TS.input f of
        (&quot;&quot;,f') =&gt; (&quot;&quot;,f')
      | (s,f') =&gt; let
          val (rest,f'') = inputAll f'
          in
            (s ^ rest, f'')
          end
</PRE>
 An actual implementation, however, is likely to be much more efficient; for example, on a large file, <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputAll:VAL:SPEC">inputAll</A></CODE> might read the whole file in a single system call or use memory mapping. Note that if a stream <CODE>f</CODE> contains data <CODE>&quot;abc&quot;</CODE> followed by an end-of-stream followed by <CODE>&quot;defg&quot;</CODE> and another end-of-stream, then  <CODE>inputAll f</CODE> returns <CODE>(&quot;abc&quot;,f')</CODE>, and <CODE>inputAll f'</CODE> returns <CODE>(&quot;defg&quot;,f'')</CODE>.
<P>
The semantics of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE> can be related to  <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputAll:VAL:SPEC">inputAll</A></CODE> by the following predicate: 
<PRE>
fun allAndN (f,n) = let
      val (s,f1) = TS.inputN(f,n)
      val (t,f2)= TS.inputAll f
      in 
        size s &lt; n andalso s=t andalso equiv(f1,f2)
        orelse let 
          val (r,f3) = TS.inputAll f1
          in 
            size s = n andalso t = s ^ r andalso equiv(f2,f3)
          end
      end
</PRE>
 where the <CODE>equiv</CODE> predicate represents that the two argument streams behave identically under <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE>: 
<PRE>
fun equiv (f,g) = let
      val (s,f') = TS.input f 
      val (t,g') = TS.input g
      in 
        s=t andalso equiv(f',g')
      end
</PRE>
 ignoring termination conditions. If <CODE>f</CODE> contained exactly <CODE>n</CODE> characters before the end-of-stream, then <CODE>r</CODE> in <CODE>allAndN</CODE>  will be the empty string. Another way of saying this is that <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE> returns fewer than <CODE>n</CODE> characters if and only if those elements are followed by an end-of-stream.
<P>
The semantics of <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input1:VAL:SPEC">input1</A></CODE> can be defined in terms of  <CODE><A HREF="stream-io.html#SIG:STREAM_IO.inputN:VAL:SPEC">inputN</A></CODE>: 
<PRE>
fun input1 f =
      case TS.inputN (f,1) of 
        (&quot;&quot;,_) =&gt; NONE
      | (s,f')=&gt; SOME(String.sub(s,0),f')
</PRE>
<P>
If <CODE>chunkSize</CODE> = 1 in the underlying  <CODE><A HREF="prim-io.html#SIG:PRIM_IO.reader:TY:SPEC">reader</A></CODE>, then input operations should be unbuffered. Thus, the following function always returns true: 
<PRE>
fun isTrue (rdr : TextPrimIO.reader) = let
      val f = TS.mkInstream(rdr, &quot;&quot;)
      val (_,f') = TS.input f
      val (TextPrimIO.RD{chunkSize,...},s) = TS.getReader f'
      in
        (chunkSize &gt; 1) orelse (size s = 0)
      end
</PRE>
 where <CODE>rdr</CODE> denotes a <CODE><A HREF="prim-io.html#SIG:PRIM_IO.reader:TY:SPEC">reader</A></CODE> created from a newly opened file. Although <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE> may perform a Primitive I/O read operation on the reader for <CODE>k</CODE> &gt;= 1 elements, it must immediately return all the elements it receives. This does not hold, however, for partly determined input streams. For example, the function 
<PRE>
fun maybeTrue (rdr : TextPrimIO.reader) = let
      val f = TS.mkInstream(rdr, &quot;&quot;)
      val _ = TS.input (#2 (TS.input f))
      val (_,f') = TS.input f
      val (TextPrimIO.RD{chunkSize,...},s) = TS.getReader f'
      in
        (chunkSize &gt; 1) orelse (size s = 0)
      end
</PRE>
 might return false. In this case, the stream <CODE>f</CODE> has accumulated a history of more input, which will not be emptied by a single call to  <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE>.
<P>
Similarly, if a writer sets <CODE>chunkSize</CODE> = 1, it suggests that output operations should be unbuffered. An application can specify that a stream should be unbuffered using the <CODE><A HREF="stream-io.html#SIG:STREAM_IO.setBufferMode:VAL:SPEC">setBufferMode</A></CODE> function. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
A general rule for implementing stream input is: ``<I>do not bother the reader.''</I> Whenever it is possible to do so, input must be done by using elements from the buffer, without any operation on the underlying reader. This is necessary so that repeated calls to <CODE><A HREF="stream-io.html#SIG:STREAM_IO.endOfStream:VAL:SPEC">endOfStream</A></CODE> will not make repeated system calls.
<P>
Implementations may require a device such as an extra boolean to mark multiple end-of-streams, in order that <CODE><A HREF="stream-io.html#SIG:STREAM_IO.input:VAL:SPEC">input</A></CODE>  applied to the same stream always returns the same vector.
<P>
The manual page of the <CODE><A HREF="stream-io-fn.html#StreamIO:FCT:SPEC">StreamIO</A></CODE> functor lists a variety of implementation suggestions, many of which are applicable to any implementation of the <CODE><A HREF="stream-io.html#STREAM_IO:SIG:SPEC">STREAM_IO</A></CODE> signature.
<P>
In general, if an exception occurs during any Stream I/O operation, then the stream must leave itself in a consistent state, without losing or duplicating data. In some SML systems, a user interrupt aborts execution and returns control to a top-level prompt, without raising any exception that the current execution can handle.  It may be the case that some information must be lost or duplicated.  Data (input or output) must <I>never</I> be duplicated, but may be lost.  This can be accomplished without Stream I/O doing any explicit masking of interrupts or locking.  On output, the internal state (saying how much has been written) should be updated <I>before</I> doing the <I>write</I> operation; on input, the <I>read</I> should be done before updating the count of valid characters in the buffer. 
</BLOCKQUOTE>

`

var streamIOFunctor = `


<H2><A NAME="section:0"></A>The <CODE>StreamIO</CODE> functor</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>functor</B>&nbsp;<A NAME="StreamIO:FCT:SPEC"></A><CODE>StreamIO</CODE><B> (</B> ... <B>)</B><B> : </B>STREAM_IO&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
The optional <CODE>StreamIO</CODE> functor provides a way to build a Stream I/O layer on top of an arbitrary Primitive I/O implementation. For example, given an implementation of readers and writers for pairs of integers, one can define streams of pairs of integers. 
<HR>
<H4>Functor argument interface</H4>
<BLOCKQUOTE>
<CODE><B>structure</B>&nbsp;PrimIO&nbsp;<B>:</B>&nbsp;<A HREF="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</A><BR>
<B>structure</B>&nbsp;Vector&nbsp;<B>:</B>&nbsp;<A HREF="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</A><BR>
<B>structure</B>&nbsp;Array&nbsp;<B>:</B>&nbsp;<A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A><BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;PrimIO.elem&nbsp;=&nbsp;Vector.elem&nbsp;=&nbsp;Array.elem<BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;PrimIO.vector&nbsp;=&nbsp;Vector.vector&nbsp;=&nbsp;Array.vector<BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;PrimIO.array&nbsp;=&nbsp;Array.array<BR>
<B>val</B>&nbsp;<A NAME="ARG:StreamIO.someElem:VAL:SPEC" HREF="#ARG:StreamIO.someElem:VAL">someElem</A>&nbsp;<B>:</B>&nbsp;PrimIO.elem</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="ARG:StreamIO.PrimIO:STR"></A><CODE><B>structure</B>&nbsp;PrimIO&nbsp;<B>:</B>&nbsp;<A HREF="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</A></CODE>
<DD>
 The underlying primitive I/O structure. 
<BR>
<BR>

<DT> <A NAME="ARG:StreamIO.someElem:VAL"></A><CODE><B>val</B>&nbsp;someElem&nbsp;<B>:</B>&nbsp;PrimIO.elem</CODE>
<DD>
 Some arbitrary element used to initialize buffer arrays. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="imperative-io-fn.html#ImperativeIO:FCT:SPEC">ImperativeIO</A></CODE>, <CODE><A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A></CODE>, <CODE><A HREF="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</A></CODE>, <CODE><A HREF="prim-io-fn.html#PrimIO:FCT:SPEC">PrimIO</A></CODE>, <CODE><A HREF="prim-io.html#PRIM_IO:SIG:SPEC">PRIM_IO</A></CODE>, <CODE><A HREF="stream-io.html#STREAM_IO:SIG:SPEC">STREAM_IO</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
The <CODE>Vector</CODE> and <CODE>Array</CODE> structures provide vector and array operations for manipulating the vectors and arrays used in <CODE>PrimIO</CODE> and <CODE>StreamIO</CODE>. The element <VAR>someElem</VAR> is used to initialize buffer arrays; any element will do.
<P>
The types <CODE>instream</CODE> and <CODE>outstream</CODE> in the result of the <CODE><A HREF="stream-io-fn.html#StreamIO:FCT:SPEC">StreamIO</A></CODE> functor must be abstract. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
Here are some suggestions for efficient performance:  
<UL>
<LI>
Operations on the underlying readers and writers (<CODE>readVec</CODE>, etc.) are expected to be expensive (involving a system call, with context switch). 
<LI>
Small input operations can be done from a buffer; the <CODE>readVec</CODE> or <CODE>readVecNB</CODE> operation of the underlying reader can replenish the buffer when necessary. 
<LI>
Each reader may provide only a subset of <CODE>readVec</CODE>, <CODE>readVecNB</CODE>, <CODE>block</CODE>, <CODE>canInput</CODE>, etc.  An augmented reader that provides more operations can be constructed using <CODE>PrimIO.augmentReader</CODE>, but it may be more efficient to use the functions directly provided by the reader, instead of relying on the constructed ones.  The same applies to augmented writers. 
<LI>
Keep the position of the beginning of the buffer on a multiple-of-<CODE>chunkSize</CODE> boundary, and do <B>read</B> or  <B>write</B> operations with a multiple-of-<CODE>chunkSize</CODE> number of elements. 
<LI>
For very large <CODE>inputAll</CODE> or <CODE>inputN</CODE> operations, it is (somewhat) inefficient to read one <CODE>chunkSize</CODE> at a time and then concatenate all the results together. Instead, it is good to try to do the read all in one large system call; that is, <CODE>readVec(<VAR>n</VAR>)</CODE>. In a typical implementation of <CODE>readVec</CODE>, this requires pre-allocating a vector of size <VAR>n</VAR>. In <CODE>inputAll</CODE>, however, the size of the vector is not known <I>a priori</I> and if the argument to <CODE>inputN</CODE> is large, the allocation of a much-too-large buffer is wasteful.  Therefore, for large input operations, query the remaining size of the reader using <CODE>avail</CODE>, and try to read that much. But one should also keep things rounded to the nearest <CODE>chunkSize</CODE>. 
<LI>
The use of <CODE>avail</CODE> to try to do (large) read operations of just the right size will be inaccurate on translated readers. But this inaccuracy can be tolerated: if the translation is anything close to 1-1,  <CODE>avail</CODE> will still provide a very good hint about the order-of-magnitude size of what remains to be read. 
<LI>
Similar suggestions apply to very large output operations. Small outputs go through a buffer; the buffer is written with <CODE>writeArr</CODE>. Very large outputs can be written directly from the argument string using <CODE>writeVec</CODE>. 
<LI>
A lazy functional input stream can (should) be implemented as a sequence of immutable (vector) buffers, each with a mutable <CODE><B>ref</B></CODE> to the next ``thing,'' which is either another buffer, the underlying reader, or an indication that the stream has been truncated. 
<LI>
The <CODE>input</CODE> function should return the largest sequence that is most convenient. Usually this means ``the remaining contents of the current buffer.'' 
<LI>
To support non-blocking input, use <CODE>readVecNB</CODE> if it exists, otherwise do <CODE>canInput</CODE> followed (if appropriate) by <CODE>readVec</CODE>. 
<LI>
To support blocking input, use <CODE>readVec</CODE> if it exists, otherwise do <CODE>readVecNB</CODE> followed (if it would block) by <CODE>block</CODE>. and then another <CODE>readVecNB</CODE>. 
<LI>
To support lazy functional streams, <CODE>readArr</CODE> and <CODE>readArrNB</CODE> are not useful. If necessary, <CODE>readVec</CODE> should be synthesized from <CODE>readArr</CODE> and <CODE>readVecNB</CODE> from <CODE>readArrNB</CODE>. 
<LI>
<CODE>writeArr</CODE> should, if necessary, be synthesized from <CODE>writeVec</CODE> and vice versa.  Similarly for <CODE>writeArrNB</CODE> and <CODE>writeVecNB</CODE>. 
</UL>
</BLOCKQUOTE>

`
