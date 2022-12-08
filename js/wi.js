/*
  Wurst-Imperium JS
  © 2017 Wurst-Imperium

  Based on Metro UI CSS v3.0.17
  © 2012 - 2016 Sergey Pimenov

  This file contains:
  - jquery.min.js v3.6.1
  - metro.js
  - custom Wurst-Imperium scripts

  Changes to the Metro UI files are marked with "EDIT:".
*/

/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
 * Metro UI CSS v3.0.17 (http://metroui.org.ua)
 * Copyright 2012-2017 Sergey Pimenov
 * Licensed under  ()
 */

(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define([ 'jquery' ], factory );
    } else {
        factory( jQuery );
    }
}(function( jQuery ) {
'use strict';

var $ = jQuery;

window.METRO_VERSION = '3.0.17';

// Source: js/requirements.js
if (typeof jQuery === 'undefined') {
    throw new Error('Metro\'s JavaScript requires jQuery');
}

// Source: js/global.js
if (window.METRO_AUTO_REINIT === undefined) window.METRO_AUTO_REINIT = true;
if (window.METRO_LANGUAGE === undefined) window.METRO_LANGUAGE = 'en';
if (window.METRO_LOCALE === undefined) window.METRO_LOCALE = 'EN_en';
if (window.METRO_CURRENT_LOCALE === undefined) window.METRO_CURRENT_LOCALE = 'en';
if (window.METRO_SHOW_TYPE === undefined) window.METRO_SHOW_TYPE = 'slide';
if (window.METRO_DEBUG === undefined) window.METRO_DEBUG = true;
if (window.METRO_CALENDAR_WEEK_START === undefined) window.METRO_CALENDAR_WEEK_START = 0;

window.canObserveMutation = 'MutationObserver' in window;

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

// String.prototype.isUrl = function () {
//     "use strict";
//     var regexp = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//     return regexp.test(this);
// };

// String.prototype.isColor = function () {
//     "use strict";
//     return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this);
// };

// window.secondsToFormattedString = function(time){
//     var hours, minutes, seconds;
//
//     hours = parseInt( time / 3600 ) % 24;
//     minutes = parseInt( time / 60 ) % 60;
//     seconds = time % 60;
//
//     return (hours ? (hours) + ":" : "") + (minutes < 10 ? "0"+minutes : minutes) + ":" + (seconds < 10 ? "0"+seconds : seconds);
// };

Array.prototype.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
};

Array.prototype.clone = function () {
    return this.slice(0);
};

Array.prototype.unique = function () {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

// window.uniqueId = function (prefix) {
//     "use strict";
//     var d = new Date().getTime();
//     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//         var r = (d + Math.random() * 16) % 16 | 0;
//         d = Math.floor(d / 16);
//         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
//     });
//     return uuid;
// };

window.isTouchDevice = function() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
};

// Source: js/widget.js
var widget_uuid = 0,
    widget_slice = Array.prototype.slice;

$.cleanData = (function (orig) {
    return function (elems) {
        var events, elem, i;
        for (i = 0; (elem = elems[i]) != null; i++) {
            try {

                // Only trigger remove when necessary to save time
                events = $._data(elem, "events");
                if (events && events.remove) {
                    $(elem).triggerHandler("remove");
                }

                // http://bugs.$.com/ticket/8235
            } catch (e) {
            }
        }
        orig(elems);
    };
})($.cleanData);

$.widget = function (name, base, prototype) {
    var fullName, existingConstructor, constructor, basePrototype,
    // proxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
        proxiedPrototype = {},
        namespace = name.split(".")[0];

    name = name.split(".")[1];
    fullName = namespace + "-" + name;

    if (!prototype) {
        prototype = base;
        base = $.Widget;
    }

    // create selector for plugin
    $.expr[":"][fullName.toLowerCase()] = function (elem) {
        return !!$.data(elem, fullName);
    };

    $[namespace] = $[namespace] || {};
    existingConstructor = $[namespace][name];
    constructor = $[namespace][name] = function (options, element) {
        // allow instantiation without "new" keyword
        if (!this._createWidget) {
            return new constructor(options, element);
        }

        // allow instantiation without initializing for simple inheritance
        // must use "new" keyword (the code above always passes args)
        if (arguments.length) {
            this._createWidget(options, element);
        }
    };
    // extend with the existing constructor to carry over any static properties
    $.extend(constructor, existingConstructor, {
        version: prototype.version,
        // copy the object used to create the prototype in case we need to
        // redefine the widget later
        _proto: $.extend({}, prototype),
        // track widgets that inherit from this widget in case this widget is
        // redefined after a widget inherits from it
        _childConstructors: []
    });

    basePrototype = new base();
    // we need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend({}, basePrototype.options);
    $.each(prototype, function (prop, value) {
        if (!$.isFunction(value)) {
            proxiedPrototype[prop] = value;
            return;
        }
        proxiedPrototype[prop] = (function () {
            var _super = function () {
                    return base.prototype[prop].apply(this, arguments);
                },
                _superApply = function (args) {
                    return base.prototype[prop].apply(this, args);
                };
            return function () {
                var __super = this._super,
                    __superApply = this._superApply,
                    returnValue;

                this._super = _super;
                this._superApply = _superApply;

                returnValue = value.apply(this, arguments);

                this._super = __super;
                this._superApply = __superApply;

                return returnValue;
            };
        })();
    });
    constructor.prototype = $.widget.extend(basePrototype, {
        // TODO: remove support for widgetEventPrefix
        // always use the name + a colon as the prefix, e.g., draggable:start
        // don't prefix for widgets that aren't DOM-based
        widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
    }, proxiedPrototype, {
        constructor: constructor,
        namespace: namespace,
        widgetName: name,
        widgetFullName: fullName
    });

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if (existingConstructor) {
        $.each(existingConstructor._childConstructors, function (i, child) {
            var childPrototype = child.prototype;

            // redefine the child widget using the same prototype that was
            // originally used, but inherit from the new version of the base
            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
        });
        // remove the list of existing child constructors from the old constructor
        // so the old child constructors can be garbage collected
        delete existingConstructor._childConstructors;
    } else {
        base._childConstructors.push(constructor);
    }

    $.widget.bridge(name, constructor);

    return constructor;
};

$.widget.extend = function (target) {
    var input = widget_slice.call(arguments, 1),
        inputIndex = 0,
        inputLength = input.length,
        key,
        value;
    for (; inputIndex < inputLength; inputIndex++) {
        for (key in input[inputIndex]) {
            value = input[inputIndex][key];
            if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                // Clone objects
                if ($.isPlainObject(value)) {
                    target[key] = $.isPlainObject(target[key]) ?
                        $.widget.extend({}, target[key], value) :
                        // Don't extend strings, arrays, etc. with objects
                        $.widget.extend({}, value);
                    // Copy everything else by reference
                } else {
                    target[key] = value;
                }
            }
        }
    }
    return target;
};

$.widget.bridge = function (name, object) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[name] = function (options) {
        var isMethodCall = typeof options === "string",
            args = widget_slice.call(arguments, 1),
            returnValue = this;

        if (isMethodCall) {
            this.each(function () {
                var methodValue,
                    instance = $.data(this, fullName);
                if (options === "instance") {
                    returnValue = instance;
                    return false;
                }
                if (!instance) {
                    return $.error("cannot call methods on " + name + " prior to initialization; " +
                        "attempted to call method '" + options + "'");
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    return $.error("no such method '" + options + "' for " + name + " widget instance");
                }
                methodValue = instance[options].apply(instance, args);
                if (methodValue !== instance && methodValue !== undefined) {
                    returnValue = methodValue && methodValue.jquery ?
                        returnValue.pushStack(methodValue.get()) :
                        methodValue;
                    return false;
                }
            });
        } else {

            // Allow multiple hashes to be passed on init
            if (args.length) {
                options = $.widget.extend.apply(null, [options].concat(args));
            }

            this.each(function () {
                var instance = $.data(this, fullName);
                if (instance) {
                    instance.option(options || {});
                    if (instance._init) {
                        instance._init();
                    }
                } else {
                    $.data(this, fullName, new object(options, this));
                }
            });
        }

        return returnValue;
    };
};

$.Widget = function (/* options, element */) {
};
$.Widget._childConstructors = [];

$.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
        disabled: false,

        // callbacks
        create: null
    },
    _createWidget: function (options, element) {
        element = $(element || this.defaultElement || this)[0];
        this.element = $(element);
        this.uuid = widget_uuid++;
        this.eventNamespace = "." + this.widgetName + this.uuid;

        this.bindings = $();
        this.hoverable = $();
        this.focusable = $();

        if (element !== this) {
            $.data(element, this.widgetFullName, this);
            this._on(true, this.element, {
                remove: function (event) {
                    if (event.target === element) {
                        this.destroy();
                    }
                }
            });
            this.document = $(element.style ?
                // element within the document
                element.ownerDocument :
                // element is window or document
            element.document || element);
            this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
        }

        this.options = $.widget.extend({},
            this.options,
            this._getCreateOptions(),
            options);

        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init();
    },
    _getCreateOptions: $.noop,
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,

    destroy: function () {
        this._destroy();
        // we can probably remove the unbind calls in 2.0
        // all event bindings should go through this._on()
        this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            // support: jquery <1.6.3
            // http://bugs.jquery.com/ticket/9413
            .removeData($.camelCase(this.widgetFullName));
        this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(
            this.widgetFullName + "-disabled " +
            "ui-state-disabled");

        // clean up events and states
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus");
    },
    _destroy: $.noop,

    widget: function () {
        return this.element;
    },

    option: function (key, value) {
        var options = key,
            parts,
            curOption,
            i;

        if (arguments.length === 0) {
            // don't return a reference to the internal hash
            return $.widget.extend({}, this.options);
        }

        if (typeof key === "string") {
            // handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
            options = {};
            parts = key.split(".");
            key = parts.shift();
            if (parts.length) {
                curOption = options[key] = $.widget.extend({}, this.options[key]);
                for (i = 0; i < parts.length - 1; i++) {
                    curOption[parts[i]] = curOption[parts[i]] || {};
                    curOption = curOption[parts[i]];
                }
                key = parts.pop();
                if (arguments.length === 1) {
                    return curOption[key] === undefined ? null : curOption[key];
                }
                curOption[key] = value;
            } else {
                if (arguments.length === 1) {
                    return this.options[key] === undefined ? null : this.options[key];
                }
                options[key] = value;
            }
        }

        this._setOptions(options);

        return this;
    },
    _setOptions: function (options) {
        var key;

        for (key in options) {
            this._setOption(key, options[key]);
        }

        return this;
    },
    _setOption: function (key, value) {
        this.options[key] = value;

        if (key === "disabled") {
            this.widget()
                .toggleClass(this.widgetFullName + "-disabled", !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus");
            }
        }

        return this;
    },

    enable: function () {
        return this._setOptions({disabled: false});
    },
    disable: function () {
        return this._setOptions({disabled: true});
    },

    _on: function (suppressDisabledCheck, element, handlers) {
        var delegateElement,
            instance = this;

        // no suppressDisabledCheck flag, shuffle arguments
        if (typeof suppressDisabledCheck !== "boolean") {
            handlers = element;
            element = suppressDisabledCheck;
            suppressDisabledCheck = false;
        }

        // no element argument, shuffle and use this.element
        if (!handlers) {
            handlers = element;
            element = this.element;
            delegateElement = this.widget();
        } else {
            element = delegateElement = $(element);
            this.bindings = this.bindings.add(element);
        }

        $.each(handlers, function (event, handler) {
            function handlerProxy() {
                // allow widgets to customize the disabled handling
                // - disabled as an array instead of boolean
                // - disabled class as method for disabling individual parts
                if (!suppressDisabledCheck &&
                    ( instance.options.disabled === true ||
                    $(this).hasClass("ui-state-disabled") )) {
                    return;
                }
                return ( typeof handler === "string" ? instance[handler] : handler )
                    .apply(instance, arguments);
            }

            // copy the guid so direct unbinding works
            if (typeof handler !== "string") {
                handlerProxy.guid = handler.guid =
                    handler.guid || handlerProxy.guid || $.guid++;
            }

            var match = event.match(/^([\w:-]*)\s*(.*)$/),
                eventName = match[1] + instance.eventNamespace,
                selector = match[2];
            if (selector) {
                delegateElement.delegate(selector, eventName, handlerProxy);
            } else {
                element.bind(eventName, handlerProxy);
            }
        });
    },

    _off: function (element, eventName) {
        eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace;
        element.unbind(eventName).undelegate(eventName);

        // Clear the stack to avoid memory leaks (#10056)
        this.bindings = $(this.bindings.not(element).get());
        this.focusable = $(this.focusable.not(element).get());
        this.hoverable = $(this.hoverable.not(element).get());
    },

    _delay: function (handler, delay) {
        function handlerProxy() {
            return ( typeof handler === "string" ? instance[handler] : handler )
                .apply(instance, arguments);
        }

        var instance = this;
        return setTimeout(handlerProxy, delay || 0);
    },

    _hoverable: function (element) {
        this.hoverable = this.hoverable.add(element);
        this._on(element, {
            mouseenter: function (event) {
                $(event.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (event) {
                $(event.currentTarget).removeClass("ui-state-hover");
            }
        });
    },

    _focusable: function (element) {
        this.focusable = this.focusable.add(element);
        this._on(element, {
            focusin: function (event) {
                $(event.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (event) {
                $(event.currentTarget).removeClass("ui-state-focus");
            }
        });
    },

    _trigger: function (type, event, data) {
        var prop, orig,
            callback = this.options[type];

        data = data || {};
        event = $.Event(event);
        event.type = ( type === this.widgetEventPrefix ?
            type :
        this.widgetEventPrefix + type ).toLowerCase();
        // the original event may come from any element
        // so we need to reset the target on the new event
        event.target = this.element[0];

        // copy original event properties over to the new event
        orig = event.originalEvent;
        if (orig) {
            for (prop in orig) {
                if (!( prop in event )) {
                    event[prop] = orig[prop];
                }
            }
        }

        this.element.trigger(event, data);
        return !( $.isFunction(callback) &&
        callback.apply(this.element[0], [event].concat(data)) === false ||
        event.isDefaultPrevented() );
    }
};

$.each({show: "fadeIn", hide: "fadeOut"}, function (method, defaultEffect) {
    $.Widget.prototype["_" + method] = function (element, options, callback) {
        if (typeof options === "string") {
            options = {effect: options};
        }
        var hasOptions,
            effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                    defaultEffect :
                options.effect || defaultEffect;
        options = options || {};
        if (typeof options === "number") {
            options = {duration: options};
        }
        hasOptions = !$.isEmptyObject(options);
        options.complete = callback;
        if (options.delay) {
            element.delay(options.delay);
        }
        if (hasOptions && $.effects && $.effects.effect[effectName]) {
            element[method](options);
        } else if (effectName !== method && element[effectName]) {
            element[effectName](options.duration, options.easing, callback);
        } else {
            element.queue(function (next) {
                $(this)[method]();
                if (callback) {
                    callback.call(element[0]);
                }
                next();
            });
        }
    };
});

var widget = $.widget;

// Source: js/initiator.js
$.fn.reverse = Array.prototype.reverse;

$.Metro = {

    hotkeys: [],

    initWidgets: function(widgets) {
        $.each(widgets, function () {
            var $this = $(this), w = this;
            var roles = $this.data('role').split(/\s*,\s*/);
            roles.map(function (func) {
                try {
                    //$(w)[func]();
                    if ($.fn[func] !== undefined && $this.data(func + '-initiated') !== true) {
                        $.fn[func].call($this);
                        $this.data(func + '-initiated', true);
                    }
                } catch (e) {
                    if (window.METRO_DEBUG) {
                        console.log(e.message, e.stack);
                    }
                }
            });
        });
    },

    initHotkeys: function(hotkeys){
        $.each(hotkeys, function(){
            var element = $(this);
            var hotkey = element.data('hotkey').toLowerCase();

            //if ($.Metro.hotkeys.indexOf(hotkey) > -1) {
            //    return;
            //}
            if (element.data('hotKeyBonded') === true ) {
                return;
            }

            $.Metro.hotkeys.push(hotkey);

            $(document).on('keyup', null, hotkey, function(e){
                if (element === undefined) return;

                if (element[0].tagName === 'A' &&
                    element.attr('href') !== undefined &&
                    element.attr('href').trim() !== '' &&
                    element.attr('href').trim() !== '#') {
                    document.location.href = element.attr('href');
                } else {
                    element.click();
                }
                return false;
            });

            element.data('hotKeyBonded', true);
        });
    },

    init: function(){
        var widgets = $("[data-role]");
        var hotkeys = $("[data-hotkey]");


        $.Metro.initHotkeys(hotkeys);
        $.Metro.initWidgets(widgets);

        var observer, observerOptions, observerCallback;

        observerOptions = {
            'childList': true,
            'subtree': true
        };

        observerCallback = function(mutations){

            //console.log(mutations);

            mutations.map(function(record){

                if (record.addedNodes) {

                    /*jshint loopfunc: true */
                    var obj, widgets, plugins, hotkeys;

                    for(var i = 0, l = record.addedNodes.length; i < l; i++) {
                        obj = $(record.addedNodes[i]);

                        plugins = obj.find("[data-role]");

                        hotkeys = obj.find("[data-hotkey]");

                        $.Metro.initHotkeys(hotkeys);

                        if (obj.data('role') !== undefined) {
                            widgets = $.merge(plugins, obj);
                        } else {
                            widgets = plugins;
                        }

                        if (widgets.length) {
                            $.Metro.initWidgets(widgets);
                        }
                    }
                }
            });
        };

        //console.log($(document));
        observer = new MutationObserver(observerCallback);
        observer.observe(document, observerOptions);
    }
};
// Source: js/utils/core-utils.js
var utils = {
    isColor: function(val){
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
    },

    isUrl: function(val){
        return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this);
    },

    secondsToFormattedString: function(time){
        var hours, minutes, seconds;

        hours = parseInt( time / 3600 ) % 24;
        minutes = parseInt( time / 60 ) % 60;
        seconds = time % 60;

        return (hours ? (hours) + ":" : "") + (minutes < 10 ? "0"+minutes : minutes) + ":" + (seconds < 10 ? "0"+seconds : seconds);
    },

    uniqueId: function (prefix) {
var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    },

    isTouchDevice: function() {
        return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
    },

    arrayUnique: function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }

        return a;
    },

    arrayClone: function(array){
        return array.slice(0);
    },

    arrayShuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    hex2rgba: function(hex, alpha){
        var c;
        alpha = isNaN(alpha) ? 1 : alpha;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+alpha+')';
        }
        throw new Error('Hex2rgba error. Bad Hex value');
    },

    random: function(from, to){
        return Math.floor(Math.random()*(to-from+1)+from);
    },

    isInt: function(n){
        return Number(n) === n && n % 1 === 0;
    },

    isFloat: function(n){
        return Number(n) === n && n % 1 !== 0;
    }
};

