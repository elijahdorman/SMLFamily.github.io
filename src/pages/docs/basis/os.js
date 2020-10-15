var data = `


<H2><A NAME="section:0"></A>The <CODE>OS</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="OS:SIG:SPEC"></A><CODE>OS</CODE><BR>
<B>structure</B>&nbsp;<A NAME="OS:STR:SPEC"></A><CODE>OS</CODE><B> :> </B>OS<BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>OS</CODE> structure is a container for a collection of structures for interacting with the operating system's file system, directory paths, processes, and I/O subsystem. The types and functions provided by the <CODE>OS</CODE> substructures are meant to present a model for handling these resources that is largely independent of the operating system.
<P>
The structure also declares the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> exception used to report operating system error conditions. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>structure</B>&nbsp;FileSys&nbsp;<B>:</B>&nbsp;<A HREF="os-file-sys.html#OS_FILE_SYS:SIG:SPEC">OS_FILE_SYS</A><BR>
<B>structure</B>&nbsp;IO&nbsp;<B>:</B>&nbsp;<A HREF="os-io.html#OS_IO:SIG:SPEC">OS_IO</A><BR>
<B>structure</B>&nbsp;Path&nbsp;<B>:</B>&nbsp;<A HREF="os-path.html#OS_PATH:SIG:SPEC">OS_PATH</A><BR>
<B>structure</B>&nbsp;Process&nbsp;<B>:</B>&nbsp;<A HREF="os-process.html#OS_PROCESS:SIG:SPEC">OS_PROCESS</A><BR>
<BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:OS.syserror:TY:SPEC" HREF="#SIG:OS.syserror:TY">syserror</A><BR>
<BR>
<B>exception</B>&nbsp;<A NAME="SIG:OS.SysErr:EXN:SPEC" HREF="#SIG:OS.SysErr:EXN">SysErr</A>&nbsp;<B>of</B>&nbsp;string&nbsp;<B>*</B>&nbsp;syserror&nbsp;option<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:OS.errorMsg:VAL:SPEC" HREF="#SIG:OS.errorMsg:VAL">errorMsg</A>&nbsp;<B>:</B>&nbsp;syserror&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:OS.errorName:VAL:SPEC" HREF="#SIG:OS.errorName:VAL">errorName</A>&nbsp;<B>:</B>&nbsp;syserror&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:OS.syserror:VAL:SPEC" HREF="#SIG:OS.syserror:VAL">syserror</A>&nbsp;&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;syserror&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:OS.FileSys:STR"></A><CODE><B>structure</B>&nbsp;FileSys&nbsp;<B>:</B>&nbsp;<A HREF="os-file-sys.html#OS_FILE_SYS:SIG:SPEC">OS_FILE_SYS</A></CODE>
<DD>
 File system: files and directories and their attributes. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.IO:STR"></A><CODE><B>structure</B>&nbsp;IO&nbsp;<B>:</B>&nbsp;<A HREF="os-io.html#OS_IO:SIG:SPEC">OS_IO</A></CODE>
<DD>
 I/O polling. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.Path:STR"></A><CODE><B>structure</B>&nbsp;Path&nbsp;<B>:</B>&nbsp;<A HREF="os-path.html#OS_PATH:SIG:SPEC">OS_PATH</A></CODE>
<DD>
 Syntactic manipulation of pathnames. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.Process:STR"></A><CODE><B>structure</B>&nbsp;Process&nbsp;<B>:</B>&nbsp;<A HREF="os-process.html#OS_PROCESS:SIG:SPEC">OS_PROCESS</A></CODE>
<DD>
 Process control, exit status, and environment. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.syserror:TY"></A><CODE><B>eqtype</B>&nbsp;syserror</CODE>
<DD>
    The type representing errors that arise when making calls to the run-time or operating system. These values are usually transmitted by the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">SysErr</A></CODE> exception. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.SysErr:EXN"></A><CODE><B>exception</B>&nbsp;SysErr&nbsp;<B>of</B>&nbsp;string&nbsp;<B>*</B>&nbsp;syserror&nbsp;option</CODE>
<DD>
 This exception is raised when a call to the runtime system or  host operating system results in an error.  The first argument is a descriptive string explaining the error,  and the second argument optionally specifies the system error condition.  The form and content of the description strings are operating system  and implementation dependent, but if a <CODE>SysErr</CODE>  exception has the form <CODE>SysErr(<VAR>s</VAR>,<CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> <VAR>e</VAR>)</CODE>,  then we have <CODE><CODE><A HREF="os.html#SIG:OS.errorMsg:VAL:SPEC">errorMsg</A></CODE> <VAR>e</VAR> = <VAR>s</VAR></CODE>.  System errors that do not have corresponding <CODE><A HREF="os.html#SIG:OS.syserror:TY:SPEC">syserror</A></CODE> value  will result in <CODE>SysErr</CODE> being raised with a second  argument of <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.errorMsg:VAL"></A>
<DT> <CODE>errorMsg <VAR>err</VAR> </CODE>
<DD>
returns a string describing the system error identified by  the error code <VAR>err</VAR>.  The form and content of the description strings are  operating system and implementation dependent. 
<BR>
<BR>

<DT> <A NAME="SIG:OS.errorName:VAL"></A>
<DT> <CODE>errorName <VAR>err</VAR> </CODE>
<DT> <CODE>          syserror <VAR>s</VAR> </CODE>
<DD>
These functions provide conversions between the abstract  <CODE><A HREF="os.html#SIG:OS.syserror:TY:SPEC">syserror</A></CODE> type, and their operating  system dependent string names.  The primary purpose of these functions is to provide a mechanism  for dealing with error codes that might not have symbolic names  defined for them in the operating system specific modules. The former function returns a unique name used for the  <CODE><A HREF="os.html#SIG:OS.syserror:TY:SPEC">syserror</A></CODE> value, while the latter returns the <CODE><A HREF="os.html#SIG:OS.syserror:TY:SPEC">syserror</A></CODE> whose name is <VAR>s</VAR>, if it exists.  If <VAR>e</VAR> is a <CODE><A HREF="os.html#SIG:OS.syserror:TY:SPEC">syserror</A></CODE>, then it should be the case  that  
<PRE>
<A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A> <VAR>e</VAR> = <A HREF="os.html#SIG:OS.syserror:VAL:SPEC">syserror</A>(<A HREF="os.html#SIG:OS.errorName:VAL:SPEC">errorName</A> <VAR>e</VAR>)
</PRE>
 
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="os.html#SIG:OS.FileSys:STR:SPEC">OS.FileSys</A></CODE>, <CODE><A HREF="os.html#SIG:OS.IO:STR:SPEC">OS.IO</A></CODE>, <CODE><A HREF="os.html#SIG:OS.Path:STR:SPEC">OS.Path</A></CODE>, <CODE><A HREF="os.html#SIG:OS.Process:STR:SPEC">OS.Process</A></CODE>
</BLOCKQUOTE>



`
