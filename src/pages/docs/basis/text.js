var data = `

<H2><A NAME="section:0"></A>The <CODE>TEXT</CODE> signature</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="TEXT:SIG:SPEC"></A><CODE>TEXT</CODE><BR>
<B>structure</B>&nbsp;<A NAME="Text:STR:SPEC"></A><CODE>Text</CODE><B> :> </B>TEXT<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;Char.char&nbsp;=&nbsp;<A HREF="char.html#SIG:CHAR.char:TY:SPEC">Char.char</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;String.string&nbsp;=&nbsp;<A HREF="string.html#SIG:STRING.string:TY:SPEC">String.string</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;Substring.substring&nbsp;=&nbsp;<A HREF="substring.html#SIG:SUBSTRING.substring:TY:SPEC">Substring.substring</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharVector.vector&nbsp;=&nbsp;<A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">CharVector.vector</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharArray.array&nbsp;=&nbsp;<A HREF="mono-array.html#SIG:MONO_ARRAY.array:TY:SPEC">CharArray.array</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharVectorSlice.slice&nbsp;=&nbsp;<A HREF="mono-vector-slice.html#SIG:MONO_VECTOR_SLICE.slice:TY:SPEC">CharVectorSlice.slice</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharArraySlice.slice&nbsp;=&nbsp;<A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.slice:TY:SPEC">CharArraySlice.slice</A><BR>
<B>structure</B>&nbsp;<A NAME="WideText:STR:SPEC"></A><CODE>WideText</CODE><B> :> </B>TEXT&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;Char.char&nbsp;=&nbsp;<A HREF="char.html#SIG:CHAR.char:TY:SPEC">WideChar.char</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;String.string&nbsp;=&nbsp;<A HREF="string.html#SIG:STRING.string:TY:SPEC">WideString.string</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;Substring.substring&nbsp;=&nbsp;<A HREF="substring.html#SIG:SUBSTRING.substring:TY:SPEC">WideSubstring.substring</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharVector.vector&nbsp;=&nbsp;<A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">WideCharVector.vector</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharArray.array&nbsp;=&nbsp;<A HREF="mono-array.html#SIG:MONO_ARRAY.array:TY:SPEC">WideCharArray.array</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharVectorSlice.slice&nbsp;=&nbsp;<A HREF="mono-vector-slice.html#SIG:MONO_VECTOR_SLICE.slice:TY:SPEC">WideCharVectorSlice.slice</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;CharArraySlice.slice&nbsp;=&nbsp;<A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.slice:TY:SPEC">WideCharArraySlice.slice</A><BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>TEXT</CODE> signature collects together various text related structures based on the representation of the shared character type.
<P>
The <CODE><A HREF="text.html#TEXT:SIG:SPEC">TEXT</A></CODE> signature is matched by two structures, the required <CODE><A HREF="text.html#Text:STR:SPEC">Text</A></CODE> and the optional <CODE><A HREF="text.html#WideText:STR:SPEC">WideText</A></CODE>. The former implements strings based on the extended ASCII 8-bit characters. The latter provides strings of characters of some size greater than or equal to 8 bits. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>structure</B>&nbsp;Char&nbsp;<B>:</B>&nbsp;<A HREF="char.html#CHAR:SIG:SPEC">CHAR</A><BR>
<B>structure</B>&nbsp;String&nbsp;<B>:</B>&nbsp;<A HREF="string.html#STRING:SIG:SPEC">STRING</A><BR>
<B>structure</B>&nbsp;Substring&nbsp;<B>:</B>&nbsp;<A HREF="substring.html#SUBSTRING:SIG:SPEC">SUBSTRING</A><BR>
<B>structure</B>&nbsp;CharVector&nbsp;<B>:</B>&nbsp;<A HREF="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</A><BR>
<B>structure</B>&nbsp;CharArray&nbsp;<B>:</B>&nbsp;<A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A><BR>
<B>structure</B>&nbsp;CharVectorSlice&nbsp;<B>:</B>&nbsp;<A HREF="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">MONO_VECTOR_SLICE</A><BR>
<B>structure</B>&nbsp;CharArraySlice&nbsp;<B>:</B>&nbsp;<A HREF="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">MONO_ARRAY_SLICE</A><BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;Char.char&nbsp;=&nbsp;String.char&nbsp;=&nbsp;Substring.char<BR>
&nbsp;&nbsp;=&nbsp;CharVector.elem&nbsp;=&nbsp;CharArray.elem&nbsp;=&nbsp;CharVectorSlice.elem<BR>
&nbsp;&nbsp;=&nbsp;CharArraySlice.elem<BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;Char.string&nbsp;=&nbsp;String.string&nbsp;=&nbsp;Substring.string<BR>
&nbsp;&nbsp;=&nbsp;CharVector.vector&nbsp;=&nbsp;CharArray.vector<BR>
&nbsp;&nbsp;=&nbsp;CharVectorSlice.vector&nbsp;=&nbsp;CharArraySlice.vector<BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;CharArray.array&nbsp;=&nbsp;CharArraySlice.array<BR>
<B>sharing</B>&nbsp;<B>type</B>&nbsp;CharVectorSlice.slice<BR>
&nbsp;&nbsp;=&nbsp;CharArraySlice.vector_slice</CODE>
</BLOCKQUOTE>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="char.html#CHAR:SIG:SPEC">CHAR</A></CODE>, <CODE><A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A></CODE>, <CODE><A HREF="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</A></CODE>, <CODE><A HREF="string.html#STRING:SIG:SPEC">STRING</A></CODE>, <CODE><A HREF="substring.html#SUBSTRING:SIG:SPEC">SUBSTRING</A></CODE>
</BLOCKQUOTE>


`
