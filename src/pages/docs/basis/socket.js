var data = `

<H2><A NAME="section:0"></A>The <CODE>Socket</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="SOCKET:SIG:SPEC"></A><CODE>SOCKET</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="Socket:STR:SPEC"></A><CODE>Socket</CODE><B> :> </B>SOCKET&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
This structure provides the standard socket types, socket management, and I/O operations. The creation of sockets is relegated to domain-specific structures (such as <CODE><A HREF="inet-sock.html#INetSock:STR:SPEC">INetSock</A></CODE> and <CODE><A HREF="unix-sock.html#UnixSock:STR:SPEC">UnixSock</A></CODE>). 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>type</B>&nbsp;(<I>'af</I>,<I>'sock_type</I>)&nbsp;<A NAME="SIG:SOCKET.sock:TY:SPEC" HREF="#SIG:SOCKET.sock:TY">sock</A><BR>
<B>type</B>&nbsp;<I>'af</I>&nbsp;<A NAME="SIG:SOCKET.sock_addr:TY:SPEC" HREF="#SIG:SOCKET.sock_addr:TY">sock_addr</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:SOCKET.dgram:TY:SPEC" HREF="#SIG:SOCKET.dgram:TY">dgram</A><BR>
<B>type</B>&nbsp;<I>'mode</I>&nbsp;<A NAME="SIG:SOCKET.stream:TY:SPEC" HREF="#SIG:SOCKET.stream:TY">stream</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:SOCKET.passive:TY:SPEC" HREF="#SIG:SOCKET.passive:TY">passive</A><BR>
<B>type</B>&nbsp;<A NAME="SIG:SOCKET.active:TY:SPEC" HREF="#SIG:SOCKET.active:TY">active</A><BR>
<BR>
<B>structure</B>&nbsp;AF&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>type</B>&nbsp;<A NAME="SIG:SOCKET.addr_family:TY:SPEC" HREF="#SIG:SOCKET.addr_family:TY">addr_family</A>&nbsp;=&nbsp;<A HREF="net-host-db.html#SIG:NET_HOST_DB.addr_family:TY:SPEC">NetHostDB.addr_family</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.list:VAL:SPEC" HREF="#SIG:SOCKET.list:VAL">list</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;(string&nbsp;<B>*</B>&nbsp;addr_family)&nbsp;list<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.toString:VAL:SPEC" HREF="#SIG:SOCKET.toString:VAL">toString</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;addr_family&nbsp;<B>-&gt;</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.fromString:VAL:SPEC" HREF="#SIG:SOCKET.fromString:VAL">fromString</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;addr_family&nbsp;option<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;SOCK&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>eqtype</B>&nbsp;<A NAME="SIG:SOCKET.sock_type:TY:SPEC" HREF="#SIG:SOCKET.sock_type:TY">sock_type</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.stream:VAL:SPEC" HREF="#SIG:SOCKET.stream:VAL">stream</A>&nbsp;<B>:</B>&nbsp;sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.dgram:VAL:SPEC" HREF="#SIG:SOCKET.dgram:VAL">dgram</A>&nbsp;<B>:</B>&nbsp;sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.list:VAL:SPEC" HREF="#SIG:SOCKET.list:VAL">list</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;(string&nbsp;<B>*</B>&nbsp;sock_type)&nbsp;list<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.toString:VAL:SPEC" HREF="#SIG:SOCKET.toString:VAL">toString</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;sock_type&nbsp;<B>-&gt;</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.fromString:VAL:SPEC" HREF="#SIG:SOCKET.fromString:VAL">fromString</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;sock_type&nbsp;option<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;Ctl&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getDEBUG:VAL:SPEC" HREF="#SIG:SOCKET.getDEBUG:VAL">getDEBUG</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setDEBUG:VAL:SPEC" HREF="#SIG:SOCKET.setDEBUG:VAL">setDEBUG</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getREUSEADDR:VAL:SPEC" HREF="#SIG:SOCKET.getREUSEADDR:VAL">getREUSEADDR</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setREUSEADDR:VAL:SPEC" HREF="#SIG:SOCKET.setREUSEADDR:VAL">setREUSEADDR</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getKEEPALIVE:VAL:SPEC" HREF="#SIG:SOCKET.getKEEPALIVE:VAL">getKEEPALIVE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setKEEPALIVE:VAL:SPEC" HREF="#SIG:SOCKET.setKEEPALIVE:VAL">setKEEPALIVE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getDONTROUTE:VAL:SPEC" HREF="#SIG:SOCKET.getDONTROUTE:VAL">getDONTROUTE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setDONTROUTE:VAL:SPEC" HREF="#SIG:SOCKET.setDONTROUTE:VAL">setDONTROUTE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getLINGER:VAL:SPEC" HREF="#SIG:SOCKET.getLINGER:VAL">getLINGER</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Time.time&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setLINGER:VAL:SPEC" HREF="#SIG:SOCKET.setLINGER:VAL">setLINGER</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Time.time&nbsp;option&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getBROADCAST:VAL:SPEC" HREF="#SIG:SOCKET.getBROADCAST:VAL">getBROADCAST</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setBROADCAST:VAL:SPEC" HREF="#SIG:SOCKET.setBROADCAST:VAL">setBROADCAST</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getOOBINLINE:VAL:SPEC" HREF="#SIG:SOCKET.getOOBINLINE:VAL">getOOBINLINE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setOOBINLINE:VAL:SPEC" HREF="#SIG:SOCKET.setOOBINLINE:VAL">setOOBINLINE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getSNDBUF:VAL:SPEC" HREF="#SIG:SOCKET.getSNDBUF:VAL">getSNDBUF</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setSNDBUF:VAL:SPEC" HREF="#SIG:SOCKET.setSNDBUF:VAL">setSNDBUF</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getRCVBUF:VAL:SPEC" HREF="#SIG:SOCKET.getRCVBUF:VAL">getRCVBUF</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.setRCVBUF:VAL:SPEC" HREF="#SIG:SOCKET.setRCVBUF:VAL">setRCVBUF</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getTYPE:VAL:SPEC" HREF="#SIG:SOCKET.getTYPE:VAL">getTYPE</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;SOCK.sock_type<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getERROR:VAL:SPEC" HREF="#SIG:SOCKET.getERROR:VAL">getERROR</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getPeerName:VAL:SPEC" HREF="#SIG:SOCKET.getPeerName:VAL">getPeerName</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getSockName:VAL:SPEC" HREF="#SIG:SOCKET.getSockName:VAL">getSockName</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getNREAD:VAL:SPEC" HREF="#SIG:SOCKET.getNREAD:VAL">getNREAD</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:SOCKET.getATMARK:VAL:SPEC" HREF="#SIG:SOCKET.getATMARK:VAL">getATMARK</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sameAddr:VAL:SPEC" HREF="#SIG:SOCKET.sameAddr:VAL">sameAddr</A>&nbsp;<B>:</B>&nbsp;<I>'af</I>&nbsp;sock_addr&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.familyOfAddr:VAL:SPEC" HREF="#SIG:SOCKET.familyOfAddr:VAL">familyOfAddr</A>&nbsp;<B>:</B>&nbsp;<I>'af</I>&nbsp;sock_addr&nbsp;<B>-&gt;</B>&nbsp;AF.addr_family<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.bind:VAL:SPEC" HREF="#SIG:SOCKET.bind:VAL">bind</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.listen:VAL:SPEC" HREF="#SIG:SOCKET.listen:VAL">listen</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;passive&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.accept:VAL:SPEC" HREF="#SIG:SOCKET.accept:VAL">accept</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;passive&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.acceptNB:VAL:SPEC" HREF="#SIG:SOCKET.acceptNB:VAL">acceptNB</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;passive&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;((<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.connect:VAL:SPEC" HREF="#SIG:SOCKET.connect:VAL">connect</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.connectNB:VAL:SPEC" HREF="#SIG:SOCKET.connectNB:VAL">connectNB</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.close:VAL:SPEC" HREF="#SIG:SOCKET.close:VAL">close</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>datatype</B>&nbsp;<A NAME="SIG:SOCKET.shutdown_mode:TY:SPEC" HREF="#SIG:SOCKET.shutdown_mode:TY">shutdown_mode</A><BR>
&nbsp;&nbsp;=&nbsp;<A NAME="SIG:SOCKET.NO_RECVS:TY:SPEC" HREF="#SIG:SOCKET.NO_RECVS:TY">NO_RECVS</A><BR>
&nbsp;&nbsp;|&nbsp;<A NAME="SIG:SOCKET.NO_SENDS:TY:SPEC" HREF="#SIG:SOCKET.NO_SENDS:TY">NO_SENDS</A><BR>
&nbsp;&nbsp;|&nbsp;<A NAME="SIG:SOCKET.NO_RECVS_OR_SENDS:TY:SPEC" HREF="#SIG:SOCKET.NO_RECVS_OR_SENDS:TY">NO_RECVS_OR_SENDS</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.shutdown:VAL:SPEC" HREF="#SIG:SOCKET.shutdown:VAL">shutdown</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'mode</I>&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;shutdown_mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<BR>
<B>type</B>&nbsp;<A NAME="SIG:SOCKET.sock_desc:TY:SPEC" HREF="#SIG:SOCKET.sock_desc:TY">sock_desc</A><BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sockDesc:VAL:SPEC" HREF="#SIG:SOCKET.sockDesc:VAL">sockDesc</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;sock_desc<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sameDesc:VAL:SPEC" HREF="#SIG:SOCKET.sameDesc:VAL">sameDesc</A>&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;<B>*</B>&nbsp;sock_desc&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.select:VAL:SPEC" HREF="#SIG:SOCKET.select:VAL">select</A>&nbsp;<B>:</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rds&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;list,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wrs&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;list,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exs&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;list,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout&nbsp;<B>:</B>&nbsp;Time.time&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rds&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;list,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wrs&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;list,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exs&nbsp;<B>:</B>&nbsp;sock_desc&nbsp;list<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.ioDesc:VAL:SPEC" HREF="#SIG:SOCKET.ioDesc:VAL">ioDesc</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;<A HREF="os-io.html#SIG:OS_IO.iodesc:TY:SPEC">OS.IO.iodesc</A><BR>
<BR>
<B>type</B>&nbsp;<A NAME="SIG:SOCKET.out_flags:TY:SPEC" HREF="#SIG:SOCKET.out_flags:TY">out_flags</A>&nbsp;=&nbsp;{don't_route&nbsp;<B>:</B>&nbsp;bool,&nbsp;oob&nbsp;<B>:</B>&nbsp;bool}<BR>
<B>type</B>&nbsp;<A NAME="SIG:SOCKET.in_flags:TY:SPEC" HREF="#SIG:SOCKET.in_flags:TY">in_flags</A>&nbsp;=&nbsp;{peek&nbsp;<B>:</B>&nbsp;bool,&nbsp;oob&nbsp;<B>:</B>&nbsp;bool}<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVec:VAL:SPEC" HREF="#SIG:SOCKET.sendVec:VAL">sendVec</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArr:VAL:SPEC" HREF="#SIG:SOCKET.sendArr:VAL">sendArr</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVec':VAL:SPEC" HREF="#SIG:SOCKET.sendVec':VAL">sendVec'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArr':VAL:SPEC" HREF="#SIG:SOCKET.sendArr':VAL">sendArr'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVecNB:VAL:SPEC" HREF="#SIG:SOCKET.sendVecNB:VAL">sendVecNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVecNB':VAL:SPEC" HREF="#SIG:SOCKET.sendVecNB':VAL">sendVecNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArrNB:VAL:SPEC" HREF="#SIG:SOCKET.sendArrNB:VAL">sendArrNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArrNB':VAL:SPEC" HREF="#SIG:SOCKET.sendArrNB':VAL">sendArrNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVec:VAL:SPEC" HREF="#SIG:SOCKET.recvVec:VAL">recvVec</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVec':VAL:SPEC" HREF="#SIG:SOCKET.recvVec':VAL">recvVec'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArr:VAL:SPEC" HREF="#SIG:SOCKET.recvArr:VAL">recvArr</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArr':VAL:SPEC" HREF="#SIG:SOCKET.recvArr':VAL">recvArr'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;in_flags&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVecNB:VAL:SPEC" HREF="#SIG:SOCKET.recvVecNB:VAL">recvVecNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVecNB':VAL:SPEC" HREF="#SIG:SOCKET.recvVecNB':VAL">recvVecNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArrNB:VAL:SPEC" HREF="#SIG:SOCKET.recvArrNB:VAL">recvArrNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArrNB':VAL:SPEC" HREF="#SIG:SOCKET.recvArrNB':VAL">recvArrNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;in_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVecTo:VAL:SPEC" HREF="#SIG:SOCKET.sendVecTo:VAL">sendVecTo</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArrTo:VAL:SPEC" HREF="#SIG:SOCKET.sendArrTo:VAL">sendArrTo</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVecTo':VAL:SPEC" HREF="#SIG:SOCKET.sendVecTo':VAL">sendVecTo'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArrTo':VAL:SPEC" HREF="#SIG:SOCKET.sendArrTo':VAL">sendArrTo'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVecToNB:VAL:SPEC" HREF="#SIG:SOCKET.sendVecToNB:VAL">sendVecToNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendVecToNB':VAL:SPEC" HREF="#SIG:SOCKET.sendVecToNB':VAL">sendVecToNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArrToNB:VAL:SPEC" HREF="#SIG:SOCKET.sendArrToNB:VAL">sendArrToNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.sendArrToNB':VAL:SPEC" HREF="#SIG:SOCKET.sendArrToNB':VAL">sendArrToNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVecFrom:VAL:SPEC" HREF="#SIG:SOCKET.recvVecFrom:VAL">recvVecFrom</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'sock_type</I>&nbsp;sock_addr<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVecFrom':VAL:SPEC" HREF="#SIG:SOCKET.recvVecFrom':VAL">recvVecFrom'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'sock_type</I>&nbsp;sock_addr<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArrFrom:VAL:SPEC" HREF="#SIG:SOCKET.recvArrFrom:VAL">recvArrFrom</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArrFrom':VAL:SPEC" HREF="#SIG:SOCKET.recvArrFrom':VAL">recvArrFrom'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;in_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVecFromNB:VAL:SPEC" HREF="#SIG:SOCKET.recvVecFromNB:VAL">recvVecFromNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'sock_type</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvVecFromNB':VAL:SPEC" HREF="#SIG:SOCKET.recvVecFromNB':VAL">recvVecFromNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'sock_type</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArrFromNB:VAL:SPEC" HREF="#SIG:SOCKET.recvArrFromNB:VAL">recvArrFromNB</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:SOCKET.recvArrFromNB':VAL:SPEC" HREF="#SIG:SOCKET.recvArrFromNB':VAL">recvArrFromNB'</A>&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr)&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:SOCKET.sock:TY"></A><CODE><B>type</B>&nbsp;(<I>'af</I>,<I>'sock_type</I>)&nbsp;sock</CODE>
<DD>
 The type of a socket. Sockets are polymorphic over both the address  family and the socket type. The type parameter <VAR>'af</VAR> is  instantiated with the appropriate address family type  (<CODE><A HREF="inet-sock.html#SIG:INET_SOCK.inet:TY:SPEC">INetSock.inet</A></CODE> or  <CODE><A HREF="unix-sock.html#SIG:UNIX_SOCK.unix:TY:SPEC">UnixSock.unix</A></CODE>).  The type parameter <VAR>'sock_type</VAR>  is instantiated with the appropriate socket  type (<CODE><A HREF="socket.html#SIG:SOCKET.dgram:TY:SPEC">dgram</A></CODE>  or <CODE><A HREF="socket.html#SIG:SOCKET.stream:TY:SPEC">stream</A></CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sock_addr:TY"></A><CODE><B>type</B>&nbsp;<I>'af</I>&nbsp;sock_addr</CODE>
<DD>
 The type of a socket address. The type parameter <VAR>'af</VAR> describes  the address family of the address (<CODE><A HREF="inet-sock.html#SIG:INET_SOCK.inet:TY:SPEC">INetSock.inet</A></CODE>  or <CODE><A HREF="unix-sock.html#SIG:UNIX_SOCK.unix:TY:SPEC">UnixSock.unix</A></CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.dgram:TY"></A><CODE><B>type</B>&nbsp;dgram</CODE>
<DD>
 The witness type for datagram sockets. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.stream:TY"></A><CODE><B>type</B>&nbsp;<I>'mode</I>&nbsp;stream</CODE>
<DD>
 The witness type for stream sockets. The type parameter <VAR>'mode</VAR> describes  the mode of the stream socket: active or passive. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.AF:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;AF</CODE>
<DD>
The <CODE><A HREF="socket.html#SIG:SOCKET.AF:STR:SPEC">AF</A></CODE> substructure defines an abstract type that represents  the different network-address families. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:SOCKET.AF.list:VAL"></A><CODE><B>val</B>&nbsp;list&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;(string&nbsp;<B>*</B>&nbsp;addr_family)&nbsp;list</CODE>
<DD>
 This returns a list of all the available address  families. Every element of the list is a pair  <CODE>(<VAR>name</VAR>,<VAR>af</VAR>)</CODE>  where <VAR>name</VAR> is the  name of the address family, and <VAR>af</VAR> is the actual address family  value.  
<P>
 The names of the address families are taken from the  symbolic constants used in the C Socket API and stripping the  leading ``<CODE>AF_</CODE>.''  For example, the Unix-domain address family is named  <CODE>&quot;UNIX&quot;</CODE>, the Internet-domain address family is named  <CODE>&quot;INET&quot;</CODE>, and the <EM>Apple Talk</EM> address family is  named <CODE>&quot;APPLETALK&quot;</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.AF.toString:VAL"></A><CODE><B>val</B>&nbsp;toString&nbsp;<B>:</B>&nbsp;addr_family&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;fromString&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;addr_family&nbsp;option</CODE>
<DD>
 These convert between address family values and their names.  For example, the expression  <CODE>toString (INetSock.inetAF)</CODE>  returns the string <CODE>&quot;INET&quot;</CODE>.  <CODE><A HREF="socket.html#SIG:SOCKET.AF.fromString:VAL:SPEC">fromString</A></CODE> returns  <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> if no family  value corresponds to the given name.  
<P>
 If a pair <CODE>(<VAR>name</VAR>,<VAR>af</VAR>)</CODE> is in the list returned  by <CODE><A HREF="socket.html#SIG:SOCKET.AF.list:VAL:SPEC">list</A></CODE>, then it is the case that <VAR>name</VAR>  is equal to <CODE>toString(<VAR>af</VAR>)</CODE>. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:SOCKET.SOCK:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;SOCK</CODE>
<DD>
 The <CODE><A HREF="socket.html#SIG:SOCKET.SOCK:STR:SPEC">SOCK</A></CODE> substructure provides an abstract type and operations  for the different types of sockets.  This type is used by the <CODE><A HREF="socket.html#SIG:SOCKET.Ctl.getTYPE:VAL:SPEC">getTYPE</A></CODE> function. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:SOCKET.SOCK.sock_type:TY"></A><CODE><B>eqtype</B>&nbsp;sock_type</CODE>
<DD>
The type of socket types. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.SOCK.stream:VAL"></A><CODE><B>val</B>&nbsp;stream&nbsp;<B>:</B>&nbsp;sock_type</CODE>
<DD>
The stream socket type value. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.SOCK.dgram:VAL"></A><CODE><B>val</B>&nbsp;dgram&nbsp;<B>:</B>&nbsp;sock_type</CODE>
<DD>
The datagram socket type value. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.SOCK.list:VAL"></A><CODE><B>val</B>&nbsp;list&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;(string&nbsp;<B>*</B>&nbsp;sock_type)&nbsp;list</CODE>
<DD>
 A list of the available socket types.  Every element of the list is of the form  <CODE>(<VAR>name</VAR>,<VAR>sty</VAR>)</CODE> where  <VAR>name</VAR> is the name of the socket type,  and <VAR>sty</VAR> is the actual socket type value.  
<P>
 The list of possible socket type names includes  <CODE>&quot;STREAM&quot;</CODE> for stream sockets,  <CODE>&quot;DGRAM&quot;</CODE> for datagram sockets, and  <CODE>&quot;RAW&quot;</CODE> for raw sockets.  These names are formed by taking the symbolic constants from  the C API and removing the leading ``<CODE>SOCK_</CODE>.'' 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.SOCK.toString:VAL"></A><CODE><B>val</B>&nbsp;toString&nbsp;<B>:</B>&nbsp;sock_type&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;fromString&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;sock_type&nbsp;option</CODE>
<DD>
 These convert between a socket type value and its name (<I>e.g.</I>, &quot;STREAM&quot;).  <CODE><A HREF="socket.html#SIG:SOCKET.SOCK.fromString:VAL:SPEC">fromString</A></CODE> returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>  if no socket type value corresponds to the name.  
<P>
 If a pair <CODE>(<VAR>name</VAR>,<VAR>sty</VAR>)</CODE> is in the list returned  by <CODE><A HREF="socket.html#SIG:SOCKET.SOCK.list:VAL:SPEC">list</A></CODE>, then it is the case that <VAR>name</VAR>  is equal to <CODE>toString(<VAR>sty</VAR>)</CODE>. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:SOCKET.Ctl:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;Ctl</CODE>
<DD>
The <CODE><A HREF="socket.html#SIG:SOCKET.Ctl:STR:SPEC">Ctl</A></CODE> substructure provides support for  manipulating the options associated with a socket.  These functions raise the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE>  exception when the argument socket has been closed. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:SOCKET.Ctl.getDEBUG:VAL"></A><CODE><B>val</B>&nbsp;getDEBUG&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;setDEBUG&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These functions query and set the <CODE>SO_DEBUG</CODE> flag for the socket. This flag  enables or disables low-level debugging within the kernel. Enabled, it  allows the kernel to maintain a history of the recent packets that  have been received or sent.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getREUSEADDR:VAL"></A><CODE><B>val</B>&nbsp;getREUSEADDR&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;setREUSEADDR&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the <CODE>SO_REUSEADDR</CODE> flag for the socket. When  <CODE>true</CODE>, this flag instructs the system to allow  reuse of local socket addresses in <CODE><A HREF="socket.html#SIG:SOCKET.bind:VAL:SPEC">bind</A></CODE>  calls.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getKEEPALIVE:VAL"></A><CODE><B>val</B>&nbsp;getKEEPALIVE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;setKEEPALIVE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the <CODE>SO_KEEPALIVE</CODE> flag for the socket. When  <CODE>true</CODE>, the system will generate periodic transmissions  on a connected socket, when no other data is being exchanged.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getDONTROUTE:VAL"></A><CODE><B>val</B>&nbsp;getDONTROUTE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;setDONTROUTE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the <CODE>SO_DONTROUTE</CODE> flag for the socket. When  this flag is <CODE>true</CODE>, outgoing messages bypass the normal routing  mechanisms of the underlying protocol, and are instead directed to the  appropriate network interface as specified by the network portion of  the destination address. Note that this option can be specified on a  per message basis by using one of the  <CODE><A HREF="socket.html#SIG:SOCKET.sendVec':VAL:SPEC">sendVec'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendArr':VAL:SPEC">sendArr'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendVecTo':VAL:SPEC">sendVecTo'</A></CODE>, or  <CODE><A HREF="socket.html#SIG:SOCKET.sendArrTo':VAL:SPEC">sendArrTo'</A></CODE>  functions.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getLINGER:VAL"></A><CODE><B>val</B>&nbsp;getLINGER&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;Time.time&nbsp;option<BR>
<B>val</B>&nbsp;setLINGER&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;Time.time&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These functions query and set the <CODE>SO_LINGER</CODE> flag for the  socket <VAR>sock</VAR>.  This flag controls the action taken when unsent messages are queued on  socket and a <CODE><A HREF="socket.html#SIG:SOCKET.close:VAL:SPEC">close</A></CODE> is performed.  If the flag is set to <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>,  then the system will close the socket as quickly as possible, discarding  data if necessary.  If the flag is set to  <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>t</VAR>)</CODE> and  the socket promises reliable delivery, then the system will block  the <CODE><A HREF="socket.html#SIG:SOCKET.close:VAL:SPEC">close</A></CODE> operation until the  data is delivered or the timeout <VAR>t</VAR> expires.  If <VAR>t</VAR> is negative or too large, then the  <CODE><A HREF="time.html#SIG:TIME.Time:EXN:SPEC">Time</A></CODE> is raised.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getBROADCAST:VAL"></A><CODE><B>val</B>&nbsp;getBROADCAST&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;setBROADCAST&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the <CODE>SO_BROADCAST</CODE> flag for the socket <VAR>sock</VAR>, which  enables or disables the ability of the process to send broadcast  messages over the socket.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getOOBINLINE:VAL"></A><CODE><B>val</B>&nbsp;getOOBINLINE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;setOOBINLINE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;bool&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the <CODE>SO_OOBINLINE</CODE> flag for the socket. When  set, this indicates that out-of-band data should be placed in the  normal input queue of the socket.  Note that this option can be specified on a  per message basis by using one of the  <CODE><A HREF="socket.html#SIG:SOCKET.sendVec':VAL:SPEC">sendVec'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendArr':VAL:SPEC">sendArr'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendVecTo':VAL:SPEC">sendVecTo'</A></CODE>, or  <CODE><A HREF="socket.html#SIG:SOCKET.sendArrTo':VAL:SPEC">sendArrTo'</A></CODE>  functions.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getSNDBUF:VAL"></A><CODE><B>val</B>&nbsp;getSNDBUF&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;setSNDBUF&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the size of the send queue buffer for the socket. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getRCVBUF:VAL"></A><CODE><B>val</B>&nbsp;getRCVBUF&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;int<BR>
<B>val</B>&nbsp;setRCVBUF&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;unit</CODE>
<DD>
 These query and set the size of receive queue buffer for the socket.  
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getTYPE:VAL"></A><CODE><B>val</B>&nbsp;getTYPE&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;SOCK.sock_type</CODE>
<DD>
 This returns the socket type of the socket. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getERROR:VAL"></A><CODE><B>val</B>&nbsp;getERROR&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
 This indicates whether or not an error has occurred. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getPeerName:VAL"></A><CODE><B>val</B>&nbsp;getPeerName&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;<I>'af</I>&nbsp;sock_addr</CODE>
<DD>
 This returns the socket address to which the socket is connected. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getSockName:VAL"></A><CODE><B>val</B>&nbsp;getSockName&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;<I>'af</I>&nbsp;sock_addr</CODE>
<DD>
 This returns the socket address to which the socket is bound. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getNREAD:VAL"></A><CODE><B>val</B>&nbsp;getNREAD&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;int</CODE>
<DD>
 This returns the number of bytes available for reading on the socket. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.Ctl.getATMARK:VAL"></A><CODE><B>val</B>&nbsp;getATMARK&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
 This indicates whether or not the read pointer on the socket is  currently at the out-of-band mark. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:SOCKET.sameAddr:VAL"></A><CODE><B>val</B>&nbsp;sameAddr&nbsp;<B>:</B>&nbsp;<I>'af</I>&nbsp;sock_addr&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
 This tests whether two socket addresses are the same address. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.familyOfAddr:VAL"></A>
<DT> <CODE>familyOfAddr <VAR>addr</VAR> </CODE>
<DD>
returns the address family of the socket address <VAR>addr</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.bind:VAL"></A>
<DT> <CODE>bind (<VAR>sock</VAR>, <VAR>sa</VAR>) </CODE>
<DD>
binds the address <VAR>sa</VAR> to the passive socket <VAR>sock</VAR>.  This function raises <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> when the address  <VAR>sa</VAR> is already in use, when <VAR>sock</VAR> is already bound to  an address, or when <VAR>sock</VAR> has been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.listen:VAL"></A>
<DT> <CODE>listen (<VAR>sock</VAR>, <VAR>n</VAR>) </CODE>
<DD>
creates a queue (of size <VAR>n</VAR>) for pending questions associated to  the socket <VAR>sock</VAR>.  The size of queue is limited by the underlying system, but requesting a  queue size larger than the limit does not cause an error (a typical limit  is 128, but older systems use a limit of 5).  
<P>
 This function raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> exception  if <VAR>sock</VAR> has been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.accept:VAL"></A>
<DT> <CODE>accept <VAR>sock</VAR> </CODE>
<DD>
extracts the first connection request from the queue of pending connections for  the socket <VAR>sock</VAR>.  The socket must have been bound to an address via  <CODE><A HREF="socket.html#SIG:SOCKET.bind:VAL:SPEC">bind</A></CODE>  and enabled for listening via <CODE><A HREF="socket.html#SIG:SOCKET.listen:VAL:SPEC">listen</A></CODE>.  If a connection is present, <CODE>accept</CODE> returns a pair  <CODE>(<VAR>s</VAR>,<VAR>sa</VAR>)</CODE> consisting of  a new active socket <VAR>s</VAR> with the same properties  as <VAR>sock</VAR> and the address <VAR>sa</VAR> of the  connecting entity.  If no pending connections are present on  the queue then <CODE>accept</CODE> blocks  until a connection is requested.  One can test for pending connection requests by using the  <CODE><A HREF="socket.html#SIG:SOCKET.select:VAL:SPEC">select</A></CODE> function to test the socket for reading.  
<P>
 This function raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> exception  if <VAR>sock</VAR> has not been properly bound and enabled, or it  <VAR>sock</VAR> has been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.acceptNB:VAL"></A><CODE><B>val</B>&nbsp;acceptNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;passive&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;((<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr)&nbsp;option</CODE>
<DD>
 This function is the nonblocking form of the  <CODE><A HREF="socket.html#SIG:SOCKET.accept:VAL:SPEC">accept</A></CODE> operation.  If the operation can complete without blocking (<I>i.e.</I>, there is  a pending connection), then this function returns  <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>s</VAR>,<VAR>sa</VAR>)</CODE>,  where <VAR>s</VAR> is a new active socket with the same properties  as <VAR>sock</VAR> and <VAR>sa</VAR> is the the address of the  connecting entity.  If there are no pending connections, then this function returns  <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>.  
<P>
 This function raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> exception  if <VAR>sock</VAR> has not been properly bound and enabled, or it  <VAR>sock</VAR> has been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.connect:VAL"></A>
<DT> <CODE>connect (<VAR>sock</VAR>, <VAR>sa</VAR>) </CODE>
<DD>
attempts to connect the socket <VAR>sock</VAR> to the address <VAR>sa</VAR>.  If <VAR>sock</VAR> is a datagram socket, the address specifies the peer with  which the socket is to be associated; <VAR>sa</VAR> is the  address to which datagrams are to be sent, and the only address  from which datagrams are to be received.  If <VAR>sock</VAR> is a stream socket, the address specifies another socket  to which to connect.  
<P>
 This function raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> exception  when the address specified by <VAR>sa</VAR> is unreachable, when the  connection is refused or times out, when <VAR>sock</VAR> is already  connected, or when <VAR>sock</VAR> has been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.connectNB:VAL"></A><CODE><B>val</B>&nbsp;connectNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;<I>'sock_type</I>)&nbsp;sock&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
 This function is the nonblocking form of <CODE><A HREF="socket.html#SIG:SOCKET.connect:VAL:SPEC">connect</A></CODE>.  If the connection can be established without blocking the caller  (which is typically true for datagram sockets, but not stream sockets),  then <CODE>true</CODE> is returned.  Otherwise, <CODE>false</CODE> is returned and the connection attempt is  started; one can test for the completion of the connection by testing  the socket for writing using the <CODE><A HREF="socket.html#SIG:SOCKET.select:VAL:SPEC">select</A></CODE> function.  This function will raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if it  is called on a socket for which a previous connection attempt has  not yet been completed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.close:VAL"></A>
<DT> <CODE>close <VAR>sock</VAR> </CODE>
<DD>
closes the connection to the socket <VAR>sock</VAR>.  This function raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE>  exception if the socket has already been closed.     
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.shutdown:VAL"></A>
<DT> <CODE>shutdown (<VAR>sock</VAR>, <VAR>mode</VAR>) </CODE>
<DD>
shuts down all or part of a full-duplex connection on socket  <VAR>sock</VAR>.  If <VAR>mode</VAR> is <CODE><A HREF="socket.html#SIG:SOCKET.shutdown_mode:TY:SPEC">NO_RECVS</A></CODE>,  further receives will be disallowed.  If <VAR>mode</VAR> is <CODE><A HREF="socket.html#SIG:SOCKET.shutdown_mode:TY:SPEC">NO_SENDS</A></CODE>,  further sends will be disallowed.  If <VAR>mode</VAR> is <CODE><A HREF="socket.html#SIG:SOCKET.shutdown_mode:TY:SPEC">NO_RECVS_OR_SENDS</A></CODE>,  further sends and receives will be disallowed.  This function raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE>  exception if the socket is not connected or has been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sock_desc:TY"></A><CODE><B>type</B>&nbsp;sock_desc</CODE>
<DD>
 This type is an abstract name for a socket, which is used to support  polling on collections of sockets. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sockDesc:VAL"></A>
<DT> <CODE>sockDesc <VAR>sock</VAR>  </CODE>
<DD>
returns a socket descriptor that names the socket <VAR>sock</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sameDesc:VAL"></A>
<DT> <CODE>sameDesc (<VAR>sd1</VAR>, <VAR>sd2</VAR>)  </CODE>
<DD>
returns <CODE>true</CODE> if the two socket descriptors <VAR>sd1</VAR>  and <VAR>sd2</VAR> describe the same underlying socket.  Thus, the expression  <CODE>sameDesc(sockDesc <VAR>sock</VAR>, sockDesc <VAR>sock</VAR>)</CODE>  will always return <CODE>true</CODE> for any socket <VAR>sock</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.select:VAL"></A>
<DT> <CODE>select {<VAR>rds</VAR>, <VAR>wrs</VAR>, <VAR>exs</VAR>, <VAR>timeout</VAR>}  </CODE>
<DD>
examines the sockets in <VAR>rds</VAR>, <VAR>wrs</VAR>, and <VAR>exs</VAR>  to see if they are ready for reading, writing, or have an exceptional condition  pending, respectively.  The calling program is blocked until either one or more of the named sockets  is ``<EM>ready</EM> '' or the specified <VAR>timeout</VAR> expires (where  a timeout of <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> never expires).  The result of <CODE><A HREF="socket.html#SIG:SOCKET.select:VAL:SPEC">select</A></CODE> is a record of three lists of  socket descriptors containing the ready sockets from the corresponding argument lists.  The order in which socket descriptors appear in the argument lists is preserved in the  result lists.  A timeout is signified by a result of three empty lists.  
<P>
 This function raises <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if any of the  argument sockets have been closed or if the timeout value is negative.  
<P>
 Note that one can test if a call to <CODE><A HREF="socket.html#SIG:SOCKET.accept:VAL:SPEC">accept</A></CODE> will block  by using <CODE><A HREF="socket.html#SIG:SOCKET.select:VAL:SPEC">select</A></CODE> to see if the socket is ready to read. Similarly, one can use <CODE><A HREF="socket.html#SIG:SOCKET.select:VAL:SPEC">select</A></CODE> to test if a call to <CODE><A HREF="socket.html#SIG:SOCKET.connect:VAL:SPEC">connect</A></CODE> will block by seeing if the socket is ready to write. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.ioDesc:VAL"></A>
<DT> <CODE>ioDesc <VAR>sock</VAR> </CODE>
<DD>
returns the I/O descriptor corresponding to socket <VAR>sock</VAR>.  This descriptor can be used to poll the socket via  <CODE><A HREF="os-io.html#SIG:OS_IO.pollDesc:VAL:SPEC">pollDesc</A></CODE> and <CODE><A HREF="os-io.html#SIG:OS_IO.poll:VAL:SPEC">poll</A></CODE> in the  <CODE><A HREF="os.html#SIG:OS.IO:STR:SPEC">OS.IO</A></CODE> structure.  Using the polling mechanism from <CODE><A HREF="os.html#SIG:OS.IO:STR:SPEC">OS.IO</A></CODE> has  the advantage that different kinds of I/O objects can be mixed, but not  all systems support polling on sockets this way.  If an application is only polling sockets, then it is more portable to use  the <CODE><A HREF="socket.html#SIG:SOCKET.select:VAL:SPEC">select</A></CODE> function defined above. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.out_flags:TY"></A><CODE><B>type</B>&nbsp;out_flags&nbsp;=&nbsp;{don't_route&nbsp;<B>:</B>&nbsp;bool,&nbsp;oob&nbsp;<B>:</B>&nbsp;bool}</CODE>
<DD>
Flags used in the general form of socket output operations. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.in_flags:TY"></A><CODE><B>type</B>&nbsp;in_flags&nbsp;=&nbsp;{peek&nbsp;<B>:</B>&nbsp;bool,&nbsp;oob&nbsp;<B>:</B>&nbsp;bool}</CODE>
<DD>
Flags used in the general form of socket input operations. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sendVec:VAL"></A>
<DT> <CODE>sendVec (<VAR>sock</VAR>, <VAR>slice</VAR>) </CODE>
<DT> <CODE>          sendArr (<VAR>sock</VAR>, <VAR>slice</VAR>) </CODE>
<DD>
These functions send the bytes in the slice <VAR>slice</VAR>  on the active stream socket <VAR>sock</VAR>.  They return the number of bytes actually sent.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR> has  been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sendVec':VAL"></A>
<DT> <CODE>sendVec' (<VAR>sock</VAR>, <VAR>slice</VAR>, {<VAR>don't_route</VAR>, <VAR>oob</VAR>}) </CODE>
<DT> <CODE>          sendArr' (<VAR>sock</VAR>, <VAR>slice</VAR>, {<VAR>don't_route</VAR>, <VAR>oob</VAR>}) </CODE>
<DD>
These functions send the bytes in the slice <VAR>slice</VAR>  on the active stream socket <VAR>sock</VAR>.  They return the number of bytes actually sent.  If the <VAR>don't_route</VAR> flag is <CODE>true</CODE>,  the data is sent bypassing the normal routing mechanism of the protocol.  If <VAR>oob</VAR> is <CODE>true</CODE>, the data is  sent out-of-band, that is, before any other data which  may have been buffered.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR> has  been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sendVecNB:VAL"></A><CODE><B>val</B>&nbsp;sendVecNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;sendVecNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;sendArrNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;sendArrNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option</CODE>
<DD>
 These functions are the nonblocking versions of  <CODE><A HREF="socket.html#SIG:SOCKET.sendVec:VAL:SPEC">sendVec</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendVec':VAL:SPEC">sendVec'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendArr:VAL:SPEC">sendArr</A></CODE>, and  <CODE><A HREF="socket.html#SIG:SOCKET.sendArr':VAL:SPEC">sendArr'</A></CODE> (resp.).  They have the same semantics as their blocking forms, with the exception  that when the operation can complete without blocking, then the result  is wrapped in <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> and if the  operation would have to wait to send the data, then  <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned instead. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.recvVec:VAL"></A>
<DT> <CODE>recvVec (<VAR>sock</VAR>, <VAR>n</VAR>) </CODE>
<DT> <CODE>          recvVec'(<VAR>sock</VAR>, <VAR>n</VAR>, {<VAR>peek</VAR>,<VAR>oob</VAR>}) </CODE>
<DD>
These functions receive up to <VAR>n</VAR> bytes from the active stream socket <VAR>sock</VAR>. The  size of the resulting vector is the number of bytes that were  successfully received, which may be less than <VAR>n</VAR>.  If the connection has been closed at the other end (or if  <VAR>n</VAR> is <CODE>0</CODE>), then the empty vector  will be returned.  
<P>
 In the second version, if <VAR>peek</VAR> is <CODE>true</CODE>, the data is received but not discarded from the connection. If <VAR>oob</VAR> is <CODE>true</CODE>, the data is received out-of-band,  that is, before any other incoming data that may have been buffered.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if the  socket <VAR>sock</VAR> has been closed and  they raise <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> if  <VAR>n</VAR> &lt; 0 or  <VAR>n</VAR> &gt; <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.maxLen:VAL:SPEC">Word8Vector.maxLen</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.recvArr:VAL"></A>
<DT> <CODE>recvArr (<VAR>sock</VAR>, <VAR>slice</VAR>) </CODE>
<DT> <CODE>          recvArr' (<VAR>sock</VAR>, <VAR>slice</VAR>, {<VAR>peek</VAR>, <VAR>oob</VAR>}) </CODE>
<DD>
These functions read data from the socket <VAR>sock</VAR> into  the array slice <VAR>slice</VAR>.  They return the number of bytes actually received.  If the connection has been closed at the other end or the slice is empty,  then 0 is returned.  
<P>
 For <CODE><A HREF="socket.html#SIG:SOCKET.recvArr':VAL:SPEC">recvArr'</A></CODE>, if <VAR>peek</VAR>  is <CODE>true</CODE>, the data is received but not discarded from the  connection.  If <VAR>oob</VAR> is <CODE>true</CODE>, the data is received out-of-band,  that is, before any other incoming data that may have been buffered.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR> has  been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.recvVecNB:VAL"></A><CODE><B>val</B>&nbsp;recvVecNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector&nbsp;option<BR>
<B>val</B>&nbsp;recvVecNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;Word8Vector.vector&nbsp;option<BR>
<B>val</B>&nbsp;recvArrNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option<BR>
<B>val</B>&nbsp;recvArrNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;active&nbsp;stream)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsnbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;in_flags&nbsp;<B>-&gt;</B>&nbsp;int&nbsp;option</CODE>
<DD>
 These functions are the nonblocking versions of  <CODE><A HREF="socket.html#SIG:SOCKET.recvVec:VAL:SPEC">recvVec</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.recvVec':VAL:SPEC">recvVec'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.recvArr:VAL:SPEC">recvArr</A></CODE>, and  <CODE><A HREF="socket.html#SIG:SOCKET.recvArr':VAL:SPEC">recvArr'</A></CODE> (resp.).  They have the same semantics as their blocking forms, with the exception  that when the operation can complete without blocking, then the result  is wrapped in <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> and if the  operation would have to wait for input, then  <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned instead. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sendVecTo:VAL"></A>
<DT> <CODE>sendVecTo (<VAR>sock</VAR>, <VAR>sa</VAR>, <VAR>slice</VAR>) </CODE>
<DT> <CODE>          sendArrTo (<VAR>sock</VAR>, <VAR>sa</VAR>, <VAR>slice</VAR>) </CODE>
<DD>
These functions send the message specified by the slice <VAR>slice</VAR>  on the datagram socket <VAR>sock</VAR> to the address  <VAR>sa</VAR>.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR>  has been closed or if the socket has been connected to a different  address than <VAR>sa</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sendVecTo':VAL"></A>
<DT> <CODE>sendVecTo' (<VAR>sock</VAR>, <VAR>sa</VAR>, <VAR>slice</VAR>, {<VAR>don't_route</VAR>, <VAR>oob</VAR>}) </CODE>
<DT> <CODE>          sendArrTo' (<VAR>sock</VAR>, <VAR>sa</VAR>, <VAR>slice</VAR>, {<VAR>don't_route</VAR>, <VAR>oob</VAR>}) </CODE>
<DD>
These functions send the message specified by the slice <VAR>slice</VAR>  on the datagram socket <VAR>sock</VAR> to the address  
<P>
 If the <VAR>don't_route</VAR> flag is <CODE>true</CODE>, the data is sent  bypassing the normal routing mechanism of the protocol.  If <VAR>oob</VAR> is <CODE>true</CODE>, the data is sent  out-of-band, that is, before any other data which may have been buffered.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR>  has been closed or if the socket has been connected to a different  address than <VAR>sa</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.sendVecToNB:VAL"></A><CODE><B>val</B>&nbsp;sendVecToNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;sendVecToNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8VectorSlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;sendArrToNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;sendArrToNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;out_flags&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
 These functions are the nonblocking versions of  <CODE><A HREF="socket.html#SIG:SOCKET.sendVecTo:VAL:SPEC">sendVecTo</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendVecTo':VAL:SPEC">sendVecTo'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.sendArrTo:VAL:SPEC">sendArrTo</A></CODE>, and  <CODE><A HREF="socket.html#SIG:SOCKET.sendArrTo':VAL:SPEC">sendArrTo'</A></CODE> (resp.).  They have the same semantics as their blocking forms, with the exception  that if the operation can complete without blocking, then the operation is  performed and <CODE>true</CODE> is returned.  Otherwise, <CODE>false</CODE> is returned and the message is not sent. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.recvVecFrom:VAL"></A>
<DT> <CODE>recvVecFrom (<VAR>sock</VAR>, <VAR>n</VAR>) </CODE>
<DT> <CODE>          recvVecFrom' (<VAR>sock</VAR>, <VAR>n</VAR>, {<VAR>peek</VAR>, <VAR>oob</VAR>}) </CODE>
<DD>
These functions receive up to <VAR>n</VAR> bytes on the datagram  socket <VAR>sock</VAR>, and return a pair  <CODE>(<VAR>vec</VAR>,<VAR>sa</VAR>)</CODE>, where the vector  <VAR>vec</VAR> is the received message, and <VAR>sa</VAR> is the  socket address from the which the data originated.  If the message is larger than <VAR>n</VAR>, then data may be lost.  
<P>
 In the second form, if <VAR>peek</VAR> is <CODE>true</CODE>, the data is  received but not discarded from the connection.  If <VAR>oob</VAR> is <CODE>true</CODE>, the data is received out-of-band,  that is, before any other incoming data that may have been buffered.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR> has  been closed; they raise <CODE><A HREF="general.html#SIG:GENERAL.Size:EXN:SPEC">Size</A></CODE> if  <VAR>n</VAR> &lt; 0 or  <VAR>n</VAR> &gt; <CODE><A HREF="mono-vector.html#SIG:MONO_VECTOR.maxLen:VAL:SPEC">Word8Vector.maxLen</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.recvArrFrom:VAL"></A>
<DT> <CODE>recvArrFrom (<VAR>sock</VAR>, <VAR>slice</VAR>) </CODE>
<DT> <CODE>          recvArrFrom' (<VAR>sock</VAR>, <VAR>slice</VAR>) </CODE>
<DD>
These functions read a message from the datagram socket <VAR>sock</VAR> into  the array slice <VAR>slice</VAR>.  If the message is larger than the size of the slice, then data may be lost.  They return the number of bytes actually received.  If the connection has been closed at the other end or the slice is empty,  then 0 is returned.  
<P>
 For <CODE><A HREF="socket.html#SIG:SOCKET.recvArrFrom':VAL:SPEC">recvArrFrom'</A></CODE>, if <VAR>peek</VAR>  is <CODE>true</CODE>, the data is received but not discarded from the  connection. If <VAR>oob</VAR> is <CODE>true</CODE>, the data is  received out-of-band,  that is, before any other incoming data that may have been buffered.  
<P>
 These functions raise <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> if <VAR>sock</VAR> has  been closed. 
<BR>
<BR>

<DT> <A NAME="SIG:SOCKET.recvVecFromNB:VAL"></A><CODE><B>val</B>&nbsp;recvVecFromNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock&nbsp;<B>*</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'sock_type</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;recvVecFromNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;<I>'sock_type</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;recvArrFromNB&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr)&nbsp;option<BR>
<B>val</B>&nbsp;recvArrFromNB'&nbsp;<B>:</B>&nbsp;(<I>'af</I>,&nbsp;dgram)&nbsp;sock<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;Word8ArraySlice.slice<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;in_flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;<I>'af</I>&nbsp;sock_addr)&nbsp;option</CODE>
<DD>
 These functions are the nonblocking versions of  <CODE><A HREF="socket.html#SIG:SOCKET.recvVecFrom:VAL:SPEC">recvVecFrom</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.recvVecFrom':VAL:SPEC">recvVecFrom'</A></CODE>,  <CODE><A HREF="socket.html#SIG:SOCKET.recvArrFrom:VAL:SPEC">recvArrFrom</A></CODE>, and  <CODE><A HREF="socket.html#SIG:SOCKET.recvArrFrom':VAL:SPEC">recvArrFrom'</A></CODE> (resp.).  They have the same semantics as their blocking forms, with the exception  that when the operation can complete without blocking, then the result  is wrapped in <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> and if the  operation would have to wait for input, then  <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned instead. 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="generic-sock.html#GenericSock:STR:SPEC">GenericSock</A></CODE>, <CODE><A HREF="inet-sock.html#INetSock:STR:SPEC">INetSock</A></CODE>, <CODE><A HREF="net-host-db.html#NetHostDB:STR:SPEC">NetHostDB</A></CODE>, <CODE><A HREF="serv-db.html#NetServDB:STR:SPEC">NetServDB</A></CODE>, <CODE><A HREF="unix-sock.html#UnixSock:STR:SPEC">UnixSock</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
On Unix systems, the non-blocking mode of socket operations is controlled by changing the socket's state using the <CODE>setsockopt()</CODE> system call. Thus, implementing the non-blocking operations in the <CODE><A HREF="socket.html#Socket:STR:SPEC">Socket</A></CODE> structure may require tracking the socket's blocking/nonblocking state in the representation of the <CODE><A HREF="socket.html#SIG:SOCKET.sock:TY:SPEC">sock</A></CODE> type.
</BLOCKQUOTE>
 


`
