var data = `

<H2><A NAME="section:0"></A>The <CODE>Byte</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="BYTE:SIG:SPEC"></A><CODE>BYTE</CODE><BR>
<B>structure</B>&nbsp;<A NAME="Byte:STR:SPEC"></A><CODE>Byte</CODE><B> :> </B>BYTE<BR>
</CODE>
</BLOCKQUOTE>
<P>
 Bytes are 8-bit integers as provided by the <CODE><A HREF="word.html#Word8:STR:SPEC">Word8</A></CODE> structure, but serve the dual role as elements composing the extended ASCII character set. The <CODE>Byte</CODE> structure provides functions for converting values between these two roles. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>val</B>&nbsp;<A NAME="SIG:BYTE.byteToChar:VAL:SPEC" HREF="#SIG:BYTE.byteToChar:VAL">byteToChar</A>&nbsp;<B>:</B>&nbsp;Word8.word&nbsp;<B>-&gt;</B>&nbsp;char<BR>
<B>val</B>&nbsp;<A NAME="SIG:BYTE.charToByte:VAL:SPEC" HREF="#SIG:BYTE.charToByte:VAL">charToByte</A>&nbsp;<B>:</B>&nbsp;char&nbsp;<B>-&gt;</B>&nbsp;Word8.word<BR>
<B>val</B>&nbsp;<A NAME="SIG:BYTE.bytesToString:VAL:SPEC" HREF="#SIG:BYTE.bytesToString:VAL">bytesToString</A>&nbsp;<B>:</B>&nbsp;Word8Vector.vector&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:BYTE.stringToBytes:VAL:SPEC" HREF="#SIG:BYTE.stringToBytes:VAL">stringToBytes</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:BYTE.unpackStringVec:VAL:SPEC" HREF="#SIG:BYTE.unpackStringVec:VAL">unpackStringVec</A>&nbsp;<B>:</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:BYTE.unpackString:VAL:SPEC" HREF="#SIG:BYTE.unpackString:VAL">unpackString</A>&nbsp;<B>:</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:BYTE.packString:VAL:SPEC" HREF="#SIG:BYTE.packString:VAL">packString</A>&nbsp;<B>:</B>&nbsp;Word8Array.array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;substring&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:BYTE.byteToChar:VAL"></A>
<DT> <CODE>byteToChar <VAR>i</VAR> </CODE>
<DD>
returns the character whose code is <VAR>i</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:BYTE.charToByte:VAL"></A>
<DT> <CODE>charToByte <VAR>c</VAR> </CODE>
<DD>
returns an 8-bit word holding the code for the   character <VAR>c</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:BYTE.bytesToString:VAL"></A><CODE><B>val</B>&nbsp;bytesToString&nbsp;<B>:</B>&nbsp;Word8Vector.vector&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;stringToBytes&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector</CODE>
<DD>
          These functions convert between a vector of character codes and the corresponding string.  Note that these functions do not perform end-of-line, or other  character, translations.  The semantics of these functions can be defined as follows,  although one expects actual implementations will be more  efficient:  
<PRE>
	    fun bytesToString bv =
		  CharVector.tabulate(
        	    Word8Vector.length bv,
        	    fn i =&gt; byteToChar(Word8Vector.sub(bv, i)))
	    fun stringToBytes s =
		  Word8Vector.tabulate(
        	    String.size s,
        	    fn i =&gt; charToByte(String.sub(s, i)))
	  
</PRE>
 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
For implementations where the underlying representation of  the <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">Word8Vector.vector</A></CODE> and  <CODE><A HREF="string.html#SIG:STRING.string:TY:SPEC">string</A></CODE> types are the same, these  functions should be constant-time operations. 
</BLOCKQUOTE>
  
<BR>
<BR>

<DT> <A NAME="SIG:BYTE.unpackStringVec:VAL"></A>
<DT> <CODE>unpackStringVec <VAR>slice</VAR> </CODE>
<DD>
returns the string consisting of characters whose codes are held  in the vector slice <VAR>slice</VAR>.  
<BR>
<BR>

<DT> <A NAME="SIG:BYTE.unpackString:VAL"></A><CODE><B>val</B>&nbsp;unpackString&nbsp;<B>:</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
 returns the string consisting of characters whose codes are held  in the array slice <VAR>slice</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:BYTE.packString:VAL"></A>
<DT> <CODE>packString (<VAR>arr</VAR>, <VAR>i</VAR>, <VAR>s</VAR>) </CODE>
<DD>
puts the substring <VAR>s</VAR> into the array <VAR>arr</VAR> starting at  offset <VAR>i</VAR>. It raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if  <VAR>i</VAR> &lt; 0 or  <CODE>size</CODE> <VAR>s</VAR> + <VAR>i</VAR> &gt; |<VAR>arr</VAR>|. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="char.html#Char:STR:SPEC">Char</A></CODE>, <CODE><A HREF="string.html#String:STR:SPEC">String</A></CODE>, <CODE><A HREF="substring.html#Substring:STR:SPEC">Substring</A></CODE>, <CODE><A HREF="word.html#WORD:SIG:SPEC">WORD</A></CODE>, <CODE><A HREF="word.html#Word8:STR:SPEC">Word8</A></CODE>, <CODE><A HREF="mono-vector.html#Word8Vector:STR:SPEC">Word8Vector</A></CODE>, <CODE><A HREF="mono-vector-slice.html#Word8VectorSlice:STR:SPEC">Word8VectorSlice</A></CODE>, <CODE><A HREF="mono-array.html#Word8Array:STR:SPEC">Word8Array</A></CODE>, <CODE><A HREF="mono-array-slice.html#Word8ArraySlice:STR:SPEC">Word8ArraySlice</A></CODE>
</BLOCKQUOTE>

`
