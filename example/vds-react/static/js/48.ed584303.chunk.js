(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[48],{292:function(e,a,n){"use strict";n.r(a);var t=n(86),l=n(538),c=n(0),r=n.n(c),s=n(537),o=n.n(s),i=n(2),m=n.n(i),d=n(546),p=n(545),u=n(40),f=n(8),h=n(527),v=n(18),g=n(26),y=n(17),b=n(526),E=n(65),k=n(139),N=n(528),O=n(529),j=n(530),w=n(531),L=n(532),T=n(7),R=n(636),C=function(){return r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(T.a,{tag:"h2"},"Link"),r.a.createElement(T.a,null,"If using VDS ","<Link />"," in the same file with React Router ","<Link />","remember to import using a different name e.g."),r.a.createElement(T.a,null,r.a.createElement("code",null,"import VDSLink from '@visa/vds-react/link'")),r.a.createElement(T.a,null,r.a.createElement("code",null,'<VDSLink href="https://www.visa.com" />')))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(R.a,{href:"http://www.visa.com"},"Hyperlink"))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(T.a,{tag:"h2"},"Link with Custom Tag"))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(T.a,null,"You can pass custom tags/elements to the link to use in generating the link (e.g. Link element from React Router). All props of the tag are mapped over."))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(R.a,{tag:r.a.createElement("a",null),href:"http://www.visa.com"},"Hyperlink"))))},S=n(540),x=[n(541)],P=n(542),B="import React, { cloneElement, forwardRef } from 'react';\nimport { bool, element, node, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-link';\nconst CSS_STATE = 'vds-state';\n\nconst Link = forwardRef(({\n  className,\n  disabled,\n  inline,\n  tag,\n  ...remainingProps\n}, ref) => (\n  cloneElement(tag, {\n    className: classnames(CSS_PREFIX, {\n      [`${CSS_PREFIX}--inline`]: Boolean(inline),\n      [`${CSS_STATE}--disabled`]: Boolean(disabled)\n    }, className),\n    ref,\n    ...remainingProps\n  })\n));\n\nLink.propTypes = {\n  /**\n   * @ignore\n   */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n  * Disabled\n  */\n  disabled: bool,\n\n  /**\n  * Inline\n  */\n  inline: bool,\n\n  /**\n  * Tag\n  */\n  tag: element\n};\n\nLink.defaultProps = {\n  tag: <a /> // eslint-disable-line\n};\n\nLink.displayName = 'Link';\n\nexport default Link;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),V="/* eslint-disable jsx-a11y/anchor-has-content */\n/* eslint-disable jsx-a11y/anchor-is-valid */\n\nimport React from 'react';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport Link from '../../link';\nimport Row from '../../row';\nimport Typography from '../../typography';\n\nconst LinkExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag=\"h2\">Link</Typography>\n        <Typography>\n          If using VDS {`<Link />`} in the same file with React Router {`<Link />`}\n          remember to import using a different name e.g.\n        </Typography>\n        <Typography><code>{`import VDSLink from '@visa/vds-react/link'`}</code></Typography>\n        <Typography><code>{`<VDSLink href=\"https://www.visa.com\" />`}</code></Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Link href=\"http://www.visa.com\">Hyperlink</Link>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography tag=\"h2\">Link with Custom Tag</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Typography>\n          You can pass custom tags/elements to the\n          link to use in generating the link (e.g.\n          Link element from React Router).\n          All props of the tag are mapped over.\n        </Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <Link tag={<a />} href=\"http://www.visa.com\">Hyperlink</Link>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default LinkExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),D=function(e){var a=Object(l.a)({},e),n=Object(c.useState)({}),s=Object(t.a)(n,2),i=s[0],R=s[1];return Object(c.useEffect)((function(){try{R(P.parse(B))}catch(e){console.log("\n        React-docgen could not parse props for Link\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),r.a.createElement(g.a,{siblingOfStickyFooter:!0},r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(T.a,{tag:"h1"},"Link"))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(k.a,null,r.a.createElement(E.a,{tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/link"),activeClassName:"vds-state--selected"})},r.a.createElement(v.a,{name:"log",resolution:"low"}),"Link Example"),r.a.createElement(E.a,{tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/link/code"),activeClassName:"vds-state--selected"})},r.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),r.a.createElement(E.a,{tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/link/html"),activeClassName:"vds-state--selected"})},r.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/link"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/link")})},r.a.createElement(C,a)),r.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/link/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/link/code")})},r.a.createElement(d.a,Object.assign({},d.b,{theme:p.a,code:V,language:"jsx"}),(function(e){var a=e.className,n=e.style,t=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return r.a.createElement("div",Object.assign({},l({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},c({key:a,token:e}),{key:a}))})))})))}))),r.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/link/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/link/html")})},r.a.createElement(d.a,Object.assign({},d.b,{theme:p.a,code:S.format(o.a.renderToStaticMarkup(r.a.createElement(C,a)),{css:"ignore",parser:"html",plugins:x,printWidth:120}),language:"html"}),(function(e){var a=e.className,n=e.style,t=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return r.a.createElement("div",Object.assign({},l({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},c({key:a,token:e}),{key:a}))})))})))}))))),r.a.createElement(y.a,null,r.a.createElement(f.a,null,r.a.createElement(h.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},r.a.createElement(b.a,{tag:"caption"},"Props"),r.a.createElement(w.a,null,r.a.createElement(L.a,{className:"vds-tr"},r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),r.a.createElement(N.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return r.a.createElement(L.a,{className:"vds-tr",key:a,tabIndex:"0"},r.a.createElement(O.a,{className:"vds-td"},e[0]," ",e[1].required?r.a.createElement("sup",{style:{color:"red"}}," required"):""),r.a.createElement(O.a,{className:"vds-td"},r.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?r.a.createElement("small",{style:{color:"#1a1f71"}},r.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),r.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),r.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};D.displayName="LinkExample";a.default=D},526:function(e,a,n){"use strict";var t=n(5),l=n(0),c=n.n(l),r=n(3),s=n(2),o=n.n(s),i=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=e.tag,s=Object(t.a)(e,["children","className","tag"]);return c.a.createElement(r,Object.assign({className:o()("vds-screen-reader",l),ref:a},s),n)}));i.propTypes={children:r.node,className:r.string,tag:r.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",a.a=i},527:function(e,a,n){"use strict";var t=n(4),l=n(5),c=n(0),r=n.n(c),s=n(3),o=n(2),i=n.n(o),m=Object(c.forwardRef)((function(e,a){var n,c=e.children,s=e.className,o=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,p=e.reveal,u=e.revealFirstColumn,f=e.revealLastColumn,h=e.rowSelection,v=e.size,g=e.stickyHeader,y=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return r.a.createElement("table",Object.assign({},y,{className:i()("vds-data-table",(n={},Object(t.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(o)),Object(t.a)(n,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(t.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(t.a)(n,"".concat("vds-state","--").concat(v),Boolean(v)),Object(t.a)(n,"".concat("vds-state","--reveal"),Boolean(p)),Object(t.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(t.a)(n,"".concat("vds-state","--").concat(h),Boolean(h)),Object(t.a)(n,"".concat("vds-state","--sticky-header"),Boolean(g)),n),s),ref:a}),c)}));m.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},m.displayName="DataTable",a.a=m},528:function(e,a,n){"use strict";var t=n(5),l=n(0),c=n.n(l),r=n(3),s=n(2),o=n.n(s),i=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return c.a.createElement("tbody",Object.assign({className:o()("vds-tbody",l),ref:a},r),n)}));i.propTypes={children:r.node,className:r.string},i.displayName="Tbody",a.a=i},529:function(e,a,n){"use strict";var t=n(4),l=n(5),c=n(0),r=n.n(c),s=n(3),o=n(2),i=n.n(o),m=Object(c.forwardRef)((function(e,a){var n=e.children,c=e.className,s=e.textAlign,o=Object(l.a)(e,["children","className","textAlign"]);return r.a.createElement("td",Object.assign({className:i()("vds-td",Object(t.a)({},"vds-text--".concat(s),Boolean(s)),c),ref:a},o),n)}));m.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},530:function(e,a,n){"use strict";var t=n(5),l=n(0),c=n.n(l),r=n(3),s=n(2),o=n.n(s),i=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return c.a.createElement("th",Object.assign({className:o()("vds-th",l),ref:a},r),n)}));i.propTypes={children:r.node,className:r.string},i.displayName="Th",a.a=i},531:function(e,a,n){"use strict";var t=n(5),l=n(0),c=n.n(l),r=n(3),s=n(2),o=n.n(s),i=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return c.a.createElement("thead",Object.assign({className:o()("vds-thead",l),ref:a},r),n)}));i.propTypes={children:r.node,className:r.string},i.displayName="Thead",a.a=i},532:function(e,a,n){"use strict";var t=n(5),l=n(0),c=n.n(l),r=n(3),s=n(2),o=n.n(s),i=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return c.a.createElement("tr",Object.assign({className:o()("vds-tr",l),ref:a},r),n)}));i.propTypes={children:r.node,className:r.string},i.displayName="Tr",a.a=i},543:function(e,a){},544:function(e,a){},636:function(e,a,n){"use strict";var t=n(4),l=n(13),c=n(5),r=n(0),s=n.n(r),o=n(3),i=n(2),m=n.n(i),d=Object(r.forwardRef)((function(e,a){var n,s=e.className,o=e.disabled,i=e.inline,d=e.tag,p=Object(c.a)(e,["className","disabled","inline","tag"]);return Object(r.cloneElement)(d,Object(l.a)({className:m()("vds-link",(n={},Object(t.a)(n,"".concat("vds-link","--inline"),Boolean(i)),Object(t.a)(n,"".concat("vds-state","--disabled"),Boolean(o)),n),s),ref:a},p))}));d.propTypes={children:o.node,className:o.string,disabled:o.bool,inline:o.bool,tag:o.element},d.defaultProps={tag:s.a.createElement("a",null)},d.displayName="Link",a.a=d}}]);
//# sourceMappingURL=48.ed584303.chunk.js.map