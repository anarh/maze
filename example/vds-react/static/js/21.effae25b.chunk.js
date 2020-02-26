(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[21],{297:function(e,t,a){"use strict";a.r(t);var n=a(65),s=a(540),r=a(0),o=a.n(r),c=a(537),l=a.n(c),i=a(2),m=a.n(i),u=a(547),d=a(546),p=a(40),f=a(8),b=a(528),v=a(18),h=a(23),y=a(16),g=a(527),x=a(66),E=a(140),O=a(529),j=a(530),N=a(531),I=a(532),w=a(533),V=a(7),C=a(599),L=a(852),T=a(600),k=a(645),R=function(){return o.a.createElement(h.a,null,o.a.createElement(y.a,null,o.a.createElement(f.a,null,o.a.createElement(V.a,{tag:"h2"},"Menu is a wrapper around Listbox and used for fly-outs or drop-downs"))),o.a.createElement(y.a,null,o.a.createElement(f.a,null,o.a.createElement(V.a,{variant:"body",id:"menu-example"},"Example of a Menu with a Listbox"),o.a.createElement(k.a,null,o.a.createElement(L.a,{name:"listbox-container-demo-1"},o.a.createElement(C.a,{"aria-labelledby":"menu-example","data-test":"test"},o.a.createElement(T.a,{listItemValue:"visa-signature-card"},"Visa Signature Card"),o.a.createElement(T.a,{listItemValue:"platinum-visa-card"},"Platinum Visa Card"),o.a.createElement(T.a,{listItemValue:"premium-card"},"Premium Card"),o.a.createElement(T.a,{listItemValue:"another-card"},"Another Card"),o.a.createElement(T.a,{listItemValue:"other-card"},"Other Card"),o.a.createElement(T.a,{listItemValue:"secondary-card"},"Secondary Card"),o.a.createElement(T.a,{listItemValue:"tertiary-card"},"Tertiary Card"),o.a.createElement(T.a,{listItemValue:"gold-signature-card"},"Gold Signature Card"),o.a.createElement(T.a,{listItemValue:"yet-another-card"},"Yet Another Card"),o.a.createElement(T.a,{listItemValue:"last-card"},"Last Card")))))))},S=a(541),M=[a(542)],P=a(543),B="import React, { forwardRef } from 'react';\nimport { bool, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-menu';\n\nconst Menu = forwardRef(({\n  children,\n  className,\n  position,\n  show,\n  ...remainingProps\n}, ref) => (\n  <div\n    className={classnames({\n      [`${CSS_PREFIX}`]: !position,\n      [`${CSS_PREFIX}--${position}`]: Boolean(position),\n      [`${CSS_PREFIX}--show`]: Boolean(show)\n    }, className)}\n    ref={ref}\n    {...remainingProps}\n  >\n    {children}\n  </div>\n));\n\nMenu.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Position\n   */\n  position: oneOf(['absolute', 'fixed']),\n\n  /**\n   * Show\n   */\n  show: bool\n};\n\nMenu.displayName = 'Menu';\n\nexport default Menu;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),A='import React from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Listbox from \'../../listbox\';\nimport ListboxContainer from \'../../listbox-container\';\nimport ListboxItem from \'../../listbox-item\';\nimport Menu from \'../../menu\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst MenuExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">\n          Menu is a wrapper around Listbox\n          and used for fly-outs or drop-downs\n        </Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography variant="body" id="menu-example">\n          Example of a Menu with a Listbox\n        </Typography>\n        <Menu>\n          <ListboxContainer name="listbox-container-demo-1">\n            <Listbox aria-labelledby="menu-example" data-test="test">\n              <ListboxItem listItemValue="visa-signature-card">Visa Signature Card</ListboxItem>\n              <ListboxItem listItemValue="platinum-visa-card">Platinum Visa Card</ListboxItem>\n              <ListboxItem listItemValue="premium-card">Premium Card</ListboxItem>\n              <ListboxItem listItemValue="another-card">Another Card</ListboxItem>\n              <ListboxItem listItemValue="other-card">Other Card</ListboxItem>\n              <ListboxItem listItemValue="secondary-card">Secondary Card</ListboxItem>\n              <ListboxItem listItemValue="tertiary-card">Tertiary Card</ListboxItem>\n              <ListboxItem listItemValue="gold-signature-card">Gold Signature Card</ListboxItem>\n              <ListboxItem listItemValue="yet-another-card">Yet Another Card</ListboxItem>\n              <ListboxItem listItemValue="last-card">Last Card</ListboxItem>\n            </Listbox>\n          </ListboxContainer>\n        </Menu>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default MenuExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),D=function(e){var t=Object(s.a)({},e),a=Object(r.useState)({}),c=Object(n.a)(a,2),i=c[0],C=c[1];return Object(r.useEffect)((function(){try{C(P.parse(B))}catch(e){console.log("\n        React-docgen could not parse props for Menu\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),o.a.createElement(h.a,{siblingOfStickyFooter:!0},o.a.createElement(y.a,null,o.a.createElement(f.a,null,o.a.createElement(V.a,{tag:"h1"},"Menu"))),o.a.createElement(y.a,null,o.a.createElement(f.a,null,o.a.createElement(E.a,null,o.a.createElement(x.a,{tag:o.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/menu"),activeClassName:"vds-state--selected"})},o.a.createElement(v.a,{name:"log",resolution:"low"}),"Menu Example"),o.a.createElement(x.a,{tag:o.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/menu/code"),activeClassName:"vds-state--selected"})},o.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),o.a.createElement(x.a,{tag:o.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/menu/html"),activeClassName:"vds-state--selected"})},o.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),o.a.createElement(y.a,null,o.a.createElement(f.a,null,o.a.createElement("div",{className:m()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/menu"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/menu")})},o.a.createElement(R,t)),o.a.createElement("div",{className:m()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/menu/code"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/menu/code")})},o.a.createElement(u.a,Object.assign({},u.b,{theme:d.a,code:A,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,s=e.getLineProps,r=e.getTokenProps;return o.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return o.a.createElement("div",Object.assign({},s({key:t,line:e}),{key:t}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return o.a.createElement("span",Object.assign({},r({key:t,token:e}),{key:t}))})))})))}))),o.a.createElement("div",{className:m()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/menu/html"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/menu/html")})},o.a.createElement(u.a,Object.assign({},u.b,{theme:d.a,code:S.format(l.a.renderToStaticMarkup(o.a.createElement(R,t)),{css:"ignore",parser:"html",plugins:M,printWidth:120}),language:"html"}),(function(e){var t=e.className,a=e.style,n=e.tokens,s=e.getLineProps,r=e.getTokenProps;return o.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return o.a.createElement("div",Object.assign({},s({key:t,line:e}),{key:t}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return o.a.createElement("span",Object.assign({},r({key:t,token:e}),{key:t}))})))})))}))))),o.a.createElement(y.a,null,o.a.createElement(f.a,null,o.a.createElement(b.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},o.a.createElement(g.a,{tag:"caption"},"Props"),o.a.createElement(I.a,null,o.a.createElement(w.a,{className:"vds-tr"},o.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),o.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),o.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),o.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),o.a.createElement(O.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return o.a.createElement(w.a,{className:"vds-tr",key:t},o.a.createElement(j.a,{className:"vds-td"},e[0]," ",e[1].required?o.a.createElement("strong",null," - required"):""),o.a.createElement(j.a,{className:"vds-td"},o.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?o.a.createElement("small",{style:{color:"#1a1f71"}},o.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),o.a.createElement(j.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),o.a.createElement(j.a,{className:"vds-td"},e[1].description))})))))))};D.displayName="MenuExample";t.default=D},527:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),o=a(3),c=a(2),l=a.n(c),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,o=e.tag,c=Object(n.a)(e,["children","className","tag"]);return r.a.createElement(o,Object.assign({className:l()("vds-screen-reader",s),ref:t},c),a)}));i.propTypes={children:o.node,className:o.string,tag:o.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",t.a=i},528:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),o=a.n(r),c=a(3),l=a(2),i=a.n(l),m=Object(r.forwardRef)((function(e,t){var a,r=e.children,c=e.className,l=e.customizableColumns,m=e.dividerLines,u=e.keyValuePairs,d=e.reveal,p=e.revealFirstColumn,f=e.revealLastColumn,b=e.rowSelection,v=e.size,h=e.stickyHeader,y=Object(s.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return o.a.createElement("table",Object.assign({},y,{className:i()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(l)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--").concat(b),Boolean(b)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(h)),a),c),ref:t}),r)}));m.propTypes={children:c.node,className:c.string,columns:Object(c.arrayOf)(Object(c.shape)({})),customizableColumns:c.bool,data:Object(c.arrayOf)(Object(c.shape)({})),dividerLines:c.bool,keyValuePairs:c.bool,reveal:c.bool,revealFirstColumn:c.bool,revealLastColumn:c.bool,rowSelection:Object(c.oneOf)(["multi-select","single-select"]),size:Object(c.oneOf)(["compact"]),stickyHeader:c.bool},m.displayName="DataTable",t.a=m},529:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),o=a(3),c=a(2),l=a.n(c),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("tbody",Object.assign({className:l()("vds-tbody",s),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Tbody",t.a=i},530:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),o=a.n(r),c=a(3),l=a(2),i=a.n(l),m=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,c=e.textAlign,l=Object(s.a)(e,["children","className","textAlign"]);return o.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(c),Boolean(c)),r),ref:t},l),a)}));m.propTypes={children:c.node,className:c.string,textAlign:Object(c.oneOf)(["center","left","right"])},m.displayName="Td",t.a=m},531:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),o=a(3),c=a(2),l=a.n(c),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("th",Object.assign({className:l()("vds-th",s),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Th",t.a=i},532:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),o=a(3),c=a(2),l=a.n(c),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("thead",Object.assign({className:l()("vds-thead",s),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Thead",t.a=i},533:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),o=a(3),c=a(2),l=a.n(c),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("tr",Object.assign({className:l()("vds-tr",s),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Tr",t.a=i},534:function(e,t,a){"use strict";var n,s,r,o=a(551),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function l(){r=!1}function i(e){if(e){if(e!==n){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,a){return t!==a.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,l()}}else n!==c&&(n=c,l())}function m(){return r||(r=function(){n||i(c);for(var e,t=n.split(""),a=[],s=o.nextValue();t.length>0;)s=o.nextValue(),e=Math.floor(s*t.length),a.push(t.splice(e,1)[0]);return a.join("")}())}e.exports={get:function(){return n||c},characters:function(e){return i(e),n},seed:function(e){o.seed(e),s!==e&&(l(),s=e)},lookup:function(e){return m()[e]},shuffled:m}},538:function(e,t,a){"use strict";e.exports=a(550)},544:function(e,t){},545:function(e,t){},550:function(e,t,a){"use strict";var n=a(534),s=a(552),r=a(556),o=a(557)||0;function c(){return s(o)}e.exports=c,e.exports.generate=c,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=r},551:function(e,t,a){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},552:function(e,t,a){"use strict";var n,s,r=a(553);a(534);e.exports=function(e){var t="",a=Math.floor(.001*(Date.now()-1567752802062));return a===s?n++:(n=0,s=a),t+=r(7),t+=r(e),n>0&&(t+=r(n)),t+=r(a)}},553:function(e,t,a){"use strict";var n=a(534),s=a(554),r=a(555);e.exports=function(e){for(var t,a=0,o="";!t;)o+=r(s,n.get(),1),t=e<Math.pow(16,a+1),a++;return o}},554:function(e,t,a){"use strict";var n,s="object"===typeof window&&(window.crypto||window.msCrypto);n=s&&s.getRandomValues?function(e){return s.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],a=0;a<e;a++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},555:function(e,t){e.exports=function(e,t,a){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,s=-~(1.6*n*a/t.length),r="";;)for(var o=e(s),c=s;c--;)if((r+=t[o[c]&n]||"").length===+a)return r}},556:function(e,t,a){"use strict";var n=a(534);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},557:function(e,t,a){"use strict";e.exports=0},599:function(e,t,a){"use strict";var n=a(5),s=a(0),r=a.n(s),o=a(3),c=a(2),l=a.n(c),i=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,o=e.multiselect,c=e.role,i=Object(n.a)(e,["children","className","multiselect","role"]);return r.a.createElement("ul",Object.assign({className:l()("vds-listbox",{"vds-select--multi":Boolean(o)},s),ref:t,role:c},i),a)}));i.propTypes={children:o.node,className:o.string,multiselect:o.bool,role:o.string},i.defaultProps={role:"listbox"},i.displayName="Listbox",t.a=i},600:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),o=a.n(r),c=a(3),l=a(2),i=a.n(l),m=Object(r.forwardRef)((function(e,t){var a,r=e.active,c=e.children,l=e.className,m=e.disabled,u=e.focus,d=e.listItemValue,p=e.role,f=e.selected,b=Object(s.a)(e,["active","children","className","disabled","focus","listItemValue","role","selected"]);return o.a.createElement("li",Object.assign({"aria-disabled":Boolean(m)?"true":void 0,className:i()("vds-listbox-item",(a={},Object(n.a)(a,"".concat("vds-state","--active"),Boolean(r)),Object(n.a)(a,"".concat("vds-state","--disabled"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--focus"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--selected"),Boolean(f)),a),l),"data-list-item-value":d,ref:t,role:p,tabIndex:Boolean(m)?"-1":void 0},b),c)}));m.propTypes={active:c.bool,children:c.node,className:c.string,disabled:c.bool,focus:c.bool,listItemValue:c.string,role:c.string,selected:c.bool},m.defaultProps={role:"option"},m.displayName="ListboxItem",t.a=m},645:function(e,t,a){"use strict";var n=a(4),s=a(5),r=a(0),o=a.n(r),c=a(3),l=a(2),i=a.n(l),m=Object(r.forwardRef)((function(e,t){var a,r=e.children,c=e.className,l=e.position,m=e.show,u=Object(s.a)(e,["children","className","position","show"]);return o.a.createElement("div",Object.assign({className:i()((a={},Object(n.a)(a,"".concat("vds-menu"),!l),Object(n.a)(a,"".concat("vds-menu","--").concat(l),Boolean(l)),Object(n.a)(a,"".concat("vds-menu","--show"),Boolean(m)),a),c),ref:t},u),r)}));m.propTypes={children:c.node,className:c.string,position:Object(c.oneOf)(["absolute","fixed"]),show:c.bool},m.displayName="Menu",t.a=m},852:function(e,t,a){"use strict";var n=a(142),s=a(65),r=a(5),o=a(0),c=a.n(o),l=a(2),i=a.n(l),m=a(538),u=a.n(m),d=a(3),p=Object(o.forwardRef)((function(e,t){var a=e.children,n=e.className,s=Object(r.a)(e,["children","className"]);return c.a.createElement("label",Object.assign({className:i()("vds-listbox-label",n),ref:t},s),a)}));p.propTypes={children:d.node,className:d.string},p.displayName="ListboxLabel";var f=p,b=Object(o.forwardRef)((function(e,t){var a=e.className,n=e.type,s=Object(r.a)(e,["className","type"]);return c.a.createElement("input",Object.assign({className:i()("vds-listbox-input",a),ref:t,type:n},s))}));b.propTypes={className:d.string,type:d.string},b.defaultProps={type:"hidden"},b.displayName="ListboxInput";var v=b,h=40,y=35,g=36,x=13,E=32,O=9,j=38,N=function(e){for(var t=e.char,a=e.count,n=e.focusableItems,s=e.start;s<a;s++)if(t===n[s].textContent.trim().toLowerCase().substring(0,1))return s;return-1},I=Object(o.forwardRef)((function(e,t){var a=e.children,l=e.className,m=e.id,d=void 0===m?u.a.generate():m,p=e.label,b=e.name,I=e.onSelect,w=e.selectedListItems,V=e.tabIndex,C=Object(r.a)(e,["children","className","id","label","name","onSelect","selectedListItems","tabIndex"]),L=Object(o.useState)(w),T=Object(s.a)(L,2),k=T[0],R=T[1],S=Object(o.useState)([]),M=Object(s.a)(S,2),P=M[0],B=M[1],A=Object(o.useState)(void 0),D=Object(s.a)(A,2),F=D[0],H=D[1],z=Object(o.useState)(),q=Object(s.a)(z,2),G=q[0],K=q[1],X=Object(o.useRef)(d).current,$=Object(o.useRef)();Object(o.useEffect)((function(){$.current&&B($.current.querySelectorAll("ul > li:not(.vds-state--disabled)"))}),[]),Object(o.useEffect)((function(){R(w)}),[w]);var _=function(e){var t=e.currentTarget.dataset.listItemValue,a=!!$.current&&$.current.classList.contains("vds-select--multi"),s=Object(n.a)(P).indexOf(e.currentTarget),r=[];if(H(s),K(t),a){var o=k.includes(t);a&&o&&(r=Object(n.a)(k.filter((function(e){return e!==t})))),a&&!o&&(r=[].concat(Object(n.a)(k),[t]))}a||(r=[t]),R(r),"function"===typeof I&&I(e,{selected:r})};return c.a.createElement("div",Object.assign({className:i()("vds-listbox-container",l),id:X,ref:t},C),p?c.a.createElement(f,{id:"".concat("vds-listbox-container","-listbox--label-").concat(X),htmlFor:"".concat("vds-listbox-container","-listbox-").concat(X)},p):void 0,c.a.createElement(v,{name:b,value:k.join(",")}),Object(o.cloneElement)(a,{"aria-activedescendant":"number"===typeof F?"".concat("vds-listbox-container","-listbox-item-").concat(X,"-").concat(F):void 0,"aria-labelledby":a.props["aria-labelledby"]?a.props["aria-labelledby"]:p?"".concat("vds-listbox-container","-listbox--label-").concat(X):void 0,"aria-multiselectable":a.props.multiselect?"true":void 0,children:o.Children.map(a.props.children,(function(e,t){return Object(o.cloneElement)(e,{"aria-selected":e.props.listItemValue&&k.includes(e.props.listItemValue)?"true":"false",children:a.props.multiselect?o.Children.map(e.props.children,(function(a,n){return Object(o.cloneElement)(a,{checked:k.includes(e.props.listItemValue),key:"".concat(X,"-").concat(t,"-").concat(n),value:e.props.listItemValue})})):e.props.children,focus:a.props.multiselect?e.props.listItemValue===G:void 0,id:"".concat("vds-listbox-container","-listbox-item-").concat(X,"-").concat(t),key:"".concat(X,"-").concat(t),listItemValue:e.props.listItemValue?e.props.listItemValue:"".concat(X,"-").concat(t),onClick:_,role:"option",selected:e.props.listItemValue&&!a.props.multiselect?k.includes(e.props.listItemValue):void 0,style:{position:"relative"}})})),id:"".concat("vds-listbox-container","-listbox-").concat(X),onBlur:function(e){e.currentTarget.classList.contains("vds-select--multi")&&(K(void 0),H(void 0))},onKeyDown:function(e){var t=e.charCode||e.keyCode,a=P.length,s=e.currentTarget.classList.contains("vds-select--multi"),r=0;if(t===y&&a&&(e.preventDefault(),r=a-1,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),t===g&&a&&(e.preventDefault(),r=0,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),t===j&&a&&(e.preventDefault(),r=F-1<0?0:F-1,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),t===h&&a&&(e.preventDefault(),r=F+1<a-1?F+1:a-1,s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]),H(r)),(t===x||t===E)&&a){e.preventDefault();var o=P[F].dataset.listItemValue,c=k.includes(o);s&&(c&&R(Object(n.a)(k.filter((function(e){return e!==o})))),c||R([].concat(Object(n.a)(k),[o])))}if(!(e.ctrlKey||e.altKey||e.metaKey||e.keyCode===E||e.keyCode===x)){if(1===(i=e.key).length&&i.match(/\S/)){var l=e.key.toLowerCase();-1===(r=N({char:l,count:a,focusableItems:P,start:F+1===a?0:F+1}))&&(r=N({char:l,count:a,focusableItems:P,start:0})),r>-1&&(H(r),s&&K(P[r].dataset.listItemValue),s||R([P[r].dataset.listItemValue]))}var i;!function(e){var t=e.element,a=e.listboxNode;if(t&&a&&a.scrollHeight>a.clientHeight){var n=a.clientHeight+a.scrollTop,s=t.offsetTop+t.offsetHeight;s>n&&(a.scrollTop=s-a.clientHeight),t.offsetTop<a.scrollTop&&(a.scrollTop=t.offsetTop)}}({element:P[r],listboxNode:$.current}),"function"===typeof I&&I(e,{selected:k})}},onKeyUp:function(e){var t=e.charCode||e.keyCode,a=void 0;"undefined"===typeof F&&t===O&&(a=e.currentTarget.classList.contains("vds-select--multi"),H(0),a&&K(P[0].dataset.listItemValue),a||R([P[0].dataset.listItemValue]))},ref:$,role:"listbox",style:{position:"relative"},tabIndex:V}))}));I.defaultProps={selectedListItems:[""],tabIndex:"0"},I.displayName="ListboxContainer";t.a=I}}]);
//# sourceMappingURL=21.effae25b.chunk.js.map