var data = `

<H2><A NAME="section:0"></A>The <CODE>REAL</CODE> signature</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="REAL:SIG:SPEC"></A><CODE>REAL</CODE><BR>
<B>structure</B>&nbsp;<A NAME="Real:STR:SPEC"></A><CODE>Real</CODE><B> :> </B>REAL<BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;real&nbsp;=&nbsp;real<BR>
<B>structure</B>&nbsp;<A NAME="LargeReal:STR:SPEC"></A><CODE>LargeReal</CODE><B> :> </B>REAL<BR>
<B>structure</B>&nbsp;<A NAME="Real{N}:STR:SPEC"></A><CODE>Real<I>&lt;N&gt;</I></CODE><B> :> </B>REAL&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>REAL</CODE> signature specifies structures that implement floating-point numbers. The semantics of floating-point numbers should follow the IEEE standard 754-1985 <B>[CITE]</B> and the ANSI/IEEE standard 854-1987<B>[CITE]</B>. In addition, implementations of the <CODE>REAL</CODE> signature are required to use non-trapping semantics. Additional aspects of the design of the <CODE>REAL</CODE> and <CODE><A HREF="math.html#MATH:SIG:SPEC">MATH</A></CODE> signatures were guided by the Floating-Point C Extensions<B>[CITE]</B> developed by the X3J11 ANSI committee and the lecture notes <B>[CITE]</B> by W. Kahan on the IEEE standard 754.
<P>
Although there can be many representations for NaN values, the Library models them as a single value and currently provides no explicit way to distinguish among them, ignoring the sign bit. Thus, in the descriptions below and in the <CODE><A HREF="math.html#Math:STR:SPEC">Math</A></CODE> structure, we just refer to the NaN value.
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;<A NAME="SIG:REAL.real:TY:SPEC" HREF="#SIG:REAL.real:TY">real</A><BR>
<BR>
<B>structure</B>&nbsp;Math&nbsp;<B>:</B>&nbsp;<A HREF="math.html#MATH:SIG:SPEC">MATH</A><BR>
&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;real&nbsp;=&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.radix:VAL:SPEC" HREF="#SIG:REAL.radix:VAL">radix</A>&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.precision:VAL:SPEC" HREF="#SIG:REAL.precision:VAL">precision</A>&nbsp;<B>:</B>&nbsp;int<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.maxFinite:VAL:SPEC" HREF="#SIG:REAL.maxFinite:VAL">maxFinite</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.minPos:VAL:SPEC" HREF="#SIG:REAL.minPos:VAL">minPos</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.minNormalPos:VAL:SPEC" HREF="#SIG:REAL.minNormalPos:VAL">minNormalPos</A>&nbsp;<B>:</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.posInf:VAL:SPEC" HREF="#SIG:REAL.posInf:VAL">posInf</A>&nbsp;<B>:</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.negInf:VAL:SPEC" HREF="#SIG:REAL.negInf:VAL">negInf</A>&nbsp;<B>:</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.+:VAL:SPEC" HREF="#SIG:REAL.+:VAL">+</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.-:VAL:SPEC" HREF="#SIG:REAL.-:VAL">-</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.*:VAL:SPEC" HREF="#SIG:REAL.*:VAL">*</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL./:VAL:SPEC" HREF="#SIG:REAL./:VAL">/</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.rem:VAL:SPEC" HREF="#SIG:REAL.rem:VAL">rem</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.*+:VAL:SPEC" HREF="#SIG:REAL.*+:VAL">*+</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.*-:VAL:SPEC" HREF="#SIG:REAL.*-:VAL">*-</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.~:VAL:SPEC" HREF="#SIG:REAL.~:VAL">~</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.abs:VAL:SPEC" HREF="#SIG:REAL.abs:VAL">abs</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.min:VAL:SPEC" HREF="#SIG:REAL.min:VAL">min</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.max:VAL:SPEC" HREF="#SIG:REAL.max:VAL">max</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.sign:VAL:SPEC" HREF="#SIG:REAL.sign:VAL">sign</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.signBit:VAL:SPEC" HREF="#SIG:REAL.signBit:VAL">signBit</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.sameSign:VAL:SPEC" HREF="#SIG:REAL.sameSign:VAL">sameSign</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.copySign:VAL:SPEC" HREF="#SIG:REAL.copySign:VAL">copySign</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.compare:VAL:SPEC" HREF="#SIG:REAL.compare:VAL">compare</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;order<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.compareReal:VAL:SPEC" HREF="#SIG:REAL.compareReal:VAL">compareReal</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;IEEEReal.real_order<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.\|@LT\|:VAL:SPEC" HREF="#SIG:REAL.\|@LT\|:VAL">&lt;</A>&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.\|@LTE\|:VAL:SPEC" HREF="#SIG:REAL.\|@LTE\|:VAL">&lt;=</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.\|@GT\|:VAL:SPEC" HREF="#SIG:REAL.\|@GT\|:VAL">&gt;</A>&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.\|@GTE\|:VAL:SPEC" HREF="#SIG:REAL.\|@GTE\|:VAL">&gt;=</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.==:VAL:SPEC" HREF="#SIG:REAL.==:VAL">==</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.!=:VAL:SPEC" HREF="#SIG:REAL.!=:VAL">!=</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.?=:VAL:SPEC" HREF="#SIG:REAL.?=:VAL">?=</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.unordered:VAL:SPEC" HREF="#SIG:REAL.unordered:VAL">unordered</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.isFinite:VAL:SPEC" HREF="#SIG:REAL.isFinite:VAL">isFinite</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.isNan:VAL:SPEC" HREF="#SIG:REAL.isNan:VAL">isNan</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.isNormal:VAL:SPEC" HREF="#SIG:REAL.isNormal:VAL">isNormal</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.class:VAL:SPEC" HREF="#SIG:REAL.class:VAL">class</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;IEEEReal.float_class<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.toManExp:VAL:SPEC" HREF="#SIG:REAL.toManExp:VAL">toManExp</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;{man&nbsp;<B>:</B>&nbsp;real,&nbsp;exp&nbsp;<B>:</B>&nbsp;int}<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fromManExp:VAL:SPEC" HREF="#SIG:REAL.fromManExp:VAL">fromManExp</A>&nbsp;<B>:</B>&nbsp;{man&nbsp;<B>:</B>&nbsp;real,&nbsp;exp&nbsp;<B>:</B>&nbsp;int}&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.split:VAL:SPEC" HREF="#SIG:REAL.split:VAL">split</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;{whole&nbsp;<B>:</B>&nbsp;real,&nbsp;frac&nbsp;<B>:</B>&nbsp;real}<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.realMod:VAL:SPEC" HREF="#SIG:REAL.realMod:VAL">realMod</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.nextAfter:VAL:SPEC" HREF="#SIG:REAL.nextAfter:VAL">nextAfter</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.checkFloat:VAL:SPEC" HREF="#SIG:REAL.checkFloat:VAL">checkFloat</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.realFloor:VAL:SPEC" HREF="#SIG:REAL.realFloor:VAL">realFloor</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.realCeil:VAL:SPEC" HREF="#SIG:REAL.realCeil:VAL">realCeil</A>&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.realTrunc:VAL:SPEC" HREF="#SIG:REAL.realTrunc:VAL">realTrunc</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.realRound:VAL:SPEC" HREF="#SIG:REAL.realRound:VAL">realRound</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.floor:VAL:SPEC" HREF="#SIG:REAL.floor:VAL">floor</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.ceil:VAL:SPEC" HREF="#SIG:REAL.ceil:VAL">ceil</A>&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.trunc:VAL:SPEC" HREF="#SIG:REAL.trunc:VAL">trunc</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.round:VAL:SPEC" HREF="#SIG:REAL.round:VAL">round</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.toInt:VAL:SPEC" HREF="#SIG:REAL.toInt:VAL">toInt</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;IEEEReal.rounding_mode&nbsp;<B>-&gt;</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.toLargeInt:VAL:SPEC" HREF="#SIG:REAL.toLargeInt:VAL">toLargeInt</A>&nbsp;<B>:</B>&nbsp;IEEEReal.rounding_mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;LargeInt.int<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fromInt:VAL:SPEC" HREF="#SIG:REAL.fromInt:VAL">fromInt</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fromLargeInt:VAL:SPEC" HREF="#SIG:REAL.fromLargeInt:VAL">fromLargeInt</A>&nbsp;<B>:</B>&nbsp;LargeInt.int&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.toLarge:VAL:SPEC" HREF="#SIG:REAL.toLarge:VAL">toLarge</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;LargeReal.real<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fromLarge:VAL:SPEC" HREF="#SIG:REAL.fromLarge:VAL">fromLarge</A>&nbsp;<B>:</B>&nbsp;IEEEReal.rounding_mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;LargeReal.real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fmt:VAL:SPEC" HREF="#SIG:REAL.fmt:VAL">fmt</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;StringCvt.realfmt&nbsp;<B>-&gt;</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.toString:VAL:SPEC" HREF="#SIG:REAL.toString:VAL">toString</A>&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.scan:VAL:SPEC" HREF="#SIG:REAL.scan:VAL">scan</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;(char,&nbsp;<I>'a</I>)&nbsp;StringCvt.reader<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(real,&nbsp;<I>'a</I>)&nbsp;StringCvt.reader<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fromString:VAL:SPEC" HREF="#SIG:REAL.fromString:VAL">fromString</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;real&nbsp;option<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.toDecimal:VAL:SPEC" HREF="#SIG:REAL.toDecimal:VAL">toDecimal</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;IEEEReal.decimal_approx<BR>
<B>val</B>&nbsp;<A NAME="SIG:REAL.fromDecimal:VAL:SPEC" HREF="#SIG:REAL.fromDecimal:VAL">fromDecimal</A>&nbsp;<B>:</B>&nbsp;IEEEReal.decimal_approx&nbsp;<B>-&gt;</B>&nbsp;real&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:REAL.real:TY"></A><CODE><B>type</B>&nbsp;real</CODE>
<DD>
        Note that, as discussed below, <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> is not an equality  type. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.radix:VAL"></A><CODE><B>val</B>&nbsp;radix&nbsp;<B>:</B>&nbsp;int</CODE>
<DD>
          The base of the representation, <I>e.g.</I>, 2 or 10 for IEEE floating point. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.precision:VAL"></A><CODE><B>val</B>&nbsp;precision&nbsp;<B>:</B>&nbsp;int</CODE>
<DD>
          The number of digits, each between <CODE>0</CODE> and <CODE><CODE><A HREF="real.html#SIG:REAL.radix:VAL:SPEC">radix</A></CODE>-1</CODE>, in the mantissa.  Note that the precision includes the implicit (or hidden) bit  used in the IEEE representation (<I>e.g.</I>, the value of  <CODE>Real64.precision</CODE> is <CODE>53</CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.maxFinite:VAL"></A><CODE><B>val</B>&nbsp;maxFinite&nbsp;<B>:</B>&nbsp;real<BR>
<B>val</B>&nbsp;minPos&nbsp;<B>:</B>&nbsp;real<BR>
<B>val</B>&nbsp;minNormalPos&nbsp;<B>:</B>&nbsp;real</CODE>
<DD>
          The maximum finite number, the minimum non-zero positive number, and the minimum non-zero normalized number, respectively. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.posInf:VAL"></A><CODE><B>val</B>&nbsp;posInf&nbsp;<B>:</B>&nbsp;real<BR>
<B>val</B>&nbsp;negInf&nbsp;<B>:</B>&nbsp;real</CODE>
<DD>
        Positive and negative infinity values. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.+:VAL"></A>
<DT> <CODE><VAR>r1</VAR> + <VAR>r2</VAR> </CODE>
<DT> <CODE>          <VAR>r1</VAR> - <VAR>r2</VAR> </CODE>
<DD>
These denote the sum and difference of <VAR>r1</VAR> and <VAR>r2</VAR>. If one argument is finite and the other infinite, the result is infinite with the correct sign, <I>e.g.</I>, 5 - (-infinity) = infinity. We also have infinity + infinity = infinity and (-infinity) + (-infinity) = (-infinity). Any other combination of two infinities produces NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.*:VAL"></A>
<DT> <CODE><VAR>r1</VAR> * <VAR>r2</VAR> </CODE>
<DD>
denotes the product of <VAR>r1</VAR> and <VAR>r2</VAR>. The product of zero and an infinity produces NaN. Otherwise, if one argument is infinite, the result is infinite with the correct sign, <I>e.g.</I>, -5 * (-infinity) = infinity, infinity * (-infinity) = -infinity. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL./:VAL"></A>
<DT> <CODE><VAR>r1</VAR> / <VAR>r2</VAR> </CODE>
<DD>
denotes the quotient of <VAR>r1</VAR> and <VAR>r2</VAR>. We have 0 / 0 = <CODE>NaN</CODE> and +-infinity / +-infinity = <CODE>NaN</CODE>. Dividing a finite, non-zero number by a zero, or an infinity by a finite number produces an infinity with the correct sign. (Note that zeros are signed.) A finite number divided by an infinity is 0 with the correct sign. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.rem:VAL"></A>
<DT> <CODE>rem (<VAR>x</VAR>, <VAR>y</VAR>) </CODE>
<DD>
returns the remainder <VAR>x</VAR> - <VAR>n</VAR>*<VAR>y</VAR>, where <VAR>n</VAR> = <CODE>trunc</CODE> (<VAR>x</VAR> / <VAR>y</VAR>). The result has the same sign as <VAR>x</VAR> and has absolute value less than the absolute value of <VAR>y</VAR>. 
<P>
          If <VAR>x</VAR> is an infinity or <VAR>y</VAR> is 0, <CODE><A HREF="real.html#SIG:REAL.rem:VAL:SPEC">rem</A></CODE> returns NaN. If <VAR>y</VAR> is an infinity, <CODE><A HREF="real.html#SIG:REAL.rem:VAL:SPEC">rem</A></CODE> returns <VAR>x</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.*+:VAL"></A>
<DT> <CODE>*+ (<VAR>a</VAR>, <VAR>b</VAR>, <VAR>c</VAR>) </CODE>
<DT> <CODE>          *- (<VAR>a</VAR>, <VAR>b</VAR>, <VAR>c</VAR>) </CODE>
<DD>
These return <CODE><VAR>a</VAR>*<VAR>b</VAR> + <VAR>c</VAR></CODE> and <CODE><VAR>a</VAR>*<VAR>b</VAR> - <VAR>c</VAR></CODE>, respectively. Their behaviors on infinities follow from the behaviors derived from addition, subtraction, and multiplication. 
<P>
          The precise semantics of these operations depend on the language implementation and the underlying hardware. Specifically, certain architectures provide these operations as a single instruction, possibly using a single rounding operation. Thus, the use of these operations may be faster than performing the individual arithmetic operations sequentially, but may also cause different rounding behavior. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.~:VAL"></A>
<DT> <CODE>~ <VAR>r</VAR> </CODE>
<DD>
produces the negation of <VAR>r</VAR>. <CODE>~</CODE> (+-infinity) = -+infinity. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.abs:VAL"></A>
<DT> <CODE>abs <VAR>r</VAR> </CODE>
<DD>
returns the absolute value |<VAR>r</VAR>| of <VAR>r</VAR>. 
<BLOCKQUOTE>
<CODE>abs</CODE> (+-0.0) = +0.0 <CODE>abs</CODE> (+-infinity) = +infinity <CODE>abs</CODE> (+-NaN) = +NaN
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.min:VAL"></A><CODE><B>val</B>&nbsp;min&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real<BR>
<B>val</B>&nbsp;max&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;real</CODE>
<DD>
 These return the smaller (respectively, larger) of the arguments. If exactly one argument is NaN, they return the other argument. If both arguments are NaN, they return NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.sign:VAL"></A>
<DT> <CODE>sign <VAR>r</VAR> </CODE>
<DD>
returns ~1 if <VAR>r</VAR> is negative, 0 if <VAR>r</VAR> is zero, or  1 if <VAR>r</VAR> is positive. An infinity returns its sign; a zero returns 0 regardless of its sign. It raises <CODE><A HREF="general.html#SIG:GENERAL.Domain:EXN:SPEC">Domain</A></CODE> on NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.signBit:VAL"></A>
<DT> <CODE>signBit <VAR>r</VAR> </CODE>
<DD>
returns <CODE>true</CODE> if and only if the sign of <VAR>r</VAR> (infinities, zeros, and NaN, included) is negative. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.sameSign:VAL"></A>
<DT> <CODE>sameSign (<VAR>r1</VAR>, <VAR>r2</VAR>) </CODE>
<DD>
returns <CODE>true</CODE> if and only if <CODE><CODE><A HREF="real.html#SIG:REAL.signBit:VAL:SPEC">signBit</A></CODE> <VAR>r1</VAR></CODE> equals <CODE><CODE><A HREF="real.html#SIG:REAL.signBit:VAL:SPEC">signBit</A></CODE> <VAR>r2</VAR></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.copySign:VAL"></A>
<DT> <CODE>copySign (<VAR>x</VAR>, <VAR>y</VAR>) </CODE>
<DD>
returns <VAR>x</VAR> with the sign of <VAR>y</VAR>, even if <VAR>y</VAR> is NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.compare:VAL"></A><CODE><B>val</B>&nbsp;compare&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;order<BR>
<B>val</B>&nbsp;compareReal&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;IEEEReal.real_order</CODE>
<DD>
          The function <CODE><A HREF="real.html#SIG:REAL.compare:VAL:SPEC">compare</A></CODE> returns  <CODE><A HREF="general.html#SIG:GENERAL.order:TY:SPEC">LESS</A></CODE>, <CODE><A HREF="general.html#SIG:GENERAL.order:TY:SPEC">EQUAL</A></CODE>, or  <CODE><A HREF="general.html#SIG:GENERAL.order:TY:SPEC">GREATER</A></CODE> according to whether its first argument is less than, equal to, or greater than the second. It raises <CODE><A HREF="ieee-float.html#SIG:IEEE_REAL.Unordered:EXN:SPEC">IEEEReal.Unordered</A></CODE> on unordered arguments. 
<P>
          The function <CODE><A HREF="real.html#SIG:REAL.compareReal:VAL:SPEC">compareReal</A></CODE> behaves similarly except that the values it returns have the extended type <CODE><A HREF="ieee-float.html#SIG:IEEE_REAL.real_order:TY:SPEC">IEEEReal.real_order</A></CODE> and it returns <CODE><A HREF="ieee-float.html#SIG:IEEE_REAL.real_order:TY:SPEC">IEEEReal.UNORDERED</A></CODE> on unordered arguments. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
Implementations should try to optimize use of <CODE>compare</CODE>, since it is necessary for catching NaNs.
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.\|@LT\|:VAL"></A><CODE><B>val</B>&nbsp;&lt;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;&lt;=&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;&gt;&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;&gt;=&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
          These return <CODE>true</CODE> if the corresponding relation holds between the two reals. 
<P>
          Note that these operators return <CODE>false</CODE> on unordered arguments, <I>i.e.</I>, if either argument is NaN, so that the usual reversal of comparison under negation does not hold, <I>e.g.</I>, <CODE>a &lt; b</CODE> is not the same as <CODE>not (a &gt;= b)</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.==:VAL"></A>
<DT> <CODE>== (<VAR>x</VAR>, <VAR>y</VAR>) </CODE>
<DT> <CODE>          != (<VAR>x</VAR>, <VAR>y</VAR>) </CODE>
<DD>
The first returns <CODE>true</CODE> if and only if neither <VAR>y</VAR> nor <VAR>x</VAR> is NaN, and <VAR>y</VAR> and <VAR>x</VAR> are equal, ignoring signs on zeros. This is equivalent to the IEEE <CODE>=</CODE> operator. 
<P>
          The second function <CODE>!=</CODE> is equivalent to <CODE>not o op ==</CODE> and the IEEE <CODE>?&lt;&gt;</CODE> operator. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.?=:VAL"></A><CODE><B>val</B>&nbsp;?=&nbsp;<B>:</B>&nbsp;real&nbsp;<B>*</B>&nbsp;real&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
          This returns <CODE>true</CODE> if either argument is NaN or if the arguments are bitwise equal, ignoring signs on zeros. It is equivalent to the IEEE <CODE>?=</CODE> operator. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.unordered:VAL"></A>
<DT> <CODE>unordered (<VAR>x</VAR>, <VAR>y</VAR>) </CODE>
<DD>
returns <CODE>true</CODE> if <VAR>x</VAR> and <VAR>y</VAR> are unordered, <I>i.e.</I>, at least one of <VAR>x</VAR> and <VAR>y</VAR> is NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.isFinite:VAL"></A>
<DT> <CODE>isFinite <VAR>x</VAR> </CODE>
<DD>
returns <CODE>true</CODE> if <VAR>x</VAR> is neither NaN nor an infinity. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.isNan:VAL"></A>
<DT> <CODE>isNan <VAR>x</VAR> </CODE>
<DD>
returns <CODE>true</CODE> if <VAR>x</VAR> is NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.isNormal:VAL"></A>
<DT> <CODE>isNormal <VAR>x</VAR> </CODE>
<DD>
returns <CODE>true</CODE> if <VAR>x</VAR> is normal, <I>i.e.</I>, neither zero, subnormal, infinite nor NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.class:VAL"></A>
<DT> <CODE>class <VAR>x</VAR> </CODE>
<DD>
returns the <CODE><A HREF="ieee-float.html#SIG:IEEE_REAL.float_class:TY:SPEC">IEEEReal.float_class</A></CODE> to which <VAR>x</VAR> belongs. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.toManExp:VAL"></A>
<DT> <CODE>toManExp <VAR>r</VAR> </CODE>
<DD>
returns <CODE>{<VAR>man</VAR>, <VAR>exp</VAR>}</CODE>, where <VAR>man</VAR> and <VAR>exp</VAR> are the mantissa and exponent of <VAR>r</VAR>, respectively. Specifically, we have the relation 
<BLOCKQUOTE>
          <VAR>r</VAR> = <VAR>man</VAR> * <CODE>radix</CODE><SUP>(<VAR>exp</VAR>)</SUP> 
</BLOCKQUOTE>
 where 1.0 &lt;= <VAR>man</VAR> * <VAR>radix</VAR> &lt; <VAR>radix</VAR>. This function is comparable to <CODE>frexp</CODE> in the C library. 
<P>
          If <VAR>r</VAR> is +-0, <VAR>man</VAR> is +-0 and <VAR>exp</VAR> is +0. If <VAR>r</VAR> is +-infinity, <VAR>man</VAR> is +-infinity and <VAR>exp</VAR> is unspecified. If <VAR>r</VAR> is NaN, <VAR>man</VAR> is NaN and <VAR>exp</VAR> is unspecified. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.fromManExp:VAL"></A>
<DT> <CODE>fromManExp {<VAR>man</VAR>, <VAR>exp</VAR>} </CODE>
<DD>
returns <VAR>man</VAR> * <CODE>radix</CODE><SUP>(<VAR>exp</VAR>)</SUP>. This function is comparable to <CODE>ldexp</CODE> in the C library. Note that, even if <VAR>man</VAR> is a non-zero, finite real value, the result of <CODE><A HREF="real.html#SIG:REAL.fromManExp:VAL:SPEC">fromManExp</A></CODE> can be zero or infinity because of underflows and overflows. 
<P>
          If <VAR>man</VAR> is +-0, the result is +-0. If <VAR>man</VAR> is +-infinity, the result is +-infinity. If <VAR>man</VAR> is NaN, the result is NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.split:VAL"></A>
<DT> <CODE>split <VAR>r</VAR> </CODE>
<DT> <CODE>          realMod <VAR>r</VAR> </CODE>
<DD>
The former returns <CODE>{<VAR>whole</VAR>, <VAR>frac</VAR>}</CODE>, where <VAR>frac</VAR> and <VAR>whole</VAR> are the fractional and integral parts of <VAR>r</VAR>, respectively. Specifically, <VAR>whole</VAR> is integral, |<VAR>frac</VAR>| &lt; 1.0, <VAR>whole</VAR> and <VAR>frac</VAR> have the same sign as <VAR>r</VAR>, and <VAR>r</VAR> = <VAR>whole</VAR> + <VAR>frac</VAR>. This function is comparable to <CODE>modf</CODE> in the C library. 
<P>
          If <VAR>r</VAR> is +-infinity, <VAR>whole</VAR> is +-infinity and <VAR>frac</VAR> is +-0. If <VAR>r</VAR> is NaN, both <VAR>whole</VAR> and <VAR>frac</VAR> are NaN. 
<P>
          <CODE>realMod</CODE> is equivalent to <CODE>#frac o split</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.nextAfter:VAL"></A>
<DT> <CODE>nextAfter (<VAR>r</VAR>, <VAR>t</VAR>) </CODE>
<DD>
returns the next representable real after <VAR>r</VAR> in the direction of <VAR>t</VAR>. Thus, if <VAR>t</VAR> is less  than  <VAR>r</VAR>,  <CODE><A HREF="real.html#SIG:REAL.nextAfter:VAL:SPEC">nextAfter</A></CODE> returns the largest representable floating-point number less than <VAR>r</VAR>. If <CODE><VAR>r</VAR> = <VAR>t</VAR></CODE> then it returns <VAR>r</VAR>. If either argument is NaN, this returns NaN. If <VAR>r</VAR> is +-infinity, it returns +-infinity. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.checkFloat:VAL"></A>
<DT> <CODE>checkFloat <VAR>x</VAR> </CODE>
<DD>
raises <CODE><A HREF="general.html#SIG:GENERAL.Overflow:EXN:SPEC">Overflow</A></CODE> if <VAR>x</VAR> is an infinity,  and raises <CODE><A HREF="general.html#SIG:GENERAL.Div:EXN:SPEC">Div</A></CODE> if <VAR>x</VAR> is NaN.  Otherwise, it returns its argument. 
<P>
          This can be used to synthesize trapping arithmetic from the non-trapping operations given here. Note, however, that infinities can be converted to NaNs by some operations, so that if accurate exceptions are required, checks must be done after each operation. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.realFloor:VAL"></A>
<DT> <CODE>realFloor <VAR>r</VAR> </CODE>
<DT> <CODE>          realCeil <VAR>r</VAR> </CODE>
<DT> <CODE>          realTrunc <VAR>r</VAR> </CODE>
<DT> <CODE>          realRound <VAR>r</VAR> </CODE>
<DD>
These functions convert real values to integer-valued reals. <CODE><A HREF="real.html#SIG:REAL.realFloor:VAL:SPEC">realFloor</A></CODE> produces <B>floor</B>(r), the largest integer not larger than <VAR>r</VAR>. <CODE><A HREF="real.html#SIG:REAL.realCeil:VAL:SPEC">realCeil</A></CODE> produces <B>ceil</B>(r), the smallest integer not less than <VAR>r</VAR>. <CODE><A HREF="real.html#SIG:REAL.realTrunc:VAL:SPEC">realTrunc</A></CODE> rounds <VAR>r</VAR> towards zero, and  <CODE><A HREF="real.html#SIG:REAL.realRound:VAL:SPEC">realRound</A></CODE> rounds to the integer-values real value that  is <EM>nearest</EM> to <VAR>r</VAR>. If <VAR>r</VAR> is NaN or an infinity, these functions return <VAR>r</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.floor:VAL"></A>
<DT> <CODE>floor <VAR>r</VAR> </CODE>
<DT> <CODE>          ceil <VAR>r</VAR> </CODE>
<DT> <CODE>          trunc <VAR>r</VAR> </CODE>
<DT> <CODE>          round <VAR>r</VAR> </CODE>
<DD>
These functions convert reals to integers. <CODE><A HREF="real.html#SIG:REAL.floor:VAL:SPEC">floor</A></CODE> produces <B>floor</B>(r), the largest <CODE><A HREF="integer.html#SIG:INTEGER.int:TY:SPEC">int</A></CODE> not larger than <VAR>r</VAR>. <CODE><A HREF="real.html#SIG:REAL.ceil:VAL:SPEC">ceil</A></CODE> produces <B>ceil</B>(r), the smallest <CODE><A HREF="integer.html#SIG:INTEGER.int:TY:SPEC">int</A></CODE> not less than <VAR>r</VAR>. <CODE><A HREF="real.html#SIG:REAL.trunc:VAL:SPEC">trunc</A></CODE> rounds <VAR>r</VAR> towards zero. <CODE><A HREF="real.html#SIG:REAL.round:VAL:SPEC">round</A></CODE> yields the integer nearest to <VAR>r</VAR>.  In the case of a tie, it rounds to the nearest even integer. They raise <CODE><A HREF="general.html#SIG:GENERAL.Overflow:EXN:SPEC">Overflow</A></CODE> if the resulting value cannot be represented as an <CODE><A HREF="integer.html#SIG:INTEGER.int:TY:SPEC">int</A></CODE>, for example, on infinity. They raise <CODE><A HREF="general.html#SIG:GENERAL.Domain:EXN:SPEC">Domain</A></CODE> on NaN arguments. 
<P>
          These are respectively equivalent to: 
<PRE>
toInt IEEEReal.TO_NEGINF r
toInt IEEEReal.TO_POSINF r
toInt IEEEReal.TO_ZERO r
toInt IEEEReal.TO_NEAREST r
</PRE>
 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.toInt:VAL"></A>
<DT> <CODE>toInt <VAR>mode</VAR> <VAR>x</VAR> </CODE>
<DT> <CODE>          toLargeInt <VAR>mode</VAR> <VAR>x</VAR> </CODE>
<DD>
These functions convert the argument <VAR>x</VAR> to an integral type using the specified rounding mode. They raise <CODE><A HREF="general.html#SIG:GENERAL.Overflow:EXN:SPEC">Overflow</A></CODE> if the result is not representable, in particular, if <VAR>x</VAR> is an infinity. They raise <CODE><A HREF="general.html#SIG:GENERAL.Domain:EXN:SPEC">Domain</A></CODE> if the input real is NaN. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.fromInt:VAL"></A>
<DT> <CODE>fromInt <VAR>i</VAR> </CODE>
<DT> <CODE>          fromLargeInt <VAR>i</VAR> </CODE>
<DD>
These functions convert the integer <VAR>i</VAR> to a <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> value.  If the absolute value of <VAR>i</VAR> is larger than <CODE><A HREF="real.html#SIG:REAL.maxFinite:VAL:SPEC">maxFinite</A></CODE>,  then the appropriate infinity is returned.  If <VAR>i</VAR> cannot be exactly represented as a <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> value,  then the current rounding mode is used to determine the resulting  value.  The top-level function <CODE>real</CODE> is an alias for  <CODE><A HREF="real.html#SIG:REAL.fromInt:VAL:SPEC">Real.fromInt</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.toLarge:VAL"></A>
<DT> <CODE>toLarge <VAR>r</VAR> </CODE>
<DT> <CODE>          fromLarge <VAR>r</VAR> </CODE>
<DD>
These convert between values of type <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> and type  <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">LargeReal.real</A></CODE>. If <VAR>r</VAR> is too small or too large to be represented as a <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE>, <CODE><A HREF="real.html#SIG:REAL.fromLarge:VAL:SPEC">fromLarge</A></CODE> will convert it to a zero or an infinity. 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.fmt:VAL"></A>
<DT> <CODE>fmt <VAR>spec</VAR> <VAR>r</VAR> </CODE>
<DT> <CODE>          toString <VAR>r</VAR> </CODE>
<DD>
These functions convert reals into strings. The conversion provided by the function <CODE><A HREF="real.html#SIG:REAL.fmt:VAL:SPEC">fmt</A></CODE> is parameterized  by <VAR>spec</VAR>, which has the following forms and interpretations. 
<DL>
<DT> <CODE>SCI <VAR>arg</VAR></CODE>
<DD>
Scientific notation: 
<BLOCKQUOTE>
[<TT>~</TT>]<SUP>?</SUP>[<TT>0</TT>-<TT>9</TT>]<TT>.</TT>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP><SUP>?</SUP><TT>E</TT>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP>
</BLOCKQUOTE>
 where there is always one digit before the decimal point, nonzero if the number is nonzero.  <VAR>arg</VAR> specifies the number of digits to appear after the decimal point, with 6 the default if <VAR>arg</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. If <VAR>arg</VAR> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(0)</CODE>, no fractional digits and no decimal point are printed. 
<DT> <CODE>FIX <VAR>arg</VAR></CODE>
<DD>
Fixed-point notation: 
<BLOCKQUOTE>
[<TT>~</TT>]<SUP>?</SUP>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP><TT>.</TT>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP><SUP>?</SUP>
</BLOCKQUOTE>
 <VAR>arg</VAR> specifies the number of digits to appear after the decimal point, with 6 the default if <VAR>arg</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. If <VAR>arg</VAR> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(0)</CODE>, no fractional digits and no decimal point are printed. 
<DT> <CODE>GEN <VAR>arg</VAR></CODE>
<DD>
Adaptive notation: the notation used is either scientific or fixed-point depending on the value converted. <VAR>arg</VAR> specifies the maximum number of significant digits used, with 12 the default if <VAR>arg</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. 
<DT> <CODE>EXACT</CODE>
<DD>
Exact decimal notation: refer to <CODE><A HREF="ieee-float.html#SIG:IEEE_REAL.toString:VAL:SPEC">IEEEReal.toString</A></CODE> for a complete description of this format.
</DL>
 In all cases, positive and negative infinities are converted to <CODE>&quot;inf&quot;</CODE> and <CODE>&quot;~inf&quot;</CODE>, respectively, and NaN values are converted to the string <TT>&quot;nan&quot;</TT>. 
<P>
Refer to <CODE><A HREF="string-cvt.html#SIG:STRING_CVT.realfmt:TY:SPEC">StringCvt.realfmt</A></CODE> for more details concerning these formats, especially the adaptive format <CODE>GEN</CODE>. 
<P>
          <CODE><A HREF="real.html#SIG:REAL.fmt:VAL:SPEC">fmt</A></CODE> raises <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> if <VAR>spec</VAR> is an invalid precision, <I>i.e.</I>, if <VAR>spec</VAR> is  
<UL>
<LI>
<CODE><CODE><A HREF="string-cvt.html#SIG:STRING_CVT.realfmt:TY:SPEC">SCI</A></CODE> (<CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> <VAR>i</VAR>)</CODE> with <VAR>i</VAR> &lt; 0
<LI>
<CODE><CODE><A HREF="string-cvt.html#SIG:STRING_CVT.realfmt:TY:SPEC">FIX</A></CODE> (<CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> <VAR>i</VAR>)</CODE> with <VAR>i</VAR> &lt; 0
<LI>
<CODE><CODE><A HREF="string-cvt.html#SIG:STRING_CVT.realfmt:TY:SPEC">GEN</A></CODE> (<CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> <VAR>i</VAR>)</CODE> with <VAR>i</VAR> &lt; 1
</UL>
 The exception should be raised when <CODE>fmt <VAR>spec</VAR></CODE> is evaluated.  
<P>
The <CODE><A HREF="real.html#SIG:REAL.fmt:VAL:SPEC">fmt</A></CODE> function allows the user precise control as to the form of the resulting string. Note, therefore, that it is possible for <CODE><A HREF="real.html#SIG:REAL.fmt:VAL:SPEC">fmt</A></CODE> to produce a result that is not a valid SML string representation of a real value.  
<P>
          The value returned by <CODE><A HREF="real.html#SIG:REAL.toString:VAL:SPEC">toString</A></CODE> is equivalent to:  
<PRE>
(<A HREF="real.html#SIG:REAL.fmt:VAL:SPEC">fmt</A> (<A HREF="string-cvt.html#SIG:STRING_CVT.realfmt:TY:SPEC">StringCvt.GEN</A> <A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A>) <VAR>r</VAR>)
</PRE>
 
<BR>
<BR>

<DT> <A NAME="SIG:REAL.scan:VAL"></A>
<DT> <CODE>scan <VAR>getc</VAR> <VAR>strm</VAR> </CODE>
<DT> <CODE>          fromString <VAR>s</VAR> </CODE>
<DD>
These functions scan a <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> value from character source. The first version reads from ARG/strm/ using reader <VAR>getc</VAR>, ignoring initial whitespace. It returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>r</VAR>,<VAR>rest</VAR>)</CODE>  if successful, where <VAR>r</VAR> is the scanned <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> value and <VAR>rest</VAR> is the unused portion of the character stream <VAR>strm</VAR>. Values of too large a magnitude are represented as infinities; values of too small a magnitude are represented as zeros. 
<P>
      The second version  returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>r</VAR>)</CODE> if a <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> value can be scanned from a prefix of <VAR>s</VAR>,  ignoring any initial whitespace; otherwise, it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. This function is equivalent to <CODE><CODE><A HREF="string-cvt.html#SIG:STRING_CVT.scanString:VAL:SPEC">StringCvt.scanString</A></CODE> scan</CODE>. 
<P>
      The functions accept real numbers with the following format: 
<BLOCKQUOTE>
[<TT>+~-</TT>]<SUP>?</SUP>([<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP><TT>.</TT>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP><SUP>?</SUP>&nbsp;|&nbsp;<TT>.</TT>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP>)(<TT>e</TT>&nbsp;|&nbsp;<TT>E</TT>)[<TT>+~-</TT>]<SUP>?</SUP>[<TT>0</TT>-<TT>9</TT>]<SUP>+</SUP><SUP>?</SUP>
</BLOCKQUOTE>
 It also accepts the following string representations of non-finite values: 
<BLOCKQUOTE>
[<TT>+~-</TT>]<SUP>?</SUP>(<TT>inf</TT>&nbsp;|&nbsp;<TT>infinity</TT>&nbsp;|&nbsp;<TT>nan</TT>)
</BLOCKQUOTE>
 where the alphabetic characters are case-insensitive.  
<BR>
<BR>

<DT> <A NAME="SIG:REAL.toDecimal:VAL"></A>
<DT> <CODE>toDecimal <VAR>r</VAR> </CODE>
<DT> <CODE>          fromDecimal <VAR>d</VAR> </CODE>
<DD>
These convert between <CODE><A HREF="real.html#SIG:REAL.real:TY:SPEC">real</A></CODE> values and decimal approximations. Decimal approximations are to be converted using the <CODE><A HREF="ieee-float.html#SIG:IEEE_REAL.rounding_mode:TY:SPEC">IEEEReal.TO_NEAREST</A></CODE> rounding mode. <CODE>toDecimal</CODE> should produce only as many digits as are necessary for <CODE>fromDecimal</CODE> to convert back to the same number. In particular, for any normal or subnormal real value <VAR>r</VAR>, we have the bit-wise equality: 
<PRE>
fromDecimal (toDecimal <VAR>r</VAR>) = <VAR>r</VAR>.
</PRE>
<P>
For <CODE>toDecimal</CODE>, when the <VAR>r</VAR> is not normal or subnormal, then the <CODE>exp</CODE> field is set to 0 and the <CODE>digits</CODE> field is the empty list. In all cases, the <CODE>sign</CODE> and <CODE>class</CODE> field capture the sign and class of <VAR>r</VAR>.
<P>
For <CODE>fromDecimal</CODE>, if <CODE>class</CODE> is <CODE>ZERO</CODE> or <CODE>INF</CODE>, the resulting real is the appropriate signed zero or infinity. If <CODE>class</CODE> is <CODE>NAN</CODE>, a signed NaN is generated. If <CODE>class</CODE> is <CODE>NORMAL</CODE> or <CODE>SUBNORMAL</CODE>, the <CODE>sign</CODE>, <CODE>digits</CODE> and <CODE>exp</CODE> fields are used to produce a real number whose value is.  
<BLOCKQUOTE>
s * 0.d<SUB>(1)</SUB>d<SUB>(2)</SUB>...d<SUB>(n)</SUB> 10<SUP>(exp)</SUP>
</BLOCKQUOTE>
 where <CODE>digits</CODE> = [d<SUB>(1)</SUB>, d<SUB>(2)</SUB>, ..., d<SUB>(n)</SUB>] and where s is -1 if <CODE>sign</CODE> is <CODE>true</CODE> and 1 otherwise. Note that the conversion itself should ignore the <CODE>class</CODE> field, so that the resulting value might have class <CODE>NORMAL</CODE>, <CODE>SUBNORMAL</CODE>, <CODE>ZERO</CODE>, or <CODE>INF</CODE>. For example, if <CODE>digits</CODE> is empty or a list of all 0's, the result should be a signed zero. More generally, very large or small magnitudes are converted to infinities or zeros.
<P>
If the argument to <CODE>fromDecimal</CODE> does not have a valid format, <I>i.e.</I>, if the <CODE>digits</CODE> field contains integers outside the range [0,9], it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>.  
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
Algorithms for accurately and efficiently converting between binary and  decimal real representations are readily available, <I>e.g.</I>, see the  technical report by Gay<B>[CITE]</B>. 
</BLOCKQUOTE>
 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="ieee-float.html#IEEEReal:STR:SPEC">IEEEReal</A></CODE>, <CODE><A HREF="math.html#MATH:SIG:SPEC">MATH</A></CODE>, <CODE><A HREF="string-cvt.html#StringCvt:STR:SPEC">StringCvt</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
    If <CODE><A HREF="real.html#LargeReal:STR:SPEC">LargeReal</A></CODE> is not the same as <CODE><A HREF="real.html#Real:STR:SPEC">Real</A></CODE>, then there must be a structure <CODE><A HREF="real.html#Real{N}:STR:SPEC">Real<I>&lt;N&gt;</I></A></CODE> equal to <CODE><A HREF="real.html#LargeReal:STR:SPEC">LargeReal</A></CODE>.
<P>
The sign of a zero is ignored in all comparisons.
<P>
Unless specified otherwise, any operation involving NaN will return NaN.
<P>
Note that, if <VAR>x</VAR> is real, <CODE>~<VAR>x</VAR></CODE> is equivalent to <CODE>~(<VAR>x</VAR>)</CODE>, that is, it is identical to <VAR>x</VAR> but with its sign bit flipped. In particular, the literal <CODE>~0.0</CODE> is just <CODE>0.0</CODE> with its sign bit set. On the other hand, this might not be the same as <CODE>0.0-0.0</CODE>, in which rounding modes come into play.
<P>
Except for the <CODE>*+</CODE> and <CODE>*-</CODE> functions, arithmetic should be done in the exact precision specified by the <CODE><A HREF="real.html#SIG:REAL.precision:VAL:SPEC">precision</A></CODE> value. In particular, arithmetic must not be done in some extended precision and then rounded. 
<P>
The relation between the comparison predicates defined here and those defined by IEEE, ANSI C, and FORTRAN is specified in the following table. 
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=CENTER VALIGN=TOP>
<B>SML</B>
<TH ALIGN=CENTER VALIGN=TOP>
<B>IEEE</B>
<TH ALIGN=CENTER VALIGN=TOP>
<B>C</B>
<TH ALIGN=CENTER VALIGN=TOP>
<B>FORTRAN</B>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>==</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>==</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.EQ.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>!=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?&lt;&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>!=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.NE.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.LT.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.LE.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.GT.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&gt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&gt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&gt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.GE.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>!islessgreater</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.UE.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>not o ?=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>islessgreater</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.LG.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>unordered</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>isunordered</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>unordered</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>not o unordered</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>&lt;=&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>!isunordered</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.LEG.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>not o op &lt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?&gt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>! &lt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.UGE.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>not o op &lt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?&gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>! &lt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.UG.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>not o op &gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?&lt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>! &gt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.ULE.</TT>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>not o op &gt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>?&lt;</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>! &gt;=</TT>
<TD ALIGN=LEFT VALIGN=TOP>
<TT>.UL.</TT>
</TABLE>
</CENTER>
<HR>
 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
Implementations may choose to provide a debugging mode, in which NaNs and infinities are detected when they are generated.
</BLOCKQUOTE>
  
<BLOCKQUOTE>
<B>Rationale:</B><BR>

<P>
The specification of the default signature and structure for non-integer arithmetic, particularly concerning exceptional conditions, was the source of much debate, given the desire of supporting efficient floating-point modules. If we permit implementations to differ on whether or not, for example, to raise <CODE><A HREF="general.html#SIG:GENERAL.Div:EXN:SPEC">Div</A></CODE> on division by zero, the user really would not have a standard to program against. Portable code would require adopting the more conservative position of explicitly handling exceptions. A second alternative was to specify that functions in the  <CODE>Real</CODE> structure must raise exceptions, but that implementations so desiring could provide additional structures matching <CODE>REAL</CODE> with explicit floating-point semantics. This was rejected because it meant that the default <CODE>real</CODE> type would not be the same as a defined floating-point <CODE>real</CODE> type. This would give a second-class status to the latter, while providing the default real with worse performance and involving additional implementation complexity for little benefit.
<P>
Deciding if <CODE>real</CODE> should be an equality type, and if so, what should equality mean, was also problematic. IEEE specifies that the sign of zeros be ignored in comparisons, and that equality evaluate to false if either argument is NaN. These constraints are disturbing to the SML programmer. The former implies that <CODE>0 = ~0</CODE> is true while <CODE>r/0 = r/~0</CODE> is false. The latter implies such anomalies as <CODE>r = r</CODE> is false, or that, for a ref cell <CODE>rr</CODE>, we could have <CODE>rr = rr</CODE> but not have <CODE>!rr = !rr</CODE>. We accepted the unsigned comparison of zeros, but felt that the reflexive property of equality, structural equality, and the equivalence of <CODE>&lt;&gt;</CODE> and <CODE>not o =</CODE> ought to be preserved. Additional complications led to the decision to not have <CODE>real</CODE> be an equality type.
<P>
The type, signature, and structure identifiers <CODE>real</CODE>, <CODE>REAL</CODE>, and <CODE>Real</CODE>, although misnomers in light of the floating-point-specific nature of the modules, were retained for historical reasons.
</BLOCKQUOTE>
 
`
