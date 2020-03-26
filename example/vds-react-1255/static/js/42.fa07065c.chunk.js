(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[42],{280:function(e,a,t){"use strict";t.r(a);var n=t(64),l=t(0),c=t.n(l),r=t(542),s=t.n(r),o=t(2),m=t.n(o),i=t(549),d=t(548),p=t(39),u=t(8),g=t(536),y=t(18),E=t(23),h=t(16),b=t(535),v=t(65),f=t(145),w=t(537),C=t(538),R=t(539),N=t(540),O=t(541),S=t(7),j=t(681),B=function(){return c.a.createElement(E.a,null,c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Accent"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"accent"},"Accent"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Warning"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"warning"},"Warning"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Critical"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"critical"},"Critical"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Stable"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"stable"},"Stable"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Disabled"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"disabled"},"Disabled"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Status"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"status"},"Status"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Accent Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"accent",size:"small"},"Accent Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Warning Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"warning",size:"small"},"Warning Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Critical Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"critical",size:"small"},"Critical Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Stable Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"stable",size:"small"},"Stable Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Disabled Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"disabled",size:"small"},"Disabled Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h2"},"Status Small"))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(j.a,{type:"status",size:"small"},"Status Small"))))))},T=t(545),k=[t(546)],z=t(547),x="import React from 'react';\nimport { node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-badge';\n\nconst Badge = ({ children, className, size, type, ...remainingProps }) => (\n  <span\n    className={classnames(CSS_PREFIX, {\n      [`${CSS_PREFIX}--${type}`]: Boolean(type),\n      [`${CSS_PREFIX}--${size}`]: Boolean(size)\n    }, className)}\n    {...remainingProps}\n  >\n    {children}\n  </span>\n);\n\nBadge.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Size\n   */\n  size: oneOf([\n    'small'\n  ]),\n\n  /**\n   * Type\n   */\n  type: oneOf([\n    'accent',\n    'warning',\n    'critical',\n    'stable',\n    'disabled',\n    'status'\n  ])\n};\n\nBadge.displayName = 'Badge';\n\nexport default Badge;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),P='import React from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Badge from \'../../badge\';\nimport Typography from \'../../typography\';\n\nconst BadgeExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Row>\n          <Col>\n            <Typography tag="h2">Accent</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="accent">Accent</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Warning</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="warning">Warning</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Critical</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="critical">Critical</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Stable</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="stable">Stable</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Disabled</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="disabled">Disabled</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Status</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="status">Status</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Accent Small</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="accent" size="small">Accent Small</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Warning Small</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="warning" size="small">Warning Small</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Critical Small</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="critical" size="small">Critical Small</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Stable Small</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="stable" size="small">Stable Small</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Disabled Small</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="disabled" size="small">Disabled Small</Badge>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Status Small</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Badge type="status" size="small">Status Small</Badge>\n          </Col>\n        </Row>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default BadgeExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),A=function(e){var a=Object.assign({},e),t=Object(l.useState)({}),r=Object(n.a)(t,2),o=r[0],j=r[1];return Object(l.useEffect)((function(){try{j(z.parse(x))}catch(e){console.log("\n        React-docgen could not parse props for Badge\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(E.a,{siblingOfStickyFooter:!0},c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(S.a,{tag:"h1"},"Badge"))),c.a.createElement(h.a,null,c.a.createElement(u.a,{role:"navigation","aria-label":"Secondary"},c.a.createElement(f.a,{role:"none"},c.a.createElement(v.a,{role:void 0,tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react-1255","/components/badge"),activeClassName:"vds-state--selected"})},c.a.createElement(y.a,{name:"log",resolution:"low"}),"Badge Example"),c.a.createElement(v.a,{role:void 0,tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react-1255","/components/badge/code"),activeClassName:"vds-state--selected"})},c.a.createElement(y.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),c.a.createElement(v.a,{role:void 0,tag:c.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react-1255","/components/badge/html"),activeClassName:"vds-state--selected"})},c.a.createElement(y.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1255","/components/badge"),"vds-state--show":a.match.path==="".concat("/vds-react-1255","/components/badge")})},c.a.createElement(B,a)),c.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1255","/components/badge/code"),"vds-state--show":a.match.path==="".concat("/vds-react-1255","/components/badge/code")})},c.a.createElement(i.a,Object.assign({},i.b,{theme:d.a,code:P,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return(c.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return c.a.createElement("div",Object.assign({},l({key:a,line:e}),{key:a}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",Object.assign({},r({key:a,token:e}),{key:a}))})))}))))}))),c.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-1255","/components/badge/html"),"vds-state--show":a.match.path==="".concat("/vds-react-1255","/components/badge/html")})},c.a.createElement(i.a,Object.assign({},i.b,{theme:d.a,code:T.format(s.a.renderToStaticMarkup(c.a.createElement(B,a)),{css:"ignore",parser:"html",plugins:k,printWidth:120}),language:"html"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return(c.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return c.a.createElement("div",Object.assign({},l({key:a,line:e}),{key:a}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return c.a.createElement("span",Object.assign({},r({key:a,token:e}),{key:a}))})))}))))}))))),c.a.createElement(h.a,null,c.a.createElement(u.a,null,c.a.createElement(g.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(b.a,{tag:"caption"},"Props"),c.a.createElement(N.a,null,c.a.createElement(O.a,{className:"vds-tr"},c.a.createElement(R.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(R.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(R.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(R.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(w.a,null,o.props&&Object.entries(o.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return c.a.createElement(O.a,{className:"vds-tr",key:a},c.a.createElement(R.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?c.a.createElement("strong",null," - required"):""),c.a.createElement(C.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),c.a.createElement(C.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(C.a,{className:"vds-td"},e[1].description))})))))))};A.displayName="BadgeExample";a.default=A},535:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(2),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=e.tag,s=Object(n.a)(e,["children","className","tag"]);return(c.a.createElement(r,Object.assign({className:o()("vds-screen-reader",l),ref:a},s),t))}));m.propTypes={children:r.node,className:r.string,tag:r.elementType},m.defaultProps={tag:"span"},m.displayName="ScreenReader",a.a=m},536:function(e,a,t){"use strict";var n=t(4),l=t(5),c=t(0),r=t.n(c),s=t(3),o=t(2),m=t.n(o),i=Object(c.forwardRef)((function(e,a){var t,c=e.children,s=e.className,o=e.customizableColumns,i=e.dividerLines,d=e.keyValuePairs,p=e.reveal,u=e.revealFirstColumn,g=e.revealLastColumn,y=e.rowSelection,E=e.size,h=e.stickyHeader,b=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return r.a.createElement("table",Object.assign({},b,{className:m()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(o)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(i)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--").concat(E),Boolean(E)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(g)),Object(n.a)(t,"".concat("vds-state","--").concat(y),Boolean(y)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(h)),t),s),ref:a}),c)}));i.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},i.displayName="DataTable",a.a=i},537:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(2),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(c.a.createElement("tbody",Object.assign({className:o()("vds-tbody",l),ref:a},r),t))}));m.propTypes={children:r.node,className:r.string},m.displayName="Tbody",a.a=m},538:function(e,a,t){"use strict";var n=t(4),l=t(5),c=t(0),r=t.n(c),s=t(3),o=t(2),m=t.n(o),i=Object(c.forwardRef)((function(e,a){var t=e.children,c=e.className,s=e.textAlign,o=Object(l.a)(e,["children","className","textAlign"]);return(r.a.createElement("td",Object.assign({className:m()("vds-td",Object(n.a)({},"vds-text--".concat(s),Boolean(s)),c),ref:a},o),t))}));i.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},i.displayName="Td",a.a=i},539:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(2),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(c.a.createElement("th",Object.assign({className:o()("vds-th",l),ref:a},r),t))}));m.propTypes={children:r.node,className:r.string},m.displayName="Th",a.a=m},540:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(2),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(c.a.createElement("thead",Object.assign({className:o()("vds-thead",l),ref:a},r),t))}));m.propTypes={children:r.node,className:r.string},m.displayName="Thead",a.a=m},541:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(2),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(c.a.createElement("tr",Object.assign({className:o()("vds-tr",l),ref:a},r),t))}));m.propTypes={children:r.node,className:r.string},m.displayName="Tr",a.a=m},550:function(e,a){},551:function(e,a){},681:function(e,a,t){"use strict";var n=t(4),l=t(5),c=t(0),r=t.n(c),s=t(2),o=t.n(s),m=function(e){var a,t=e.children,c=e.className,s=e.size,m=e.type,i=Object(l.a)(e,["children","className","size","type"]);return r.a.createElement("span",Object.assign({className:o()("vds-badge",(a={},Object(n.a)(a,"".concat("vds-badge","--").concat(m),Boolean(m)),Object(n.a)(a,"".concat("vds-badge","--").concat(s),Boolean(s)),a),c)},i),t)};m.displayName="Badge",a.a=m}}]);
//# sourceMappingURL=42.fa07065c.chunk.js.map