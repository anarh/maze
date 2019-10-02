(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[53],{254:function(e,a,t){"use strict";t.r(a);var n=t(96),l=t(513),s=t(0),c=t.n(s),o=t(4),r=t.n(o),m=t(516),d=t(514),i=t.n(d),p=t(37),u=t(8),b=t(504),v=t(16),E=t(23),y=t(17),f=t(505),g=t(60),h=t(132),N=t(506),O=t(507),j=t(508),w=t(509),C=t(510),D=t(7),R=t(2),T=t(5),x=function(e){var a,t=e.children,n=e.className,l=e.disabled,s=e.label,o=e.tabIndex,m=e.type,d=Object(T.a)(e,["children","className","disabled","label","tabIndex","type"]);return c.a.createElement("div",Object.assign({className:r()((a={},Object(R.a)(a,"".concat("vds-dot","--").concat(m),Boolean(m)),Object(R.a)(a,"".concat("vds-state","--disabled"),Boolean(l)),a),n),tabIndex:l?-1:o},d),c.a.createElement("div",{className:"".concat("vds-dot","--screen-reader")},s),c.a.createElement("div",{className:"".concat("vds-dot","-label"),"aria-hidden":"true",role:"presentation"},t))};x.defaultProps={type:"message"},x.displayName="Dot";var S=x,k=function(){return c.a.createElement(E.a,null,c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(D.a,{tag:"h2"},"Dot (Message)"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(S,{label:"24 messages",type:"message"},"24"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(D.a,{tag:"h2"},"Dot (Comment)"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(S,{label:"2 unread comments",type:"comment"},"2"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(D.a,{tag:"h2"},"Dot (Message disabled)"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(S,{disabled:!0,label:"24 messages",type:"message"},"24"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(D.a,{tag:"h2"},"Dot (Comment disabled)"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(S,{disabled:!0,label:"2 unread comments",type:"comment"},"2"))))},P=t(515),B="import React from 'react';\nimport { bool, node, number, oneOf, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-dot';\nconst CSS_STATE = 'vds-state';\n\nconst Dot = ({ children, className, disabled, label, tabIndex, type, ...remainingProps }) => (\n  <div\n    className={classnames({\n      [`${CSS_PREFIX}--${type}`]: Boolean(type),\n      [`${CSS_STATE}--disabled`]: Boolean(disabled)\n    }, className)}\n    tabIndex={disabled ? -1 : tabIndex}\n    {...remainingProps}\n  >\n    <div className={`${CSS_PREFIX}--screen-reader`}>{label}</div>\n    <div className={`${CSS_PREFIX}-label`} aria-hidden=\"true\" role=\"presentation\">\n      {children}\n    </div>\n  </div>\n);\n\nDot.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Disabled\n   */\n  disabled: bool,\n\n  /**\n   * For screen reader\n   */\n  label: string,\n\n  /**\n   * @ignore\n   */\n  tabIndex: oneOfType([number, string]),\n\n  /**\n   * Type\n   */\n  type: oneOf(['message', 'comment'])\n};\n\nDot.defaultProps = {\n  type: 'message'\n};\n\nDot.displayName = 'Dot';\n\nexport default Dot;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),I='import React from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\nimport Dot from \'../../dot\';\n\nconst DotExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">Dot (Message)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Dot label="24 messages" type="message">24</Dot>\n      </Col>\n    </Row>\n\n    <Row>\n      <Col>\n        <Typography tag="h2">Dot (Comment)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Dot label="2 unread comments" type="comment">2</Dot>\n      </Col>\n    </Row>\n\n    <Row>\n      <Col>\n        <Typography tag="h2">Dot (Message disabled)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Dot disabled label="24 messages" type="message">24</Dot>\n      </Col>\n    </Row>\n\n    <Row>\n      <Col>\n        <Typography tag="h2">Dot (Comment disabled)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Dot disabled label="2 unread comments" type="comment">2</Dot>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default DotExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),F=function(e){var a=Object(l.a)({},e),t=Object(s.useState)({}),o=Object(n.a)(t,2),d=o[0],R=o[1];return Object(s.useEffect)((function(){try{R(P.parse(B))}catch(e){console.log("\n        React-docgen could not parse props for Dot\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(E.a,{siblingOfStickyFooter:!0},c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(D.a,{tag:"h1"},"Dot"))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(g.a,{tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/dot"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"log",resolution:"low"}),"Dot Example"),c.a.createElement(g.a,{tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/dot/code"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Dot Example")))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:r()({"vds-state--hidden":a.match.path==="".concat("/vds-react","/components/dot/code"),"vds-state--show":a.match.path!=="".concat("/vds-react","/components/dot/code")})},c.a.createElement(k,a)),c.a.createElement("div",{className:r()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/dot/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/dot/code")})},c.a.createElement(m.a,Object.assign({},m.b,{theme:i.a,code:I,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,s=e.getTokenProps;return c.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return c.a.createElement("div",l({key:a,line:e}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",s({key:a,token:e}))})))})))}))))),c.a.createElement(y.a,null,c.a.createElement(u.a,null,c.a.createElement(b.a,{className:r()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(f.a,{tag:"caption"},"Props"),c.a.createElement(w.a,null,c.a.createElement(C.a,{className:"vds-tr"},c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(N.a,null,d.props&&Object.entries(d.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return c.a.createElement(C.a,{className:"vds-tr",key:a,tabIndex:"0"},c.a.createElement(O.a,{className:"vds-td"},e[0]," ",e[1].required?c.a.createElement("sup",{style:{color:"red"}}," required"):""),c.a.createElement(O.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),c.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};F.displayName="DotExample";a.default=F},504:function(e,a,t){"use strict";var n=t(2),l=t(5),s=t(0),c=t.n(s),o=t(3),r=t(4),m=t.n(r),d=Object(s.forwardRef)((function(e,a){var t,s=e.children,o=e.className,r=e.customizableColumns,d=e.dividerLines,i=e.keyValuePairs,p=e.reveal,u=e.revealFirstColumn,b=e.revealLastColumn,v=e.rowSelection,E=e.size,y=e.stickyHeader,f=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return c.a.createElement("table",Object.assign({},f,{className:m()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(r)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(i)),Object(n.a)(t,"".concat("vds-state","--").concat(E),Boolean(E)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(b)),Object(n.a)(t,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(y)),t),o),ref:a}),s)}));d.propTypes={children:o.node,className:o.string,columns:Object(o.arrayOf)(Object(o.shape)({})),customizableColumns:o.bool,data:Object(o.arrayOf)(Object(o.shape)({})),dividerLines:o.bool,keyValuePairs:o.bool,reveal:o.bool,revealFirstColumn:o.bool,revealLastColumn:o.bool,rowSelection:Object(o.oneOf)(["multi-select","single-select"]),size:Object(o.oneOf)(["compact"]),stickyHeader:o.bool},d.displayName="DataTable",a.a=d},505:function(e,a,t){"use strict";var n=t(5),l=t(0),s=t.n(l),c=t(3),o=t(4),r=t.n(o),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,c=e.tag,o=Object(n.a)(e,["children","className","tag"]);return s.a.createElement(c,Object.assign({className:r()("vds-sr",l),ref:a},o),t)}));m.propTypes={children:c.node,className:c.string,tag:c.elementType},m.defaultProps={tag:"span"},m.displayName="Sr",a.a=m},506:function(e,a,t){"use strict";var n=t(5),l=t(0),s=t.n(l),c=t(3),o=t(4),r=t.n(o),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,c=Object(n.a)(e,["children","className"]);return s.a.createElement("tbody",Object.assign({className:r()("vds-tbody",l),ref:a},c),t)}));m.propTypes={children:c.node,className:c.string},m.displayName="Tbody",a.a=m},507:function(e,a,t){"use strict";var n=t(2),l=t(5),s=t(0),c=t.n(s),o=t(3),r=t(4),m=t.n(r),d=Object(s.forwardRef)((function(e,a){var t=e.children,s=e.className,o=e.textAlign,r=Object(l.a)(e,["children","className","textAlign"]);return c.a.createElement("td",Object.assign({className:m()("vds-td",Object(n.a)({},"vds-text--".concat(o),Boolean(o)),s),ref:a},r),t)}));d.propTypes={children:o.node,className:o.string,textAlign:Object(o.oneOf)(["center","left","right"])},d.displayName="Td",a.a=d},508:function(e,a,t){"use strict";var n=t(5),l=t(0),s=t.n(l),c=t(3),o=t(4),r=t.n(o),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,c=Object(n.a)(e,["children","className"]);return s.a.createElement("th",Object.assign({className:r()("vds-th",l),ref:a},c),t)}));m.propTypes={children:c.node,className:c.string},m.displayName="Th",a.a=m},509:function(e,a,t){"use strict";var n=t(5),l=t(0),s=t.n(l),c=t(3),o=t(4),r=t.n(o),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,c=Object(n.a)(e,["children","className"]);return s.a.createElement("thead",Object.assign({className:r()("vds-thead",l),ref:a},c),t)}));m.propTypes={children:c.node,className:c.string},m.displayName="Thead",a.a=m},510:function(e,a,t){"use strict";var n=t(5),l=t(0),s=t.n(l),c=t(3),o=t(4),r=t.n(o),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,c=Object(n.a)(e,["children","className"]);return s.a.createElement("tr",Object.assign({className:r()("vds-tr",l),ref:a},c),t)}));m.propTypes={children:c.node,className:c.string},m.displayName="Tr",a.a=m},517:function(e,a){}}]);
//# sourceMappingURL=53.f6e93c17.chunk.js.map