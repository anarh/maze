(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[62],{277:function(e,a,t){"use strict";t.r(a);var n=t(96),l=t(513),r=t(0),o=t.n(r),s=t(4),c=t.n(s),i=t(516),p=t(514),m=t.n(p),y=t(37),d=t(8),h=t(504),g=t(16),u=t(23),v=t(17),E=t(505),f=t(60),b=t(132),T=t(506),N=t(507),C=t(508),O=t(509),H=t(510),w=t(7),R=function(){return o.a.createElement(u.a,null,o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h2"},"Typography"))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h1"},"H1 Example"),o.a.createElement(w.a,{tag:"h2"},"H2 Example"),o.a.createElement(w.a,{tag:"h3"},"H3 Example"),o.a.createElement(w.a,{tag:"h4"},"H4 Example"),o.a.createElement(w.a,{tag:"h1",variant:"display-s"},"Display S Example (Can Apply To H1 Only)"),o.a.createElement(w.a,{tag:"h2",variant:"headline"},"Headline Example (Can Apply To H1, H2)"),o.a.createElement(w.a,{tag:"h2",variant:"headline--alt"},"Headline Alt Example (Can Apply To H1, H2)"),o.a.createElement(w.a,{tag:"h3",variant:"title"},"Title Example (Can Apply To H1, H2, H3)"),o.a.createElement(w.a,{tag:"h3",variant:"title--alt"},"Title Alt Example (Can Apply To H1, H2, H3)"),o.a.createElement(w.a,{tag:"h4",variant:"subtitle"},"Subtitle Example (Can Apply To H2, H3, H4)"),o.a.createElement(w.a,{tag:"h4",variant:"subtitle--alt"},"Subtitle Alt Example (Can Apply To H2, H3, H4)"))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h2"},"Body Regular"),o.a.createElement(w.a,null,"Visa has claimed the top spot on Forbes\u2019 Global 2000 Best Regarded Companies list, moving up from No. 4 last year. Visa also ranked first in the consumer financial services category."))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h2"},"Body with class"))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{variant:"body"},"Visa has claimed the top spot on Forbes\u2019 Global 2000 Best Regarded Companies list, moving up from No. 4 last year. Visa also ranked first in the consumer financial services category."))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h2"},"Body Alt"))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{variant:"body--alt"},"Visa has claimed the top spot on Forbes\u2019 Global 2000 Best Regarded Companies list, moving up from No. 4 last year. Visa also ranked first in the consumer financial services category."))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h2"},"Caption Text"))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{variant:"caption"},"Visa has claimed the top spot on Forbes\u2019 Global 2000 Best Regarded Companies list, moving up from No. 4 last year. Visa also ranked first in the consumer financial services category."))))))},j=t(515),x="import React, { forwardRef } from 'react';\nimport { elementType, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-text';\n\nconst Typography = forwardRef(({\n  children,\n  className,\n  tag: Tag,\n  variant,\n  ...remainingProps\n}, ref) => (\n  <Tag\n    className={classnames({\n      [`${CSS_PREFIX}--${variant}`]: Boolean(variant)\n    }, className ) || undefined}\n    ref={ref}\n    {...remainingProps}\n  >\n    {children}\n  </Tag>\n));\n\nTypography.propTypes = {\n  /**\n  * Content\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n  * Tag\n  */\n  tag: elementType,\n\n  /**\n  * Variant\n  */\n  variant: oneOf([\n    'body',\n    'body--alt',\n    'caption',\n    'display-s',\n    'headline',\n    'headline--alt',\n    'subtitle',\n    'subtitle--alt',\n    'title',\n    'title--alt'\n  ])\n};\n\nTypography.defaultProps = {\n  tag: 'p'\n};\n\nTypography.displayName = 'Typography';\n\nexport default Typography;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),k='import React from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst TypographyExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Row>\n          <Col>\n            <Typography tag="h2">Typography</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h1">H1 Example</Typography>\n            <Typography tag="h2">H2 Example</Typography>\n            <Typography tag="h3">H3 Example</Typography>\n            <Typography tag="h4">H4 Example</Typography>\n            <Typography tag="h1" variant="display-s">Display S Example (Can Apply To H1 Only)</Typography>\n            <Typography tag="h2" variant="headline">Headline Example (Can Apply To H1, H2)</Typography>\n            <Typography tag="h2" variant="headline--alt">Headline Alt Example (Can Apply To H1, H2)</Typography>\n            <Typography tag="h3" variant="title">Title Example (Can Apply To H1, H2, H3)</Typography>\n            <Typography tag="h3" variant="title--alt">Title Alt Example (Can Apply To H1, H2, H3)</Typography>\n            <Typography tag="h4" variant="subtitle">Subtitle Example (Can Apply To H2, H3, H4)</Typography>\n            <Typography tag="h4" variant="subtitle--alt">Subtitle Alt Example (Can Apply To H2, H3, H4)</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Body Regular</Typography>\n            <Typography>\n              Visa has claimed the top spot on Forbes\u2019 Global 2000 Best\n              Regarded Companies list, moving up from No. 4 last year.\n              Visa also ranked first in the consumer financial services category.\n            </Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Body with class</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography variant="body">\n              Visa has claimed the top spot on Forbes\u2019 Global 2000 Best\n              Regarded Companies list, moving up from No. 4 last year.\n              Visa also ranked first in the consumer financial services category.\n            </Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Body Alt</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography variant="body--alt">\n              Visa has claimed the top spot on Forbes\u2019 Global 2000 Best\n              Regarded Companies list, moving up from No. 4 last year.\n              Visa also ranked first in the consumer financial services category.\n            </Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography tag="h2">Caption Text</Typography>\n          </Col>\n        </Row>\n        <Row>\n          <Col>\n            <Typography variant="caption">\n                Visa has claimed the top spot on Forbes\u2019 Global 2000 Best\n                Regarded Companies list, moving up from No. 4 last year.\n                Visa also ranked first in the consumer financial services category.\n            </Typography>\n          </Col>\n        </Row>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default TypographyExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),A=function(e){var a=Object(l.a)({},e),t=Object(r.useState)({}),s=Object(n.a)(t,2),p=s[0],A=s[1];return Object(r.useEffect)((function(){try{A(j.parse(x))}catch(e){console.log("\n        React-docgen could not parse props for Typography\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),o.a.createElement(u.a,{siblingOfStickyFooter:!0},o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(w.a,{tag:"h1"},"Typography"))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(b.a,null,o.a.createElement(f.a,{tag:o.a.createElement(y.c,{exact:!0,to:"".concat("/vds-react","/components/typography"),activeClassName:"vds-state--selected"})},o.a.createElement(g.a,{name:"log",resolution:"low"}),"Typography Example"),o.a.createElement(f.a,{tag:o.a.createElement(y.c,{exact:!0,to:"".concat("/vds-react","/components/typography/code"),activeClassName:"vds-state--selected"})},o.a.createElement(g.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Typography Example")))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path==="".concat("/vds-react","/components/typography/code"),"vds-state--show":a.match.path!=="".concat("/vds-react","/components/typography/code")})},o.a.createElement(R,a)),o.a.createElement("div",{className:c()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/typography/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/typography/code")})},o.a.createElement(i.a,Object.assign({},i.b,{theme:m.a,code:k,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return o.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return o.a.createElement("div",l({key:a,line:e}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return o.a.createElement("span",r({key:a,token:e}))})))})))}))))),o.a.createElement(v.a,null,o.a.createElement(d.a,null,o.a.createElement(h.a,{className:c()(["components"]),dividerLines:!0,size:"compact"},o.a.createElement(E.a,{tag:"caption"},"Props"),o.a.createElement(O.a,null,o.a.createElement(H.a,{className:"vds-tr"},o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),o.a.createElement(T.a,null,p.props&&Object.entries(p.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return o.a.createElement(H.a,{className:"vds-tr",key:a,tabIndex:"0"},o.a.createElement(N.a,{className:"vds-td"},e[0]," ",e[1].required?o.a.createElement("sup",{style:{color:"red"}}," required"):""),o.a.createElement(N.a,{className:"vds-td"},o.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?o.a.createElement("small",{style:{color:"#1a1f71"}},o.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),o.a.createElement(N.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),o.a.createElement(N.a,{className:"vds-td"},e[1].description))})))))))};A.displayName="TypographyExample";a.default=A},504:function(e,a,t){"use strict";var n=t(2),l=t(5),r=t(0),o=t.n(r),s=t(3),c=t(4),i=t.n(c),p=Object(r.forwardRef)((function(e,a){var t,r=e.children,s=e.className,c=e.customizableColumns,p=e.dividerLines,m=e.keyValuePairs,y=e.reveal,d=e.revealFirstColumn,h=e.revealLastColumn,g=e.rowSelection,u=e.size,v=e.stickyHeader,E=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return o.a.createElement("table",Object.assign({},E,{className:i()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(c)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--").concat(u),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(y)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(h)),Object(n.a)(t,"".concat("vds-state","--").concat(g),Boolean(g)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(v)),t),s),ref:a}),r)}));p.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},p.displayName="DataTable",a.a=p},505:function(e,a,t){"use strict";var n=t(5),l=t(0),r=t.n(l),o=t(3),s=t(4),c=t.n(s),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,o=e.tag,s=Object(n.a)(e,["children","className","tag"]);return r.a.createElement(o,Object.assign({className:c()("vds-sr",l),ref:a},s),t)}));i.propTypes={children:o.node,className:o.string,tag:o.elementType},i.defaultProps={tag:"span"},i.displayName="Sr",a.a=i},506:function(e,a,t){"use strict";var n=t(5),l=t(0),r=t.n(l),o=t(3),s=t(4),c=t.n(s),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("tbody",Object.assign({className:c()("vds-tbody",l),ref:a},o),t)}));i.propTypes={children:o.node,className:o.string},i.displayName="Tbody",a.a=i},507:function(e,a,t){"use strict";var n=t(2),l=t(5),r=t(0),o=t.n(r),s=t(3),c=t(4),i=t.n(c),p=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,s=e.textAlign,c=Object(l.a)(e,["children","className","textAlign"]);return o.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(s),Boolean(s)),r),ref:a},c),t)}));p.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},p.displayName="Td",a.a=p},508:function(e,a,t){"use strict";var n=t(5),l=t(0),r=t.n(l),o=t(3),s=t(4),c=t.n(s),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("th",Object.assign({className:c()("vds-th",l),ref:a},o),t)}));i.propTypes={children:o.node,className:o.string},i.displayName="Th",a.a=i},509:function(e,a,t){"use strict";var n=t(5),l=t(0),r=t.n(l),o=t(3),s=t(4),c=t.n(s),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("thead",Object.assign({className:c()("vds-thead",l),ref:a},o),t)}));i.propTypes={children:o.node,className:o.string},i.displayName="Thead",a.a=i},510:function(e,a,t){"use strict";var n=t(5),l=t(0),r=t.n(l),o=t(3),s=t(4),c=t.n(s),i=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,o=Object(n.a)(e,["children","className"]);return r.a.createElement("tr",Object.assign({className:c()("vds-tr",l),ref:a},o),t)}));i.propTypes={children:o.node,className:o.string},i.displayName="Tr",a.a=i},517:function(e,a){}}]);
//# sourceMappingURL=62.774dcd25.chunk.js.map