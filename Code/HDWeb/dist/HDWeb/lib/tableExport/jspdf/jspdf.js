var jsPDF=function(){var e="20090504";var a="";var t="1.3";var r="a4";var o={a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],letter:[612,792],legal:[612,1008]};var f="0 g";var u=0;var v=2;var d=0;var c=new Array;var s=new Array;var g=.200025;var l;var j;var T="mm";var b;var m={};var F=16;var h=16;if(T=="pt"){j=1}else if(T=="mm"){j=72/25.4}else if(T=="cm"){j=72/2.54}else if(T=="in"){j=72}var P=function(){v++;s[v]=a.length;M(v+" 0 obj")};var y=function(){M("%PDF-"+t)};var R=function(){var e=pageWidth*j;var t=l*j;for(n=1;n<=u;n++){P();M("<</Type /Page");M("/Parent 1 0 R");M("/Resources 2 0 R");M("/Contents "+(v+1)+" 0 R>>");M("endobj");p=c[n];P();M("<</Length "+p.length+">>");D(p);M("endobj")}s[1]=a.length;M("1 0 obj");M("<</Type /Pages");var r="/Kids [";for(i=0;i<u;i++){r+=3+2*i+" 0 R "}M(r+"]");M("/Count "+u);M(sprintf("/MediaBox [0 0 %.2f %.2f]",e,t));M(">>");M("endobj")};var D=function(e){M("stream");M(e);M("endstream")};var I=function(){w();B();s[2]=a.length;M("2 0 obj");M("<<");C();M(">>");M("endobj")};var w=function(){P();b=v;name="Helvetica";M("<</Type /Font");M("/BaseFont /"+name);M("/Subtype /Type1");M("/Encoding /WinAnsiEncoding");M(">>");M("endobj")};var B=function(){};var C=function(){M("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");M("/Font <<");M("/F1 "+b+" 0 R");M(">>");M("/XObject <<");E();M(">>")};var E=function(){};var S=function(){M("/Producer (jsPDF "+e+")");if(m.title!=undefined){M("/Title ("+k(m.title)+")")}if(m.subject!=undefined){M("/Subject ("+k(m.subject)+")")}if(m.author!=undefined){M("/Author ("+k(m.author)+")")}if(m.keywords!=undefined){M("/Keywords ("+k(m.keywords)+")")}if(m.creator!=undefined){M("/Creator ("+k(m.creator)+")")}var n=new Date;var a=n.getFullYear();var t=n.getMonth()+1;var r=n.getDate();var i=n.getHours();var o=n.getMinutes();var f=n.getSeconds();M("/CreationDate (D:"+sprintf("%02d%02d%02d%02d%02d%02d",a,t,r,i,o,f)+")")};var x=function(){M("/Type /Catalog");M("/Pages 1 0 R");M("/OpenAction [3 0 R /FitH null]");M("/PageLayout /OneColumn")};function A(){M("/Size "+(v+1));M("/Root "+v+" 0 R");M("/Info "+(v-1)+" 0 R")}var O=function(){d=1;y();R();I();P();M("<<");S();M(">>");M("endobj");P();M("<<");x();M(">>");M("endobj");var e=a.length;M("xref");M("0 "+(v+1));M("0000000000 65535 f ");for(var n=1;n<=v;n++){M(sprintf("%010d 00000 n ",s[n]))}M("trailer");M("<<");A();M(">>");M("startxref");M(e);M("%%EOF");d=3};var H=function(){u++;d=2;c[u]="";l=o["a4"][1]/j;pageWidth=o["a4"][0]/j};var M=function(e){if(d==2){c[u]+=e+"\n"}else{a+=e+"\n"}};var W=function(){H();M(sprintf("%.2f w",g*j));h=F;M("BT /F1 "+parseInt(F)+".00 Tf ET")};W();var k=function(e){return e.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")};return{addPage:function(){W()},text:function(e,n,a){if(h!=F){M("BT /F1 "+parseInt(F)+".00 Tf ET");h=F}var t=sprintf("BT %.2f %.2f Td (%s) Tj ET",e*j,(l-n)*j,k(a));M(t)},setProperties:function(e){m=e},addImage:function(e,n,a,t,r,i){},output:function(e,n){O();if(e==undefined){return a}if(e=="datauri"){document.location.href="data:application/pdf;base64,"+Base64.encode(a)}},setFontSize:function(e){F=e}}};