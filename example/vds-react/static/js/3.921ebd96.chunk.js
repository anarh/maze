(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[3],{695:function(e,t,n){"use strict";var i=n(63),o=n(22);function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=n(48),s=n(3),a=n.n(s),l=n(0);n(151);function d(e){return null!=e&&"object"===typeof e&&1===e.nodeType}function c(e,t){return(!t||"hidden"!==e)&&("visible"!==e&&"clip"!==e)}function p(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return c(n.overflowY,t)||c(n.overflowX,t)||function(e){var t=function(e){return e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView.frameElement:null}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function h(e,t,n,i,o,r,u,s){return r<e&&u>t||r>e&&u<t?0:r<=e&&s<=n||u>=t&&s>=n?r-e-i:u>t&&s<n||r<e&&s>n?u-t+o:0}var g=0;function f(e){return"function"===typeof e?e:m}function m(){}function v(e,t){null!==e&&function(e,t){var n=t.scrollMode,i=t.block,o=t.inline,r=t.boundary,u=t.skipOverflowHiddenElements,s="function"===typeof r?r:function(e){return e!==r};if(!d(e))throw new TypeError("Invalid target");for(var a=document.scrollingElement||document.documentElement,l=[],c=e;d(c)&&s(c);){if((c=c.parentNode)===a){l.push(c);break}c===document.body&&p(c)&&!p(document.documentElement)||p(c,u)&&l.push(c)}for(var g=window.visualViewport?visualViewport.width:innerWidth,f=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,I=e.getBoundingClientRect(),y=I.height,b=I.width,O=I.top,w=I.right,x=I.bottom,S=I.left,C="start"===i||"nearest"===i?O:"end"===i?x:O+y/2,M="center"===o?S+b/2:"end"===o?w:S,k=[],D=0;D<l.length;D++){var H=l[D],E=H.getBoundingClientRect(),j=E.height,K=E.width,P=E.top,T=E.right,A=E.bottom,R=E.left;if("if-needed"===n&&O>=0&&S>=0&&x<=f&&w<=g&&O>=P&&x<=A&&S>=R&&w<=T)return k;var B=getComputedStyle(H),V=parseInt(B.borderLeftWidth,10),L=parseInt(B.borderTopWidth,10),F=parseInt(B.borderRightWidth,10),U=parseInt(B.borderBottomWidth,10),N=0,W=0,_="offsetWidth"in H?H.offsetWidth-H.clientWidth-V-F:0,X="offsetHeight"in H?H.offsetHeight-H.clientHeight-L-U:0;if(a===H)N="start"===i?C:"end"===i?C-f:"nearest"===i?h(v,v+f,f,L,U,v+C,v+C+y,y):C-f/2,W="start"===o?M:"center"===o?M-g/2:"end"===o?M-g:h(m,m+g,g,V,F,m+M,m+M+b,b),N=Math.max(0,N+v),W=Math.max(0,W+m);else{N="start"===i?C-P-L:"end"===i?C-A+U+X:"nearest"===i?h(P,A,j,L,U+X,C,C+y,y):C-(P+j/2)+X/2,W="start"===o?M-R-V:"center"===o?M-(R+K/2)+_/2:"end"===o?M-T+F+_:h(R,T,K,V,F+_,M,M+b,b);var Y=H.scrollLeft,z=H.scrollTop;C+=z-(N=Math.max(0,Math.min(z+N,H.scrollHeight-j+X))),M+=Y-(W=Math.max(0,Math.min(Y+W,H.scrollWidth-K+_)))}k.push({el:H,top:N,left:W})}return k}(e,{boundary:t,block:"nearest",scrollMode:"if-needed"}).forEach((function(e){var t=e.el,n=e.top,i=e.left;t.scrollTop=n,t.scrollLeft=i}))}function I(e,t){return e===t||e.contains&&e.contains(t)}function y(e,t){var n;function i(){n&&clearTimeout(n)}function o(){for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];i(),n=setTimeout((function(){n=null,e.apply(void 0,r)}),t)}return o.cancel=i,o}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.some((function(t){return t&&t.apply(void 0,[e].concat(i)),e.preventDownshiftDefault||e.hasOwnProperty("nativeEvent")&&e.nativeEvent.preventDownshiftDefault}))}}function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){"function"===typeof t?t(e):t&&(t.current=e)}))}}function w(e,t){return!(e=Array.isArray(e)?e[0]:e)&&t?t:e}function x(e){return"string"===typeof e.type}function S(e){return e.props}var C=["highlightedIndex","inputValue","isOpen","selectedItem","type"];function M(e){void 0===e&&(e={});var t={};return C.forEach((function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t}function k(e){var t=e.key,n=e.keyCode;return n>=37&&n<=40&&0!==t.indexOf("Arrow")?"Arrow"+t:t}function D(e,t,n){var i=n-1;("number"!==typeof t||t<0||t>=n)&&(t=e>0?-1:i+1);var o=t+e;return o<0?o=i:o>i&&(o=0),o}var H=y((function(){j().textContent=""}),500);function E(e,t){var n=j(t);e&&(n.textContent=e,H())}function j(e){void 0===e&&(e=document);var t=e.getElementById("a11y-status-message");return t||((t=e.createElement("div")).setAttribute("id","a11y-status-message"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-relevant","additions text"),Object.assign(t.style,{border:"0",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px"}),e.body.appendChild(t),t)}var K=Object.freeze({__proto__:null,unknown:0,mouseUp:1,itemMouseEnter:2,keyDownArrowUp:3,keyDownArrowDown:4,keyDownEscape:5,keyDownEnter:6,keyDownHome:7,keyDownEnd:8,clickItem:9,blurInput:10,changeInput:11,keyDownSpaceButton:12,clickButton:13,blurButton:14,controlledPropUpdatedSelectedItem:15,touchEnd:16}),P=function(e){function t(t){var n=e.call(this,t)||this;n.id=n.props.id||"downshift-"+String(g++),n.menuId=n.props.menuId||n.id+"-menu",n.labelId=n.props.labelId||n.id+"-label",n.inputId=n.props.inputId||n.id+"-input",n.getItemId=n.props.getItemId||function(e){return n.id+"-item-"+e},n.input=null,n.items=[],n.itemCount=null,n.previousResultCount=0,n.timeoutIds=[],n.internalSetTimeout=function(e,t){var i=setTimeout((function(){n.timeoutIds=n.timeoutIds.filter((function(e){return e!==i})),e()}),t);n.timeoutIds.push(i)},n.setItemCount=function(e){n.itemCount=e},n.unsetItemCount=function(){n.itemCount=null},n.setHighlightedIndex=function(e,t){void 0===e&&(e=n.props.defaultHighlightedIndex),void 0===t&&(t={}),t=M(t),n.internalSetState(Object(o.a)({highlightedIndex:e},t))},n.clearSelection=function(e){n.internalSetState({selectedItem:null,inputValue:"",highlightedIndex:n.props.defaultHighlightedIndex,isOpen:n.props.defaultIsOpen},e)},n.selectItem=function(e,t,i){t=M(t),n.internalSetState(Object(o.a)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,selectedItem:e,inputValue:n.props.itemToString(e)},t),i)},n.selectItemAtIndex=function(e,t,i){var o=n.items[e];null!=o&&n.selectItem(o,t,i)},n.selectHighlightedItem=function(e,t){return n.selectItemAtIndex(n.getState().highlightedIndex,e,t)},n.internalSetState=function(e,t){var i,r,u={},s="function"===typeof e;return!s&&e.hasOwnProperty("inputValue")&&n.props.onInputValueChange(e.inputValue,Object(o.a)({},n.getStateAndHelpers(),{},e)),n.setState((function(t){t=n.getState(t);var a=s?e(t):e;a=n.props.stateReducer(t,a),i=a.hasOwnProperty("selectedItem");var l={},d={};return i&&a.selectedItem!==t.selectedItem&&(r=a.selectedItem),a.type=a.type||0,Object.keys(a).forEach((function(e){t[e]!==a[e]&&(u[e]=a[e]),"type"!==e&&(d[e]=a[e],n.isControlledProp(e)||(l[e]=a[e]))})),s&&a.hasOwnProperty("inputValue")&&n.props.onInputValueChange(a.inputValue,Object(o.a)({},n.getStateAndHelpers(),{},a)),l}),(function(){f(t)(),Object.keys(u).length>1&&n.props.onStateChange(u,n.getStateAndHelpers()),i&&n.props.onSelect(e.selectedItem,n.getStateAndHelpers()),void 0!==r&&n.props.onChange(r,n.getStateAndHelpers()),n.props.onUserAction(u,n.getStateAndHelpers())}))},n.rootRef=function(e){return n._rootNode=e},n.getRootProps=function(e,t){var r,u=void 0===e?{}:e,s=u.refKey,a=void 0===s?"ref":s,l=u.ref,d=Object(i.a)(u,["refKey","ref"]),c=(void 0===t?{}:t).suppressRefError,p=void 0!==c&&c;n.getRootProps.called=!0,n.getRootProps.refKey=a,n.getRootProps.suppressRefError=p;var h=n.getState().isOpen;return Object(o.a)(((r={})[a]=O(l,n.rootRef),r.role="combobox",r["aria-expanded"]=h,r["aria-haspopup"]="listbox",r["aria-owns"]=h?n.menuId:null,r["aria-labelledby"]=n.labelId,r),d)},n.keyDownHandlers={ArrowDown:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?5:1;this.moveHighlightedIndex(n,{type:4})}else this.internalSetState({isOpen:!0,type:4},(function(){var e=t.getItemCount();e>0&&t.setHighlightedIndex(D(1,t.getState().highlightedIndex,e),{type:4})}))},ArrowUp:function(e){var t=this;if(e.preventDefault(),this.getState().isOpen){var n=e.shiftKey?-5:-1;this.moveHighlightedIndex(n,{type:3})}else this.internalSetState({isOpen:!0,type:3},(function(){var e=t.getItemCount();e>0&&t.setHighlightedIndex(D(-1,t.getState().highlightedIndex,e),{type:4})}))},Enter:function(e){var t=this.getState(),n=t.isOpen,i=t.highlightedIndex;if(n&&null!=i){e.preventDefault();var o=this.items[i],r=this.getItemNodeFromIndex(i);if(null==o||r&&r.hasAttribute("disabled"))return;this.selectHighlightedItem({type:6})}},Escape:function(e){e.preventDefault(),this.reset({type:5,selectedItem:null,inputValue:""})}},n.buttonKeyDownHandlers=Object(o.a)({},n.keyDownHandlers,{" ":function(e){e.preventDefault(),this.toggleMenu({type:12})}}),n.inputKeyDownHandlers=Object(o.a)({},n.keyDownHandlers,{Home:function(e){this.highlightFirstOrLastIndex(e,!0,{type:7})},End:function(e){this.highlightFirstOrLastIndex(e,!1,{type:8})}}),n.getToggleButtonProps=function(e){var t=void 0===e?{}:e,r=t.onClick,u=(t.onPress,t.onKeyDown),s=t.onKeyUp,a=t.onBlur,l=Object(i.a)(t,["onClick","onPress","onKeyDown","onKeyUp","onBlur"]),d=n.getState().isOpen,c={onClick:b(r,n.buttonHandleClick),onKeyDown:b(u,n.buttonHandleKeyDown),onKeyUp:b(s,n.buttonHandleKeyUp),onBlur:b(a,n.buttonHandleBlur)},p=l.disabled?{}:c;return Object(o.a)({type:"button",role:"button","aria-label":d?"close menu":"open menu","aria-haspopup":!0,"data-toggle":!0},p,{},l)},n.buttonHandleKeyUp=function(e){e.preventDefault()},n.buttonHandleKeyDown=function(e){var t=k(e);n.buttonKeyDownHandlers[t]&&n.buttonKeyDownHandlers[t].call(r(n),e)},n.buttonHandleClick=function(e){e.preventDefault(),n.props.environment.document.activeElement===n.props.environment.document.body&&e.target.focus(),n.internalSetTimeout((function(){return n.toggleMenu({type:13})}))},n.buttonHandleBlur=function(e){var t=e.target;n.internalSetTimeout((function(){n.isMouseDown||null!=n.props.environment.document.activeElement&&n.props.environment.document.activeElement.id===n.inputId||n.props.environment.document.activeElement===t||n.reset({type:14})}))},n.getLabelProps=function(e){return Object(o.a)({htmlFor:n.inputId,id:n.labelId},e)},n.getInputProps=function(e){var t=void 0===e?{}:e,r=t.onKeyDown,u=t.onBlur,s=t.onChange,a=t.onInput,l=(t.onChangeText,Object(i.a)(t,["onKeyDown","onBlur","onChange","onInput","onChangeText"])),d={};var c,p=n.getState(),h=p.inputValue,g=p.isOpen,f=p.highlightedIndex;l.disabled||((c={}).onChange=b(s,a,n.inputHandleChange),c.onKeyDown=b(r,n.inputHandleKeyDown),c.onBlur=b(u,n.inputHandleBlur),d=c);return Object(o.a)({"aria-autocomplete":"list","aria-activedescendant":g&&"number"===typeof f&&f>=0?n.getItemId(f):null,"aria-controls":g?n.menuId:null,"aria-labelledby":n.labelId,autoComplete:"off",value:h,id:n.inputId},d,{},l)},n.inputHandleKeyDown=function(e){var t=k(e);t&&n.inputKeyDownHandlers[t]&&n.inputKeyDownHandlers[t].call(r(n),e)},n.inputHandleChange=function(e){n.internalSetState({type:11,isOpen:!0,inputValue:e.target.value,highlightedIndex:n.props.defaultHighlightedIndex})},n.inputHandleBlur=function(){n.internalSetTimeout((function(){var e=n.props.environment.document&&!!n.props.environment.document.activeElement&&!!n.props.environment.document.activeElement.dataset&&n.props.environment.document.activeElement.dataset.toggle&&n._rootNode&&n._rootNode.contains(n.props.environment.document.activeElement);n.isMouseDown||e||n.reset({type:10})}))},n.menuRef=function(e){n._menuNode=e},n.getMenuProps=function(e,t){var r,u=void 0===e?{}:e,s=u.refKey,a=void 0===s?"ref":s,l=u.ref,d=Object(i.a)(u,["refKey","ref"]),c=(void 0===t?{}:t).suppressRefError,p=void 0!==c&&c;return n.getMenuProps.called=!0,n.getMenuProps.refKey=a,n.getMenuProps.suppressRefError=p,Object(o.a)(((r={})[a]=O(l,n.menuRef),r.role="listbox",r["aria-labelledby"]=d&&d["aria-label"]?null:n.labelId,r.id=n.menuId,r),d)},n.getItemProps=function(e){var t,r=void 0===e?{}:e,u=r.onMouseMove,s=r.onMouseDown,a=r.onClick,l=(r.onPress,r.index),d=r.item,c=void 0===d?void 0:d,p=Object(i.a)(r,["onMouseMove","onMouseDown","onClick","onPress","index","item"]);void 0===l?(n.items.push(c),l=n.items.indexOf(c)):n.items[l]=c;var h=a,g=((t={onMouseMove:b(u,(function(){l!==n.getState().highlightedIndex&&(n.setHighlightedIndex(l,{type:2}),n.avoidScrolling=!0,n.internalSetTimeout((function(){return n.avoidScrolling=!1}),250))})),onMouseDown:b(s,(function(e){e.preventDefault()}))}).onClick=b(h,(function(){n.selectItemAtIndex(l,{type:9})})),t),f=p.disabled?{onMouseDown:g.onMouseDown}:g;return Object(o.a)({id:n.getItemId(l),role:"option","aria-selected":n.getState().highlightedIndex===l},f,{},p)},n.clearItems=function(){n.items=[]},n.reset=function(e,t){void 0===e&&(e={}),e=M(e),n.internalSetState((function(t){var i=t.selectedItem;return Object(o.a)({isOpen:n.props.defaultIsOpen,highlightedIndex:n.props.defaultHighlightedIndex,inputValue:n.props.itemToString(i)},e)}),t)},n.toggleMenu=function(e,t){void 0===e&&(e={}),e=M(e),n.internalSetState((function(t){var i=t.isOpen;return Object(o.a)({isOpen:!i},i&&{highlightedIndex:n.props.defaultHighlightedIndex},{},e)}),(function(){var i=n.getState(),o=i.isOpen,r=i.highlightedIndex;o&&n.getItemCount()>0&&"number"===typeof r&&n.setHighlightedIndex(r,e),f(t)()}))},n.openMenu=function(e){n.internalSetState({isOpen:!0},e)},n.closeMenu=function(e){n.internalSetState({isOpen:!1},e)},n.updateStatus=y((function(){var e=n.getState(),t=n.items[e.highlightedIndex],i=n.getItemCount(),r=n.props.getA11yStatusMessage(Object(o.a)({itemToString:n.props.itemToString,previousResultCount:n.previousResultCount,resultCount:i,highlightedItem:t},e));n.previousResultCount=i,E(r,n.props.environment.document)}),200);var u=n.props,s=u.defaultHighlightedIndex,a=u.initialHighlightedIndex,l=void 0===a?s:a,d=u.defaultIsOpen,c=u.initialIsOpen,p=void 0===c?d:c,h=u.initialInputValue,m=void 0===h?"":h,v=u.initialSelectedItem,I=void 0===v?null:v,w=n.getState({highlightedIndex:l,isOpen:p,inputValue:m,selectedItem:I});return null!=w.selectedItem&&void 0===n.props.initialInputValue&&(w.inputValue=n.props.itemToString(w.selectedItem)),n.state=w,n}Object(u.a)(t,e);var n=t.prototype;return n.internalClearTimeouts=function(){this.timeoutIds.forEach((function(e){clearTimeout(e)})),this.timeoutIds=[]},n.getState=function(e){var t=this;return void 0===e&&(e=this.state),Object.keys(e).reduce((function(n,i){return n[i]=t.isControlledProp(i)?t.props[i]:e[i],n}),{})},n.isControlledProp=function(e){return void 0!==this.props[e]},n.getItemCount=function(){var e=this.items.length;return null!=this.itemCount?e=this.itemCount:void 0!==this.props.itemCount&&(e=this.props.itemCount),e},n.getItemNodeFromIndex=function(e){return this.props.environment.document.getElementById(this.getItemId(e))},n.scrollHighlightedItemIntoView=function(){var e=this.getItemNodeFromIndex(this.getState().highlightedIndex);this.props.scrollIntoView(e,this._menuNode)},n.moveHighlightedIndex=function(e,t){var n=this.getItemCount();if(n>0){var i=D(e,this.getState().highlightedIndex,n);this.setHighlightedIndex(i,t)}},n.highlightFirstOrLastIndex=function(e,t,n){var i=this.getItemCount()-1;i<0||!this.getState().isOpen||(e.preventDefault(),this.setHighlightedIndex(t?0:i,n))},n.getStateAndHelpers=function(){var e=this.getState(),t=e.highlightedIndex,n=e.inputValue,i=e.selectedItem,o=e.isOpen,r=this.props.itemToString,u=this.id,s=this.getRootProps,a=this.getToggleButtonProps,l=this.getLabelProps,d=this.getMenuProps,c=this.getInputProps,p=this.getItemProps,h=this.openMenu,g=this.closeMenu,f=this.toggleMenu,m=this.selectItem,v=this.selectItemAtIndex,I=this.selectHighlightedItem,y=this.setHighlightedIndex,b=this.clearSelection,O=this.clearItems;return{getRootProps:s,getToggleButtonProps:a,getLabelProps:l,getMenuProps:d,getInputProps:c,getItemProps:p,reset:this.reset,openMenu:h,closeMenu:g,toggleMenu:f,selectItem:m,selectItemAtIndex:v,selectHighlightedItem:I,setHighlightedIndex:y,clearSelection:b,clearItems:O,setItemCount:this.setItemCount,unsetItemCount:this.unsetItemCount,setState:this.internalSetState,itemToString:r,id:u,highlightedIndex:t,inputValue:n,isOpen:o,selectedItem:i}},n.componentDidMount=function(){var e=this;var t=function(t,n){void 0===n&&(n=!0);var i=e.props.environment.document;return[e._rootNode,e._menuNode].some((function(e){return e&&(I(e,t)||n&&I(e,i.activeElement))}))},n=function(){e.isMouseDown=!0},i=function(n){e.isMouseDown=!1,!t(n.target)&&e.getState().isOpen&&e.reset({type:1},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},o=function(){e.isTouchMove=!1},r=function(){e.isTouchMove=!0},u=function(n){var i=t(n.target,!1);e.isTouchMove||i||!e.getState().isOpen||e.reset({type:16},(function(){return e.props.onOuterClick(e.getStateAndHelpers())}))},s=this.props.environment;s.addEventListener("mousedown",n),s.addEventListener("mouseup",i),s.addEventListener("touchstart",o),s.addEventListener("touchmove",r),s.addEventListener("touchend",u),this.cleanup=function(){e.internalClearTimeouts(),e.updateStatus.cancel(),s.removeEventListener("mousedown",n),s.removeEventListener("mouseup",i),s.removeEventListener("touchstart",o),s.removeEventListener("touchmove",r),s.removeEventListener("touchend",u)}},n.shouldScroll=function(e,t){var n=(void 0===this.props.highlightedIndex?this.getState():this.props).highlightedIndex,i=(void 0===t.highlightedIndex?e:t).highlightedIndex;return n&&this.getState().isOpen&&!e.isOpen||n!==i},n.componentDidUpdate=function(e,t){this.isControlledProp("selectedItem")&&this.props.selectedItemChanged(e.selectedItem,this.props.selectedItem)&&this.internalSetState({type:15,inputValue:this.props.itemToString(this.props.selectedItem)}),!this.avoidScrolling&&this.shouldScroll(t,e)&&this.scrollHighlightedItemIntoView(),this.updateStatus()},n.componentWillUnmount=function(){this.cleanup()},n.render=function(){var e=w(this.props.children,m);this.clearItems(),this.getRootProps.called=!1,this.getRootProps.refKey=void 0,this.getRootProps.suppressRefError=void 0,this.getMenuProps.called=!1,this.getMenuProps.refKey=void 0,this.getMenuProps.suppressRefError=void 0,this.getLabelProps.called=!1,this.getInputProps.called=!1;var t=w(e(this.getStateAndHelpers()));return t?this.getRootProps.called||this.props.suppressRefError?t:x(t)?Object(l.cloneElement)(t,this.getRootProps(S(t))):void 0:null},t}(l.Component);function T(e,t,n,i){if(-1===t)return e>0?0:n-1;var o=t+e;return o<0?i?n-1:0:o>=n?i?0:n-1:o}function A(e,t,n,i){var o,r=n.map((function(e){return i(e).toLowerCase()})),u=t+1;return(o=r.slice(u).findIndex((function(t){return t.startsWith(e)})))>-1?o+u:r.slice(0,u).findIndex((function(t){return t.startsWith(e)}))}function R(e,t){return Object.keys(e).reduce((function(n,i){return n[i]=i in t?t[i]:e[i],n}),{})}function B(e){return/^\S{1}$/.test(e)}function V(e){return""+e.slice(0,1).toUpperCase()+e.slice(1)}function L(e,t,n){Object.keys(t).forEach((function(i){!function(e,t,n,i){var o="on"+V(e)+"Change";t[o]&&void 0!==i[e]&&i[e]!==n[e]&&t[o](i)}(i,e,t,n)})),e.onStateChange&&void 0!==n&&e.onStateChange(n)}P.defaultProps={defaultHighlightedIndex:null,defaultIsOpen:!1,getA11yStatusMessage:function(e){var t=e.isOpen,n=e.selectedItem,i=e.resultCount,o=e.previousResultCount,r=e.itemToString;return t?i?i!==o?i+" result"+(1===i?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":"":"No results are available.":n?r(n):""},itemToString:function(e){return null==e?"":String(e)},onStateChange:m,onInputValueChange:m,onUserAction:m,onChange:m,onSelect:m,onOuterClick:m,selectedItemChanged:function(e,t){return e!==t},environment:"undefined"===typeof window?{}:window,stateReducer:function(e,t){return t},suppressRefError:!1,scrollIntoView:v},P.stateChangeTypes=K;var F=0;function U(){var e=Object(l.useState)(null),t=e[0],n=e[1];return Object(l.useEffect)((function(){return n(++F)}),[]),t}var N={highlightedIndex:-1,isOpen:!1,selectedItem:null};function W(e,t,n){var i=e.items,o=e.initialHighlightedIndex,r=e.defaultHighlightedIndex,u=t.selectedItem,s=t.highlightedIndex;return void 0!==o&&s>-1?o:void 0!==r?r:u?0===n?i.indexOf(u):T(n,i.indexOf(u),i.length,!1):0===n?-1:n<0?i.length-1:0}function _(e,t){var n="default"+V(t);return n in e?e[n]:N[t]}function X(e,t){if(t in e)return e[t];var n="initial"+V(t);return n in e?e[n]:_(e,t)}var Y={items:a.a.array.isRequired,itemToString:a.a.func,getA11yStatusMessage:a.a.func,getA11ySelectionMessage:a.a.func,circularNavigation:a.a.bool,highlightedIndex:a.a.number,defaultHighlightedIndex:a.a.number,initialHighlightedIndex:a.a.number,isOpen:a.a.bool,defaultIsOpen:a.a.bool,initialIsOpen:a.a.bool,selectedItem:a.a.any,initialSelectedItem:a.a.any,defaultSelectedItem:a.a.any,id:a.a.string,labelId:a.a.string,menuId:a.a.string,getItemId:a.a.func,toggleButtonId:a.a.string,stateReducer:a.a.func,onSelectedItemChange:a.a.func,onHighlightedIndexChange:a.a.func,onStateChange:a.a.func,onIsOpenChange:a.a.func,environment:a.a.shape({addEventListener:a.a.func,removeEventListener:a.a.func,document:a.a.shape({getElementById:a.a.func,activeElement:a.a.any,body:a.a.any})})},z=Object.freeze({__proto__:null,MenuKeyDownArrowDown:0,MenuKeyDownArrowUp:1,MenuKeyDownEscape:2,MenuKeyDownHome:3,MenuKeyDownEnd:4,MenuKeyDownEnter:5,MenuKeyDownCharacter:6,MenuBlur:7,MenuMouseLeave:8,ItemMouseMove:9,ItemClick:10,ToggleButtonKeyDownCharacter:11,ToggleButtonKeyDownArrowDown:12,ToggleButtonKeyDownArrowUp:13,ToggleButtonClick:14,FunctionToggleMenu:15,FunctionOpenMenu:16,FunctionCloseMenu:17,FunctionSetHighlightedIndex:18,FunctionSelectItem:19,FunctionClearKeysSoFar:20,FunctionReset:21});function J(e,t){var n,i=t.type,r=t.props,u=t.shiftKey;switch(i){case 9:n={highlightedIndex:t.index};break;case 10:n={isOpen:_(r,"isOpen"),highlightedIndex:_(r,"highlightedIndex"),selectedItem:r.items[t.index]};break;case 7:n={isOpen:!1,highlightedIndex:-1};break;case 0:n={highlightedIndex:T(u?5:1,e.highlightedIndex,r.items.length,r.circularNavigation)};break;case 1:n={highlightedIndex:T(u?-5:-1,e.highlightedIndex,r.items.length,r.circularNavigation)};break;case 3:n={highlightedIndex:0};break;case 4:n={highlightedIndex:r.items.length-1};break;case 2:n={isOpen:!1,highlightedIndex:-1};break;case 5:n=Object(o.a)({isOpen:_(r,"isOpen"),highlightedIndex:_(r,"highlightedIndex")},e.highlightedIndex>=0&&{selectedItem:r.items[e.highlightedIndex]});break;case 6:var s=t.key,a=""+e.keysSoFar+s,l=A(a,e.highlightedIndex,r.items,r.itemToString);n=Object(o.a)({keysSoFar:a},l>=0&&{highlightedIndex:l});break;case 8:n={highlightedIndex:-1};break;case 11:var d=t.key,c=""+e.keysSoFar+d,p=A(c,e.selectedItem?r.items.indexOf(e.selectedItem):-1,r.items,r.itemToString);n=Object(o.a)({keysSoFar:c},p>=0&&{selectedItem:r.items[p]});break;case 12:n={isOpen:!0,highlightedIndex:W(r,e,1)};break;case 13:n={isOpen:!0,highlightedIndex:W(r,e,-1)};break;case 14:case 15:n={isOpen:!e.isOpen,highlightedIndex:e.isOpen?-1:W(r,e,0)};break;case 16:n={isOpen:!0,highlightedIndex:W(r,e,0)};break;case 17:n={isOpen:!1};break;case 18:n={highlightedIndex:t.highlightedIndex};break;case 19:n={selectedItem:t.selectedItem};break;case 20:n={keysSoFar:""};break;case 21:n={highlightedIndex:_(r,"highlightedIndex"),isOpen:_(r,"isOpen"),selectedItem:_(r,"selectedItem")};break;default:throw new Error("Reducer called without proper action type.")}return Object(o.a)({},e,{},n)}var q,$,G=(q=Z,$=Y,function(e){void 0===e&&(e={}),Object.entries($).forEach((function(t){var n=t[0];a.a.checkPropTypes($,e,n,q.name)}))}),Q={itemToString:function(e){return e?String(e):""},stateReducer:function(e,t){return t.changes},getA11yStatusMessage:function(e){var t=e.isOpen,n=e.items;if(!n)return"";var i=n.length;return t?0===i?"No results are available":i+" result"+(1===i?" is":"s are")+" available, use up and down arrow keys to navigate. Press Enter key to select.":""},getA11ySelectionMessage:function(e){var t=e.selectedItem;return(0,e.itemToString)(t)+" has been selected."},scrollIntoView:v,environment:"undefined"===typeof window?{}:window};function Z(e){void 0===e&&(e={}),G(e);var t=Object(o.a)({},Q,{},e),n=t.items,r=t.itemToString,u=t.getA11yStatusMessage,s=t.getA11ySelectionMessage,a=t.initialIsOpen,d=t.defaultIsOpen,c=t.scrollIntoView,p=t.environment,h=function(e,t,n){var i=Object(l.useCallback)((function(t,n){t=R(t,n.props);var i=n.props.stateReducer,r=e(t,n),u=i(t,Object(o.a)({},n,{changes:r}));return L(n.props,t,u),u}),[e]),r=Object(l.useReducer)(i,t),u=r[0],s=r[1];return[R(u,n),s]}(J,function(e){var t=X(e,"selectedItem"),n=X(e,"highlightedIndex"),i=X(e,"isOpen");return{highlightedIndex:n<0&&t?e.items.indexOf(t):n,isOpen:i,selectedItem:t,keysSoFar:""}}(t),t),g=h[0],f=g.isOpen,m=g.highlightedIndex,v=g.selectedItem,I=g.keysSoFar,w=h[1],x=function(e){return w(Object(o.a)({props:t},e))},S=function(e,t){var n=void 0===t?{}:t,i=n.id,o=n.labelId,r=n.menuId,u=n.getItemId,s=n.toggleButtonId,a=void 0===i?"downshift-"+e():i;return{labelId:o||a+"-label",menuId:r||a+"-menu",getItemId:u||function(e){return a+"-item-"+e},toggleButtonId:s||a+"-toggle-button"}}(U,t),C=S.labelId,M=S.getItemId,D=S.menuId,H=S.toggleButtonId,j=Object(l.useRef)(null),K=Object(l.useRef)(null),P=Object(l.useRef)();P.current=[];var T=Object(l.useRef)(!0),A=Object(l.useRef)(!0),V=Object(l.useRef)(null);Object(l.useEffect)((function(){T.current||E(u({isOpen:f,items:n,selectedItem:v,itemToString:r}),p.document)}),[f]),Object(l.useEffect)((function(){T.current||E(s({isOpen:f,items:n,selectedItem:v,itemToString:r}),p.document)}),[v]),Object(l.useEffect)((function(){T.current&&(V.current=y((function(){x({type:20})}),500)),I&&V.current()}),[I]),Object(l.useEffect)((function(){T.current?(a||d||f)&&K.current.focus():f?K.current.focus():p.document.activeElement===K.current&&j.current.focus()}),[f]),Object(l.useEffect)((function(){m<0||!f||!P.current.length||(!1===A.current?A.current=!0:c(P.current[m],K.current))}),[m]),Object(l.useEffect)((function(){T.current=!1}),[]);var F={ArrowDown:function(e){e.preventDefault(),x({type:0,shiftKey:e.shiftKey})},ArrowUp:function(e){e.preventDefault(),x({type:1,shiftKey:e.shiftKey})},Home:function(e){e.preventDefault(),x({type:3})},End:function(e){e.preventDefault(),x({type:4})},Escape:function(){x({type:2})},Enter:function(e){e.preventDefault(),x({type:5})},Tab:function(e){e.shiftKey&&x({type:7})}},N={ArrowDown:function(e){e.preventDefault(),x({type:12})},ArrowUp:function(e){e.preventDefault(),x({type:13})}},W=function(e){var t=k(e);t&&F[t]?F[t](e):B(t)&&x({type:6,key:t})},_=function(e){e.relatedTarget!==j.current&&x({type:7})},Y=function(){x({type:8})},z=function(){x({type:14})},q=function(e){var t=k(e);t&&N[t]?N[t](e):B(t)&&x({type:11,key:t})};return{getToggleButtonProps:function(e){var t,n=void 0===e?{}:e,r=n.onClick,u=n.onKeyDown,s=n.refKey,a=void 0===s?"ref":s,l=n.ref,d=Object(i.a)(n,["onClick","onKeyDown","refKey","ref"]);return Object(o.a)(((t={})[a]=O(l,(function(e){j.current=e})),t.id=H,t["aria-haspopup"]="listbox",t["aria-expanded"]=f,t["aria-labelledby"]=C+" "+H,t.onClick=b(r,z),t.onKeyDown=b(u,q),t),d)},getLabelProps:function(e){return Object(o.a)({id:C,htmlFor:H},e)},getMenuProps:function(e){var t,n=void 0===e?{}:e,r=n.onKeyDown,u=n.onBlur,s=n.onMouseLeave,a=n.refKey,l=void 0===a?"ref":a,d=n.ref,c=Object(i.a)(n,["onKeyDown","onBlur","onMouseLeave","refKey","ref"]);return Object(o.a)(((t={})[l]=O(d,(function(e){K.current=e})),t.id=D,t.role="listbox",t["aria-labelledby"]=C,t.tabIndex=-1,t),m>-1&&{"aria-activedescendant":M(m)},{onKeyDown:b(r,W),onBlur:b(u,_),onMouseLeave:b(s,Y)},c)},getItemProps:function(e){var t,r=void 0===e?{}:e,u=r.item,s=r.index,a=r.refKey,l=void 0===a?"ref":a,d=r.ref,c=r.onMouseMove,p=r.onClick,h=Object(i.a)(r,["item","index","refKey","ref","onMouseMove","onClick"]),g=function(e,t,n){return void 0!==e?e:0===n.length?-1:n.indexOf(t)}(s,u,n);if(g<0)throw new Error("Pass either item or item index in getItemProps!");return Object(o.a)(((t={})[l]=O(d,(function(e){e&&P.current.push(e)})),t.role="option",t),g===m&&{"aria-selected":!0},{id:M(g),onMouseMove:b(c,(function(){return function(e){e!==m&&(A.current=!1,x({type:9,index:e}))}(g)})),onClick:b(p,(function(){return function(e){x({type:10,index:e})}(g)}))},h)},toggleMenu:function(){x({type:15})},openMenu:function(){x({type:16})},closeMenu:function(){x({type:17})},setHighlightedIndex:function(e){x({type:18,highlightedIndex:e})},selectItem:function(e){x({type:19,selectedItem:e})},reset:function(){x({type:21})},highlightedIndex:m,isOpen:f,selectedItem:v}}Z.stateChangeTypes=z;t.a=P}}]);
//# sourceMappingURL=3.921ebd96.chunk.js.map