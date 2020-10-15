var data = `

<H2><A NAME="section:0"></A>The <CODE>MONO_ARRAY_SLICE</CODE> signature</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="MONO_ARRAY_SLICE:SIG:SPEC"></A><CODE>MONO_ARRAY_SLICE</CODE><BR>
<B>structure</B>&nbsp;<A NAME="Word8ArraySlice:STR:SPEC"></A><CODE>Word8ArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;Word8Vector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;Word8Array.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;Word8.word<BR>
<B>structure</B>&nbsp;<A NAME="CharArraySlice:STR:SPEC"></A><CODE>CharArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;CharVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;CharVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;CharArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;char<BR>
<B>structure</B>&nbsp;<A NAME="WideCharArraySlice:STR:SPEC"></A><CODE>WideCharArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;WideCharVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;WideCharVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;WideCharArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;WideChar.char<BR>
<B>structure</B>&nbsp;<A NAME="BoolArraySlice:STR:SPEC"></A><CODE>BoolArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;BoolVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;BoolVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;BoolArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;bool<BR>
<B>structure</B>&nbsp;<A NAME="IntArraySlice:STR:SPEC"></A><CODE>IntArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;IntVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;IntVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;IntArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;int<BR>
<B>structure</B>&nbsp;<A NAME="WordArraySlice:STR:SPEC"></A><CODE>WordArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;WordVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;WordVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;WordArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;word<BR>
<B>structure</B>&nbsp;<A NAME="RealArraySlice:STR:SPEC"></A><CODE>RealArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;RealVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;RealVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;RealArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;real<BR>
<B>structure</B>&nbsp;<A NAME="LargeIntArraySlice:STR:SPEC"></A><CODE>LargeIntArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;LargeIntVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;LargeIntVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;LargeIntArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;LargeInt.int<BR>
<B>structure</B>&nbsp;<A NAME="LargeWordArraySlice:STR:SPEC"></A><CODE>LargeWordArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;LargeWordVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;LargeWordVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;LargeWordArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;LargeWord.word<BR>
<B>structure</B>&nbsp;<A NAME="LargeRealArraySlice:STR:SPEC"></A><CODE>LargeRealArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;LargeRealVector.vector<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;LargeRealVectorSlice.slice<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;LargeRealArray.array<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;LargeReal.real<BR>
<B>structure</B>&nbsp;<A NAME="Int{N}ArraySlice:STR:SPEC"></A><CODE>Int<I>&lt;N&gt;</I>ArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;<A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">Int{N}Vector.vector</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;<A HREF="mono-vector-slice.html#SIG:MONO_VECTOR_SLICE.slice:TY:SPEC">Int{N}VectorSlice.slice</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;<A HREF="mono-array.html#SIG:MONO_ARRAY.array:TY:SPEC">Int{N}Array.array</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;<A HREF="integer.html#SIG:INTEGER.int:TY:SPEC">Int{N}.int</A><BR>
<B>structure</B>&nbsp;<A NAME="Word{N}ArraySlice:STR:SPEC"></A><CODE>Word<I>&lt;N&gt;</I>ArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;<A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">Word{N}Vector.vector</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;<A HREF="mono-vector-slice.html#SIG:MONO_VECTOR_SLICE.slice:TY:SPEC">Word{N}VectorSlice.slice</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;<A HREF="mono-array.html#SIG:MONO_ARRAY.array:TY:SPEC">Word{N}Array.array</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;<A HREF="word.html#SIG:WORD.word:TY:SPEC">Word{N}.word</A><BR>
<B>structure</B>&nbsp;<A NAME="Real{N}ArraySlice:STR:SPEC"></A><CODE>Real<I>&lt;N&gt;</I>ArraySlice</CODE><B> :> </B>MONO_ARRAY_SLICE&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector&nbsp;=&nbsp;<A HREF="mono-vector.html#SIG:MONO_VECTOR.vector:TY:SPEC">Real{N}Vector.vector</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;vector_slice&nbsp;=&nbsp;<A HREF="mono-vector-slice.html#SIG:MONO_VECTOR_SLICE.slice:TY:SPEC">Real{N}VectorSlice.slice</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;array&nbsp;=&nbsp;<A HREF="mono-array.html#SIG:MONO_ARRAY.array:TY:SPEC">Real{N}Array.array</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;elem&nbsp;=&nbsp;<A HREF="real.html#SIG:REAL.real:TY:SPEC">Real{N}.real</A><BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>MONO_ARRAY_SLICE</CODE> signature provides an abstraction of subarrays for monomorphic arrays. A <CODE>slice</CODE> value can be viewed as a triple  <CODE>(<VAR>a</VAR>, <VAR>i</VAR>, <VAR>n</VAR>)</CODE>, where <VAR>a</VAR> is the underlying array, <VAR>i</VAR> is the starting index, and <VAR>n</VAR> is the length of the subarray, with the constraint that  0 &lt;= <VAR>i</VAR> &lt;= <VAR>i</VAR> + <VAR>n</VAR> &lt;= |<VAR>a</VAR>|, where |<VAR>a</VAR>| is the length of the array <VAR>a</VAR>. Slices provide a convenient notation for specifying and operating on a contiguous subset of elements in an array. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.elem:TY:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.elem:TY">elem</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.array:TY:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.array:TY">array</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.slice:TY:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.slice:TY">slice</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.vector:TY:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.vector:TY">vector</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.vector_slice:TY:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.vector_slice:TY">vector_slice</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.length:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.length:VAL">length</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.sub:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.sub:VAL">sub</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;elem<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.update:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.update:VAL">update</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.full:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.full:VAL">full</A>&nbsp;<B>:</B>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;slice<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.slice:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.slice:VAL">slice</A>&nbsp;<B>:</B>&nbsp;array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int&nbsp;option&nbsp;<B>-&gt;</B>&nbsp;slice<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.subslice:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.subslice:VAL">subslice</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int&nbsp;option&nbsp;<B>-&gt;</B>&nbsp;slice<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.base:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.base:VAL">base</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.vector:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.vector:VAL">vector</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.copy:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.copy:VAL">copy</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;{src&nbsp;<B>:</B>&nbsp;slice,&nbsp;dst&nbsp;<B>:</B>&nbsp;array,&nbsp;di&nbsp;<B>:</B>&nbsp;int}&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.copyVec:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.copyVec:VAL">copyVec</A>&nbsp;<B>:</B>&nbsp;{src&nbsp;<B>:</B>&nbsp;vector_slice,&nbsp;dst&nbsp;<B>:</B>&nbsp;array,&nbsp;di&nbsp;<B>:</B>&nbsp;int}<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.isEmpty:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.isEmpty:VAL">isEmpty</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.getItem:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.getItem:VAL">getItem</A>&nbsp;<B>:</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;(elem&nbsp;<B>*</B>&nbsp;slice)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.appi:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.appi:VAL">appi</A>&nbsp;<B>:</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>-&gt;</B>&nbsp;unit)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.app:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.app:VAL">app</A>&nbsp;&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>-&gt;</B>&nbsp;unit)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.modifyi:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.modifyi:VAL">modifyi</A>&nbsp;<B>:</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>-&gt;</B>&nbsp;elem)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.modify:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.modify:VAL">modify</A>&nbsp;&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>-&gt;</B>&nbsp;elem)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.foldli:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.foldli:VAL">foldli</A>&nbsp;<B>:</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>*</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>)&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.foldr:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.foldr:VAL">foldr</A>&nbsp;&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>*</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>)&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.foldl:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.foldl:VAL">foldl</A>&nbsp;&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>*</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>)&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.foldri:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.foldri:VAL">foldri</A>&nbsp;<B>:</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>*</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>)&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.findi:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.findi:VAL">findi</A>&nbsp;<B>:</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>-&gt;</B>&nbsp;bool)<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;elem)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.find:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.find:VAL">find</A>&nbsp;&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>-&gt;</B>&nbsp;bool)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;elem&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.exists:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.exists:VAL">exists</A>&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>-&gt;</B>&nbsp;bool)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.all:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.all:VAL">all</A>&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>-&gt;</B>&nbsp;bool)&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:MONO_ARRAY_SLICE.collate:VAL:SPEC" HREF="#SIG:MONO_ARRAY_SLICE.collate:VAL">collate</A>&nbsp;<B>:</B>&nbsp;(elem&nbsp;<B>*</B>&nbsp;elem&nbsp;<B>-&gt;</B>&nbsp;order)<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;slice&nbsp;<B>*</B>&nbsp;slice&nbsp;<B>-&gt;</B>&nbsp;order</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:MONO_ARRAY_SLICE.array:TY"></A><CODE><B>type</B>&nbsp;array</CODE>
<DD>
      The underlying monomorphic array type. We denote the length of an array <VAR>arr</VAR> of type <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.array:TY:SPEC">array</A></CODE> by |<VAR>arr</VAR>|. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.vector:TY"></A><CODE><B>type</B>&nbsp;vector</CODE>
<DD>
      The underlying monomorphic vector type. We denote the length of a vector <VAR>vec</VAR> of type <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.vector:TY:SPEC">vector</A></CODE> by |<VAR>vec</VAR>|. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.vector_slice:TY"></A><CODE><B>type</B>&nbsp;vector_slice</CODE>
<DD>
      Slices of the monomorphic <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.vector:TY:SPEC">vector</A></CODE> type. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.length:VAL"></A>
<DT> <CODE>length <VAR>sl</VAR> </CODE>
<DD>
returns |<VAR>sl</VAR>|, the length (<I>i.e.</I>, number of elements) of the slice. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.sub:VAL"></A>
<DT> <CODE>sub (<VAR>sl</VAR>, <VAR>i</VAR>) </CODE>
<DD>
returns the <VAR>i</VAR><SUP>(th)</SUP> element of the slice <VAR>sl</VAR>. If <VAR>i</VAR> &lt; 0 or |<VAR>sl</VAR>| &lt;= <VAR>i</VAR>, then the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.update:VAL"></A>
<DT> <CODE>update (<VAR>sl</VAR>, <VAR>i</VAR>, <VAR>a</VAR>) </CODE>
<DD>
sets the <VAR>i</VAR><SUP>(th)</SUP> element of the slice <VAR>sl</VAR> to <VAR>a</VAR>. If <VAR>i</VAR> &lt; 0 or |<VAR>sl</VAR>| &lt;= <VAR>i</VAR>, then the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.full:VAL"></A>
<DT> <CODE>full <VAR>arr</VAR> </CODE>
<DD>
creates a slice representing the entire array <VAR>arr</VAR>. It is equivalent to <CODE><CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.slice:VAL:SPEC">slice</A></CODE>(<VAR>arr</VAR>, 0, <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>)</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.slice:VAL"></A>
<DT> <CODE>slice (<VAR>arr</VAR>, <VAR>i</VAR>, <VAR>sz</VAR>) </CODE>
<DD>
creates a slice based on the array <VAR>arr</VAR> starting at index <VAR>i</VAR> of the array <VAR>arr</VAR>. If <VAR>sz</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>, the slice includes all of the elements to the end of the array, <I>i.e.</I>, <VAR>arr</VAR>[<VAR>i</VAR>..|<VAR>arr</VAR>|-1]. This raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if <CODE><VAR>i</VAR> &lt; 0</CODE> or |<VAR>arr</VAR>| &lt; <VAR>i</VAR>. If <VAR>sz</VAR> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>j</VAR>)</CODE>, the slice has length <VAR>j</VAR>, that is, it corresponds to <CODE><VAR>arr</VAR>[<VAR>i</VAR>..<VAR>i</VAR>+<VAR>j</VAR>-1]</CODE>. It raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if <VAR>i</VAR> &lt; 0 or <VAR>j</VAR> &lt; 0 or |<VAR>arr</VAR>| &lt; <VAR>i</VAR> + <VAR>j</VAR>. Note that, if defined, <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.slice:VAL:SPEC">slice</A></CODE> returns an empty slice when <VAR>i</VAR> = |<VAR>arr</VAR>|. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.subslice:VAL"></A>
<DT> <CODE>subslice (<VAR>sl</VAR>, <VAR>i</VAR>, <VAR>sz</VAR>) </CODE>
<DD>
creates a slice based on the given slice <VAR>sl</VAR> starting at index <VAR>i</VAR> of <VAR>sl</VAR>. If <VAR>sz</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>, the slice includes all of the elements to the end of the slice, <I>i.e.</I>, <VAR>sl</VAR>[<VAR>i</VAR>..|<VAR>sl</VAR>|-1]. This raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if <CODE><VAR>i</VAR> &lt; 0</CODE> or |<VAR>sl</VAR>| &lt; <VAR>i</VAR>. If <VAR>sz</VAR> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>j</VAR>)</CODE>, the slice has length <VAR>j</VAR>, that is, it corresponds to <CODE><VAR>sl</VAR>[<VAR>i</VAR>..<VAR>i</VAR>+<VAR>j</VAR>-1]</CODE>. It raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if <VAR>i</VAR> &lt; 0 or <VAR>j</VAR> &lt; 0 or |<VAR>sl</VAR>| &lt; <VAR>i</VAR> + <VAR>j</VAR>. Note that, if defined, <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.slice:VAL:SPEC">slice</A></CODE> returns an empty slice when <VAR>i</VAR> = |<VAR>sl</VAR>|. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.base:VAL"></A>
<DT> <CODE>base <VAR>sl</VAR> </CODE>
<DD>
returns a triple <CODE>(<VAR>arr</VAR>, <VAR>i</VAR>, <VAR>n</VAR>)</CODE> representing the concrete representation of the slice. <VAR>arr</VAR> is the underlying array, <VAR>i</VAR> is the starting index, and <VAR>n</VAR> is the length of the slice. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.vector:VAL"></A>
<DT> <CODE>vector <VAR>sl</VAR> </CODE>
<DD>
generates a vector from the slice <VAR>sl</VAR>. Specifically, if <VAR>vec</VAR> is the resulting vector, we have |<VAR>vec</VAR>| = <CODE>length</CODE> <VAR>sl</VAR> and, for 0 &lt;= <VAR>i</VAR> &lt; <CODE>length</CODE> <VAR>sl</VAR>, element <VAR>i</VAR> of <VAR>vec</VAR> is <CODE>sub (<VAR>sl</VAR>, i)</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.copy:VAL"></A>
<DT> <CODE>copy {<VAR>src</VAR>, <VAR>dst</VAR>, <VAR>di</VAR>} </CODE>
<DT> <CODE>          copyVec {<VAR>src</VAR>, <VAR>dst</VAR>, <VAR>di</VAR>} </CODE>
<DD>
These functions copy the given slice  into the array <VAR>dst</VAR>, with element <CODE>sub (<VAR>src</VAR>,<VAR>i</VAR>)</CODE>, for 0 &lt;= <VAR>i</VAR> &lt; |<VAR>src</VAR>|, being copied to  position <VAR>di</VAR> + <VAR>i</VAR> in the destination array.  If <VAR>di</VAR> &lt; 0 or if  |<VAR>dst</VAR>| &lt; <VAR>di</VAR>+|<VAR>src</VAR>|, then the  <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
The <CODE>copy</CODE> function must correctly handle the case in which  <VAR>dst</VAR> and the base array of <VAR>src</VAR>  are equal, and the source and destination slices overlap. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.isEmpty:VAL"></A>
<DT> <CODE>isEmpty <VAR>sl</VAR> </CODE>
<DD>
returns <CODE>true</CODE> if <VAR>sl</VAR> has length 0. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.getItem:VAL"></A>
<DT> <CODE>getItem <VAR>sl</VAR> </CODE>
<DD>
returns the first item in <VAR>sl</VAR> and the rest of the slice, or <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> if <VAR>sl</VAR> is empty. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.appi:VAL"></A>
<DT> <CODE>appi <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DT> <CODE>          app <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DD>
These apply the function <VAR>f</VAR> to the elements of a slice in left to right order (<I>i.e.</I>, increasing indices). The more general <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.appi:VAL:SPEC">appi</A></CODE> function supplies <VAR>f</VAR> with the index of the corresponding element in the slice. The expression <CODE>app <VAR>f</VAR> <VAR>sl</VAR></CODE> is equivalent to <CODE>appi (<VAR>f</VAR> o #2) <VAR>sl</VAR></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.modifyi:VAL"></A>
<DT> <CODE>modifyi <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DT> <CODE>          modify <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DD>
These apply the function <VAR>f</VAR> to the elements of an array slice in left to right order (<I>i.e.</I>, increasing indices), and replace each element with the result. The more general <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.modifyi:VAL:SPEC">modifyi</A></CODE> supplies <VAR>f</VAR> with the index of the corresponding element in the slice. The expression <CODE>modify <VAR>f</VAR> <VAR>sl</VAR></CODE> is equivalent to <CODE>modifyi (<VAR>f</VAR> o #2) <VAR>sl</VAR></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.foldli:VAL"></A>
<DT> <CODE>foldli <VAR>f</VAR> <VAR>init</VAR> <VAR>sl</VAR> </CODE>
<DT> <CODE>          foldr <VAR>f</VAR> <VAR>init</VAR> <VAR>sl</VAR> </CODE>
<DT> <CODE>          foldl <VAR>f</VAR> <VAR>init</VAR> <VAR>sl</VAR> </CODE>
<DT> <CODE>          foldri <VAR>f</VAR> <VAR>init</VAR> <VAR>sl</VAR> </CODE>
<DD>
These fold the function <VAR>f</VAR> over all the elements of an array slice, using  the value <VAR>init</VAR> as the initial value.  The functions <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldli:VAL:SPEC">foldli</A></CODE> and <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldl:VAL:SPEC">foldl</A></CODE> apply the function <VAR>f</VAR>  from left to right (increasing indices), while the functions  <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldri:VAL:SPEC">foldri</A></CODE> and <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldr:VAL:SPEC">foldr</A></CODE> work from right to left (decreasing indices).  The more general functions <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldli:VAL:SPEC">foldli</A></CODE> and <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldri:VAL:SPEC">foldri</A></CODE> supply <VAR>f</VAR> with the index of the corresponding element in the slice. 
<P>
      Refer to the <CODE><A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A></CODE> manual pages for reference implementations of the indexed versions.  
<P>
 The expression <CODE>foldl <VAR>f</VAR> <VAR>init</VAR> <VAR>sl</VAR></CODE>  is equivalent to:  
<PRE>
foldli (fn (_, <VAR>a</VAR>, <VAR>x</VAR>) =&gt; <VAR>f</VAR>(<VAR>a</VAR>, <VAR>x</VAR>)) <VAR>init</VAR> <VAR>sl</VAR>
</PRE>
 The analogous equivalence holds for <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldri:VAL:SPEC">foldri</A></CODE> and <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.foldr:VAL:SPEC">foldr</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.findi:VAL"></A>
<DT> <CODE>findi <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DT> <CODE>          find <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DD>
These apply <VAR>f</VAR> to each element of the slice <VAR>sl</VAR>, from left to right (<I>i.e.</I>, increasing indices), until a <CODE>true</CODE> value is returned. If this occurs, the functions return the element; otherwise, they return <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. The more general version <CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.findi:VAL:SPEC">findi</A></CODE> also supplies <VAR>f</VAR> with the index of the element in the slice and, upon finding an entry satisfying the predicate, returns that index with the element. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.exists:VAL"></A>
<DT> <CODE>exists <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DD>
applies <VAR>f</VAR> to each element <VAR>x</VAR> of the slice <VAR>sl</VAR>, from left to right (<I>i.e.</I>, increasing indices), until <CODE><VAR>f</VAR> <VAR>x</VAR></CODE> evaluates to <CODE>true</CODE>; it returns <CODE>true</CODE> if such an <VAR>x</VAR> exists and <CODE>false</CODE> otherwise. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.all:VAL"></A>
<DT> <CODE>all <VAR>f</VAR> <VAR>sl</VAR> </CODE>
<DD>
applies <VAR>f</VAR> to each element <VAR>x</VAR> of the slice <VAR>sl</VAR>, from left to right (<I>i.e.</I>, increasing indices), until <CODE><VAR>f</VAR> <VAR>x</VAR></CODE> evaluates to <CODE>false</CODE>; it returns <CODE>false</CODE> if such an <VAR>x</VAR> exists and <CODE>true</CODE> otherwise. It is equivalent to  <CODE><CODE><A HREF="bool.html#SIG:BOOL.not:VAL:SPEC">not</A></CODE>(<CODE><A HREF="mono-array-slice.html#SIG:MONO_ARRAY_SLICE.exists:VAL:SPEC">exists</A></CODE> (<CODE><A HREF="bool.html#SIG:BOOL.not:VAL:SPEC">not</A></CODE> o <VAR>f</VAR>) <VAR>l</VAR>))</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:MONO_ARRAY_SLICE.collate:VAL"></A>
<DT> <CODE>collate <VAR>f</VAR> (<VAR>sl</VAR>, <VAR>sl2</VAR>) </CODE>
<DD>
performs lexicographic comparison of the two slices using the given ordering <VAR>f</VAR> on elements. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="array-slice.html#ArraySlice:STR:SPEC">ArraySlice</A></CODE>, <CODE><A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A></CODE>, <CODE><A HREF="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</A></CODE>, <CODE><A HREF="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">MONO_VECTOR_SLICE</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
If an implementation provides a structure matching <CODE><A HREF="mono-array-slice.html#MONO_ARRAY_SLICE:SIG:SPEC">MONO_ARRAY_SLICE</A></CODE> for some element type <CODE>ty</CODE>, it must provide the corresponding monomorphic structures matching the signatures <CODE><A HREF="mono-vector-slice.html#MONO_VECTOR_SLICE:SIG:SPEC">MONO_VECTOR_SLICE</A></CODE>, <CODE><A HREF="mono-array.html#MONO_ARRAY:SIG:SPEC">MONO_ARRAY</A></CODE>, and <CODE><A HREF="mono-vector.html#MONO_VECTOR:SIG:SPEC">MONO_VECTOR</A></CODE>, with the vector, array and vector slice types all respectively identified.


`
