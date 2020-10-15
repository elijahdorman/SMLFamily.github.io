var data = `
<H2><A NAME="section:0"></A>The <CODE>Bool</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="BOOL:SIG:SPEC"></A><CODE>BOOL</CODE><BR>
<B>structure</B>&nbsp;<A NAME="Bool:STR:SPEC"></A><CODE>Bool</CODE><B> :> </B>BOOL<BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>Bool</CODE> structure provides some basic operations on boolean values. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>datatype</B>&nbsp;<A NAME="SIG:BOOL.bool:TY:SPEC" HREF="#SIG:BOOL.bool:TY">bool</A>&nbsp;=&nbsp;<A NAME="SIG:BOOL.false:TY:SPEC" HREF="#SIG:BOOL.false:TY">false</A>&nbsp;|&nbsp;<A NAME="SIG:BOOL.true:TY:SPEC" HREF="#SIG:BOOL.true:TY">true</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:BOOL.not:VAL:SPEC" HREF="#SIG:BOOL.not:VAL">not</A>&nbsp;<B>:</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:BOOL.toString:VAL:SPEC" HREF="#SIG:BOOL.toString:VAL">toString</A>&nbsp;<B>:</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:BOOL.scan:VAL:SPEC" HREF="#SIG:BOOL.scan:VAL">scan</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;(char,&nbsp;<I>'a</I>)&nbsp;<A HREF="string-cvt.html#SIG:STRING_CVT.reader:TY:SPEC">StringCvt.reader</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(bool,&nbsp;<I>'a</I>)&nbsp;<A HREF="string-cvt.html#SIG:STRING_CVT.reader:TY:SPEC">StringCvt.reader</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:BOOL.fromString:VAL:SPEC" HREF="#SIG:BOOL.fromString:VAL">fromString</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;bool&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:BOOL.not:VAL"></A>
<DT> <CODE>not <VAR>b</VAR> </CODE>
<DD>
returns the logical negation of the boolean value <VAR>b</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:BOOL.toString:VAL"></A>
<DT> <CODE>toString <VAR>b</VAR> </CODE>
<DD>
returns the string representation of <VAR>b</VAR>, either <CODE>&quot;true&quot;</CODE> or <CODE>&quot;false&quot;</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:BOOL.scan:VAL"></A>
<DT> <CODE>scan <VAR>getc</VAR> <VAR>strm</VAR> </CODE>
<DT> <CODE> fromString <VAR>s</VAR> </CODE>
<DD>
These scan a character source for a boolean value. The first takes a character stream reader <VAR>getc</VAR> and a stream <VAR>strm</VAR>. Ignoring case and initial whitespace, the sequences <CODE>&quot;true&quot;</CODE> and <CODE>&quot;false&quot;</CODE> are converted to the corresponding boolean values. On successful scanning of a boolean value, <CODE><A HREF="bool.html#SIG:BOOL.scan:VAL:SPEC">scan</A></CODE> returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>b</VAR>, <VAR>rest</VAR>)</CODE>, where <VAR>b</VAR> is the scanned value and <VAR>rest</VAR> is the remaining character stream. 
<P>
      The second form scans a boolean from a string <VAR>s</VAR>. It returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>b</VAR>)</CODE> for a scanned value <VAR>b</VAR>; otherwise it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. The function <CODE>fromString</CODE> is equivalent to <CODE><CODE><A HREF="string-cvt.html#SIG:STRING_CVT.scanString:VAL:SPEC">StringCvt.scanString</A></CODE> scan</CODE>.
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="string-cvt.html#StringCvt:STR:SPEC">StringCvt</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
The <CODE><A HREF="">bool</A></CODE> type is considered primitive and is defined in the top-level environment. It is rebound here for consistency.
<P>
In addition to the <CODE><A HREF="bool.html#SIG:BOOL.not:VAL:SPEC">not</A></CODE> function presented here, the language defines the special operators <CODE><B>andalso</B></CODE> and <CODE><B>orelse</B></CODE>, which provide short-circuit evaluation of the AND and OR of two boolean expressions. The semantics of strict AND and OR operators, which would evaluate both expressions before applying the operator, are rarely needed and can easily be obtained using the <CODE><B>andalso</B></CODE> and <CODE><B>orelse</B></CODE> operators.
`
