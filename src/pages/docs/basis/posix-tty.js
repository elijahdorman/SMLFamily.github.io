var data = `

<H2><A NAME="section:0"></A>The <CODE>Posix.TTY</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="POSIX_TTY:SIG:SPEC"></A><CODE>POSIX_TTY</CODE><BR>
<B>structure</B>&nbsp;<A NAME="TTY:STR:SPEC"></A><CODE>TTY</CODE><B> : </B>POSIX_TTY<BR>
</CODE>
</BLOCKQUOTE>
<P>
The structure <CODE>Posix.TTY</CODE> specifies a model of a general terminal interface, as described in Section 7 of the POSIX standard 1003.1,1996<B>[CITE]</B>. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_TTY.pid:TY:SPEC" HREF="#SIG:POSIX_TTY.pid:TY">pid</A><BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_TTY.file_desc:TY:SPEC" HREF="#SIG:POSIX_TTY.file_desc:TY">file_desc</A><BR>
<BR>
<B>structure</B>&nbsp;V&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.eof:VAL:SPEC" HREF="#SIG:POSIX_TTY.eof:VAL">eof</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.eol:VAL:SPEC" HREF="#SIG:POSIX_TTY.eol:VAL">eol</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.erase:VAL:SPEC" HREF="#SIG:POSIX_TTY.erase:VAL">erase</A>&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.intr:VAL:SPEC" HREF="#SIG:POSIX_TTY.intr:VAL">intr</A>&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.kill:VAL:SPEC" HREF="#SIG:POSIX_TTY.kill:VAL">kill</A>&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.min:VAL:SPEC" HREF="#SIG:POSIX_TTY.min:VAL">min</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.quit:VAL:SPEC" HREF="#SIG:POSIX_TTY.quit:VAL">quit</A>&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.susp:VAL:SPEC" HREF="#SIG:POSIX_TTY.susp:VAL">susp</A>&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.time:VAL:SPEC" HREF="#SIG:POSIX_TTY.time:VAL">time</A>&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.start:VAL:SPEC" HREF="#SIG:POSIX_TTY.start:VAL">start</A>&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.stop:VAL:SPEC" HREF="#SIG:POSIX_TTY.stop:VAL">stop</A>&nbsp;&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.nccs:VAL:SPEC" HREF="#SIG:POSIX_TTY.nccs:VAL">nccs</A>&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>type</B>&nbsp;<A NAME="SIG:POSIX_TTY.cc:TY:SPEC" HREF="#SIG:POSIX_TTY.cc:TY">cc</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cc:VAL:SPEC" HREF="#SIG:POSIX_TTY.cc:VAL">cc</A>&nbsp;<B>:</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;char)&nbsp;list&nbsp;<B>-&gt;</B>&nbsp;cc<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.update:VAL:SPEC" HREF="#SIG:POSIX_TTY.update:VAL">update</A>&nbsp;<B>:</B>&nbsp;cc&nbsp;<B>*</B>&nbsp;(int&nbsp;<B>*</B>&nbsp;char)&nbsp;list&nbsp;<B>-&gt;</B>&nbsp;cc<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.sub:VAL:SPEC" HREF="#SIG:POSIX_TTY.sub:VAL">sub</A>&nbsp;<B>:</B>&nbsp;cc&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;char<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;I&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.brkint:VAL:SPEC" HREF="#SIG:POSIX_TTY.brkint:VAL">brkint</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.icrnl:VAL:SPEC" HREF="#SIG:POSIX_TTY.icrnl:VAL">icrnl</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ignbrk:VAL:SPEC" HREF="#SIG:POSIX_TTY.ignbrk:VAL">ignbrk</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.igncr:VAL:SPEC" HREF="#SIG:POSIX_TTY.igncr:VAL">igncr</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ignpar:VAL:SPEC" HREF="#SIG:POSIX_TTY.ignpar:VAL">ignpar</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.inlcr:VAL:SPEC" HREF="#SIG:POSIX_TTY.inlcr:VAL">inlcr</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.inpck:VAL:SPEC" HREF="#SIG:POSIX_TTY.inpck:VAL">inpck</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.istrip:VAL:SPEC" HREF="#SIG:POSIX_TTY.istrip:VAL">istrip</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ixoff:VAL:SPEC" HREF="#SIG:POSIX_TTY.ixoff:VAL">ixoff</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ixon:VAL:SPEC" HREF="#SIG:POSIX_TTY.ixon:VAL">ixon</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.parmrk:VAL:SPEC" HREF="#SIG:POSIX_TTY.parmrk:VAL">parmrk</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;O&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.opost:VAL:SPEC" HREF="#SIG:POSIX_TTY.opost:VAL">opost</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;C&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.clocal:VAL:SPEC" HREF="#SIG:POSIX_TTY.clocal:VAL">clocal</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cread:VAL:SPEC" HREF="#SIG:POSIX_TTY.cread:VAL">cread</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cs5:VAL:SPEC" HREF="#SIG:POSIX_TTY.cs5:VAL">cs5</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cs6:VAL:SPEC" HREF="#SIG:POSIX_TTY.cs6:VAL">cs6</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cs7:VAL:SPEC" HREF="#SIG:POSIX_TTY.cs7:VAL">cs7</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cs8:VAL:SPEC" HREF="#SIG:POSIX_TTY.cs8:VAL">cs8</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.csize:VAL:SPEC" HREF="#SIG:POSIX_TTY.csize:VAL">csize</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.cstopb:VAL:SPEC" HREF="#SIG:POSIX_TTY.cstopb:VAL">cstopb</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.hupcl:VAL:SPEC" HREF="#SIG:POSIX_TTY.hupcl:VAL">hupcl</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.parenb:VAL:SPEC" HREF="#SIG:POSIX_TTY.parenb:VAL">parenb</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.parodd:VAL:SPEC" HREF="#SIG:POSIX_TTY.parodd:VAL">parodd</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;L&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.echo:VAL:SPEC" HREF="#SIG:POSIX_TTY.echo:VAL">echo</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.echoe:VAL:SPEC" HREF="#SIG:POSIX_TTY.echoe:VAL">echoe</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.echok:VAL:SPEC" HREF="#SIG:POSIX_TTY.echok:VAL">echok</A>&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.echonl:VAL:SPEC" HREF="#SIG:POSIX_TTY.echonl:VAL">echonl</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.icanon:VAL:SPEC" HREF="#SIG:POSIX_TTY.icanon:VAL">icanon</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.iexten:VAL:SPEC" HREF="#SIG:POSIX_TTY.iexten:VAL">iexten</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.isig:VAL:SPEC" HREF="#SIG:POSIX_TTY.isig:VAL">isig</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.noflsh:VAL:SPEC" HREF="#SIG:POSIX_TTY.noflsh:VAL">noflsh</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.tostop:VAL:SPEC" HREF="#SIG:POSIX_TTY.tostop:VAL">tostop</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_TTY.speed:TY:SPEC" HREF="#SIG:POSIX_TTY.speed:TY">speed</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.compareSpeed:VAL:SPEC" HREF="#SIG:POSIX_TTY.compareSpeed:VAL">compareSpeed</A>&nbsp;<B>:</B>&nbsp;speed&nbsp;<B>*</B>&nbsp;speed&nbsp;<B>-&gt;</B>&nbsp;order<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.speedToWord:VAL:SPEC" HREF="#SIG:POSIX_TTY.speedToWord:VAL">speedToWord</A>&nbsp;<B>:</B>&nbsp;speed&nbsp;<B>-&gt;</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.wordToSpeed:VAL:SPEC" HREF="#SIG:POSIX_TTY.wordToSpeed:VAL">wordToSpeed</A>&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;speed<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b0:VAL:SPEC" HREF="#SIG:POSIX_TTY.b0:VAL">b0</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b50:VAL:SPEC" HREF="#SIG:POSIX_TTY.b50:VAL">b50</A>&nbsp;&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b75:VAL:SPEC" HREF="#SIG:POSIX_TTY.b75:VAL">b75</A>&nbsp;&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b110:VAL:SPEC" HREF="#SIG:POSIX_TTY.b110:VAL">b110</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b134:VAL:SPEC" HREF="#SIG:POSIX_TTY.b134:VAL">b134</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b150:VAL:SPEC" HREF="#SIG:POSIX_TTY.b150:VAL">b150</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b200:VAL:SPEC" HREF="#SIG:POSIX_TTY.b200:VAL">b200</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b300:VAL:SPEC" HREF="#SIG:POSIX_TTY.b300:VAL">b300</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b600:VAL:SPEC" HREF="#SIG:POSIX_TTY.b600:VAL">b600</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b1200:VAL:SPEC" HREF="#SIG:POSIX_TTY.b1200:VAL">b1200</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b1800:VAL:SPEC" HREF="#SIG:POSIX_TTY.b1800:VAL">b1800</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b2400:VAL:SPEC" HREF="#SIG:POSIX_TTY.b2400:VAL">b2400</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b4800:VAL:SPEC" HREF="#SIG:POSIX_TTY.b4800:VAL">b4800</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b9600:VAL:SPEC" HREF="#SIG:POSIX_TTY.b9600:VAL">b9600</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b19200:VAL:SPEC" HREF="#SIG:POSIX_TTY.b19200:VAL">b19200</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.b38400:VAL:SPEC" HREF="#SIG:POSIX_TTY.b38400:VAL">b38400</A>&nbsp;<B>:</B>&nbsp;speed<BR>
<BR>
<B>type</B>&nbsp;<A NAME="SIG:POSIX_TTY.termios:TY:SPEC" HREF="#SIG:POSIX_TTY.termios:TY">termios</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.termios:VAL:SPEC" HREF="#SIG:POSIX_TTY.termios:VAL">termios</A>&nbsp;<B>:</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iflag&nbsp;<B>:</B>&nbsp;I.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oflag&nbsp;<B>:</B>&nbsp;O.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cflag&nbsp;<B>:</B>&nbsp;C.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lflag&nbsp;<B>:</B>&nbsp;L.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cc&nbsp;<B>:</B>&nbsp;V.cc,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ispeed&nbsp;<B>:</B>&nbsp;speed,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ospeed&nbsp;<B>:</B>&nbsp;speed<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<B>-&gt;</B>&nbsp;termios<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.fieldsOf:VAL:SPEC" HREF="#SIG:POSIX_TTY.fieldsOf:VAL">fieldsOf</A>&nbsp;<B>:</B>&nbsp;termios<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iflag&nbsp;<B>:</B>&nbsp;I.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oflag&nbsp;<B>:</B>&nbsp;O.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cflag&nbsp;<B>:</B>&nbsp;C.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lflag&nbsp;<B>:</B>&nbsp;L.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cc&nbsp;<B>:</B>&nbsp;V.cc,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ispeed&nbsp;<B>:</B>&nbsp;speed,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ospeed&nbsp;<B>:</B>&nbsp;speed<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getiflag:VAL:SPEC" HREF="#SIG:POSIX_TTY.getiflag:VAL">getiflag</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;I.flags<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getoflag:VAL:SPEC" HREF="#SIG:POSIX_TTY.getoflag:VAL">getoflag</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;O.flags<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getcflag:VAL:SPEC" HREF="#SIG:POSIX_TTY.getcflag:VAL">getcflag</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;C.flags<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getlflag:VAL:SPEC" HREF="#SIG:POSIX_TTY.getlflag:VAL">getlflag</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;L.flags<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getcc:VAL:SPEC" HREF="#SIG:POSIX_TTY.getcc:VAL">getcc</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;V.cc<BR>
<BR>
<B>structure</B>&nbsp;CF&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getospeed:VAL:SPEC" HREF="#SIG:POSIX_TTY.getospeed:VAL">getospeed</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;speed<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getispeed:VAL:SPEC" HREF="#SIG:POSIX_TTY.getispeed:VAL">getispeed</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;speed<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.setospeed:VAL:SPEC" HREF="#SIG:POSIX_TTY.setospeed:VAL">setospeed</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>*</B>&nbsp;speed&nbsp;<B>-&gt;</B>&nbsp;termios<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.setispeed:VAL:SPEC" HREF="#SIG:POSIX_TTY.setispeed:VAL">setispeed</A>&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>*</B>&nbsp;speed&nbsp;<B>-&gt;</B>&nbsp;termios<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;TC&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_TTY.set_action:TY:SPEC" HREF="#SIG:POSIX_TTY.set_action:TY">set_action</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.sanow:VAL:SPEC" HREF="#SIG:POSIX_TTY.sanow:VAL">sanow</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;set_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.sadrain:VAL:SPEC" HREF="#SIG:POSIX_TTY.sadrain:VAL">sadrain</A>&nbsp;<B>:</B>&nbsp;set_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.saflush:VAL:SPEC" HREF="#SIG:POSIX_TTY.saflush:VAL">saflush</A>&nbsp;<B>:</B>&nbsp;set_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_TTY.flow_action:TY:SPEC" HREF="#SIG:POSIX_TTY.flow_action:TY">flow_action</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ooff:VAL:SPEC" HREF="#SIG:POSIX_TTY.ooff:VAL">ooff</A>&nbsp;<B>:</B>&nbsp;flow_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.oon:VAL:SPEC" HREF="#SIG:POSIX_TTY.oon:VAL">oon</A>&nbsp;&nbsp;<B>:</B>&nbsp;flow_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ioff:VAL:SPEC" HREF="#SIG:POSIX_TTY.ioff:VAL">ioff</A>&nbsp;<B>:</B>&nbsp;flow_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ion:VAL:SPEC" HREF="#SIG:POSIX_TTY.ion:VAL">ion</A>&nbsp;&nbsp;<B>:</B>&nbsp;flow_action<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_TTY.queue_sel:TY:SPEC" HREF="#SIG:POSIX_TTY.queue_sel:TY">queue_sel</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.iflush:VAL:SPEC" HREF="#SIG:POSIX_TTY.iflush:VAL">iflush</A>&nbsp;&nbsp;<B>:</B>&nbsp;queue_sel<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.oflush:VAL:SPEC" HREF="#SIG:POSIX_TTY.oflush:VAL">oflush</A>&nbsp;&nbsp;<B>:</B>&nbsp;queue_sel<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.ioflush:VAL:SPEC" HREF="#SIG:POSIX_TTY.ioflush:VAL">ioflush</A>&nbsp;<B>:</B>&nbsp;queue_sel<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getattr:VAL:SPEC" HREF="#SIG:POSIX_TTY.getattr:VAL">getattr</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;termios<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.setattr:VAL:SPEC" HREF="#SIG:POSIX_TTY.setattr:VAL">setattr</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;set_action&nbsp;<B>*</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.sendbreak:VAL:SPEC" HREF="#SIG:POSIX_TTY.sendbreak:VAL">sendbreak</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.drain:VAL:SPEC" HREF="#SIG:POSIX_TTY.drain:VAL">drain</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.flush:VAL:SPEC" HREF="#SIG:POSIX_TTY.flush:VAL">flush</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;queue_sel&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.flow:VAL:SPEC" HREF="#SIG:POSIX_TTY.flow:VAL">flow</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;flow_action&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.getpgrp:VAL:SPEC" HREF="#SIG:POSIX_TTY.getpgrp:VAL">getpgrp</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;pid<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_TTY.setpgrp:VAL:SPEC" HREF="#SIG:POSIX_TTY.setpgrp:VAL">setpgrp</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;pid&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;<B>end</B><BR>
</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:POSIX_TTY.pid:TY"></A><CODE><B>eqtype</B>&nbsp;pid</CODE>
<DD>
 A process identifier. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.file_desc:TY"></A><CODE><B>eqtype</B>&nbsp;file_desc</CODE>
<DD>
 An open file descriptor. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.V:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;V</CODE>
<DD>
      The <CODE>V</CODE> substructure provides means for specifying the special control characters. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_TTY.V.eof:VAL"></A><CODE><B>val</B>&nbsp;eof&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;eol&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;erase&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;intr&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;kill&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;min&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;quit&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;susp&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;time&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;start&nbsp;<B>:</B>&nbsp;int<BR>
<B>val</B>&nbsp;stop&nbsp;<B>:</B>&nbsp;int</CODE>
<DD>
          Indices for the special control characters <CODE>EOF</CODE>, <CODE>EOL</CODE>, <CODE>ERASE</CODE>, <CODE>INTR</CODE>, <CODE>KILL</CODE>, <CODE>MIN</CODE>, <CODE>QUIT</CODE>, <CODE>SUSP</CODE>, <CODE>TIME</CODE>, <CODE>START</CODE>, and <CODE>STOP</CODE>, respectively. These are the indices used in the functions <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V.cc:VAL:SPEC">cc</A></CODE> and <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V.sub:VAL:SPEC">sub</A></CODE>.  
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.V.nccs:VAL"></A><CODE><B>val</B>&nbsp;nccs&nbsp;<B>:</B>&nbsp;int</CODE>
<DD>
             The total number of special characters. Thus, valid indices range from 0 to <CODE>nccs</CODE>-1. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.V.cc:TY"></A><CODE><B>type</B>&nbsp;cc</CODE>
<DD>
            A vector of special control characters used by the device driver. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.V.cc:VAL"></A>
<DT> <CODE>cc <VAR>l</VAR> </CODE>
<DD>
creates a value of type <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V.cc:TY:SPEC">cc</A></CODE>, mapping an index to its paired character. Unspecified indices are associated with <CODE>#&quot;\000&quot;</CODE>. For example, to have the character <CODE>#&quot;\^D&quot;</CODE> (control-D) serve as the <CODE>EOF</CODE> (end-of-file) character, one would use  
<PRE>
cc [(V.eof, #&quot;\^D&quot;)]
</PRE>
 to create a <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V.cc:TY:SPEC">cc</A></CODE> value, embed this in a  <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.termios:TY:SPEC">termios</A></CODE> type, and invoke <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.setattr:VAL:SPEC">TC.setattr</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.V.update:VAL"></A>
<DT> <CODE>update (<VAR>cs</VAR>, <VAR>l</VAR>) </CODE>
<DD>
returns a copy of <VAR>cs</VAR>, but with the new mappings specified by <VAR>l</VAR> overwriting the original mappings. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.V.sub:VAL"></A>
<DT> <CODE>sub (<VAR>cs</VAR>, <VAR>i</VAR>) </CODE>
<DD>
returns the special control character associated in <VAR>cs</VAR> with the index <VAR>i</VAR>. It raises <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> if <VAR>i</VAR> is negative or <VAR>i</VAR> &gt;= <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V.nccs:VAL:SPEC">nccs</A></CODE>. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_TTY.I:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;I</CODE>
<DD>
      The <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I:STR:SPEC">I</A></CODE> substructure contains flags for specifying input control. The following table provides a brief description of the flags. 
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=CENTER VALIGN=TOP>
<B>Flag name</B>
<TH ALIGN=CENTER VALIGN=TOP>
<B>Description</B>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.brkint:VAL:SPEC">brkint</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Signal interrupt on break. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.icrnl:VAL:SPEC">icrnl</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
 Map <CODE>CR</CODE> (<CODE>#&quot;\^M&quot;</CODE>) to <CODE>NL</CODE> (<CODE>#&quot;\n&quot;</CODE>) on input. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.ignbrk:VAL:SPEC">ignbrk</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Ignore a break condition. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.igncr:VAL:SPEC">igncr</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Ignore <CODE>CR</CODE> characters. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.ignpar:VAL:SPEC">ignpar</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Ignore characters with parity errors. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.inlcr:VAL:SPEC">inlcr</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Map <CODE>NL</CODE> to <CODE>CR</CODE> on input. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.inpck:VAL:SPEC">inpck</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable input parity check. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.istrip:VAL:SPEC">istrip</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Strip the eighth bit of a byte. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.ixoff:VAL:SPEC">ixoff</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable start/stop input control. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.ixon:VAL:SPEC">ixon</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable start/stop output control. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.I.parmrk:VAL:SPEC">parmrk</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Mark parity errors. 
</TABLE>
</CENTER>
<HR>
 
<BR>
<BR>

<DL>
</DL>
<DT> <A NAME="SIG:POSIX_TTY.O:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;O</CODE>
<DD>
      The <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.O:STR:SPEC">O</A></CODE> substructure contains flags for specifying output control. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_TTY.O.opost:VAL"></A><CODE><B>val</B>&nbsp;opost&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Perform output processing. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_TTY.C:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;C</CODE>
<DD>
      The <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C:STR:SPEC">C</A></CODE> substructure contains flags for specifying basic terminal hardware control. The following table provides a brief description of the flags. 
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=CENTER VALIGN=TOP>
<B>Flag name</B>
<TH ALIGN=CENTER VALIGN=TOP>
<B>Description</B>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.clocal:VAL:SPEC">clocal</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Ignore modem status lines.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cread:VAL:SPEC">cread</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable the receiver.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.csize:VAL:SPEC">csize</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Mask for the number of bits per byte used for both transmission and reception. This is the union of <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs5:VAL:SPEC">cs5</A></CODE>,  <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs6:VAL:SPEC">cs6</A></CODE>,  <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs7:VAL:SPEC">cs7</A></CODE>, and <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs8:VAL:SPEC">cs8</A></CODE>.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs5:VAL:SPEC">cs5</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
5 bits per byte.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs6:VAL:SPEC">cs6</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
6 bits per byte.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs7:VAL:SPEC">cs7</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
7 bits per byte.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cs8:VAL:SPEC">cs8</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
8 bits per byte.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.cstopb:VAL:SPEC">cstopb</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Specifies sending two stop bits rather than one.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.hupcl:VAL:SPEC">hupcl</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Hang up the modem connection when the last process with the port open closes it.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.parenb:VAL:SPEC">parenb</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable parity generation and detection.
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.parodd:VAL:SPEC">parodd</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Use odd parity rather than even if <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.C.parenb:VAL:SPEC">parenb</A></CODE> is set.
</TABLE>
</CENTER>
<HR>
 
<BR>
<BR>

<DL>
</DL>
<DT> <A NAME="SIG:POSIX_TTY.L:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;L</CODE>
<DD>
      The <CODE>L</CODE> substructure contains flags for specifying various local control modes. The following table provides a brief description of the flags. 
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=CENTER VALIGN=TOP>
<B>Flag name</B>
<TH ALIGN=CENTER VALIGN=TOP>
<B>Description</B>
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.echo:VAL:SPEC">echo</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Echo input characters back to the terminal. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.echoe:VAL:SPEC">echoe</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Echo the <CODE>ERASE</CODE> character on backspace in canonical mode. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.echok:VAL:SPEC">echok</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Echo the <CODE>KILL</CODE> character in canonical mode. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.echonl:VAL:SPEC">echonl</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
In canonical mode, echo a <CODE>NL</CODE> character even if <CODE>echo</CODE> is not set. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.icanon:VAL:SPEC">icanon</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Set canonical mode, enabling erase and kill processing, and providing line-based input. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.iexten:VAL:SPEC">iexten</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable extended functions. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.isig:VAL:SPEC">isig</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Enable input characters to be mapped to signals. 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.noflsh:VAL:SPEC">noflsh</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Disable the normal input and output flushing connected with the <CODE>INTR</CODE>, <CODE>QUIT</CODE>, and <CODE>SUSP</CODE> characters. (See the <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V:STR:SPEC">Posix.TTY.V</A></CODE> substructure.) 
<TR>
<TD ALIGN=LEFT VALIGN=TOP>
<CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.L.tostop:VAL:SPEC">tostop</A></CODE>
<TD ALIGN=LEFT VALIGN=TOP>
Send <CODE><A HREF="posix-signal.html#SIG:POSIX_SIGNAL.ttou:VAL:SPEC">Posix.Signal.ttou</A></CODE>  for background output. 
</TABLE>
</CENTER>
<HR>
 
<BR>
<BR>

<DL>
</DL>
<DT> <A NAME="SIG:POSIX_TTY.speed:TY"></A><CODE><B>eqtype</B>&nbsp;speed</CODE>
<DD>
        Terminal input and output baud rates. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.compareSpeed:VAL"></A>
<DT> <CODE>compareSpeed (<VAR>sp</VAR>, <VAR>sp'</VAR>) </CODE>
<DD>
returns <CODE><A HREF="general.html#SIG:GENERAL.order:TY:SPEC">LESS</A></CODE>, <CODE><A HREF="general.html#SIG:GENERAL.order:TY:SPEC">EQUAL</A></CODE>, or <CODE><A HREF="general.html#SIG:GENERAL.order:TY:SPEC">GREATER</A></CODE>  when the baud rate <VAR>sp</VAR> is less than, equal to, or greater than  that of <VAR>sp'</VAR>, respectively. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.speedToWord:VAL"></A><CODE><B>val</B>&nbsp;speedToWord&nbsp;<B>:</B>&nbsp;speed&nbsp;<B>-&gt;</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;wordToSpeed&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;speed</CODE>
<DD>
          These converts between a <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.speed:TY:SPEC">speed</A></CODE> value and its underlying word representation.  No checking is performed by <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.wordToSpeed:VAL:SPEC">wordToSpeed</A></CODE> to ensure the resulting value corresponds to an allowed speed in the given system. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.termios:TY"></A><CODE><B>type</B>&nbsp;termios</CODE>
<DD>
          The attributes associated with a terminal. It acts as an abstract representation of the record used as the argument to the <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.termios:VAL:SPEC">termios</A></CODE> function. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.termios:VAL"></A><CODE><B>val</B>&nbsp;termios&nbsp;<B>:</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iflag&nbsp;<B>:</B>&nbsp;I.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oflag&nbsp;<B>:</B>&nbsp;O.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cflag&nbsp;<B>:</B>&nbsp;C.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lflag&nbsp;<B>:</B>&nbsp;L.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cc&nbsp;<B>:</B>&nbsp;V.cc,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ispeed&nbsp;<B>:</B>&nbsp;speed,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ospeed&nbsp;<B>:</B>&nbsp;speed<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<B>-&gt;</B>&nbsp;termios</CODE>
<DD>
      This creates a <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.termios:TY:SPEC">termios</A></CODE> value using the given flags, special characters, and speeds. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.fieldsOf:VAL"></A><CODE><B>val</B>&nbsp;fieldsOf&nbsp;<B>:</B>&nbsp;termios<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iflag&nbsp;<B>:</B>&nbsp;I.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;oflag&nbsp;<B>:</B>&nbsp;O.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cflag&nbsp;<B>:</B>&nbsp;C.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lflag&nbsp;<B>:</B>&nbsp;L.flags,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cc&nbsp;<B>:</B>&nbsp;V.cc,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ispeed&nbsp;<B>:</B>&nbsp;speed,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ospeed&nbsp;<B>:</B>&nbsp;speed<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</CODE>
<DD>
      This returns a concrete representation of a <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.termios:TY:SPEC">termios</A></CODE> value. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.getiflag:VAL"></A><CODE><B>val</B>&nbsp;getiflag&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;I.flags<BR>
<B>val</B>&nbsp;getoflag&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;O.flags<BR>
<B>val</B>&nbsp;getcflag&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;C.flags<BR>
<B>val</B>&nbsp;getlflag&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;L.flags<BR>
<B>val</B>&nbsp;getcc&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;V.cc</CODE>
<DD>
   These are the obvious projection functions from a <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.termios:TY:SPEC">termios</A></CODE> value to its constituent fields. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.CF:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;CF</CODE>
<DD>
      The <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.CF:STR:SPEC">CF</A></CODE> substructure contains functions for getting and setting the input and output baud rates in a <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.termios:TY:SPEC">termios</A></CODE> value. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_TTY.CF.getospeed:VAL"></A><CODE><B>val</B>&nbsp;getospeed&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;speed<BR>
<B>val</B>&nbsp;getispeed&nbsp;<B>:</B>&nbsp;termios&nbsp;<B>-&gt;</B>&nbsp;speed</CODE>
<DD>
  These return the output and input baud rates, respectively, of the argument. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.CF.setospeed:VAL"></A>
<DT> <CODE>setospeed (<VAR>t</VAR>, <VAR>speed</VAR>) </CODE>
<DT> <CODE>                setispeed (<VAR>t</VAR>, <VAR>speed</VAR>) </CODE>
<DD>
                These return a copy of <VAR>t</VAR>, but with the output (input) speed set to <VAR>speed</VAR>. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_TTY.TC:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;TC</CODE>
<DD>
      The <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC:STR:SPEC">TC</A></CODE> substructure contains various types and functions used for handling terminal line control. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_TTY.TC.set_action:TY"></A><CODE><B>eqtype</B>&nbsp;set_action</CODE>
<DD>
           Values of this type specify the behavior of the <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.setattr:VAL:SPEC">setattr</A></CODE> function. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.sanow:VAL"></A><CODE><B>val</B>&nbsp;sanow&nbsp;<B>:</B>&nbsp;set_action<BR>
<B>val</B>&nbsp;sadrain&nbsp;<B>:</B>&nbsp;set_action<BR>
<B>val</B>&nbsp;saflush&nbsp;<B>:</B>&nbsp;set_action</CODE>
<DD>
            
<DL>
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.sanow:VAL:SPEC">sanow</A></CODE>
<DD>
Changes occur immediately. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.sadrain:VAL:SPEC">sadrain</A></CODE>
<DD>
Changes occur after all output is transmitted. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.saflush:VAL:SPEC">saflush</A></CODE>
<DD>
Changes occur after all output is transmitted and after all received but unread input is discarded. 
</DL>
 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.flow_action:TY"></A><CODE><B>eqtype</B>&nbsp;flow_action</CODE>
<DD>
           Values of this type specify the behavior of the <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.flow:VAL:SPEC">flow</A></CODE> function. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.ooff:VAL"></A><CODE><B>val</B>&nbsp;ooff&nbsp;<B>:</B>&nbsp;flow_action<BR>
<B>val</B>&nbsp;oon&nbsp;<B>:</B>&nbsp;flow_action<BR>
<B>val</B>&nbsp;ioff&nbsp;<B>:</B>&nbsp;flow_action<BR>
<B>val</B>&nbsp;ion&nbsp;<B>:</B>&nbsp;flow_action</CODE>
<DD>
            
<DL>
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.ooff:VAL:SPEC">ooff</A></CODE>
<DD>
Causes suspension of output. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.oon:VAL:SPEC">oon</A></CODE>
<DD>
Restarts suspended output. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.ioff:VAL:SPEC">ioff</A></CODE>
<DD>
Causes the transmission of a <CODE>STOP</CODE> character to the terminal device, to stop it from transmitting data. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.ion:VAL:SPEC">ion</A></CODE>
<DD>
Causes the transmission of a <CODE>START</CODE> character to the terminal device, to restart it transmitting data. 
</DL>
 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.queue_sel:TY"></A><CODE><B>eqtype</B>&nbsp;queue_sel</CODE>
<DD>
           Values of this type specify the behavior of the <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.flush:VAL:SPEC">flush</A></CODE> function. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.iflush:VAL"></A><CODE><B>val</B>&nbsp;iflush&nbsp;<B>:</B>&nbsp;queue_sel<BR>
<B>val</B>&nbsp;oflush&nbsp;<B>:</B>&nbsp;queue_sel<BR>
<B>val</B>&nbsp;ioflush&nbsp;<B>:</B>&nbsp;queue_sel</CODE>
<DD>
            
<DL>
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.iflush:VAL:SPEC">iflush</A></CODE>
<DD>
Causes all data received but not read to be flushed. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.oflush:VAL:SPEC">oflush</A></CODE>
<DD>
Causes all data written but not transmitted to be flushed. 
<DT> <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.TC.ioflush:VAL:SPEC">ioflush</A></CODE>
<DD>
Discards all data written but not transmitted, or received but not read. 
</DL>
 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.getattr:VAL"></A>
<DT> <CODE>getattr <VAR>fd</VAR> </CODE>
<DD>
gets the attributes of the terminal associated with file descriptor <VAR>fd</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.setattr:VAL"></A>
<DT> <CODE>setattr (<VAR>fd</VAR>, <VAR>action</VAR>, <VAR>termios</VAR>) </CODE>
<DD>
sets the attributes of the terminal associated with file descriptor <VAR>fd</VAR> as specified in <VAR>termios</VAR>. When the change occurs is specified by <VAR>action</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.sendbreak:VAL"></A>
<DT> <CODE>sendbreak (<VAR>fd</VAR>, <VAR>t</VAR>) </CODE>
<DD>
causes the transmission of a sequence of zero-valued bits to be sent, if the associated terminal is using asynchronous serial data transmission. If <VAR>t</VAR> is 0, this will send zero-valued bits for at least a quarter second, and no more than half a second. If <VAR>t</VAR> is not zero, zero-valued bits are transmitted for an implementation-defined period of time. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.drain:VAL"></A>
<DT> <CODE>drain <VAR>fd</VAR> </CODE>
<DD>
waits for all output written on <VAR>fd</VAR> to be transmitted. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.flush:VAL"></A>
<DT> <CODE>flush (<VAR>fd</VAR>, <VAR>qs</VAR>) </CODE>
<DD>
discards any data written but not transmitted, or received but not read, depending on the value of <VAR>qs</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.flow:VAL"></A>
<DT> <CODE>flow (<VAR>fd</VAR>, <VAR>action</VAR>) </CODE>
<DD>
suspends and restarts transmission or reception of data, depending on the value of <VAR>action</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.getpgrp:VAL"></A>
<DT> <CODE>getpgrp <VAR>fd</VAR> </CODE>
<DD>
returns the process group ID of the foreground process group associated with the terminal attached to <VAR>fd</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_TTY.TC.setpgrp:VAL"></A>
<DT> <CODE>setpgrp (<VAR>fd</VAR>, <VAR>pid</VAR>) </CODE>
<DD>
sets the foreground process group ID associated with <VAR>fd</VAR> to <VAR>pid</VAR>. 
<BR>
<BR>

</DL>
</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A></CODE>, <CODE><A HREF="posix.html#Posix:STR:SPEC">Posix</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.Error:STR:SPEC">Posix.Error</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.FileSys:STR:SPEC">Posix.FileSys</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.IO:STR:SPEC">Posix.IO</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.Process:STR:SPEC">Posix.Process</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
The values of type <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.speed:TY:SPEC">speed</A></CODE> defined in this structure specify the standard baud rates with the obvious correspondence, <I>i.e.</I>, <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.b1200:VAL:SPEC">b1200</A></CODE> is 1200 baud, <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.b9600:VAL:SPEC">b9600</A></CODE> is 9600 baud, etc. The value <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.b0:VAL:SPEC">b0</A></CODE> indicates ``hang up.''


`
