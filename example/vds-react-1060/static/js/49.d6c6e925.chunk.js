(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[49],{284:function(e,a,t){"use strict";t.r(a);var n=t(85),l=t(518),c=t(0),s=t.n(c),r=t(517),o=t.n(r),i=t(2),m=t.n(i),d=t(523),p=t(522),u=t(39),f=t(8),v=t(508),E=t(18),h=t(24),y=t(17),b=t(509),g=t(62),N=t(134),O=t(510),j=t(511),w=t(512),k=t(513),C=t(514),L=t(7),R=t(613),T=function(){return s.a.createElement(h.a,null,s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(L.a,{tag:"h2"},"List (Un-ordered)"))),s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(R.a,null,s.a.createElement("li",null,"Apples"),s.a.createElement("li",null,"Bananas"),s.a.createElement("li",null,"Bread"),s.a.createElement("li",null,"Pineapple cake"),s.a.createElement("li",null,"Coffee beans")))),s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(L.a,{tag:"h2"},"List (Ordered)"))),s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(R.a,{type:"ordered"},s.a.createElement("li",null,"Apples"),s.a.createElement("li",null,"Bananas"),s.a.createElement("li",null,"Bread"),s.a.createElement("li",null,"Pineapple cake"),s.a.createElement("li",null,"Coffee beans")))))},B=t(519),P=[t(520)],x=t(521),S="import React, { Children, cloneElement, forwardRef } from 'react';\nimport { node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-list';\n\nconst List = forwardRef((props, ref) => {\n  const {\n    children,\n    className,\n    type,\n    ...remainingProps\n  } = props;\n\n  const Tag = type === 'ordered' ? 'ol' : 'ul';\n\n  return (\n    <Tag\n      className={classnames(CSS_PREFIX, {\n        [`${CSS_PREFIX}--${type}`]: Boolean(type)\n      }, className )}\n      ref={ref}\n      {...remainingProps}\n    >\n      {\n        Children.map(children, child => {\n          if (child) {\n            return cloneElement(child, {\n              className: classnames(child.props.className, `${CSS_PREFIX}-item`)\n            });\n          }\n\n          return child;\n        })\n      }\n    </Tag>\n  );\n});\n\nList.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Type\n   */\n  type: oneOf(['ordered'])\n};\n\nList.displayName = 'List';\n\nexport default List;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),A="import React from 'react';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport List from '../../list';\nimport Row from '../../row';\nimport Typography from '../../typography';\n\nconst ListExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag=\"h2\">List (Un-ordered)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <List>\n          <li>Apples</li>\n          <li>Bananas</li>\n          <li>Bread</li>\n          <li>Pineapple cake</li>\n          <li>Coffee beans</li>\n        </List>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag=\"h2\">List (Ordered)</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <List type=\"ordered\">\n          <li>Apples</li>\n          <li>Bananas</li>\n          <li>Bread</li>\n          <li>Pineapple cake</li>\n          <li>Coffee beans</li>\n        </List>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default ListExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),z=function(e){var a=Object(l.a)({},e),t=Object(c.useState)({}),r=Object(n.a)(t,2),i=r[0],R=r[1];return Object(c.useEffect)((function(){try{R(x.parse(S))}catch(e){console.log("\n        React-docgen could not parse props for List\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),s.a.createElement(h.a,{siblingOfStickyFooter:!0},s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(L.a,{tag:"h1"},"List"))),s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(N.a,null,s.a.createElement(g.a,{tag:s.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react-1060","/components/list"),activeClassName:"vds-state--selected"})},s.a.createElement(E.a,{name:"log",resolution:"low"}),"List Example"),s.a.createElement(g.a,{tag:s.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react-1060","/components/list/code"),activeClassName:"vds-state--selected"})},s.a.createElement(E.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),s.a.createElement(g.a,{tag:s.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react-1060","/components/list/html"),activeClassName:"vds-state--selected"})},s.a.createElement(E.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1060","/components/list"),"vds-state--show":a.match.path==="".concat("/vds-react-1060","/components/list")})},s.a.createElement(T,a)),s.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1060","/components/list/code"),"vds-state--show":a.match.path==="".concat("/vds-react-1060","/components/list/code")})},s.a.createElement(d.a,Object.assign({},d.b,{theme:p.a,code:A,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,c=e.getTokenProps;return s.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return s.a.createElement("div",l({key:a,line:e}),s.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return s.a.createElement("span",c({key:a,token:e}))})))})))}))),s.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1060","/components/list/html"),"vds-state--show":a.match.path==="".concat("/vds-react-1060","/components/list/html")})},s.a.createElement(d.a,Object.assign({},d.b,{theme:p.a,code:B.format(o.a.renderToStaticMarkup(s.a.createElement(T,a)),{css:"ignore",parser:"html",plugins:P,printWidth:120}),language:"html"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,c=e.getTokenProps;return s.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return s.a.createElement("div",l({key:a,line:e}),s.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return s.a.createElement("span",c({key:a,token:e}))})))})))}))))),s.a.createElement(y.a,null,s.a.createElement(f.a,null,s.a.createElement(v.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},s.a.createElement(b.a,{tag:"caption"},"Props"),s.a.createElement(k.a,null,s.a.createElement(C.a,{className:"vds-tr"},s.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),s.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),s.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),s.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),s.a.createElement(O.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return s.a.createElement(C.a,{className:"vds-tr",key:a,tabIndex:"0"},s.a.createElement(j.a,{className:"vds-td"},e[0]," ",e[1].required?s.a.createElement("sup",{style:{color:"red"}}," required"):""),s.a.createElement(j.a,{className:"vds-td"},s.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?s.a.createElement("small",{style:{color:"#1a1f71"}},s.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),s.a.createElement(j.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),s.a.createElement(j.a,{className:"vds-td"},e[1].description))})))))))};z.displayName="ListExample";a.default=z},508:function(e,a,t){"use strict";var n=t(4),l=t(5),c=t(0),s=t.n(c),r=t(3),o=t(2),i=t.n(o),m=Object(c.forwardRef)((function(e,a){var t,c=e.children,r=e.className,o=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,p=e.reveal,u=e.revealFirstColumn,f=e.revealLastColumn,v=e.rowSelection,E=e.size,h=e.stickyHeader,y=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return s.a.createElement("table",Object.assign({},y,{className:i()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(o)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--").concat(E),Boolean(E)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(n.a)(t,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(h)),t),r),ref:a}),c)}));m.propTypes={children:r.node,className:r.string,columns:Object(r.arrayOf)(Object(r.shape)({})),customizableColumns:r.bool,data:Object(r.arrayOf)(Object(r.shape)({})),dividerLines:r.bool,keyValuePairs:r.bool,reveal:r.bool,revealFirstColumn:r.bool,revealLastColumn:r.bool,rowSelection:Object(r.oneOf)(["multi-select","single-select"]),size:Object(r.oneOf)(["compact"]),stickyHeader:r.bool},m.displayName="DataTable",a.a=m},509:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),s=t(3),r=t(2),o=t.n(r),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,s=e.tag,r=Object(n.a)(e,["children","className","tag"]);return c.a.createElement(s,Object.assign({className:o()("vds-sr",l),ref:a},r),t)}));i.propTypes={children:s.node,className:s.string,tag:s.elementType},i.defaultProps={tag:"span"},i.displayName="Sr",a.a=i},510:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),s=t(3),r=t(2),o=t.n(r),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,s=Object(n.a)(e,["children","className"]);return c.a.createElement("tbody",Object.assign({className:o()("vds-tbody",l),ref:a},s),t)}));i.propTypes={children:s.node,className:s.string},i.displayName="Tbody",a.a=i},511:function(e,a,t){"use strict";var n=t(4),l=t(5),c=t(0),s=t.n(c),r=t(3),o=t(2),i=t.n(o),m=Object(c.forwardRef)((function(e,a){var t=e.children,c=e.className,r=e.textAlign,o=Object(l.a)(e,["children","className","textAlign"]);return s.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(r),Boolean(r)),c),ref:a},o),t)}));m.propTypes={children:r.node,className:r.string,textAlign:Object(r.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},512:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),s=t(3),r=t(2),o=t.n(r),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,s=Object(n.a)(e,["children","className"]);return c.a.createElement("th",Object.assign({className:o()("vds-th",l),ref:a},s),t)}));i.propTypes={children:s.node,className:s.string},i.displayName="Th",a.a=i},513:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),s=t(3),r=t(2),o=t.n(r),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,s=Object(n.a)(e,["children","className"]);return c.a.createElement("thead",Object.assign({className:o()("vds-thead",l),ref:a},s),t)}));i.propTypes={children:s.node,className:s.string},i.displayName="Thead",a.a=i},514:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),s=t(3),r=t(2),o=t.n(r),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,s=Object(n.a)(e,["children","className"]);return c.a.createElement("tr",Object.assign({className:o()("vds-tr",l),ref:a},s),t)}));i.propTypes={children:s.node,className:s.string},i.displayName="Tr",a.a=i},524:function(e,a){},525:function(e,a){},613:function(e,a,t){"use strict";var n=t(4),l=t(5),c=t(0),s=t.n(c),r=t(2),o=t.n(r),i=Object(c.forwardRef)((function(e,a){var t=e.children,r=e.className,i=e.type,m=Object(l.a)(e,["children","className","type"]),d="ordered"===i?"ol":"ul";return s.a.createElement(d,Object.assign({className:o()("vds-list",Object(n.a)({},"".concat("vds-list","--").concat(i),Boolean(i)),r),ref:a},m),c.Children.map(t,(function(e){return e?Object(c.cloneElement)(e,{className:o()(e.props.className,"".concat("vds-list","-item"))}):e})))}));i.displayName="List",a.a=i}}]);
//# sourceMappingURL=49.d6c6e925.chunk.js.map