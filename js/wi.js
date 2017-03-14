/*
  Wurst-Imperium JS v1.2
  © 2017 Wurst-Imperium

  Based on Metro UI CSS v3.0.17
  © 2012 - 2016 Sergey Pimenov

  This file contains:
  - jquery.min.js v2.2.4
  - metro.js
  - custom Wurst-Imperium scripts

  Changes to the Metro UI files are marked with "EDIT:".
*/

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});


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

window.METRO_LOCALES = {
    'en': {
        months: [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        days: [
            "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
            "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
        ],
        buttons: [
            "Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'fr': {
        months: [
            "Janvier", "F�vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao�t", "Septembre", "Octobre", "Novembre", "D�cembre",
            "Jan", "F�v", "Mars", "Avr", "Mai", "Juin", "Juil", "Ao�t", "Sept", "Oct", "Nov", "D�c"
        ],
        days: [
            "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
            "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
        ],
        buttons: [
            "Aujourd'hui", "Effacer", "Annuler", "Aide", "Pr�cedent", "Suivant", "Fin"
        ]
    },
    'nl': {
        months: [
            "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
            "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
        ],
        days: [
            "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
            "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
        ],
        buttons: [
            "Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
        ]
    },
    'ua': {
        months: [
            "??????", "?????", "????????", "???????", "???????", "???????", "??????", "???????", "????????", "???????", "????????", "???????",
            "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???"
        ],
        days: [
            "??????", "?????????", "????????", "??????", "??????", "?�??????", "??????",
            "??", "??", "??", "??", "??", "??", "??"
        ],
        buttons: [
            "????????", "????????", "?????????", "????????", "?????", "??????", "??????"
        ]
    },
    'ru': {
        months: [
            "??????", "???????", "????", "??????", "???", "????", "????", "??????", "????????", "???????", "??????", "???????",
            "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???", "???"
        ],
        days: [
            "???????????", "???????????", "???????", "?????", "???????", "???????", "???????",
            "??", "??", "??", "??", "??", "??", "??"
        ],
        buttons: [
            "???????", "????????", "????????", "??????", "?????", "??????", "??????"
        ]
    },
    /** By NoGrief (nogrief@gmail.com) */
    'zhCN': {
        months: [
            "??", "??", "??", "??", "??", "??", "??", "??", "??", "??", "???", "???",
            "??", "??", "??", "??", "??", "??", "??", "??", "??", "??", "???", "???"
        ],
        days: [
            "???", "???", "???", "???", "???", "???", "???",
            "?", "?", "?", "?", "?", "?", "?"
        ],
        buttons: [
            "??", "??", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'it': {
        months: [
            'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
            'Gen', ' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
        ],
        days: [
            'Domenica', 'Luned�', 'Marted�', 'Mercoled�', 'Gioved�', 'Venerd�', 'Sabato',
            'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'
        ],
        buttons: [
            "Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'de': {
        months: [
            "Januar", "Februar", "M�rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
            "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ],
        days: [
            "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
            "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
        ],
        buttons: [
            "Heute", "Zur�cksetzen", "Abbrechen", "Hilfe", "Fr�her", "Sp�ter", "Fertig"
        ]
    },
    /** By Javier Rodr�guez (javier.rodriguez at fjrodriguez.com) */
    'es': {
        months: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
            "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
        ],
        days: [
            "Domingo", "Lunes", "Martes", "Mi�rcoles", "Jueves", "Viernes", "S�bado",
            "Do", "Lu", "Mar", "Mi�", "Jue", "Vi", "S�b"
        ],
        buttons: [
            "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
        ]
    },
    'pt': {
        months: [
            'Janeiro', 'Fevereiro', 'Mar�o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
            'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
        ],
        days: [
            'Domingo', 'Segunda-feira', 'Ter�a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado',
            'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
        ],
        buttons: [
            "Hoje", "Limpar", "Cancelar", "Ajuda", "Anterior", "Seguinte", "Terminar"
        ]
    },
    'pl': {
        months: [
            "Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien",
            "Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paz", "Lis", "Gru"
        ],
        days: [
            "Niedziela", "Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota",
            "Nd", "Pon", "Wt", "Sr", "Czw", "Pt", "Sob"
        ],
        buttons: [
            "Dzisiaj", "Wyczysc", "Anuluj", "Pomoc", "Poprzedni", "Nastepny", "Koniec"
        ]
    },
    'cs': {
        months: [
            "Leden", "�nor", "Brezen", "Duben", "Kveten", "Cerven", "Cervenec", "Srpen", "Z�r�", "R�jen", "Listopad", "Prosinec",
            "Led", "�n", "Br", "Dub", "Kve", "Ce", "Cer", "Srp", "Z�", "R�", "Li", "Pro"
        ],
        days: [
            "Nedele", "Pondel�", "�ter�", "Streda", "Ctvrtek", "P�tek", "Sobota",
            "Ne", "Po", "�t", "St", "Ct", "P�", "So"
        ],
        buttons: [
            "Dnes", "Vycistit", "Zru�it", "Pomoc", "Prede�l�", "Dal��", "Dokoncit"
        ]
    },
    /* By Satit Rianpit <rianpit@gmail.com> */
    'th': {
        months: [
            "??????", "??????????", "??????", "??????", "???????", "????????", "???????", "???????", "???????", "??????", "?????????", "???????",
            "?.?.", "?.?.", "??.?.", "??.?.", "?.?.", "??.?.", "?.?.", "?.?.", "?.?.", "?.?.", "?.?.", "?.?."
        ],
        days: [
            "???????", "??????", "??????", "???", "????????", "?????", "?????",
            "??.", "?.", "?.", "?.", "??.", "?.", "?."
        ],
        buttons: [
            "??????", "????", "??????", "?????????", "????", "?????", "?????"
        ]
    },
    'id': {
        months: [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember",
            "Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Dec"
        ],
        days: [
            "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu",
            "Mi", "Se", "Se", "Ra", "Ka", "Ju", "Sa"
        ],
        buttons: [
            "Hari Ini", "Mengulang", "Batalkan", "Bantuan", "Sebelumnya", "Berikutnya", "Selesai"
        ]
    }
};

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {

var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) {
                val = "0" + val;
            }
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length === 1 && Object.prototype.toString.call(date) === "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        //console.log(arguments);

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date();
        //if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) === "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        //console.log(locale);

        var locale = window.METRO_CURRENT_LOCALE || 'en';

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: window.METRO_LOCALES[locale].days[D],
                dddd: window.METRO_LOCALES[locale].days[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: window.METRO_LOCALES[locale].months[m],
                mmmm: window.METRO_LOCALES[locale].months[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 !== 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// For convenience...
Date.prototype.format = function (mask, utc) {
return dateFormat(this, mask, utc);
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

// Source: js/widgets/clock.js
$.widget( "metro.clock" , {

    version: "1.0.0",

    options: {
        showTime: true,
        showDate: true,
        timeFormat: '24',
        dateFormat: 'american',
        divider: "&nbsp;&nbsp;"
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        this._setOptionsFromDOM();

        this._tick();
        this._clockInterval = setInterval(function(){
            that._tick();
        }, 500);

        element.data('clock', this);
    },

    _addLeadingZero: function(i){
        if (i<10){i="0" + i;}
        return i;
    },

    _tick: function(){
        var that = this, element = this.element, o = this.options;
        var timestamp = new Date();
        var time = timestamp.getTime();
        var result = "";
        var h = timestamp.getHours(),
            i = timestamp.getMinutes(),
            s = timestamp.getSeconds(),
            d = timestamp.getDate(),
            m = timestamp.getMonth() + 1,
            y = timestamp.getFullYear(),
            a = '';

        if (o.timeFormat == '12') {
            a = " AM";
            if (h > 11) { a = " PM"; }
            if (h > 12) { h = h - 12; }
            if (h == 0) { h = 12; }
        }

        h = this._addLeadingZero(h);
        i = this._addLeadingZero(i);
        s = this._addLeadingZero(s);
        m = this._addLeadingZero(m);
        d = this._addLeadingZero(d);

        if (o.showDate) {
            if (o.dateFormat == 'american') {
                result += "<span class='date-month'>" + m + "</span>";
                result += "<span class='date-divider'>-</span>";
                result += "<span class='date-day'>" + d + "</span>";
                result += "<span class='date-divider'>-</span>";
                result += "<span class='date-year'>" + y + "</span>";
            } else {
                result += "<span class='date-day'>" + d + "</span>";
                result += "<span class='date-divider'>-</span>";
                result += "<span class='date-month'>" + m + "</span>";
                result += "<span class='date-divider'>-</span>";
                result += "<span class='date-year'>" + y + "</span>";
            }
            result += o.divider;
        }

        if (o.showTime) {
            result += "<span class='clock-hour'>" + h + "</span>";
            result += "<span class='clock-divider'>:</span>";
            result += "<span class='clock-minute'>" + i + "</span>";
            result += "<span class='clock-divider'>:</span>";
            result += "<span class='clock-second'>" + s + "</span>";
        }

        element.html(result);
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
        clearInterval(this._clockInterval);
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/countdown.js
$.widget( "metro.countdown" , {

    version: "3.0.0",

    options: {
        stop: false,
        days: false,
        hours: false,
        minutes: false,
        seconds: false,
        backgroundColor: 'bg-cyan',
        digitColor: 'fg-white',
        dividerColor: 'fg-dark',
        labelColor: 'fg-grayLight',
        labels: {
            'days': 'days',
            'hours': 'hours',
            'minutes': 'mins',
            'seconds': 'secs'
        },
        onTick: function(d, h, m, s){},
        onStop: function(){}
    },

    _interval: 0,
    _interval2: 0,
    _alarmOn: undefined,

    _create: function () {
        //console.log('hi from countdown');

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

        this._alarmOn = new Date();

        if (o.stop !== false) {
            this._alarmOn = new Date(o.stop);
        }

        var dm = 24*60*60*1000, hm = 60*60*1000, mm = 60*1000, sm = 1000;

        if (o.days !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.days*dm;
        }

        if (o.hours !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.hours*hm;
        }

        if (o.minutes !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.minutes*mm;
        }

        if (o.seconds !== false) {
            if (typeof this._alarmOn === 'object') {
                this._alarmOn = this._alarmOn.getTime();
            }
            this._alarmOn = this._alarmOn + o.seconds*sm;
        }

        this._createDigits();

        element.find('.digit').text('0');

        that._tick();

        element.data('countdown', this);

    },

    _createDigits: function(){
        var element = this.element, o = this.options;
        var parts = ['days', 'hours', 'minutes', 'seconds'];
        var p, d;

        parts.map(function(v){
            p = $("<div/>").addClass('part ' + v).attr('data-day-text', o.labels[v]).appendTo(element);
            $("<div/>").addClass('digit').appendTo(p);
            $("<div/>").addClass('digit').appendTo(p);
            if (v === 'days') {
                $("<div/>").addClass('digit').appendTo(p);
                $("<div/>").addClass('digit').appendTo(p);
            }
            if (metroUtils.isColor(o.labelColor)) {
                p.css({
                    color: o.labelColor
                });
            } else {
                p.addClass(o.labelColor);
            }

            if (metroUtils.isColor(o.backgroundColor)) {
                p.find('.digit').css({
                    background: o.backgroundColor
                });
            } else {
                p.find('.digit').addClass(o.backgroundColor);
            }

            if (metroUtils.isColor(o.digitColor)) {
                p.find('.digit').css({
                    color: o.digitColor
                });
            } else {
                p.find('.digit').addClass(o.digitColor);
            }

            if (v !== 'seconds') {
                d = $("<div/>").addClass("divider").text(':').appendTo(element);
                if (metroUtils.isColor(o.dividerColor)) {
                    d.css({'color': o.dividerColor});
                } else {
                    d.addClass(o.dividerColor);
                }
            }

        });

    },

    _blink: function(){
        this.element.toggleClass('tick');
    },

    _tick: function(){
        var that = this, o = this.options, element = this.element;
        var days = 24*60*60,
            hours = 60*60,
            minutes = 60;

        var left, d, h, m, s;

        this._interval2 = setInterval(function(){
            that._blink();
        }, 500);

        this._interval = setInterval(function(){
            var result;

            left = Math.floor((that._alarmOn - (new Date())) / 1000);
            if (left < 0) {left = 0;}

            d = Math.floor(left / days);
            left -= d*days;
            that._update('days', d);

            if (d === 0) {
                element.find('.part.days').addClass('disabled');
            }

            h = Math.floor(left / hours);
            left -= h*hours;
            that._update('hours', h);

            if (d === 0 && h === 0) {
                element.find('.part.hours').addClass('disabled');
            }

            m = Math.floor(left / minutes);
            left -= m*minutes;
            that._update('minutes', m);

            if (d === 0 && h === 0 && m === 0) {
                element.find('.part.minutes').addClass('disabled');
            }

            s = left;
            that._update('seconds', s);

            if (typeof o.onTick === 'function') {
                o.onTick(d, h, m, s);
            } else {
                if (typeof window[o.onTick] === 'function') {
                    window[o.onTick](d, h, m, s);
                } else {
                    result = eval("(function(){"+o.onTick+"})");
                    result.call(d, h, m, s);
                }
            }

            //that._blink();

            if (d === 0 && h === 0 && m === 0 && s === 0) {
                element.find('.part').addClass('disabled');

                if (typeof o.onStop === 'function') {
                    o.onStop();
                } else {
                    if (typeof window[o.onStop] === 'function') {
                        window[o.onStop]();
                    } else {
                        result = eval("(function(){"+o.onStop+"})");
                        result.call();
                    }
                }

                that._stop('all');
                that._trigger('alarm');
                clearInterval(that._interval);
            }

        }, 1000);
    },

    _update: function(part, value){
        var element = this.element;

        if (part == 'days') {
            var value1 = Math.floor(value/1000)%10;
            var value2 = Math.floor(value/100)%10;
            var value3 = Math.floor(value/10)%10;
            var value4 = value%10;
            var digit1, digit2, digit3, digit4;

            digit1 = element.find("."+part+" .digit:eq(0)");
            digit2 = element.find("."+part+" .digit:eq(1)");
            digit3 = element.find("."+part+" .digit:eq(2)");
            digit4 = element.find("."+part+" .digit:eq(3)");

            if (value1 !== parseInt(digit1.text())) {
                digit1.toggleClass('scaleIn');
                setTimeout(function(){
                    digit1.text(value1).toggleClass('scaleIn');
                }, 500);
            }

            if (value2 !== parseInt(digit2.text())) {
                digit2.toggleClass('scaleIn');
                setTimeout(function(){
                    digit2.text(value2).toggleClass('scaleIn');
                }, 500);
            }

            if (value3 !== parseInt(digit3.text())) {
                digit3.toggleClass('scaleIn');
                setTimeout(function(){
                    digit3.text(value3).toggleClass('scaleIn');
                }, 500);
            }

            if (value4 !== parseInt(digit4.text())) {
                digit4.toggleClass('scaleIn');
                setTimeout(function(){
                    digit4.text(value4).toggleClass('scaleIn');
                }, 500);
            }

        } else {
            var major_value = Math.floor(value/10)%10;
            var minor_value = value%10;
            var major_digit, minor_digit;

            major_digit = element.find("."+part+" .digit:eq(0)");
            minor_digit = element.find("."+part+" .digit:eq(1)");

            if (minor_value !== parseInt(minor_digit.text())) {
                minor_digit.toggleClass('scaleIn');
                setTimeout(function(){
                    minor_digit.text(minor_value).toggleClass('scaleIn');
                }, 500);
            }
            if (major_value !== parseInt(major_digit.text())) {
                major_digit.toggleClass('scaleIn');
                setTimeout(function(){
                    major_digit.text(major_value).toggleClass('scaleIn');
                }, 500);
            }
        }

    },

    _stop: function(){
        clearInterval(this._interval);
        clearInterval(this._interval2);
    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/datatable.js
$.widget( "metro.datatable" , {

    version: "3.0.0",

    options: {
    },

    _create: function () {
        var that = this, element = this.element, o = this.options;

        $.each(element.data(), function(key, value){
            try {
                o[key] = $.parseJSON(value);
            } catch (e) {
                o[key] = value;
            }
        });

        if($().dataTable) {
            try {
                element.dataTable(o);
            } catch (e) {

            }
        } else {
            alert('dataTable plugin required');
        }

        element.data('datatable', this);

    },

    _destroy: function () {
    },

    _setOption: function ( key, value ) {
        this._super('_setOption', key, value);
    }
});

// Source: js/widgets/datepicker.js
$.widget("metro.datepicker", {

    version: "3.0.14",

    options: {
        format: "yyyy.mm.dd",
        preset: false,
        minDate: false,
        maxDate: false,
        effect: 'fade',
        position: 'bottom',
        locale: window.METRO_CURRENT_LOCALE,
        weekStart: window.METRO_CALENDAR_WEEK_START,
        otherDays: false,
        exclude: false,
        stored: false,
        buttons: false,
        buttonToday: true,
        buttonClear: true,
        condensedGrid: false,
        scheme: 'default',
        onSelect: function(d, d0){}
    },

    _calendar: undefined,

    _create: function(){
        var that = this,
            element = this.element, o = this.options,
            input = element.children("input"),
            button = element.children("button");

        //console.log(o);

        $.each(element.data(), function(key, value){
            //console.log(typeof key, key, value);

            if (key in o) {
                try {
                    o[key] = $.parseJSON(value);
                } catch (e) {
                    o[key] = value;
                }
            }
        });

        this._createCalendar();

        input.attr('readonly', true);
        button.attr('type', 'button');

        button.on('click', function(e){
            e.stopPropagation();
            if (that._calendar.css('display') === 'none') {
                that._show();
            } else {
                that._hide();
            }
        });

        element.on('click', function(e){
            e.stopPropagation();
            if (that._calendar.css('display') === 'none') {
                that._show();
            } else {
                that._hide();
            }
        });

        $('html').on('click', function(){
            $(".calendar-dropdown").hide();
        });

        element.data('datepicker', this);

    },

    _createCalendar: function(){
        var _calendar, that = this, element = this.element, o = this.options;

        _calendar = $("<div/>").css({
            position: 'absolute',
            display: 'none',
            'max-width': 220,
            'z-index': 1000

        }).addClass('calendar calendar-dropdown').appendTo(element);

        //if (o.date != undefined) {
            //_calendar.data('date', o.date);
        //}


        _calendar.calendar({
            multiSelect: false,
            format: o.format,
            buttons: false,
            buttonToday: false,
            buttonClear: false,
            locale: o.locale,
            otherDays: o.otherDays,
            weekStart: o.weekStart,
            condensedGrid: o.condensedGrid,
            exclude: o.exclude,
            stored: o.stored,
            date: o.preset ? o.preset : new Date(),
            minDate: o.minDate,
            maxDate: o.maxDate,
            scheme: o.scheme,
            dayClick: function(d, d0){
                // console.log(d, d0);
                _calendar.calendar('setDate', d0);
                that.element.children("input[type=text]").val(d);
                // debugger;
                that.element.children("input[type=text]").trigger('change', d0);
                that.element.children("input[type=text]").blur();
                that._hide();

                if (typeof o.onSelect === 'function') {
                    o.onSelect(d, d0);
                } else {
                    if (typeof window[o.onSelect] === 'function') {
                        window[o.onSelect](d, d0);
                    } else {
                        var result = eval("(function(){"+o.onSelect+"})");
                        result.call(d, d0);
                    }
                }
            }
        });

        if (o.preset !== false) {
            //console.log(o.preset);
            _calendar.calendar('setDate', o.preset);
            element.find("input, .datepicker-output").val(_calendar.calendar('getDate'));
        }

        // Set position
        switch (this.options.position) {
            case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
            default: _calendar.css({top: '100%', left: 0});
        }

        this._calendar = _calendar;
    },

    _show: function(){
        if (this.options.effect === 'slide') {
            $(".calendar-dropdown").slideUp('fast');
            this._calendar.slideDown('fast');
        } else if (this.options.effect === 'fade') {
            $(".calendar-dropdown").fadeOut('fast');
            this._calendar.fadeIn('fast');
        } else {
            $(".calendar-dropdown").hide();
            this._calendar.show();
        }
    },
    _hide: function(){
        if (this.options.effect === 'slide') {
            this._calendar.slideUp('fast');
        } else if (this.options.effect === 'fade') {
            this._calendar.fadeOut('fast');
        } else {
            this._calendar.hide();
        }
    },

    _destroy: function(){
    },

    _setOption: function(key, value){
        this._super('_setOption', key, value);
    },

    //sets the date on the datepicker
    setDate : function(date) {

      if($.isArray(date)) {
          //TODO: handle multi-selected dates
      }

      //TODO: test for IE support

      var input = this.element.find('input');

      //retrieve calendar instance
      //and get associated dom element
      var calInst = this._calendar.data('metro-calendar');
      var calEl = calInst.element;

      //clear the date storage
      calEl.data('_storage', []);

      //set date on calendar
      this._calendar.calendar('setDate', date);

      date = this._calendar.calendar('getDate');
      input.val(date);

    }
});

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

/* custom Wurst-Imperium scripts */

// Anti-AdBlock script
$(function() {
  var ad = $('[data-ad-client="ca-pub-5218363098774955"]');
  if(!ad.length)
    return;
  if(ad.css('display') === 'none') {
    $('.post-content').html("You must disable AdBlock to view this content.");
  }
});
