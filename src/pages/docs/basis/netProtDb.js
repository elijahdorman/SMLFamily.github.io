var data = `


<H2><A NAME="section:0"></A>The <CODE>NetProtDB</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="NET_PROT_DB:SIG:SPEC"></A><CODE>NET_PROT_DB</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="NetProtDB:STR:SPEC"></A><CODE>NetProtDB</CODE><B> :> </B>NET_PROT_DB&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
This structure accesses the information contained in the network protocol data base. The data may be retrieved from a file, such as <CODE>/etc/protocols</CODE> on many Unix systems, or via the NIS protocols map. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;<A NAME="SIG:NET_PROT_DB.entry:TY:SPEC" HREF="#SIG:NET_PROT_DB.entry:TY">entry</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_PROT_DB.name:VAL:SPEC" HREF="#SIG:NET_PROT_DB.name:VAL">name</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_PROT_DB.aliases:VAL:SPEC" HREF="#SIG:NET_PROT_DB.aliases:VAL">aliases</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;list<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_PROT_DB.protocol:VAL:SPEC" HREF="#SIG:NET_PROT_DB.protocol:VAL">protocol</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_PROT_DB.getByName:VAL:SPEC" HREF="#SIG:NET_PROT_DB.getByName:VAL">getByName</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;entry&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_PROT_DB.getByNumber:VAL:SPEC" HREF="#SIG:NET_PROT_DB.getByNumber:VAL">getByNumber</A>&nbsp;<B>:</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;entry&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:NET_PROT_DB.entry:TY"></A><CODE><B>type</B>&nbsp;entry</CODE>
<DD>
The type of a network protocol data base entry. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_PROT_DB.name:VAL"></A>
<DT> <CODE>name <VAR>en</VAR> </CODE>
<DD>
returns the official name of the protocol described by entry <VAR>en</VAR> (<I>e.g.</I>, <CODE>&quot;ip&quot;</CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:NET_PROT_DB.aliases:VAL"></A>
<DT> <CODE>aliases <VAR>en</VAR> </CODE>
<DD>
returns the alias list of the protocol described by entry <VAR>en</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_PROT_DB.protocol:VAL"></A>
<DT> <CODE>protocol <VAR>en</VAR> </CODE>
<DD>
returns the protocol number of the protocol described by entry <VAR>en</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_PROT_DB.getByName:VAL"></A>
<DT> <CODE>getByName <VAR>s</VAR> </CODE>
<DD>
reads the network protocol data base for a protocol with name <VAR>s</VAR>. If successful, it returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(en)</CODE> where <CODE>en</CODE> is the corresponding data base entry; otherwise, it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_PROT_DB.getByNumber:VAL"></A>
<DT> <CODE>getByNumber <VAR>i</VAR> </CODE>
<DD>
reads the network protocol data base for a protocol with protocol number <VAR>i</VAR>. If successful, it returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(en)</CODE> where <CODE>en</CODE> is the corresponding data base entry; otherwise, it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="net-host-db.html#NetHostDB:STR:SPEC">NetHostDB</A></CODE>
</BLOCKQUOTE>


`
