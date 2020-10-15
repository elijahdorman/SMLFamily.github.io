var data = `

<H2><A NAME="section:0"></A>The <CODE>NetServDB</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="NET_SERV_DB:SIG:SPEC"></A><CODE>NET_SERV_DB</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="NetServDB:STR:SPEC"></A><CODE>NetServDB</CODE><B> :> </B>NET_SERV_DB&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
This structure accesses the information contained in the network services data base. This data may be retrieved from the file <CODE>/etc/services</CODE> on many Unix systems, or from some other data base.
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;<A NAME="SIG:NET_SERV_DB.entry:TY:SPEC" HREF="#SIG:NET_SERV_DB.entry:TY">entry</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_SERV_DB.name:VAL:SPEC" HREF="#SIG:NET_SERV_DB.name:VAL">name</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_SERV_DB.aliases:VAL:SPEC" HREF="#SIG:NET_SERV_DB.aliases:VAL">aliases</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;list<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_SERV_DB.port:VAL:SPEC" HREF="#SIG:NET_SERV_DB.port:VAL">port</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_SERV_DB.protocol:VAL:SPEC" HREF="#SIG:NET_SERV_DB.protocol:VAL">protocol</A>&nbsp;<B>:</B>&nbsp;entry&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_SERV_DB.getByName:VAL:SPEC" HREF="#SIG:NET_SERV_DB.getByName:VAL">getByName</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;string&nbsp;option&nbsp;<B>-&gt;</B>&nbsp;entry&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:NET_SERV_DB.getByPort:VAL:SPEC" HREF="#SIG:NET_SERV_DB.getByPort:VAL">getByPort</A>&nbsp;<B>:</B>&nbsp;int&nbsp;<B>*</B>&nbsp;string&nbsp;option&nbsp;<B>-&gt;</B>&nbsp;entry&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:NET_SERV_DB.entry:TY"></A><CODE><B>type</B>&nbsp;entry</CODE>
<DD>
 The abstract type of a network service database entry. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_SERV_DB.name:VAL"></A>
<DT> <CODE>name <VAR>ent</VAR> </CODE>
<DD>
returns the official name of the service described by entry <VAR>ent</VAR>  (<I>e.g.</I>, <CODE>&quot;ftp&quot;</CODE>, <CODE>&quot;telnet&quot;</CODE>, etc.). 
<BR>
<BR>

<DT> <A NAME="SIG:NET_SERV_DB.aliases:VAL"></A>
<DT> <CODE>aliases <VAR>ent</VAR> </CODE>
<DD>
returns the alias list of the service described by entry <VAR>ent</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_SERV_DB.port:VAL"></A>
<DT> <CODE>port <VAR>ent</VAR> </CODE>
<DD>
returns the port number of the service described by entry <VAR>ent</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_SERV_DB.protocol:VAL"></A>
<DT> <CODE>protocol <VAR>ent</VAR> </CODE>
<DD>
returns the name of the protocol to use for the service described by the  entry <VAR>ent</VAR> (<I>e.g.</I>, <CODE>&quot;tcp&quot;</CODE> or <CODE>&quot;udp&quot;</CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:NET_SERV_DB.getByName:VAL"></A>
<DT> <CODE>getByName (<VAR>s</VAR>, <VAR>prot</VAR>) </CODE>
<DD>
reads the network service data base for a service with name <VAR>s</VAR>. If <VAR>prot</VAR> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(protname)</CODE>, the protocol of the service must also match <CODE>protname</CODE>; if <VAR>prot</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>, no protocol restriction is imposed. If successful, it returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(en)</CODE> where <CODE>en</CODE> is the corresponding data base entry; otherwise, it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:NET_SERV_DB.getByPort:VAL"></A>
<DT> <CODE>getByPort (<VAR>i</VAR>, <VAR>prot</VAR>) </CODE>
<DD>
reads the network service data base for a service with port number <VAR>i</VAR>. If <VAR>prot</VAR> is <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(protname)</CODE>, the protocol of the service must also match <CODE>protname</CODE>; if <VAR>prot</VAR> is <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>, no protocol restriction is imposed. If successful, it returns <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(en)</CODE> where <CODE>en</CODE> the corresponding data base entry; otherwise, it returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="socket.html#Socket:STR:SPEC">Socket</A></CODE>, <CODE><A HREF="net-host-db.html#NetHostDB:STR:SPEC">NetHostDB</A></CODE>, <CODE><A HREF="prot-db.html#NetProtDB:STR:SPEC">NetProtDB</A></CODE>
</BLOCKQUOTE>



`
