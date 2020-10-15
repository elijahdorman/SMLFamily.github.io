var data = `

<H2><A NAME="section:0"></A>The <CODE>CommandLine</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="COMMAND_LINE:SIG:SPEC"></A><CODE>COMMAND_LINE</CODE><BR>
<B>structure</B>&nbsp;<A NAME="CommandLine:STR:SPEC"></A><CODE>CommandLine</CODE><B> :> </B>COMMAND_LINE<BR>
</CODE>
</BLOCKQUOTE>
<P>
The <CODE>CommandLine</CODE> structure provides access to the name and arguments used to invoke the currently running program. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>val</B>&nbsp;<A NAME="SIG:COMMAND_LINE.name:VAL:SPEC" HREF="#SIG:COMMAND_LINE.name:VAL">name</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<B>val</B>&nbsp;<A NAME="SIG:COMMAND_LINE.arguments:VAL:SPEC" HREF="#SIG:COMMAND_LINE.arguments:VAL">arguments</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;list</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:COMMAND_LINE.name:VAL"></A><CODE><B>val</B>&nbsp;name&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
      The name used to invoke the current program. 
<BR>
<BR>

<DT> <A NAME="SIG:COMMAND_LINE.arguments:VAL"></A><CODE><B>val</B>&nbsp;arguments&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;list</CODE>
<DD>
      The argument list used to invoke the current program. 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
The arguments returned may be only a subset of the arguments actually supplied by the user, since an implementation's runtime system may consume some of them. 
</BLOCKQUOTE>
<BR>
<BR>

</DL>
<H4>Discussion</H4>
<P>
The precise semantics of the above operations are operating system and implementation-specific. For example, <CODE>name</CODE> might return a full pathname or just the base name. See also the comment under <CODE>arguments</CODE>.

`
