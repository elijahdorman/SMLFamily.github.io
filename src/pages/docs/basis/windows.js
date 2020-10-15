var data = `


<H2><A NAME="section:0"></A>The <CODE>Windows</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="WINDOWS:SIG:SPEC"></A><CODE>WINDOWS</CODE>&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
<B>structure</B>&nbsp;<A NAME="Windows:STR:SPEC"></A><CODE>Windows</CODE><B> :> </B>WINDOWS&nbsp;&nbsp;<FONT COLOR="#FF0000"><CODE><I>(* OPTIONAL *)</I></CODE></FONT><BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>Windows</CODE> structure provides a high-level interface to various system features based on the Microsoft Microsoft Windows operating system model. These functions include the ability to create and communicate with separate processes, as well as to interact with the registry and file subsystems. In particular, using this module, a program can invoke a separate process and obtain input and output streams connected to the standard output and input streams, respectively, of the other process. The functions provide a richer and more detailed interface than the comparable functions provided by the substructures in <CODE><A HREF="os.html#OS:STR:SPEC">OS</A></CODE>. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>structure</B>&nbsp;Key&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.allAccess:VAL:SPEC" HREF="#SIG:WINDOWS.allAccess:VAL">allAccess</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.createLink:VAL:SPEC" HREF="#SIG:WINDOWS.createLink:VAL">createLink</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.createSubKey:VAL:SPEC" HREF="#SIG:WINDOWS.createSubKey:VAL">createSubKey</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.enumerateSubKeys:VAL:SPEC" HREF="#SIG:WINDOWS.enumerateSubKeys:VAL">enumerateSubKeys</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.execute:VAL:SPEC" HREF="#SIG:WINDOWS.execute:VAL">execute</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.notify:VAL:SPEC" HREF="#SIG:WINDOWS.notify:VAL">notify</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.queryValue:VAL:SPEC" HREF="#SIG:WINDOWS.queryValue:VAL">queryValue</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.read:VAL:SPEC" HREF="#SIG:WINDOWS.read:VAL">read</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.setValue:VAL:SPEC" HREF="#SIG:WINDOWS.setValue:VAL">setValue</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.write:VAL:SPEC" HREF="#SIG:WINDOWS.write:VAL">write</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;Reg&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>eqtype</B>&nbsp;<A NAME="SIG:WINDOWS.hkey:TY:SPEC" HREF="#SIG:WINDOWS.hkey:TY">hkey</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.classesRoot:VAL:SPEC" HREF="#SIG:WINDOWS.classesRoot:VAL">classesRoot</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.currentUser:VAL:SPEC" HREF="#SIG:WINDOWS.currentUser:VAL">currentUser</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.localMachine:VAL:SPEC" HREF="#SIG:WINDOWS.localMachine:VAL">localMachine</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.users:VAL:SPEC" HREF="#SIG:WINDOWS.users:VAL">users</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.performanceData:VAL:SPEC" HREF="#SIG:WINDOWS.performanceData:VAL">performanceData</A>&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.currentConfig:VAL:SPEC" HREF="#SIG:WINDOWS.currentConfig:VAL">currentConfig</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.dynData:VAL:SPEC" HREF="#SIG:WINDOWS.dynData:VAL">dynData</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>datatype</B>&nbsp;<A NAME="SIG:WINDOWS.create_result:TY:SPEC" HREF="#SIG:WINDOWS.create_result:TY">create_result</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;<A NAME="SIG:WINDOWS.CREATED_NEW_KEY:TY:SPEC" HREF="#SIG:WINDOWS.CREATED_NEW_KEY:TY">CREATED_NEW_KEY</A>&nbsp;<B>of</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;<A NAME="SIG:WINDOWS.OPENED_EXISTING_KEY:TY:SPEC" HREF="#SIG:WINDOWS.OPENED_EXISTING_KEY:TY">OPENED_EXISTING_KEY</A>&nbsp;<B>of</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.createKeyEx:VAL:SPEC" HREF="#SIG:WINDOWS.createKeyEx:VAL">createKeyEx</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;string&nbsp;<B>*</B>&nbsp;Key.flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;create_result<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.openKeyEx:VAL:SPEC" HREF="#SIG:WINDOWS.openKeyEx:VAL">openKeyEx</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;string&nbsp;<B>*</B>&nbsp;Key.flags&nbsp;<B>-&gt;</B>&nbsp;hkey<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.closeKey:VAL:SPEC" HREF="#SIG:WINDOWS.closeKey:VAL">closeKey</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.deleteKey:VAL:SPEC" HREF="#SIG:WINDOWS.deleteKey:VAL">deleteKey</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.deleteValue:VAL:SPEC" HREF="#SIG:WINDOWS.deleteValue:VAL">deleteValue</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.enumKeyEx:VAL:SPEC" HREF="#SIG:WINDOWS.enumKeyEx:VAL">enumKeyEx</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.enumValueEx:VAL:SPEC" HREF="#SIG:WINDOWS.enumValueEx:VAL">enumValueEx</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;int&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>datatype</B>&nbsp;<A NAME="SIG:WINDOWS.value:TY:SPEC" HREF="#SIG:WINDOWS.value:TY">value</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;<A NAME="SIG:WINDOWS.SZ:TY:SPEC" HREF="#SIG:WINDOWS.SZ:TY">SZ</A>&nbsp;<B>of</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;<A NAME="SIG:WINDOWS.DWORD:TY:SPEC" HREF="#SIG:WINDOWS.DWORD:TY">DWORD</A>&nbsp;<B>of</B>&nbsp;SysWord.word<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;<A NAME="SIG:WINDOWS.BINARY:TY:SPEC" HREF="#SIG:WINDOWS.BINARY:TY">BINARY</A>&nbsp;<B>of</B>&nbsp;Word8Vector.vector<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;<A NAME="SIG:WINDOWS.MULTI_SZ:TY:SPEC" HREF="#SIG:WINDOWS.MULTI_SZ:TY">MULTI_SZ</A>&nbsp;<B>of</B>&nbsp;string&nbsp;list<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;<A NAME="SIG:WINDOWS.EXPAND_SZ:TY:SPEC" HREF="#SIG:WINDOWS.EXPAND_SZ:TY">EXPAND_SZ</A>&nbsp;<B>of</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.queryValueEx:VAL:SPEC" HREF="#SIG:WINDOWS.queryValueEx:VAL">queryValueEx</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;value&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.setValueEx:VAL:SPEC" HREF="#SIG:WINDOWS.setValueEx:VAL">setValueEx</A>&nbsp;<B>:</B>&nbsp;hkey&nbsp;<B>*</B>&nbsp;string&nbsp;<B>*</B>&nbsp;value&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;Config&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.platformWin32s:VAL:SPEC" HREF="#SIG:WINDOWS.platformWin32s:VAL">platformWin32s</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.platformWin32Windows:VAL:SPEC" HREF="#SIG:WINDOWS.platformWin32Windows:VAL">platformWin32Windows</A>&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.platformWin32NT:VAL:SPEC" HREF="#SIG:WINDOWS.platformWin32NT:VAL">platformWin32NT</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.platformWin32CE:VAL:SPEC" HREF="#SIG:WINDOWS.platformWin32CE:VAL">platformWin32CE</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.getVersionEx:VAL:SPEC" HREF="#SIG:WINDOWS.getVersionEx:VAL">getVersionEx</A>&nbsp;<B>:</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;majorVersion&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minorVersion&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;buildNumber&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;platformId&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;csdVersion&nbsp;<B>:</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.getWindowsDirectory:VAL:SPEC" HREF="#SIG:WINDOWS.getWindowsDirectory:VAL">getWindowsDirectory</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.getSystemDirectory:VAL:SPEC" HREF="#SIG:WINDOWS.getSystemDirectory:VAL">getSystemDirectory</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.getComputerName:VAL:SPEC" HREF="#SIG:WINDOWS.getComputerName:VAL">getComputerName</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.getUserName:VAL:SPEC" HREF="#SIG:WINDOWS.getUserName:VAL">getUserName</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;DDE&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>type</B>&nbsp;<A NAME="SIG:WINDOWS.info:TY:SPEC" HREF="#SIG:WINDOWS.info:TY">info</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.startDialog:VAL:SPEC" HREF="#SIG:WINDOWS.startDialog:VAL">startDialog</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;info<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.executeString:VAL:SPEC" HREF="#SIG:WINDOWS.executeString:VAL">executeString</A>&nbsp;<B>:</B>&nbsp;info&nbsp;<B>*</B>&nbsp;string&nbsp;<B>*</B>&nbsp;int&nbsp;<B>*</B>&nbsp;Time.time<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.stopDialog:VAL:SPEC" HREF="#SIG:WINDOWS.stopDialog:VAL">stopDialog</A>&nbsp;<B>:</B>&nbsp;info&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.getVolumeInformation:VAL:SPEC" HREF="#SIG:WINDOWS.getVolumeInformation:VAL">getVolumeInformation</A>&nbsp;<B>:</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;volumeName&nbsp;<B>:</B>&nbsp;string,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;systemName&nbsp;<B>:</B>&nbsp;string,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;serialNumber&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maximumComponentLength&nbsp;<B>:</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.findExecutable:VAL:SPEC" HREF="#SIG:WINDOWS.findExecutable:VAL">findExecutable</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.launchApplication:VAL:SPEC" HREF="#SIG:WINDOWS.launchApplication:VAL">launchApplication</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.openDocument:VAL:SPEC" HREF="#SIG:WINDOWS.openDocument:VAL">openDocument</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.simpleExecute:VAL:SPEC" HREF="#SIG:WINDOWS.simpleExecute:VAL">simpleExecute</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;OS.Process.status<BR>
<BR>
<B>type</B>&nbsp;(<I>'a</I>,<I>'b</I>)&nbsp;<A NAME="SIG:WINDOWS.proc:TY:SPEC" HREF="#SIG:WINDOWS.proc:TY">proc</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.execute:VAL:SPEC" HREF="#SIG:WINDOWS.execute:VAL">execute</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;(<I>'a</I>,&nbsp;<I>'b</I>)&nbsp;proc<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.textInstreamOf:VAL:SPEC" HREF="#SIG:WINDOWS.textInstreamOf:VAL">textInstreamOf</A>&nbsp;<B>:</B>&nbsp;(TextIO.instream,&nbsp;<I>'a</I>)&nbsp;proc<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;TextIO.instream<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.binInstreamOf:VAL:SPEC" HREF="#SIG:WINDOWS.binInstreamOf:VAL">binInstreamOf</A>&nbsp;&nbsp;<B>:</B>&nbsp;(BinIO.instream,&nbsp;<I>'a</I>)&nbsp;proc<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;BinIO.instream<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.textOutstreamOf:VAL:SPEC" HREF="#SIG:WINDOWS.textOutstreamOf:VAL">textOutstreamOf</A>&nbsp;<B>:</B>&nbsp;(<I>'a</I>,&nbsp;TextIO.outstream)&nbsp;proc<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;TextIO.outstream<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.binOutstreamOf:VAL:SPEC" HREF="#SIG:WINDOWS.binOutstreamOf:VAL">binOutstreamOf</A>&nbsp;&nbsp;<B>:</B>&nbsp;(<I>'a</I>,&nbsp;BinIO.outstream)&nbsp;proc<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;BinIO.outstream<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.reap:VAL:SPEC" HREF="#SIG:WINDOWS.reap:VAL">reap</A>&nbsp;<B>:</B>&nbsp;(<I>'a</I>,&nbsp;<I>'b</I>)&nbsp;proc&nbsp;<B>-&gt;</B>&nbsp;OS.Process.status<BR>
<BR>
<B>structure</B>&nbsp;Status&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>type</B>&nbsp;<A NAME="SIG:WINDOWS.status:TY:SPEC" HREF="#SIG:WINDOWS.status:TY">status</A>&nbsp;=&nbsp;SysWord.word<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.accessViolation:VAL:SPEC" HREF="#SIG:WINDOWS.accessViolation:VAL">accessViolation</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.arrayBoundsExceeded:VAL:SPEC" HREF="#SIG:WINDOWS.arrayBoundsExceeded:VAL">arrayBoundsExceeded</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.breakpoint:VAL:SPEC" HREF="#SIG:WINDOWS.breakpoint:VAL">breakpoint</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.controlCExit:VAL:SPEC" HREF="#SIG:WINDOWS.controlCExit:VAL">controlCExit</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.datatypeMisalignment:VAL:SPEC" HREF="#SIG:WINDOWS.datatypeMisalignment:VAL">datatypeMisalignment</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatDenormalOperand:VAL:SPEC" HREF="#SIG:WINDOWS.floatDenormalOperand:VAL">floatDenormalOperand</A>&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatDivideByZero:VAL:SPEC" HREF="#SIG:WINDOWS.floatDivideByZero:VAL">floatDivideByZero</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatInexactResult:VAL:SPEC" HREF="#SIG:WINDOWS.floatInexactResult:VAL">floatInexactResult</A>&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatInvalidOperation:VAL:SPEC" HREF="#SIG:WINDOWS.floatInvalidOperation:VAL">floatInvalidOperation</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatOverflow:VAL:SPEC" HREF="#SIG:WINDOWS.floatOverflow:VAL">floatOverflow</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatStackCheck:VAL:SPEC" HREF="#SIG:WINDOWS.floatStackCheck:VAL">floatStackCheck</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.floatUnderflow:VAL:SPEC" HREF="#SIG:WINDOWS.floatUnderflow:VAL">floatUnderflow</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.guardPageViolation:VAL:SPEC" HREF="#SIG:WINDOWS.guardPageViolation:VAL">guardPageViolation</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.integerDivideByZero:VAL:SPEC" HREF="#SIG:WINDOWS.integerDivideByZero:VAL">integerDivideByZero</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.integerOverflow:VAL:SPEC" HREF="#SIG:WINDOWS.integerOverflow:VAL">integerOverflow</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.illegalInstruction:VAL:SPEC" HREF="#SIG:WINDOWS.illegalInstruction:VAL">illegalInstruction</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.invalidDisposition:VAL:SPEC" HREF="#SIG:WINDOWS.invalidDisposition:VAL">invalidDisposition</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.invalidHandle:VAL:SPEC" HREF="#SIG:WINDOWS.invalidHandle:VAL">invalidHandle</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.inPageError:VAL:SPEC" HREF="#SIG:WINDOWS.inPageError:VAL">inPageError</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.noncontinuableException:VAL:SPEC" HREF="#SIG:WINDOWS.noncontinuableException:VAL">noncontinuableException</A>&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.pending:VAL:SPEC" HREF="#SIG:WINDOWS.pending:VAL">pending</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.privilegedInstruction:VAL:SPEC" HREF="#SIG:WINDOWS.privilegedInstruction:VAL">privilegedInstruction</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.singleStep:VAL:SPEC" HREF="#SIG:WINDOWS.singleStep:VAL">singleStep</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.stackOverflow:VAL:SPEC" HREF="#SIG:WINDOWS.stackOverflow:VAL">stackOverflow</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.timeout:VAL:SPEC" HREF="#SIG:WINDOWS.timeout:VAL">timeout</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.userAPC:VAL:SPEC" HREF="#SIG:WINDOWS.userAPC:VAL">userAPC</A>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;status<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.fromStatus:VAL:SPEC" HREF="#SIG:WINDOWS.fromStatus:VAL">fromStatus</A>&nbsp;<B>:</B>&nbsp;OS.Process.status&nbsp;<B>-&gt;</B>&nbsp;Status.status<BR>
<B>val</B>&nbsp;<A NAME="SIG:WINDOWS.exit:VAL:SPEC" HREF="#SIG:WINDOWS.exit:VAL">exit</A>&nbsp;<B>:</B>&nbsp;Status.status&nbsp;<B>-&gt;</B>&nbsp;<I>'a</I></CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:WINDOWS.Key:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;Key</CODE>
<DD>
      The <CODE><A HREF="windows.html#SIG:WINDOWS.Key:STR:SPEC">Key</A></CODE> substructure contains flags for specifying security settings when opening and creating keys in the registry. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:WINDOWS.Key.allAccess:VAL"></A><CODE><B>val</B>&nbsp;allAccess&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              The union of the <CODE><A HREF="windows.html#SIG:WINDOWS.Key.queryValue:VAL:SPEC">queryValue</A></CODE>, <CODE><A HREF="windows.html#SIG:WINDOWS.Key.enumerateSubKeys:VAL:SPEC">enumerateSubKeys</A></CODE>, <CODE><A HREF="windows.html#SIG:WINDOWS.Key.notify:VAL:SPEC">notify</A></CODE>, <CODE><A HREF="windows.html#SIG:WINDOWS.Key.createSubKey:VAL:SPEC">createSubKey</A></CODE>, <CODE><A HREF="windows.html#SIG:WINDOWS.Key.createLink:VAL:SPEC">createLink</A></CODE>, and <CODE><A HREF="windows.html#SIG:WINDOWS.Key.setValue:VAL:SPEC">setValue</A></CODE> flags. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.createLink:VAL"></A><CODE><B>val</B>&nbsp;createLink&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission to create a symbolic link. This value is included for completeness, as the rest of the structure does not support links. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.createSubKey:VAL"></A><CODE><B>val</B>&nbsp;createSubKey&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission to create subkeys. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.enumerateSubKeys:VAL"></A><CODE><B>val</B>&nbsp;enumerateSubKeys&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission to enumerate subkeys. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.execute:VAL"></A><CODE><B>val</B>&nbsp;execute&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission for read access. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.notify:VAL"></A><CODE><B>val</B>&nbsp;notify&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission for change notification. This value is included for completeness, as the rest of the structure does not support notification. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.queryValue:VAL"></A><CODE><B>val</B>&nbsp;queryValue&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission to query subkey data. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.read:VAL"></A><CODE><B>val</B>&nbsp;read&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              The union of the <CODE>queryValue</CODE>, <CODE>enumerateSubKeys</CODE>, and <CODE>notify</CODE> flags. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.setValue:VAL"></A><CODE><B>val</B>&nbsp;setValue&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Permission to set subkey data. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Key.write:VAL"></A><CODE><B>val</B>&nbsp;write&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
             The union of the <CODE><A HREF="windows.html#SIG:WINDOWS.Key.setValue:VAL:SPEC">setValue</A></CODE> and <CODE><A HREF="windows.html#SIG:WINDOWS.Key.createSubKey:VAL:SPEC">createSubKey</A></CODE> flags. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:WINDOWS.Reg:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;Reg</CODE>
<DD>
        This substructure provides Microsoft Windows registry functions. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:WINDOWS.Reg.hkey:TY"></A><CODE><B>eqtype</B>&nbsp;hkey</CODE>
<DD>
          Type of registry key values.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.classesRoot:VAL"></A><CODE><B>val</B>&nbsp;classesRoot&nbsp;<B>:</B>&nbsp;hkey<BR>
<B>val</B>&nbsp;currentUser&nbsp;<B>:</B>&nbsp;hkey<BR>
<B>val</B>&nbsp;localMachine&nbsp;<B>:</B>&nbsp;hkey<BR>
<B>val</B>&nbsp;users&nbsp;<B>:</B>&nbsp;hkey<BR>
<B>val</B>&nbsp;performanceData&nbsp;<B>:</B>&nbsp;hkey<BR>
<B>val</B>&nbsp;currentConfig&nbsp;<B>:</B>&nbsp;hkey<BR>
<B>val</B>&nbsp;dynData&nbsp;<B>:</B>&nbsp;hkey</CODE>
<DD>
            These are identifiers for top-level registry keys.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.createKeyEx:VAL"></A>
<DT> <CODE>createKeyEx (<VAR>hkey</VAR>, <VAR>skey</VAR>, <VAR>regsam</VAR>) </CODE>
<DD>
opens or creates a subkey of <VAR>hkey</VAR>, with the name <VAR>skey</VAR> and security access specified by <VAR>regsam</VAR>. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
This passes <CODE>REG_OPTION_NON_VOLATILE</CODE> option, <CODE>NULL</CODE> Class, and <CODE>SECURITY_ATTRIBUTE</CODE> arguments to the Win32 call. 
</BLOCKQUOTE>
   
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.openKeyEx:VAL"></A>
<DT> <CODE>openKeyEx (<VAR>hkey</VAR>, <VAR>skey</VAR>, <VAR>regsam</VAR>) </CODE>
<DD>
opens a subkey of <VAR>hkey</VAR> with the name <VAR>skey</VAR> and security access specified by <VAR>regsam</VAR>.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.closeKey:VAL"></A>
<DT> <CODE>closeKey <VAR>hkey</VAR> </CODE>
<DD>
closes the key <VAR>hkey</VAR>.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.deleteKey:VAL"></A>
<DT> <CODE>deleteKey (<VAR>hkey</VAR>, <VAR>skey</VAR>) </CODE>
<DD>
deletes the subkey <VAR>skey</VAR> of <VAR>hkey</VAR>.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.deleteValue:VAL"></A>
<DT> <CODE>deleteValue (<VAR>hkey</VAR>, <VAR>valname</VAR>) </CODE>
<DD>
deletes the value <VAR>valname</VAR> of <VAR>hkey</VAR>.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.enumKeyEx:VAL"></A>
<DT> <CODE>enumKeyEx (<VAR>hkey</VAR>, <VAR>ind</VAR>) </CODE>
<DD>
returns the subkey of index <VAR>ind</VAR> of the key <VAR>hkey</VAR>, where indices start from zero. The function returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> of a string for each defined subkey. To enumerate all the subkeys, start with the index at zero and increment it until the function returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. The function raises the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception if <VAR>ind</VAR> is invalid.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.enumValueEx:VAL"></A>
<DT> <CODE>enumValueEx (<VAR>hkey</VAR>, <VAR>ind</VAR>) </CODE>
<DD>
returns the value of index <VAR>ind</VAR> of the key <VAR>hkey</VAR>, where indices start from zero. The function returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> of a string for each defined value. To enumerate all the values, start with the index at zero and increment it until the function returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. The function raises the <CODE><A HREF="general.html#SIG:GENERAL.Subscript:EXN:SPEC">Subscript</A></CODE> exception if <VAR>ind</VAR> is invalid.   
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.value:TY"></A><CODE><B>datatype</B>&nbsp;value<BR>
&nbsp;&nbsp;=&nbsp;SZ&nbsp;<B>of</B>&nbsp;string<BR>
&nbsp;&nbsp;|&nbsp;DWORD&nbsp;<B>of</B>&nbsp;SysWord.word<BR>
&nbsp;&nbsp;|&nbsp;BINARY&nbsp;<B>of</B>&nbsp;Word8Vector.vector<BR>
&nbsp;&nbsp;|&nbsp;MULTI_SZ&nbsp;<B>of</B>&nbsp;string&nbsp;list<BR>
&nbsp;&nbsp;|&nbsp;EXPAND_SZ&nbsp;<B>of</B>&nbsp;string</CODE>
<DD>
            This type describes the kind of values that can be saved to the registry or extracted from it.  The constructor <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">SZ</A></CODE> corresponds to strings, <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">DWORD</A></CODE> to 32-bit numbers, <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">BINARY</A></CODE> to arbitrary binary values, <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">MULTI_SZ</A></CODE> to lists of strings, and <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">EXPAND_SZ</A></CODE> to strings containing environment variables.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.queryValueEx:VAL"></A>
<DT> <CODE>queryValueEx (<VAR>hkey</VAR>, <VAR>name</VAR>) </CODE>
<DD>
returns the data associated with <VAR>name</VAR> in the open registry key <VAR>hkey</VAR>. A value whose type does not correspond to a more specific instance of the <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">value</A></CODE> datatype is returned as a <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.value:TY:SPEC">BINARY</A></CODE> value. If the value does not exist in the key, the function returns <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. Any other error, such as having insufficient access rights to the registry key, results in the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">OS.SysErr</A></CODE> exception being raised. 
<P>
              A common use of a registry value is to override the default behavior of a program. The normal case is when the registry value is unset. Using an option type allows for the result of <CODE><A HREF="windows.html#SIG:WINDOWS.Reg.queryValueEx:VAL:SPEC">queryValueEx</A></CODE> to indicate the presence or absence of the key.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Reg.setValueEx:VAL"></A>
<DT> <CODE>setValueEx (<VAR>hkey</VAR>, <VAR>name</VAR>, <VAR>v</VAR>) </CODE>
<DD>
associates the value <VAR>v</VAR> with <VAR>name</VAR> in the open key <VAR>hkey</VAR>.  
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:WINDOWS.Config:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;Config</CODE>
<DD>
      This substructure contains functions to obtain information about the operating system. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:WINDOWS.Config.platformWin32s:VAL"></A><CODE><B>val</B>&nbsp;platformWin32s&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;platformWin32Windows&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;platformWin32NT&nbsp;<B>:</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;platformWin32CE&nbsp;<B>:</B>&nbsp;SysWord.word</CODE>
<DD>
            These are values corresponding to the indicated Microsoft Windows platforms. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Config.getVersionEx:VAL"></A><CODE><B>val</B>&nbsp;getVersionEx&nbsp;<B>:</B>&nbsp;unit<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;{<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;majorVersion&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minorVersion&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;buildNumber&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;platformId&nbsp;<B>:</B>&nbsp;SysWord.word,<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;csdVersion&nbsp;<B>:</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</CODE>
<DD>
          This returns the major and minor versions of the operating system, the build number, platform identifier, and a supplementary version string.  The platform identifier <VAR>platformId</VAR> can be compared with values <CODE><A HREF="windows.html#SIG:WINDOWS.Config.platformWin32s:VAL:SPEC">platformWin32s</A></CODE>, <CODE><A HREF="windows.html#SIG:WINDOWS.Config.platformWin32Windows:VAL:SPEC">platformWin32Windows</A></CODE>, <CODE><A HREF="windows.html#SIG:WINDOWS.Config.platformWin32NT:VAL:SPEC">platformWin32NT</A></CODE>, and <CODE><A HREF="windows.html#SIG:WINDOWS.Config.platformWin32CE:VAL:SPEC">platformWin32CE</A></CODE> to determine the type of platform.  Note that additional values for other platforms may be returned. 
<P>
      The major and minor version numbers allow additional distinctions. In the case where <CODE>platformId</CODE> is <CODE><A HREF="windows.html#SIG:WINDOWS.Config.platformWin32Windows:VAL:SPEC">platformWin32Windows</A></CODE>, we have: 
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=CENTER VALIGN=TOP>
<CODE>minorVersion</CODE> 
<TH ALIGN=CENTER VALIGN=TOP>
<B>System</B>
<TR>
<TD ALIGN=CENTER VALIGN=TOP>
0 
<TD ALIGN=CENTER VALIGN=TOP>
Windows 95
<TR>
<TD ALIGN=CENTER VALIGN=TOP>
&gt; 0 
<TD ALIGN=CENTER VALIGN=TOP>
Windows 98
</TABLE>
</CENTER>
<HR>
 
<P>
      In the case where <CODE>platformId</CODE> is <CODE><A HREF="windows.html#SIG:WINDOWS.Config.platformWin32NT:VAL:SPEC">platformWin32NT</A></CODE>, we have: 
<HR>
<CENTER>
<TABLE ALIGN=CENTER>
<TR>
<TH ALIGN=CENTER VALIGN=TOP>
<CODE>majorVersion</CODE> 
<TH ALIGN=CENTER VALIGN=TOP>
<CODE>minorVersion</CODE> 
<TH ALIGN=CENTER VALIGN=TOP>
<B>System</B>
<TR>
<TD ALIGN=CENTER VALIGN=TOP>
4 
<TD ALIGN=CENTER VALIGN=TOP>
0 
<TD ALIGN=CENTER VALIGN=TOP>
Windows NT
<TR>
<TD ALIGN=CENTER VALIGN=TOP>
5 
<TD ALIGN=CENTER VALIGN=TOP>
0 
<TD ALIGN=CENTER VALIGN=TOP>
Windows 2000
<TR>
<TD ALIGN=CENTER VALIGN=TOP>
5 
<TD ALIGN=CENTER VALIGN=TOP>
&gt; 0 
<TD ALIGN=CENTER VALIGN=TOP>
Windows XP
</TABLE>
</CENTER>
<HR>
 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Config.getWindowsDirectory:VAL"></A><CODE><B>val</B>&nbsp;getWindowsDirectory&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
          The Windows directory, typically <CODE>&quot;C:\Windows&quot;</CODE>  on Windows 95 or <CODE>&quot;C:\Winnt&quot;</CODE> on Windows NT. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Config.getSystemDirectory:VAL"></A><CODE><B>val</B>&nbsp;getSystemDirectory&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
          The Windows system directory, typically <CODE>&quot;C:\Windows\System&quot;</CODE> or <CODE>&quot;C:\Winnt\System32&quot;</CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Config.getComputerName:VAL"></A><CODE><B>val</B>&nbsp;getComputerName&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
          The name of the computer. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Config.getUserName:VAL"></A><CODE><B>val</B>&nbsp;getUserName&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
          The name of the current user. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:WINDOWS.DDE:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;DDE</CODE>
<DD>
        This substructure provides a high-level, client-side interface for simple dynamic data exchange (DDE) interactions. All transactions are synchronous. Advise loops and poke transactions are not supported by this interface. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:WINDOWS.DDE.startDialog:VAL"></A>
<DT> <CODE>startDialog (<VAR>service</VAR>, <VAR>topic</VAR>) </CODE>
<DD>
initiates DDE and connects to the given service and topic. It returns the <CODE><A HREF="windows.html#SIG:WINDOWS.DDE.info:TY:SPEC">info</A></CODE> value created by these operations.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.DDE.executeString:VAL"></A>
<DT> <CODE>executeString (<VAR>info</VAR>, <VAR>cmd</VAR>, <VAR>retry</VAR>, <VAR>delay</VAR>) </CODE>
<DD>
attempts to execute the command <VAR>cmd</VAR> on the service  and topic specified by the <VAR>info</VAR> value.  The <VAR>retry</VAR> argument specifies the number of times to  attempt the transaction if the server is busy, pausing for  <VAR>delay</VAR> between each attempt.  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.DDE.stopDialog:VAL"></A>
<DT> <CODE>stopDialog <VAR>info</VAR> </CODE>
<DD>
disconnects the service and topic specified by the <VAR>info</VAR> argument and frees the associated resources. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:WINDOWS.getVolumeInformation:VAL"></A>
<DT> <CODE>getVolumeInformation <VAR>root</VAR> </CODE>
<DD>
returns information about the filesystem and volume specified by the root pathname <VAR>root</VAR>. The <CODE>volumeName</CODE> field contains the name of the volume; the <CODE>systemName</CODE> field contains its type (<I>e.g.</I>, &quot;FAT&quot; or &quot;NTFS&quot;); the <CODE>serialNumber</CODE> field contains the serial number; and the <CODE>maximumComponentLength</CODE> field specifies the maximum length of any component of a pathname on this system. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.findExecutable:VAL"></A>
<DT> <CODE>findExecutable <VAR>name</VAR> </CODE>
<DD>
returns the full executable name associated with <VAR>name</VAR>, or <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> if no such file exists. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.launchApplication:VAL"></A>
<DT> <CODE>launchApplication (<VAR>file</VAR>, <VAR>arg</VAR>) </CODE>
<DD>
runs the specified executable <VAR>file</VAR> passing it the argument <VAR>arg</VAR>. It raises <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">OS.SysErr</A></CODE> if <VAR>file</VAR> is not executable or if it cannot be run. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
This should be implemented using <CODE>ShellExecute</CODE>, passing <CODE>SW_SHOWNORMAL</CODE> to the underlying API call. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.openDocument:VAL"></A>
<DT> <CODE>openDocument <VAR>file</VAR> </CODE>
<DD>
opens <VAR>file</VAR> using its associated application. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
This should pass <CODE>SW_SHOWNORMAL</CODE> to the underlying <CODE>ShellExecute</CODE> API call. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.simpleExecute:VAL"></A>
<DT> <CODE>simpleExecute (<VAR>cmd</VAR>, <VAR>arg</VAR>) </CODE>
<DD>
spawns the process specified by <VAR>cmd</VAR> with command-line  arguments represented by the string <VAR>arg</VAR>, redirecting standard input and standard output to the null device. It then waits for the subprocess to terminate, and returns its exit status. This is similar to <CODE><A HREF="os-process.html#SIG:OS_PROCESS.system:VAL:SPEC">OS.Process.system</A></CODE> but it can be used in cases where the latter does not work, and its return value provides more information about the exit status of the child process. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
This corresponds to the use of <CODE>CreateProcess</CODE>. 
</BLOCKQUOTE>
  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.proc:TY"></A><CODE><B>type</B>&nbsp;(<I>'a</I>,<I>'b</I>)&nbsp;proc</CODE>
<DD>
 The type of a process created by <CODE><A HREF="windows.html#SIG:WINDOWS.execute:VAL:SPEC">execute</A></CODE>.  The type parameters are witness types for the types of streams that can be  returned. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.execute:VAL"></A>
<DT> <CODE>execute (<VAR>cmd</VAR>, <VAR>arg</VAR>) </CODE>
<DD>
spawns a process specified by <VAR>cmd</VAR> with command-line  arguments represented by the string <VAR>arg</VAR> and returns a handle for the resulting process. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
This also corresponds to the use of <CODE>CreateProcess</CODE>.  Redirection of the standard streams can be handled using the  <CODE>hStdInput</CODE> and <CODE>hStdOutput</CODE> fields in the <CODE>STARTUPINFO</CODE> parameter. 
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.textInstreamOf:VAL"></A>
<DT> <CODE>textInstreamOf <VAR>pr</VAR> </CODE>
<DT> <CODE>          binInstreamOf <VAR>pr</VAR> </CODE>
<DD>
These functions return a text or binary <CODE><A HREF="imperative-io.html#SIG:IMPERATIVE_IO.instream:TY:SPEC">instream</A></CODE>  connected to the standard output stream of the process <VAR>pr</VAR>. 
<P>
 Note that multiple calls to these functions on the same <CODE><A HREF="windows.html#SIG:WINDOWS.proc:TY:SPEC">proc</A></CODE> value  will result in multiple streams that all share the same underlying  open file descriptor, which can lead to unpredictable effects because 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.textOutstreamOf:VAL"></A>
<DT> <CODE>textOutstreamOf <VAR>pr</VAR> </CODE>
<DT> <CODE>          binOutstreamOf <VAR>pr</VAR> </CODE>
<DD>
These functions return a text or binary <CODE><A HREF="imperative-io.html#SIG:IMPERATIVE_IO.outstream:TY:SPEC">outstream</A></CODE>  connected to the standard input stream of the process <VAR>pr</VAR>. 
<P>
 Note that multiple calls to these functions on the same <CODE><A HREF="windows.html#SIG:WINDOWS.proc:TY:SPEC">proc</A></CODE> value  will result in multiple streams that all share the same underlying  open file descriptor, which can lead to unpredictable effects due to buffering. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.reap:VAL"></A>
<DT> <CODE>reap <VAR>pr</VAR> </CODE>
<DD>
closes the standard streams associated with <VAR>pr</VAR>, and then suspends the current process until the system process corresponding to <VAR>pr</VAR> terminates. It returns the exit status given by <VAR>pr</VAR> when it terminated.  If <CODE>reap</CODE> is applied again to <VAR>pr</VAR>, it should immediately return the previous exit status. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
Typically, one cannot rely on the underlying operating system to provide the exit status of a terminated process after it has done so once. Thus, the exit status probably needs to be cached. Also note that <CODE>reap</CODE> should not return until the process being monitored has terminated. In particular, implementations should be careful not to return if the process has only been suspended. 
</BLOCKQUOTE>
  
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.Status:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;Status</CODE>
<DD>
         The <CODE><A HREF="windows.html#SIG:WINDOWS.Status:STR:SPEC">Status</A></CODE> substructure defines the possible system-specific interpretations of <CODE><A HREF="os-process.html#SIG:OS_PROCESS.status:TY:SPEC">OS.Process.status</A></CODE> values. 
<BR>
<BR>

<DL>
</DL>
<DT> <A NAME="SIG:WINDOWS.fromStatus:VAL"></A>
<DT> <CODE>fromStatus <VAR>s</VAR> </CODE>
<DD>
decodes the abstract exit status <VAR>s</VAR> into system-specific information. 
<BR>
<BR>

<DT> <A NAME="SIG:WINDOWS.exit:VAL"></A>
<DT> <CODE>exit <VAR>st</VAR> </CODE>
<DD>
executes all actions registered with <CODE><A HREF="os-process.html#SIG:OS_PROCESS.atExit:VAL:SPEC">OS.Process.atExit</A></CODE>, flushes and closes all I/O streams, then terminates the SML process with termination status <VAR>st</VAR>.  
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A></CODE>, <CODE><A HREF="os.html#SIG:OS.FileSys:STR:SPEC">OS.FileSys</A></CODE>, <CODE><A HREF="os.html#SIG:OS.Process:STR:SPEC">OS.Process</A></CODE>, <CODE><A HREF="text-io.html#TextIO:STR:SPEC">TextIO</A></CODE>, <CODE><A HREF="time.html#Time:STR:SPEC">Time</A></CODE>
</BLOCKQUOTE>
<H4>Discussion</H4>
<P>
This structure provides a minimal view of the system calls available across Microsoft operating systems. It focuses on managing the registry, and executing programs. The function <CODE><A HREF="windows.html#SIG:WINDOWS.findExecutable:VAL:SPEC">Windows.findExecutable</A></CODE> and the facilities in the <CODE><A HREF="windows.html#SIG:WINDOWS.Config:STR:SPEC">Config</A></CODE> substructure allow the programmer to determine if and where a program can be found on a given machine. 
<P>
Future extensions of the Basis Library might give access to more features, either by including additional substructures or as a separate top-level module. 
<BLOCKQUOTE>
<B>Rationale:</B><BR>

<P>
As usual, platform identification and exit status values are not handled by datatypes to allow for future extensions.
</BLOCKQUOTE>



`
