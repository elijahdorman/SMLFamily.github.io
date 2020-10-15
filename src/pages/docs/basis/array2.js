var data = `


<H2><A NAME="section:0"></A>The <CODE>Array2</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="ARRAY2:SIG:SPEC"></A><CODE>ARRAY2</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="Array2:STR:SPEC"></A><CODE>Array2</CODE><B> :> </B>ARRAY2&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>Array2</CODE> structure provides polymorphic mutable 2-dimensional arrays. As with 1-dimensional arrays, these arrays have the equality property that two arrays are equal if they are the same array, <I>i.e.</I>, created by the same call to a primitive array constructor such as <CODE>array</CODE>, <CODE>fromList</CODE>, etc.; otherwise they are not equal. This also holds for arrays of zero length. Thus, the type <CODE>ty array</CODE> admits equality even if <CODE>ty</CODE> does not.
<P>
The elements of 2-dimensional arrays are indexed by pair of integers <CODE>(i,j)</CODE> where <CODE>i</CODE> gives the row index, and <CODE>i</CODE> gives the column index. As usual, indices start at 0, with increasing indices going from left to right and, in the case of rows, from top to bottom. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>eqtype</B>&nbsp;<I>'a</I>&nbsp;<A NAME="SIG:ARRAY2.array:TY:SPEC" HREF="#SIG:ARRAY2.array:TY">array</A><BR>
<B>type</B>&nbsp;<I>'a</I>&nbsp;<A NAME="SIG:ARRAY2.region:TY:SPEC" HREF="#SIG:ARRAY2.region:TY">region</A>&nbsp;=&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;row&nbsp;<B>:</B>&nbsp;int,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col&nbsp;<B>:</B>&nbsp;int,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nrows&nbsp;<B>:</B>&nbsp;int&nbsp;option,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ncols&nbsp;<B>:</B>&nbsp;int&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR>
<B>datatype</B>&nbsp;<A NAME="SIG:ARRAY2.traversal:TY:SPEC" HREF="#SIG:ARRAY2.traversal:TY">traversal</A>&nbsp;=&nbsp;<A NAME="SIG:ARRAY2.RowMajor:TY:SPEC" HREF="#SIG:ARRAY2.RowMajor:TY">RowMajor</A>&nbsp;|&nbsp;<A NAME="SIG:ARRAY2.ColMajor:TY:SPEC" HREF="#SIG:ARRAY2.ColMajor:TY">ColMajor</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.array:VAL:SPEC" HREF="#SIG:ARRAY2.array:VAL">array</A>&nbsp;<B>:</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'a</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;array<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.fromList:VAL:SPEC" HREF="#SIG:ARRAY2.fromList:VAL">fromList</A>&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;list&nbsp;list&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;array<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.tabulate:VAL:SPEC" HREF="#SIG:ARRAY2.tabulate:VAL">tabulate</A>&nbsp;<B>:</B>&nbsp;traversal<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>)<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;array<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.sub:VAL:SPEC" HREF="#SIG:ARRAY2.sub:VAL">sub</A>&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.update:VAL:SPEC" HREF="#SIG:ARRAY2.update:VAL">update</A>&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'a</I>&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.dimensions:VAL:SPEC" HREF="#SIG:ARRAY2.dimensions:VAL">dimensions</A>&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.nCols:VAL:SPEC" HREF="#SIG:ARRAY2.nCols:VAL">nCols</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.nRows:VAL:SPEC" HREF="#SIG:ARRAY2.nRows:VAL">nRows</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.row:VAL:SPEC" HREF="#SIG:ARRAY2.row:VAL">row</A>&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;Vector.vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.column:VAL:SPEC" HREF="#SIG:ARRAY2.column:VAL">column</A>&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;Vector.vector<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.copy:VAL:SPEC" HREF="#SIG:ARRAY2.copy:VAL">copy</A>&nbsp;<B>:</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;region,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dst&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dst_row&nbsp;<B>:</B>&nbsp;int,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dst_col&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.appi:VAL:SPEC" HREF="#SIG:ARRAY2.appi:VAL">appi</A>&nbsp;<B>:</B>&nbsp;traversal<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'a</I>&nbsp;<B>-&gt;</B>&nbsp;unit)<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;region&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.app:VAL:SPEC" HREF="#SIG:ARRAY2.app:VAL">app</A>&nbsp;&nbsp;<B>:</B>&nbsp;traversal&nbsp;<B>-&gt;</B>&nbsp;(<I>'a</I>&nbsp;<B>-&gt;</B>&nbsp;unit)&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.foldi:VAL:SPEC" HREF="#SIG:ARRAY2.foldi:VAL">foldi</A>&nbsp;<B>:</B>&nbsp;traversal<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'a</I>&nbsp;<B>*</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>)<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;region&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.fold:VAL:SPEC" HREF="#SIG:ARRAY2.fold:VAL">fold</A>&nbsp;&nbsp;<B>:</B>&nbsp;traversal<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(<I>'a</I>&nbsp;<B>*</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>)&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;<I>'b</I><BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.modifyi:VAL:SPEC" HREF="#SIG:ARRAY2.modifyi:VAL">modifyi</A>&nbsp;<B>:</B>&nbsp;traversal<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'a</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>)<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;region&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:ARRAY2.modify:VAL:SPEC" HREF="#SIG:ARRAY2.modify:VAL">modify</A>&nbsp;&nbsp;<B>:</B>&nbsp;traversal&nbsp;<B>-&gt;</B>&nbsp;(<I>'a</I>&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>)&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:ARRAY2.region:TY"></A><CODE><B>type</B>&nbsp;<I>'a</I>&nbsp;region&nbsp;=&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;row&nbsp;<B>:</B>&nbsp;int,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;col&nbsp;<B>:</B>&nbsp;int,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nrows&nbsp;<B>:</B>&nbsp;int&nbsp;option,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ncols&nbsp;<B>:</B>&nbsp;int&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</CODE>
<DD>
      This type specifies a rectangular subregion of a 2-dimensional array. If <CODE>ncols</CODE> equals <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>w</VAR>)</CODE>, with 0 &lt;= <VAR>w</VAR>, the region includes only those elements in columns with indices in the range from <VAR>col</VAR> to <VAR>col</VAR> + (<VAR>w</VAR> - 1), inclusively. If <CODE>ncols</CODE> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE></CODE>, the region includes only those elements lying on or to the right of column <VAR>col</VAR>. A similar interpretation holds for the <CODE>row</CODE> and <CODE>nrows</CODE> fields. Thus, the region corresponds to all those elements with position (i,j) such that i lies in the specified range of rows and j lies in the specified range of columns. 
<P>
      A region <VAR>reg</VAR> is said to be <EM>valid</EM> if it denotes a legal subarray of its base array. More specifically, <VAR>reg</VAR> is <EM>valid</EM> if 
<BLOCKQUOTE>
0 &lt;= <CODE>#row</CODE> <VAR>reg</VAR> &lt;= <CODE>nRows</CODE> (#base <VAR>reg</VAR>) 
</BLOCKQUOTE>
 when <CODE>#nrows <VAR>reg</VAR> = NONE</CODE>, or 
<BLOCKQUOTE>
0 &lt;= <CODE>#row</CODE> <VAR>reg</VAR> &lt;= (<CODE>#row</CODE> <VAR>reg</VAR>)+<VAR>nr</VAR> &lt;= <CODE>nRows</CODE> (#base <VAR>reg</VAR>) 
</BLOCKQUOTE>
 when <CODE>#nrows <VAR>reg</VAR> = SOME(<VAR>nr</VAR>)</CODE>, and the analogous conditions hold for columns. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.traversal:TY"></A><CODE><B>datatype</B>&nbsp;traversal&nbsp;=&nbsp;RowMajor&nbsp;|&nbsp;ColMajor</CODE>
<DD>
      This type specifies a way of traversing a region. Specifically, <CODE>RowMajor</CODE> indicates that, given a region, the rows are traversed from left to right (smallest column index to largest column index), starting with the first row in the region, then the second, and so on until the last row is traversed. <CODE>ColMajor</CODE> reverses the roles of row and column, traversing the columns from top down (smallest row index to largest row index), starting with the first column, then the second, and so on until the last column is traversed. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.array:VAL"></A>
<DT> <CODE>array (<VAR>r</VAR>, <VAR>c</VAR>, <VAR>init</VAR>) </CODE>
<DD>
creates a new array with <VAR>r</VAR> rows and <VAR>c</VAR> columns, with each element initialized to the value <VAR>init</VAR>.  If <VAR>r</VAR> &lt; 0, <VAR>c</VAR> &lt; 0 or the resulting array would be too large, the <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> exception is raised. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.fromList:VAL"></A>
<DT> <CODE>fromList <VAR>l</VAR> </CODE>
<DD>
creates a new array from a list of a list of elements. The elements should be presented in row major form, <I>i.e.</I>, <CODE>hd <VAR>l</VAR></CODE> gives the first row, <CODE>hd (tl <VAR>l</VAR>)</CODE> gives the second row, etc. This raises the <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> exception if the resulting array would be too large or if the lists in <VAR>l</VAR> do not all have the same length. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.tabulate:VAL"></A>
<DT> <CODE>tabulate trv (<VAR>r</VAR>, <VAR>c</VAR>, <VAR>f</VAR>) </CODE>
<DD>
creates a new array with <VAR>r</VAR> rows and <VAR>c</VAR> columns, with the (<VAR>i</VAR>,<VAR>j</VAR>)<SUP>(th)</SUP> element initialized to <CODE><VAR>f</VAR> (<VAR>i</VAR>,<VAR>j</VAR>)</CODE>. The elements are initialized in the traversal order specified by <VAR>trv</VAR>.  If <VAR>r</VAR> &lt; 0, <VAR>c</VAR> &lt; 0 or the resulting array would be too large, the <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> exception is raised. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.sub:VAL"></A>
<DT> <CODE>sub (<VAR>arr</VAR>, <VAR>i</VAR>, <VAR>j</VAR>) </CODE>
<DD>
returns the (<VAR>i</VAR>,<VAR>j</VAR>)<SUP>(th)</SUP> element of the array <VAR>arr</VAR>.  If <VAR>i</VAR> &lt; 0, <VAR>j</VAR> &lt; 0, <CODE>nRows</CODE> <VAR>arr</VAR> &lt;= <VAR>i</VAR>, or <CODE>nCols</CODE> <VAR>arr</VAR> &lt;= <VAR>j</VAR>, then  the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.update:VAL"></A>
<DT> <CODE>update (<VAR>arr</VAR>, <VAR>i</VAR>, <VAR>j</VAR>, <VAR>a</VAR>) </CODE>
<DD>
sets the (<VAR>i</VAR>,<VAR>j</VAR>)<SUP>(th)</SUP> element of the array <VAR>arr</VAR> to <VAR>a</VAR>.  If <VAR>i</VAR> &lt; 0, <VAR>j</VAR> &lt; 0, <CODE>nRows</CODE> <VAR>arr</VAR> &lt;= <VAR>i</VAR>, or <CODE>nCols</CODE> <VAR>arr</VAR> &lt;= <VAR>j</VAR>, then  the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.dimensions:VAL"></A><CODE><B>val</B>&nbsp;dimensions&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;<B>*</B>&nbsp;int<BR>
<B>val</B>&nbsp;nCols&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;nRows&nbsp;<B>:</B>&nbsp;<I>'a</I>&nbsp;array&nbsp;<B>-&gt;</B>&nbsp;int</CODE>
<DD>
          These functions return size information concerning an array. <CODE>nCols</CODE> returns the number of columns, <CODE>nRows</CODE> returns the number of rows, and <CODE>dimension</CODE> returns a pair containing the number of rows and the number of columns of the array. The functions <CODE>nRows</CODE> and <CODE>nCols</CODE> are respectively equivalent to <CODE>#1 o dimensions</CODE> and <CODE>#2 o dimensions</CODE> 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.row:VAL"></A>
<DT> <CODE>row (<VAR>arr</VAR>, <VAR>i</VAR>) </CODE>
<DD>
returns row <VAR>i</VAR> of <VAR>arr</VAR>. If (<CODE>nRows</CODE> <VAR>arr</VAR>) &lt;= <VAR>i</VAR> or <VAR>i</VAR> &lt; 0, this raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.column:VAL"></A>
<DT> <CODE>column (<VAR>arr</VAR>, <VAR>j</VAR>) </CODE>
<DD>
returns column <VAR>j</VAR> of <VAR>arr</VAR>. This raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if <VAR>j</VAR> &lt; 0 or <CODE>nCols</CODE> <VAR>arr</VAR> &lt;= <VAR>j</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.copy:VAL"></A>
<DT> <CODE>copy {<VAR>src</VAR>, <VAR>dst</VAR>, <VAR>dst_row</VAR>, <VAR>dst_col</VAR>} </CODE>
<DD>
copies the region <VAR>src</VAR> into the array <VAR>dst</VAR>, with the element at position <CODE>(#row <VAR>src</VAR>, #col <VAR>src</VAR>)</CODE> copied into the destination array at position <CODE>(<VAR>dst_row</VAR>,<VAR>dst_col</VAR>)</CODE>.  If the source region is not valid,  then the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. Similarly, if the derived destination region (the source region <VAR>src</VAR> translated to (<VAR>dst_row</VAR>,<VAR>dst_col</VAR>)) is not valid in <VAR>dst</VAR>,  then the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception is raised. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
The <CODE>copy</CODE> function must correctly handle the case in which the <CODE>#base <VAR>src</VAR></CODE> and the <VAR>dst</VAR> arrays are equal, and the source and destination regions overlap. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.appi:VAL"></A>
<DT> <CODE>appi <VAR>tr</VAR> <VAR>f</VAR> <VAR>reg</VAR> </CODE>
<DT> <CODE>          app <VAR>tr</VAR> <VAR>f</VAR> <VAR>arr</VAR> </CODE>
<DD>
These functions apply the function <VAR>f</VAR> to the elements of an array in the order specified by <VAR>tr</VAR>.  The more general <CODE><A HREF="array2.html#SIG:ARRAY2.appi:VAL:SPEC">appi</A></CODE> function applies <VAR>f</VAR>  to the elements of the region  <VAR>reg</VAR> and supplies both the element and the element's coordinates in the base array to the function <VAR>f</VAR>.  If <VAR>reg</VAR> is not valid, then  the exception <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> is raised.  
<P>
 The function <CODE>app</CODE> applies <VAR>f</VAR> to the whole array and  does not supply the element's coordinates to <VAR>f</VAR>.  Thus, the expression <CODE>app <VAR>tr</VAR> <VAR>f</VAR> <VAR>arr</VAR></CODE>  is equivalent to: 
<PRE>
let
  val range = {base=<VAR>arr</VAR>,row=0,col=0,nrows=NONE,ncols=NONE}
in
  appi <VAR>tr</VAR> (<VAR>f</VAR> o #3) range
end
</PRE>
 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.foldi:VAL"></A>
<DT> <CODE>foldi <VAR>tr</VAR> <VAR>f</VAR> <VAR>init</VAR> <VAR>reg</VAR> </CODE>
<DT> <CODE>          fold <VAR>tr</VAR> <VAR>f</VAR> <VAR>init</VAR> <VAR>arr</VAR> </CODE>
<DD>
These functions fold the function <VAR>f</VAR> over the elements of an array <VAR>arr</VAR>, traversing the elements in <VAR>tr</VAR> order, and using  the value <VAR>init</VAR> as the initial value.  The more general <CODE><A HREF="array2.html#SIG:ARRAY2.foldi:VAL:SPEC">foldi</A></CODE> function applies <VAR>f</VAR>  to the elements of the region  <VAR>reg</VAR> and supplies both the element and the element's coordinates in the base array to the function <VAR>f</VAR>.  If <VAR>reg</VAR> is not valid, then  the exception <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> is raised.  
<P>
 The function <CODE>fold</CODE> applies <VAR>f</VAR> to the whole array and  does not supply the element's coordinates to <VAR>f</VAR>.  Thus, the expression <CODE>fold <VAR>tr</VAR> <VAR>f</VAR> <VAR>init</VAR> <VAR>arr</VAR></CODE>  is equivalent to:  
<PRE>
foldi <VAR>tr</VAR> (fn (_,_,a,b) =&gt; <VAR>f</VAR> (a,b)) <VAR>init</VAR> 
           {base=<VAR>arr</VAR>, row=0, col=0, nrows=NONE, ncols=NONE}
</PRE>
 
<BR>
<BR>

<DT> <A NAME="SIG:ARRAY2.modifyi:VAL"></A>
<DT> <CODE>modifyi <VAR>tr</VAR> <VAR>f</VAR> <VAR>reg</VAR> </CODE>
<DT> <CODE>          modify <VAR>tr</VAR> <VAR>f</VAR> <VAR>arr</VAR> </CODE>
<DD>
These functions apply the function <VAR>f</VAR> to the elements of an array in the order specified by <VAR>tr</VAR>, and replace each element with the result of <VAR>f</VAR>.  The more general <CODE><A HREF="array2.html#SIG:ARRAY2.modifyi:VAL:SPEC">modifyi</A></CODE> function applies <VAR>f</VAR>  to the elements of the region  <VAR>reg</VAR> and supplies both the element and the element's coordinates in the base array to the function <VAR>f</VAR>.  If <VAR>reg</VAR> is not valid, then  the exception <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> is raised.  
<P>
 The function <CODE>modify</CODE> applies <VAR>f</VAR> to the whole array and  does not supply the element's coordinates to <VAR>f</VAR>.  Thus, the expression <CODE>modify <VAR>tr</VAR> <VAR>f</VAR> <VAR>arr</VAR></CODE>  is equivalent to: 
<PRE>
let
  val range = {base=<VAR>arr</VAR>,row=0,col=0,nrows=NONE,ncols=NONE}
in
  modifyi <VAR>tr</VAR> (<VAR>f</VAR> o #3) 
end
</PRE>
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="array.html#Array:STR:SPEC">Array</A></CODE>, <CODE><A HREF="mono-array2.html#MONO_ARRAY2:SIG:SPEC">MONO_ARRAY2</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
Note that the indices passed to argument functions in  <CODE><A HREF="array2.html#SIG:ARRAY2.appi:VAL:SPEC">appi</A></CODE>, <CODE><A HREF="array2.html#SIG:ARRAY2.foldi:VAL:SPEC">foldi</A></CODE>, and <CODE><A HREF="array2.html#SIG:ARRAY2.modifyi:VAL:SPEC">modifyi</A></CODE> are with respect to the underlying matrix and not based on the region. This is different from the convention for the analogous functions on 1-dimensional slices. 
<BLOCKQUOTE>
<B>Rationale:</B><BR>

<P>
It was clear that 2-dimensional arrays needed to be provided, but the interface is fairly rudimentary, largely due to the lack of experience with their uses in SML programs.  Thus, we kept regions concrete, as opposed to the <CODE>slice</CODE> types, their 1-dimensional cousins. In addition, we felt it best, at this time, to avoid picking among the vast number of possible matrix functions.
</BLOCKQUOTE>
 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
Unlike one-dimensional types, the signature for 2-dimensional arrays does not specify any bounds on possible arrays. Implementations should support a total number of elements that is at least as large as the total number of elements in the corresponding single dimension array type.
</BLOCKQUOTE>
 
`
