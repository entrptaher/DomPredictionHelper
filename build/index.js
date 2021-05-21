(()=>{var t={481:(t,e)=>{function n(){this.Diff_Timeout=1,this.Diff_EditCost=4,this.Diff_DualThreshold=32,this.Match_Threshold=.5,this.Match_Distance=1e3,this.Patch_DeleteThreshold=.5,this.Patch_Margin=4,this.Match_MaxBits=function(){for(var t=0,e=1,n=2;e!=n;)t++,e=n,n<<=1;return t}()}var r=-1;function i(){this.diffs=[],this.start1=null,this.start2=null,this.length1=0,this.length2=0}n.prototype.diff_main=function(t,e,n){if(null==t||null==e)throw new Error("Null input. (diff_main)");if(t==e)return[[0,t]];void 0===n&&(n=!0);var r=n,i=this.diff_commonPrefix(t,e),s=t.substring(0,i);t=t.substring(i),e=e.substring(i),i=this.diff_commonSuffix(t,e);var h=t.substring(t.length-i);t=t.substring(0,t.length-i),e=e.substring(0,e.length-i);var a=this.diff_compute(t,e,r);return s&&a.unshift([0,s]),h&&a.push([0,h]),this.diff_cleanupMerge(a),a},n.prototype.diff_compute=function(t,e,n){var i;if(!t)return[[1,e]];if(!e)return[[r,t]];var s=t.length>e.length?t:e,h=t.length>e.length?e:t,a=s.indexOf(h);if(-1!=a)return i=[[1,s.substring(0,a)],[0,h],[1,s.substring(a+h.length)]],t.length>e.length&&(i[0][0]=i[2][0]=r),i;s=h=null;var l,o=this.diff_halfMatch(t,e);if(o){var f=o[0],g=o[1],c=o[2],u=o[3],p=o[4],d=this.diff_main(f,c,n),v=this.diff_main(g,u,n);return d.concat([[0,p]],v)}if(n&&(t.length<100||e.length<100)&&(n=!1),n&&(t=(M=this.diff_linesToChars(t,e))[0],e=M[1],l=M[2]),(i=this.diff_map(t,e))||(i=[[r,t],[1,e]]),n){this.diff_charsToLines(i,l),this.diff_cleanupSemantic(i),i.push([0,""]);for(var b=0,m=0,_=0,y="",w="";b<i.length;){switch(i[b][0]){case 1:_++,w+=i[b][1];break;case r:m++,y+=i[b][1];break;case 0:if(m>=1&&_>=1){var M=this.diff_main(y,w,!1);i.splice(b-m-_,m+_),b=b-m-_;for(var x=M.length-1;x>=0;x--)i.splice(b,0,M[x]);b+=M.length}_=0,m=0,y="",w=""}b++}i.pop()}return i},n.prototype.diff_linesToChars=function(t,e){var n=[],r={};function i(t){for(var e="",i=0,s=-1,h=n.length;s<t.length-1;){-1==(s=t.indexOf("\n",i))&&(s=t.length-1);var a=t.substring(i,s+1);i=s+1,(r.hasOwnProperty?r.hasOwnProperty(a):void 0!==r[a])?e+=String.fromCharCode(r[a]):(e+=String.fromCharCode(h),r[a]=h,n[h++]=a)}return e}return n[0]="",[i(t),i(e),n]},n.prototype.diff_charsToLines=function(t,e){for(var n=0;n<t.length;n++){for(var r=t[n][1],i=[],s=0;s<r.length;s++)i[s]=e[r.charCodeAt(s)];t[n][1]=i.join("")}},n.prototype.diff_map=function(t,e){var n,r,i,s=(new Date).getTime()+1e3*this.Diff_Timeout,h=t.length,a=e.length,l=h+a-1,o=2*this.Diff_DualThreshold<l,f=[],g=[],c={},u={};c[1]=0,u[1]=0;for(var p={},d=!1,v=(h+a)%2,b=0;b<l;b++){if(this.Diff_Timeout>0&&(new Date).getTime()>s)return null;f[b]={};for(var m=-b;m<=b;m+=2){for(r=(n=m==-b||m!=b&&c[m-1]<c[m+1]?c[m+1]:c[m-1]+1)-m,o&&(i=n+","+r,v&&void 0!==p[i]&&(d=!0),v||(p[i]=b));!d&&n<h&&r<a&&t.charAt(n)==e.charAt(r);)n++,r++,o&&(i=n+","+r,v&&void 0!==p[i]&&(d=!0),v||(p[i]=b));if(c[m]=n,f[b][n+","+r]=!0,n==h&&r==a)return this.diff_path1(f,t,e);if(d)return g=g.slice(0,p[i]+1),this.diff_path1(f,t.substring(0,n),e.substring(0,r)).concat(this.diff_path2(g,t.substring(n),e.substring(r)))}if(o)for(g[b]={},m=-b;m<=b;m+=2){for(i=h-(n=m==-b||m!=b&&u[m-1]<u[m+1]?u[m+1]:u[m-1]+1)+","+(a-(r=n-m)),v||void 0===p[i]||(d=!0),v&&(p[i]=b);!d&&n<h&&r<a&&t.charAt(h-n-1)==e.charAt(a-r-1);)i=h-++n+","+(a-++r),v||void 0===p[i]||(d=!0),v&&(p[i]=b);if(u[m]=n,g[b][n+","+r]=!0,d)return f=f.slice(0,p[i]+1),this.diff_path1(f,t.substring(0,h-n),e.substring(0,a-r)).concat(this.diff_path2(g,t.substring(h-n),e.substring(a-r)))}}return null},n.prototype.diff_path1=function(t,e,n){for(var i=[],s=e.length,h=n.length,a=null,l=t.length-2;l>=0;l--)for(;;){if(void 0!==t[l][s-1+","+h]){s--,a===r?i[0][1]=e.charAt(s)+i[0][1]:i.unshift([r,e.charAt(s)]),a=r;break}if(void 0!==t[l][s+","+(h-1)]){h--,1===a?i[0][1]=n.charAt(h)+i[0][1]:i.unshift([1,n.charAt(h)]),a=1;break}if(s--,h--,e.charAt(s)!=n.charAt(h))throw new Error("No diagonal.  Can't happen. (diff_path1)");0===a?i[0][1]=e.charAt(s)+i[0][1]:i.unshift([0,e.charAt(s)]),a=0}return i},n.prototype.diff_path2=function(t,e,n){for(var i=[],s=0,h=e.length,a=n.length,l=null,o=t.length-2;o>=0;o--)for(;;){if(void 0!==t[o][h-1+","+a]){h--,l===r?i[s-1][1]+=e.charAt(e.length-h-1):i[s++]=[r,e.charAt(e.length-h-1)],l=r;break}if(void 0!==t[o][h+","+(a-1)]){a--,1===l?i[s-1][1]+=n.charAt(n.length-a-1):i[s++]=[1,n.charAt(n.length-a-1)],l=1;break}if(h--,a--,e.charAt(e.length-h-1)!=n.charAt(n.length-a-1))throw new Error("No diagonal.  Can't happen. (diff_path2)");0===l?i[s-1][1]+=e.charAt(e.length-h-1):i[s++]=[0,e.charAt(e.length-h-1)],l=0}return i},n.prototype.diff_commonPrefix=function(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(s,i)==e.substring(s,i)?s=n=i:r=i,i=Math.floor((r-n)/2+n);return i},n.prototype.diff_commonSuffix=function(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(t.length-i,t.length-s)==e.substring(e.length-i,e.length-s)?s=n=i:r=i,i=Math.floor((r-n)/2+n);return i},n.prototype.diff_halfMatch=function(t,e){var n=t.length>e.length?t:e,r=t.length>e.length?e:t;if(n.length<10||r.length<1)return null;var i=this;function s(t,e,n){for(var r,s,h,a,l=t.substring(n,n+Math.floor(t.length/4)),o=-1,f="";-1!=(o=e.indexOf(l,o+1));){var g=i.diff_commonPrefix(t.substring(n),e.substring(o)),c=i.diff_commonSuffix(t.substring(0,n),e.substring(0,o));f.length<c+g&&(f=e.substring(o-c,o)+e.substring(o,o+g),r=t.substring(0,n-c),s=t.substring(n+g),h=e.substring(0,o-c),a=e.substring(o+g))}return f.length>=t.length/2?[r,s,h,a,f]:null}var h,a,l,o,f,g=s(n,r,Math.ceil(n.length/4)),c=s(n,r,Math.ceil(n.length/2));return g||c?(h=c?g&&g[4].length>c[4].length?g:c:g,t.length>e.length?(a=h[0],l=h[1],o=h[2],f=h[3]):(o=h[0],f=h[1],a=h[2],l=h[3]),[a,l,o,f,h[4]]):null},n.prototype.diff_cleanupSemantic=function(t){for(var e=!1,n=[],i=0,s=null,h=0,a=0,l=0;h<t.length;)0==t[h][0]?(n[i++]=h,a=l,l=0,s=t[h][1]):(l+=t[h][1].length,null!==s&&s.length<=a&&s.length<=l&&(t.splice(n[i-1],0,[r,s]),t[n[i-1]+1][0]=1,i--,h=--i>0?n[i-1]:-1,a=0,l=0,s=null,e=!0)),h++;e&&this.diff_cleanupMerge(t),this.diff_cleanupSemanticLossless(t)},n.prototype.diff_cleanupSemanticLossless=function(t){var e=/[^a-zA-Z0-9]/,n=/\s/,r=/[\r\n]/,i=/\n\r?\n$/,s=/^\r?\n\r?\n/;function h(t,h){if(!t||!h)return 5;var a=0;return(t.charAt(t.length-1).match(e)||h.charAt(0).match(e))&&(a++,(t.charAt(t.length-1).match(n)||h.charAt(0).match(n))&&(a++,(t.charAt(t.length-1).match(r)||h.charAt(0).match(r))&&(a++,(t.match(i)||h.match(s))&&a++))),a}for(var a=1;a<t.length-1;){if(0==t[a-1][0]&&0==t[a+1][0]){var l=t[a-1][1],o=t[a][1],f=t[a+1][1],g=this.diff_commonSuffix(l,o);if(g){var c=o.substring(o.length-g);l=l.substring(0,l.length-g),o=c+o.substring(0,o.length-g),f=c+f}for(var u=l,p=o,d=f,v=h(l,o)+h(o,f);o.charAt(0)===f.charAt(0);){l+=o.charAt(0),o=o.substring(1)+f.charAt(0),f=f.substring(1);var b=h(l,o)+h(o,f);b>=v&&(v=b,u=l,p=o,d=f)}t[a-1][1]!=u&&(u?t[a-1][1]=u:(t.splice(a-1,1),a--),t[a][1]=p,d?t[a+1][1]=d:(t.splice(a+1,1),a--))}a++}},n.prototype.diff_cleanupEfficiency=function(t){for(var e=!1,n=[],i=0,s="",h=0,a=!1,l=!1,o=!1,f=!1;h<t.length;)0==t[h][0]?(t[h][1].length<this.Diff_EditCost&&(o||f)?(n[i++]=h,a=o,l=f,s=t[h][1]):(i=0,s=""),o=f=!1):(t[h][0]==r?f=!0:o=!0,s&&(a&&l&&o&&f||s.length<this.Diff_EditCost/2&&a+l+o+f==3)&&(t.splice(n[i-1],0,[r,s]),t[n[i-1]+1][0]=1,i--,s="",a&&l?(o=f=!0,i=0):(h=--i>0?n[i-1]:-1,o=f=!1),e=!0)),h++;e&&this.diff_cleanupMerge(t)},n.prototype.diff_cleanupMerge=function(t){t.push([0,""]);for(var e,n=0,i=0,s=0,h="",a="";n<t.length;)switch(t[n][0]){case 1:s++,a+=t[n][1],n++;break;case r:i++,h+=t[n][1],n++;break;case 0:0!==i||0!==s?(0!==i&&0!==s&&(0!==(e=this.diff_commonPrefix(a,h))&&(n-i-s>0&&0==t[n-i-s-1][0]?t[n-i-s-1][1]+=a.substring(0,e):(t.splice(0,0,[0,a.substring(0,e)]),n++),a=a.substring(e),h=h.substring(e)),0!==(e=this.diff_commonSuffix(a,h))&&(t[n][1]=a.substring(a.length-e)+t[n][1],a=a.substring(0,a.length-e),h=h.substring(0,h.length-e))),0===i?t.splice(n-i-s,i+s,[1,a]):0===s?t.splice(n-i-s,i+s,[r,h]):t.splice(n-i-s,i+s,[r,h],[1,a]),n=n-i-s+(i?1:0)+(s?1:0)+1):0!==n&&0==t[n-1][0]?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,s=0,i=0,h="",a=""}""===t[t.length-1][1]&&t.pop();var l=!1;for(n=1;n<t.length-1;)0==t[n-1][0]&&0==t[n+1][0]&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),l=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),l=!0)),n++;l&&this.diff_cleanupMerge(t)},n.prototype.diff_xIndex=function(t,e){var n,i=0,s=0,h=0,a=0;for(n=0;n<t.length&&(1!==t[n][0]&&(i+=t[n][1].length),t[n][0]!==r&&(s+=t[n][1].length),!(i>e));n++)h=i,a=s;return t.length!=n&&t[n][0]===r?a:a+(e-h)},n.prototype.diff_prettyHtml=function(t){for(var e=[],n=0,i=0;i<t.length;i++){var s=t[i][0],h=t[i][1],a=h.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"&para;<BR>");switch(s){case 1:e[i]='<INS STYLE="background:#E6FFE6;" TITLE="i='+n+'">'+a+"</INS>";break;case r:e[i]='<DEL STYLE="background:#FFE6E6;" TITLE="i='+n+'">'+a+"</DEL>";break;case 0:e[i]='<SPAN TITLE="i='+n+'">'+a+"</SPAN>"}s!==r&&(n+=h.length)}return e.join("")},n.prototype.diff_text1=function(t){for(var e=[],n=0;n<t.length;n++)1!==t[n][0]&&(e[n]=t[n][1]);return e.join("")},n.prototype.diff_text2=function(t){for(var e=[],n=0;n<t.length;n++)t[n][0]!==r&&(e[n]=t[n][1]);return e.join("")},n.prototype.diff_levenshtein=function(t){for(var e=0,n=0,i=0,s=0;s<t.length;s++){var h=t[s][0],a=t[s][1];switch(h){case 1:n+=a.length;break;case r:i+=a.length;break;case 0:e+=Math.max(n,i),n=0,i=0}}return e+Math.max(n,i)},n.prototype.diff_toDelta=function(t){for(var e=[],n=0;n<t.length;n++)switch(t[n][0]){case 1:e[n]="+"+encodeURI(t[n][1]);break;case r:e[n]="-"+t[n][1].length;break;case 0:e[n]="="+t[n][1].length}return e.join("\t").replace(/\x00/g,"%00").replace(/%20/g," ")},n.prototype.diff_fromDelta=function(t,e){for(var n=[],i=0,s=0,h=(e=e.replace(/%00/g,"\0")).split(/\t/g),a=0;a<h.length;a++){var l=h[a].substring(1);switch(h[a].charAt(0)){case"+":try{n[i++]=[1,decodeURI(l)]}catch(t){throw new Error("Illegal escape in diff_fromDelta: "+l)}break;case"-":case"=":var o=parseInt(l,10);if(isNaN(o)||o<0)throw new Error("Invalid number in diff_fromDelta: "+l);var f=t.substring(s,s+=o);"="==h[a].charAt(0)?n[i++]=[0,f]:n[i++]=[r,f];break;default:if(h[a])throw new Error("Invalid diff operation in diff_fromDelta: "+h[a])}}if(s!=t.length)throw new Error("Delta length ("+s+") does not equal source text length ("+t.length+").");return n},n.prototype.match_main=function(t,e,n){if(null==t||null==e||null==n)throw new Error("Null input. (match_main)");return n=Math.max(0,Math.min(n,t.length)),t==e?0:t.length?t.substring(n,n+e.length)==e?n:this.match_bitap(t,e,n):-1},n.prototype.match_bitap=function(t,e,n){if(e.length>this.Match_MaxBits)throw new Error("Pattern too long for this browser.");var r=this.match_alphabet(e),i=this;function s(t,r){var s=t/e.length,h=Math.abs(n-r);return i.Match_Distance?s+h/i.Match_Distance:h?1:s}var h=this.Match_Threshold,a=t.indexOf(e,n);-1!=a&&(h=Math.min(s(0,a),h),-1!=(a=t.lastIndexOf(e,n+e.length))&&(h=Math.min(s(0,a),h)));var l,o,f=1<<e.length-1;a=-1;for(var g,c=e.length+t.length,u=0;u<e.length;u++){for(l=0,o=c;l<o;)s(u,n+o)<=h?l=o:c=o,o=Math.floor((c-l)/2+l);c=o;var p=Math.max(1,n-o+1),d=Math.min(n+o,t.length)+e.length,v=Array(d+2);v[d+1]=(1<<u)-1;for(var b=d;b>=p;b--){var m=r[t.charAt(b-1)];if(v[b]=0===u?(v[b+1]<<1|1)&m:(v[b+1]<<1|1)&m|(g[b+1]|g[b])<<1|1|g[b+1],v[b]&f){var _=s(u,b-1);if(_<=h){if(h=_,!((a=b-1)>n))break;p=Math.max(1,2*n-a)}}}if(s(u+1,n)>h)break;g=v}return a},n.prototype.match_alphabet=function(t){for(var e={},n=0;n<t.length;n++)e[t.charAt(n)]=0;for(n=0;n<t.length;n++)e[t.charAt(n)]|=1<<t.length-n-1;return e},n.prototype.patch_addContext=function(t,e){if(0!=e.length){for(var n=e.substring(t.start2,t.start2+t.length1),r=0;e.indexOf(n)!=e.lastIndexOf(n)&&n.length<this.Match_MaxBits-this.Patch_Margin-this.Patch_Margin;)r+=this.Patch_Margin,n=e.substring(t.start2-r,t.start2+t.length1+r);r+=this.Patch_Margin;var i=e.substring(t.start2-r,t.start2);i&&t.diffs.unshift([0,i]);var s=e.substring(t.start2+t.length1,t.start2+t.length1+r);s&&t.diffs.push([0,s]),t.start1-=i.length,t.start2-=i.length,t.length1+=i.length+s.length,t.length2+=i.length+s.length}},n.prototype.patch_make=function(t,e,n){var s,h;if("string"==typeof t&&"string"==typeof e&&void 0===n)s=t,(h=this.diff_main(s,e,!0)).length>2&&(this.diff_cleanupSemantic(h),this.diff_cleanupEfficiency(h));else if(t&&"object"==typeof t&&void 0===e&&void 0===n)h=t,s=this.diff_text1(h);else if("string"==typeof t&&e&&"object"==typeof e&&void 0===n)s=t,h=e;else{if("string"!=typeof t||"string"!=typeof e||!n||"object"!=typeof n)throw new Error("Unknown call format to patch_make.");s=t,h=n}if(0===h.length)return[];for(var a=[],l=new i,o=0,f=0,g=0,c=s,u=s,p=0;p<h.length;p++){var d=h[p][0],v=h[p][1];switch(o||0===d||(l.start1=f,l.start2=g),d){case 1:l.diffs[o++]=h[p],l.length2+=v.length,u=u.substring(0,g)+v+u.substring(g);break;case r:l.length1+=v.length,l.diffs[o++]=h[p],u=u.substring(0,g)+u.substring(g+v.length);break;case 0:v.length<=2*this.Patch_Margin&&o&&h.length!=p+1?(l.diffs[o++]=h[p],l.length1+=v.length,l.length2+=v.length):v.length>=2*this.Patch_Margin&&o&&(this.patch_addContext(l,c),a.push(l),l=new i,o=0,c=u,f=g)}1!==d&&(f+=v.length),d!==r&&(g+=v.length)}return o&&(this.patch_addContext(l,c),a.push(l)),a},n.prototype.patch_deepCopy=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n],s=new i;s.diffs=[];for(var h=0;h<r.diffs.length;h++)s.diffs[h]=r.diffs[h].slice();s.start1=r.start1,s.start2=r.start2,s.length1=r.length1,s.length2=r.length2,e[n]=s}return e},n.prototype.patch_apply=function(t,e){if(0==t.length)return[e,[]];t=this.patch_deepCopy(t);var n=this.patch_addPadding(t);e=n+e+n,this.patch_splitMax(t);for(var i=0,s=[],h=0;h<t.length;h++){var a,l,o=t[h].start2+i,f=this.diff_text1(t[h].diffs),g=-1;if(f.length>this.Match_MaxBits?-1!=(a=this.match_main(e,f.substring(0,this.Match_MaxBits),o))&&(-1==(g=this.match_main(e,f.substring(f.length-this.Match_MaxBits),o+f.length-this.Match_MaxBits))||a>=g)&&(a=-1):a=this.match_main(e,f,o),-1==a)s[h]=!1,i-=t[h].length2-t[h].length1;else if(s[h]=!0,i=a-o,f==(l=-1==g?e.substring(a,a+f.length):e.substring(a,g+this.Match_MaxBits)))e=e.substring(0,a)+this.diff_text2(t[h].diffs)+e.substring(a+f.length);else{var c=this.diff_main(f,l,!1);if(f.length>this.Match_MaxBits&&this.diff_levenshtein(c)/f.length>this.Patch_DeleteThreshold)s[h]=!1;else{this.diff_cleanupSemanticLossless(c);for(var u,p=0,d=0;d<t[h].diffs.length;d++){var v=t[h].diffs[d];0!==v[0]&&(u=this.diff_xIndex(c,p)),1===v[0]?e=e.substring(0,a+u)+v[1]+e.substring(a+u):v[0]===r&&(e=e.substring(0,a+u)+e.substring(a+this.diff_xIndex(c,p+v[1].length))),v[0]!==r&&(p+=v[1].length)}}}}return[e=e.substring(n.length,e.length-n.length),s]},n.prototype.patch_addPadding=function(t){for(var e=this.Patch_Margin,n="",r=1;r<=e;r++)n+=String.fromCharCode(r);for(r=0;r<t.length;r++)t[r].start1+=e,t[r].start2+=e;var i=t[0],s=i.diffs;if(0==s.length||0!=s[0][0])s.unshift([0,n]),i.start1-=e,i.start2-=e,i.length1+=e,i.length2+=e;else if(e>s[0][1].length){var h=e-s[0][1].length;s[0][1]=n.substring(s[0][1].length)+s[0][1],i.start1-=h,i.start2-=h,i.length1+=h,i.length2+=h}return 0==(s=(i=t[t.length-1]).diffs).length||0!=s[s.length-1][0]?(s.push([0,n]),i.length1+=e,i.length2+=e):e>s[s.length-1][1].length&&(h=e-s[s.length-1][1].length,s[s.length-1][1]+=n.substring(0,h),i.length1+=h,i.length2+=h),n},n.prototype.patch_splitMax=function(t){for(var e=0;e<t.length;e++)if(t[e].length1>this.Match_MaxBits){var n=t[e];t.splice(e--,1);for(var s=this.Match_MaxBits,h=n.start1,a=n.start2,l="";0!==n.diffs.length;){var o=new i,f=!0;for(o.start1=h-l.length,o.start2=a-l.length,""!==l&&(o.length1=o.length2=l.length,o.diffs.push([0,l]));0!==n.diffs.length&&o.length1<s-this.Patch_Margin;){var g=n.diffs[0][0],c=n.diffs[0][1];1===g?(o.length2+=c.length,a+=c.length,o.diffs.push(n.diffs.shift()),f=!1):g===r&&1==o.diffs.length&&0==o.diffs[0][0]&&c.length>2*s?(o.length1+=c.length,h+=c.length,f=!1,o.diffs.push([g,c]),n.diffs.shift()):(c=c.substring(0,s-o.length1-this.Patch_Margin),o.length1+=c.length,h+=c.length,0===g?(o.length2+=c.length,a+=c.length):f=!1,o.diffs.push([g,c]),c==n.diffs[0][1]?n.diffs.shift():n.diffs[0][1]=n.diffs[0][1].substring(c.length))}l=(l=this.diff_text2(o.diffs)).substring(l.length-this.Patch_Margin);var u=this.diff_text1(n.diffs).substring(0,this.Patch_Margin);""!==u&&(o.length1+=u.length,o.length2+=u.length,0!==o.diffs.length&&0===o.diffs[o.diffs.length-1][0]?o.diffs[o.diffs.length-1][1]+=u:o.diffs.push([0,u])),f||t.splice(++e,0,o)}}},n.prototype.patch_toText=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=t[n];return e.join("")},n.prototype.patch_fromText=function(t){var e=[];if(!t)return e;for(var n=(t=t.replace(/%00/g,"\0")).split("\n"),s=0;s<n.length;){var h=n[s].match(/^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/);if(!h)throw new Error("Invalid patch string: "+n[s]);var a=new i;for(e.push(a),a.start1=parseInt(h[1],10),""===h[2]?(a.start1--,a.length1=1):"0"==h[2]?a.length1=0:(a.start1--,a.length1=parseInt(h[2],10)),a.start2=parseInt(h[3],10),""===h[4]?(a.start2--,a.length2=1):"0"==h[4]?a.length2=0:(a.start2--,a.length2=parseInt(h[4],10)),s++;s<n.length;){var l=n[s].charAt(0);try{var o=decodeURI(n[s].substring(1))}catch(t){throw new Error("Illegal escape in patch_fromText: "+o)}if("-"==l)a.diffs.push([r,o]);else if("+"==l)a.diffs.push([1,o]);else if(" "==l)a.diffs.push([0,o]);else{if("@"==l)break;if(""!==l)throw new Error('Invalid patch mode "'+l+'" in: '+o)}s++}}return e},i.prototype.toString=function(){for(var t,e=["@@ -"+(0===this.length1?this.start1+",0":1==this.length1?this.start1+1:this.start1+1+","+this.length1)+" +"+(0===this.length2?this.start2+",0":1==this.length2?this.start2+1:this.start2+1+","+this.length2)+" @@\n"],n=0;n<this.diffs.length;n++){switch(this.diffs[n][0]){case 1:t="+";break;case r:t="-";break;case 0:t=" "}e[n+1]=t+encodeURI(this.diffs[n][1])+"\n"}return e.join("").replace(/\x00/g,"%00").replace(/%20/g," ")},e.LA=n}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(r),n.d(r,{default:()=>h});var s=n(481),h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r;return n=t,(r=[{key:"recursiveNodes",value:function(t){var e;return e=t.nodeName&&t.parentNode&&t!==document.body?this.recursiveNodes(t.parentNode):new Array,t.host&&t.host.shadowRoot||e.push(t),e}},{key:"escapeCssNames",value:function(t){if(!t)return"";try{return t.replace(/\bselectorgadget_\w+\b/g,"").replace(/\\/g,"\\\\").replace(/[\#\;\&\,\.\+\*\~\'\:\"\!\^\$\[\]\(\)\=\>\|\/]/g,(function(t){return"\\".concat(t)})).replace(/\s+/,"")}catch(e){return window.console&&(console.log("---"),console.log("exception in escapeCssNames"),console.log(t),console.log("---")),""}}},{key:"childElemNumber",value:function(t){var e;for(e=0;t.previousSibling&&(t=t.previousSibling);)1===t.nodeType&&e++;return e}},{key:"siblingsWithoutTextNodes",value:function(t){var e,n,r,i,s;for(e=[],i=0,s=(r=t.parentNode.childNodes).length;i<s;i++)if("#"!==(n=r[i]).nodeName.substring(0,1)&&"STYLE"!==n.nodeName){if(n===t)break;e.push(n)}return e}},{key:"pathOf",value:function(t){var e,n,r,i,s,h,a;for(r="",s=0,h=(a=this.recursiveNodes(t)).length;s<h;s++)if(e=a[s]){if(i=this.siblingsWithoutTextNodes(e),"body"!==e.nodeName.toLowerCase())for(n=i.length-2<0?0:i.length-2;n<i.length&&i[n]!==e;)i[n].nodeName.match(/^(script|#.*?)$/i)||(r+=this.cssDescriptor(i[n])+(n+1===i.length?"+ ":"~ ")),n++;r+="".concat(this.cssDescriptor(e)," > ")}return this.cleanCss(r)}},{key:"cssDescriptor",value:function(t){var e,n,r,i,s,h;if(r=t.nodeName.toLowerCase(),(n=t.id&&this.escapeCssNames(new String(t.id)))&&n.length>0&&(r+="#".concat(n)),t.className)for(i=0,s=(h="".concat(t.className).split(" ")).length;i<s;i++)e=h[i],n=this.escapeCssNames(e),e&&n.length>0&&(r+=".".concat(n));return"body"!==t.nodeName.toLowerCase()&&(r+=":nth-child(".concat(this.childElemNumber(t)+1,")")),r}},{key:"cssDiff",value:function(t){var e,n,r,i,h,a,l,o,f,g,c;try{i=new s.LA}catch(t){throw"Please include the diff_match_patch library."}if(void 0===t||0===t.length)return"";for(a={},e=(h=this.encodeCssForDiff(t,a)).pop(),o=0,g=h.length;o<g;o++)for(n=h[o],r=i.diff_main(e,n),e="",f=0,c=r.length;f<c;f++)0===(l=r[f])[0]&&(e+=l[1]);return this.decodeCss(e,a)}},{key:"tokenizeCss",value:function(t){var e,n,r,i,s,h,a;for(n=!1,i="",r=[],s=0,h=(a=this.cleanCss(t)).length;s<h;s++)e=a[s],n?n=!1:"\\"===e?n=!0:"."!==e&&" "!==e&&"#"!==e&&">"!==e&&":"!==e&&","!==e&&"+"!==e&&"~"!==e||(i.length>0&&r.push(i),i=""),i+=e," "!==e&&","!==e||(r.push(i),i="");return i.length>0&&r.push(i),r}},{key:"tokenizeCssForDiff",value:function(t){var e,n,r,i,s,h;for(n=[],e=[],i=0,s=(h=this.tokenizeCss(t)).length;i<s;i++)r=h[i],e.push(r)," "===r&&e.length>0?(n=n.concat(e),e=[]):"+"!==r&&"~"!==r||(e=[e.join("")]);return e.length>0?n.concat(e):n}},{key:"decodeCss",value:function(t,e){var n,r,i,s,h;for(n=this.invertObject(e),r="",i=0,s=(h=t.split("")).length;i<s;i++)r+=n[h[i]];return this.cleanCss(r)}},{key:"encodeCssForDiff",value:function(t,e){var n,r,i,s,h,a,l,o,f,g;for(n=50,s=[],a=0,o=t.length;a<o;a++){for(i=t[a],r=new String,l=0,f=(g=this.tokenizeCssForDiff(i)).length;l<f;l++)e[h=g[l]]||(e[h]=String.fromCharCode(n++)),r+=e[h];s.push(r)}return s}},{key:"tokenPriorities",value:function(t){var e,n,r,i,s,h,a;for(r=new Array,n=0,h=0,a=t.length;h<a;h++)e=(s=t[h]).substring(0,1),i=s.substring(1,2),":"===e&&"n"===i?r[n]=0:">"===e?r[n]=2:"+"===e||"~"===e?r[n]=3:":"!==e&&"."!==e&&"#"!==e&&" "!==e&&">"!==e&&"+"!==e&&"~"!==e?r[n]=4:"."===e?r[n]=5:(e="#")?(r[n]=6,s.match(/\d{3,}/)&&(r[n]=2.5)):r[n]=0,r[n]+=.001*n,n++;return r}},{key:"orderFromPriorities",value:function(t){var e,n,r,i,s,h,a;for(r=new Array,n=new Array,e=i=0,h=t.length;0<=h?i<h:i>h;e=0<=h?++i:--i)r[e]={value:t[e],original:e};for(r.sort((function(t,e){return t.value-e.value})),e=s=0,a=t.length;0<=a?s<a:s>a;e=0<=a?++s:--s)n[e]=r[e].original;return n}},{key:"simplifyCss",value:function(t,e,n){var r,i,s,h,a,l,o,f,g,c,u,p=this;for(o=this.tokenizeCss(t),f=this.tokenPriorities(o),a=this.orderFromPriorities(f),g=this.cleanCss(t),r="",this.selectorGets("all",e,g)&&this.selectorGets("none",n,g)&&(r=g),s=!0;s;)for(s=!1,h=c=0,u=o.length;0<=u?c<u:c>u;h=0<=u?++c:--c)0!==o[l=a[h]].length&&(i=o[l].substring(0,1),o[l].substring(1,2)," "!==i&&(this.wouldLeaveFreeFloatingNthChild(o,l)||this._removeElements(l,o,i,(function(t){return!!(p.selectorGets("all",e,t)&&p.selectorGets("none",n,t)&&(t.length<r.length||0===r.length))&&(r=t,s=!0,!0)}))));return this.cleanCss(r)}},{key:"_removeElements",value:function(t,e,n,r){var i,s,h,a,l,o;for(s="+"===n||"~"===n?this.positionOfSpaceBeforeIndexOrLineStart(t,e):t,a=e.slice(s,t+1),i=l=s;s<=t?l<=t:l>=t;i=s<=t?++l:--l)e[i]="";if(""===(h=this.cleanCss(e.join("")))||!r(h))for(i=o=s;s<=t?o<=t:o>=t;i=s<=t?++o:--o)e[i]=a[i-s];return e}},{key:"positionOfSpaceBeforeIndexOrLineStart",value:function(t,e){var n;for(n=t;n>=0&&" "!==e[n];)n--;return n<0&&(n=0),n}},{key:"wouldLeaveFreeFloatingNthChild",value:function(t,e){var n,r,i;for(i=r=!1,n=e+1;n<t.length&&0===t[n].length;)n++;for(n<t.length&&":n"===t[n].substring(0,2)&&(r=!0),n=e-1;n>-1&&0===t[n].length;)n--;return(n<0||" "===t[n])&&(i=!0),i&&r}},{key:"cleanCss",value:function(t){var e,n;for(e=t,n=null;n!==e;)n=e,e=e.replace(/(^|\s+)(\+|\~)/,"").replace(/(\+|\~)\s*$/,"").replace(/>/g," > ").replace(/\s*(>\s*)+/g," > ").replace(/,/g," , ").replace(/\s+/g," ").replace(/^\s+|\s+$/g,"").replace(/\s*,$/g,"").replace(/^\s*,\s*/g,"").replace(/\s*>$/g,"").replace(/^>\s*/g,"").replace(/[\+\~\>]\s*,/g,",").replace(/[\+\~]\s*>/g,">").replace(/\s*(,\s*)+/g," , ").replace(/#(\d([\w\-]|\\:|\\.)+)/g,'[id="$1"]');return e}},{key:"getPathsFor",value:function(t){var e,n,r,i;for(n=[],r=0,i=t.length;r<i;r++)(e=t[r])&&e.nodeName&&n.push(this.pathOf(e));return n}},{key:"predictCss",value:function(t,e){var n,r,i,s,h,a,l;if(0===t.length)return"";if(i=this.getPathsFor(t),n=this.cssDiff(i),(s=this.simplifyCss(n,t,e)).length>0)return s;for(h="",a=0,l=t.length;a<l;a++)r=t[a],h="".concat(this.pathOf(r),", ").concat(h);return h=this.cleanCss(h),console.log(h),this.simplifyCss(h,t,e)}},{key:"selectorGets",value:function(t,n,r){if(0===n.length&&"all"===t)return!1;if(0===n.length&&"none"===t)return!0;try{return"all"===t?e(n).every((function(t){return t.matches(r)})):e(n).every((function(t){return!t.matches(r)}))}catch(t){throw window.console&&console.log("Error on selector: ".concat(r)),t}}},{key:"invertObject",value:function(t){var e,n;for(e in n={},t)n[t[e]]=e;return n}},{key:"cssToXPath",value:function(t){var e,n,r,i,s,h;for((i=this.tokenizeCss(t))[0]&&" "===i[0]&&i.splice(0,1),i[i.length-1]&&" "===i[i.length-1]&&i.splice(i.length-1,1),e=[],n="",s=0,h=i.length;s<h;s++)" "===(r=i[s])?(n+=this.cssToXPathBlockHelper(e),e=[]):e.push(r);return n+this.cssToXPathBlockHelper(e)}},{key:"cssToXPathBlockHelper",value:function(t){var e,n,r,i,s,h,a,l,o,f,g;if(0===t.length)return"//";if(s="//",","===(r=t[0].substring(0,1)))return" | ";for(":"!==r&&"#"!==r&&"."!==r||(s+="*"),n=[],h=null,l=0,f=t.length;l<f;l++)r=(e=t[l]).substring(0,1),a=e.substring(1),":"===r?(h=a.match(/^nth-child\((\d+)\)$/))&&n.push("(((count(preceding-sibling::*) + 1) = ".concat(h[1],") and parent::*)")):"."===r?n.push('contains(concat( " ", @class, " " ), concat( " ", "'.concat(a,'", " " ))')):"#"===r?n.push('(@id = "'.concat(a,'")')):","===r||(s+=e);for(n.length>0&&(s+="["),i=o=0,g=n.length;0<=g?o<g:o>g;i=0<=g?++o:--o)s+=n[i],i<n.length-1&&(s+=" and ");return n.length>0&&(s+="]"),s}}])&&i(n.prototype,r),t}()})(),module.exports=r})();