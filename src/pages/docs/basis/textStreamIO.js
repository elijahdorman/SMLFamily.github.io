var data = `


<H2><A NAME="section:0"></A>The <CODE>TEXT_STREAM_IO</CODE> signature</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="TEXT_STREAM_IO:SIG:SPEC"></A><CODE>TEXT_STREAM_IO</CODE><BR>
</CODE>
</BLOCKQUOTE>
<P>
The signature <CODE>TEXT_STREAM_IO</CODE> extends the <CODE>STREAM_IO</CODE> signature to accommodate text I/O. In particular, it binds the I/O element to <CODE><A HREF="char.html#SIG:CHAR.char:TY:SPEC">Char.char</A></CODE>, and provides several text-based I/O operations. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>include</B>&nbsp;<A HREF="stream-io.html#STREAM_IO:SIG:SPEC">STREAM_IO</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;CharVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;Char.char<BR>
<B>val</B>&nbsp;<A NAME="SIG:TEXT_STREAM_IO.inputLine:VAL:SPEC" HREF="#SIG:TEXT_STREAM_IO.inputLine:VAL">inputLine</A>&nbsp;<B>:</B>&nbsp;instream&nbsp;<B>-&gt;</B>&nbsp;(string&nbsp;<B>*</B>&nbsp;instream)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:TEXT_STREAM_IO.outputSubstr:VAL:SPEC" HREF="#SIG:TEXT_STREAM_IO.outputSubstr:VAL">outputSubstr</A>&nbsp;<B>:</B>&nbsp;outstream&nbsp;<B>*</B>&nbsp;substring&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:TEXT_STREAM_IO.inputLine:VAL"></A>
<DT> <CODE>inputLine <VAR>strm</VAR>  </CODE>
<DD>
returns  <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>ln</VAR>, <VAR>strm'</VAR>)</CODE>,  where <VAR>ln</VAR> is the next line of input in the stream  <VAR>strm</VAR> and <VAR>strm'</VAR> is the residual stream.  Specifically, <VAR>ln</VAR> returns all characters from the current position up to and including the next newline (<CODE>#&quot;\n&quot;</CODE>) character.  If it detects an end-of-stream before the next newline, it returns the characters read appended with a newline.  Thus, <VAR>ln</VAR> is guaranteed to always be new-line  terminated (and thus nonempty).  If the current stream position is the end-of-stream, then  it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. It raises <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> if the length of the line exceeds the length of the longest string. 
<BR>
<BR>

<DT> <A NAME="SIG:TEXT_STREAM_IO.outputSubstr:VAL"></A>
<DT> <CODE>outputSubstr (<VAR>strm</VAR>, <VAR>ss</VAR>) </CODE>
<DD>
outputs the substring <VAR>ss</VAR> to the text stream <VAR>strm</VAR>. This is equivalent to: 
<PRE>
output (<VAR>strm</VAR>, <A HREF="substring.html#SIG:SUBSTRING.string:VAL:SPEC">Substring.string</A> <VAR>ss</VAR>)
</PRE>
 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="bin-io.html#BinIO:STR:SPEC">BinIO</A></CODE>, <CODE><A HREF="imperative-io.html#IMPERATIVE_IO:SIG:SPEC">IMPERATIVE_IO</A></CODE>, <CODE><A HREF="os.html#SIG:OS.Path:STR:SPEC">OS.Path</A></CODE>
</BLOCKQUOTE>



`
