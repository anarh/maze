(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[50],{261:function(e,a,n){"use strict";n.r(a);var t=n(85),r=n(518),c=n(0),s=n.n(c),l=n(517),o=n.n(l),i=n(2),m=n.n(i),d=n(524),u=n(522),p=n(39),b=n(8),v=n(508),h=n(18),f=n(24),E=n(17),g=n(509),y=n(62),N=n(134),O=n(510),j=n(511),C=n(512),x=n(513),k=n(514),T=n(7),B=n(4),w=n(5),S=function(e){var a=e.activeIndex,n=e.ariaLabel,t=e.children,r=e.className,l=e.tag,o=e.separator,i=Object(w.a)(e,["activeIndex","ariaLabel","children","className","tag","separator"]),d=a||c.Children.count(t)-1;return s.a.createElement(l,Object.assign({"aria-label":n,className:m()("".concat("vds-breadcrumb","s-container"),r)},i),s.a.createElement("ol",{className:"".concat("vds-breadcrumb","s")},c.Children.map(t,(function(e,a){return s.a.createElement("li",{"aria-current":d===a?"page":void 0,className:m()("vds-breadcrumb",Object(B.a)({},"".concat("vds-state","--active"),d===a))},a<c.Children.count(t)-1?Object(c.cloneElement)(e,{className:m()("".concat("vds-breadcrumb","-link"),c.Children.only(e).props.className)}):e.props.children,a<c.Children.count(t)-1?Object(c.cloneElement)(o,{role:c.Children.only(o).props.role||"presentation"}):void 0)}))))};S.defaultProps={ariaLabel:"Breadcrumb",separator:s.a.createElement(h.a,{name:"arrow-next",resolution:"tiny"}),tag:"nav"},S.displayName="Breadcrumbs";var L=S,R=function(){return s.a.createElement(f.a,null,s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement(L,null,s.a.createElement("a",{href:"./"},"Level 1"),s.a.createElement("a",{href:"./"},"Level 2"),s.a.createElement("a",{href:"./"},"Level 3"),s.a.createElement("a",{href:"./"},"Level 4")))))},P=n(519),I=[n(520)],A=n(521),F="import React, { Children, cloneElement } from 'react';\nimport { element, elementType, node, number, string } from 'prop-types';\nimport classnames from 'classnames';\nimport Icon from '../icon';\n\nconst CSS_PREFIX = 'vds-breadcrumb';\nconst CSS_STATE = 'vds-state';\n\nconst Breadcrumbs = ({ activeIndex, ariaLabel, children, className, tag: Tag, separator, ...remainingProps }) => {\n  const selectedActiveIndex = activeIndex || Children.count(children) - 1;\n\n  return (\n    <Tag\n      aria-label={ariaLabel}\n      className={classnames(`${CSS_PREFIX}s-container`, className)}\n      {...remainingProps}\n    >\n      <ol className={`${CSS_PREFIX}s`}>\n        {\n          Children.map(children, (child, index) => (\n            <li\n              aria-current={selectedActiveIndex === index ? \"page\" : undefined}\n              className={classnames(CSS_PREFIX, {\n                [`${CSS_STATE}--active`]: selectedActiveIndex === index\n              })}\n            >\n              {\n                index < Children.count(children) - 1\n                  ? cloneElement(\n                    child,\n                    {\n                      className: classnames(`${CSS_PREFIX}-link`, Children.only(child).props.className)\n                    }\n                  )\n                  : child.props.children\n              }\n              {\n                index < Children.count(children) - 1\n                  ? cloneElement(\n                    separator,\n                    {\n                      role: Children.only(separator).props.role || 'presentation'\n                    }\n                  )\n                  : undefined\n              }\n            </li>\n          ))\n        }\n      </ol>\n    </Tag>\n  );\n};\n\nBreadcrumbs.propTypes = {\n  /**\n   * Active index\n   */\n  activeIndex: number,\n\n  /**\n   * Aria label\n   */\n  ariaLabel: string,\n\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Separator\n   */\n  separator: element,\n\n  /**\n  * Tag\n  */\n  tag: elementType\n};\n\nBreadcrumbs.defaultProps = {\n  ariaLabel: 'Breadcrumb',\n  separator: <Icon name=\"arrow-next\" resolution=\"tiny\" />,\n  tag: 'nav'\n};\n\nBreadcrumbs.displayName = 'Breadcrumbs';\n\nexport default Breadcrumbs;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),z="import React from 'react';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport Row from '../../row';\nimport Breadcrumbs from '../../breadcrumbs';\n\nconst BreadcrumbsExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Breadcrumbs>\n          <a href=\"./\">Level 1</a>\n          <a href=\"./\">Level 2</a>\n          <a href=\"./\">Level 3</a>\n          <a href=\"./\">Level 4</a>\n        </Breadcrumbs>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default BreadcrumbsExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),_=function(e){var a=Object(r.a)({},e),n=Object(c.useState)({}),l=Object(t.a)(n,2),i=l[0],B=l[1];return Object(c.useEffect)((function(){try{B(A.parse(F))}catch(e){console.log("\n        React-docgen could not parse props for Breadcrumbs\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),s.a.createElement(f.a,{siblingOfStickyFooter:!0},s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement(T.a,{tag:"h1"},"Breadcrumbs"))),s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement(N.a,null,s.a.createElement(y.a,{tag:s.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/breadcrumbs"),activeClassName:"vds-state--selected"})},s.a.createElement(h.a,{name:"log",resolution:"low"}),"Breadcrumbs Example"),s.a.createElement(y.a,{tag:s.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/breadcrumbs/code"),activeClassName:"vds-state--selected"})},s.a.createElement(h.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),s.a.createElement(y.a,{tag:s.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/breadcrumbs/html"),activeClassName:"vds-state--selected"})},s.a.createElement(h.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/breadcrumbs"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/breadcrumbs")})},s.a.createElement(R,a)),s.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/breadcrumbs/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/breadcrumbs/code")})},s.a.createElement(d.a,Object.assign({},d.b,{theme:u.a,code:z,language:"jsx"}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,c=e.getTokenProps;return s.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return s.a.createElement("div",r({key:a,line:e}),s.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return s.a.createElement("span",c({key:a,token:e}))})))})))}))),s.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/breadcrumbs/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/breadcrumbs/html")})},s.a.createElement(d.a,Object.assign({},d.b,{theme:u.a,code:P.format(o.a.renderToStaticMarkup(s.a.createElement(R,a)),{css:"ignore",parser:"html",plugins:I,printWidth:120}),language:"html"}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,c=e.getTokenProps;return s.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return s.a.createElement("div",r({key:a,line:e}),s.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return s.a.createElement("span",c({key:a,token:e}))})))})))}))))),s.a.createElement(E.a,null,s.a.createElement(b.a,null,s.a.createElement(v.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},s.a.createElement(g.a,{tag:"caption"},"Props"),s.a.createElement(x.a,null,s.a.createElement(k.a,{className:"vds-tr"},s.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),s.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),s.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),s.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),s.a.createElement(O.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return s.a.createElement(k.a,{className:"vds-tr",key:a,tabIndex:"0"},s.a.createElement(j.a,{className:"vds-td"},e[0]," ",e[1].required?s.a.createElement("sup",{style:{color:"red"}}," required"):""),s.a.createElement(j.a,{className:"vds-td"},s.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?s.a.createElement("small",{style:{color:"#1a1f71"}},s.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),s.a.createElement(j.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),s.a.createElement(j.a,{className:"vds-td"},e[1].description))})))))))};_.displayName="BreadcrumbsExample";a.default=_},508:function(e,a,n){"use strict";var t=n(4),r=n(5),c=n(0),s=n.n(c),l=n(3),o=n(2),i=n.n(o),m=Object(c.forwardRef)((function(e,a){var n,c=e.children,l=e.className,o=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,u=e.reveal,p=e.revealFirstColumn,b=e.revealLastColumn,v=e.rowSelection,h=e.size,f=e.stickyHeader,E=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return s.a.createElement("table",Object.assign({},E,{className:i()("vds-data-table",(n={},Object(t.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(o)),Object(t.a)(n,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(t.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(t.a)(n,"".concat("vds-state","--").concat(h),Boolean(h)),Object(t.a)(n,"".concat("vds-state","--reveal"),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(t.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(b)),Object(t.a)(n,"".concat("vds-state","--").concat(v),Boolean(v)),Object(t.a)(n,"".concat("vds-state","--sticky-header"),Boolean(f)),n),l),ref:a}),c)}));m.propTypes={children:l.node,className:l.string,columns:Object(l.arrayOf)(Object(l.shape)({})),customizableColumns:l.bool,data:Object(l.arrayOf)(Object(l.shape)({})),dividerLines:l.bool,keyValuePairs:l.bool,reveal:l.bool,revealFirstColumn:l.bool,revealLastColumn:l.bool,rowSelection:Object(l.oneOf)(["multi-select","single-select"]),size:Object(l.oneOf)(["compact"]),stickyHeader:l.bool},m.displayName="DataTable",a.a=m},509:function(e,a,n){"use strict";var t=n(5),r=n(0),c=n.n(r),s=n(3),l=n(2),o=n.n(l),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,s=e.tag,l=Object(t.a)(e,["children","className","tag"]);return c.a.createElement(s,Object.assign({className:o()("vds-sr",r),ref:a},l),n)}));i.propTypes={children:s.node,className:s.string,tag:s.elementType},i.defaultProps={tag:"span"},i.displayName="Sr",a.a=i},510:function(e,a,n){"use strict";var t=n(5),r=n(0),c=n.n(r),s=n(3),l=n(2),o=n.n(l),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,s=Object(t.a)(e,["children","className"]);return c.a.createElement("tbody",Object.assign({className:o()("vds-tbody",r),ref:a},s),n)}));i.propTypes={children:s.node,className:s.string},i.displayName="Tbody",a.a=i},511:function(e,a,n){"use strict";var t=n(4),r=n(5),c=n(0),s=n.n(c),l=n(3),o=n(2),i=n.n(o),m=Object(c.forwardRef)((function(e,a){var n=e.children,c=e.className,l=e.textAlign,o=Object(r.a)(e,["children","className","textAlign"]);return s.a.createElement("td",Object.assign({className:i()("vds-td",Object(t.a)({},"vds-text--".concat(l),Boolean(l)),c),ref:a},o),n)}));m.propTypes={children:l.node,className:l.string,textAlign:Object(l.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},512:function(e,a,n){"use strict";var t=n(5),r=n(0),c=n.n(r),s=n(3),l=n(2),o=n.n(l),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,s=Object(t.a)(e,["children","className"]);return c.a.createElement("th",Object.assign({className:o()("vds-th",r),ref:a},s),n)}));i.propTypes={children:s.node,className:s.string},i.displayName="Th",a.a=i},513:function(e,a,n){"use strict";var t=n(5),r=n(0),c=n.n(r),s=n(3),l=n(2),o=n.n(l),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,s=Object(t.a)(e,["children","className"]);return c.a.createElement("thead",Object.assign({className:o()("vds-thead",r),ref:a},s),n)}));i.propTypes={children:s.node,className:s.string},i.displayName="Thead",a.a=i},514:function(e,a,n){"use strict";var t=n(5),r=n(0),c=n.n(r),s=n(3),l=n(2),o=n.n(l),i=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,s=Object(t.a)(e,["children","className"]);return c.a.createElement("tr",Object.assign({className:o()("vds-tr",r),ref:a},s),n)}));i.propTypes={children:s.node,className:s.string},i.displayName="Tr",a.a=i},525:function(e,a){},526:function(e,a){}}]);
//# sourceMappingURL=50.26dac698.chunk.js.map