$.metroUtils = window.metroUtils = utils;
// Source: js/utils/easing.js
	$.easing['jswing'] = $.easing['swing'];

	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
			//alert($.easing.default);
			return $.easing[$.easing.def](x, t, b, c, d);
		},
		easeInQuad: function (x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function (x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * ((--t) * (t - 2) - 1) + b;
		},
		easeInCubic: function (x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function (x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function (x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function (x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function (x, t, b, c, d) {
			return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function (x, t, b, c, d) {
			return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function (x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function (x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d) == 1) return b + c;
			if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function (x, t, b, c, d) {
			var s = 1.70158;
			var p = 0;
			var a = c;
			if (t == 0) return b;
			if ((t /= d / 2) == 2) return b + c;
			if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;
				s = p / 4;
			}
			else s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function (x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function (x, t, b, c, d) {
			return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function (x, t, b, c, d) {
			if ((t /= d) < (1 / 2.75)) {
				return c * (7.5625 * t * t) + b;
			} else if (t < (2 / 2.75)) {
				return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
			} else if (t < (2.5 / 2.75)) {
				return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
			}
		},
		easeInOutBounce: function (x, t, b, c, d) {
			if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

// Source: js/utils/hotkeys.js
$.hotkeys = {
    version: "0.8",

    specialKeys: {
        8: "backspace",
        9: "tab",
        10: "return",
        13: "return",
        16: "shift",
        17: "ctrl",
        18: "alt",
        19: "pause",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "del",
        59: ";",
        61: "=",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9",
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        112: "f1",
        113: "f2",
        114: "f3",
        115: "f4",
        116: "f5",
        117: "f6",
        118: "f7",
        119: "f8",
        120: "f9",
        121: "f10",
        122: "f11",
        123: "f12",
        144: "numlock",
        145: "scroll",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    },

    shiftNums: {
        "`": "~",
        "1": "!",
        "2": "@",
        "3": "#",
        "4": "$",
        "5": "%",
        "6": "^",
        "7": "&",
        "8": "*",
        "9": "(",
        "0": ")",
        "-": "_",
        "=": "+",
        ";": ": ",
        "'": "\"",
        ",": "<",
        ".": ">",
        "/": "?",
        "\\": "|"
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: [
        "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
        "datetime-local", "search", "color", "tel"],

    // default input types not to bind to unless bound directly
    textInputTypes: /textarea|input|select/i,

    options: {
        filterInputAcceptingElements: true,
        filterTextInputs: true,
        filterContentEditable: true
    }
};

function keyHandler(handleObj) {
    if (typeof handleObj.data === "string") {
        handleObj.data = {
            keys: handleObj.data
        };
    }

    // Only care when a possible input has been specified
    if (!handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string") {
        return;
    }

    var origHandler = handleObj.handler,
        keys = handleObj.data.keys.toLowerCase().split(" ");

    handleObj.handler = function(event) {
        //      Don't fire in text-accepting inputs that we didn't directly bind to
        if (this !== event.target &&
            ($.hotkeys.options.filterInputAcceptingElements &&
            $.hotkeys.textInputTypes.test(event.target.nodeName) ||
            ($.hotkeys.options.filterContentEditable && $(event.target).attr('contenteditable')) ||
            ($.hotkeys.options.filterTextInputs &&
            $.inArray(event.target.type, $.hotkeys.textAcceptingInputTypes) > -1))) {
            return;
        }

        var special = event.type !== "keypress" && $.hotkeys.specialKeys[event.which],
            character = String.fromCharCode(event.which).toLowerCase(),
            modif = "",
            possible = {};

        $.each(["alt", "ctrl", "shift"], function(index, specialKey) {

            if (event[specialKey + 'Key'] && special !== specialKey) {
                modif += specialKey + '+';
            }
        });

        // metaKey is triggered off ctrlKey erronously
        if (event.metaKey && !event.ctrlKey && special !== "meta") {
            modif += "meta+";
        }

        if (event.metaKey && special !== "meta" && modif.indexOf("alt+ctrl+shift+") > -1) {
            modif = modif.replace("alt+ctrl+shift+", "hyper+");
        }

        if (special) {
            possible[modif + special] = true;
        }
        else {
            possible[modif + character] = true;
            possible[modif + $.hotkeys.shiftNums[character]] = true;

            // "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
            if (modif === "shift+") {
                possible[$.hotkeys.shiftNums[character]] = true;
            }
        }

        for (var i = 0, l = keys.length; i < l; i++) {
            if (possible[keys[i]]) {
                return origHandler.apply(this, arguments);
            }
        }
    };
}

$.each(["keydown", "keyup", "keypress"], function() {
    $.event.special[this] = {
        add: keyHandler
    };
});

// Source: js/utils/mousewheel.js
var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'];
var toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
var lowestDelta, lowestDeltaXY;

if ( $.event.fixHooks ) {
    for ( var i = toFix.length; i; ) {
        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i = toBind.length; i; ) {
                this.addEventListener( toBind[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },

    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i = toBind.length; i; ) {
                this.removeEventListener( toBind[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event,
        args = [].slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0,
        absDeltaXY = 0,
        fn;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta; }
    if ( orgEvent.detail )     { delta = orgEvent.detail * -1; }

    // New school wheel delta (wheel event)
    if ( orgEvent.deltaY ) {
        deltaY = orgEvent.deltaY * -1;
        delta  = deltaY;
    }
    if ( orgEvent.deltaX ) {
        deltaX = orgEvent.deltaX;
        delta  = deltaX * -1;
    }

    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = orgEvent.wheelDeltaX * -1; }

    // Look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if ( !lowestDelta || absDelta < lowestDelta ) { lowestDelta = absDelta; }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if ( !lowestDeltaXY || absDeltaXY < lowestDeltaXY ) { lowestDeltaXY = absDeltaXY; }

    // Get a whole value for the deltas
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
}

// Source: js/utils/pre-code.js
function preCode(selector) {
	var els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);

	els.forEach(function(el, idx, arr){
		var txt = el.textContent
			.replace(/^[\r\n]+/, "")	// strip leading newline
			.replace(/\s+$/g, "");

		if (/^\S/gm.test(txt)) {
			el.textContent = txt;
			return;
		}

		var mat, str, re = /^[\t ]+/gm, len, min = 1e3;

		while (mat = re.exec(txt)) {
			len = mat[0].length;

			if (len < min) {
				min = len;
				str = mat[0];
			}
		}

		if (min == 1e3)
			return;

		el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
	});
}

document.addEventListener("DOMContentLoaded", function() {
	preCode("pre code, textarea");
}, false);
// Source: js/utils/touch-handler.js
var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false;

var addTouchEvents = function(element) {
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
};

function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch (e.type) {
        case "touchstart":
            mouseEv = "mousedown";
            break;
        case "touchend":
            mouseEv = "mouseup";
            break;
        case "touchmove":
            mouseEv = "mousemove";
            break;
        default:
            return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}

// Source: js/utils/tpl.js
// var template =
//     'My skills:' +
//     '<%if(this.showSkills) {%>' +
//     '<%for(var index in this.skills) {%>' +
//     '<a href="#"><%this.skills[index]%></a>' +
//     '<%}%>' +
//     '<%} else {%>' +
//     '<p>none</p>' +
//     '<%}%>';
//     console.log(TemplateEngine(template, {
//     skills: ["js", "html", "css"],
//     showSkills: true
// }));

var TemplateEngine = function(html, options) {
    var re = /<%(.+?)%>/g,
        reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,
        code = 'with(obj) { var r=[];\n',
        cursor = 0,
        result,
        match;
    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    };
    while(match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.substr(cursor, html.length - cursor));
    code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, ' ');
    try { result = new Function('obj', code).apply(options, [options]); }
    catch(err) { console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n"); }
    return result;
};

window.metroTemplate = TemplateEngine;

$.Template = TemplateEngine;
// Source: js/widgets/accordion.js
$.widget("metro.accordion", {

    version: "3.0.0",

    options: {
        closeAny: false,
        speed: 'fast',
        onFrameOpen: function(frame){return true;},
        onFrameOpened: function(frame){},
        onFrameClose: function(frame){return true;},
        onFrameClosed: function(frame){}
    },

    init: function(){
        var that = this, element = this.element;

        element.on('click', '.heading', function(e){
            var frame = $(this).parent();

            if (frame.hasClass('disabled')) {return false;}

            if  (!frame.hasClass('active')) {
                that._openFrame(frame);
            } else {
                that._closeFrame(frame);
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _closeAllFrames: function(){
        var that = this;
        var frames = this.element.children('.frame.active');
        $.each(frames, function(){
            that._closeFrame($(this));
        });
    },

    _openFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameOpen === 'function') {
            if (!o.onFrameOpen(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameOpen] === 'function') {
                if (!window[o.onFrameOpen](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameOpen+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        if (o.closeAny) {this._closeAllFrames();}

        content.slideDown(o.speed);
        frame.addClass('active');

        if (typeof o.onFrameOpened === 'function') {
            o.onFrameOpened(frame);
        } else {
            if (typeof window[o.onFrameOpened] === 'function') {
                window[o.onFrameOpened](frame);
            } else {
                result = eval("(function(){"+o.onFrameOpened+"})");
                result.call(frame);
            }
        }
    },

    _closeFrame: function(frame){
        var o = this.options;
        var content = frame.children('.content');
        var result;

        if (typeof o.onFrameClose === 'function') {
            if (!o.onFrameClose(frame)) {return false;}
        } else {
            if (typeof window[o.onFrameClose] === 'function') {
                if (!window[o.onFrameClose](frame)) {return false;}
            } else {
                result = eval("(function(){"+o.onFrameClose+"})");
                if (!result.call(frame)) {return false;}
            }
        }

        content.slideUp(o.speed,function(){
            frame.removeClass("active");
        });

        if (typeof o.onFrameClosed === 'function') {
            o.onFrameClosed(frame);
        } else {
            if (typeof window[o.onFrameClosed] === 'function') {
                window[o.onFrameClosed](frame);
            } else {
                result = eval("(function(){"+o.onFrameClosed+"})");
                result.call(frame);
            }
        }
    },

    _create: function(){
        var that = this, o = this.options, element = this.element;

        $.each(this.element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        that.init();
        element.data('accordion', this);

    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/appbar.js
    $.widget("metro.appbar", {
        version: "3.0.0",
        options: {
            flexstyle: "app-bar-menu", //app-bar-menu | YOUR_OWN class for the pull flexmenu, basic support for "sidebar2" are integrated in the appbar.less file
            flexclean: false,           //true | false. if set all entries except the no-flexible ones will removed
            flextolerance: 3               //in px. if set the freespace is runnig out a little bit earlier, so floats
                                        //and not no-wrap elements have no chance to wrap. help for rounding errors also
        },
        _create: function () {
            var that = this, element = this.element, o = this.options;

            $.each(element.data(), function (key, value) {
                if (key in o) {
                    try {
                        o[key] = $.parseJSON(value);
                    } catch (e) {
                        o[key] = value;
                    }
                }
            });

            this._initBar();

            element.data('appbar', this);

        },
        _calculateFreeSpace: function () {
            var that = this, element = this.element, o = this.options;
            var menusParentWidth = 0, childrenWidth = 0, children;
            var freeSpace;

            //get the overall free space from the wrapping parent of the menus
            menusParentWidth = $(that.menusParent).width();

            //get the width of all visible children
            children = $(that.menusParent).children(":visible").not(".app-bar-pullmenu");


            //margin support: because there could be margins between elements, we do not summarize the width up with a one liner
            //but calculate width of all children in an intelligent way, we takte the left offsett of the first element and right offset of the right element
            //for that we have to support float left and right too:
            //float left and right support: we can not be sure that the first element in dom is on the left and the last is on the right
            //right floated
            //   - sort the children as the user see them

            //sort the children as the user see them according to the css float
            var childrenLeftFloated = [];
            var childrenRightFloated = [];
            var childrenAsUsual = [];
            var floatState;

            for (var i = 0, len = children.length; i < len; i++) {
                floatState = $(children[i]).css("float");
                switch (floatState) {
                    case "left":
                        childrenLeftFloated.push(children[i]);
                        break;
                    case "right":
                        childrenRightFloated.push(children[i]);
                        break;
                    default:
                        childrenAsUsual.push(children[i]);
                }
            }
            //right floats are from right to left
            childrenRightFloated.reverse();

            //=== build up the new children jquery object ===
            //join the left, right and normal children
            children = new Array();
            children = childrenLeftFloated.concat(childrenAsUsual, childrenRightFloated);

            //convert the array to jquery object again
            children = $(children);

            //=== calculate the width of the elements with margin support ===

            //adds the left margin dedicated to the first child
            childrenWidth += parseInt($(children).first().css("margin-left"));

            //walk trough the children and add the size,
            for (var i = 0, len = children.length - 1; i <= len; i++) {
                childrenWidth += $(children[i]).outerWidth();
                if (i !== len) {
                    //the highest margin between two elements counts
                    childrenWidth += Math.max(
                            parseInt($(children[i]).css("margin-right")),
                            parseInt($(children[i + 1]).css("margin-left"))

                            );
                }
            }
            //the right margin for the right child
            childrenWidth += parseInt($(children[len]).css("margin-right"));

            //now we have all data for calculation. Yippie-Ya-Yeah, Schweinebacke!! (much cooler German translation of B. W. Yippie-Ya-Yeah, Motherf***er)
            freeSpace = menusParentWidth - childrenWidth;

            //writing the data we found out to the element's data
            that.freeSpace = freeSpace;                     //not used space within the parent(mostly the appbar itself)
            that.childrenWidth = childrenWidth;             //the total width of the children
            that.menusParentWidth = menusParentWidth;       //the width without padding or something

            return freeSpace;
        },
        _originIndexMove: function(menu, child) {
                //find all children which are lower than we
                var flexChildren = $(menu).children().filter(function () {
                    return parseInt($(this).attr("data-flexorderorigin")) < parseInt($(child).attr("data-flexorderorigin"));
                });

                if (flexChildren.length > 0) {
                    //because we are greater, we set it after the childern which are lower
                    $(flexChildren).last().after(child);
                } else {
                    //find all children which are greater than we are
                    flexChildren = $(menu).children().filter(function () {
                        return parseInt($(this).attr("data-flexorderorigin")) > parseInt($(child).attr("data-flexorderorigin"));
                    });
                    if (flexChildren.length > 0) {
                        //because we are lower, we set us before the childern which are greater
                        $(flexChildren).first().before(child);
                    } else {
                        //we have no children, just append it
                        $(menu).append(child);
                    }
                }
        },
        _moveMenuEntry: function (direction) {
            var that = this, element = this.element, o = this.options;

            direction = direction || "toPullMenu"; // "fromPullMenu" is also an option

            if (direction === "toPullMenu") {
                //get next candidate which could be moved to the pullmenu, in fact the last which not have a mark as pullmenu-entry

                var nextToHide = $(that.allMenuEntries).not(".app-bar-pullmenu-entry").last();

                if (nextToHide.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }


                //find out in which menubar we are located in
                var topMenu = $(nextToHide).parent(); //this is only a appbar-menu not the appbar itself
                //find out where we have to go
                var topMenuIndex = $(that.flexVisibles).index($(nextToHide).parent());
                var pullMenuBar = $(that.pullMenu).find(".app-bar-pullmenubar").eq(topMenuIndex); //TODO: Make the class app-bar-menu configurable - perhaps sidebar

                that._originIndexMove(pullMenuBar, nextToHide);
                //move it to the pullmenu
//                if ($(topMenu).is("[data-flexdirection='reverse']")) {//data-flexdirection="reverse" support
//                    $(nextToHide).appendTo(pullMenuBar);
//                } else {                                             //normal way
//                    $(nextToHide).prependTo(pullMenuBar);
//                }

                //mark the entry as a entry of the pullmenu
                $(nextToHide).addClass("app-bar-pullmenu-entry");

                //the menubar is initiated with the hidden class, so we do not see empty pullmenubars, we must unhide them
                //it does not matter, if we see it already, we do it always:
                $(pullMenuBar).removeClass("hidden")
                        .show();

                //in case there are no more entries in the top menu bar we can hide it
                if ($(topMenu).children().length === 0) {
                    $(topMenu).addClass("hidden");
                }

                //we show the pullbutton now
                $(that.pullButton).show();

                return nextToHide;

            } else if (direction === "fromPullMenu") {
                //get next candidate which could be moved to the topbar menu, in fact the first which is still marked as pullmenu-entry
                var nextToShow = $(that.allMenuEntries).filter(".app-bar-pullmenu-entry").first();


                //find out in which pullmenu we are located in
                var pullMenuBar = $(nextToShow).parent(); //only one single menu, not the whole thing

                //find out where we have to go
                var topMenuIndex = $(pullMenuBar).index(); //it is the same structur as that.flexVisibles, so we can use the simple index
                var topMenu = $(that.flexVisibles).eq(topMenuIndex);

                $(topMenu).removeClass("hidden");
                //remove the mark as a entry of the pullmenu and move it to the normal top menu
                $(nextToShow).removeClass("app-bar-pullmenu-entry");

                //cosider the flexorder

                //walk trough the children in topMenu and find out what we must do

                //find all children which are lower than we
                that._originIndexMove(topMenu, nextToShow);

                //in case there are no more entries left, we can hide the pullbar menu from this entry
                if ($(pullMenuBar).children().length === 0) {
                    $(pullMenuBar).addClass("hidden")
                            .hide();
                }

                //in case we have no more menus in the pullbar area, we hide the pullbar thing
                if ($(that.pullMenu).children(".app-bar-pullmenubar").not(".hidden").length === 0) {
                    $(that.pullMenu).hide().addClass("hidden");
                    $(that.pullButton).hide();
                }

                if (nextToShow.length === 0) {
                    //nothing left, we have nothing to do
                    return false;
                }
                return nextToShow;
            }
        },
        _checkMenuEntries: function () {
            var that = this, element = this.element, o = this.options;

            var forceEndLoop = false;

            for (var maxLoop = 0, maxLoopLen = that.allMenuEntries.length; maxLoop < maxLoopLen; maxLoop++) {  //we do nothing with this, we could use while(true) but there is a danger of infinite loops

                //calculate the empty space within the appbar we can use for hidden children
                that._calculateFreeSpace();
                var freeSpace = that.freeSpace;

                if (freeSpace < o.flextolerance || o.flexclean) { //3px is tolerance and to be faster than the wrapping. TODO: make this configurable
                    //no space left, we hide a menu entry now

                    //move the menu entry to the pullbar and check if there are more menuentries left
                    if (!(that._moveMenuEntry("toPullMenu"))) {
                        //nothing left to hide
                        break;
                    } else {
                        //we moved successfully, perhaps we can hide more entries, we recheck the appbar,
                        //remember, we are in a endless loop, which checks this for us

                        if (!forceEndLoop) {
                            continue;
                        }
                    }

                } else {
                    //we have space here, we try to get more entries there

                    //check if there is something to do
                    if (!(that._moveMenuEntry("fromPullMenu"))) {
                        //nothing left to show
                        break;
                    } else {
                        forceEndLoop = true;
                        continue;
                    }

                }

                //we continue manually. if we reach the end of the loop we end this better so we do not produce infinite loop accidentally
                break;
            }
        },
        resize: function () {
            var that = this, element = this.element, o = this.options;

            if (that.initiatedAsFlex) {
                this._checkMenuEntries();
            }
        },
        _initBar: function () {
            var that = this, element = this.element, o = this.options;

            that.lastFlexAction = undefined;

            that.pullButton = $(element).find('.app-bar-pullbutton');
            var menus = $(element).find('.app-bar-menu');

            that.initiatedAsFlex = false;   //we change it later in the code - conditionally
            o.flexclean = $(element).is("[data-flexclean='true']") || o.flexclean;
            o.flexstyle = $(element).attr("data-flexstyle") || o.flexstyle;

            var flexVisible, menuEntries; //temporarly used vars

            that.flexVisibles = $();    //the menus which are directly in the appbar
            that.allMenuEntries = $();  //all menu entries in a sorted order
            that.menusParent = $();     //common parent from the menus, which can but do not need to be this.element. We get the max width from it
            that.pullMenu = $();

            if (menus.length > 0 && $(element).is(":not('.no-flexible')")) {
                //strip off all .no-flexible menus
                that.flexVisibles = $(menus).not(".no-flexible");

                if (that.flexVisibles.length > 0) {

                    that.initiatedAsFlex = true;

                    //sort the menus according to the data-flexorder attribute
                    that.flexVisibles.sort(function (a, b) {
                        var aValue = (parseInt($(a).data("flexorder")) || $(a).index() + 1);
                        var bValue = (parseInt($(b).data("flexorder")) || $(b).index() + 1);
                        return aValue - bValue;
                    });

                    //get all children in a sorted order according to the data-flexorder attribute
                    $(that.flexVisibles).each(function () {
                        flexVisible = this;

                        menuEntries = $(flexVisible).children();

                        //give  all menuEntries a flexorder which have not one and save the original order
                        $(menuEntries).each(function () {
                            $(this).attr("data-flexorderorigin", $(this).index());

                            if(!($(this).is("[data-flexorder]"))) {
                                $(this).attr("data-flexorder", $(this).index() + 1);
                            }
                        });

                        menuEntries.sort(function (a, b) {
                            var aValue = parseInt($(a).data("flexorder"));
                            var bValue = parseInt($(b).data("flexorder"));
                            return aValue - bValue;
                        });

                        //data-flexdirection="reverse" support
                        if ($(flexVisible).is("[data-flexdirection='reverse']")) {
                            menuEntries.reverse();
                        }

                        $.merge(that.allMenuEntries, $(menuEntries).not(".no-flexible")); //strip off all .no-flexible elements
                    });

                    //find the parent, which contains all menus
                    that.menusParent = $(element).find(".app-bar-menu").first().parent();

                    // === create a pull down button + pull menu ===
                    //check if a pulldown button already exists, if not we create one
                    if (!(that.pullButton.length > 0)) {
                        //DOC: We can create a display:none button, if we want to force to not show a pull button
                        that.pullButton = $('<div class="app-bar-pullbutton automatic"></div>');
                        $(that.menusParent).append(that.pullButton);
                    }

                    //create a pullmenu
                    that.pullMenu = $('<nav class="app-bar-pullmenu hidden" />');

                    //create menubars within the pullmenu
                    that.flexVisibles.each(function () {
                        $(that.pullMenu).append($('<ul class="app-bar-pullmenubar hidden ' + o.flexstyle + '" />'));
                    });



                    // WORKAROUND: this is because a :after:before clearfix for the pullmenu do not work for some reason
                    //position: absolute does not work if we do not break the float. another pure css solution should be written in the appbar.less
                    //after that remove this line
                    $(that.menusParent).append($('<div class="clearfix" style="width: 0;">'));
                    //-----------


                    $(that.pullMenu).addClass("flexstyle-" + o.flexstyle);

                    $(that.menusParent).append(that.pullMenu);

                    //check for the first time the menu entries /hide them if needed, etc.
                    that._checkMenuEntries();



                    //===  EVENTS =================================================

                    //activate the click event for the pull button
                    $(that.pullButton).on("click", function () {

                        //who am i?
                        that = $(this).closest("[data-role=appbar]").data("appbar");

                        //we show /hide the pullmenu
                        if ($(that.pullMenu).is(":hidden")) {
                            $(that.pullMenu).show();
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .hide().not(".hidden").slideDown("fast");
                        } else {
                            $(that.pullMenu).find(".app-bar-pullmenubar")
                                    .not(".hidden").show().slideUp("fast", function () {
                                $(that.pullMenu).hide();
                            });
                        }

                    });

                }
            }

        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });

    //we have to calculate everything new, if the user resizes or zooms the window
    $(window).on('resize', function () {
        $("[data-role=appbar]:not(.no-flexible)").each(function () {
            $(this).data("appbar").resize();
        });
    });


    //because fonts(also icon-fonts) are often loaded async after the page has loaded and this script walked through already,
    //we have to check again after these elements loaded. Because there is no way to observe only specific elements, we do it for the window
    $(window).on('load', function () {
        $("[data-role=appbar]:not(.no-flexible)").each(function () {
            $(this).data("appbar").resize();
        });
    });

    //pictures (or other outside stuff was loaded - pictures are also often loaded async or have a lazy load or are injected after a while.
    //a picture can change a size of the element from the appbar, so we must recheck it again.
    $("[data-role=appbar]:not(.no-flexible) [src]").on("load", function () {
        //who am i?
        var appbar = $(this).closest("[data-role=appbar]").data("appbar");
        appbar.resize();
    });

// Source: js/widgets/audio-player.js
$.widget( "metro.audio" , {

    version: "3.0.14",

    options: {
        src: false,
        volume: .5,
        muted: false,
        loop: false,
        preload: false,
        autoplay: false,
        playList: false,
        mode: "full",

        loopButton: "<span class='mif-loop'></span>",
        stopButton: "<span class='mif-stop'></span>",
        playButton: "<span class='mif-play'></span>",
        pauseButton: "<span class='mif-pause'></span>",
        muteButton: "<span class='mif-volume-mute2'></span>",
        shuffleButton: "<span class='mif-shuffle'></span>",
        nextButton: "<span class='mif-forward'></span>",
        prevButton: "<span class='mif-backward'></span>",
        randomButton: "<span class='mif-dice'></span>",
        playListButton: "<span class='mif-list2'></span>",

        volumeLowButton: "<span class='mif-volume-low'></span>",
        volumeMediumButton: "<span class='mif-volume-medium'></span>",
        volumeHighButton: "<span class='mif-volume-high'></span>"

    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        this._createPlayer();
        this._addControls();
        this._addEvents();
        this._addPlayList();
        this._setControlsVisibility();

        element.data('audio', this);
    },

    _setControlsVisibility: function(){
        var that = this, element = this.element, o = this.options;
        if (element.find(".play-list").length == 0) {
            element.find(".controls .plist").hide();
            element.find(".controls .next").hide();
            element.find(".controls .prev").hide();
            element.find(".controls .random").hide();
        }
    },

    _addPlayList: function(){
        var that = this, element = this.element, o = this.options;
        var audio = element.find("audio");
        var pl, pli, plw, poster, title;
        var play_list;

        if (o.playList) {
            if (window[o.playList] != undefined && typeof window[o.playList] == 'function') {

                pl =  window[o.playList]();
                pli = pl.items;
                plw = $("<div>").addClass("play-list-wrapper").insertBefore(element.find("audio"));

                if (pl.title != undefined) {
                    title = $("<h1>").addClass("album-title").html(pl.title).appendTo(plw);
                }

                if (pl.poster != undefined) {
                    poster = $("<div>").addClass("poster").html($("<img>").attr("src", pl.poster)).appendTo(plw);
                }

                if (pl.desc != undefined) {
                    $("<div>").addClass("album-desc").html(pl.desc).appendTo(poster);
                }

                play_list = $("<ul>").addClass("play-list").appendTo(plw);

                if (pli != undefined) {
                    $.each(pl.items, function(){
                        var item = this, li;
                        li = $("<li>").appendTo(play_list);
                        li.data('src', item.file);
                        if (item.type != undefined) {
                            li.data('type', item.type);
                        }
                        if (item.title != undefined) {
                            li.html(item.title);
                        } else {
                            li.html(item.file.replace(/^.*[\\\/]/, ''));
                        }
                    });
                }
            }
        }

        play_list = element.find("ul");

        if (play_list.length == 0) {
            return this;
        }

        play_list.addClass("play-list");
        var items = play_list.find("li");
        if (items.length == 0) {
            return this;
        }
        $.each(items, function(){
            var item = $(this);
            var pb = $("<div>").addClass('progress-bar small no-margin-top').data('role', 'progress').appendTo(item).hide();
            item.on("click", function(){
                items.removeClass("current");
                items.find('.progress-bar').hide();
                var src = item.data('src'), type = item.data('type');
                item.addClass("current");
                item.find('.progress-bar').show();
                element.data('current', item);
                that.play(src, type);
            });
        });
        $(items[0]).click();
        this._stop();
        element.data("current", $(items[0]));
    },

    _createPlayer: function(){
        var that = this, element = this.element, o = this.options;
        var audio = element.find("audio");

        element.addClass("audio-player");
        element.addClass(o.mode);

        if (audio.length == 0) {
            audio = $("<audio>").appendTo(element);
        }

        $.each(['autoplay', 'controls', 'muted', 'loop', 'preload'], function(){
            audio.removeAttr(this);
        });

        if (o.src) {
            audio.attr(src, o.src);
        }

        if (o.loop) {
            audio.attr("loop", "loop");
        }

        if (o.preload) {
            audio.attr("preload", "auto");
        }

        if (o.autoplay) {
            audio.attr("autoplay", "autoplay");
        }

        audio[0].volume = o.volume;
        audio[0].muted = o.muted;

        element.data('muted', false);
        element.data('duration', 0);
        element.data('played', false);
        element.data('volume', audio[0].volume);
        element.data('current', false);
    },

    _addControls: function(){
        var that = this, element = this.element, o = this.options;
        var controls, play_button, loop_button, stop_button, volume_button,
            volume_slider, stream_slider, info_box, stream_wrapper, volume_wrapper,
            shufle_button, next_button, prev_button, random_button, play_list_button;
        var audio = element.find('audio'), audio_obj = audio[0];

        controls = $("<div>").addClass("controls").appendTo(element);

        if (o.playListButton !== false) {
            play_list_button = $("<button/>").addClass("square-button control-element plist").html(o.playListButton).appendTo(controls);
            play_list_button.on("click", function () {
                var play_list = element.find(".play-list-wrapper");
                if (play_list.length == 0) {
                    return that;
                }
                play_list.toggleClass("not-visible");
            });
        }

        if (o.loopButton !== false) {
            loop_button = $("<button/>").addClass("square-button control-element loop").html(o.loopButton).appendTo(controls);
            loop_button.on("click", function () {
                loop_button.toggleClass('active');
                if (loop_button.hasClass('active')) {
                    audio.attr("loop", "loop");
                } else {
                    audio.removeAttr("loop");
                }
            });
        }

        if (o.playButton !== false) {
            play_button = $("<button/>").addClass("square-button control-element play").html(o.playButton).appendTo(controls);
            play_button.on("click", function () {
                that._play();
            });
        }

        if (o.prevButton !== false) {
            prev_button = $("<button/>").addClass("square-button control-element prev").html(o.prevButton).appendTo(controls);
            prev_button.on("click", function () {
                that._playPrev();
            });
        }

        if (o.nextButton !== false) {
            next_button = $("<button/>").addClass("square-button control-element next").html(o.nextButton).appendTo(controls);
            next_button.on("click", function () {
                that._playNext();
            });
        }

        if (o.randomButton !== false) {
            random_button = $("<button/>").addClass("square-button control-element random").html(o.randomButton).appendTo(controls);
            random_button.on("click", function () {
                that._playRandom();
            });
        }

        if (o.stopButton !== false) {
            stop_button = $("<button/>").addClass("square-button control-element stop").html(o.stopButton).appendTo(controls);
            stop_button.attr("disabled", true);
            stop_button.on("click", function () {
                that._stop();
            });
        }

        stream_wrapper = $("<div/>").addClass('control-element stream-wrapper').appendTo(controls);
        stream_slider = $("<div/>").addClass('slider stream-slider').appendTo(stream_wrapper);
        stream_slider.slider({
            showHint: true,
            animate: false,
            markerColor: 'bg-red',
            completeColor: 'bg-cyan',
            onStartChange: function(){
                audio_obj.pause();
            },
            onChanged: function(value, slider){
                if (audio_obj.seekable.length > 0)
                    audio_obj.currentTime = (element.data('duration') * value / 100).toFixed(0);

                if (element.data('played') && audio_obj.currentTime >= 0) {
                    audio_obj.play();
                }
            }
        });
        stream_slider.data('slider').value(0);

        info_box = $("<div/>").addClass('control-element info-box').appendTo(controls);
        info_box.html("00:00 / 00:00");

        var volume_container = $("<div/>").addClass("place-right").appendTo(controls);

        volume_button = $("<button/>").addClass("square-button control-element volume").html(o.volumeLowButton).appendTo(volume_container);
        volume_button.on("click", function(){

            var volume_slider = element.find(".volume-slider").data("slider");

            element.data('muted', !element.data('muted'));

            if (element.data('muted')) {
                element.data("volume", audio_obj.volume);
                volume_button.html(o.muteButton);
                volume_slider.value(0);
            } else {
                audio_obj.volume = element.data("volume");
                volume_slider.value(element.data("volume")*100);
                that._setupVolumeButton();
            }

            audio_obj.muted = element.data('muted');
        });

        this._setupVolumeButton();

        volume_wrapper = $("<div/>").addClass('control-element volume-wrapper').appendTo(volume_container);
        volume_slider = $("<div/>").addClass('slider volume-slider').appendTo(volume_wrapper);
        volume_slider.slider({
            showHint: true,
            animate: false,
            markerColor: 'bg-red',
            completeColor: 'bg-green',
            onChange: function(value, slider){
                audio_obj.volume = value/100;
                that._setupVolumeButton();
            }
        });
        volume_slider.data('slider').value(audio_obj.volume * 100);
    },

    _setupVolumeButton: function(){
        var that = this, element = this.element, o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var controls = element.find('.controls'), volume_button = controls.find('.volume');

        var current_volume = audio_obj.volume;
        if (current_volume > 0 && current_volume < 0.3) {
            volume_button.html(o.volumeLowButton);
        } else if (current_volume >= 0.3 && current_volume < 0.6) {
            volume_button.html(o.volumeMediumButton);
        } else if (current_volume >= 0.6 && current_volume <= 1) {
            volume_button.html(o.volumeHighButton);
        } else {
            volume_button.html(o.muteButton);
        }
    },

    _addEvents: function(){
        var that = this, element = this.element, o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var controls = element.find(".controls");
        var info_box = element.find(".info-box");

        audio.on('loadedmetadata', function(){
            element.data('duration', audio_obj.duration.toFixed(0));
            info_box.html("00:00" + " / " + metroUtils.secondsToFormattedString(element.data('duration')) );
        });

        audio.on("canplay", function(){
            //preloader.hide();
            var buffered = audio_obj.buffered.length ? Math.round(Math.floor(audio_obj.buffered.end(0)) / Math.floor(audio_obj.duration) * 100) : 0;
            that._setBufferSize(buffered);
        });

        audio.on('progress', function(){
            var buffered = audio_obj.buffered.length ? Math.round(Math.floor(audio_obj.buffered.end(0)) / Math.floor(audio_obj.duration) * 100) : 0;
            that._setBufferSize(buffered);
        });

        audio.on("timeupdate", function(){
            that._setInfoData();
            that._setStreamSliderPosition();
            if (element.data('current')) {
                var pb = element.data('current').find('.progress-bar').data('progress');
                var value = Math.round(audio_obj.currentTime * 100 / element.data('duration'));
                pb.value(value);
            }
        });

        audio.on("waiting", function(){
            //preloader.show();
        });

        audio.on("loadeddata", function(){
            //preloader.hide();
        });

        audio.on('ended', function(){
            that._stop();
            if (element.find(".play-list li").length > 0) {
                that._playNext();
            }
        });
    },

    _setInfoData: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var info_box = element.find(".controls .info-box");
        var currentTime = Math.round(audio_obj.currentTime);

        info_box.html(metroUtils.secondsToFormattedString(currentTime) + " / " + metroUtils.secondsToFormattedString(element.data('duration')));
    },

    _setStreamSliderPosition: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var slider = element.find(".stream-slider").data("slider");
        var value = Math.round(audio_obj.currentTime * 100 / element.data('duration'));
        slider.value(value);
    },


    _setBufferSize: function(value){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var slider = element.find(".stream-slider").data("slider");
        slider.buffer(Math.round(value));
    },

    _play: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var play_button = element.find(".controls .play");
        var stop_button = element.find(".controls .stop");

        if (audio_obj.paused) {
            play_button.html(o.pauseButton);
            audio_obj.play();
            stop_button.removeAttr("disabled");
            element.data('played', true);
            element.trigger('play');
        } else {
            play_button.html(o.playButton);
            audio_obj.pause();
            element.data('played', false);
            element.trigger('pause');
        }
    },

    _playRandom: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var play_list = element.find(".play-list");
        var items = element.find(".play-list li");
        if (items.length == 0) {
            return this;
        }
        var index = Math.floor(Math.random() * (items.length)) + 1;
        var next = play_list.find("li:nth-child("+index+")");
        next.click();
    },

    _playNext: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var play_list = element.find(".play-list");
        var items = element.find(".play-list li");
        if (items.length == 0) {
            return this;
        }
        var next = play_list.find(".current").next();
        if (next.length == 0) {
            next = play_list.find("li:nth-child(1)");
        }
        next.click();
    },

    _playPrev: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var play_list = element.find(".play-list");
        var items = element.find(".play-list li");
        if (items.length == 0) {
            return this;
        }
        var prev = play_list.find(".current").prev();
        if (prev.length == 0) {
            prev = play_list.find("li:last-child");
        }
        prev.click();
    },

    _stop: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0];
        var stop_button = element.find(".controls .stop");
        var play_button = element.find(".controls .play");

        audio_obj.pause();
        audio_obj.currentTime = 0;
        play_button.html(o.playButton);
        stop_button.attr("disabled", "disabled");
        element.data('played', false);
        element.find(".stream-slider").data('slider').value(0);
        element.trigger('stop');
    },


    play: function(file, type){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0], source;

        this._stop();

        audio.find("source").remove();
        audio.removeAttr("src");

        source = $("<source>").attr("src", file);
        if (type != undefined) {
            source.attr("type", type);
        }
        audio_obj.load();
        source.appendTo(audio);

        this._play();
    },

    pause: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0], play_button = element.find(".play");

        play_button.html(o.playButton);
        audio_obj.pause();
        element.data('played', false);
        element.trigger('pause');
    },

    resume: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var audio = element.find("audio"), audio_obj = audio[0], play_button = element.find(".play"), stop_button = element.find(".stop");

        play_button.html(o.pauseButton);
        audio_obj.play();
        stop_button.removeAttr("disabled");
        element.data('played', true);
        element.trigger('play');
    },

    stop: function(){
        this._stop();
    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/button-groups.js
$.widget( "metro.group" , {

    version: "3.0.0",

    options: {
        groupType: 'one-state', // 'multi-state'
        buttonStyle: false,
        onChange: function(index, btn){return true;},
        onChanged: function(index, btn){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var result;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('group-of-buttons')) {element.addClass('group-of-buttons');}

        var buttons = element.find('.button, .toolbar-button');

        for(var i = 0; i < buttons.length; i++) {
            $(buttons[i]).data('index', i);
        }

        if (o.buttonStyle !== false) {
            buttons.addClass(o.buttonStyle);
        }

        element.on('click', '.button, .toolbar-button', function(){

            var button = $(this), index = button.data('index');

            if (typeof o.onChange === 'function') {
                if (!o.onChange(index, button)) {return false;}
            } else {
                if (typeof window[o.onChange] === 'function') {
                    if (!window[o.onChange](index, button)) {return false;}
                } else {
                    result = eval("(function(){"+o.onChange+"})");
                    if (!result.call(index, button)) {return false;}
                }
            }

            if (o.groupType === 'one-state') {
                buttons.removeClass('active');
                $(this).addClass('active');
            } else  {
                $(this).toggleClass('active');
            }

            if (typeof o.onChanged === 'function') {
                o.onChanged(index, button);
            } else {
                if (typeof window[o.onChanged] === 'function') {
                    window[o.onChanged](index, button);
                } else {
                    result = eval("(function(){"+o.onChanged+"})");
                    result.call(index, button);
                }
            }
        });

        element.data('group', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/calendar.js
$.widget("metro.calendar", {

    version: "3.0.0",

    options: {
        format: "yyyy-mm-dd",
        multiSelect: false,
        startMode: 'day', //year, month, day
        weekStart: window.METRO_CALENDAR_WEEK_START, // 0 - Sunday, 1 - Monday
        otherDays: true,
        date: new Date(),
        minDate: false,
        maxDate: false,
        preset: false,
        exclude: false,
        stored: false,
        buttons: true,
        buttonToday: true,
        buttonClear: true,
        syncCalenderToDateField: true,
        locale: window.METRO_CURRENT_LOCALE,
        actions: true,
        condensedGrid: false,
        scheme: 'default',
        getDates: function (d) { },
        dayClick: function (d, d0) { }
    },

    //_storage: [],
    //_exclude: [],

    _year: 0,
    _month: 0,
    _day: 0,
    _today: new Date(),
    _event: '',

    _mode: 'day', // day, month, year
    _distance: 0,

    _events: [],

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function (key, value) {
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (typeof o.date === 'string') {
            o.date = new Date(o.date);
        }

        if (o.minDate !== false && typeof o.minDate === 'string') {
            o.minDate = new Date(o.minDate + 'T00:00:00Z') - 24 * 60 * 60 * 1000;
        }

        if (o.maxDate !== false && typeof o.maxDate === 'string') {
            o.maxDate = new Date(o.maxDate + 'T00:00:00Z');
        }

        //console.log(window.METRO_LOCALES);

        this.locales = window.METRO_LOCALES;

        this._year = o.date.getFullYear();
        this._distance = o.date.getFullYear() - 4;
        this._month = o.date.getMonth();
        this._day = o.date.getDate();
        this._mode = o.startMode;

        element.data("_storage", []);
        element.data("_exclude", []);
        element.data("_stored", []);
        if (!element.hasClass('calendar')) { element.addClass('calendar'); }

        var re, dates;

        if (o.preset) {
            re = /\s*,\s*/;
            dates = o.preset.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDate(this); }
            });
        }

        if (o.exclude) {
            re = /\s*,\s*/;
            dates = o.exclude.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDateExclude(this); }
            });
        }

        if (o.stored) {
            re = /\s*,\s*/;
            dates = o.stored.split(re);
            $.each(dates, function () {
                if (new Date(this) !== undefined) { that.setDateStored(this); }
            });
        }

        if (o.scheme !== 'default') {
            element.addClass(o.scheme);
        }

        this._renderCalendar();

        element.data('calendar', this);

    },

    _renderButtons: function (table) {
        var tr, td, o = this.options;

        if (this.options.buttons) {

            var buttonToday = o.buttonToday ? "<button class='button calendar-btn-today small-button success'>" + this.locales[o.locale].buttons[0] + "</button>" : "";
            var buttonClear = o.buttonClear ? "<button class='button calendar-btn-clear small-button warning'>" + this.locales[o.locale].buttons[1] + "</button>" : "";

            tr = $("<div/>").addClass("calendar-row calendar-actions");
            td = $("<div/>").addClass("align-center").html(
                buttonToday + buttonClear
            );
            td.appendTo(tr);
            tr.appendTo(table);
        }
    },

    _renderMonth: function () {
        var that = this, o = this.options,
            year = this._year,
            month = this._month,
            day = this._day,
            event = this._event,
            feb = 28;

        if (month === 1) {
            if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
                feb = 29;
            }
        }

        var totalDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var daysInMonth = totalDays[month];

        var first_week_day = this._dateFromNumbers(year, month + 1, 1).getDay();

        var table, tr, td, i, div;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (o.condensedGrid) {
            table.addClass('condensed no-border');
        }

        //console.log(this.locales);

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row no-margin');

        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-previous-month' href='#'>&#12296;</a>").appendTo(tr);

        $("<div/>").addClass("calendar-cell sel-month align-center").html("<a class='btn-select-month' href='#'>" + this.locales[o.locale].months[month + 12] + ' ' + year + "</a>").appendTo(tr);

        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-month' href='#'>&#12297;</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        // Add day names
        var j;
        tr = $("<div/>").addClass('calendar-row week-days');
        for (i = 0; i < 7; i++) {
            if (!o.weekStart) {
                td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                div = $("<div/>").html(this.locales[o.locale].days[i + 7]).appendTo(td);
            } else {
                j = i + 1;
                if (j === 7) { j = 0; }
                td = $("<div/>").addClass("calendar-cell align-center day-of-week").appendTo(tr);
                div = $("<div/>").html(this.locales[o.locale].days[j + 7]).appendTo(td);
            }
        }
        tr.addClass("calendar-subheader").appendTo(table);

        // Add empty days for previos month
        var prevMonth = this._month - 1; if (prevMonth < 0) { prevMonth = 11; } var daysInPrevMonth = totalDays[prevMonth];
        var _first_week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;
        var htmlPrevDay = "";
        tr = $("<div/>").addClass('calendar-row');
        for (i = 0; i < _first_week_day; i++) {
            if (o.otherDays) { htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1); }
            td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
            div = $("<div/>").addClass('other-day').html(htmlPrevDay).appendTo(td);
            if (!o.otherDays) {
                div.css('visibility', 'hidden');
            }
        }

        // Days for current month
        var week_day = ((o.weekStart) ? first_week_day + 6 : first_week_day) % 7;

        var d, a, d_html;

        for (i = 1; i <= daysInMonth; i++) {
            week_day %= 7;

            if (week_day === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }

            td = $("<div/>").addClass("calendar-cell align-center day");
            div = $("<div/>").appendTo(td);

            if (o.minDate !== false && (this._dateFromNumbers(year, month + 1, i) < o.minDate) || o.maxDate !== false && (this._dateFromNumbers(year, month + 1, i) > o.maxDate)) {
                td.removeClass("day");
                div.addClass("other-day");
                d_html = i;
            } else {
                d_html = "<a href='#'>" + i + "</a>";
            }

            div.html(d_html);

            //console.log(div);

            if (year === this._today.getFullYear() && month === this._today.getMonth() && this._today.getDate() === i) {
                td.addClass("today");
            }

            //console.log('xxx');
            d = this._dateNumberStringyFy(this._year, this._month + 1, i);

            if (this.element.data('_storage').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("selected");
            }

            if (this.element.data('_exclude').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("exclude");
            }

            if (this.element.data('_stored').indexOf(d) >= 0) {
                a = td.find("a");
                a.parent().parent().addClass("stored");
            }

            td.appendTo(tr);
            week_day++;
        }


        // next month other days
        var htmlOtherDays = "";
        for (i = week_day + 1; i <= 7; i++) {
            if (o.otherDays) { htmlOtherDays = i - week_day; }
            td = $("<div/>").addClass("calendar-cell empty").appendTo(tr);
            div = $("<div/>").addClass('other-day').html(htmlOtherDays).appendTo(td);
            if (!o.otherDays) {
                div.css('visibility', 'hidden');
            }
        }

        tr.appendTo(table);
        this._renderButtons(table);
        table.appendTo(this.element);
    },

    _renderMonths: function () {
        var table, tr, td, i, j;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (this.options.condensedGrid) {
            table.addClass('condensed no-border');
        }

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row');

        $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        tr = $("<div/>").addClass('calendar-row');
        j = 0;
        for (i = 0; i < 12; i++) {

            //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
            td = $("<div/>").addClass("calendar-cell month-cell align-center month").html("<a href='#' data-month='" + i + "'>" + this.locales[this.options.locale].months[i + 12] + "</a>");

            if (this._month === i && (new Date()).getFullYear() === this._year) {
                td.addClass("today");
            }

            td.appendTo(tr);
            if ((j + 1) % 4 === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }
            j += 1;
        }

        this._renderButtons(table);

        table.appendTo(this.element);
    },

    _renderYears: function () {
        var table, tr, td, i, j;

        this.element.html("");

        table = $("<div/>").addClass("calendar-grid");
        if (this.options.condensedGrid) {
            table.addClass('condensed no-border');
        }

        // Add calendar header
        tr = $("<div/>").addClass('calendar-row cells4');

        $("<div/>").addClass("calendar-cell sel-minus align-center").html("<a class='btn-previous-year' href='#'>-</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-year align-center").html("<a class='btn-none-btn'>" + (this._distance) + "-" + (this._distance + 11) + "</a>").appendTo(tr);
        $("<div/>").addClass("calendar-cell sel-plus align-center").html("<a class='btn-next-year' href='#'>+</a>").appendTo(tr);

        tr.addClass("calendar-header").appendTo(table);

        tr = $("<div/>").addClass('calendar-row');

        j = 0;
        for (i = this._distance; i < this._distance + 12; i++) {
            td = $("<div/>").addClass("calendar-cell year-cell align-center year").html("<a href='#' data-year='" + i + "'>" + i + "</a>");
            if ((new Date()).getFullYear() === i) {
                td.addClass("today");
            }
            td.appendTo(tr);
            if ((j + 1) % 4 === 0) {
                tr.appendTo(table);
                tr = $("<div/>").addClass('calendar-row');
            }
            j += 1;
        }

        this._renderButtons(table);

        table.appendTo(this.element);
    },

    _renderCalendar: function () {
        switch (this._mode) {
            case 'year': this._renderYears(); break;
            case 'month': this._renderMonths(); break;
            default: this._renderMonth();
        }
        this._initButtons();
    },

    _initButtons: function () {
        // Add actions
        var that = this, o = this.options,
            table = this.element.find('.calendar-grid');

        if (this._mode === 'day') {
            table.find('.btn-select-month').off('click').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                that._mode = 'month';
                that._renderCalendar();
            });
            table.find('.btn-previous-month').off('click').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._month -= 1;
                if (that._month < 0) {
                    that._year -= 1;
                    that._month = 11;
                }
                that._renderCalendar();
            });
            table.find('.btn-next-month').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._month += 1;
                if (that._month === 12) {
                    that._year += 1;
                    that._month = 0;
                }
                that._renderCalendar();
            });
            table.find('.btn-previous-year').off('click').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._year -= 1;
                that._renderCalendar();
            });
            table.find('.btn-next-year').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year += 1;
                that._renderCalendar();
            });
            table.find('.day a').on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if ($(this).parent().parent().hasClass('exclude')) {
                    return false;
                }

                var d = (new Date(that._paddy(that._year, 4), that._paddy(that._month, 2), that._paddy(parseInt($(this).html()), 2)).format(that.options.format, null));
                var d0 = (new Date(that._paddy(that._year, 4), that._paddy(that._month, 2), that._paddy(parseInt($(this).html()), 2)));

                if (that.options.multiSelect) {
                    $(this).parent().parent().toggleClass("selected");

                    if ($(this).parent().parent().hasClass("selected")) {
                        that._addDate(that._dateStringyFy(d0));
                    } else {
                        that._removeDate(that._dateStringyFy(d0));
                    }
                } else {
                    table.find('.day a').parent().parent().removeClass('selected');
                    $(this).parent().parent().addClass("selected");
                    that.element.data('_storage', []);
                    that._addDate(that._dateStringyFy(d0));
                }


                if (typeof o.dayClick === 'function') {
                    o.dayClick(d, d0);
                } else {
                    if (typeof window[o.dayClick] === 'function') {
                        window[o.dayClick](d, d0);
                    } else {
                        var result = eval("(function(){" + o.dayClick + "})");
                        result.call(d, d0);
                    }
                }
            });
        } else if (this._mode === 'month') {
            table.find('.month a').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._month = parseInt($(this).data('month'));
                that._mode = 'day';
                that._renderCalendar();
            });
            table.find('.btn-previous-year').off('click').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._year -= 1;
                that._renderCalendar();
            });
            table.find('.btn-next-year').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year += 1;
                that._renderCalendar();
            });
            table.find('.btn-select-year').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._mode = 'year';
                that._renderCalendar();
            });
        } else {
            table.find('.year a').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._year = parseInt($(this).data('year'));
                that._mode = 'month';
                that._renderCalendar();
            });
            table.find('.btn-previous-year').off('click').on('click', function (e) {
                that._event = 'eventPrevious';
                e.preventDefault();
                e.stopPropagation();
                that._distance -= 10;
                that._renderCalendar();
            });
            table.find('.btn-next-year').off('click').on('click', function (e) {
                that._event = 'eventNext';
                e.preventDefault();
                e.stopPropagation();
                that._distance += 10;
                that._renderCalendar();
            });
        }

        table.find('.calendar-btn-today').off('click').on('click', function (e) {
            //that._event = 'eventNext';
            e.preventDefault();
            e.stopPropagation();
            that._mode = that.options.startMode;
            that.options.date = new Date();
            that._year = that.options.date.getFullYear();
            that._month = that.options.date.getMonth();
            that._day = that.options.date.getDate();
            that._renderCalendar();
        });
        table.find('.calendar-btn-clear').off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            that.options.date = new Date();
            that._year = that.options.date.getFullYear();
            that._month = that.options.date.getMonth();
            that._day = that.options.date.getDate();
            that.element.data('_storage', []);
            that._renderCalendar();
        });

    },

    _addDate: function (d) {
        var index = this.element.data('_storage').indexOf(d);
        if (index < 0) { this.element.data('_storage').push(d); }
    },

    _removeDate: function (d) {
        var index = this.element.data('_storage').indexOf(d);
        this.element.data('_storage').splice(index, 1);
    },

    _addDateExclude: function (d) {
        var index = this.element.data('_exclude').indexOf(d);
        if (index < 0) { this.element.data('_exclude').push(d); }
    },

    _addDateStored: function (d) {
        var index = this.element.data('_stored').indexOf(d);
        if (index < 0) { this.element.data('_stored').push(d); }
    },

    _removeDateExclude: function (d) {
        var index = this.element.data('_exclude').indexOf(d);
        this.element.data('_exclude').splice(index, 1);
    },

    _removeDateStored: function (d) {
        var index = this.element.data('_stored').indexOf(d);
        this.element.data('_stored').splice(index, 1);
    },

    _paddy: function paddy(n, p, c) {
        var pad_char = typeof c !== 'undefined' ? c : '0';
        var pad = new Array(1 + p).join(pad_char);
        return (pad + n).slice(-pad.length);
    },

    _dateFromNumbers: function dateFromNumbers(year, month, day){
        return new Date(this._paddy(year, 4) + "/" +  this._paddy(month, 2) + "/" + this._paddy(day, 2));
    },

    _dateNumberStringyFy: function dateNumberStringyFy(year, month, day) {
        return (this._dateFromNumbers(year, month, day)).format('yyyy-mm-dd')
    },

    _dateStringyFy: function dateStringyFy(d) {
        return this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
    },

    setDate: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());

        this._addDate(r);
        if (this.options.syncCalenderToDateField) {
            this._year = d.getFullYear();
            this._month = d.getMonth();
            this._day = d.getDate();
        }
        this._renderCalendar();
    },

    setDateExclude: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._addDateExclude(r);
        this._renderCalendar();
    },

    setDateStored: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._addDateStored(r);
        this._renderCalendar();
    },

    getDate: function (index) {
        return new Date(index !== undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
    },

    getDates: function () {
        var res;
        res = $.merge($.merge([], this.element.data('_storage')), this.element.data('_stored'));
        return res.unique();
    },

    unsetDate: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDate(r);
        this._renderCalendar();
    },

    unsetDateExclude: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDateExclude(r);
        this._renderCalendar();
    },

    unsetDateStored: function (d) {
        var r;
        d = new Date(d);
        r = this._dateNumberStringyFy(d.getFullYear(), d.getMonth() + 1, d.getDate());
        this._removeDateStored(r);
        this._renderCalendar();
    },

    _destroy: function () { },

    _setOption: function (key, value) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/carousel.js
