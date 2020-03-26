(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[49],{269:function(e,a,t){"use strict";t.r(a);var r=t(64),n=t(0),c=t.n(n),s=t(542),l=t.n(s),o=t(2),m=t.n(o),i=t(549),d=t(548),u=t(39),p=t(8),b=t(536),v=t(18),f=t(23),h=t(16),E=t(535),g=t(65),y=t(145),N=t(537),O=t(538),j=t(539),B=t(540),k=t(541),w=t(7),T=t(5),L=t(3),R=Object(n.forwardRef)((function(e,a){var t=e.ariaLabel,r=e.children,n=e.className,s=e.tag,l=Object(T.a)(e,["ariaLabel","children","className","tag"]);return(c.a.createElement(s,Object.assign({"aria-label":t,className:m()("".concat("vds-breadcrumbs","-container"),n),ref:a},l),c.a.createElement("ol",{className:"vds-breadcrumbs"},r)))}));R.propTypes={ariaLabel:L.string,children:L.node,className:L.string,tag:L.elementType},R.defaultProps={ariaLabel:"Breadcrumb",tag:"nav"},R.displayName="Breadcrumbs";var S=R,C=t(4),x=Object(n.forwardRef)((function(e,a){var t=e.children,r=(e.className,e.current),s=e.separator,l=e.hideSeparator,o=Object(T.a)(e,["children","className","current","separator","hideSeparator"]);return(c.a.createElement("li",Object.assign({className:m()("vds-breadcrumb",Object(C.a)({},"".concat("vds-state","--active"),r)),ref:a},o),Object(n.cloneElement)(t,{"aria-current":r?"page":void 0,className:m()("".concat("vds-breadcrumb","-link"),n.Children.only(t).props.className)}),l?void 0:s))}));x.propTypes={children:L.element,className:L.string,current:L.bool,separator:L.element,hideSeparator:L.bool},x.defaultProps={separator:c.a.createElement(v.a,{name:"arrow-next",resolution:"tiny",role:"presentation"})},x.displayName="Breadcrumb";var P=x,z=function(){return c.a.createElement(f.a,null,c.a.createElement(h.a,null,c.a.createElement(p.a,null,c.a.createElement(S,null,c.a.createElement(P,null,c.a.createElement("a",{href:"./"},"Level 1")),c.a.createElement(P,null,c.a.createElement("a",{href:"./"},"Level 2")),c.a.createElement(P,null,c.a.createElement("a",{href:"./"},"Level 3")),c.a.createElement(P,{current:!0,hideSeparator:!0},c.a.createElement("a",{href:"./"},"Level 4"))))))},F=t(545),A=[t(546)],V=t(547),H="import React, { forwardRef } from 'react';\nimport { elementType, node, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-breadcrumbs';\n\nconst Breadcrumbs = forwardRef(({\n  ariaLabel,\n  children,\n  className,\n  tag: Tag,\n  ...remainingProps\n}, ref) => (\n    <Tag\n      aria-label={ariaLabel}\n      className={classnames(`${CSS_PREFIX}-container`, className)}\n      ref={ref}\n      {...remainingProps}\n    >\n      <ol className={CSS_PREFIX}>\n        {children}\n      </ol>\n    </Tag>\n  )\n);\n\nBreadcrumbs.propTypes = {\n  /**\n   * Aria label\n   */\n  ariaLabel: string,\n\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n  * Tag\n  */\n  tag: elementType\n};\n\nBreadcrumbs.defaultProps = {\n  ariaLabel: 'Breadcrumb',\n  tag: 'nav'\n};\n\nBreadcrumbs.displayName = 'Breadcrumbs';\n\nexport default Breadcrumbs;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),X="import React from 'react';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport Row from '../../row';\nimport Breadcrumbs from '../../breadcrumbs';\nimport Breadcrumb from '../../breadcrumb';\n\nconst BreadcrumbsExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Breadcrumbs>\n          <Breadcrumb>\n            <a href=\"./\">Level 1</a>\n          </Breadcrumb>\n          <Breadcrumb>\n            <a href=\"./\">Level 2</a>\n          </Breadcrumb>\n          <Breadcrumb>\n            <a href=\"./\">Level 3</a>\n          </Breadcrumb>\n          <Breadcrumb current hideSeparator>\n            <a href=\"./\">Level 4</a>\n          </Breadcrumb>\n        </Breadcrumbs>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default BreadcrumbsExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),D=function(e){var a=Object.assign({},e),t=Object(n.useState)({}),s=Object(r.a)(t,2),o=s[0],T=s[1];return Object(n.useEffect)((function(){try{T(V.parse(H))}catch(e){console.log("\n        React-docgen could not parse props for Breadcrumbs\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(f.a,{siblingOfStickyFooter:!0},c.a.createElement(h.a,null,c.a.createElement(p.a,null,c.a.createElement(w.a,{tag:"h1"},"Breadcrumbs"))),c.a.createElement(h.a,null,c.a.createElement(p.a,{role:"navigation","aria-label":"Secondary"},c.a.createElement(y.a,{role:"none"},c.a.createElement(g.a,{role:void 0,tag:c.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react-1255","/components/breadcrumbs"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"log",resolution:"low"}),"Breadcrumbs Example"),c.a.createElement(g.a,{role:void 0,tag:c.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react-1255","/components/breadcrumbs/code"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),c.a.createElement(g.a,{role:void 0,tag:c.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react-1255","/components/breadcrumbs/html"),activeClassName:"vds-state--selected"})},c.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),c.a.createElement(h.a,null,c.a.createElement(p.a,null,c.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1255","/components/breadcrumbs"),"vds-state--show":a.match.path==="".concat("/vds-react-1255","/components/breadcrumbs")})},c.a.createElement(z,a)),c.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1255","/components/breadcrumbs/code"),"vds-state--show":a.match.path==="".concat("/vds-react-1255","/components/breadcrumbs/code")})},c.a.createElement(i.a,Object.assign({},i.b,{theme:d.a,code:X,language:"jsx"}),(function(e){var a=e.className,t=e.style,r=e.tokens,n=e.getLineProps,s=e.getTokenProps;return(c.a.createElement("pre",{className:a,style:t},r.map((function(e,a){return c.a.createElement("div",Object.assign({},n({key:a,line:e}),{key:a}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",Object.assign({},s({key:a,token:e}),{key:a}))})))}))))}))),c.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1255","/components/breadcrumbs/html"),"vds-state--show":a.match.path==="".concat("/vds-react-1255","/components/breadcrumbs/html")})},c.a.createElement(i.a,Object.assign({},i.b,{theme:d.a,code:F.format(l.a.renderToStaticMarkup(c.a.createElement(z,a)),{css:"ignore",parser:"html",plugins:A,printWidth:120}),language:"html"}),(function(e){var a=e.className,t=e.style,r=e.tokens,n=e.getLineProps,s=e.getTokenProps;return(c.a.createElement("pre",{className:a,style:t},r.map((function(e,a){return c.a.createElement("div",Object.assign({},n({key:a,line:e}),{key:a}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",Object.assign({},s({key:a,token:e}),{key:a}))})))}))))}))))),c.a.createElement(h.a,null,c.a.createElement(p.a,null,c.a.createElement(b.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(E.a,{tag:"caption"},"Props"),c.a.createElement(B.a,null,c.a.createElement(k.a,{className:"vds-tr"},c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(N.a,null,o.props&&Object.entries(o.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return c.a.createElement(k.a,{className:"vds-tr",key:a},c.a.createElement(j.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?c.a.createElement("strong",null," - required"):""),c.a.createElement(O.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),c.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};D.displayName="BreadcrumbsExample";a.default=D},535:function(e,a,t){"use strict";var r=t(5),n=t(0),c=t.n(n),s=t(3),l=t(2),o=t.n(l),m=Object(n.forwardRef)((function(e,a){var t=e.children,n=e.className,s=e.tag,l=Object(r.a)(e,["children","className","tag"]);return(c.a.createElement(s,Object.assign({className:o()("vds-screen-reader",n),ref:a},l),t))}));m.propTypes={children:s.node,className:s.string,tag:s.elementType},m.defaultProps={tag:"span"},m.displayName="ScreenReader",a.a=m},536:function(e,a,t){"use strict";var r=t(4),n=t(5),c=t(0),s=t.n(c),l=t(3),o=t(2),m=t.n(o),i=Object(c.forwardRef)((function(e,a){var t,c=e.children,l=e.className,o=e.customizableColumns,i=e.dividerLines,d=e.keyValuePairs,u=e.reveal,p=e.revealFirstColumn,b=e.revealLastColumn,v=e.rowSelection,f=e.size,h=e.stickyHeader,E=Object(n.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return s.a.createElement("table",Object.assign({},E,{className:m()("vds-data-table",(t={},Object(r.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(o)),Object(r.a)(t,"".concat("vds-state","--divider-lines"),Boolean(i)),Object(r.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(r.a)(t,"".concat("vds-state","--").concat(f),Boolean(f)),Object(r.a)(t,"".concat("vds-state","--reveal"),Boolean(u)),Object(r.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(r.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(b)),Object(r.a)(t,"".concat("vds-state","--").concat(v),Boolean(v)),Object(r.a)(t,"".concat("vds-state","--sticky-header"),Boolean(h)),t),l),ref:a}),c)}));i.propTypes={children:l.node,className:l.string,columns:Object(l.arrayOf)(Object(l.shape)({})),customizableColumns:l.bool,data:Object(l.arrayOf)(Object(l.shape)({})),dividerLines:l.bool,keyValuePairs:l.bool,reveal:l.bool,revealFirstColumn:l.bool,revealLastColumn:l.bool,rowSelection:Object(l.oneOf)(["multi-select","single-select"]),size:Object(l.oneOf)(["compact"]),stickyHeader:l.bool},i.displayName="DataTable",a.a=i},537:function(e,a,t){"use strict";var r=t(5),n=t(0),c=t.n(n),s=t(3),l=t(2),o=t.n(l),m=Object(n.forwardRef)((function(e,a){var t=e.children,n=e.className,s=Object(r.a)(e,["children","className"]);return(c.a.createElement("tbody",Object.assign({className:o()("vds-tbody",n),ref:a},s),t))}));m.propTypes={children:s.node,className:s.string},m.displayName="Tbody",a.a=m},538:function(e,a,t){"use strict";var r=t(4),n=t(5),c=t(0),s=t.n(c),l=t(3),o=t(2),m=t.n(o),i=Object(c.forwardRef)((function(e,a){var t=e.children,c=e.className,l=e.textAlign,o=Object(n.a)(e,["children","className","textAlign"]);return(s.a.createElement("td",Object.assign({className:m()("vds-td",Object(r.a)({},"vds-text--".concat(l),Boolean(l)),c),ref:a},o),t))}));i.propTypes={children:l.node,className:l.string,textAlign:Object(l.oneOf)(["center","left","right"])},i.displayName="Td",a.a=i},539:function(e,a,t){"use strict";var r=t(5),n=t(0),c=t.n(n),s=t(3),l=t(2),o=t.n(l),m=Object(n.forwardRef)((function(e,a){var t=e.children,n=e.className,s=Object(r.a)(e,["children","className"]);return(c.a.createElement("th",Object.assign({className:o()("vds-th",n),ref:a},s),t))}));m.propTypes={children:s.node,className:s.string},m.displayName="Th",a.a=m},540:function(e,a,t){"use strict";var r=t(5),n=t(0),c=t.n(n),s=t(3),l=t(2),o=t.n(l),m=Object(n.forwardRef)((function(e,a){var t=e.children,n=e.className,s=Object(r.a)(e,["children","className"]);return(c.a.createElement("thead",Object.assign({className:o()("vds-thead",n),ref:a},s),t))}));m.propTypes={children:s.node,className:s.string},m.displayName="Thead",a.a=m},541:function(e,a,t){"use strict";var r=t(5),n=t(0),c=t.n(n),s=t(3),l=t(2),o=t.n(l),m=Object(n.forwardRef)((function(e,a){var t=e.children,n=e.className,s=Object(r.a)(e,["children","className"]);return(c.a.createElement("tr",Object.assign({className:o()("vds-tr",n),ref:a},s),t))}));m.propTypes={children:s.node,className:s.string},m.displayName="Tr",a.a=m},550:function(e,a){},551:function(e,a){}}]);
//# sourceMappingURL=49.8ad2e3ae.chunk.js.map