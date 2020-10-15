var data = `

<H2><A NAME="section:0"></A>The <CODE>Posix.FileSys</CODE> structure</H2>
<HR>
<H4>Synopsis</H4>
<BLOCKQUOTE>
<CODE><B>signature</B>&nbsp;<A NAME="POSIX_FILE_SYS:SIG:SPEC"></A><CODE>POSIX_FILE_SYS</CODE><BR>
<B>structure</B>&nbsp;<A NAME="FileSys:STR:SPEC"></A><CODE>FileSys</CODE><B> : </B>POSIX_FILE_SYS<BR>
</CODE>
</BLOCKQUOTE>
<P>
The structure <CODE>Posix.FileSys</CODE> provides access to file system operations as described in Section 5 of the POSIX standard 1003.1,1996<B>[CITE]</B>. 
<HR>
<H4>Interface</H4>
<BLOCKQUOTE>
<CODE><B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.uid:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.uid:TY">uid</A><BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.gid:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.gid:TY">gid</A><BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.file_desc:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.file_desc:TY">file_desc</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.fdToWord:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.fdToWord:VAL">fdToWord</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.wordToFD:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.wordToFD:VAL">wordToFD</A>&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.fdToIOD:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.fdToIOD:VAL">fdToIOD</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;OS.IO.iodesc<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.iodToFD:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.iodToFD:VAL">iodToFD</A>&nbsp;<B>:</B>&nbsp;OS.IO.iodesc&nbsp;<B>-&gt;</B>&nbsp;file_desc&nbsp;option<BR>
<BR>
<B>type</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.dirstream:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.dirstream:TY">dirstream</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.opendir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.opendir:VAL">opendir</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;dirstream<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.readdir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.readdir:VAL">readdir</A>&nbsp;<B>:</B>&nbsp;dirstream&nbsp;<B>-&gt;</B>&nbsp;string&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.rewinddir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.rewinddir:VAL">rewinddir</A>&nbsp;<B>:</B>&nbsp;dirstream&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.closedir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.closedir:VAL">closedir</A>&nbsp;<B>:</B>&nbsp;dirstream&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.chdir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.chdir:VAL">chdir</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.getcwd:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.getcwd:VAL">getcwd</A>&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.stdin:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.stdin:VAL">stdin</A>&nbsp;&nbsp;<B>:</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.stdout:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.stdout:VAL">stdout</A>&nbsp;<B>:</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.stderr:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.stderr:VAL">stderr</A>&nbsp;<B>:</B>&nbsp;file_desc<BR>
<BR>
<B>structure</B>&nbsp;S&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.mode:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.mode:TY">mode</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>where</B>&nbsp;<B>type</B>&nbsp;flags&nbsp;=&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.irwxu:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.irwxu:VAL">irwxu</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.irusr:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.irusr:VAL">irusr</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.iwusr:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.iwusr:VAL">iwusr</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ixusr:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.ixusr:VAL">ixusr</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.irwxg:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.irwxg:VAL">irwxg</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.irgrp:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.irgrp:VAL">irgrp</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.iwgrp:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.iwgrp:VAL">iwgrp</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ixgrp:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.ixgrp:VAL">ixgrp</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.irwxo:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.irwxo:VAL">irwxo</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.iroth:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.iroth:VAL">iroth</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.iwoth:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.iwoth:VAL">iwoth</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ixoth:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.ixoth:VAL">ixoth</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isuid:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isuid:VAL">isuid</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isgid:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isgid:VAL">isgid</A>&nbsp;<B>:</B>&nbsp;mode<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>structure</B>&nbsp;O&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>include</B>&nbsp;<A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.append:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.append:VAL">append</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.excl:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.excl:VAL">excl</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.noctty:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.noctty:VAL">noctty</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.nonblock:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.nonblock:VAL">nonblock</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.sync:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.sync:VAL">sync</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.trunc:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.trunc:VAL">trunc</A>&nbsp;<B>:</B>&nbsp;flags<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>datatype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.open_mode:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.open_mode:TY">open_mode</A><BR>
&nbsp;&nbsp;=&nbsp;<A NAME="SIG:POSIX_FILE_SYS.O_RDONLY:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.O_RDONLY:TY">O_RDONLY</A><BR>
&nbsp;&nbsp;|&nbsp;<A NAME="SIG:POSIX_FILE_SYS.O_WRONLY:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.O_WRONLY:TY">O_WRONLY</A><BR>
&nbsp;&nbsp;|&nbsp;<A NAME="SIG:POSIX_FILE_SYS.O_RDWR:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.O_RDWR:TY">O_RDWR</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.openf:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.openf:VAL">openf</A>&nbsp;&nbsp;&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;open_mode&nbsp;<B>*</B>&nbsp;O.flags&nbsp;<B>-&gt;</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.createf:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.createf:VAL">createf</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;open_mode&nbsp;<B>*</B>&nbsp;O.flags&nbsp;<B>*</B>&nbsp;S.mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.creat:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.creat:VAL">creat</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;S.mode&nbsp;<B>-&gt;</B>&nbsp;file_desc<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.umask:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.umask:VAL">umask</A>&nbsp;<B>:</B>&nbsp;S.mode&nbsp;<B>-&gt;</B>&nbsp;S.mode<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.link:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.link:VAL">link</A>&nbsp;<B>:</B>&nbsp;{old&nbsp;<B>:</B>&nbsp;string,&nbsp;new&nbsp;<B>:</B>&nbsp;string}&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.mkdir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.mkdir:VAL">mkdir</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;S.mode&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.mkfifo:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.mkfifo:VAL">mkfifo</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;S.mode&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.unlink:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.unlink:VAL">unlink</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.rmdir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.rmdir:VAL">rmdir</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.rename:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.rename:VAL">rename</A>&nbsp;<B>:</B>&nbsp;{old&nbsp;<B>:</B>&nbsp;string,&nbsp;new&nbsp;<B>:</B>&nbsp;string}&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.symlink:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.symlink:VAL">symlink</A>&nbsp;<B>:</B>&nbsp;{old&nbsp;<B>:</B>&nbsp;string,&nbsp;new&nbsp;<B>:</B>&nbsp;string}&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.readlink:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.readlink:VAL">readlink</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;string<BR>
<BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.dev:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.dev:TY">dev</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.wordToDev:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.wordToDev:VAL">wordToDev</A>&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;dev<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.devToWord:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.devToWord:VAL">devToWord</A>&nbsp;<B>:</B>&nbsp;dev&nbsp;<B>-&gt;</B>&nbsp;SysWord.word<BR>
<BR>
<B>eqtype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ino:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.ino:TY">ino</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.wordToIno:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.wordToIno:VAL">wordToIno</A>&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;ino<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.inoToWord:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.inoToWord:VAL">inoToWord</A>&nbsp;<B>:</B>&nbsp;ino&nbsp;<B>-&gt;</B>&nbsp;SysWord.word<BR>
<BR>
<B>structure</B>&nbsp;ST&nbsp;<B>:</B>&nbsp;<B>sig</B><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>type</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.stat:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.stat:TY">stat</A><BR>
&nbsp;&nbsp;&nbsp;&nbsp;<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isDir:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isDir:VAL">isDir</A>&nbsp;&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isChr:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isChr:VAL">isChr</A>&nbsp;&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isBlk:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isBlk:VAL">isBlk</A>&nbsp;&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isReg:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isReg:VAL">isReg</A>&nbsp;&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isFIFO:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isFIFO:VAL">isFIFO</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isLink:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isLink:VAL">isLink</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.isSock:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.isSock:VAL">isSock</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.mode:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.mode:VAL">mode</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;S.mode<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ino:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.ino:VAL">ino</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;ino<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.dev:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.dev:VAL">dev</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;dev<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.nlink:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.nlink:VAL">nlink</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.uid:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.uid:VAL">uid</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;uid<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.gid:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.gid:VAL">gid</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;gid<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.size:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.size:VAL">size</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Position.int<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.atime:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.atime:VAL">atime</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Time.time<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.mtime:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.mtime:VAL">mtime</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Time.time<BR>
&nbsp;&nbsp;&nbsp;&nbsp;<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ctime:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.ctime:VAL">ctime</A>&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Time.time<BR>
&nbsp;&nbsp;<B>end</B><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.stat:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.stat:VAL">stat</A>&nbsp;&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;ST.stat<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.lstat:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.lstat:VAL">lstat</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;ST.stat<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.fstat:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.fstat:VAL">fstat</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;ST.stat<BR>
<BR>
<B>datatype</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.access_mode:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.access_mode:TY">access_mode</A>&nbsp;=&nbsp;<A NAME="SIG:POSIX_FILE_SYS.A_READ:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.A_READ:TY">A_READ</A>&nbsp;|&nbsp;<A NAME="SIG:POSIX_FILE_SYS.A_WRITE:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.A_WRITE:TY">A_WRITE</A>&nbsp;|&nbsp;<A NAME="SIG:POSIX_FILE_SYS.A_EXEC:TY:SPEC" HREF="#SIG:POSIX_FILE_SYS.A_EXEC:TY">A_EXEC</A><BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.access:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.access:VAL">access</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;access_mode&nbsp;list&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.chmod:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.chmod:VAL">chmod</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;S.mode&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.fchmod:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.fchmod:VAL">fchmod</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;S.mode&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.chown:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.chown:VAL">chown</A>&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;uid&nbsp;<B>*</B>&nbsp;gid&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.fchown:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.fchown:VAL">fchown</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;uid&nbsp;<B>*</B>&nbsp;gid&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.utime:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.utime:VAL">utime</A>&nbsp;<B>:</B>&nbsp;string<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>*</B>&nbsp;{actime&nbsp;<B>:</B>&nbsp;Time.time,&nbsp;modtime&nbsp;<B>:</B>&nbsp;Time.time}&nbsp;option<BR>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.ftruncate:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.ftruncate:VAL">ftruncate</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;Position.int&nbsp;<B>-&gt;</B>&nbsp;unit<BR>
<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.pathconf:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.pathconf:VAL">pathconf</A>&nbsp;&nbsp;<B>:</B>&nbsp;string&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;SysWord.word&nbsp;option<BR>
<B>val</B>&nbsp;<A NAME="SIG:POSIX_FILE_SYS.fpathconf:VAL:SPEC" HREF="#SIG:POSIX_FILE_SYS.fpathconf:VAL">fpathconf</A>&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>*</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;SysWord.word&nbsp;option</CODE>
</BLOCKQUOTE>
<H4>Description</H4>
<DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.uid:TY"></A><CODE><B>eqtype</B>&nbsp;uid</CODE>
<DD>
 User identifier; identical to  <CODE><A HREF="posix-proc-env.html#SIG:POSIX_PROC_ENV.uid:TY:SPEC">Posix.ProcEnv.uid</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.gid:TY"></A><CODE><B>eqtype</B>&nbsp;gid</CODE>
<DD>
 Group identifier; identical to  <CODE><A HREF="posix-proc-env.html#SIG:POSIX_PROC_ENV.gid:TY:SPEC">Posix.ProcEnv.gid</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.file_desc:TY"></A><CODE><B>eqtype</B>&nbsp;file_desc</CODE>
<DD>
 Open file descriptor. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.fdToWord:VAL"></A><CODE><B>val</B>&nbsp;fdToWord&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;SysWord.word<BR>
<B>val</B>&nbsp;wordToFD&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;file_desc</CODE>
<DD>
          These functions convert between an abstract open file descriptor and the integer representation used by the operating system. These calls should be avoided where possible, for the SML implementation may be able to garbage collect (<I>i.e.</I>, automatically close) any <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.file_desc:TY:SPEC">file_desc</A></CODE> value that is not accessible, but it cannot do this for any <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.file_desc:TY:SPEC">file_desc</A></CODE> that has ever been made concrete by <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.fdToWord:VAL:SPEC">fdToWord</A></CODE>. Also, there is no validation that the file descriptor created by <CODE>wordToFD</CODE> corresponds to an actually open file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.fdToIOD:VAL"></A><CODE><B>val</B>&nbsp;fdToIOD&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;OS.IO.iodesc<BR>
<B>val</B>&nbsp;iodToFD&nbsp;<B>:</B>&nbsp;OS.IO.iodesc&nbsp;<B>-&gt;</B>&nbsp;file_desc&nbsp;option</CODE>
<DD>
          These convert between a POSIX open file descriptor and the handle used by the OS subsystem. The function <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.iodToFD:VAL:SPEC">iodToFD</A></CODE> returns an <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">option</A></CODE> type because, on certain systems, some open I/O devices are not associated with an underlying open file descriptor. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.dirstream:TY"></A><CODE><B>type</B>&nbsp;dirstream</CODE>
<DD>
 A directory stream opened for reading. A directory stream is an ordered sequence of all the directory entries in a particular directory.  This type is identical to <CODE><A HREF="os-file-sys.html#SIG:OS_FILE_SYS.dirstream:TY:SPEC">OS.FileSys.dirstream</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.opendir:VAL"></A>
<DT> <CODE>opendir <VAR>dirName</VAR> </CODE>
<DD>
opens the directory designated by the <VAR>dirName</VAR> parameter and associates a directory stream with it. The directory stream is positioned at the first entry. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.readdir:VAL"></A>
<DT> <CODE>readdir <VAR>dir</VAR> </CODE>
<DD>
returns and removes one filename from the directory stream <VAR>dir</VAR>.  When the directory stream is empty (that is, when all entries have  been read from the stream), <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned. Entries for <CODE>&quot;.&quot;</CODE> (current directory) and <CODE>&quot;..&quot;</CODE> (parent directory) are never returned.  
<BLOCKQUOTE>
<B>Rationale:</B><BR>

<P>
The reason for filtering out the current and parent directory entries  is that it makes recursive walks of a directory tree easier.  
</BLOCKQUOTE>
 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.rewinddir:VAL"></A>
<DT> <CODE>rewinddir <VAR>d</VAR> </CODE>
<DD>
repositions the directory stream <VAR>d</VAR> for reading at the beginning. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.closedir:VAL"></A>
<DT> <CODE>closedir <VAR>d</VAR> </CODE>
<DD>
closes the directory stream <VAR>d</VAR>. Closing a previously closed <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.dirstream:TY:SPEC">dirstream</A></CODE> does not raise an exception. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.chdir:VAL"></A>
<DT> <CODE>chdir <VAR>s</VAR> </CODE>
<DD>
changes the current working directory to <VAR>s</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.getcwd:VAL"></A><CODE><B>val</B>&nbsp;getcwd&nbsp;<B>:</B>&nbsp;unit&nbsp;<B>-&gt;</B>&nbsp;string</CODE>
<DD>
        The absolute pathname of the current working directory. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.stdin:VAL"></A><CODE><B>val</B>&nbsp;stdin&nbsp;<B>:</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;stdout&nbsp;<B>:</B>&nbsp;file_desc<BR>
<B>val</B>&nbsp;stderr&nbsp;<B>:</B>&nbsp;file_desc</CODE>
<DD>
          The standard input, output, and error file descriptors. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;S</CODE>
<DD>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.S.mode:TY"></A><CODE><B>eqtype</B>&nbsp;mode</CODE>
<DD>
 A file <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.S.mode:TY:SPEC">mode</A></CODE> is a set of (read, write, execute) permissions for the owner of the file, members of the file's group, and others. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.irwxu:VAL"></A><CODE><B>val</B>&nbsp;irwxu&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Read, write, and execute permission for ``user'' (the file's  owner). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.irusr:VAL"></A><CODE><B>val</B>&nbsp;irusr&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Read permission for ``user'' (the file's owner). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.iwusr:VAL"></A><CODE><B>val</B>&nbsp;iwusr&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Write permission for ``user'' (the file's owner). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.ixusr:VAL"></A><CODE><B>val</B>&nbsp;ixusr&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Execute permission for ``user'' (the file's owner).  
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.irwxg:VAL"></A><CODE><B>val</B>&nbsp;irwxg&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Read, write, and execute permission for members of the file's group. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.irgrp:VAL"></A><CODE><B>val</B>&nbsp;irgrp&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Read permission for members of the file's group. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.iwgrp:VAL"></A><CODE><B>val</B>&nbsp;iwgrp&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Write permission for members of the file's group. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.ixgrp:VAL"></A><CODE><B>val</B>&nbsp;ixgrp&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Execute permission for members of the file's group.  
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.irwxo:VAL"></A><CODE><B>val</B>&nbsp;irwxo&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Read, write, and execute permission for ``others'' (all users). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.iroth:VAL"></A><CODE><B>val</B>&nbsp;iroth&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Read permission for ``others'' (all users). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.iwoth:VAL"></A><CODE><B>val</B>&nbsp;iwoth&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Write permission for ``others'' (all users). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.ixoth:VAL"></A><CODE><B>val</B>&nbsp;ixoth&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Execute permission for ``others'' (all users).  
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.isuid:VAL"></A><CODE><B>val</B>&nbsp;isuid&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Set-user-id mode, indicating that the effective user ID of any user executing the file should be made the same as that of the owner of the file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.S.isgid:VAL"></A><CODE><B>val</B>&nbsp;isgid&nbsp;<B>:</B>&nbsp;mode</CODE>
<DD>
              Set-group-id mode, indicating that the effective group ID of any user executing the file should be made the same as the group of the file. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.O:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;O</CODE>
<DD>
 The structure <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.O:STR:SPEC">Posix.FileSys.O</A></CODE>  contains file status flags used in calls to <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.openf:VAL:SPEC">openf</A></CODE>. 
<BR>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.O.append:VAL"></A><CODE><B>val</B>&nbsp;append&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              If set, the file pointer is set to the end of the file prior to each write. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.O.excl:VAL"></A><CODE><B>val</B>&nbsp;excl&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              This flag causes the open to fail if the file already exists. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.O.noctty:VAL"></A><CODE><B>val</B>&nbsp;noctty&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              If the path parameter identifies a terminal device, this flag assures that the terminal device does not become the controlling terminal for the process. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.O.nonblock:VAL"></A><CODE><B>val</B>&nbsp;nonblock&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              Open, read, and write operations on the file will be nonblocking. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.O.sync:VAL"></A><CODE><B>val</B>&nbsp;sync&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
              If set, updates and writes to regular files and block devices are  synchronous updates. On return from a function that performs  a synchronous update (<CODE><A HREF="posix-io.html#SIG:POSIX_IO.writeVec:VAL:SPEC">writeVec</A></CODE>,  <CODE><A HREF="posix-io.html#SIG:POSIX_IO.writeArr:VAL:SPEC">writeArr</A></CODE>,  <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.ftruncate:VAL:SPEC">ftruncate</A></CODE>,  <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.openf:VAL:SPEC">openf</A></CODE> with <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.O.trunc:VAL:SPEC">trunc</A></CODE>), the  calling process is assured that all data for the file has been  written to permanent storage, even if the file is also open for  deferred update. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.O.trunc:VAL"></A><CODE><B>val</B>&nbsp;trunc&nbsp;<B>:</B>&nbsp;flags</CODE>
<DD>
           This causes the file to be truncated (to zero length) upon opening. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.open_mode:TY"></A>
<DT> <CODE><B>datatype</B>&nbsp;open_mode</CODE>
<DD>
    Operations allowed on an open file. 
<BR>

<DL>
<DT> <CODE>=&nbsp;O_RDONLY</CODE>
<DD>
 Open a file for reading only. 
<BR>
<BR>

<DT> <CODE>|&nbsp;O_WRONLY</CODE>
<DD>
 Open a file for writing only. 
<BR>
<BR>

<DT> <CODE>|&nbsp;O_RDWR</CODE>
<DD>
 Open a file for reading and writing. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.openf:VAL"></A>
<DT> <CODE>openf (<VAR>s</VAR>, <VAR>om</VAR>, <VAR>f</VAR>) </CODE>
<DT> <CODE>          createf (<VAR>s</VAR>, <VAR>om</VAR>, <VAR>f</VAR>, <VAR>m</VAR>) </CODE>
<DD>
          
<P>
          These calls open a file named <VAR>s</VAR> for reading, writing, or both (depending on the open mode <VAR>om</VAR>).  The flags <VAR>f</VAR> specify the state of the open file. If the file does not exist, <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.openf:VAL:SPEC">openf</A></CODE> raises the <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">OS.SysErr</A></CODE> exception whereas <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.createf:VAL:SPEC">createf</A></CODE> creates the file, setting its protection mode to <VAR>m</VAR> (as modified by the <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.umask:VAL:SPEC">umask</A></CODE>). 
<P>
          Note that, in C, the roles of <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.openf:VAL:SPEC">openf</A></CODE> and <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.createf:VAL:SPEC">createf</A></CODE> are combined in the function <CODE>open</CODE>. The first acts like <CODE>open</CODE> without the <CODE>O_CREAT</CODE> flag; the second acts like <CODE>open</CODE> with the <CODE>O_CREAT</CODE> flag and the specified permission mode. Also, the <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.createf:VAL:SPEC">createf</A></CODE> function should not be confused with the <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.creat:VAL:SPEC">creat</A></CODE> function below, which behaves like its C namesake. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.creat:VAL"></A>
<DT> <CODE>creat (<VAR>s</VAR>, <VAR>m</VAR>) </CODE>
<DD>
opens a file <VAR>s</VAR> for writing. If the file exists, this call truncates the file to zero length. If the file does not exist, it creates the file, setting its protection mode  to <VAR>m</VAR> (as modified by the <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.umask:VAL:SPEC">umask</A></CODE>). This is equivalent to the expression:  
<PRE>
<A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.createf:VAL:SPEC">createf</A>(<VAR>s</VAR>,<A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.open_mode:TY:SPEC">O_WRONLY</A>,<A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.O.trunc:VAL:SPEC">O.trunc</A>,<VAR>m</VAR>)
</PRE>
 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.umask:VAL"></A>
<DT> <CODE>umask <VAR>cmask</VAR> </CODE>
<DD>
sets the file mode creation mask of the process to <VAR>cmask</VAR> and returns the previous value of the mask.
<P>
  Whenever a file is created (by <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.openf:VAL:SPEC">openf</A></CODE>, <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.creat:VAL:SPEC">creat</A></CODE>, <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.mkdir:VAL:SPEC">mkdir</A></CODE>, etc.), all file permission set in the file mode creation mask are removed from the mode of the created file. This clearing allows users to restrict the default access to their files.
<P>
  The mask is inherited by child processes. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.link:VAL"></A>
<DT> <CODE>link {<VAR>old</VAR>, <VAR>new</VAR>} </CODE>
<DD>
creates an additional hard link (directory entry) for an existing file.  Both the old and the new link share equal access rights to the underlying object. 
<P>
  Both <VAR>old</VAR> and <VAR>new</VAR> must reside on the same file system. A hard link to a directory cannot be created.
<P>
  Upon successful completion, <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.link:VAL:SPEC">link</A></CODE> updates the file status change time of the <VAR>old</VAR> file, and updates the file status change and modification times of the directory containing the <VAR>new</VAR> entry. (See <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.ST:STR:SPEC">Posix.FileSys.ST</A></CODE>.) 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.mkdir:VAL"></A>
<DT> <CODE>mkdir (<VAR>s</VAR>, <VAR>m</VAR>) </CODE>
<DD>
creates a new directory named <VAR>s</VAR> with protection mode  <VAR>m</VAR> (as modified by the <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.umask:VAL:SPEC">umask</A></CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.mkfifo:VAL"></A>
<DT> <CODE>mkfifo (<VAR>s</VAR>, <VAR>m</VAR>) </CODE>
<DD>
makes a FIFO special file (or named pipe) <VAR>s</VAR>, with protection mode <VAR>m</VAR> (as modified by the <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.umask:VAL:SPEC">umask</A></CODE>). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.unlink:VAL"></A>
<DT> <CODE>unlink <VAR>path</VAR> </CODE>
<DD>
removes the directory entry specified by <VAR>path</VAR> and, if the entry is a hard link, decrements the link count of the file referenced by the link.
<P>
When all links to a file are removed and no process has the file open or mapped, all resources associated with the file are reclaimed, and the file is no longer accessible. If one or more processes have the file open or mapped when the last link is removed, the link is removed before <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.unlink:VAL:SPEC">unlink</A></CODE> returns, but the removal of the file contents is postponed until all open or map references to the file are removed.  If the <VAR>path</VAR> parameter names a symbolic link, the symbolic link itself is removed. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.rmdir:VAL"></A>
<DT> <CODE>rmdir <VAR>s</VAR> </CODE>
<DD>
removes a directory <VAR>s</VAR>, which must be empty. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.rename:VAL"></A>
<DT> <CODE>rename {<VAR>old</VAR>, <VAR>new</VAR>} </CODE>
<DD>
changes the name of a file system object from <VAR>old</VAR> to <VAR>new</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.symlink:VAL"></A>
<DT> <CODE>symlink {<VAR>old</VAR>, <VAR>new</VAR>} </CODE>
<DD>
creates a symbolic link <VAR>new</VAR>. Any component of a pathname resolving to <VAR>new</VAR> will be replaced by the text <VAR>old</VAR>. Note that <VAR>old</VAR> may be a relative or absolute pathname, and might not be the pathname of any existing file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.readlink:VAL"></A>
<DT> <CODE>readlink <VAR>s</VAR> </CODE>
<DD>
reads the value of a symbolic link <VAR>s</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.dev:TY"></A><CODE><B>eqtype</B>&nbsp;dev</CODE>
<DD>
 Device identifier. The device identifier and the file serial number (<I>inode</I> or <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.ino:TY:SPEC">ino</A></CODE>) uniquely identify a file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.wordToDev:VAL"></A><CODE><B>val</B>&nbsp;wordToDev&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;dev<BR>
<B>val</B>&nbsp;devToWord&nbsp;<B>:</B>&nbsp;dev&nbsp;<B>-&gt;</B>&nbsp;SysWord.word</CODE>
<DD>
          These functions convert between <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.dev:TY:SPEC">dev</A></CODE> values and words by which the operating system identifies a device. There is no verification that a value created by <CODE>wordToDev</CODE> corresponds to a to a valid device identifier. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ino:TY"></A><CODE><B>eqtype</B>&nbsp;ino</CODE>
<DD>
 File serial number (<I>inode</I>). 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.wordToIno:VAL"></A><CODE><B>val</B>&nbsp;wordToIno&nbsp;<B>:</B>&nbsp;SysWord.word&nbsp;<B>-&gt;</B>&nbsp;ino<BR>
<B>val</B>&nbsp;inoToWord&nbsp;<B>:</B>&nbsp;ino&nbsp;<B>-&gt;</B>&nbsp;SysWord.word</CODE>
<DD>
          These functions convert between <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.ino:TY:SPEC">ino</A></CODE> values and words by which the operating system identifies an inode. There is no verification that a value created by <CODE>wordToIno</CODE> corresponds to a to a valid inode. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST:STR"></A>
<DT> <CODE><B>structure</B>&nbsp;ST</CODE>
<DD>
<BR>

<DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.stat:TY"></A><CODE><B>type</B>&nbsp;stat</CODE>
<DD>
        This type models status information concerning a file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.isDir:VAL"></A><CODE><B>val</B>&nbsp;isDir&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;isChr&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;isBlk&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;isReg&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;isFIFO&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;isLink&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool<BR>
<B>val</B>&nbsp;isSock&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;bool</CODE>
<DD>
         These functions return <CODE>true</CODE> if the file described by the parameter is, respectively, a <I>directory</I>, a <I>character special device</I>, a <I>block special device</I>, a <I>regular file</I>, a <I>FIFO</I>, a <I>symbolic link</I>, or a <I>socket</I>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.mode:VAL"></A>
<DT> <CODE>mode <VAR>st</VAR>  </CODE>
<DD>
returns the protection mode of the file described by <VAR>st</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.ino:VAL"></A><CODE><B>val</B>&nbsp;ino&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;ino<BR>
<B>val</B>&nbsp;dev&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;dev</CODE>
<DD>
 These return the file serial number (inode) and  the device identifier, respectively, of the corresponding file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.nlink:VAL"></A>
<DT> <CODE>nlink <VAR>st</VAR>  </CODE>
<DD>
returns the number of hard links to the file described by <VAR>st</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.uid:VAL"></A><CODE><B>val</B>&nbsp;uid&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;uid<BR>
<B>val</B>&nbsp;gid&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;gid</CODE>
<DD>
 These return the owner and group ID of the file. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.size:VAL"></A>
<DT> <CODE>size <VAR>st</VAR>  </CODE>
<DD>
returns the size (number of bytes) of the file described by <VAR>st</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ST.atime:VAL"></A><CODE><B>val</B>&nbsp;atime&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Time.time<BR>
<B>val</B>&nbsp;mtime&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Time.time<BR>
<B>val</B>&nbsp;ctime&nbsp;<B>:</B>&nbsp;stat&nbsp;<B>-&gt;</B>&nbsp;Time.time</CODE>
<DD>
        These functions return, respectively, the last access time, the last modification time or the last status change time of the file. 
<BR>
<BR>

</DL>
<DT> <A NAME="SIG:POSIX_FILE_SYS.stat:VAL"></A><CODE><B>val</B>&nbsp;stat&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;ST.stat<BR>
<B>val</B>&nbsp;lstat&nbsp;<B>:</B>&nbsp;string&nbsp;<B>-&gt;</B>&nbsp;ST.stat<BR>
<B>val</B>&nbsp;fstat&nbsp;<B>:</B>&nbsp;file_desc&nbsp;<B>-&gt;</B>&nbsp;ST.stat</CODE>
<DD>
          These return information on a file system object. For <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.stat:VAL:SPEC">stat</A></CODE> and <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.lstat:VAL:SPEC">lstat</A></CODE>, the object is specified by its pathname. Note that an empty string causes an exception. For <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.fstat:VAL:SPEC">fstat</A></CODE>, an open file descriptor is supplied. 
<P>
          <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.lstat:VAL:SPEC">lstat</A></CODE> differs from <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.stat:VAL:SPEC">stat</A></CODE> in that, if the pathname argument is a symbolic link, the information concerns the link itself, not the file to which the link points. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.access_mode:TY"></A><CODE><B>datatype</B>&nbsp;access_mode&nbsp;=&nbsp;A_READ&nbsp;|&nbsp;A_WRITE&nbsp;|&nbsp;A_EXEC</CODE>
<DD>
        This type is identical to <CODE><A HREF="os-file-sys.html#SIG:OS_FILE_SYS.access_mode:TY:SPEC">OS.FileSys.access_mode</A></CODE>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.access:VAL"></A>
<DT> <CODE>access (<VAR>s</VAR>, <VAR>l</VAR>) </CODE>
<DD>
checks for accessibility of file <VAR>s</VAR>.  If <VAR>l</VAR> is the empty list, it checks for the existence of the file; if <VAR>l</VAR> contains <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.access_mode:TY:SPEC">A_READ</A></CODE>, it checks for the readability of <VAR>s</VAR> based on the real user and group IDs of the process; and so on.
<P>
  The value returned depends only the appropriate privileges of the process and the permissions of the file. A directory may be indicated as writable by <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.access:VAL:SPEC">access</A></CODE>, but an attempt to open it for writing will fail (although files may be created there). A file's permissions may indicate that it is executable, but the <CODE><A HREF="posix-process.html#SIG:POSIX_PROCESS.exec:VAL:SPEC">exec</A></CODE> can fail if the file is not in the proper format. Conversely, if the process has appropriate privileges, <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.access:VAL:SPEC">access</A></CODE> will return <CODE>true</CODE> if none of the appropriate file permissions are set. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.chmod:VAL"></A>
<DT> <CODE>chmod (<VAR>s</VAR>, <VAR>mode</VAR>) </CODE>
<DD>
changes the permissions of <VAR>s</VAR> to <VAR>mode</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.fchmod:VAL"></A>
<DT> <CODE>fchmod (<VAR>fd</VAR>, <VAR>mode</VAR>) </CODE>
<DD>
changes the permissions of the file opened as <VAR>fd</VAR> to <VAR>mode</VAR>. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.chown:VAL"></A>
<DT> <CODE>chown (<VAR>s</VAR>, <VAR>uid</VAR>, <VAR>gid</VAR>) </CODE>
<DD>
changes the owner and group of file <VAR>s</VAR> to <VAR>uid</VAR> and <VAR>gid</VAR>, respectively. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.fchown:VAL"></A>
<DT> <CODE>fchown (<VAR>fd</VAR>, <VAR>uid</VAR>, <VAR>gid</VAR>) </CODE>
<DD>
changes the owner and group of the file opened as <VAR>fd</VAR> to <VAR>uid</VAR> and <VAR>gid</VAR>, respectively. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.utime:VAL"></A>
<DT> <CODE>utime (<VAR>f</VAR>, <A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A>{<VAR>actime</VAR>,<VAR>modtime</VAR>}) </CODE>
<DD>
sets the access and modification times of the file <VAR>f</VAR> to <VAR>actime</VAR> and <VAR>modtime</VAR>, respectively. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.utime:VAL"></A>
<DT> <CODE>utime (<VAR>f</VAR>, <A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A>) </CODE>
<DD>
sets the access and modification times of a file to the current time. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.ftruncate:VAL"></A>
<DT> <CODE>ftruncate (<VAR>fd</VAR>, <VAR>n</VAR>) </CODE>
<DD>
changes the length of a file opened as <VAR>fd</VAR> to <VAR>n</VAR>  bytes.  If the new length is less than the previous length,  all data beyond <VAR>n</VAR> bytes is discarded.  If the new length is greater than the previous length, the file is extended to its new length by the necessary number of zero bytes. 
<BR>
<BR>

<DT> <A NAME="SIG:POSIX_FILE_SYS.pathconf:VAL"></A>
<DT> <CODE>pathconf (<VAR>s</VAR>, <VAR>p</VAR>) </CODE>
<DT> <CODE>          fpathconf (<VAR>fd</VAR>, <VAR>p</VAR>) </CODE>
<DD>
          These functions return the value of property <VAR>p</VAR> of the file system underlying the file specified by <VAR>s</VAR> or <VAR>fd</VAR>. For integer-valued properties, if the value is unbounded,  <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned. If the value is bounded, <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(<VAR>v</VAR>)</CODE> is returned, where <VAR>v</VAR> is the value. For boolean-value properties, if the value is true, <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(1)</CODE> is returned; otherwise, <CODE><CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE>(0)</CODE> or <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE> is returned. The <CODE><A HREF="os.html#SIG:OS.SysErr:EXN:SPEC">OS.SysErr</A></CODE> exception is raised  if something goes wrong, including when <VAR>p</VAR> is not  a valid property or when the implementation does not associate the property with the file. 
<P>
          In the case of <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.pathconf:VAL:SPEC">pathconf</A></CODE>, read, write, or execute permission of the named file is not required, but all directories in the path leading to the file must be searchable. 
<P>
          The properties required by POSIX are described below.  A given implementation may support additional properties.  
<DL>
<DT> <CODE>&quot;CHOWN_RESTRICTED&quot;</CODE>  
<DD>
True if the use of <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.chown:VAL:SPEC">chown</A></CODE>   on any files (other than directories) in the specified directory   is restricted to processes with appropriate privileges.  This property only applies to directories.  
<DT> <CODE>&quot;LINK_MAX&quot;</CODE>  
<DD>
The maximum value of a file's link count as returned by the   <CODE><A HREF="posix-file-sys.html#SIG:POSIX_FILE_SYS.ST.nlink:VAL:SPEC">ST.nlink</A></CODE> function.  
<DT> <CODE>&quot;MAX_CANON&quot;</CODE>  
<DD>
The maximum number of bytes that can be stored in an input queue.   This property only applies to terminal devices.  
<DT> <CODE>&quot;MAX_INPUT&quot;</CODE>  
<DD>
The maximum number of bytes allowed in an input queue before being read by a process.   This property only applies to terminal devices.  
<DT> <CODE>&quot;NAME_MAX&quot;</CODE>
<DD>
The maximum number of bytes in a filename.   This value may be as small as 13, but is never larger than 255.   This property only applies to directories and its value  applies to filenames within the directory.  
<DT> <CODE>&quot;NO_TRUNC&quot;</CODE>  
<DD>
True if supplying a filename longer than   allowed by <CODE>&quot;NAME_MAX&quot;</CODE> causes an error;   false if long filenames are truncated.   This property only applies to directories.  
<DT> <CODE>&quot;PATH_MAX&quot;</CODE>  
<DD>
The maximum number of bytes in a pathname.   This value is never larger than 65,535 and is the maximum length of a relative pathname when the specified directory is the working directory.   This property only applies to directories.  
<DT> <CODE>&quot;PIPE_BUF&quot;</CODE>  
<DD>
Maximum number of bytes guaranteed to be written atomically. This  is applicable only to a FIFO.   The value returned applies to the referenced object.   If the path or file descriptor parameter refers to a  directory, the value returned applies to any FIFO that exists or  can be created within the directory.  
<DT> <CODE>&quot;VDISABLE&quot;</CODE>  
<DD>
If defined, the integer code <CODE>ord(c)</CODE> of the character <CODE>c</CODE> which can be used to disable the   terminal special characters specified in   <CODE><A HREF="posix-tty.html#SIG:POSIX_TTY.V:STR:SPEC">Posix.TTY.V</A></CODE>.   This property only applies to terminal devices.  
<DT> <CODE>&quot;ASYNC_IO&quot;</CODE>  
<DD>
True if asynchronous input or output   operations may be performed on the file.  
<DT> <CODE>&quot;SYNC_IO&quot;</CODE>  
<DD>
True if synchronous input or output   operations may be performed on the file.  
<DT> <CODE>&quot;PRIO_IO&quot;</CODE>  
<DD>
True if prioritized input or output   operations may be performed on the file. 
</DL>
 
<BLOCKQUOTE>
<B>Implementation note:</B><BR>

<P>
An implementation can call the operating system's <CODE>pathconf</CODE> or <CODE>fpathconf</CODE> functions, which return an integer. If the returned value is -1 and <CODE>errno</CODE> has been set, an exception is raised. Otherwise, a returned value of -1 should be mapped to <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">NONE</A></CODE>, and other values should be wrapped in <CODE><A HREF="option.html#SIG:OPTION.option:TY:SPEC">SOME</A></CODE> and returned. 
</BLOCKQUOTE>

<BLOCKQUOTE>
<B>Rationale:</B><BR>

<P>
The encoding of boolean values as <CODE>int option</CODE>, with false having two values, is an unpleasant choice. It would be preferable to split these two functions into four, with one pair handling integer-valued properties, with the present return type, and the other pair handling boolean-valued properties, returning values of type <CODE><A HREF="bool.html#SIG:BOOL.bool:TY:SPEC">bool</A></CODE>. Unfortunately, the nature of the POSIX <CODE>pathconf</CODE> and <CODE>fpathconf</CODE> functions would make this a nightmare for the implementor. 
<P>
  First, the specification of these functions provides a non-negative integer return value for both booleans and numbers. System include files provide no inherent information as to the type of a property. Although the basic properties specified by POSIX have fixed types, each system is allowed to add its own non-standard properties. Thus, for an SML implementation to make the distinction, it would have to rely on somehow gleaning the information from, <I>e.g.</I>, system-specific manual pages. 
<P>
  In addition, the POSIX specification is unclear on how boolean values are encoded. Some systems return 0 for false; others appear to return -1 without setting <CODE>errno</CODE>. Technically, the latter value may be interpreted as meaning that the property value is unknown or unspecified. From the programmer's point of view, this means that the property is not usable. 
<P>
  This situation probably precludes automatically generating these functions on a per system basis. Given this, the current return types and values appear to be the only reasonable choice. 
</BLOCKQUOTE>
<BR>
<BR>

</DL>
<H4>See Also</H4>
<BLOCKQUOTE>
<CODE><A HREF="bit-flags.html#BIT_FLAGS:SIG:SPEC">BIT_FLAGS</A></CODE>, <CODE><A HREF="os.html#SIG:OS.FileSys:STR:SPEC">OS.FileSys</A></CODE>, <CODE><A HREF="posix.html#Posix:STR:SPEC">Posix</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.IO:STR:SPEC">Posix.IO</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.ProcEnv:STR:SPEC">Posix.ProcEnv</A></CODE>, <CODE><A HREF="posix.html#SIG:POSIX.Process:STR:SPEC">Posix.Process</A></CODE>
</BLOCKQUOTE>

`