$.widget("metro.carousel", {

    version: "3.0.0",

    options: {
        auto: true,
        period: 5000,
        duration: 1000,
        effect: 'slide', // slide, fade, switch, slowdown
        effectFunc: 'linear',
        direction: 'left',
        controls: true,
        controlNext: false,
        controlPrev: false,
        markers: true,
        stop: true,
        width: '100%',
        height: false,

        _slides: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _animating: false
    },


    _create: function(){
        var that = this, o = this.options,
            element = this.element;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        o._slides = element.find('.slide');

        var max_height = 0; //element.find('.slide:nth-child(1)').outerHeight();


        $.each(o._slides, function(){
            var oh, slide = $(this);

            oh = slide.outerHeight();

            if (oh > max_height) {max_height = oh;}
        });

        element.css({
            'width': o.width,
            'height': o.height ? o.height : max_height
        });

        if (o._slides.length <= 1) {return;}

        if (o.markers) {
            this._markers();
        }

        if (o.controls) {
            this._controls();
        }

        if (o.stop) {
            element
                .on('mouseenter', function(){
                    clearInterval(o._interval);
                })
                .on('mouseleave', function(){
                    if (that.options.auto) {that._autoStart();}// that.options.period;
                });
        }

        element.find('.slide').hide();
        element.find('.slide:nth-child(1)').show();

        //this._slideToSlide(0);
        if (o.auto) {
            this._autoStart();
        }

        element.data('carousel', this);

    },

    _autoStart: function(){
        var that = this, o = this.options;
        o._interval = setInterval(function(){
            if (o.direction === 'left') {
                that._slideTo('next');
            } else {
                that._slideTo('prior');
            }
        }, o.period);
    },

    _slideTo: function(direction){
        var carousel = this.element, that = this, o = this.options;
        var currentSlide = o._slides[o._currentIndex], nextSlide;

        if (direction === undefined) {direction = 'next';}

        if (direction === 'prior') {
            o._currentIndex -= 1;
            if (o._currentIndex < 0) {o._currentIndex = o._slides.length - 1;}

            o._outPosition = this.element.width();

        } else if (direction === 'next') {
            o._currentIndex += 1;
            if (o._currentIndex >= o._slides.length) {o._currentIndex = 0;}

            o._outPosition = -this.element.width();

        }

        nextSlide = o._slides[o._currentIndex];

        switch (this.options.effect) {
            case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
            case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
            case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
            default: this._effectSlide(currentSlide, nextSlide, this.options.duration);
        }

        carousel.find('.carousel-bullets a').each(function(){
            var index = $(this).data('num');
            if (index === o._currentIndex) {
                $(this).addClass('bullet-on');
            } else {
                $(this).removeClass('bullet-on');
            }
        });
    },

    _slideToSlide: function(slideIndex){
        var o = this.options,
            currentSlide = o._slides[o._currentIndex],
            nextSlide = o._slides[slideIndex];

        if (o._currentIndex === slideIndex) {
            return false;
        }

        if (slideIndex > o._currentIndex) {
            o._outPosition = -this.element.width();
        } else {
            o._outPosition = this.element.width();
        }

        switch (this.options.effect) {
            case 'switch' : this._effectSwitch(currentSlide, nextSlide); break;
            case 'slowdown': this._effectSlowdown(currentSlide, nextSlide); break;
            case 'fade': this._effectFade(currentSlide, nextSlide); break;
            default : this._effectSlide(currentSlide, nextSlide);
        }

        o._currentIndex = slideIndex;
    },

    _controls: function(){
        var next, prev, that = this, element = this.element, o = this.options;

        next = $('<span/>').addClass('carousel-switch-next').html("&gt;");
        prev = $('<span/>').addClass('carousel-switch-prev').html("&lt;");

        if (o.controlNext) {
            next.html(o.controlNext);
        }

        if (o.controlPrev) {
            prev.html(o.controlPrev);
        }

        next.appendTo(element);
        prev.appendTo(element);

        if (o._slides.length > 1) {
            prev.on('click', function(){
                if (o._animating === false) {
                    that._slideTo('prior');
                    o._animating = true;
                    setTimeout(function(){o._animating = false;}, o.duration);
                }
            });
            next.on('click', function(){
                if (o._animating === false) {
                    that._slideTo('next');
                    o._animating = true;
                    setTimeout(function(){o._animating = false;}, o.duration);
                }
            });
        } else {
            next.hide();
            prev.hide();
        }
    },

    _markers: function () {
        var div, a, i, that = this, o = this.options;

        div = $('<div class="carousel-bullets" />');

        for (i = 0; i < o._slides.length; i++) {
            a = $('<a class="carousel-bullet" href="javascript:void(0)" data-num="' + i + '"></a>');
            if (i === 0) {
                a.addClass('bullet-on');
            }
            a.appendTo(div);
        }


        div.find('a').on('click', function (e) {
            var _this = $(this),
                index = _this.data('num');



            div.find('a').removeClass('bullet-on');
            _this.addClass('bullet-on');

            if (index === o._currentIndex) {
                return false;
            }

            that._slideToSlide(index);

            e.preventDefault();
            e.stopPropagation();
        });

        div.appendTo(this.element);

    },


    _effectSwitch: function(currentSlide, nextSlide){
        $(currentSlide)
            .hide();
        $(nextSlide)
            .css({left: 0})
            .show();
        this.element.css({
            height: $(nextSlide).outerHeight()
        });
    },

    _effectSlide: function(currentSlide, nextSlide){
        var o = this.options;
        $(currentSlide)
            .animate({left: o._outPosition}, o.duration, o.effectFunc);
        $(nextSlide)
            .css('left', o._outPosition * -1)
            .show();

        this.element.css({
            height: $(nextSlide).outerHeight()
        });

        $(nextSlide).animate({left: 0}, o.duration, o.effectFunc);
    },

    _effectSlowdown: function(currentSlide, nextSlide){
        var o = this.options;
        var options = {
            'duration': o.duration,
            'easing': 'doubleSqrt'
        };
        $.easing.doubleSqrt = function(t) {
            return Math.sqrt(Math.sqrt(t));
        };

        $(currentSlide)
            .animate({left: o._outPosition}, options);


        $(nextSlide)
            .css('left', o._outPosition * -1)
            .show();

        this.element.css({
            height: $(nextSlide).outerHeight()
        });

        $(nextSlide).animate({left: 0}, options);
    },

    _effectFade: function(currentSlide, nextSlide){
        var o = this.options;

        $(currentSlide)
            .fadeOut(o.duration);
        $(nextSlide)
            .css({left: 0})
            .fadeIn(o.duration);
        this.element.css({
            height: $(nextSlide).outerHeight()
        });
    },

    slideTo: function(index){
        this._slideToSlide(index);
    },

    nextSlide: function(){
        this._slideTo('next');
    },

    priorSlide: function(){
        this._slideTo('prior');
    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/charm.js
$.widget( "metro.charm" , {

    version: "3.0.0",

    options: {
        position: "right",
        opacity: 1,
        outside: false,
        timeout: 0,
        duration: 400
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });


        this._createCharm();

        element.data('charm', this);
    },

    _createCharm: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass("charm").addClass(o.position+"-side").css({opacity: o.opacity}).hide();

        var closer = $("<span/>").addClass("charm-closer").appendTo(element);
        closer.on('click', function(){
            that.close();
        });

        if (o.outside === true) {
            element.on('mouseleave', function(e){
                that.close();
            });
        }
    },

    _showCharm: function(){
        var that = this, element = this.element, o = this.options;
        var size;

        if (o.position === "left" || o.position === "right") {
            size = element.outerWidth();
            if (o.position === "left") {
                element.css({
                    left: -size,
                    right: 'auto',
                    top: 0,
                    bottom: 0
                }).show().animate({
                    left: 0
                }, o.duration, function(){
                    element.data("displayed", true);
                });
            } else {
                element.css({
                    right: -size,
                    left: 'auto',
                    top: 0,
                    bottom: 0
                }).show().animate({
                    right: 0
                }, o.duration, function(){
                    element.data("displayed", true);
                });
            }
        } else {
            size = element.outerHeight();
            if (o.position === "top") {
                element.css({
                    top: -size,
                    bottom: 'auto',
                    left: 0,
                    right: 0
                }).show().animate({
                    top: 0
                }, o.duration, function(){
                    element.data("displayed", true);
                });
            } else {
                element.css({
                    bottom: -size,
                    top: 'auto',
                    left: 0,
                    right: 0
                }).show().animate({
                    bottom: 0
                }, o.duration, function(){
                    element.data("displayed", true);
                });
            }
        }

        if (o.timeout > 0) {
            this._timeout_interval = setInterval(function(){
                if (!element.is(":hover")) {
                    that.close();
                    clearInterval(that._timeout_interval);
                }
            }, o.timeout);
        }
    },

    _hideCharm: function(){
        var that = this, element = this.element, o = this.options;
        var size;

        if (o.position === "left" || o.position === "right") {
            size = element.outerWidth();
            if (o.position === "left") {
                element.animate({
                    left: -size
                }, o.duration, function(){
                    element.hide();
                    element.data("displayed", false);
                });
            } else {
                element.animate({
                    right: -size
                }, o.duration, function(){
                    element.hide();
                    element.data("displayed", false);
                });
            }
        } else {
            size = element.outerHeight();
            if (o.position === "top") {
                element.animate({
                    top: -size
                }, o.duration, function(){
                    element.hide();
                    element.data("displayed", false);
                });
            } else {
                element.animate({
                    bottom: -size
                }, o.duration, function(){
                    element.hide();
                    element.data("displayed", false);
                });
            }
        }

        clearInterval(this._timeout_interval);
    },

    open: function(){
        var that = this, element = this.element, o = this.options;

        if (element.data("opened") === true) {
            return;
        }

        element.data("opened", true);
        this._showCharm();
    },

    close: function(){
        var that = this, element = this.element, o = this.options;

        if (element.data("opened") === false) {
            return;
        }

        element.data("opened", false);

        this._hideCharm();
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// $(document).on("click", ".charm", function(e){
//     e.preventDefault();
//     e.stopPropagation();
// });
//
// $(document).on('click', function(e){
//     $('[data-role=charm]').each(function(i, el){
//         if (!$(el).hasClass('keep-open') && $(el).data('displayed')===true) {
//             $(el).data('charm').close();
//         }
//     });
// });

var metroCharm = {
    isOpened: function(el){
        var charm = $(el), charm_obj;
        if (charm.length == 0) {
            console.log('Charm ' + el + ' not found!');
            return false;
        }

        charm_obj = charm.data('charm');

        if (charm_obj == undefined) {
            console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
            return false;
        }

        return charm_obj.element.data('opened') === true;
    },

    show: function(el, position){
        var charm = $(el), charm_obj;
        if (charm.length == 0) {
            console.log('Charm ' + el + ' not found!');
            return false;
        }

        charm_obj = charm.data('charm');

        if (charm_obj == undefined) {
            console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
            return false;
        }

        if (position != undefined) {

            charm.hide();
            charm.data("displayed", false);
            charm.data("opened", false);

            charm_obj.options.position = position;
        }

        charm_obj.open();

        return false;
    },

    hide: function(el){
        var charm = $(el), charm_obj;
        if (charm.length == 0) {
            console.log('Charm ' + el + ' not found!');
            return false;
        }

        charm_obj = charm.data('charm');

        if (charm_obj == undefined) {
            console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
            return false;
        }

        charm_obj.close();
    },

    close: function(el){
        return this.show(el);
    },

    toggle: function(el, position){
        var charm = $(el), charm_obj;
        if (charm.length == 0) {
            console.log('Charm ' + el + ' not found!');
            return false;
        }

        charm_obj = charm.data('charm');

        if (charm_obj == undefined) {
            console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
            return false;
        }

        if (charm_obj.element.data('opened') === true) {
            charm_obj.close();
        } else {
            if (position != undefined) {
                charm.hide();
                charm.data("displayed", false);
                charm.data("opened", false);

                charm_obj.options.position = position;
            }
            charm_obj.open();
        }
    }
};

$.Charm = window.metroCharm = metroCharm;

window.metroCharmIsOpened = function(el){
    var charm = $(el), charm_obj;
    if (charm.length == 0) {
        console.log('Charm ' + el + ' not found!');
        return false;
    }

    charm_obj = charm.data('charm');

    if (charm_obj == undefined) {
        console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
        return false;
    }

    return charm_obj.element.data('opened') === true;
};

window.showMetroCharm = function (el, position){
    var charm = $(el), charm_obj;
    if (charm.length == 0) {
        console.log('Charm ' + el + ' not found!');
        return false;
    }

    charm_obj = charm.data('charm');

    if (charm_obj == undefined) {
        console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
        return false;
    }

    if (position != undefined) {

        charm.hide();
        charm.data("displayed", false);
        charm.data("opened", false);

        charm_obj.options.position = position;
    }

    charm_obj.open();

    return false;
};

window.hideMetroCharm = function(el){
    var charm = $(el), charm_obj;
    if (charm.length == 0) {
        console.log('Charm ' + el + ' not found!');
        return false;
    }

    charm_obj = charm.data('charm');

    if (charm_obj == undefined) {
        console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
        return false;
    }

    charm_obj.close();
};

window.toggleMetroCharm = function(el, position){
    var charm = $(el), charm_obj;
    if (charm.length == 0) {
        console.log('Charm ' + el + ' not found!');
        return false;
    }

    charm_obj = charm.data('charm');

    if (charm_obj == undefined) {
        console.log('Element not contain role charm! Please add attribute data-role="charm" to element ' + el);
        return false;
    }

    if (charm_obj.element.data('opened') === true) {
        charm_obj.close();
    } else {
        if (position != undefined) {
            charm.hide();
            charm.data("displayed", false);
            charm.data("opened", false);

            charm_obj.options.position = position;
        }
        charm_obj.open();
    }
};

// Source: js/widgets/dialog.js
$.widget( "metro.dialog" , {

    version: "3.0.14",

    options: {
        modal: false,
        overlay: false,
        overlayColor: 'default',
        overlayClickClose: false,
        type: 'default', // success, alert, warning, info
        place: 'center', // center, top-left, top-center, top-right, center-left, center-right, bottom-left, bottom-center, bottom-right
        position: 'default',
        content: false,
        hide: false,
        width: 'auto',
        height: 'auto',
        background: 'default',
        color: 'default',
        closeButton: false,
        windowsStyle: false,
        show: false,
        href: false,
        contentType: 'default', // video
        closeAction: true,
        closeElement: ".js-dialog-close",

        onDialogOpen: function(dialog){},
        onDialogClose: function(dialog){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._interval = undefined;
        this._overlay = undefined;


        if (o.overlay) {
            this._createOverlay();
        }
        this._createDialog();

        if (o.closeAction === true) {
            element.on("click", ".js-dialog-close" + o.closeElement, function(){
                that.close();
            });
        }

        element.appendTo($('body'));
        element.data('dialog', this);

        if (o.show) {
            this.open();
        }
    },

    _createOverlay: function(){
        var that = this, element = this.element, o = this.options;
        var overlay = $('body').find('.dialog-overlay');

        if (overlay.length === 0) {
            overlay = $("<div/>").addClass('dialog-overlay');
        }

        if (o.overlayColor) {
            if (metroUtils.isColor(o.overlayColor)) {
                overlay.css({
                    background: o.overlayColor
                });
            } else {
                overlay.addClass(o.overlayColor);
            }
        }

        this._overlay = overlay;
    },

    _createDialog: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass('dialog');

        if (o.type !== 'default') {
            element.addClass(o.type);
        }

        if (o.windowsStyle) {
            o.width = 'auto';

            element.css({
                left: 0,
                right: 0
            });
        }

        if (o.background !== 'default') {
            if (metroUtils.isColor(o.background)) {
                element.css({
                    background: o.background
                });
            } else {
                element.addClass(o.background);
            }
        }

        if (o.color !== 'default') {
            if (metroUtils.isColor(o.color)) {
                element.css({
                    color: o.color
                });
            } else {
                element.addClass(o.color);
            }
        }

        element.css({
            width: o.width,
            height: o.height
        });

        if (o.closeButton) {
            $("<span/>").addClass('dialog-close-button').appendTo(element).on('click', function(){
                that.close();
            });
        }

        this._hide();
    },

    _hide: function(){
        var element = this.element, o = this.options;
        element.css({
           visibility: "hidden"
        });
        if (o.removeOnClose === true) {
            element.remove();
        }
    },

    _show: function(){
        var that = this, element = this.element, o = this.options;

        this._setContent();

        element.css({
           visibility: "visible"
        });
    },

    _setPosition: function(){
        var that = this, element = this.element, o = this.options;
        var width = element.outerWidth(),
            height = element.outerHeight();

        switch (o.place) {
            case 'top-left': {
                element.css({
                    left: 0,
                    top: 0
                });
                break;
            }
            case 'top-right': {
                element.css({
                    right: 0,
                    top: 0
                });
                break;
            }
            case 'top-center': {
                element.css({
                    left: ( $(window).width() - width ) / 2,
                    top: 0
                });
                break;
            }
            case 'bottom-left': {
                element.css({
                    left: 0,
                    bottom: 0
                });
                break;
            }
            case 'bottom-right': {
                element.css({
                    right: 0,
                    bottom: 0
                });
                break;
            }
            case 'center-left': {
                element.css({
                    left: 0,
                    top: ( $(window).height() - height ) / 2
                });
                break;
            }
            case 'center-right': {
                element.css({
                    right: 0,
                    top: ( $(window).height() - height ) / 2
                });
                break;
            }
            case 'bottom-center': {
                element.css({
                    left: ( $(window).width() - width ) / 2,
                    bottom: 0
                });
                break;
            }
            default: {
                element.css({
                    left: o.windowsStyle === false ? ( $(window).width() - width ) / 2 : 0,
                    top: ( $(window).height() - height ) / 2
                });
            }
        }
    },

    _setContent: function(){
        var that = this, element = this.element, o = this.options;
        var content = $("<div>").addClass("set-dialog-content");

        if (o.contentType === 'video') {
            content.addClass('video-container');
        }

        if (o.content === false && o.href === false) {
            return false;
        }

        element.children(":not(.dialog-close-button)").remove();
        //element.find('.set-dialog-content').remove();

        content.appendTo(element);

        if (o.content) {

            if (o.content instanceof jQuery) {
                o.content.appendTo(content);
            } else {
                content.html(o.content);
            }

            this._setPosition();
        }

        if (o.href) {
            $.get(
                o.href,
                function(response){
                    content.html(response);
                    that._setPosition();
                }
            );
        }

    },

    setContent: function(content){
        this.options.contentType = "default";
        this.options.href = false;
        this.options.content = content;
        this._setContent();
    },

    setContentHref: function(href){
        this.options.contentType = "href";
        this.options.content = false;
        this.options.href = href;
        this._setContent();
    },

    setContentVideo: function(content){
        this.options.contentType = "video";
        this.options.content = content;
        this.options.href = false;
        this._setContent();
    },

    toggle: function(){
        var element = this.element;
        if (element.data('opened')) {
            this.close();
        } else {
            this.open();
        }
    },

    open: function(){
        var that = this, element = this.element, o = this.options;
        var overlay;

        this._setPosition();

        element.data('opened', true);

        if (o.overlay) {
            overlay = this._overlay;
            overlay.appendTo('body').show();
            if (o.overlayClickClose) {
                overlay.on('click', function(){
                    that.close();
                });
            }
        }

        //element.fadeIn();
        this._show();

        if (typeof o.onDialogOpen === 'function') {
            o.onDialogOpen(element);
        } else {
            if (typeof window[o.onDialogOpen] === 'function') {
                window[o.onDialogOpen](element);
            } else {
                var result = eval("(function(){"+o.onDialogOpen+"})");
                result.call(element);
            }
        }

        if (o.hide && parseInt(o.hide) > 0) {
            this._interval = setTimeout(function(){
                that.close();
            }, parseInt(o.hide));
        }
    },

    close: function(){
        var that = this, element = this.element, o = this.options;

        clearInterval(this._interval);

        if (o.overlay) {
            $('body').find('.dialog-overlay').remove();
        }

        element.data('opened', false);

        //element.fadeOut();
        this._hide();

        if (typeof o.onDialogClose === 'function') {
            o.onDialogClose(element);
        } else {
            if (typeof window[o.onDialogClose] === 'function') {
                window[o.onDialogClose](element);
            } else {
                var result = eval("(function(){"+o.onDialogClose+"})");
                result.call(element);
            }
        }
    },

    reset: function(place){
        if (place !== undefined) {
            this.options.place = place;
        }
        this._setPosition();
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});


var dialog = {
    open: function(el, place, content, contentType){
        var dialog = $(el), dialog_obj;
        if (dialog.length == 0) {
            console.log('Dialog ' + el + ' not found!');
            return false;
        }

        dialog_obj = dialog.data('dialog');

        if (dialog_obj == undefined) {
            console.log('Element not contain role dialog! Please add attribute data-role="dialog" to element ' + el);
            return false;
        }

        if (content != undefined) {
            switch (contentType) {
                case 'href': dialog_obj.setContentHref(content); break;
                case 'video': dialog_obj.setContentVideo(content); break;
                default: dialog_obj.setContent(content);
            }
        }

        if (place !== undefined) {
            dialog_obj.options.place = place;
        }

        dialog_obj.open();
    },

    close: function(el){
        var dialog = $(el), dialog_obj;
        if (dialog.length == 0) {
            console.log('Dialog ' + el + ' not found!');
            return false;
        }

        dialog_obj = dialog.data('dialog');

        if (dialog_obj == undefined) {
            console.log('Element not contain role dialog! Please add attribute data-role="dialog" to element ' + el);
            return false;
        }

        dialog_obj.close();
    },

    toggle: function(el, place, content, contentType){
        var dialog = $(el), dialog_obj;
        if (dialog.length == 0) {
            console.log('Dialog ' + el + ' not found!');
            return false;
        }

        dialog_obj = dialog.data('dialog');

        if (dialog_obj == undefined) {
            console.log('Element not contain role dialog! Please add attribute data-role="dialog" to element ' + el);
            return false;
        }

        if (content != undefined) {
            switch (contentType) {
                case 'href': dialog_obj.setContentHref(content); break;
                case 'video': dialog_obj.setContentVideo(content); break;
                default: dialog_obj.setContent(content);
            }
        }

        if (dialog_obj.element.data('opened') === true) {
            dialog_obj.close();
        } else {
            if (place !== undefined) {
                dialog_obj.options.place = place;
            }
            dialog_obj.open();
        }
    },

    create: function(data){
        var dlg, id, html, buttons, button;

        id = "dialog_id_" + (new Date()).getTime();
        dlg = $("<div id='"+id+"' class='dialog dialog-ex'></div>");

        if (data.title !== undefined) {
            $("<div class='dialog-title'>"+data.title+"</div>").appendTo(dlg);
        }
        if (data.content !== undefined) {
            $("<div class='dialog-content'>"+data.content+"</div>").appendTo(dlg);
        }
        if (data.actions !== undefined && typeof data.actions == 'object') {

            buttons = $("<div class='dialog-actions'></div>").appendTo(dlg);

            $.each(data.actions, function(){
                var item = this;

                button = $("<button>").attr("type", "button").addClass("button").html(item.title);

                if (item.cls !== undefined) {
                    button.addClass(item.cls);
                }

                button.appendTo(buttons);

                if (item.onclick != undefined) {

                    button[0].addEventListener("click", function(){
                        if (typeof item.onclick === 'function') {
                            item.onclick(dlg);
                        } else {
                            if (typeof window[item.onclick] === 'function') {
                                window[item.onclick](dlg);
                            } else {
                                var result = eval("(function(){"+item.onclick+"})");
                                result.call(dlg);
                            }
                        }
                    }, true);
                }
            });
        }

        dlg.appendTo($("body"));

        var dlg_options = $.extend({}, {
            show: true,
            closeAction: true,
            removeOnClose: true
        }, (data.options != undefined ? data.options : {}));

        return dlg.dialog(dlg_options);
    }
};

window.metroDialog = dialog;

$.Dialog = function(data){
    return dialog.create(data);
};

$(window).on('resize', function(){
    var dialogs = $('.dialog');

    $.each(dialogs, function(){
        var dlg = $(this).data('dialog'), element = dlg.element;
        if (element.data('opened') !== true) {
            return;
        }
        dlg.reset();
    });
});
// Source: js/widgets/donut.js
$.widget( "metro.donut" , {

    version: "1.0.0",

    options: {
        size: 100,
        radius: 50,
        value: 0,
        background: "#ffffff",
        color: "",
        stroke: "#d1d8e7",
        fill: "#49649f",
        fontSize: 24,
        hole: .8,
        total: 100,
        cap: "%",
        animate: 0
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        this._createDonut();

        element.data('donut', this);
    },

    _createDonut: function(){
        var that = this, element = this.element, o = this.options;
        var html = "";
        var r = o.radius  * (1 - (1 - o.hole) / 2);
        var width = o.radius * (1 - o.hole);
        var circumference = 2 * Math.PI * r;
        var strokeDasharray = ((o.value * circumference) / o.total) + ' ' + circumference;
        var transform = 'rotate(-90 ' + o.radius + ',' + o.radius + ')';
        var fontSize = r * o.hole * 0.6;

        if (!element.hasClass("donut")) element.addClass("donut");

        element.css({
            width: o.size,
            height: o.size,
            background: o.background
        });

        html += "<svg>";
        html += "   <circle class='donut-back' r='"+(r)+"px' cx='"+(o.radius)+"px' cy='"+(o.radius)+"px' transform='"+(transform)+"' fill='none' stroke='"+(o.stroke)+"' stroke-width='"+(width)+"'/>";
        html += "   <circle class='donut-fill' r='"+(r)+"px' cx='"+(o.radius)+"px' cy='"+(o.radius)+"px' transform='"+(transform)+"' fill='none' stroke='"+(o.fill)+"' stroke-width='"+(width)+"'/>";
        html += "   <text   class='donut-title' x='"+(o.radius)+"px' y='"+(o.radius)+"px' dy='"+(fontSize/3)+"px' text-anchor='middle' fill='"+(o.fill)+"' font-size='"+(fontSize)+"px'>0"+(o.cap)+"</text>";
        html += "</svg>";

        element.html(html);

        this.val(o.value);
    },

    _setValue: function(v){
        var that = this, element = this.element, o = this.options;

        o.value = v;

        var fill = element.find(".donut-fill");
        var title = element.find(".donut-title");
        var r = o.radius  * (1 - (1 - o.hole) / 2);
        var circumference = 2 * Math.PI * r;
        var title_value = ((o.value * 1000 / o.total) / 10)+(o.cap);
        var fill_value = ((o.value * circumference) / o.total) + ' ' + circumference;

        fill.attr("stroke-dasharray", fill_value);
        title.html(title_value);
    },

    val: function(v){
        var that = this, o = this.options;

        if (v === undefined) {
            return o.value
        }

        if (o.animate > 0) {
            var i = 0;
            var interval;

            interval = setInterval(function(){
                that._setValue(++i);
                if (i == v) {
                    clearInterval(interval);
                }
            }, o.animate)

        } else {
            this._setValue(v);
        }
    },

    _setOptionsFromDOM: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/draggable.js
$.widget( "metro.draggable" , {

    version: "3.0.0",

    options: {
        dragElement: null,
        dragArea: null,
        zIndex: 2000,
        onDragStart: function(el){},
        onDragStop: function(el){},
        onDragMove: function(el, offset){}
    },

    drag: false,
    oldCursor: null,
    oldZindex: null,
    oldPosition: null,


    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();
        this._createDraggable();

        element.data('draggable', this);
    },

    _createDraggable: function(){
        var that = this, element = this.element, o = this.options;
        var dragElement  = o.dragElement ? element.find(o.dragElement) : element;

        addTouchEvents(element[0]);

        dragElement.on('mousedown', function(e){
            var result, el = $(this);

            that.drag = true;

            if (typeof o.onDragStart === 'function') {
                o.onDragStart(element);
            } else {
                if (typeof window[o.onDragStart] === 'function') {
                    window[o.onDragStart](element);
                } else {
                    result = eval("(function(){"+o.onDragStart+"})");
                    result.call(element);
                }
            }

            that.oldCursor = el.css('cursor') ? el.css('cursor') : 'default' ;
            that.oldZindex= element.css('z-index');
            dragElement.css({
                cursor: 'move'
            });

            element.css({
                'z-index': o.zIndex
            });

            var dragArea = o.dragArea ? $(o.dragArea) : $(window);
            var os = {
                left: o.dragArea ? dragArea.offset().left : 0,
                top: o.dragArea ? dragArea.offset().top : 0
            };

            var drg_h = element.outerHeight(),
                drg_w = element.outerWidth(),
                pos_y = element.offset().top + drg_h - e.pageY,
                pos_x = element.offset().left + drg_w - e.pageX;

            //console.log(pos_x, pos_y);

            dragArea.on('mousemove', function(e){
                var offset, pageX, pageY;

                if (!that.drag) return false;


                pageX = e.pageX - os.left;
                pageY = e.pageY - os.top;

                var t = (pageY > 0) ? (pageY + pos_y - drg_h) : (0);
                var l = (pageX > 0) ? (pageX + pos_x - drg_w) : (0);
                var t_delta = dragArea.innerHeight() + dragArea.scrollTop() - element.outerHeight();
                var l_delta = dragArea.innerWidth() + dragArea.scrollLeft() - element.outerWidth();

                if(t >= 0 && t <= t_delta) {
                    element.offset({top: t + os.top});
                }
                if(l >= 0 && l <= l_delta) {
                    element.offset({left: l + os.left});
                }

                offset = {
                    left: l,
                    top: t
                };

                if (typeof o.onDragMove === 'function') {
                    o.onDragMove(element, offset);
                } else {
                    if (typeof window[o.onDragMove] === 'function') {
                        window[o.onDragMove](element, offset);
                    } else {
                        result = eval("(function(){"+o.onDragMove+"})");
                        result.call(element, offset);
                    }
                }
            });

            //e.preventDefault();
        });

        dragElement.on('mouseup', function(e){
            var result, el = $(this);

            that.drag = false;
            dragElement.css({
                cursor: that.oldCursor
            });
            element.css({
                'z-index': that.oldZindex,
                'position': that.oldPosition
            });

            if (typeof o.onDragStop === 'function') {
                o.onDragStop(element);
            } else {
                if (typeof window[o.onDragStop] === 'function') {
                    window[o.onDragStop](element);
                } else {
                    result = eval("(function(){"+o.onDragStop+"})");
                    result.call(element);
                }
            }

            //e.preventDefault();
        });

    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/dropdown.js
$.widget("metro.dropdown", {

    version: "3.0.0",

    options: {
        effect: window.METRO_SHOW_TYPE,
        toggleElement: false,
        noClose: false,
        onDrop: function(object){},
        onUp: function(object){}
    },

    _create: function(){
        var  that = this, element = this.element, o = this.options,
             menu = this.element,
             name = this.name,
             parent = this.element.parent();

        var toggle;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        if (METRO_SHOW_TYPE !== undefined) {
            this.options.effect = METRO_SHOW_TYPE;
        }

        toggle.on('click.'+name, function(e){
            parent.siblings(parent[0].tagName).removeClass("active-container");
            $(".active-container").removeClass("active-container");

            if (menu.css('display') === 'block' && !menu.hasClass('keep-open')) {
                that._close(menu);
            } else {
                $('[data-role=dropdown]').each(function(i, el){
                    if (!menu.parents('[data-role=dropdown]').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') === 'block') {
                        that._close(el);
                    }
                });
                if (menu.hasClass('horizontal')) {
                    menu.css({
                        'visibility': 'hidden',
                        'display': 'block'
                    });
                    var item_length = $(menu.children('li')[0]).outerWidth();
                    //var item_length2 = $(menu.children('li')[0]).width();
                    menu.css({
                        'visibility': 'visible',
                        'display': 'none'
                    });
                    var menu_width = menu.children('li').length * item_length + (menu.children('li').length - 1);
                    menu.css('width', menu_width);
                }
                that._open(menu);
                parent.addClass("active-container");
            }
            e.preventDefault();
            e.stopPropagation();
        });

        if (o.noClose === true) {
            element.on('click', function (e) {
               // e.preventDefault();
                e.stopPropagation();
            });
        }

        $(menu).find('li.disabled a').on('click', function(e){
            e.preventDefault();
        });

        element.data('dropdown', this);
    },

    _open: function(el){
        var parent = this.element.parent(), o = this.options;
        var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        switch (this.options.effect) {
            case 'fade': $(el).fadeIn('fast'); break;
            case 'slide': $(el).slideDown('fast'); break;
            default: $(el).show();
        }
        this._trigger("onOpen", null, el);
        toggle.addClass('active-toggle');

        if (typeof o.onDrop === 'function') {
            o.onDrop(el);
        } else {
            if (typeof window[o.onDrop] === 'function') {
                window[o.onDrop](el);
            } else {
                var result = eval("(function(){"+o.onDrop+"})");
                result.call(el);
            }
        }
    },

    _close: function(el){
        var parent = $(el).parent(), o = this.options;
        var toggle = o.toggleElement ? $(o.toggleElement) : parent.children('.dropdown-toggle').length > 0 ? parent.children('.dropdown-toggle') : parent.children('a:nth-child(1)');

        switch (this.options.effect) {
            case 'fade': $(el).fadeOut('fast'); break;
            case 'slide': $(el).slideUp('fast'); break;
            default: $(el).hide();
        }
        this._trigger("onClose", null, el);
        toggle.removeClass('active-toggle');

        if (typeof o.onUp === 'function') {
            o.onUp(el);
        } else {
            if (typeof window[o.onUp] === 'function') {
                window[o.onUp](el);
            } else {
                var result = eval("(function(){"+o.onUp+"})");
                result.call(el);
            }
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

$(document).on('click', function(e){
    $('[data-role=dropdown]').each(function(i, el){
        if (!$(el).hasClass('keep-open') && $(el).css('display')==='block') {
            var that = $(el).data('dropdown');
            that._close(el);
        }
    });
});

// Source: js/widgets/fit-image.js
$.widget( "metro.fitImage" , {

    version: "3.0.0",

    options: {
        shadow: false,
        overlay: false,
        type: 'default',
        frameColor: 'default',
        format: 'hd' // 'sd'
    },

    _create: function () {
        var element = this.element, o = this.options;
        var parent = element.parent();
        var i_w, i_h, p_w, p_h;
        var div, src = element.attr('src');

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        $("<img/>").attr('src', src).on('load', function(){
                i_w = this.width;
                i_h = this.height;
            }).remove();

        var image_container = $("<div/>").addClass('image-container').css('width', '100%').appendTo(parent);
        var image_frame = $("<div/>").addClass('frame').appendTo(image_container);

        p_w = image_frame.innerWidth();
        p_h = image_frame.innerHeight();

        switch (o.format) {
            case 'sd': p_h = 3 * p_w / 4; break;
            case 'square': p_h = p_w; break;
            case 'cycle': p_h = p_w; break;
            case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
            case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
            default: p_h = 9 * p_w / 16;
        }

        div = $("<div/>").css({
            'width': '100%',
            'height': p_h,
            'background-image': 'url('+src+')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'border-radius': o.format === 'cycle' ? '50%' : '0'
        });

        $(window).on('resize', function(){
            var p_w = image_frame.innerWidth();
            var p_h = image_frame.innerHeight();

            switch (o.format) {
                case 'sd': p_h = 3 * p_w / 4; break;
                case 'square': p_h = p_w; break;
                case 'cycle': p_h = p_w; break;
                case 'fill-h': p_h = "100%"; image_container.css('height', '100%'); break;
                case 'fill': p_h = "100%"; image_container.css('height', '100%'); break;
                default: p_h = 9 * p_w / 16;
            }

            div.css({
                'height': p_h
            });
        });

        if (o.frameColor !== 'default') {
            if (metroUtils.isColor(o.frameColor)) {
                image_frame.css('background-color', o.frameColor);
            } else {
                image_frame.addClass(o.frameColor);
            }
        }
        if (o.overlay !== false) {
            var overlay = $("<div/>").addClass('image-overlay').html(o.overlay).appendTo(image_container);
        }
        if (o.shadow !== false) {
            image_container.addClass('block-shadow');
        }
        div.appendTo(image_frame);

        switch (o.type) {
            case 'diamond': {
                image_container.addClass('diamond'); div.addClass('image-replacer'); break;
            }
            case 'bordered': {
                image_container.addClass('bordered'); break;
            }
            case 'polaroid': {
                image_container.addClass('polaroid'); break;
            }
            case 'handing': {
                image_container.addClass('handing'); break;
            }
            case 'handing-ani': {
                image_container.addClass('handing ani'); break;
            }
            case 'handing-ani-hover': {
                image_container.addClass('handing ani-hover'); break;
            }
        }

        image_container.addClass('image-format-'+ o.format);
        //element.css('display', 'none');
        element.remove();

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/fluentmenu.js
$.widget( "metro.fluentmenu" , {

    version: "3.0.0",

    options: {
        onSpecialClick: function(a, li){},
        onTabClick: function(a, li){},
        onTabChange: function(a, li){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createMenu();

        element.data('fluentmenu', this);

    },

    _createMenu: function(){
        var that = this, element = this.element, o = this.options;
        var active_tab = $(element.find(".tabs-holder > li.active")[0]);

        this.openTab(active_tab);

        element.on("click", ".tabs-holder > li > a", function(e){
            var a = $(this);
            var li = a.parent('li');
            var result;

            if (li.hasClass('special')) {
                if (typeof o.onSpecialClick === 'function') {
                    o.onSpecialClick(a, li);
                } else {
                    if (typeof window[o.onSpecialClick] === 'function') {
                        window[o.onSpecialClick](a, li);
                    } else {
                        result = eval("(function(){"+o.onSpecialClick+"})");
                        result.call(a, li);
                    }
                }
            } else {
                var panel = $(a.attr('href'));
                that._hidePanels();
                that._showPanel(panel);
                element.find('.tabs-holder > li').removeClass('active');
                a.parent('li').addClass('active');

                if (typeof o.onTabClick === 'function') {
                    o.onTabClick(a, li);
                } else {
                    if (typeof window[o.onTabClick] === 'function') {
                        window[o.onTabClick](a, li);
                    } else {
                        result = eval("(function(){"+o.onTabClick+"})");
                        result.call(a, li);
                    }
                }

                if (typeof o.onTabChange === 'function') {
                    o.onTabChange(a, li);
                } else {
                    if (typeof window[o.onTabChange] === 'function') {
                        window[o.onTabChange](a, li);
                    } else {
                        result = eval("(function(){"+o.onTabChange+"})");
                        result.call(a, li);
                    }
                }
            }
            e.preventDefault();
        });
    },

    _hidePanels: function(){
        this.element.find('.tab-panel').hide();
    },

    _showPanel: function(panel){
        if (panel == undefined) {
            panel = this.element.find('.tabs-holder li.active a').attr('href');
        }
        $(panel).show();
    },

    openTab: function(tab){
        var that = this, element = this.element, o = this.options;
        var target_panel = $(tab.children('a').attr('href'));
        if (target_panel.length === 0) {
            return false;
        }
        this._hidePanels();
        this._showPanel(target_panel);
        element.find('.tabs-holder > li').removeClass('active');
        tab.addClass('active');
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/grid.js
$.widget( "metro.grid" , {

    version: "3.0.0",

    options: {
        equalHeight: true
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.equalHeight) {
            setTimeout(function(){
                that._setEqualHeight();
            }, 50);

            $(window).on('resize', function(){
                that._setEqualHeight();
            });
        }

        element.data('grid', this);

    },

    _setEqualHeight: function(){
        var that = this, element = this.element, o = this.options;
        var rows = element.find('.row');

        $.each(rows, function(){
            var row = $(this);
            var cells = row.children('.cell');
            var maxHeight = 0;

            cells.css('min-height', '0');

            $.each(cells, function(){
                //console.log(this.tagName, $(this).outerHeight());
                if ($(this).outerHeight() > maxHeight) {
                    maxHeight = $(this).outerHeight();
                }
            });

            cells.css('min-height', maxHeight);
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/hint.js
$.widget("metro.hint", {

    version: "3.0.0",

    options: {
        hintPosition: "auto", // bottom, top, left, right, auto
        hintBackground: '#FFFCC0',
        hintColor: '#000000',
        hintMaxSize: 200,
        hintMode: 'default',
        hintShadow: false,
        hintBorder: true,
        hintTimeout: 0,
        hintTimeDelay: 0,

        _hint: undefined
    },

    _create: function(){
        var that = this, element = this.element;
        var o = this.options;


        this.element.on('mouseenter', function(e){
            $(".hint, .hint2").remove();
            if (o.hintTimeDelay > 0) {
                setTimeout(function(){
                    that.createHint();
                    o._hint.show();
                }, o.hintTimeDelay);
            } else {
                that.createHint();
                o._hint.show();
            }
            e.preventDefault();
        });

        this.element.on('mouseleave', function(e){
            if (o._hint.length) {
                o._hint.hide().remove();
            }
            e.preventDefault();
        });

        //element.data('hint', this);

    },

    createHint: function(){
        var that = this, element = this.element,
            hint = element.data('hint').split("|"),
            o = this.options;

        var _hint;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (element[0].tagName === 'TD' || element[0].tagName === 'TH') {
            var wrp = $("<div/>").css("display", "inline-block").html(element.html());
            element.html(wrp);
            element = wrp;
        }

        var hint_title = hint.length > 1 ? hint[0] : false;
        var hint_text = hint.length > 1 ? hint[1] : hint[0];


        _hint = $("<div/>").appendTo('body');
        if (o.hintMode === 2) {
            _hint.addClass('hint2');
        } else {
            _hint.addClass('hint');
        }

        if (!o.hintBorder) {
            _hint.addClass('no-border');
        }

        if (hint_title) {
            $("<div/>").addClass("hint-title").html(hint_title).appendTo(_hint);
        }
        $("<div/>").addClass("hint-text").html(hint_text).appendTo(_hint);

        _hint.addClass(o.position);

        if (o.hintShadow) {_hint.addClass("shadow");}
        if (o.hintBackground) {
            if (metroUtils.isColor(o.hintBackground)) {
                _hint.css("background-color", o.hintBackground);
            } else {
                _hint.addClass(o.hintBackground);
            }
        }
        if (o.hintColor) {
            if (metroUtils.isColor(o.hintColor)) {
                _hint.css("color", o.hintColor);
            } else {
                _hint.addClass(o.hintColor);
            }
        }

        if (o.hintMaxSize > 0) {
            _hint.css({
                'max-width': o.hintMaxSize
            });
        }

        //if (o.hintMode !== 'default') {
        //    _hint.addClass(o.hintMode);
        //}

        if (o.hintPosition === 'top') {
            _hint.addClass('top');
            _hint.css({
                top: element.offset().top - $(window).scrollTop() - _hint.outerHeight() - 20,
                left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
            });
        } else if (o.hintPosition === 'right') {
            _hint.addClass('right');
            _hint.css({
                top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                left: element.offset().left + element.outerWidth() + 15 - $(window).scrollLeft()
            });
        } else if (o.hintPosition === 'left') {
            _hint.addClass('left');
            _hint.css({
                top: o.hintMode === 2 ? element.offset().top + element.outerHeight()/2 - _hint.outerHeight()/2 - $(window).scrollTop() - 10 : element.offset().top - 10 - $(window).scrollTop(),
                left: element.offset().left - _hint.outerWidth() - 10 - $(window).scrollLeft()
            });
        } else {
            _hint.addClass('bottom');
            _hint.css({
                top: element.offset().top - $(window).scrollTop() + element.outerHeight(),
                left: o.hintMode === 2 ? element.offset().left + element.outerWidth()/2 - _hint.outerWidth()/2  - $(window).scrollLeft(): element.offset().left - $(window).scrollLeft()
            });
        }

        o._hint = _hint;

        if (o.hintTimeout > 0) {
            setTimeout(function(){
                if (o._hint.length) {
                    o._hint.hide().remove();
                }
            }, o.hintTimeout);
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/inputs.js
$.widget("metro.input", {

    version: "3.0.0",

    options: {
        showLabelOnValue: false,
        textAutoResize: false,
        textMaxHeight: 0
    },

    _create: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (element.hasClass('file')) {this._createInputFile();}
        if (element.hasClass('text')) {this._createInputText();}
        if (element.hasClass('password')) {this._createInputText();}
        if (element.hasClass('select')) {this._createInputSelect();}
        if (element.hasClass('textarea')) {this._createInputTextarea();}
        if (element.hasClass('modern')) {this._createInputModern();}

        element.data('input', this);

    },

    _createInputModern: function(){
        var element = this.element;
        var input = element.find("input");
        var placeholder = element.find(".placeholder");

        if (input.val() !== "") {
            placeholder.css({display: "none"});
        }

        input.on("blur", function(){
            if (input.val() !== "") {
                placeholder.css({display: "none"});
            } else {
                placeholder.css({display: "block"});
            }
        });
        input.on("focus", function(){
            if (input.val() !== "") {
                placeholder.css({display: "none"});
            } else {
                placeholder.css({display: "block"});
            }
        });
    },

    _createInputFile: function(){
        var element = this.element;
        var wrapper, button, input;
        wrapper = $("<input type='text' class='input-file-wrapper' readonly style='z-index: 1; cursor: default;'>");
        button = element.children('.button');
        input = element.children('input[type="file"]');
        input.css('z-index', 0);
        wrapper.insertAfter(input);
        input.attr('tabindex', '-1');
        button.attr('type', 'button');
        wrapper.attr('placeholder', input.attr('placeholder'));

        input.on('change', function(){
            var val = $(this).val();
            if (val !== '') {
                wrapper.val(val.replace(/.+[\\\/]/, ""));
                wrapper.attr('title', val.replace(/.+[\\\/]/, ""));
            }
        });

        element.on('click', '.button, .input-file-wrapper', function(){
            input.trigger('click');
        });
    },

    _createInputText: function(){
        var element = this.element;
        var helper_clear = element.find('.helper-button.clear');
        var helper_reveal = element.find('.helper-button.reveal');
        var input = element.find('input');
        var helpers = element.find('.helper-button');
        var buttons = element.find('.button');
        var states = element.find('.input-state-error, .input-state-warning, .input-state-info, .input-state-success, .input-state-required');
        var padding = 0;
        var rtl = element.attr('dir') === 'rtl' || element.parents("[dir='rtl']").length > 0;


        $.each(buttons, function(){
            var b = $(this);
            padding += b.outerWidth();
        });

        if (rtl) {
            input.css({
                'padding-left': padding + 5
            });

            states.css({
                'left': padding + 8
            });
        } else {
            input.css({
                'padding-right': padding + 5
            });

            states.css({
                'right': padding + 8
            });
        }

        helpers
            .attr('tabindex', -1)
            .attr('type', 'button');

        if (helper_clear) {
            helper_clear.on('click', function(){
                input.val('').trigger('change').focus();
            });
        }
        if (helper_reveal && element.hasClass('password')) {
            helper_reveal
                .on('mousedown', function(){input.attr('type', 'text');})
                .on('mouseup', function(){input.attr('type', 'password').focus();});
        }
    },

    _createInputSelect: function(){

    },

    _createInputTextarea: function(){
        var element = this.element, that = this, o = this.options;
        var textarea = element.find('textarea');

        //console.log(textarea);

        var fitTextarea = function(){
            textarea.css({
                "resize": 'none',
                "overflow-y": 'hidden'
            });

            textarea[0].style.height = 0;

            var adjust = textarea[0].scrollHeight;

            if (o.textMaxHeight > 0) {
                if (o.textMaxHeight > adjust) {
                    textarea[0].style.height = adjust + 'px';
                } else {
                    textarea[0].style.height = o.textMaxHeight + 'px';
                }
            } else {
                textarea[0].style.height = adjust + 'px';
            }
        };

        if (o.textAutoResize) {
            textarea.on('keyup', fitTextarea);
            textarea.on('keydown', fitTextarea);
            textarea.on('change', fitTextarea);
            textarea.on('focus', fitTextarea);
            textarea.on('cut', fitTextarea);
            textarea.on('paste', fitTextarea);
            textarea.on('drop', fitTextarea);
        }
    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/keypad.js
$.widget( "metro.keypad" , {

    version: "3.0.0",

    options: {
        target: false,
        shuffle: false,
        length: false,
        keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        size: 32,
        onKey: function(key){},
        onChange: function(value){}
    },

    //_keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (typeof o.keys === 'string') {
            o.keys = o.keys.split(",");
        }

        if (o.target !== false) {
            o.target = $(o.target);
        }

        this._createKeypad();

        element.data('keypad', this);

    },

    _shuffleKeys: function(){
        var that = this, element = this.element, o = this.options;
        var keys = o.keys.slice(0);
        var keypad = this._keypad;
        var keys_length = keys.length + 2;

        if (o.shuffle) {
            keys = keys.shuffle();
        }

        keypad.html('').css({
            width: keys_length / 4 * o.size + (keys_length / 4 + 1) * 2 + 2
        });

        keys.map(function(i){
            $("<div/>").addClass('key').html(i).data('key', i).appendTo(keypad);
        });

        $("<div/>").addClass('key').html('&larr;').data('key', '&larr;').appendTo(keypad);
        $("<div/>").addClass('key').html('&times;').data('key', '&times;').appendTo(keypad);
    },

    _createKeypad: function(){
        var that = this, element = this.element, o = this.options;
        var keypad;

        if (element.hasClass('input-control')) {

            keypad = $("<div/>").addClass('keypad keypad-dropdown').css({
                position: 'absolute',
                'z-index': 1000,
                display: 'none'
            }).appendTo(element);

            o.target = element.find('input');

            element.on('click', function(e){
                if (keypad.css('display') === 'none') {
                    keypad.show();
                } else {
                    keypad.hide();
                }

                var opened_pads = $(".keypad.keypad-dropdown");
                $.each(opened_pads, function(){
                    if (!$(this).is(keypad)) {
                        $(this).hide();
                    }
                });

                e.stopPropagation();
            });

            $('html').on('click', function(){
                $(".keypad.keypad-dropdown").hide();
            });
        } else {
            keypad = element;
            keypad.addClass('keypad');
        }

        if (o.target !== false) {
            $(o.target).attr('readonly', true);
        }

        if (keypad.parent().data('role') === 'dropdown') {
            keypad.parent().css({
                top: '100%'
            });
        }

        this._keypad = keypad;

        this._shuffleKeys();

        keypad.on('click', '.key', function(e){
            var key = $(this);
            var result;

            if (o.target) {
                if (key.data('key') !== '&larr;' && key.data('key') !== '&times;') {
                    if (o.length && $(o.target).val().length === o.length) {
                        return false;
                    }
                    $(o.target).val($(o.target).val() + '' + key.data('key'));
                } else {
                    if (key.data('key') === '&times;') {
                        $(o.target).val('');
                    }
                    if (key.data('key') === '&larr;') {
                        var val = $(o.target).val();
                        $(o.target).val(val.substring(0, val.length - 1))
                    }
                }

                o.target.trigger('change');
            }

            if (typeof o.onKey === 'function') {
                o.onKey(key);
            } else {
                if (typeof window[o.onKey] === 'function') {
                    window[o.onKey](key);
                } else {
                    result = eval("(function(){"+o.onKey+"})");
                    result.call(key);
                }
            }

            if (typeof o.onChange === 'function') {
                o.onChange(o.target.val());
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](o.target.val());
                } else {
                    result = eval("(function(){"+o.onChange+"})");
                    result.call({value: o.target.val()});
                }
            }

            if (o.shuffle) {
                that._shuffleKeys();
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/listview.js
$.widget( "metro.listview" , {

    version: "3.0.0",

    options: {
        onExpand: function(group){},
        onCollapse: function(group){},
        onActivate: function(list){},
        onListClick: function(list){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._initList();
        this._createEvents();

        element.data('listview', this);

    },

    _initList: function(){
        var that = this, element = this.element, o = this.options;
        var groups = element.find('.list-group');

        $.each(groups, function(){
            var group = $(this);
            if (group.hasClass('collapsed')) {
                group.find('.list-group-content').hide();
            }
        });

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        element.on('click', '.list-group-toggle', function(e){
            var toggle = $(this), parent = toggle.parent();
            var result;

            if (toggle.parent().hasClass('keep-open')) {
                return;
            }

            parent.toggleClass('collapsed');

            if (!parent.hasClass('collapsed')) {
                toggle.siblings('.list-group-content').slideDown('fast');
                if (typeof o.onExpand === 'function') {
                    o.onExpand(parent);
                } else {
                    if (typeof window[o.onExpand] === 'function') {
                        window[o.onExpand](parent);
                    } else {
                        result = eval("(function(){"+o.onExpand+"})");
                        result.call(parent);
                    }
                }
            } else {
                toggle.siblings('.list-group-content').slideUp('fast');
                if (typeof o.onCollapse === 'function') {
                    o.onCollapse(parent);
                } else {
                    if (typeof window[o.onCollapse] === 'function') {
                        window[o.onCollapse](parent);
                    } else {
                        result = eval("(function(){"+o.onCollapse+"})");
                        result.call(parent);
                    }
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });

        element.on('click', '.list', function(e){
            var list = $(this);
            var result;

            element.find('.list').removeClass('active');
            list.addClass('active');
            if (typeof o.onActivate === 'function') {
                o.onActivate(list);
            } else {
                if (typeof window[o.onActivate] === 'function') {
                    window[o.onActivate](list);
                } else {
                    result = eval("(function(){"+o.onActivate+"})");
                    result.call(list);
                }
            }
            if (typeof o.onListClick === 'function') {
                o.onListClick(list);
            } else {
                if (typeof window[o.onListClick] === 'function') {
                    window[o.onListClick](list);
                } else {
                    result = eval("(function(){"+o.onListClick+"})");
                    result.call(list);
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/notify.js
var _notify_container = false;
var _notifies = [];

var Notify = {

	_container: null,
	_notify: null,
	_timer: null,

	version: "3.0.0",

	options: {
		icon: '', // to be implemented
		caption: '',
		content: '',
		shadow: true,
		width: 'auto',
		height: 'auto',
		style: false, // {background: '', color: ''}
		position: 'right', //right, left
		timeout: 3000,
		keepOpen: false,
		type: 'default' //default, success, alert, info, warning
	},

	init: function(options) {
		this.options = $.extend({}, this.options, options);
		this._build();
		return this;
	},

	_build: function() {
		var that = this, o = this.options;

		this._container = _notify_container || $("<div/>").addClass("notify-container").appendTo('body');
		_notify_container = this._container;

		if (o.content === '' || o.content === undefined) {return false;}

		this._notify = $("<div/>").addClass("notify");

		if (o.type !== 'default') {
			this._notify.addClass(o.type);
		}

		if (o.shadow) {this._notify.addClass("shadow");}
		if (o.style && o.style.background !== undefined) {this._notify.css("background-color", o.style.background);}
		if (o.style && o.style.color !== undefined) {this._notify.css("color", o.style.color);}

		// add Icon
		if (o.icon !== '') {
			var icon = $(o.icon).addClass('notify-icon').appendTo(this._notify);
		}

		// add title
		if (o.caption !== '' && o.caption !== undefined) {
			$("<div/>").addClass("notify-title").html(o.caption).appendTo(this._notify);
		}
		// add content
		if (o.content !== '' && o.content !== undefined) {
			$("<div/>").addClass("notify-text").html(o.content).appendTo(this._notify);
		}

		// add closer
		var closer = $("<span/>").addClass("notify-closer").appendTo(this._notify);
		closer.on('click', function(){
			that.close(0);
		});

		if (o.width !== 'auto') {this._notify.css('min-width', o.width);}
		if (o.height !== 'auto') {this._notify.css('min-height', o.height);}

		this._notify.hide().appendTo(this._container).fadeIn('slow');
		_notifies.push(this._notify);

		if (!o.keepOpen) {
			this.close(o.timeout);
		}

	},

	close: function(timeout) {
		var self = this;

		if(timeout === undefined) {
			return this._hide();
		}

		setTimeout(function() {
			self._hide();
		}, timeout);

		return this;
	},

	_hide: function() {
		var that = this;

		if(this._notify !== undefined) {
			this._notify.fadeOut('slow', function() {
				$(this).remove();
				_notifies.splice(_notifies.indexOf(that._notify), 1);
			});
			return this;
		} else {
			return false;
		}
	},

	closeAll: function() {
		_notifies.forEach(function(notEntry) {
			notEntry.hide('slow', function() {
				notEntry.remove();
				_notifies.splice(_notifies.indexOf(notEntry), 1);
			});
		});
		return this;
	}
};

$.Notify = function(options) {
	return Object.create(Notify).init(options);
};

$.Notify.show = function(message, title, icon) {
	return $.Notify({
		content: message,
		caption: title,
		icon: icon
	});
};


// Source: js/widgets/panel.js
$.widget("metro.panel", {

    version: "3.0.0",

    options: {
        onExpand: function(panel){},
        onCollapse: function(panel){}
    },

    _create: function(){
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('collapsible')) {element.addClass('collapsible');}

        if (element.hasClass("collapsible")) {
            var toggle = element.children(".heading");
            var content = element.children(".content");

            toggle.on("click", function(){
                var result;

                if (element.hasClass("collapsed")) {
                    content.slideDown('fast', function(){
                        element.removeClass('collapsed');
                        if (typeof o.onExpand === 'function') {
                            o.onExpand(element);
                        } else {
                            if (typeof window[o.onExpand] === 'function') {
                                window[o.onExpand](element);
                            } else {
                                result = eval("(function(){"+o.onExpand+"})");
                                result.call(element);
                            }
                        }
                    });
                } else {
                    content.slideUp('fast', function(){
                        element.addClass('collapsed');
                        if (typeof o.onCollapse === 'function') {
                            o.onCollapse(element);
                        } else {
                            if (typeof window[o.onCollapse] === 'function') {
                                window[o.onCollapse](element);
                            } else {
                                result = eval("(function(){"+o.onCollapse+"})");
                                result.call(element);
                            }
                        }
                    });
                }

            });
        }

        element.data('panel', this);

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/plugin.js
$.widget( "metro.widget" , {

    version: "1.0.0",

    options: {
        someValue: null
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        element.data('widget', this);

    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/popovers.js
$.widget("metro.popover", {

    version: "3.0.0",

    options: {
        popoverText: '',
        popoverTimeout: 3000,
        popoverPosition: 'top', //top, bottom, left, right
        popoverBackground: 'bg-cyan',
        popoverColor: 'fg-white',
        popoverMode: 'none', //click, hover,
        popoverShadow: true,
        onPopup: function(popover){}
    },

    popover: {},

    _create: function(){
        var element = this.element;

        this.createPopover();
        element.data('popover', this);

    },

    createPopover: function(){
        var that = this, element,
            o = this.options;

        element = this.element;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        var popover, content_container, marker_class;

        popover = $("<div/>").addClass("popover").appendTo('body').hide();
        $("<div/>").appendTo(popover);

        if (o.popoverShadow) {
            popover.addClass("popover-shadow");
        }

        if (o.popoverBackground) {
            if (o.popoverBackground[0] === '#') {
                popover.css('background-color', o.popoverBackground);
            } else {
                popover.addClass(o.popoverBackground);
            }
        }
        if (o.popoverColor) {
            if (o.popoverColor[0] === '#') {
                popover.css('color', o.popoverColor);
            } else {
                popover.addClass(o.popoverColor);
            }
        }

        switch (o.popoverPosition) {
            case 'left': marker_class = 'marker-on-right'; break;
            case 'right': marker_class = 'marker-on-left'; break;
            case 'bottom': marker_class = 'marker-on-top'; break;
            default: marker_class = 'marker-on-bottom';
        }

        popover.css({
            position: 'fixed'
        });

        popover.addClass(marker_class);

        this.popover = popover;

        this.setText(o.popoverText);

        element.on(o.popoverMode, function(e){
            if (!popover.data('visible')) {
                that.show();
            }
        });

        $(window).scroll(function(){
            //that.popover.hide();
            if (that.popover.data('visible')) {
                that.setPosition();
            }
        });

    },

    setPosition: function(){
        var o = this.options, popover = this.popover, element = this.element;

        if (o.popoverPosition === 'top') {
            popover.css({
                top: element.offset().top - $(window).scrollTop() - popover.outerHeight() - 10,
                left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
            });
        } else if (o.popoverPosition === 'bottom') {
            popover.css({
                top: element.offset().top - $(window).scrollTop() + element.outerHeight() + 10,
                left: element.offset().left + element.outerWidth()/2 - popover.outerWidth()/2  - $(window).scrollLeft()
            });
        } else if (o.popoverPosition === 'right') {
            popover.css({
                top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                left: element.offset().left + element.outerWidth() - $(window).scrollLeft() + 10
            });
        } else if (o.popoverPosition === 'left') {
            popover.css({
                top: element.offset().top + element.outerHeight()/2 - popover.outerHeight()/2 - $(window).scrollTop(),
                left: element.offset().left - popover.outerWidth() - $(window).scrollLeft() - 10
            });
        }
        return this;
    },

    setText: function(text){
        this.popover.children('div').html(text);
    },

    show: function(){
        var o = this.options, popover = this.popover;

        this.setPosition();

        popover.fadeIn(function(){
            popover.data('visible', true);

            if (typeof o.onPopup === 'function') {
                o.onPopup(popover);
            } else {
                if (typeof window[o.onPopup] === 'function') {
                    window[o.onPopup](popover);
                } else {
                    var result = eval("(function(){"+o.onPopup+"})");
                    result.call(popover);
                }
            }

            setTimeout(function(){
                popover.fadeOut(
                    function(){popover.data('visible', false);}
                );
            }, o.popoverTimeout);
        });
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/preloaders.js
$.widget( "metro.preloader" , {

    version: "3.0.0",

    options: {
        type: 'ring',
        style: 'light'
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createStructure();

        element.data('preloader', this);

    },

    _createRing: function(){
        var that = this, element = this.element, o = this.options;
        var i, wrap, circle;

        for(i = 0; i < 5 ; i++) {
            wrap = $("<div/>").addClass('wrap').appendTo(element);
            circle = $("<div/>").addClass('circle').appendTo(wrap);
        }
    },

    _createMetro: function(){
        var that = this, element = this.element, o = this.options;
        var i, circle;

        for(i = 0; i < 5 ; i++) {
            circle = $("<div/>").addClass('circle').appendTo(element);
        }
    },

    _createSquare: function(){
        var that = this, element = this.element, o = this.options;
        var i, square;

        for(i = 0; i < 4 ; i++) {
            square = $("<div/>").addClass('square').appendTo(element);
        }
    },

    _createCycle: function(){
        var that = this, element = this.element, o = this.options;
        var i, cycle;

        //for(i = 0; i < 3 ; i++) {
            cycle = $("<div/>").addClass('cycle').appendTo(element);
        //}
    },

    _createStructure: function(){
        var that = this, element = this.element, o = this.options;

        element.addClass("preloader-"+o.type);
        if (o.style !== 'light') {
            element.addClass(o.style + '-style');
        }

        element.html('');

        switch (o.type) {
            case 'ring': this._createRing(); break;
            case 'metro': this._createMetro(); break;
            case 'square': this._createSquare(); break;
            case 'cycle': this._createCycle(); break;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/presenter.js
$.widget( "metro.presenter" , {

    version: "3.0.0",

    options: {
        height: '200',
        width: '100%',
        effect: 'random',
        duration: 1000,
        timeout: 2000,
        sceneTimeout: 2000,
        easing: 'swing'
    },

    _acts: undefined,
    _currentAct: 0,
    _actDone: true,
    _interval: undefined,
    _effects: ['top', 'bottom', 'left', 'right'],
    _actor_positions: [],


    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createPresenter();
        this._showScene();

        element.data('presenter', this);

    },

    _createPresenter: function (){
        var that = this, element = this.element, o = this.options;
        var acts = element.find('.act');

        acts.hide();

        this._acts = acts;

        element.css({
            height: o.height,
            width: o.width
        });
    },

    _showScene: function(){
        var that = this, element = this.element, o = this.options;

        this._interval = setInterval(function(){
            if (that._actDone) {
                that._currentAct++;

                if (that._currentAct == that._acts.length) {
                    that._currentAct = 0;
                }

                //that._closeAct();
                that._showAct();
            }
        }, 500);
    },

    _closeAct: function(){
        var that = this, element = this.element, o = this.options;
        var index = this._currentAct;
        setTimeout(function(){
            if (that._acts[index] !== undefined) $(that._acts[index]).fadeOut(1000, function(){
                that._actDone = true;
            });
        }, o.sceneTimeout);
    },

    _showAct: function(){
        var that = this, element = this.element, o = this.options;

        var act = $(this._acts[this._currentAct]);
        var actors = act.find('.actor');
        var i;

        this._actDone = false;

        act.fadeIn(1000);

        actors.css({
            opacity: 0,
            position: 'absolute',
            display: 'none'
        });

        i = 0;
        $.each(actors, function(){
            var actor = $(this), pos = {top: actor.data('position').split(",")[0], left: actor.data('position').split(",")[1]};//that._actor_positions[$(that._acts[that._currentAct]).attr('id')][actor.attr('id')];
            var actor_effect, actor_duration, actor_timeout, actor_easing;

            actor_effect = actor.data('effect') !== undefined ? actor.data('effect') : o.effect;
            if (actor_effect === 'random') {
                actor_effect = that._effects[Math.floor(Math.random() * that._effects.length)];
            }
            actor_duration = actor.data('duration') !== undefined ? actor.data('duration') : o.duration;
            actor_timeout = actor.data('timeout') !== undefined ? actor.data('timeout') : o.timeout;
            actor_easing = actor.data('easing') !== undefined ? actor.data('easing') : o.easing;

            if (actor_effect === 'top') {
                setTimeout(function(){
                    actor.css({
                        top: - (element.height()),
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'bottom') {
                setTimeout(function(){
                    actor.css({
                        top: element.height(),
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'left') {
                setTimeout(function(){
                    actor.css({
                        left: - element.width(),
                        top: pos.top,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else if (actor_effect === 'right') {
                setTimeout(function(){
                    actor.css({
                        left: element.width(),
                        top: pos.top,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, actor_easing, function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            } else { //fade
                setTimeout(function(){
                    actor.css({
                        top: pos.top,
                        left: pos.left,
                        display: 'block'
                    }).animate({
                        top: pos.top,
                        left: pos.left,
                        opacity: 1
                    }, actor_duration, 'swing', function(){if (actor[0] == actors[actors.length-1]) that._closeAct();});
                }, i * actor_timeout);
            }

            i++;
        });

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/progressbar.js
$.widget( "metro.progress" , {

    version: "3.0.0",

    options: {
        color: 'default',
        colors: false,
        value: 0,
        animate: false,
        onProgress: function(value){}
    },

    colorsDim: {},

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var bar = element.children('.bar:last-child');

        if (!element.hasClass('progress')) {
            element.addClass('progress');
        }

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (bar.length === 0) {
            bar = $('<div/>').addClass('bar').appendTo(element);
        }

        if (o.colors) {
            var p = 0;
            $.each(o.colors, function(c,v){
                that.colorsDim[c] = [p,v];
                p = v + 1;
            });
        }

        this.set(o.value);
        this.color(o.color);

        element.data('progress', this);

    },

    color: function(value){
        var element = this.element, o = this.options;
        var bar = element.children('.bar:last-child');
        var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);

        if (isOk) {
            bar.css({
                'background-color': value
            });
        } else {
            bar.removeClass(function(index, css){
                return (css.match (/(^|\s)bg-\S+/g) || []).join(' ');
            }).addClass(value);
        }

        o.color = value;
    },

    set: function(value){
        if (value !== undefined) {
            var element = this.element, o = this.options, colors = this.colorsDim;
            var bar = element.children('.bar:last-child');
            var that = this, gradient = [];

            if (parseInt(value) < 0) {
                return;
            }


            if (o.colors) {

                $.each(colors, function (c, v) {
                    if (value >= v[0] && value <= v[1]) {
                        that.color(c);
                        return true;
                    }
                });
            }

            o.value = value;

            if (o.animate !== false) {
                var ani_speed = isNaN(o.animate) ? 500 : o.animate;
                bar.animate({
                    width: o.value + '%'
                }, ani_speed, function(){
                    if (typeof o.onProgress === 'function') {
                        o.onProgress(value);
                    } else {
                        if (typeof window[o.onProgress] === 'function') {
                            window[o.onProgress](value);
                        } else {
                            var result = eval("(function(){"+o.onProgress+"})");
                            result.call(value);
                        }
                    }
                });
            } else {
                bar.css({
                    width: o.value + '%'
                });
                if (typeof o.onProgress === 'function') {
                    o.onProgress(value);
                } else {
                    if (typeof window[o.onProgress] === 'function') {
                        window[o.onProgress](value);
                    } else {
                        var result = eval("(function(){"+o.onProgress+"})");
                        result.call(value);
                    }
                }
            }

        } else {
            return this.options.value;
        }
    },

    value: function(value){
        return this.set(value);
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/rating.js
$.widget( "metro.rating" , {

    version: "3.0.0",

    options: {
        stars: 5,
        value: 0,
        half: true,
        static: false,
        showScore: true,
        scoreTitle: "Current: ",
        size: 'default',
        colorRate: false,
        onRate: function(v, s, w){return true;},
        onRated: function(v, s, w){}
    },

    _value: 0,
    _values: [],

    _create: function () {
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._value = parseFloat(o.value);
        this._values[0] = Math.ceil(o.stars * 1 / 3);
        this._values[1] = Math.ceil(o.stars * 2 / 3);
        this._values[2] = o.stars;

        this._createRating();
        this._createEvents();
        this._setValue(this._value);
        this._setScore(this._value);

        element.data('rating', this);

    },

    _createRating: function(){
        var element = this.element, o = this.options;
        var i, star, stars, score;

        if (!element.hasClass('rating')) {element.addClass('rating');}
        switch (o.size) {
            case 'small': element.addClass('small'); break;
            case 'large': element.addClass('large'); break;
            default: break;
        }

        if (o.static) {
            element.addClass('static');
        }

        for (i = 0; i < o.stars; i++) {
            star = $("<span/>").addClass('star').appendTo(element).data('star-value', i+1);
        }

        if (o.showScore) {
            score = $("<span/>").addClass('score').appendTo(element);
        }

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var stars;

        stars = element.find('.star');

        stars.on('click', function(e){

            if (o.static || element.hasClass('static') || element.data('static')) {
                return false;
            }

            var result, value = $(this).data('star-value'),
                star = this,
                rating = that;

            if (typeof o.onRate === 'function') {
                if (!o.onRate(value, star, rating)) {return false;}
            } else {
                if (typeof window[o.onRate] === 'function') {
                    if (!window[o.onRate](value, star, rating)) {return false;}
                } else {
                    result = eval("(function(){"+o.onRate+"})");
                    if (!result.call(value, star, rating)) {return false;}
                }
            }

            if (typeof o.onRated === 'function') {
                o.onRated(value, star, rating);
            } else {
                if (typeof window[o.onRated] === 'function') {
                    window[o.onRated](value, star, rating);
                } else {
                    result = eval("(function(){"+o.onRated+"})");
                    result.call(value, star, rating);
                }
            }

            that._value = $(this).data('star-value');
            that._setValue();
            that._setScore();

            e.preventDefault();
            e.stopPropagation();
        });
    },

    _setValue: function(){
        var stars, o = this.options, element = this.element;
        if (o.stars) {
            stars = element.find('.star').removeClass('on half');
            var index = Math.floor(this._value) - 1;
            var half = (this._value - Math.floor(this._value)) * 10 > 0;
            $(stars[index]).addClass('on');
            $(stars[index]).prevAll().addClass('on');
            if (half) {
                $(stars[index]).next().addClass('on half');
            }
        }

        if (o.colorRate) {
            element.removeClass('poor regular good');
            if (this._value <= this._values[0]) {element.addClass('poor');}
            else if (this._value > this._values[0] && this._value <= this._values[1]) {element.addClass('regular');}
            else if (this._value > this._values[1]) {element.addClass('good');}
        }
    },

    _setScore: function(){
        var value = this._value, element = this.element, o = this.options;

        if (value !== undefined) {
            element.find(".score").html(o.scoreTitle + value);
        }
    },

    value: function(value){
        if (value !== undefined) {
            this._value = value;
            this._setValue();
            this._setScore();
        } else {
            return this._value;
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/select.js
$.widget( "metro.select" , {

    version: "3.0.0",

    options: {
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;
        var func_options = [
            'templateResult',
            'templateSelection',
            'matcher',
            'initSelection',
            'query'
        ];

        $.each(element.data(), function(key, value){
            try {
                o[key] = $.parseJSON(value);
            } catch (e) {
                o[key] = value;
            }
        });

        func_options.map(function(func, index){
            if (o[func] !== undefined) {
                o[func] = window[o[func]];
            }
        });

        if (o.dropdownParent !== undefined) {
            o.dropdownParent = $(o.dropdownParent);
        }

        if($().select2) {
            try {
                element.find("select").select2(o);
            } catch (e) {

            }
        } else {
            console.log('You are trying to use support for Select2, but the plugin is not found!');
        }

        element.data('select', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/slider.js
$.widget("metro.slider", {

    version: "3.0.14",

    options: {
        position: 0,
        buffer: 0,
        accuracy: 0,
        color: 'default',
        completeColor: 'default',
        bufferColor: 'default',
        markerColor: 'default',
        colors: false,
        showHint: false,
        permanentHint: false,
        hintPosition: 'top',
        vertical: false,
        min: 0,
        max: 100,
        animate: false,
        minValue: 0,
        maxValue: 100,
        currValue: 0,
        returnType: 'value',
        target: false,

        onStartChange: function(){},
        onChange: function(value, slider){},
        onChanged: function(value, slider){},
        onBufferChange: function(value, slider){},

        _slider : {
            vertical: false,
            offset: 0,
            length: 0,
            marker: 0,
            ppp: 0,
            start: 0,
            stop: 0
        }
    },

    _create: function(){
        var that = this,
            element = this.element;


        var o = this.options,
            s = o._slider;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        element.data('internal_id', metroUtils.uniqueId());
        //console.log(element.data('internal_id'));

        o.accuracy = o.accuracy < 0 ? 0 : o.accuracy;
        o.min = o.min < 0 ? 0 : o.min;
        o.min = o.min > o.max ? o.max : o.min;
        o.max = o.max > 100 ? 100 : o.max;
        o.max = o.max < o.min ? o.min : o.max;
        o.position = this._correctValue(element.data('position') > o.min ? (element.data('position') > o.max ? o.max : element.data('position')) : o.min);
        o.buffer = this._correctValue(element.data('buffer') > o.min ? (element.data('buffer') > o.max ? o.max : element.data('buffer')) : o.min);
        o.colors = o.colors ? o.colors.split(",") : false;

        s.vertical = o.vertical;
        if (o.vertical && !element.hasClass('vertical')) {
            element.addClass('vertical');
        }
        if (o.permanentHint && !element.hasClass('permanent-hint')) {
            element.addClass('permanent-hint');
        }

        if (!o.vertical && o.hintPosition === 'bottom') {
            element.addClass('hint-bottom');
        }

        if (o.vertical && o.hintPosition === 'left') {
            element.addClass('hint-left');
        }

        this._createSlider();
        this._initPoints();
        this._placeMarker(o.position);
        this._showBuffer(o.buffer);

        var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';

        if (o.target && $(o.target)[0].tagName == 'INPUT') {
            $(o.target).on('keyup', function(){
                var input_value = this.value !== undefined ? this.value : 0;
                var new_value = Math.min(input_value, o.maxValue);
                that._placeMarker(that._realValueToValue(new_value));
                //console.log(that._realValueToValue(this.value));
            });
        }

        element.children('.marker').on(event_down, function (e) {
            that._startMoveMarker(e);
            if (typeof o.onStartChange === 'function') {
                o.onStartChange();
            } else {
                if (typeof window[o.onStartChange] === 'function') {
                    window[o.onStartChange]();
                } else {
                    var result = eval("(function(){"+o.onStartChange+"})");
                    result.call();
                }
            }
            e.preventDefault();
            e.stopPropagation();
        });

        element.on(event_down, function (e) {
            e.preventDefault();
            that._startMoveMarker(e);
        });

        element.data('slider', this);
    },

    _startMoveMarker: function(e){
        var element = this.element, o = this.options, that = this, hint = element.children('.slider-hint');
        var returnedValue;

        var event_move = isTouchDevice() ? 'touchmove' : 'mousemove';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseup mouseleave';

        $(document).on(event_move, function (event) {
            that._movingMarker(event);
            if (!element.hasClass('permanent-hint')) {
                hint.css('display', 'block');
            }
        });
        $(document).on(event_up, function () {
            $(document).off(event_move);
            $(document).off(event_up);
            element.data('value', o.position);
            element.trigger('changed', o.position);
            element.trigger('change', o.position);

            returnedValue = o.returnType === 'value' ? that._valueToRealValue(o.position) : o.position;

            if (!element.hasClass('permanent-hint')) {
                hint.css('display', 'none');
            }

            if (typeof o.onChanged === 'function') {
                o.onChanged(returnedValue, element);
            } else {
                if (typeof window[o.onChanged] === 'function') {
                    window[o.onChanged](returnedValue, element);
                } else {
                    var result = eval("(function(){"+o.onChanged+"})");
                    result.call(returnedValue, element);
                }
            }

        });

        this._initPoints();

        this._movingMarker(e);
    },

    _movingMarker: function (ev) {
        var element = this.element, o = this.options;
        var cursorPos,
            percents,
            valuePix,

            vertical = o._slider.vertical,
            sliderOffset = o._slider.offset,
            sliderStart = o._slider.start,
            sliderEnd = o._slider.stop,
            sliderLength = o._slider.length,
            markerSize = o._slider.marker;

        var event = !isTouchDevice() ? ev.originalEvent : ev.originalEvent.touches[0];

        //console.log(event);

        if (vertical) {
            cursorPos = event.pageY - sliderOffset;
        } else {
            cursorPos = event.pageX - sliderOffset;
        }

        if (cursorPos < sliderStart) {
            cursorPos = sliderStart;
        } else if (cursorPos > sliderEnd) {
            cursorPos = sliderEnd;
        }

        if (vertical) {
            valuePix = sliderLength - cursorPos - markerSize / 2;
        } else {
            valuePix = cursorPos - markerSize / 2;
        }

        percents = this._pixToPerc(valuePix);

        this._placeMarker(percents);

        o.currValue = this._valueToRealValue(percents);
        o.position = percents;

        var returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

        if (o.target) {
            if ($(o.target)[0].tagName == 'INPUT') {
                $(o.target).val(returnedValue);
            } else {
                $(o.target).html(returnedValue);
            }
            $(o.target).trigger('change', returnedValue);
        }

        if (typeof o.onChange === 'function') {
            o.onChange(returnedValue, element);
        } else {
            if (typeof window[o.onChange] === 'function') {
                window[o.onChange](returnedValue, element);
            } else {
                var result = eval("(function(){"+o.onChange+"})");
                result.call(returnedValue, element);
            }
        }
    },

    _placeMarker: function (value) {
        var size, size2, o = this.options, colorParts, colorIndex = 0, colorDelta, element = this.element,
            marker = this.element.children('.marker'),
            complete = this.element.children('.complete'),
            hint = this.element.children('.slider-hint'), hintValue,
            oldPos = this._percToPix(o.position);

        colorParts = o.colors.length;
        colorDelta = o._slider.length / colorParts;

        if (o._slider.vertical) {
            var oldSize = this._percToPix(o.position) + o._slider.marker,
                oldSize2 = o._slider.length - oldSize;
            size = this._percToPix(value) + o._slider.marker / 2;
            size2 = o._slider.length - size;
            this._animate(marker.css('top', oldSize2),{top: size2});
            this._animate(complete.css('height', oldSize),{height: size});

            if (colorParts) {
                colorIndex = Math.round(size / colorDelta)-1;
                complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
            }
            if (o.showHint) {
                hintValue = this._valueToRealValue(value);
                hint.html(hintValue).css('top', size2 - marker.height()/2 - hint.height()/4);
            }
        } else {
            size = this._percToPix(value);
            this._animate(marker.css('left', oldPos),{left: size});
            this._animate(complete.css('width', oldPos),{width: size});
            if (colorParts) {
                colorIndex = Math.round(size / colorDelta)-1;
                complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
            }
            if (o.showHint) {
                hintValue = this._valueToRealValue(value);
                hint.html(hintValue).css('left', size - marker.width()/2);
            }
        }
    },

    _valueToRealValue: function(value){
        var o = this.options;
        var real_value;

        var percent_value = (o.maxValue - o.minValue) / 100;

        real_value = value * percent_value + o.minValue;

        return Math.round(real_value);
    },

    _realValueToValue: function(value){
        var o = this.options, val_val;
        var percent_value = (o.maxValue - o.minValue) / 100;
        val_val = value / percent_value + o.minValue;
        return Math.round(val_val);
    },

    _animate: function (obj, val) {
        var o = this.options;
        //console.log(obj, val);
        if(o.animate) {
            obj.stop(true).animate(val);
        } else {
            obj.css(val);
        }
    },

    _pixToPerc: function (valuePix) {
        var valuePerc;
        valuePerc = (valuePix < 0 ? 0 : valuePix )* this.options._slider.ppp;
        return Math.round(this._correctValue(valuePerc));
    },

    _percToPix: function (value) {
        ///console.log(this.options._slider.ppp, value);
        if (this.options._slider.ppp === 0) {
            return 0;
        }
        return Math.round(value / this.options._slider.ppp);
    },

    _correctValue: function (value) {
        var o = this.options;
        var accuracy = o.accuracy;
        var max = o.max;
        var min = o.min;
        if (accuracy === 0) {
            return value;
        }
        if (value === max) {
            return max;
        }
        if (value === min) {
            return min;
        }
        value = Math.floor(value / accuracy) * accuracy + Math.round(value % accuracy / accuracy) * accuracy;
        if (value > max) {
            return max;
        }
        if (value < min) {
            return min;
        }
        return value;
    },

    _initPoints: function(){
        var o = this.options, s = o._slider, element = this.element;

        if (s.vertical) {
            s.offset = element.offset().top;
            s.length = element.height();
            s.marker = element.children('.marker').height();
        } else {
            s.offset = element.offset().left;
            s.length = element.width();
            s.marker = element.children('.marker').width();
        }

        s.ppp = o.max / (s.length - s.marker);
        s.start = s.marker / 2;
        s.stop = s.length - s.marker / 2;
    },

    _createSlider: function(){
        var element = this.element,
            o = this.options,
            complete, marker, hint, buffer, back;

        element.html('');

        back = $("<div/>").addClass("slider-backside").appendTo(element);
        complete = $("<div/>").addClass("complete").appendTo(element);
        buffer = $("<div/>").addClass("buffer").appendTo(element);
        marker = $("<a/>").addClass("marker").appendTo(element);

        if (o.showHint) {
            hint = $("<span/>").addClass("slider-hint").appendTo(element);
        }

        if (o.color !== 'default') {
            if (metroUtils.isColor(o.color)) {
                back.css('background-color', o.color);
            } else {
                back.addClass(o.color);
            }
        }
        if (o.completeColor !== 'default') {
            if (metroUtils.isColor(o.completeColor)) {
                complete.css('background-color', o.completeColor);
            } else {
                complete.addClass(o.completeColor);
            }
        }
        if (o.bufferColor !== 'default') {
            if (metroUtils.isColor(o.bufferColor)) {
                buffer.css('background-color', o.bufferColor);
            } else {
                buffer.addClass(o.bufferColor);
            }
        }
        if (o.markerColor !== 'default') {
            if (metroUtils.isColor(o.markerColor)) {
                marker.css('background-color', o.markerColor);
            } else {
                marker.addClass(o.markerColor);
            }
        }
    },

    value: function (value) {
        var element = this.element, o = this.options, returnedValue;

        if (typeof value !== 'undefined') {

            value = value > o.max ? o.max : value;
            value = value < o.min ? o.min : value;

            this._placeMarker(parseInt(value));
            o.position = parseInt(value);

            returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;

            if (o.target) {
                if ($(o.target)[0].tagName == 'INPUT') {
                    $(o.target).val(returnedValue);
                } else {
                    $(o.target).html(returnedValue);
                }
                $(o.target).trigger('change', returnedValue);
            }

            if (typeof o.onChange === 'function') {
                o.onChange(returnedValue, element);
            } else {
                if (typeof window[o.onChange] === 'function') {
                    window[o.onChange](returnedValue, element);
                } else {
                    var result = eval("(function(){"+o.onChange+"})");
                    result.call(returnedValue, element);
                }
            }

            //if (typeof o.onChanged === 'function') {
            //    o.onChanged(returnedValue, element);
            //} else {
            //    if (typeof window[o.onChanged] === 'function') {
            //        window[o.onChanged](returnedValue, element);
            //    } else {
            //        var result = eval("(function(){"+o.onChanged+"})");
            //        result.call(returnedValue, element);
            //    }
            //}

            return this;
        } else {
            returnedValue = o.returnType === 'value' ? this._valueToRealValue(o.position) : o.position;
            return returnedValue;
        }
    },

    _showBuffer: function(value){
        var size, oldSize, o = this.options, element = this.element,
            buffer = this.element.children('.buffer');

        oldSize = o.buffer;
        size = value == 100 ? 99.9 : value;

        if (o._slider.vertical) {
            this._animate(buffer.css('height', oldSize+'%'),{height: size+'%'});

        } else {
            this._animate(buffer.css('width', oldSize+'%'),{width: size+'%'});
        }
    },

    buffer: function (value) {
        var element = this.element, o = this.options, returnedValue;

        if (typeof value !== 'undefined') {

            value = value > 100 ? 100 : value;
            value = value < 0 ? 0 : value;

            this._showBuffer(parseInt(value));
            o.buffer = parseInt(value);

            returnedValue = o.buffer;

            if (typeof o.onBufferChange === 'function') {
                o.onBufferChange(returnedValue, element);
            } else {
                if (typeof window[o.onBufferChange] === 'function') {
                    window[o.onBufferChange](returnedValue, element);
                } else {
                    var result = eval("(function(){"+o.onBufferChange+"})");
                    result.call(returnedValue, element);
                }
            }

            return this;
        } else {
            returnedValue = o.buffer;
            return returnedValue;
        }
    },

    _destroy: function(){},

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/stepper.js
$.widget("metro.stepper", {

    version: "3.0.0",

    options: {
        steps: 3,
        start: 1,
        type: 'default',
        clickable: true,
        onStep: function(index, step){},
        onStepClick: function(index, step){}
    },

    _create: function(){
        var element = this.element, o = this.options, element_id = element.attr('id');

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (!element.hasClass('stepper')) {element.addClass('stepper');}
        if (element_id === undefined) {
            element_id = metroUtils.uniqueId(this.widgetName+'_');
            element.attr('id', element_id);
        }

        this._createStepper();
        if (o.clickable) {this._createEvents();}
        this._positioningSteps();
        this._stepTo(o.start);

        element.data('stepper', this);

    },

    _createEvents: function(){
        var that = this, element = this.element, o= this.options;
        element.on('click', 'li', function(e){
            var step = $(this).data('step');


            if (typeof o.onStepClick === 'function') {
                o.onStepClick(step - 1, step);
            } else {
                if (typeof window[o.onStepClick] === 'function') {
                    window[o.onStepClick](step - 1, step);
                } else {
                    var result = eval("(function(){"+o.onStepClick+"})");
                    result.call(step - 1, step);
                }
            }

            element.trigger("stepclick", step);
        });
    },

    _createStepper: function(){
        var element = this.element, o= this.options;
        var i, ul, li;

        ul = $("<ul/>");

        switch(o.type) {
            case 'diamond': element.addClass('diamond'); break;
            case 'cycle': element.addClass('cycle'); break;
        }

        for(i=0;i< o.steps;i++) {
            li = $("<li/>").data('step', i + 1).appendTo(ul);
        }
        ul.appendTo(element);
    },

    _positioningSteps: function(){
        var that = this, element = this.element, o = this.options,
            steps = element.find("li"),
            element_width = element.width(),
            steps_length = steps.length-1,
            step_width = $(steps[0]).width();

        $.each(steps, function(i, step){
            var left = i === 0 ? 0 : (element_width - step_width)/steps_length * i;
            console.log(element_width);
            $(step).animate({
                left: left
            });
        });
    },

    _stepTo: function(step){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        steps.removeClass('current').removeClass('complete');

        $.each(steps, function(i, s){
            if (i < step - 1) {$(s).addClass('complete');}
            if (i === step - 1) {
                $(s).addClass('current') ;

                if (typeof o.onStep === 'function') {
                    o.onStep(i+1, s);
                } else {
                    if (typeof window[o.onStep] === 'function') {
                        window[o.onStep](i+1, s);
                    } else {
                        var result = eval("(function(){"+o.onStep+"})");
                        result.call(i+1, s);
                    }
                }
            }
        });
    },

    stepTo: function(step){
        this._stepTo(step);
    },

    first: function(){
        var o = this.options;
        o.start = 1;
        this._stepTo(o.start);
    },

    last: function(){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        o.start = steps.length;
        this._stepTo(o.start);
    },

    next: function(){
        var element = this.element, o = this.options;
        var steps = element.find("li");

        if (o.start + 1 > steps.length) {return;}

        o.start++;
        this._stepTo(o.start);
    },

    prior: function(){
        var o = this.options;

        if (o.start - 1 === 0) {return;}

        o.start--;
        this._stepTo(o.start);
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});


// Source: js/widgets/streamer.js
$.widget("metro.streamer", {

    version: "3.0.0",

    options: {
        scrollBar: false,
        meterStart: 9,
        meterStop: 19,
        meterInterval: 20,
        slideToTime: "default",
        slideSleep: 1000,
        slideSpeed: 1000,
        onClick: function(event){}
    },

    _create: function(){
        var that = this, element = this.element, o = this.options,
            streams = element.find(".stream"),
            events = element.find(".event"),
            events_container = element.find(".events"),
            events_area = element.find(".events-area"),
            groups = element.find(".event-group"),
            event_streams = element.find(".event-stream");


        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        element.data('streamSelect', -1);

        var meter = $("<ul/>").addClass("meter");
        var i, j, m, start = o.meterStart, stop = o.meterStop, interval = o.meterInterval;

        var _intervals = [];
        for (i = start; i<stop; i++) {
            for (j = 0; j < 60; j+=interval) {
                m = (i<10?"0"+i:i)+":"+(j<10?"0"+j:j);
                $("<li/>").addClass("js-interval-"+ m.replace(":", "-")).html("<em>"+m+"</em>").appendTo(meter);
                _intervals.push(m);
            }
        }
        element.data("intervals", _intervals);
        meter.insertBefore(element.find(".events-grid"));

        //console.log(element.data("intervals"));

        // Re-Calc all event-stream width and set background for time
        element.find(".event-stream").each(function(i, s){
            var event_stream_width = 0;
            var events = $(s).find(".event");

            events.each(function(i, el){
                event_stream_width += $(el).outerWidth() + parseInt($(el).css('margin-left'));
            });

            $(s).css({
                width: (event_stream_width + ( (events.length-1) * 2 ) + 1)
            });

            $(s).find(".time").css("background-color", $(streams[i]).css('background-color'));
        });

        // Set scrollbar
        events_container.css({
            'overflow-x': (o.scrollBar ? 'scroll' : 'hidden')
        });

        // Set streamer height
        element.css({
            height: element.find(".streams").outerHeight() + (o.scrollBar ? 20 : 0)
        });

        // Re-Calc events-area width
        var events_area_width = 0;
        groups.each(function(i, el){
            events_area_width += $(el).outerWidth();
        });
        events_area_width += ( (groups.length-1) * 2 ) + 10;
        events_area.css('width', events_area_width);

        events.each(function(i, el){
            addTouchEvents(el);
        });

        element.mousewheel(function(event, delta){
            var scroll_value = delta * 50;
            events_container.scrollLeft(events_container.scrollLeft() - scroll_value);
            return false;
        });

        streams.each(function(i, s){
            $(s).mousedown(function(e){
                if (element.data('streamSelect') == i) {
                    events.removeClass('event-disable');
                    element.data('streamSelect', -1);
                } else {
                    element.data('streamSelect', i);
                    events.addClass('event-disable');
                    $(event_streams[i]).find(".event").removeClass("event-disable");
                }
            });
        });

        this._createEvents();

        this.slideToTime(o.slideToTime, o.slideSleep, o.slideSpeed);

        element.data('streamer', this);
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var events = element.find(".event");

        events.on('click', function(e){

            var event = $(this);

            if (e.ctrlKey) {
                $(this).toggleClass("selected");
            }

            if (typeof o.onClick === 'function') {
                o.onClick(event);
            } else {
                if (typeof window[o.onClick] === 'function') {
                    window[o.onClick](event);
                } else {
                    var result = eval("(function(){"+o.onClick+"})");
                    result.call(event);
                }
            }

            e.preventDefault();
        });

        element.find(".js-go-previous-time").on('click', function(e){
            var next_index = element.data("intervals").indexOf(element.data("current-time"));
            if (next_index == 0) {
                return;
            }
            next_index--;
            var new_time = element.data("intervals")[next_index];
            that.slideToTime(new_time, 0, o.slideSpeed);
        });

        element.find(".js-go-next-time").on('click', function(e){
            var next_index = element.data("intervals").indexOf(element.data("current-time"));
            if (next_index == element.data("intervals").length - 1) {
                return;
            }
            next_index++;
            var new_time = element.data("intervals")[next_index];
            that.slideToTime(new_time, 0, o.slideSpeed);
        });

        element.find(".js-show-all-streams").on("click", function(e){
            element.find(".event").removeClass("event-disable");
            element.data('streamSelect', -1);
            e.preventDefault();
        });


        element.find(".js-schedule-mode").on("click", function(e){
            $(this).toggleClass("active");
            element.data("schedule-mode", $(this).hasClass("inverse"));
            e.preventDefault();
        });
    },

    slideToTime: function(time, sleep, speed){
        var that = this, element = this.element,
            interval, _time;

        if (time === 'default') {
            interval = element.find(".meter li")[0];
            time = interval.className.replace("js-interval-", "").replace("-", ":");
        } else {
            _time = time.split(":");

            if (_time[0].length === 1) {
                time = '0' + time;
            }

        }

        interval = element.find(".meter li.js-interval-"+time.replace(":", "-"))[0];

        setTimeout(function(){
            element.find(".events").animate({
                scrollLeft:  (interval.offsetLeft - $('.streams').width())
            }, speed, function(){
                that._afterSlide();
            });
        }, sleep);

        element.data("current-time", time);
    },

    _afterSlide: function(){

    },

    _destroy: function(){

    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/tabcontrol.js
$.widget( "metro.tabcontrol" , {

    version: "3.0.0",

    options: {
        openTarget: false,
        saveState: false,
        onTabClick: function(tab){return true;},
        onTabChange: function(tab){},
        _current: {tab: false, frame: false}
    },


    _create: function () {
        var that = this, element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');
        var tab, target, frame;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {

            var stored_target = window.localStorage.getItem(element.attr('id')+"-stored-tab");
            if (stored_target && stored_target !== 'undefined') {
                tab = element.find("a[href='"+stored_target+"']");
                if (tab) {
                    target = tab.attr('href');
                    frame = target && metroUtils.isUrl(target) ? false : $(target);
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            }
        }

        if (!o._current.tab && o.openTarget !== false) {

            tab = element.find("a[href='"+ o.openTarget+"']");
            if (tab) {
                target = tab.attr('href');
                frame = target && metroUtils.isUrl(target) ? false : $(target);
                o._current.tab = tab;
                o._current.frame = frame;
            }
        }

        if (!o._current.tab) {

            $.each(tabs, function (i, v) {
                var tab = $(v), target = tab.attr('href'), frame = metroUtils.isUrl(target) ? false : $(target);
                if (tab.parent().hasClass('active') && !tab.parent().hasClass('disabled') && frame !== false) {
                    o._current.tab = tab;
                    o._current.frame = frame;
                }
            });
        }

        if (!o._current.tab) {

            for(var i = 0; i < tabs.length; i++) {
                if (!metroUtils.isUrl($(tabs[i]).attr('href')) && !$(tabs[i]).parent().hasClass('disabled')) {
                    o._current.tab = $(tabs[i]);
                    o._current.frame = $($(tabs[i]).attr('href'));
                    break;
                }
            }
        }

        this._createEvents();
        this._openTab();

        //this._hideTabs();
        //
        //$(window).on('resize', function(){
        //    that._hideTabs();
        //});

        element.data('tabcontrol', this);

    },

    _hideTabs: function(){
        var element = this.element;
        var w = element.outerWidth();
        var _tabs = element.children('.tabs').find('li:not(.non-visible-tabs)');
        var _nvt = element.children('.tabs').find('.non-visible-tabs').children('.d-menu');

        $.each(_tabs, function(){
            var $tab = $(this), tab = this;
            if (tab.offsetLeft + tab.offsetWidth + 30 > w) {
                var new_tab = $tab.clone(true);
                new_tab.appendTo(_nvt);
                $tab.remove();
            }
        });
    },

    _openTab: function(){
        var element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');

        tabs.parent().removeClass('active');
        frames.hide();

        o._current.tab.parent().addClass('active');
        o._current.frame.show();

        if (o.saveState && element.attr('id') !== undefined && element.attr('id').trim() !== '') {
            window.localStorage.setItem(element.attr('id')+"-stored-tab", o._current.tab.attr('href'));
        }
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var tabs = element.children('.tabs').find('li').children('a');
        var frames = element.children('.frames').children('div');

        element.on('click', '.tabs > li > a', function(e){
            var result;
            var tab = $(this), target = tab.attr('href'), frame = $(target);

            if (tab.parent().hasClass('disabled')) {return false;}

            if (typeof o.onTabClick === 'function') {
                if (!o.onTabClick(tab)) {return false;}
            } else {
                if (typeof window[o.onTabClick] === 'function') {
                    if (!window[o.onTabClick](tab)) {return false;}
                } else {
                    result = eval("(function(){"+o.onTabClick+"})");
                    if (!result.call(tab)) {return false;}
                }
            }

            if (metroUtils.isUrl(target)) {
                window.location.href = target;
                return true;
            }

            o._current.tab = tab;
            o._current.frame = frame;

            that._openTab();

            if (typeof o.onTabChange === 'function') {
                o.onTabChange(tab);
            } else {
                if (typeof window[o.onTabChange] === 'function') {
                    window[o.onTabChange](tab);
                } else {
                    result = eval("(function(){"+o.onTabChange+"})");
                    result.call(tab);
                }
            }

            e.preventDefault();
            e.stopPropagation();
        });
    },

    hideTab: function(tab){

    },

    showTab: function(tab){

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/tile.js
$.widget( "metro.tile" , {

    version: "3.0.0",

    options: {
        effect: 'slideLeft',
        period: 4000,
        duration: 700,
        easing: 'doubleSqrt',
        onClick: function(tile){}
    },

    _frames: {},
    _currentIndex: 0,
    _interval: 0,
    _outPosition: 0,
    _size: {},

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createTransformTile();
        this._createLiveTile();
        this._createEvents();

        element.data('tile', this);

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;
        var event = isTouchDevice() ? 'touchstart' : 'click';

        element.on(event, function(e){
            if (element[0].tagName === "A") {

            } else {
                if (typeof o.onClick === 'function') {
                    o.onClick(element);
                } else {
                    if (typeof window[o.onClick] === 'function') {
                        window[o.onClick](element);
                    } else {
                        var result = eval("(function(){"+o.onClick+"})");
                        result.call(element);
                    }
                }
            }
        });
    },

    _createLiveTile: function(){
        var that = this, element = this.element, o = this.options;
        var event_down = isTouchDevice() ? 'touchstart' : 'mouseenter';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseleave';

        this._frames = element.find(".live-slide");
        if (this._frames.length <= 1) {return false;}

        $.easing.doubleSqrt = function(t) {return Math.sqrt(Math.sqrt(t));};

        this._size = {
            'width': element.width(),
            'height': element.height()
        };

        element.on(event_down, function(){
            that.stop();
        });

        element.on(event_up, function(){
            that.start();
        });

        this.start();
    },

    start: function(){
        var that = this;
        this._interval = setInterval(function(){
            that._animate();
        }, this.options.period);
    },

    stop: function(){
        clearInterval(this._interval);
    },

    _animate: function(){
        var currentFrame = this._frames[this._currentIndex], nextFrame;
        this._currentIndex += 1;
        if (this._currentIndex >= this._frames.length) {this._currentIndex = 0;}
        nextFrame = this._frames[this._currentIndex];

        switch (this.options.effect) {
            case 'slideLeft': this._effectSlideLeft(currentFrame, nextFrame); break;
            case 'slideRight': this._effectSlideRight(currentFrame, nextFrame); break;
            case 'slideDown': this._effectSlideDown(currentFrame, nextFrame); break;
            case 'slideUpDown': this._effectSlideUpDown(currentFrame, nextFrame); break;
            case 'slideLeftRight': this._effectSlideLeftRight(currentFrame, nextFrame); break;
            default: this._effectSlideUp(currentFrame, nextFrame);
        }
    },

    _effectSlideLeftRight: function(currentFrame, nextFrame){
        if (this._currentIndex % 2 === 0) {
            this._effectSlideLeft(currentFrame, nextFrame);
        } else {
            this._effectSlideRight(currentFrame, nextFrame);
        }
    },

    _effectSlideUpDown: function(currentFrame, nextFrame){
        if (this._currentIndex % 2 === 0) {
            this._effectSlideUp(currentFrame, nextFrame);
        } else {
            this._effectSlideDown(currentFrame, nextFrame);
        }
    },

    _effectSlideUp: function(currentFrame, nextFrame){
        var _out = this._size.height;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({top: -_out}, options);
        $(nextFrame)
            .css({top: _out})
            .show()
            .animate({top: 0}, options);
    },

    _effectSlideDown: function(currentFrame, nextFrame){
        var _out = this._size.height;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({top: _out}, options);
        $(nextFrame)
            .css({top: -_out})
            .show()
            .animate({top: 0}, options);
    },

    _effectSlideLeft: function(currentFrame, nextFrame){
        var _out = this._size.width;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({left: _out * -1}, options);
        $(nextFrame)
            .css({left: _out})
            .show()
            .animate({left: 0}, options);
    },

    _effectSlideRight: function(currentFrame, nextFrame){
        var _out = this._size.width;
        var options = {
            'duration': this.options.duration,
            'easing': this.options.easing
        };

        $(currentFrame)
            .animate({left: _out}, options);
        $(nextFrame)
            .css({left: -_out})
            .show()
            .animate({left: 0}, options);
    },

    _createTransformTile: function(){
        var that = this, element = this.element, o = this.options;
        var dim = {w: element.width(), h: element.height()};
        var event_down = isTouchDevice() ? 'touchstart' : 'mousedown';
        var event_up = isTouchDevice() ? 'touchend' : 'mouseup';
        var event_leave = isTouchDevice() ? 'touchend' : 'mouseleave';


        element.on(event_down, function(e){
            var X = e.pageX - $(this).offset().left, Y = e.pageY - $(this).offset().top;
            var transform = 'top';

            if (X < dim.w * 1/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                transform = 'left';
            } else if (X > dim.w * 2/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                transform = 'right';
            } else if (X > dim.w*1/3 && X<dim.w*2/3 && Y > dim.h/2) {
                transform = 'bottom';
            }

            $(this).addClass("tile-transform-"+transform);

            //console.log(transform);

            if (element[0].tagName === 'A' && element.attr('href')) {
                setTimeout(function(){
                    document.location.href = element.attr('href');
                }, 500);
            }
        });

        element.on(event_up, function(){
            $(this)
                .removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
        element.on(event_leave, function(){
            $(this)
                .removeClass("tile-transform-left")
                .removeClass("tile-transform-right")
                .removeClass("tile-transform-top")
                .removeClass("tile-transform-bottom");
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/treeview.js
$.widget( "metro.treeview" , {

    version: "3.0.0",

    options: {
        doubleClick: true,
        onClick: function(leaf, node, pnode, tree){},
        onInputClick: function(leaf, node, pnode, tree){},
        onExpand: function(leaf, node, pnode, tree){},
        onCollapse: function(leaf, node, pnode, tree){}
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._initTree();
        this._createEvents();

        element.data('treeview', this);
    },


    _createCheckbox: function(leaf, parent){
        var input, checkbox, check;

        input = $("<label/>").addClass("input-control checkbox small-check").insertBefore(leaf);
        checkbox = $("<input/>").attr('type', 'checkbox').appendTo(input);
        check = $("<span/>").addClass('check').appendTo(input);
        if (parent.data('name') !== undefined) {
            checkbox.attr('name', parent.data('name'));
        }
        if (parent.data('id') !== undefined) {
            checkbox.attr('id', parent.data('id'));
        }
        if (parent.data('checked') !== undefined) {
            checkbox.prop('checked', parent.data('checked'));
        }
        if (parent.data('readonly') !== undefined) {
            checkbox.prop('disabled', parent.data('readonly'));
        }
        if (parent.data('disabled') !== undefined) {
            checkbox.prop('disabled', parent.data('disabled'));
            if (parent.data('disabled') === true) {
                parent.addClass('disabled');
            }
        }
        if (parent.data('value') !==  undefined) {
            checkbox.val(parent.data('value'));
        }
    },

    _createRadio: function(leaf, parent){
        var input, checkbox, check;

        input = $("<label/>").addClass("input-control radio small-check").insertBefore(leaf);
        checkbox = $("<input/>").attr('type', 'radio').appendTo(input);
        check = $("<span/>").addClass('check').appendTo(input);
        if (parent.data('name') !== undefined) {
            checkbox.attr('name', parent.data('name'));
        }
        if (parent.data('id') !== undefined) {
            checkbox.attr('id', parent.data('id'));
        }
        if (parent.data('checked') !== undefined) {
            checkbox.prop('checked', parent.data('checked'));
        }
        if (parent.data('readonly') !== undefined) {
            checkbox.prop('disabled', parent.data('readonly'));
        }
        if (parent.data('disabled') !== undefined) {
            checkbox.prop('disabled', parent.data('disabled'));
            if (parent.data('disabled') === true) {
                parent.addClass('disabled');
            }
        }
        if (parent.data('value') !==  undefined) {
            checkbox.val(parent.data('value'));
        }
    },

    _initTree: function(){
        var that = this, element = this.element, o = this.options;
        var leafs = element.find('.leaf');
        $.each(leafs, function(){
            var leaf = $(this), parent = leaf.parent('li'), ul = leaf.siblings('ul'), node = $(leaf.parents('.node')[0]);
            //var input, checkbox, check;

            if (parent.data('mode') === 'checkbox') {
                that._createCheckbox(leaf, parent);
            }

            if (parent.data('mode') === 'radio') {
                that._createRadio(leaf, parent);
            }

            if (ul.length > 0) {
                if (!parent.hasClass('node')) {
                    parent.addClass('node');
                }
            }
            if (parent.hasClass('collapsed')) {
                ul.hide();
            }
        });
    },

    _renderChecks: function(check){
        var element = this.element, that = this, o = this.options;
        var state = check.is(":checked");
        var parent = $(check.parent().parent());
        var children_checks = parent.children('ul').find('[type="checkbox"]');

        children_checks.prop('checked', state).removeClass('indeterminate');

        $.each(element.find('.node[data-mode=checkbox]').reverse(), function(){
            var node = $(this),
                ch = node.children('.input-control').find('[type="checkbox"]'),
                children_all = node.children('ul').find('[type="checkbox"]'),
                children_checked = node.children('ul').find('[type="checkbox"]:checked');

            ch.removeClass('indeterminate');
            if (children_checked.length === 0) {
                ch.prop("checked", false);
                ch.removeClass('indeterminate');
            } else
            if (children_checked.length > 0 && children_all.length > children_checked.length) {
                ch.prop('checked', true);
                ch.addClass('indeterminate');
            }
        });

    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        element.on('change', 'input:checkbox', function(){
            that._renderChecks($(this));
        });

        element.on('click', 'input', function(){
            var leaf = $(this),
                node = $(leaf.parents('.node')[0]),
                parent = leaf.parent('li'),
                check = leaf.siblings('.input-control').find('input:checkbox'),
                radio = leaf.siblings('.input-control').find('input:radio'),
                new_check_state,
                check_disabled;

            if (check.length > 0) {
                new_check_state = !check.is(":checked");
                check_disabled = check.is(":disabled");
                if (!check_disabled) {check.prop('checked', new_check_state);}
                that._renderChecks(check);
            }
            if (radio.length > 0) {
                check_disabled = radio.is(":disabled");
                if (!check_disabled) {radio.prop('checked', true);}
            }

            if (typeof o.onInputClick === 'function') {
                o.onInputClick(leaf, parent, node, that);
            } else {
                if (typeof window[o.onInputClick] === 'function') {
                    window[o.onInputClick](leaf, parent, node, that);
                } else {
                    var result = eval("(function(){"+o.onInputClick+"})");
                    result.call(leaf, parent, node, that);
                }
            }
        });

        element.on('click', '.leaf', function(){
            var leaf = $(this),
                node = $(leaf.parents('.node')[0]),
                parent = leaf.parent('li');

            element.find('.leaf').parent('li').removeClass('active');
            parent.addClass('active');

            if (typeof o.onClick === 'function') {
                o.onClick(leaf, parent, node, that);
            } else {
                if (typeof window[o.onClick] === 'function') {
                    window[o.onClick](leaf, parent, node, that);
                } else {
                    var result = eval("(function(){"+o.onClick+"})");
                    result.call(leaf, parent, node, that);
                }
            }
        });

        if (o.doubleClick) {
            element.on('dblclick', '.leaf', function (e) {
                var leaf = $(this), parent = leaf.parent('li'), node = $(leaf.parents('.node')[0]);
                var result;

                if (parent.hasClass("keep-open")) {
                    return false;
                }

                parent.toggleClass('collapsed');
                if (!parent.hasClass('collapsed')) {
                    parent.children('ul').fadeIn('fast');

                    if (typeof o.onExpand === 'function') {
                        o.onExpand(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onExpand] === 'function') {
                            window[o.onExpand](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){"+o.onExpand+"})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                } else {
                    parent.children('ul').fadeOut('fast');

                    if (typeof o.onCollapse === 'function') {
                        o.onCollapse(parent, leaf, node, that);
                    } else {
                        if (typeof window[o.onCollapse] === 'function') {
                            window[o.onCollapse](parent, leaf, node, that);
                        } else {
                            result = eval("(function(){"+o.onCollapse+"})");
                            result.call(parent, leaf, node, that);
                        }
                    }
                }
                e.stopPropagation();
                e.preventDefault();
            });
        }

        element.on('click', '.node-toggle', function(e){
            var leaf = $(this).siblings('.leaf'), parent = $(this).parent('li'), node = $(leaf.parents('.node')[0]);
            var result;

            if (parent.hasClass("keep-open")) {return false;}

            parent.toggleClass('collapsed');
            if (!parent.hasClass('collapsed')) {
                parent.children('ul').fadeIn('fast');
                if (typeof o.onExpand === 'function') {
                    o.onExpand(parent, leaf, node, that);
                } else {
                    if (typeof window[o.onExpand] === 'function') {
                        window[o.onExpand](parent, leaf, node, that);
                    } else {
                        result = eval("(function(){"+o.onExpand+"})");
                        result.call(parent, leaf, node, that);
                    }
                }
            } else {
                parent.children('ul').fadeOut('fast');
                if (typeof o.onCollapse === 'function') {
                    o.onCollapse(parent, leaf, node, that);
                } else {
                    if (typeof window[o.onCollapse] === 'function') {
                        window[o.onCollapse](parent, leaf, node, that);
                    } else {
                        result = eval("(function(){"+o.onCollapse+"})");
                        result.call(parent, leaf, node, that);
                    }
                }
            }
            e.stopPropagation();
            e.preventDefault();
        });
    },

    addLeaf: function(parent, name, data){
        var element = this.element;
        var leaf, li, ul;

        if (parent) {
            if (parent[0].tagName === "LI") {parent.addClass('node');}
            if (parent.children('.node-toggle').length === 0) {
                $("<span/>").addClass('node-toggle').appendTo(parent);
            }
        }

        ul = parent ? $(parent).children('ul') : element.children('ul');

        if (ul.length === 0) {
            ul = $("<ul/>").appendTo(parent ? parent : element);
        }

        li = $("<li/>").appendTo( ul );

        if (data !== undefined) {
            if (data.tagName !== undefined) {
                leaf = $("<"+data.tagName+"/>").addClass("leaf").appendTo(li);
            } else {
                leaf = $("<span/>").addClass("leaf").appendTo(li);
            }
        } else {
            leaf = $("<span/>").addClass("leaf").appendTo(li);
        }

        leaf.html(name);

        if (data !== undefined) {
            $.each(data, function(key, value){
                li.attr("data-"+key, value);
            });
            if (data.mode !== undefined) {
                switch (data.mode) {
                    case 'checkbox' : this._createCheckbox(leaf, li); break;
                    case 'radio' : this._createRadio(leaf, li); break;
                }
            }
        }

        return li;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/validator.js
$.widget( "metro.validator" , {

    version: "1.0.0",

    options: {
        showErrorState: true,
        showErrorHint: true,
        showRequiredState: true,
        showSuccessState: true,
        hintSize: 0,
        hintBackground: '#FFFCC0',
        hintColor: '#000000',
        hideError: 2000,
        hideHint: 5000,
        hintEasing: 'easeInQuad',
        hintEasingTime: 400,
        hintMode: 'hint', // hint, line
        hintPosition: 'right',
        focusInput: true,
        onBeforeSubmit: function(form, result){return true;},
        onErrorInput: function(input){},
        onSubmit: function(form){return true;}
    },

    _scroll: 0,

    funcs: {
        required: function(val){
            return val.trim() !== "";
        },
        minlength: function(val, len){
            if (len == undefined || isNaN(len) || len <= 0) {
                return false;
            }
            return val.trim().length >= len;
        },
        maxlength: function(val, len){
            if (len == undefined || isNaN(len) || len <= 0) {
                return false;
            }
            return val.trim().length <= len;
        },
        min: function(val, min_value){

            if (min_value == undefined || isNaN(min_value)) {
                return false;
            }
            if (!this.number(val)) {
                return false;
            }
            if (isNaN(val)) {
                return false;
            }
            return Number(val) >= Number(min_value);
        },
        max: function(val, max_value){
            if (max_value == undefined || isNaN(max_value)) {
                return false;
            }
            if (!this.number(val)) {
                return false;
            }
            if (isNaN(val)) {
                return false;
            }
            return Number(val) <= Number(max_value);
        },
        email: function(val){
            return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(val);
        },
        url: function(val){
            return /^(?:[a-z]+:)?\/\//i.test(val);
        },
        date: function(val){
            return !!(new Date(val) !== "Invalid Date" && !isNaN(new Date(val)));
        },
        number: function(val){
            return (val - 0) == val && (''+val).trim().length > 0;
        },
        digits: function(val){
            return /^\d+$/.test(val);
        },
        hexcolor: function(val){
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(val);
        },
        pattern: function(val, pat){
            if (pat == undefined) {
                return false;
            }
            var reg = new RegExp(pat);
            return reg.test(val);
        }
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        if (o.hintMode !== 'line') {
            o.hintMode = 'hint2';
        }

        this._scroll = $(window).scrollTop();

        this._createValidator();

        element.data('validator', this);

    },

    _createValidator: function(){
        var that = this, element = this.element, o = this.options;
        var inputs = element.find("[data-validate-func]");

        element.attr('novalidate', 'novalidate');

        if (o.showRequiredState) {
            $.each(inputs, function(){
                var input = $(this);
                if (input.parent().hasClass('input-control')) {
                    input.parent().addClass('required');
                } else {
                    input.addClass('required');
                }
            });
        }

        inputs.on('focus', function(){
        });

        //console.log(this._scroll);

        $(window).scroll(function(e){
            var st = $(this).scrollTop();
            var delta = isNaN(st - this._scroll) ? 0 : st - this._scroll;
            $(".validator-hint.hint2:not(.line)").css({
                top: '-='+delta
            });
            this._scroll = st;
        });

        if (element[0].onsubmit) {
            this._onsubmit = element[0].onsubmit;
            element[0].onsubmit = null;
        } else {
            this._onsubmit = null;
        }

        element[0].onsubmit = function(){
            return that._submit();
        };
    },

    _submit: function(){
        var that = this, element = this.element, o = this.options;
        var inputs = element.find("[data-validate-func]");
        var submit = element.find(":submit").attr('disabled', 'disabled').addClass('disabled');

        var result = 0;
        $('.validator-hint').hide();
        inputs.removeClass('error success');
        $.each(inputs, function(i, v){
            var input = $(v);
            if (input.parent().hasClass('input-control')) {
                input.parent().removeClass('error success');
            }
        });

        $.each(inputs, function(i, v){
            var this_result = true;
            var input = $(v);
            var func = [], arg = [];

            func = input.data('validateFunc') != undefined ? String(input.data('validateFunc')).split(",") : [];
            $.each(func, function(i, v){
                func[i] = String(func[i]).trim();
            });

            if (func.indexOf('pattern') !== -1) {
                arg.push(String(input.data('validateArg')));
            } else {
                arg  = input.data('validateArg') != undefined ? String(input.data('validateArg')).split(",") : [];
            }

            $.each(func, function(i, func_name){
                if (!this_result) return;
                var _args = arg[i] != undefined ? arg[i] : false;
                this_result = that.funcs[func_name.trim()](input.val(), _args);
            });

            if (!this_result) {
                if (typeof o.onErrorInput === 'function') {
                    o.onErrorInput(input);
                } else {
                    if (typeof window[o.onErrorInput] === 'function') {
                        window[o.onErrorInput](input);
                    } else {
                        result = eval("(function(){"+o.onErrorInput+"})");
                        result.call(input);
                    }
                }
            }

            if (!this_result && o.showErrorState) {
                that._showError(input);
            }
            if (!this_result && o.showErrorHint) {
                setTimeout(function(){
                    that._showErrorHint(input);
                }, i*100);

            }
            if (this_result && o.showSuccessState) {
                that._showSuccess(input);
            }
            if (!this_result && i == 0 && o.focusInput) {
                input.focus();
            }
            result += !this_result ? 1 : 0;
        });

        if (typeof o.onBeforeSubmit === 'function') {
            result += !o.onBeforeSubmit(element, result) ? 1 : 0;
        } else {
            if (typeof window[o.onBeforeSubmit] === 'function') {
                result += window[o.onBeforeSubmit](element, result) ? 1 : 0;
            } else {
                var f0 = eval("(function(){"+o.onBeforeSubmit+"})");
                result += f0.call(element, result) ? 1 : 0;
            }
        }

        if (result !== 0) {
            submit.removeAttr('disabled').removeClass('disabled');
            return false;
        }

        if (typeof o.onSubmit === 'function') {
            result = o.onSubmit(element[0]);
        } else {
            if (typeof window[o.onSubmit] === 'function') {
                result = window[o.onSubmit](element[0]);
            } else {
                var f = eval("(function(){"+o.onSubmit+"})");
                result = f.call(element[0]);
            }
        }

        submit.removeAttr('disabled').removeClass('disabled');

        return result;
    },

    _showSuccess: function(input){
        if (input.parent().hasClass('input-control')) {
            input.parent().addClass('success');
        } else {
            input.addClass('success');
        }
    },

    _showError: function(input){
        var o = this.options;

        if (input.parent().hasClass('input-control')) {
            input.parent().addClass('error');
        } else {
            input.addClass('error');
        }

        if (o.hideError && o.hideError > 0) {
            setTimeout(function(){
                input.parent().removeClass('error');
            }, o.hideError);
        }
    },

    _showErrorHint: function(input){
        var o = this.options,
            msg = input.data('validateHint'),
            pos = input.data('validateHintPosition') || o.hintPosition,
            mode = input.data('validateHintMode') || o.hintMode,
            background = input.data('validateHintBackground') || o.hintBackground,
            color = input.data('validateHintColor') || o.hintColor;

        var hint, top, left;

        if (msg === undefined) {
            return false;
        }

        hint = $("<div/>").addClass(mode+' validator-hint');//.appendTo(input.parent());
        hint.html(msg !== undefined ? this._format(msg, input.val()) : '');
        hint.css({
            'min-width': o.hintSize
        });

        if (metroUtils.isColor(background)) {
            hint.css('background-color', background);
        } else {
            hint.addClass(background);
        }

        if (metroUtils.isColor(color)) {
            hint.css('color', color);
        } else {
            hint.addClass(color);
        }

        // Position
        if (mode === 'line') {
            hint.addClass('hint2').addClass('line');
            hint.css({
                'position': 'relative',
                'width': input.parent().hasClass('input-control') ? input.parent().width() : input.width(),
                'z-index': 100
            });
            hint.appendTo(input.parent());
            hint.fadeIn(o.hintEasingTime, function(){
                setTimeout(function () {
                    hint.hide().remove();
                }, o.hideHint);
            });
        } else {
            hint.appendTo("body");
            // right
            if (pos === 'right') {
                left = input.offset().left + input.outerWidth() + 15 - $(window).scrollLeft();
                top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                hint.addClass(pos);
                hint.css({
                    top: top,
                    left: $(window).width() + 100
                });
                hint.show().animate({
                    left: left
                }, o.hintEasingTime, o.hintEasing, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else if (pos === 'left') {
                left = input.offset().left - hint.outerWidth() - 10 - $(window).scrollLeft();
                top = input.offset().top + input.outerHeight() / 2 - hint.outerHeight() / 2 - $(window).scrollTop() - 10;

                hint.addClass(pos);
                hint.css({
                    top: top,
                    left: -input.offset().left - hint.outerWidth() - 10
                });
                hint.show().animate({
                    left: left
                }, o.hintEasingTime, o.hintEasing, function () {
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else if (pos === 'top') {
                left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                top = input.offset().top - $(window).scrollTop() - hint.outerHeight() - 20;

                hint.addClass(pos);
                hint.css({
                    top: -hint.outerHeight(),
                    left: left
                }).show().animate({
                    top: top
                }, o.hintEasingTime, o.hintEasing, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            } else /*bottom*/ {
                left = input.offset().left + input.outerWidth()/2 - hint.outerWidth()/2  - $(window).scrollLeft();
                top = input.offset().top - $(window).scrollTop() + input.outerHeight();

                hint.addClass(pos);
                hint.css({
                    top: $(window).height(),
                    left: left
                }).show().animate({
                    top: top
                }, o.hintEasingTime, o.hintEasing, function(){
                    setTimeout(function () {
                        hint.hide().remove();
                    }, o.hideHint);
                });
            }
        }
    },

    _format: function( source, params ) {
        if ( arguments.length === 1 ) {
            return function() {
                var args = $.makeArray( arguments );
                args.unshift( source );
                return $.validator.format.apply( this, args );
            };
        }
        if ( arguments.length > 2 && params.constructor !== Array  ) {
            params = $.makeArray( arguments ).slice( 1 );
        }
        if ( params.constructor !== Array ) {
            params = [ params ];
        }
        $.each( params, function( i, n ) {
            source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
                return n;
            });
        });
        return source;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/video-player.js
$.widget( "metro.video" , {

    version: "3.0.14",

    options: {
        width: '100%',
        videoSize: 'hd', //sd
        controls: true,
        controlsPosition: 'bottom',
        controlsModel: 'full',

        loopButton: "<span class='mif-loop'></span>",
        stopButton: "<span class='mif-stop'></span>",
        playButton: "<span class='mif-play'></span>",
        pauseButton: "<span class='mif-pause'></span>",
        muteButton: "<span class='mif-volume-mute2'></span>",

        volumeLowButton: "<span class='mif-volume-low'></span>",
        volumeMediumButton: "<span class='mif-volume-medium'></span>",
        volumeHighButton: "<span class='mif-volume-high'></span>",

        screenMoreButton: "<span class='mif-enlarge'></span>",
        screenLessButton: "<span class='mif-shrink'></span>",
        fullScreenMode: "window",
        poster: false,
        src: false,
        loop: false,
        preload: false,
        autoplay: false,
        muted: false,
        volume:.5,
        logo: false,

        controlsHide: 1000
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        this._createPlayer();
        this._addControls();
        this._addEvents();

        element.data('video', this);
    },

    _createPlayer: function(){
        var that = this, element = this.element, o = this.options;
        var player_width = element.width(), player_height;
        var controls, video = element.find("video");

        if (o.videoSize == 'HD' && o.videoSize == 'hd') {
            player_height = 9 * player_width / 16;
        } else if (o.videoSize == 'SD' && o.videoSize == 'sd') {
            player_height = 3 * player_width / 4;
        } else {

        }

        element.addClass('video-player');

        element.css({
            height: player_height
        });

        if (video.length == 0) {
            video = $("<video/>").appendTo(element);
        }

        $.each(['muted', 'autoplay', 'controls', 'height', 'width', 'loop', 'poster', 'preload'], function(){
            video.removeAttr(this);
        });

        if (o.poster) {
            video.attr("poster", o.poster);
        }

        if (o.src) {
            if (o.src.indexOf('youtube') >= 0) {
                var youtube_reg = /v=[(\w)]+/ig;
                var youtube_id = youtube_reg.exec(o.src)[0].substring(2);

            } else {
                video.attr("src", o.src);
            }
        }

        if (o.loop) {
            video.attr("loop", "loop");
        }

        if (o.preload) {
            video.attr("preload", "auto");
        }

        if (o.autoplay) {
            video.attr("autoplay", "autoplay");
        }

        video[0].volume = o.volume;


        element.data('fullScreen', false);
        element.data('muted', false);
        element.data('duration', 0);
        element.data('timeInterval', undefined);
        element.data('played', false);
        element.data('volume', video[0].volume);

    },

    _addEvents: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var controls = element.find('.controls'),
            preloader = element.find('.video-preloader'),
            play_button = controls.find('.play'),
            stop_button = controls.find('.stop'),
            volume_button = controls.find('.volume'),
            screen_button = controls.find('.full'),
            volume_slider = controls.find('.volume-slider'),
            stream_slider = controls.find('.stream-slider'),
            info_box = controls.find('.info-box');
        var video = element.find("video"), video_obj = video[0];

        video.on('loadedmetadata', function(){
            element.data('duration', video_obj.duration.toFixed(0));
            info_box.html("00:00" + " / " + metroUtils.secondsToFormattedString(element.data('duration')) );
        });

        video.on("canplay", function(){
            controls.fadeIn();
            preloader.hide();
            var buffered = video_obj.buffered.length ? Math.round(Math.floor(video_obj.buffered.end(0)) / Math.floor(video_obj.duration) * 100) : 0;
            that._setBufferSize(buffered);
        });

        video.on('progress', function(){
            var buffered = video_obj.buffered.length ? Math.round(Math.floor(video_obj.buffered.end(0)) / Math.floor(video_obj.duration) * 100) : 0;
            that._setBufferSize(buffered);
        });

        video.on("timeupdate", function(){
            that._setInfoData();
            that._setStreamSliderPosition();
        });

        video.on("waiting", function(){
            preloader.show();
        });

        video.on("loadeddata", function(){
            preloader.hide();
        });

        video.on('ended', function(){
            that._stopVideo();
        });

        element.on("play", function(){
            if (isTouchDevice()) {
                setTimeout(function () {
                    controls.fadeOut();
                }, o.controlsHide);
            }
        });

        element.on("pause", function(){
        });

        element.on("stop", function(){
            controls.show();
        });

        element.on("mouseenter", function(){
            setTimeout(function(){
                controls.fadeIn();
            }, o.controlsHide);
        });

        element.on("mouseleave", function(){
            if (video_obj.currentTime > 0) {
                setTimeout(function () {
                    controls.fadeOut();
                }, o.controlsHide);
            }
        });

        if (isTouchDevice()) {
            element.on("touchstart", function(){
                if (video_obj.currentTime > 0) {
                    setTimeout(function () {
                        if (controls.css('display') == 'none') {
                            controls.fadeIn();
                        } else {
                            controls.fadeOut();
                        }
                    }, o.controlsHide);
                }
            });
        }
    },

    _setInfoData: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var info_box = element.find(".controls .info-box");
        var currentTime = Math.round(video_obj.currentTime);

        info_box.html(metroUtils.secondsToFormattedString(currentTime) + " / " + metroUtils.secondsToFormattedString(element.data('duration')));
    },

    _setStreamSliderPosition: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var slider = element.find(".stream-slider").data("slider");
        slider.value(Math.round(video_obj.currentTime * 100 / element.data('duration')));
    },

    _setBufferSize: function(value){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var slider = element.find(".stream-slider").data("slider");
        slider.buffer(Math.round(value));
    },

    _stop: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var stop_button = element.find(".controls .stop");
        var play_button = element.find(".controls .play");

        video_obj.pause();
        video_obj.currentTime = 0;
        play_button.html(o.playButton);
        stop_button.attr("disabled", "disabled");
        element.data('played', false);
        element.find(".stream-slider").data('slider').value(0);
        element.trigger('stop');
    },

    _play: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var play_button = element.find(".controls .play");
        var stop_button = element.find(".controls .stop");

        if (video_obj.paused) {
            play_button.html(o.pauseButton);
            video_obj.play();
            stop_button.removeAttr("disabled");
            element.data('played', true);
            element.trigger('play');
        } else {
            play_button.html(o.playButton);
            video_obj.pause();
            element.data('played', false);
            element.trigger('pause');
        }
    },

    _addControls: function(){
        var that = this, element = this.element, element_obj = element[0], o = this.options;
        var preloader, logo, controls, loop_button, play_button, stop_button, volume_button, screen_button, volume_slider, stream_slider, info_box, volume_slider_wrapper, stream_slider_wrapper;
        var video = element.find("video"), video_obj = video[0];


        if (o.logo) {
            logo = $("<img/>").addClass('video-logo').appendTo(element);
            logo.attr("src", o.logo);
        }

        preloader = $("<div/>").addClass("video-preloader")
            .attr("data-role", "preloader")
            .attr("data-type", "cycle")
            .attr("data-style", "color")
            .appendTo(element);

        controls = $("<div/>").addClass("controls").appendTo(element);
        controls.addClass('position-'+o.controlsPosition);

        stream_slider_wrapper = $("<div/>").addClass('stream-slider-wrapper').appendTo(controls);
        stream_slider = $("<div/>").addClass('slider stream-slider').appendTo(stream_slider_wrapper);
        stream_slider.slider({
            showHint: true,
            animate: false,
            markerColor: 'bg-red',
            completeColor: 'bg-cyan',
            onStartChange: function(){
                video_obj.pause();
            },
            onChanged: function(value, slider){
                if (video_obj.seekable.length > 0)
                    video_obj.currentTime = (element.data('duration') * value / 100).toFixed(0);

                if (element.data('played') && video_obj.currentTime >= 0) {
                    video_obj.play();
                }
            }
        });
        stream_slider.data('slider').value(0);

        if (o.loopButton !== false) {
            loop_button = $("<button/>").addClass("square-button small-button1 control-button loop no-phone").html(o.loopButton).appendTo(controls);
            loop_button.on("click", function () {
                loop_button.toggleClass('active');
                if (loop_button.hasClass('active')) {
                    video.attr("loop", "loop");
                } else {
                    video.removeAttr("loop");
                }
            });
        }

        if (o.playButton !== false) {
            play_button = $("<button/>").addClass("square-button small-button1 control-button play").html(o.playButton).appendTo(controls);
            play_button.on("click", function () {
                that._play();
            });
        }


        if (o.stopButton !== false) {
            stop_button = $("<button/>").addClass("square-button small-button1 control-button stop no-phone").html(o.stopButton).appendTo(controls).attr("disabled", "disabled");
            stop_button.on("click", function () {
                that._stop();
            });
        }

        info_box = $("<div/>").addClass('info-box no-small-phone').appendTo(controls);
        info_box.html("00:00 / 00:00");

        if (o.screenMoreButton !== false) {
            screen_button = $("<button/>").addClass("square-button small-button1 control-button full").html(o.screenMoreButton).appendTo(controls);
            screen_button.on("click", function () {
                element.data('fullScreen', !element.data('fullScreen'));

                if (element.data('fullScreen')) {
                    screen_button.html(o.screenLessButton);
                } else {
                    screen_button.html(o.screenMoreButton);
                }

                if (o.fullScreenMode === 'window') {
                    element.toggleClass("full-screen");
                } else {
                    if (element.data('fullScreen')) {


                        if (element_obj.requestFullscreen) {
                            element_obj.requestFullscreen();
                        } else if (element_obj.msRequestFullscreen) {
                            element_obj.msRequestFullscreen();
                        } else if (element_obj.mozRequestFullScreen) {
                            element_obj.mozRequestFullScreen();
                        } else if (element_obj.webkitRequestFullscreen) {
                            element_obj.webkitRequestFullscreen();
                        }
                    } else {

                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                    }
                }

                if (element.data('fullScreen')) {
                    $(document).on("keyup.metro_video_player", function (e) {
                        if (e.keyCode == 27) {
                            screen_button.html(o.screenMoreButton);
                            element.data('fullScreen', false);
                            if (element.hasClass('full-screen')) {
                                element.removeClass("full-screen");
                            }
                        }
                    });
                } else {
                    $(document).off("keyup.metro_video_player");
                }
            });
        }

        volume_slider_wrapper = $("<div/>").addClass('control-slider volume-slider-wrapper place-right').appendTo(controls);
        volume_slider = $("<div/>").addClass('slider volume-slider').appendTo(volume_slider_wrapper);
        volume_slider.slider({
            showHint: true,
            animate: false,
            markerColor: 'bg-red',
            completeColor: 'bg-green',
            onChange: function(value, slider){
                video_obj.volume = value/100;
                that._setupVolumeButton();
            }
        });
        volume_slider.data('slider').value(video_obj.volume * 100);

        volume_button = $("<button/>").addClass("square-button small-button1 control-button volume place-right").html(o.volumeLowButton).appendTo(controls);
        volume_button.on("click", function(){
            var volume_slider = element.find(".volume-slider").data("slider");

            element.data('muted', !element.data('muted'));

            if (element.data('muted')) {
                element.data("volume", video_obj.volume);
                volume_button.html(o.muteButton);
                volume_slider.value(0);
            } else {
                video_obj.volume = element.data("volume");
                volume_slider.value(element.data("volume")*100);
                that._setupVolumeButton();
            }

            video_obj.muted = element.data('muted');
        });
        this._setupVolumeButton();

        controls.hide();
    },

    _setupVolumeButton: function(){
        var that = this, element = this.element, o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var controls = element.find('.controls'), volume_button = controls.find('.volume');

        var current_volume = video_obj.volume;
        if (current_volume > 0 && current_volume < 0.3) {
            volume_button.html(o.volumeLowButton);
        } else if (current_volume >= 0.3 && current_volume < 0.6) {
            volume_button.html(o.volumeMediumButton);
        } else if (current_volume >= 0.6 && current_volume <= 1) {
            volume_button.html(o.volumeHighButton);
        } else {
            volume_button.html(o.muteButton);
        }
    },

    _setOptionsFromDOM: function(){
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    },

    play: function(file, type) {
        var that = this, element = this.element, o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var source;

        this._stop();

        video.find("source").remove();
        video.removeAttr("src");

        source = $("<source>").attr("src", file);
        if (type != undefined) {
            source.attr("type", type);
        }
        video_obj.load();
        source.appendTo(video);

        this._play();
    },

    stop: function(){
        this._stop();
    },

    pause: function(){
        var that = this, element = this.element, o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var play_button = element.find(".play");

        play_button.html(o.playButton);
        video_obj.pause();
        element.data('played', false);
        element.trigger('pause');
    },

    resume: function(){
        var that = this, element = this.element, o = this.options;
        var video = element.find("video"), video_obj = video[0];
        var play_button = element.find(".play");
        var stop_button = element.find(".stop");

        play_button.html(o.pauseButton);
        video_obj.play();
        stop_button.removeAttr("disabled");
        element.data('played', true);
        element.trigger('play');
    }
});

// Source: js/widgets/window.js
$.widget( "metro.window" , {

    version: "3.0.0",

    options: {
        parent: 'default',
        captionStyle: false,
        contentStyle: false,
        buttons: {
            btnMin: false,
            btnMax: false,
            btnClose: false
        },
        title: false,
        content: false,
        icon: false,
        type: 'default', // 'modal'
        size: false, // {width: x, height: y}

        onBtnMinClick: function(e){e.preventDefault();},
        onBtnMaxClick: function(e){e.preventDefault();},
        onBtnCloseClick: function(e){e.preventDefault();},
        onShow: function(e){e.preventDefault();},
        onHide: function(e){e.preventDefault();}
    },

    _create: function () {
        var element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createWindow();

        element.data('window', this);

    },

    _createWindow: function(){
        var that = this, element = this.element, o = this.options;
        var wind = element, capt, cont;

        wind.addClass("window");
        capt = $("<div/>").addClass("window-caption");
        cont = $("<div/>").addClass("window-content");

        if (o.icon || o.title) {capt.appendTo(wind);}
        cont.appendTo(wind);

        if (typeof o.size === 'object') {
            $.each(o.size, function(key, value){
                cont.css(key, value);
            });
        }

        if (o.captionStyle && typeof o.captionStyle === 'object') {
            $.each(o.captionStyle, function(key, value){
                if (metroUtils.isColor(value)) {
                    capt.css(key, value + " !important");
                } else {
                    capt.addClass(value);
                }
            });
        }

        if (o.contentStyle && typeof o.contentStyle === 'object') {
            $.each(o.contentStyle, function(key, value){
                if (metroUtils.isColor(value)) {
                    cont.css(key, value + " !important");
                } else {
                    cont.addClass(value);
                }
            });
        }

        wind.appendTo(o.parent !== 'default' ? o.parent : element.parent());

        this.icon();
        this.title();
        this.buttons();
        this.content();
    },

    icon: function(){
        var o = this.options;
        var capt = this.element.children('.window-caption');
        var icon = capt.find(".window-caption-icon");

        if (o.icon) {
            if (icon.length === 0) {
                $("<span/>").addClass('window-caption-icon').html(o.icon).appendTo(capt);
            } else {
                icon.html(o.icon);
            }

        }
    },

    title: function(){
        var o = this.options;
        var capt = this.element.children('.window-caption');
        var title = capt.find(".window-caption-title");

        if (o.title) {
            if (title.length === 0) {
                $("<span/>").addClass('window-caption-title').html(o.title).appendTo(capt);
            } else {
                title.html(o.title);
            }
        }
    },

    buttons: function(){
        var o = this.options;
        var bMin, bMax, bClose;
        var capt = this.element.children('.window-caption');

        if (capt.length === 0) {return;}

        if (o.buttons) {
            var btnMin = o.buttons.btnMin;
            var btnMax = o.buttons.btnMax;
            var btnClose = o.buttons.btnClose;

            if (btnMin && btnMin !== false) {
                bMin = $("<span/>").addClass('btn-min').appendTo(capt);
                if (typeof btnMin === 'object') {
                    bMin.css(btnMin);
                }
                if (typeof o.onBtnMinClick === 'string') {
                    var bMinFn = window[o.onBtnMinClick];
                    bMin.on('click', bMinFn);
                } else {
                    bMin.on('click', o.onBtnMinClick(e));
                }
            }

            if (btnMax && btnMax !== false) {
                bMax = $("<span/>").addClass('btn-max').appendTo(capt);
                if (typeof btnMax === 'object') {
                    bMax.css(btnMax);
                }
                if (typeof o.onBtnMaxClick === 'string') {
                    var bMaxFn = window[o.onBtnMaxClick];
                    bMax.on('click', bMaxFn);
                } else {
                    bMax.on('click', o.onBtnMaxClick(e));
                }
            }

            if (btnClose && btnClose !== false) {
                bClose = $("<span/>").addClass('btn-close').appendTo(capt);
                if (typeof btnClose === 'object') {
                    bClose.css(btnClose);
                }
                if (typeof o.onBtnCloseClick === 'string') {
                    var bCloseFn = window[o.onBtnCloseClick];
                    bClose.on('click', bCloseFn);
                } else {
                    bClose.on('click', o.onBtnCloseClick(e));
                }
            }
        }
    },

    content: function(){
        var o = this.options;
        var c = o.content;
        var content = this.element.children('.window-content');

        if (!c) {return;}

        if (metroUtils.isUrl(c)) {
            if (c.indexOf('youtube') > -1) {
                var iframe = $("<iframe>");
                var video_container = $("<div/>").addClass('video-container').appendTo(content);

                iframe
                    .attr('src', c)
                    .attr('frameborder', '0');

                iframe.appendTo(video_container);
            }
        } else {
            content.html(c);
        }
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/wizard.js
$.widget("metro.wizard", {

    version: "3.0.0",

    options: {
        stepper: true,
        stepperType: 'default',
        stepperClickable: false,
        startPage: 'default',
        finishStep: 'default',
        locale: window.METRO_CURRENT_LOCALE,
        buttons: {
            cancel: true,
            help: true,
            prior: true,
            next: true,
            finish: true
        },

        onCancel: function(page, wiz){},
        onHelp: function(page, wiz){},
        onPrior: function(page, wiz){return true;},
        onNext: function(page, wiz){return true;},
        onFinish: function(page, wiz){},

        onPage: function(page, wiz){},
        onStepClick: function(step){}
    },

    _stepper: undefined,
    _currentStep: 0,
    _steps: undefined,

    _create: function(){
        var that = this,
            element = this.element,
            o = this.options,
            steps = element.find(".step");

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._steps = steps;

        if (o.stepper) {
            this._stepper = this._createStepper(steps.length)
                .insertBefore(element.find('.steps'))
                .stepper({
                    clickable: o.stepperClickable
                }).on('stepclick', function(e, s){
                    that.stepTo(s);
                    if (typeof o.onStepClick === 'function') {
                        o.onStepClick(s);
                    } else {
                        if (typeof window[o.onStepClick] === 'function') {
                            window[o.onStepClick](s);
                        } else {
                            var result = eval("(function(){"+o.onStepClick+"})");
                            result.call(s);
                        }
                    }
                });
        }

        if (element.data('locale') !== undefined) {o.locale = element.data('locale');}

        this._createEvents();

        var sp = (o.startPage !== 'default' && parseInt(o.startPage) > 1) ? o.startPage : 1;
        this.stepTo(sp);

        if (typeof o.onPage === 'string') {
            window[o.onPage](this._currentStep + 1, element);
        } else {
            o.onPage(this._currentStep + 1, element);
        }

        element.data('wizard', this);

    },

    _createStepper: function(steps){
        var stepper, o = this.options;

        stepper = $("<div/>").addClass("stepper")
            .attr("data-role", "stepper")
            .attr("data-steps", steps);

        if (o.stepperType !== 'default') {
            stepper.addClass(o.stepperType);
        }

        return stepper;
    },

    _createEvents: function(){
        var that = this, element = this.element, o = this.options;

        if (o.buttons) {
            var actions = $("<div/>").addClass("actions").appendTo(element);
            var group_left = $("<div/>").addClass("group-left").appendTo(actions);
            var group_right = $("<div/>").addClass("group-right").appendTo(actions);
            var cancel_button, help_button, prior_button, next_button, finish_button;

            if (o.buttons.cancel) {
                cancel_button = $("<button type='button'/>").addClass("btn-cancel").html(window.METRO_LOCALES[o.locale].buttons[2]);
                if (typeof o.buttons.cancel === "boolean") {
                    cancel_button.appendTo(group_left);
                } else {
                    if (o.buttons.cancel.title) {
                        cancel_button.html(o.buttons.cancel.title);
                    }
                    if (o.buttons.cancel.cls) {
                        cancel_button.addClass(o.buttons.cancel.cls);
                    }
                    if (o.buttons.cancel.group && o.buttons.cancel.group !== "left") {
                        cancel_button.appendTo(group_right);
                    } else {
                        cancel_button.appendTo(group_left);
                    }
                }
                cancel_button.on('click', function(){
                    if (typeof o.onCancel === 'function') {
                        o.onCancel(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onCancel] === 'function') {
                            window[o.onCancel](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onCancel+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
            if (o.buttons.help) {
                help_button = $("<button type='button'/>").addClass("btn-help").html(window.METRO_LOCALES[o.locale].buttons[3]);
                if (typeof o.buttons.help === "boolean") {
                    help_button.appendTo(group_right);
                } else {
                    if (o.buttons.help.title) {
                        help_button.html(o.buttons.help.title);
                    }
                    if (o.buttons.help.cls) {
                        help_button.addClass(o.buttons.help.cls);
                    }
                    if (o.buttons.help.group && o.buttons.help.group !== "left") {
                        help_button.appendTo(group_right);
                    } else {
                        help_button.appendTo(group_left);
                    }
                }
                help_button.on('click', function(){
                    if (typeof o.onHelp === 'function') {
                        o.onHelp(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onHelp] === 'function') {
                            window[o.onHelp](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onHelp+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
            if (o.buttons.prior) {
                prior_button = $("<button type='button'/>").addClass("btn-prior").html(window.METRO_LOCALES[o.locale].buttons[4]);
                if (typeof o.buttons.prior === "boolean") {
                    prior_button.appendTo(group_right);
                } else {
                    if (o.buttons.prior.title) {
                        prior_button.html(o.buttons.prior.title);
                    }
                    if (o.buttons.prior.cls) {
                        prior_button.addClass(o.buttons.prior.cls);
                    }
                    if (o.buttons.prior.group && o.buttons.prior.group !== "left") {
                        prior_button.appendTo(group_right);
                    } else {
                        prior_button.appendTo(group_left);
                    }
                }
                prior_button.on('click', function(){
                    if (typeof o.onPrior === 'function') {
                        if (o.onPrior(that._currentStep+1, element)) {that.prior();}
                    } else {
                        if (typeof window[o.onPrior] === 'function') {
                            if (window[o.onPrior](that._currentStep+1, element)) {that.prior();}
                        } else {
                            var result = eval("(function(){"+o.onPrior+"})");
                            if (result.call(that._currentStep+1, element)) {that.prior();}
                        }
                    }
                });
            }
            if (o.buttons.next) {
                next_button = $("<button type='button'/>").addClass("btn-next").html(window.METRO_LOCALES[o.locale].buttons[5]);
                if (typeof o.buttons.next === "boolean") {
                    next_button.appendTo(group_right);
                } else {
                    if (o.buttons.next.title) {
                        next_button.html(o.buttons.next.title);
                    }
                    if (o.buttons.next.cls) {
                        next_button.addClass(o.buttons.next.cls);
                    }
                    if (o.buttons.next.group && o.buttons.next.group !== "left") {
                        next_button.appendTo(group_right);
                    } else {
                        next_button.appendTo(group_left);
                    }
                }
                next_button.on('click', function(){
                    if (typeof o.onNext === 'function') {
                        if (o.onNext(that._currentStep+1, element)) {that.next();}
                    } else {
                        if (typeof window[o.onNext] === 'function') {
                            if (window[o.onNext](that._currentStep+1, element)) {that.next();}
                        } else {
                            var result = eval("(function(){"+o.onNext+"})");
                            if (result.call(that._currentStep+1, element)) {that.next();}
                        }
                    }
                });
            }
            if (o.buttons.finish) {
                finish_button = $("<button type='button'/>").addClass("btn-finish").html(window.METRO_LOCALES[o.locale].buttons[6]);
                if (typeof o.buttons.finish === "boolean") {
                    finish_button.appendTo(group_right);
                } else {
                    if (o.buttons.finish.title) {
                        finish_button.html(o.buttons.finish.title);
                    }
                    if (o.buttons.finish.cls) {
                        finish_button.addClass(o.buttons.finish.cls);
                    }
                    if (o.buttons.finish.group && o.buttons.finish.group !== "left") {
                        finish_button.appendTo(group_right);
                    } else {
                        finish_button.appendTo(group_left);
                    }
                }
                finish_button.on('click', function(){
                    if (typeof o.onFinish === 'function') {
                        o.onFinish(that._currentStep+1, element);
                    } else {
                        if (typeof window[o.onFinish] === 'function') {
                            window[o.onFinish](that._currentStep+1, element);
                        } else {
                            var result = eval("(function(){"+o.onFinish+"})");
                            result.call(that._currentStep+1, element);
                        }
                    }
                });
            }
        }
    },

    next: function(){
        var element = this.element, that = this, o = this.options;
        var new_step = this._currentStep + 1;

        if (new_step === this._steps.length) {return false;}

        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();


        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

        var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        if (new_step === this._steps.length - 1) {
            this.element.find('.btn-next').attr('disabled', true);
        } else {
            this.element.find('.btn-next').attr('disabled', false);
        }

        if (new_step > 0) {
            this.element.find('.btn-prior').attr('disabled', false);
        }

        return true;
    },

    prior: function(){
        var element = this.element, that = this, new_step = this._currentStep - 1;
        var o = this.options;

        if (new_step < 0) {return false;}

        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();

        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', this._currentStep + 1);}

        var finish = o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep;
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        if (new_step === 0) {
            this.element.find('.btn-prior').attr('disabled', true);
        } else {
            this.element.find('.btn-prior').attr('disabled', false);
        }

        if (new_step < finish) {
            this.element.find('.btn-next').attr('disabled', false);
        }

        return true;
    },

    stepTo: function(step){
        var element = this.element, that = this, new_step = step - 1;
        var o = this.options;

        if (new_step < 0) {return false;}
        this._currentStep = new_step;
        this._steps.hide();
        $(this._steps[new_step]).show();

        if (typeof o.onPage === 'function') {
            o.onPage(that._currentStep+1, element);
        } else {
            if (typeof window[o.onPage] === 'function') {
                window[o.onPage](that._currentStep+1, element);
            } else {
                var result = eval("(function(){"+o.onPage+"})");
                result.call(that._currentStep+1, element);
            }
        }

        if (this._stepper !== undefined) {this._stepper.stepper('stepTo', step);}

        var finish = (o.finishStep === 'default' ? this._steps.length - 1 : o.finishStep);
        if (new_step === finish) {
            this.element.find('.btn-finish').attr('disabled', false);
        } else {
            this.element.find('.btn-finish').attr('disabled', true);
        }

        this.element.find('.btn-next').attr('disabled', (new_step >= finish));
        this.element.find('.btn-prior').attr('disabled', (new_step <= 0));

        return true;
    },

    stepper: function(){
        return this._stepper;
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    }
});


// Source: js/widgets/wizard2.js
$.widget( "metro.wizard2" , {

    version: "3.0.0",

    options: {
        start: 1,
        finish: 'default',
        buttonLabels: {
            prev: '&lt;',
            next: '&gt;',
            finish: 'OK',
            help: '?'
        },
        onPrior: function(page, wiz){return true;},
        onNext: function(page, wiz){return true;},
        onFinish: function(page, wiz){},
        onHelp: function(page, wiz){},
        onPage: function(page, wiz){}

    },

    _step: 1,
    _steps: undefined,

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._step = o.start;
        this._steps = element.children('.step');
        this._height = 0;
        this._width = 0;

        if (o.finish === 'default') {
            o.finish = this._steps.length;
        }

        $.each(this._steps, function(i, v){
            if ($(v).outerHeight() > that._height) {that._height = $(v).outerHeight();}
            //console.log(i, $(v).outerHeight(), that._height);
            if ($(v).hasClass('active')) {
                that._step = i + 1;
            }
        });

        this._width = element.innerWidth() - ( (this._steps.length - 1) * 24 +  (this._steps.length));

        element.children('.step').css({
            height: this._height + 48
        });

        $(window).resize(function(){
            that._width = element.innerWidth() - ( (that._steps.length - 1) * 24 +  (that._steps.length));
            that.step(that._step);
        });

        this._createActionBar();
        this.step(o.start);
        this._placeActionBar();

        element.data('wizard2', this);
    },

    _createActionBar: function(){
        var that = this, element = this.element, o = this.options;
        var bar = $("<div/>").addClass('action-bar').appendTo(element);
        var btn_prev, btn_next, btn_help, btn_finish;

        btn_help = $("<button/>").html(o.buttonLabels.help).addClass('button cycle-button medium-button wiz-btn-help place-left').appendTo(bar);
        btn_finish = $("<button/>").html(o.buttonLabels.finish).addClass('button cycle-button medium-button wiz-btn-finish place-right').appendTo(bar);
        btn_next = $("<button/>").html(o.buttonLabels.next).addClass('button cycle-button medium-button wiz-btn-next place-right').appendTo(bar);
        btn_prev = $("<button/>").html(o.buttonLabels.prev).addClass('button cycle-button medium-button wiz-btn-prev place-right').appendTo(bar);

        btn_help.on('click', function(){
            if (typeof o.onHelp === 'function') {
                o.onHelp(that._step, that);
            } else {
                if (typeof window[o.onHelp] === 'function') {
                    window[o.onHelp](that._step, that);
                } else {
                    var result = eval("(function(){"+o.onHelp+"})");
                    result.call(that._step, that);
                }
            }
        });

        btn_finish.on('click', function(){
            if (typeof o.onFinish === 'function') {
                o.onFinish(that._step, that);
            } else {
                if (typeof window[o.onFinish] === 'function') {
                    window[o.onFinish](that._step, that);
                } else {
                    var result = eval("(function(){"+o.onFinish+"})");
                    result.call(that._step, that);
                }
            }
        });

        btn_prev.on('click', function(){
            if (typeof o.onPrior === 'function') {
                if (o.onPrior(that._step, element)) {that.prior();}
            } else {
                if (typeof window[o.onPrior] === 'function') {
                    if (window[o.onPrior](that._step, element)) {that.prior();}
                } else {
                    var result = eval("(function(){"+o.onPrior+"})");
                    if (result.call(that._step, element)) {that.prior();}
                }
            }
        });

        btn_next.on('click', function(){
            if (typeof o.onNext === 'function') {
                if (o.onNext(that._step, element)) {that.next();}
            } else {
                if (typeof window[o.onNext] === 'function') {
                    if (window[o.onNext](that._step, element)) {that.next();}
                } else {
                    var result = eval("(function(){"+o.onNext+"})");
                    if (result.call(that._step, element)) {that.next();}
                }
            }
        });
    },

    _placeActionBar: function(){
        var element = this.element, o = this.options;
        var action_bar = element.find('.action-bar');
        var curr_frame = element.find('.step.active');
        var left = curr_frame.position().left, right = curr_frame.innerWidth();

        action_bar.css({
            left: left,
            width: right
        });
    },

    step: function(index){
        var o = this.options;

        this.element.children('.step')
            .removeClass('active prev next');

        $(this.element.children('.step')[index - 1])
            .addClass('active')
            .css('width', this._width);

        this.element.children('.step.active').prevAll().addClass('prev').css('width', 0);
        this.element.children('.step.active').nextAll().addClass('next').css('width', 0);

        this._placeActionBar();

        if (index === 1) {
            this.element.find('.wiz-btn-prev').hide();
        } else {
            this.element.find('.wiz-btn-prev').show();
        }

        if (index === this._steps.length) {
            this.element.find('.wiz-btn-next').hide();
        } else {
            this.element.find('.wiz-btn-next').show();
        }

        if (index !== o.finish) {
            this.element.find('.wiz-btn-finish').hide();
        } else {
            this.element.find('.wiz-btn-finish').show();
        }

    },

    prior: function(){
        var new_step = this._step - 1;
        if (new_step <= 0) {
            return false;
        }

        this._step = new_step;

        this.step(new_step);

        return true;
    },

    next: function(){
        var new_step = this._step + 1;
        if (new_step > this._steps.length) {return false;}

        this._step = new_step;

        this.step(new_step);

        return true;
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});


 return $.Metro.init();

}));
