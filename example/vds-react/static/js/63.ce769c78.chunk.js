(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[63],{591:function(e,r,n){"use strict";n.d(r,"a",(function(){return t})),n.d(r,"b",(function(){return o}));var t={};n.r(t),n.d(t,"COMPONENT_CLASSNAME",(function(){return i})),n.d(t,"COMPONENT_WRAPPER_CLASSNAME",(function(){return u})),n.d(t,"INDICATOR_CLASSNAME",(function(){return a})),n.d(t,"INDICATOR_WRAPPER_CLASSNAME",(function(){return d})),n.d(t,"LENGTH_AMEX",(function(){return c})),n.d(t,"LENGTH_DEFAULT",(function(){return l})),n.d(t,"FIVE_DIGITS",(function(){return s})),n.d(t,"FOUR_DIGITS",(function(){return f})),n.d(t,"SIX_DIGITS",(function(){return h})),n.d(t,"AMEX_MASK",(function(){return v})),n.d(t,"NON_AMEX_MASK",(function(){return p})),n.d(t,"AMEX",(function(){return g})),n.d(t,"DISCOVER",(function(){return m})),n.d(t,"ELECTRON",(function(){return C})),n.d(t,"ELO",(function(){return A})),n.d(t,"INVALID",(function(){return b})),n.d(t,"MASTERCARD",(function(){return E})),n.d(t,"UNKNOWN",(function(){return I})),n.d(t,"VISA",(function(){return N})),n.d(t,"EMPTY",(function(){return V})),n.d(t,"INVALID_BIN",(function(){return P})),n.d(t,"INVALID_BIN_BRAND",(function(){return R})),n.d(t,"INVALID_GENERIC",(function(){return O})),n.d(t,"NOT_SUPPORTED",(function(){return S})),n.d(t,"PARTIAL",(function(){return _})),n.d(t,"ERROR_MAP",(function(){return k}));var o={};n.r(o),n.d(o,"acceptedBrandsCheck",(function(){return w})),n.d(o,"binCheck",(function(){return B})),n.d(o,"binMatrix",(function(){return D})),n.d(o,"brandMatrix",(function(){return M})),n.d(o,"brands",(function(){return x})),n.d(o,"checkMod",(function(){return U})),n.d(o,"getBrandClassName",(function(){return K})),n.d(o,"getCardInfo",(function(){return W})),n.d(o,"getMask",(function(){return F})),n.d(o,"getRawValue",(function(){return T})),n.d(o,"filterAcceptedBrands",(function(){return X})),n.d(o,"possibleBrand",(function(){return j})),n.d(o,"validator",(function(){return q}));var i="vds-input-card",u="vds-cardnumber",a="vds-card-indicator",d="vds-input-option",c=17,l=19,s=[/\d/,/\d/,/\d/,/\d/,/\d/],f=[/\d/,/\d/,/\d/,/\d/],h=[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],v=[].concat(f,[" "],h,[" "],s),p=[].concat(f,[" "],f,[" "],f,[" "],f),g="AMEX",m="DISCOVER",C="ELECTRON",A="ELO",b="INVALID",E="MASTERCARD",I="UNKNOWN",N="VISA",V="EMPTY",P="INVALID_BIN",R="INVALID_BIN_BRAND",O="INVALID_GENERIC",S="NOT_SUPPORTED",_="PARTIAL",k={empty:V,invalid_bin:P,invalid_bin_brand:R,invalid_generic:O,not_supported:S,partial:_},x=[g,m,A,E,N],M={2:E,3:g,4:N,5:E,6:m},D={AMEX:["34","37"],DISCOVER:{fourDigits:["6011"],ranges:{4:{max:6229,min:6221},5:{max:62292,min:62212},6:{max:622925,min:622126},7:{max:6229259,min:6221260},8:{max:62292599,min:62212600}},twoOrThreeDigits:["60","62","65","601","622"]},MASTERCARD:{ranges:{1:{max:2,min:2},2:{max:27,min:22},3:{max:272,min:222},4:{max:2720,min:2221},5:{max:27209,min:22210},6:{max:272099,min:222100}},twoDigits:["51","52","53","54","55"]},VISA:["4"]},w=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,n=r.length,t=!1;if(e===I)return!0;for(var o=0;o<n;o++)if(r[o]===e){t=!0;break}return t},T=function(e){return e.toString().replace(/\s+/g,"")},j=function(e,r){var n=I;if(!e.length)return n;var t=e[0];return n=(n=M[t]||b)===b?b:function(e,r,n){if(n&&n.length>0)for(var t=0;t<n.length;t++){if(0===e.indexOf(n[t].toString()))return A;if(0===n[t].toString().indexOf(e))return I}return r}(e,n,r)},L=function(e,r){for(var n=r.length,t=!1,o=0;o<n;o++)if(e===r[o]){t=!0;break}return t},y=function(e,r){var n,t,o,i=1===r.length,u=!1;switch(e){case A:case I:case N:u=!0;break;case g:var a=r.length;o=r.substr(0,2),n=D[e],u=1===a||L(o,n);break;case E:t=r[0],o=r.substr(0,2),i?u=!0:"5"===t?(n=D[e].twoDigits,u=L(o,n)):u=function(e){var r=e.length<7?e:e.substr(0,6),n=r.length,t=D[E].ranges[n];return t.min<=Number(r)&&Number(r)<=t.max}(r);break;case m:u=function(e){var r,n,t,o=e.length<4;if(1===e.length)n=!0;else if("65"===e.substr(0,2))n=!0;else if(o)r=e.substr(0,3),t=D[m].twoOrThreeDigits,n=L(r,t);else if("6011"===e.substr(0,4))n=!0;else{var i=e.substr(0,8),u=i.length,a=D[m].ranges[u];n=a.min<=Number(i)&&Number(i)<=a.max}return n}(r)}return u},B=function(e,r){e=T(e);var n=j(e,r);return!(n===b||!y(n,e))},X=function(e){for(var r=e.length,n=[],t=0;t<r;t++)e[t]===C?n.push(N):n.push(e[t]);return n.filter((function(e,r,n){return n.indexOf(e)===r}))},K=function(e){var r=x.indexOf(e)>-1,n=r?"--":"",t=r?e.toLowerCase():"";return"".concat(n).concat(t)},G=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],U=function(e,r){var n=r,t=function(e){if(e){for(var r=(e=T(e)).length,n=0,t=0;r--;)t+=G[n][parseInt(e.charAt(r),10)],n^=1;return t>0&&t%10===0}return!0}(e),o=!1;return n&&(o=function(e){if(e){var r,n,t=(e=T(e)).length,o=e[t-1],i=e.substr(0,t-1),u=0;for(r=t-1;r>0;)n=Number(i[--r]),r%2==0&&(n*=2),n>9&&(n-=9),u+=n;return((10-u%10)%10+1)%10==o}return!0}(e)),n?t||o:t},W=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.cardBins,t=void 0===n?null:n,o=r.checkMods,i=void 0!==o&&o,u=r.partnerAcceptedBrands,a=void 0===u?x:u,d=r.shouldCheckAcceptedBrands,s=void 0!==d&&d,f=r.validateMod11,h=void 0!==f&&f,v=T(e),p=j(v,t),m=p===g?c:l,C=!i||e.length===m&&U(e,h),A=!s||w(p,a),b=B(v,t),E=s?A&&b:b;return{brand:p,isSupported:A,isValid:E,passesMod:C,value:e}},F=function(e){return e===g?v:p},q=function(e){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.brand,o=n.checkMods,i=void 0!==o&&o,u=n.checkMod11,a=void 0!==u&&u,d=n.isSupported,s=void 0===d||d,f=n.isValid,h=void 0===f||f,v=n.value,p=t===g?c:l,m=v.length<p;return v?s||t===b?t===b?r=k.invalid_bin:h?m||!i||U(v,a)?m&&e&&(r=k.partial):r=k.invalid_generic:r=k.invalid_bin_brand:r=k.not_supported:r=k.empty,r}},592:function(e,r,n){"use strict";n.d(r,"f",(function(){return o})),n.d(r,"d",(function(){return u})),n.d(r,"g",(function(){return c})),n.d(r,"e",(function(){return C})),n.d(r,"k",(function(){return v})),n.d(r,"h",(function(){return p})),n.d(r,"j",(function(){return g})),n.d(r,"i",(function(){return m})),n.d(r,"a",(function(){return b})),n.d(r,"b",(function(){return A})),n.d(r,"c",(function(){return E}));var t=[];function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.currentCaretPosition,i=void 0===o?0:o,u=n.guide,a=void 0!==u&&u,d=n.placeholder,c=void 0===d?"":d,l=n.placeholderChars,s=void 0===l?t:l,f=n.previousConformedValue,h=void 0===f?"":f;if(!p(r))throw new Error(A);if(r.filter((function(e){return s.includes(e)})).length>0)throw new Error(E);for(var v=!1===a&&void 0!==h,g=e.length,m=h.length,C=c.length,b=r.length,I=g-m,N=I>0,V=i+(N?-I:0),P=e.split(""),R=g-1;R>=0;R--){var O=P[R];if(!s.includes(O)){var S=R>=V&&m===b;O===c[S?R-I:R]&&P.splice(R,1)}}var _="",k=!1;e:for(var x=0;x<C;x++){var M=c[x];if(s.includes(M)){if(P.length>0)for(;P.length>0;){var D=P.shift();if(D===M&&!0!==v){_+=M;continue e}if(r[x].test(D)){_+=D;continue e}k=!0}!1===v&&(_+=c.substr(x,C));break}_+=M}if(v&&!1===N){for(var w=null,T=0;T<_.length;T++)s.includes(c[T])&&(w=T);_=null===w?"":_.substr(0,w+1)}return{conformedValue:_,meta:{someCharsRejected:k}}}var i=[];function u(e){var r=e.conformedValue,n=void 0===r?"":r,t=e.currentCaretPosition,o=void 0===t?0:t,u=e.nonRegexChars,a=void 0===u?i:u,d=e.placeholder,c=void 0===d?"":d,l=e.placeholderChars,s=void 0===l?i:l,f=e.previousConformedValue,h=void 0===f?"":f,v=e.previousPlaceholder,p=void 0===v?"":v,g=e.rawValue,m=void 0===g?"":g;if(0===o||!m.length)return 0;var C=m.length,A=h.length,b=c.length,E=n.length,I=C-A,N=I>0;if(I>1&&!N&&!(0===A))return o;var V,P,R=0;if(N&&(h===n||n===c))R=o-I;else{var O=n.toLowerCase(),S=m.toLowerCase().substr(0,o).split("").filter((function(e){return-1!==O.indexOf(e)}));P=S[S.length-1];var _=p.substr(0,S.length).split("").filter((function(e){return!s.includes(e)})).length,k=c.substr(0,S.length).split("").filter((function(e){return!s.includes(e)})).length!==_,x=void 0!==p[S.length-1]&&void 0!==c[S.length-2]&&!s.includes(p[S.length-1])&&p[S.length-1]!==c[S.length-1]&&p[S.length-1]===c[S.length-2];!N&&(k||x)&&_>0&&c.indexOf(P)>-1&&void 0!==m[o]&&(V=!0,P=m[o]);for(var M=S.filter((function(e){return e===P})).length,D=c.split("").filter((function(e,r){return!a.includes(e)&&e===P&&m[r]!==e})).length+M+(V?1:0),w=0,T=0;T<E;T++){if(R=T+1,O[T]===P&&w++,w>=D)break}}if(N){for(var j=R,L=R;L<=b;L++)if(s.includes(c[L])&&(j=L),s.includes(c[L])||L===b)return j}else if(V){for(var y=R-1;y>=0;y--)if(n[y]===P||0===y)return y}else for(var B=R;B>=0;B--)if(s.includes(c[B-1])||0===B)return B;return-1}var a=n(604),d=n.n(a);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=t.guide,a=void 0!==i&&i,c=t.inputElement,l=t.mask,s=t.placeholderChar,f=void 0===s?"X":s,h=t.upperCaseValue,p=void 0!==h&&h;if(!m(c))throw new Error(b);var A=c.selectionEnd,E=c.value;n=g(n)?E:n.toString();var I=C(l,f),N=I.mask,V=I.placeholder,P=I.nonRegexChars,R=I.placeholderChars;if(n===r.previousConformedValue&&V===r.previousPlaceholder)return d()({},r,{adjustedCaretPosition:A,conformedValue:n});var O=o(n,N,{currentCaretPosition:A,guide:a,placeholder:V,placeholderChars:R,previousConformedValue:r.previousConformedValue}),S=O.conformedValue,_=u({conformedValue:S,currentCaretPosition:A,nonRegexChars:P,placeholder:V,placeholderChars:R,previousConformedValue:r.previousConformedValue,previousPlaceholder:r.previousPlaceholder,rawValue:n}),k=S===V&&0===_,x=k?"":p?S.toUpperCase():S;return r.previousConformedValue=x,r.previousPlaceholder=V,c.value=x,v(c,_),d()({},r,{adjustedCaretPosition:_,conformedValue:x})}}}var l=n(627),s=n.n(l),f="undefined"!==typeof navigator&&/Android/i.test(navigator.userAgent),h="undefined"===typeof requestAnimationFrame?setTimeout:requestAnimationFrame;function v(e,r){document.activeElement===e&&(f?h((function(){return e.setSelectionRange(r,r,"none")}),0):e.setSelectionRange(r,r,"none"))}function p(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function g(e){return"undefined"===typeof e||null===e}function m(e){return(e instanceof Element||e instanceof HTMLDocument)&&1===e.nodeType&&"input"===e.tagName.toLowerCase()}function C(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"X";if(!p(e))throw new Error(A);var n=e.reduce((function(e,n){var t=e.mask,o=e.placeholderChars,i=e.placeholder,u=n&&n.mask instanceof RegExp?n.mask:n,a=n&&"string"===typeof n.placeholder?n.placeholder.charAt(0):r;return t.push("string"===typeof u?u.charAt(0):u),i.push(n instanceof RegExp||n.mask instanceof RegExp?a:n.toString().charAt(0)),o.includes(a)||o.push(a),e}),{mask:[],placeholder:[],placeholderChars:[]}),t=n.mask.filter(Boolean),o=n.placeholder.join(""),i=s()(new Set(n.placeholder.filter(Boolean))),u=n.placeholderChars.filter((function(e){return i.includes(e)}));return 0===u.length&&(u=[r]),{mask:t,nonRegexChars:i,placeholder:o,placeholderChars:u}}var A="An array containing a valid mask is required. Please refer to LINK_WIKI for more information",b="An input element is required to enable Masking. Please refer to LINK_WIKI for more information",E="A placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character."},627:function(e,r,n){var t=n(628),o=n(629),i=n(661),u=n(630);e.exports=function(e){return t(e)||o(e)||i(e)||u()}},628:function(e,r,n){var t=n(662);e.exports=function(e){if(Array.isArray(e))return t(e)}},629:function(e,r){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},630:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},841:function(e,r,n){"use strict";n.d(r,"a",(function(){return a}));n(759);var t=n(701),o=n.n(t),i=n(0),u=n(592);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.guide,n=void 0!==r&&r,t=e.mask,a=e.onChange,d=e.placeholderChar,c=void 0===d?"X":d,l=e.upperCaseValue,s=void 0!==l&&l,f=e.value,h=Object(i.useRef)(null),v=Object(i.useRef)(null),p=Object(i.useState)({adjustedCaretPosition:void 0,conformedValue:Object(u.j)(f)?"":f.toString(),placeholder:void 0}),g=o()(p,2),m=g[0],C=g[1],A=function(){return Object(u.g)({guide:n,inputElement:h.current,mask:t,placeholderChar:c,upperCaseValue:s})};function b(e){var r=v.current.update(),n={adjustedCaretPosition:r.adjustedCaretPosition,conformedValue:r.conformedValue,placeholder:r.previousPlaceholder};C(n),"function"===typeof a&&a(e,n)}return Object(i.useEffect)((function(){v.current=A();var e=v.current.update(),r=e.adjustedCaretPosition,n=e.conformedValue,t=e.previousPlaceholder;C({adjustedCaretPosition:r,conformedValue:n,placeholder:t})}),[n,t,c]),Object(i.useEffect)((function(){if(v.current){var e=v.current.update(f),r=e.adjustedCaretPosition,n=e.conformedValue,t=e.previousPlaceholder;C({adjustedCaretPosition:r,conformedValue:n,placeholder:t})}}),[f]),Object(i.useEffect)((function(){if(!h.current)throw new Error(u.a);if(!(Object(u.h)(t)&&t.length>0))throw new Error(u.b);v.current=A();var e=v.current.update(f),r=e.adjustedCaretPosition,n=e.conformedValue,o=e.previousPlaceholder;C({adjustedCaretPosition:r,conformedValue:n,placeholder:o})}),[]),{getInputProps:{onChange:b,ref:h,value:m.conformedValue},meta:{adjustedCaretPosition:m.adjustedCaretPosition,placeholder:m.placeholder}}}}}]);
//# sourceMappingURL=63.ce769c78.chunk.js.map