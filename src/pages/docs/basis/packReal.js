var data = `


<H2><A NAME="section:0"></A>The <CODE>PACK_REAL</CODE> signature</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="PACK_REAL:SIG:SPEC"></A><CODE>PACK_REAL</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="PackRealBig:STR:SPEC"></A><CODE>PackRealBig</CODE><B> :> </B>PACK_REAL&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;real&nbsp;=&nbsp;Real.real<BR>
<B>structure</B>&nbsp;<A NAME="PackRealLittle:STR:SPEC"></A><CODE>PackRealLittle</CODE><B> :> </B>PACK_REAL&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;real&nbsp;=&nbsp;Real.real<BR>
<B>structure</B>&nbsp;<A NAME="PackReal{N}Big:STR:SPEC"></A><CODE>PackReal<I>&lt;N&gt;</I>Big</CODE><B> :> </B>PACK_REAL&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;real&nbsp;=&nbsp;<A HREF="real.html#SIG:REAL.real:TY:SPEC">Real{N}.real</A><BR>
<B>structure</B>&nbsp;<A NAME="PackReal{N}Little:STR:SPEC"></A><CODE>PackReal<I>&lt;N&gt;</I>Little</CODE><B> :> </B>PACK_REAL&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;real&nbsp;=&nbsp;<A HREF="real.html#SIG:REAL.real:TY:SPEC">Real{N}.real</A><BR>
</CODE>
</BLOCKQUOTE>
<P>
 The <CODE>PACK_REAL</CODE> signature specifies the interface for packing and unpacking floating-point numbers into <CODE><A HREF="word.html#Word8:STR:SPEC">Word8</A></CODE> vectors and arrays. This provides a mechanism for transmitting floating-point values over a network.
<P>
For each optional <CODE>Real<I>&lt;N&gt;</I></CODE> structure provided by an implementation, the implementation may also provide a pair of structures <CODE>PackReal<I>&lt;N&gt;</I>Big</CODE> and <CODE>PackReal<I>&lt;N&gt;</I>Little</CODE>. These structures share the real type defined in <CODE>Real<I>&lt;N&gt;</I></CODE>. The <CODE>PackReal<I>&lt;N&gt;</I>Big</CODE> structures perform big-endian packing and unpacking, and the <CODE>PackReal<I>&lt;N&gt;</I>Little</CODE> structures perform little-endian packing and unpacking.
<P>
In addition, an implementation may provide the structures <CODE>PackRealBig</CODE> and <CODE>PackRealLittle</CODE>, which are aliases for the <CODE>PACK_REAL</CODE> structures related to the default <CODE><A HREF="real.html#Real:STR:SPEC">Real</A></CODE> structure. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;<A NAME="SIG:PACK_REAL.real:TY:SPEC" HREF="#SIG:PACK_REAL.real:TY">real</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.bytesPerElem:VAL:SPEC" HREF="#SIG:PACK_REAL.bytesPerElem:VAL">bytesPerElem</A>&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.isBigEndian:VAL:SPEC" HREF="#SIG:PACK_REAL.isBigEndian:VAL">isBigEndian</A>&nbsp;<B>:</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.toBytes:VAL:SPEC" HREF="#SIG:PACK_REAL.toBytes:VAL">toBytes</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.fromBytes:VAL:SPEC" HREF="#SIG:PACK_REAL.fromBytes:VAL">fromBytes</A>&nbsp;<B>:</B>&nbsp;Word8Vector.vector&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.subVec:VAL:SPEC" HREF="#SIG:PACK_REAL.subVec:VAL">subVec</A>&nbsp;<B>:</B>&nbsp;Word8Vector.vector&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.subArr:VAL:SPEC" HREF="#SIG:PACK_REAL.subArr:VAL">subArr</A>&nbsp;<B>:</B>&nbsp;Word8Array.array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:PACK_REAL.update:VAL:SPEC" HREF="#SIG:PACK_REAL.update:VAL">update</A>&nbsp;<B>:</B>&nbsp;Word8Array.array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:PACK_REAL.bytesPerElem:VAL"></A><CODE><B>val</B>&nbsp;bytesPerElem&nbsp;<B>:</B>&nbsp;int</CODE>
<DD>
        The number of bytes per element, sufficient to store a value of type <CODE><A HREF="pack-float.html#SIG:PACK_REAL.real:TY:SPEC">real</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:PACK_REAL.isBigEndian:VAL"></A>
<DT> <CODE>isBigEndian </CODE>
<DD>
is <CODE>true</CODE> if the structure implements a big-endian view of the data. 
<BR>
<BR>

<DT> <A NAME="SIG:PACK_REAL.toBytes:VAL"></A><CODE><B>val</B>&nbsp;toBytes&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
<B>val</B>&nbsp;fromBytes&nbsp;<B>:</B>&nbsp;Word8Vector.vector&nbsp;<B>-&gt;</B>&nbsp;real</CODE>
<DD>
          These functions pack and unpack floating-point values into and out of <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">Word8Vector.vector</A></CODE> values. The function <CODE><A HREF="pack-float.html#SIG:PACK_REAL.fromBytes:VAL:SPEC">fromBytes</A></CODE> raises the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception if the argument vector does not have length at least <CODE><A HREF="pack-float.html#SIG:PACK_REAL.bytesPerElem:VAL:SPEC">bytesPerElem</A></CODE>; otherwise the first <CODE><A HREF="pack-float.html#SIG:PACK_REAL.bytesPerElem:VAL:SPEC">bytesPerElem</A></CODE> bytes are used. 
<BR>
<BR>

<DT> <A NAME="SIG:PACK_REAL.subVec:VAL"></A>
<DT> <CODE>subVec (<VAR>seq</VAR>, <VAR>i</VAR>) </CODE>
<DT> <CODE>          subArr (<VAR>seq</VAR>, <VAR>i</VAR>) </CODE>
<DD>
These functions extract the subsequence 
<PRE>
<VAR>seq</VAR>[<A HREF="pack-float.html#SIG:PACK_REAL.bytesPerElem:VAL:SPEC">bytesPerElem</A>*<VAR>i</VAR>..<A HREF="pack-float.html#SIG:PACK_REAL.bytesPerElem:VAL:SPEC">bytesPerElem</A>*(<VAR>i</VAR>+1)-1]
</PRE>
 of the aggregate <VAR>seq</VAR> and convert it into a <CODE><A HREF="pack-float.html#SIG:PACK_REAL.real:TY:SPEC">real</A></CODE> value according to the endianness of the structure. They raise the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception if <VAR>i</VAR> &lt; 0 or if <CODE>Word8Array.length</CODE> <VAR>seq</VAR> &lt; <CODE>bytesPerElem</CODE> * (<VAR>i</VAR> + 1).  
<BR>
<BR>

<DT> <A NAME="SIG:PACK_REAL.update:VAL"></A>
<DT> <CODE>update (<VAR>arr</VAR>, <VAR>i</VAR>, <VAR>r</VAR>) </CODE>
<DD>
stores <VAR>r</VAR> into the bytes  <CODE><CODE><A HREF="pack-float.html#SIG:PACK_REAL.bytesPerElem:VAL:SPEC">bytesPerElem</A></CODE>*<VAR>i</VAR></CODE> through <CODE><CODE><A HREF="pack-float.html#SIG:PACK_REAL.bytesPerElem:VAL:SPEC">bytesPerElem</A></CODE>*(<VAR>i</VAR>+1)-1</CODE> of the array <VAR>arr</VAR>, according to the structure's endianness. It raises the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception if <VAR>i</VAR> &lt; 0 or if <CODE>Word8Array.length</CODE> <VAR>arr</VAR> &lt; <CODE>bytesPerElem</CODE> * (<VAR>i</VAR> + 1). 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="pack-word.html#PACK_WORD:SIG:SPEC">PACK_WORD</A></CODE>, <CODE><A HREF="real.html#REAL:SIG:SPEC">REAL</A></CODE>
</BLOCKQUOTE>

`
