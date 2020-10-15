var data = `
<H2><A NAME="section:0"></A>The <CODE>GenericSock</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="GENERIC_SOCK:SIG:SPEC"></A><CODE>GENERIC_SOCK</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="GenericSock:STR:SPEC"></A><CODE>GenericSock</CODE><B> :> </B>GENERIC_SOCK&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
Implementations may provide the <CODE>GenericSock</CODE> structure as a way to provide access to additional address families and socket types (beyond those supported by <CODE><A HREF="inet-sock.html#INetSock:STR:SPEC">INetSock</A></CODE> and <CODE><A HREF="unix-sock.html#UnixSock:STR:SPEC">UnixSock</A></CODE>). 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>val</B>&nbsp;<A NAME="SIG:GENERIC_SOCK.socket:VAL:SPEC" HREF="#SIG:GENERIC_SOCK.socket:VAL">socket</A>&nbsp;<B>:</B>&nbsp;Socket.AF.addr_family&nbsp;<B>*</B>&nbsp;Socket.SOCK.sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;Socket.sock<BR>
<B>val</B>&nbsp;<A NAME="SIG:GENERIC_SOCK.socketPair:VAL:SPEC" HREF="#SIG:GENERIC_SOCK.socketPair:VAL">socketPair</A>&nbsp;<B>:</B>&nbsp;Socket.AF.addr_family<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Socket.SOCK.sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;Socket.sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;Socket.sock<BR>
<B>val</B>&nbsp;<A NAME="SIG:GENERIC_SOCK.socket':VAL:SPEC" HREF="#SIG:GENERIC_SOCK.socket':VAL">socket'</A>&nbsp;<B>:</B>&nbsp;Socket.AF.addr_family<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Socket.SOCK.sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;Socket.sock<BR>
<B>val</B>&nbsp;<A NAME="SIG:GENERIC_SOCK.socketPair':VAL:SPEC" HREF="#SIG:GENERIC_SOCK.socketPair':VAL">socketPair'</A>&nbsp;<B>:</B>&nbsp;Socket.AF.addr_family<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Socket.SOCK.sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;Socket.sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;Socket.sock</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:GENERIC_SOCK.socket:VAL"></A>
<DT> <CODE>socket (<VAR>af</VAR>, <VAR>st</VAR>) </CODE>
<DD>
creates a socket in the address family specified by <VAR>af</VAR> and the socket type specified by <VAR>st</VAR>, with the default protocol. 
<BR>
<BR>

<DT> <A NAME="SIG:GENERIC_SOCK.socketPair:VAL"></A>
<DT> <CODE>socketPair (<VAR>af</VAR>, <VAR>st</VAR>) </CODE>
<DD>
creates an unnamed pair of connected sockets in the address family specified by <VAR>af</VAR> and the socket type specified by <VAR>st</VAR>, with the default protocol. 
<BR>
<BR>

<DT> <A NAME="SIG:GENERIC_SOCK.socket':VAL"></A>
<DT> <CODE>socket' (<VAR>af</VAR>, <VAR>st</VAR>, <VAR>i</VAR>) </CODE>
<DD>
creates a socket in the address family specified by <VAR>af</VAR> and the socket type specified by <VAR>st</VAR>, with protocol number <VAR>i</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:GENERIC_SOCK.socketPair':VAL"></A>
<DT> <CODE>socketPair' (<VAR>af</VAR>, <VAR>st</VAR>, <VAR>i</VAR>) </CODE>
<DD>
creates an unnamed pair of connected sockets in the address family specified by <VAR>af</VAR> and the socket type specified by <VAR>st</VAR>, with protocol number <VAR>i</VAR>. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="inet-sock.html#INetSock:STR:SPEC">INetSock</A></CODE>, <CODE><A HREF="prot-db.html#NetProtDB:STR:SPEC">NetProtDB</A></CODE>, <CODE><A HREF="socket.html#Socket:STR:SPEC">Socket</A></CODE>, <CODE><A HREF="unix-sock.html#UnixSock:STR:SPEC">UnixSock</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<BLOCKQUOTE>
<B>Question:</B><BR>

<P>
<CODE>addressFamilies : unit -&gt; Socket.AF.addr_family list</CODE>?
<P>
<CODE>socketTypes : unit -&gt; Socket.SOCK.sock_type</CODE>?
</BLOCKQUOTE>
 
`
