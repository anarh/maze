(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[21],{295:function(e,t,a){"use strict";a.r(t);var n=a(86),s=a(538),r=a(0),c=a.n(r),o=a(537),l=a.n(o),i=a(2),u=a.n(i),m=a(546),d=a(545),p=a(40),f=a(8),b=a(527),v=a(18),h=a(26),g=a(17),y=a(526),x=a(65),E=a(139),O=a(528),j=a(529),N=a(530),I=a(531),w=a(532),V=a(7),C=a(610),L=a(849),k=a(611),T=a(635),R=function(){return c.a.createElement(h.a,null,c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(V.a,{tag:"h2"},"Menu is a wrapper around Listbox and used for fly-outs or drop-downs"))),c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(T.a,null,c.a.createElement(L.a,{name:"listbox-container-demo-1"},c.a.createElement(C.a,null,c.a.createElement(k.a,{listItemValue:"visa-signature-card"},"Visa Signature Card"),c.a.createElement(k.a,{listItemValue:"platinum-visa-card"},"Platinum Visa Card"),c.a.createElement(k.a,{listItemValue:"premium-card"},"Premium Card"),c.a.createElement(k.a,{listItemValue:"another-card"},"Another Card"),c.a.createElement(k.a,{listItemValue:"other-card"},"Other Card"),c.a.createElement(k.a,{listItemValue:"secondary-card"},"Secondary Card"),c.a.createElement(k.a,{listItemValue:"tertiary-card"},"Tertiary Card"),c.a.createElement(k.a,{listItemValue:"gold-signature-card"},"Gold Signature Card"),c.a.createElement(k.a,{listItemValue:"yet-another-card"},"Yet Another Card"),c.a.createElement(k.a,{listItemValue:"last-card"},"Last Card")))))))},S=a(540),M=[a(541)],P=a(542),B="import React, { forwardRef } from 'react';\nimport { bool, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-menu';\n\nconst Menu = forwardRef(({\n  children,\n  className,\n  position,\n  show,\n  ...remainingProps\n}, ref) => (\n  <div\n    className={classnames({\n      [`${CSS_PREFIX}`]: !position,\n      [`${CSS_PREFIX}--${position}`]: Boolean(position),\n      [`${CSS_PREFIX}--show`]: Boolean(show)\n    }, className)}\n    ref={ref}\n    {...remainingProps}\n  >\n    {children}\n  </div>\n));\n\nMenu.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Position\n   */\n  position: oneOf(['absolute', 'fixed']),\n\n  /**\n   * Show\n   */\n  show: bool\n};\n\nMenu.displayName = 'Menu';\n\nexport default Menu;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),A='import React from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Listbox from \'../../listbox\';\nimport ListboxContainer from \'../../listbox-container\';\nimport ListboxItem from \'../../listbox-item\';\nimport Menu from \'../../menu\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst MenuExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">\n          Menu is a wrapper around Listbox\n          and used for fly-outs or drop-downs\n        </Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Menu>\n          <ListboxContainer name="listbox-container-demo-1">\n            <Listbox>\n              <ListboxItem listItemValue="visa-signature-card">Visa Signature Card</ListboxItem>\n              <ListboxItem listItemValue="platinum-visa-card">Platinum Visa Card</ListboxItem>\n              <ListboxItem listItemValue="premium-card">Premium Card</ListboxItem>\n              <ListboxItem listItemValue="another-card">Another Card</ListboxItem>\n              <ListboxItem listItemValue="other-card">Other Card</ListboxItem>\n              <ListboxItem listItemValue="secondary-card">Secondary Card</ListboxItem>\n              <ListboxItem listItemValue="tertiary-card">Tertiary Card</ListboxItem>\n              <ListboxItem listItemValue="gold-signature-card">Gold Signature Card</ListboxItem>\n              <ListboxItem listItemValue="yet-another-card">Yet Another Card</ListboxItem>\n              <ListboxItem listItemValue="last-card">Last Card</ListboxItem>\n            </Listbox>\n          </ListboxContainer>\n        </Menu>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default MenuExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),D=function(e){var t=Object(s.a)({},e),a=Object(r.useState)({}),o=Object(n.a)(a,2),i=o[0],C=o[1];return Object(r.useEffect)((function(){try{C(P.parse(B))}catch(e){console.log("\n        React-docgen could not parse props for Menu\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(h.a,{siblingOfStickyFooter:!0},c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(V.a,{tag:"h1"},"Menu"))),c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(E.a,null,c.a.createElement(x.a,{tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/menu"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"log",resolution:"low"}),"Menu Example"),c.a.createElement(x.a,{tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/menu/code"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),c.a.createElement(x.a,{tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/menu/html"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement("div",{className:u()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/menu"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/menu")})},c.a.createElement(R,t)),c.a.createElement("div",{className:u()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/menu/code"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/menu/code")})},c.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:A,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,s=e.getLineProps,r=e.getTokenProps;return c.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return c.a.createElement("div",Object.assign({},s({key:t,line:e}),{key:t}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return c.a.createElement("span",Object.assign({},r({key:t,token:e}),{key:t}))})))})))}))),c.a.createElement("div",{className:u()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/menu/html"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/menu/html")})},c.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:S.format(l.a.renderToStaticMarkup(c.a.createElement(R,t)),{css:"ignore",parser:"html",plugins:M,printWidth:120}),language:"html"}),(function(e){var t=e.className,a=e.style,n=e.tokens,s=e.getLineProps,r=e.getTokenProps;return c.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return c.a.createElement("div",Object.assign({},s({key:t,line:e}),{key:t}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return c.a.createElement("span",Object.assign({},r({key:t,token:e}),{key:t}))})))})))}))))),c.a.createElement(g.a,null,c.a.createElement(f.a,null,c.a.createElement(b.a,{className:u()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(y.a,{tag:"caption"},"Props"),c.a.createElement(I.a,null,c.a.createElement(w.a,{className:"vds-tr"},c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(O.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return c.a.createElement(w.a,{className:"vds-tr",key:t,tabIndex:"0"},c.a.createElement(j.a,{className:"vds-td"},e[0]," ",e[1].required?c.a.createElement("sup",{style:{color:"red"}}," required"):""),c.a.createElement(j.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),c.a.createElement(j.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(j.a,{className:"vds-td"},e[1].description))})))))))};D.displayName="MenuExample";t.default=D},526:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),c=a(3),o=a(2),l=a.n(o),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,c=e.tag,o=Object(n.a)(e,["children","className","tag"]);return r.a.createElement(c,Object.assign({className:l()("vds-screen-reader",s),ref:t},o),a)}));i.propTypes={children:c.node,className:c.string,tag:c.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",t.a=i},527:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),o=a(3),l=a(2),i=a.n(l),u=Object(r.forwardRef)((function(e,t){var a,r=e.children,o=e.className,l=e.customizableColumns,u=e.dividerLines,m=e.keyValuePairs,d=e.reveal,p=e.revealFirstColumn,f=e.revealLastColumn,b=e.rowSelection,v=e.size,h=e.stickyHeader,g=Object(s.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return c.a.createElement("table",Object.assign({},g,{className:i()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(l)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--").concat(b),Boolean(b)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(h)),a),o),ref:t}),r)}));u.propTypes={children:o.node,className:o.string,columns:Object(o.arrayOf)(Object(o.shape)({})),customizableColumns:o.bool,data:Object(o.arrayOf)(Object(o.shape)({})),dividerLines:o.bool,keyValuePairs:o.bool,reveal:o.bool,revealFirstColumn:o.bool,revealLastColumn:o.bool,rowSelection:Object(o.oneOf)(["multi-select","single-select"]),size:Object(o.oneOf)(["compact"]),stickyHeader:o.bool},u.displayName="DataTable",t.a=u},528:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),c=a(3),o=a(2),l=a.n(o),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("tbody",Object.assign({className:l()("vds-tbody",s),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Tbody",t.a=i},529:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),o=a(3),l=a(2),i=a.n(l),u=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,o=e.textAlign,l=Object(s.a)(e,["children","className","textAlign"]);return c.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(o),Boolean(o)),r),ref:t},l),a)}));u.propTypes={children:o.node,className:o.string,textAlign:Object(o.oneOf)(["center","left","right"])},u.displayName="Td",t.a=u},530:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),c=a(3),o=a(2),l=a.n(o),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("th",Object.assign({className:l()("vds-th",s),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Th",t.a=i},531:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),c=a(3),o=a(2),l=a.n(o),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("thead",Object.assign({className:l()("vds-thead",s),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Thead",t.a=i},532:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),c=a(3),o=a(2),l=a.n(o),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("tr",Object.assign({className:l()("vds-tr",s),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Tr",t.a=i},533:function(e,t,a){"use strict";var n,s,r,c=a(550),o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){r=!1}function i(e){if(e){if(e!==n){if(e.length!==o.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,a){return t!==a.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+o.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,l()}}else n!==o&&(n=o,l())}function u(){return r||(r=function(){n||i(o);for(var e,t=n.split(""),a=[],s=c.nextValue();t.length>0;)s=c.nextValue(),e=Math.floor(s*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return n||o},characters:function(e){return i(e),n},seed:function(e){c.seed(e),s!==e&&(l(),s=e)},lookup:function(e){return u()[e]},shuffled:u}},539:function(e,t,a){"use strict";e.exports=a(549)},543:function(e,t){},544:function(e,t){},549:function(e,t,a){"use strict";var n=a(533),s=a(551),r=a(555),c=a(556)||0;function o(){return s(c)}e.exports=o,e.exports.generate=o,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return c=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=r},550:function(e,t,a){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},551:function(e,t,a){"use strict";var n,s,r=a(552);a(533);e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-1567752802062));return a===s?n++:(n=0,s=a),t+=r(7),t+=r(e),n>0&&(t+=r(n)),t+=r(a)}},552:function(e,t,a){"use strict";var n=a(533),s=a(553),r=a(554);e.exports=function(e){for(var t,a=0,c="";!t;)c+=r(s,n.get(),1),t=e<Math.pow(16,a+1),a++;return c}},553:function(e,t,a){"use strict";var n,s="object"===typeof window&&(window.crypto||window.msCrypto);n=s&&s.getRandomValues?function(e){return s.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},554:function(e,t){e.exports=function(e,t,a){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,s=-~(1.6*n*a/t.length),r="";;)for(var c=e(s),o=s;o--;)if((r+=t[c[o]&n]||"").length===+a)return r}},555:function(e,t,a){"use strict";var n=a(533);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},556:function(e,t,a){"use strict";e.exports=0},610:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),c=a(3),o=a(2),l=a.n(o),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,c=e.multiselect,o=e.role,i=Object(n.a)(e,["children","className","multiselect","role"]);return r.a.createElement("ul",Object.assign({className:l()("vds-listbox",{"vds-select--multi":Boolean(c)},s),ref:t,role:o},i),a)}));i.propTypes={children:c.node,className:c.string,multiselect:c.bool,role:c.string},i.defaultProps={role:"listbox"},i.displayName="Listbox",t.a=i},611:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),o=a(3),l=a(2),i=a.n(l),u=Object(r.forwardRef)((function(e,t){var a,r=e.active,o=e.children,l=e.className,u=e.disabled,m=e.focus,d=e.listItemValue,p=e.role,f=e.selected,b=Object(s.a)(e,["active","children","className","disabled","focus","listItemValue","role","selected"]);return c.a.createElement("li",Object.assign({"aria-disabled":Boolean(u)?"true":void 0,className:i()("vds-listbox-item",(a={},Object(n.a)(a,"".concat("vds-state","--active"),Boolean(r)),Object(n.a)(a,"".concat("vds-state","--disabled"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--focus"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--selected"),Boolean(f)),a),l),"data-list-item-value":d,ref:t,role:p,tabIndex:Boolean(u)?"-1":void 0},b),o)}));u.propTypes={active:o.bool,children:o.node,className:o.string,disabled:o.bool,focus:o.bool,listItemValue:o.string,role:o.string,selected:o.bool},u.defaultProps={role:"option"},u.displayName="ListboxItem",t.a=u},635:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),c=a.n(r),o=a(3),l=a(2),i=a.n(l),u=Object(r.forwardRef)((function(e,t){var a,r=e.children,o=e.className,l=e.position,u=e.show,m=Object(s.a)(e,["children","className","position","show"]);return c.a.createElement("div",Object.assign({className:i()((a={},Object(n.a)(a,"".concat("vds-menu"),!l),Object(n.a)(a,"".concat("vds-menu","--").concat(l),Boolean(l)),Object(n.a)(a,"".concat("vds-menu","--show"),Boolean(u)),a),o),ref:t},m),r)}));u.propTypes={children:o.node,className:o.string,position:Object(o.oneOf)(["absolute","fixed"]),show:o.bool},u.displayName="Menu",t.a=u},849:function(e,t,a){"use strict";var n=a(141),s=a(86),r=a(5),c=a(0),o=a.n(c),l=a(2),i=a.n(l),u=a(539),m=a.n(u),d=a(3),p=Object(c.forwardRef)((function(e,t){var a=e.children,n=e.className,s=Object(r.a)(e,["children","className"]);return o.a.createElement("label",Object.assign({className:i()("vds-listbox-label",n),ref:t},s),a)}));p.propTypes={children:d.node,className:d.string},p.displayName="ListboxLabel";var f=p,b=Object(c.forwardRef)((function(e,t){var a=e.className,n=e.type,s=Object(r.a)(e,["className","type"]);return o.a.createElement("input",Object.assign({className:i()("vds-listbox-input",a),ref:t,type:n},s))}));b.propTypes={className:d.string,type:d.string},b.defaultProps={type:"hidden"},b.displayName="ListboxInput";var v=b,h=40,g=35,y=36,x=13,E=32,O=9,j=38,N=function(e){for(var t=e.char,a=e.count,n=e.focusableItems,s=e.start;s<a;s++)if(t===n[s].textContent.trim().toLowerCase().substring(0,1))return s;return-1},I=Object(c.forwardRef)((function(e,t){var a=e.children,l=e.className,u=e.id,d=void 0===u?m.a.generate():u,p=e.label,b=e.name,I=e.onSelect,w=e.selectedListItems,V=e.tabIndex,C=Object(r.a)(e,["children","className","id","label","name","onSelect","selectedListItems","tabIndex"]),L=Object(c.useState)(w),k=Object(s.a)(L,2),T=k[0],R=k[1],S=Object(c.useState)([]),M=Object(s.a)(S,2),P=M[0],B=M[1],A=Object(c.useState)(void 0),D=Object(s.a)(A,2),F=D[0],H=D[1],z=Object(c.useState)(),q=Object(s.a)(z,2),G=q[0],K=q[1],X=Object(c.useRef)(d).current,$=Object(c.useRef)();Object(c.useEffect)((function(){$.current&&B($.current.querySelectorAll("ul > li:not(.vds-state--disabled)"))}),[]),Object(c.useEffect)((function(){R(w)}),[w]);var _=function(e){var t=e.currentTarget.dataset.listItemValue,a=!!$.current&&$.current.classList.contains("vds-select--multi"),s=Object(n.a)(P).indexOf(e.currentTarget),r=[];if(H(s),K(t),a){var c=T.includes(t);a&&c&&(r=Object(n.a)(T.filter((function(e){return e!==t})))),a&&!c&&(r=[].concat(Object(n.a)(T),[t]))}a||(r=[t]),R(r),"function"===typeof I&&I(e,{selected:r})};return o.a.createElement("div",Object.assign({className:i()("vds-listbox-container",l),id:X,ref:t},C),p?o.a.createElement(f,{id:"".concat("vds-listbox-container","-listbox--label-").concat(X),htmlFor:"".concat("vds-listbox-container","-listbox-").concat(X)},p):void 0,o.a.createElement(v,{name:b,value:T.join(",")}),Object(c.cloneElement)(a,{"aria-activedescendant":"number"===typeof F?"".concat("vds-listbox-container","-listbox-item-").concat(X,"-").concat(F):void 0,"aria-labelledby":p?"".concat("vds-listbox-container","-listbox--label-").concat(X):void 0,"aria-multiselectable":a.props.multiselect?"true":void 0,children:c.Children.map(a.props.children,(function(e,t){return Object(c.cloneElement)(e,{"aria-selected":e.props.listItemValue&&T.includes(e.props.listItemValue)?"true":"false",children:a.props.multiselect?c.Children.map(e.props.children,(function(a,n){return Object(c.cloneElement)(a,{checked:T.includes(e.props.listItemValue),key:"".concat(X,"-").concat(t,"-").concat(n),value:e.props.listItemValue})})):e.props.children,focus:a.props.multiselect?e.props.listItemValue===G:void 0,id:"".concat("vds-listbox-container","-listbox-item-").concat(X,"-").concat(t),key:"".concat(X,"-").concat(t),listItemValue:e.props.listItemValue?e.props.listItemValue:"".concat(X,"-").concat(t),onClick:_,role:"option",selected:e.props.listItemValue&&!a.props.multiselect?T.includes(e.props.listItemValue):void 0,style:{position:"relative"}})})),id:"".concat("vds-listbox-container","-listbox-").concat(X),onBlur:function(e){e.currentTarget.classList.contains("vds-select--multi")&&(K(void 0),H(void 0))},onKeyDown:function(e){var t=e.charCode||e.keyCode,a=P.length,s=e.currentTarget.classList.contains("vds-select--multi"),r=0;if(t===g&&a&&(e.preventDefault(),r=a-1,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),t===y&&a&&(e.preventDefault(),r=0,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),t===j&&a&&(e.preventDefault(),r=F-1<0?0:F-1,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),t===h&&a&&(e.preventDefault(),r=F+1<a-1?F+1:a-1,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),(t===x||t===E)&&a){e.preventDefault();var c=P[F].dataset.listItemValue,o=T.includes(c);s&&(o&&R(Object(n.a)(T.filter((function(e){return e!==c})))),o||R([].concat(Object(n.a)(T),[c])))}if(!(e.ctrlKey||e.altKey||e.metaKey||e.keyCode===E||e.keyCode===x)){if(1===(i=e.key).length&&i.match(/\S/)){var l=e.key.toLowerCase();-1===(r=N({char:l,count:a,focusableItems:P,start:F+1===a?0:F+1}))&&(r=N({char:l,count:a,focusableItems:P,start:0})),r>-1&&(H(r),s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]))}var i;!function(e){var t=e.element,a=e.listboxNode;if(t&&a&&a.scrollHeight>a.clientHeight){var n=a.clientHeight+a.scrollTop,s=t.offsetTop+t.offsetHeight;s>n&&(a.scrollTop=s-a.clientHeight),t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)}}({element:P[r],listboxNode:$.current}),"function"===typeof I&&I(e,{selected:T})}},onKeyUp:function(e){var t=e.charCode||e.keyCode,a=void 0;"undefined"===typeof F&&t===O&&(a=e.currentTarget.classList.contains("vds-select--multi"),H(0),a&&K(P[0].dataset.listItemValue),a||R([P[0].dataset.listItemValue]))},ref:$,role:"listbox",style:{position:"relative"},tabIndex:V}))}));I.defaultProps={selectedListItems:[""],tabIndex:"0"},I.displayName="ListboxContainer";t.a=I}}]);
//# sourceMappingURL=21.0e79b5d7.chunk.js.map