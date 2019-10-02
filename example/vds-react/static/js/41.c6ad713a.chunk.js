(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[41],{275:function(e,a,t){"use strict";t.r(a);var n=t(96),l=t(513),c=t(0),r=t.n(c),s=t(4),o=t.n(s),m=t(516),d=t(514),i=t.n(d),u=t(37),p=t(8),T=t(504),b=t(16),E=t(23),v=t(17),f=t(505),h=t(60),y=t(132),g=t(506),O=t(507),C=t(508),N=t(509),S=t(510),j=t(7),w=t(764),B=function(){return r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(j.a,{tag:"h2"},"Data Table"),r.a.createElement(j.a,null,"Stateless (no functionality) to showcase the way to compose of the data-table from smaller components."))),r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(T.a,null,r.a.createElement(f.a,{tag:"caption"},"Example single select data table."),r.a.createElement(N.a,null,r.a.createElement(S.a,null,r.a.createElement(C.a,{scope:"col"},"Title"),r.a.createElement(C.a,{scope:"col"},"Summary"),r.a.createElement(C.a,{scope:"col"},"Current Severity"),r.a.createElement(C.a,{scope:"col"},"Data Center"),r.a.createElement(C.a,{scope:"col"},"First Occurrence"),r.a.createElement(C.a,{scope:"col"},"Last Occurrence"),r.a.createElement(C.a,{scope:"col"},"Status"))),r.a.createElement(g.a,null,r.a.createElement(S.a,{tabIndex:"0"},r.a.createElement(O.a,null,"Feature"),r.a.createElement(O.a,null,"Test"),r.a.createElement(O.a,null,"P1"),r.a.createElement(O.a,null,"OCC"),r.a.createElement(O.a,null,"17:23"),r.a.createElement(O.a,null,"02:01"),r.a.createElement(O.a,null,r.a.createElement(w.a,{type:"stable"},"Normal"))),r.a.createElement(S.a,{tabIndex:"0"},r.a.createElement(O.a,null,"Feature"),r.a.createElement(O.a,null,"Test"),r.a.createElement(O.a,null,"P1"),r.a.createElement(O.a,null,"OCC"),r.a.createElement(O.a,null,"17:23"),r.a.createElement(O.a,null,"02:01"),r.a.createElement(O.a,null,r.a.createElement(w.a,{type:"accent"},"Warning"))),r.a.createElement(S.a,{tabIndex:"0"},r.a.createElement(O.a,null,"Feature"),r.a.createElement(O.a,null,"Test"),r.a.createElement(O.a,null,"P1"),r.a.createElement(O.a,null,"OCC"),r.a.createElement(O.a,null,"17:23"),r.a.createElement(O.a,null,"02:01"),r.a.createElement(O.a,null,r.a.createElement(w.a,{type:"critical"},"Critical"))),r.a.createElement(S.a,{tabIndex:"0"},r.a.createElement(O.a,null,"Feature"),r.a.createElement(O.a,null,"Test"),r.a.createElement(O.a,null,"P1"),r.a.createElement(O.a,null,"OCC"),r.a.createElement(O.a,null,"17:23"),r.a.createElement(O.a,null,"02:01"),r.a.createElement(O.a,null,r.a.createElement(w.a,{type:"disabled"},"Disabled"))))))))},k=t(515),x="import React, { forwardRef } from 'react';\nimport { arrayOf, bool, node, oneOf, shape, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-data-table';\nconst CSS_STATE = 'vds-state';\n\nconst DataTable = forwardRef(({\n  children,\n  className,\n  customizableColumns,\n  dividerLines,\n  keyValuePairs,\n  reveal,\n  revealFirstColumn,\n  revealLastColumn,\n  rowSelection,\n  size,\n  stickyHeader,\n  ...remainingProps\n}, ref) => (\n  <table\n    {...remainingProps}\n    className={classnames(CSS_PREFIX, {\n      [`${CSS_STATE}--customizable-columns`]: Boolean(customizableColumns),\n      [`${CSS_STATE}--divider-lines`]: Boolean(dividerLines),\n      [`${CSS_STATE}--key-value-pairs`]: Boolean(keyValuePairs),\n      [`${CSS_STATE}--${size}`]: Boolean(size),\n      [`${CSS_STATE}--reveal`]: Boolean(reveal),\n      [`${CSS_STATE}--reveal-first-column`]: Boolean(revealFirstColumn),\n      [`${CSS_STATE}--reveal-last-column`]: Boolean(revealLastColumn),\n      [`${CSS_STATE}--${rowSelection}`]: Boolean(rowSelection),\n      [`${CSS_STATE}--sticky-header`]: Boolean(stickyHeader)\n    }, className)}\n    ref={ref}\n  >\n    {children}\n  </table>\n));\n\nDataTable.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Columns\n   */\n  columns: arrayOf(shape({})),\n\n  /**\n   * Customizable columns\n   */\n  customizableColumns: bool,\n\n  /**\n   * Data\n   */\n  data: arrayOf(shape({})),\n\n  /**\n   * Divider lines\n   */\n  dividerLines: bool,\n\n  /**\n   * Key value pairs\n   */\n  keyValuePairs: bool,\n\n  /**\n   * Reveal\n   */\n  reveal: bool,\n\n  /**\n   * Reveal first column\n   */\n  revealFirstColumn: bool,\n\n  /**\n   * Reveal last column\n   */\n  revealLastColumn: bool,\n\n  /**\n   * Row Selection\n   */\n  rowSelection: oneOf(['multi-select', 'single-select']),\n\n  /**\n   * Size\n   */\n  size: oneOf(['compact']),\n\n  /**\n   * Sticky Header\n   */\n  stickyHeader: bool\n};\n\nDataTable.displayName = 'DataTable';\n\nexport default DataTable;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),D='import React from \'react\';\nimport Badge from \'../../badge\';\nimport Col from \'../../col\';\nimport DataTable from \'../../data-table\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Sr from \'../../sr\';\nimport Tbody from \'../../tbody\';\nimport Td from \'../../td\';\nimport Th from \'../../th\';\nimport Thead from \'../../thead\';\nimport Tr from \'../../tr\';\nimport Typography from \'../../typography\';\n\nconst DataTableExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag="h2">Data Table</Typography>\n        <Typography>\n          Stateless (no functionality) to showcase\n          the way to compose of the data-table from smaller components.\n        </Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col>\n        <DataTable>\n          <Sr tag="caption">Example single select data table.</Sr>\n          <Thead>\n            <Tr>\n              <Th scope="col">Title</Th>\n              <Th scope="col">Summary</Th>\n              <Th scope="col">Current Severity</Th>\n              <Th scope="col">Data Center</Th>\n              <Th scope="col">First Occurrence</Th>\n              <Th scope="col">Last Occurrence</Th>\n              <Th scope="col">Status</Th>\n            </Tr>\n          </Thead>\n          <Tbody >\n            <Tr tabIndex="0">\n              <Td>Feature</Td>\n              <Td>Test</Td>\n              <Td>P1</Td>\n              <Td>OCC</Td>\n              <Td>17:23</Td>\n              <Td>02:01</Td>\n              <Td><Badge type="stable">Normal</Badge></Td>\n            </Tr>\n            <Tr tabIndex="0">\n              <Td>Feature</Td>\n              <Td>Test</Td>\n              <Td>P1</Td>\n              <Td>OCC</Td>\n              <Td>17:23</Td>\n              <Td>02:01</Td>\n              <Td><Badge type="accent">Warning</Badge></Td>\n            </Tr>\n            <Tr tabIndex="0">\n              <Td>Feature</Td>\n              <Td>Test</Td>\n              <Td>P1</Td>\n              <Td>OCC</Td>\n              <Td>17:23</Td>\n              <Td>02:01</Td>\n              <Td><Badge type="critical">Critical</Badge></Td>\n            </Tr>\n            <Tr tabIndex="0">\n              <Td>Feature</Td>\n              <Td>Test</Td>\n              <Td>P1</Td>\n              <Td>OCC</Td>\n              <Td>17:23</Td>\n              <Td>02:01</Td>\n              <Td><Badge type="disabled">Disabled</Badge></Td>\n            </Tr>\n          </Tbody>\n        </DataTable>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default DataTableExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),R=function(e){var a=Object(l.a)({},e),t=Object(c.useState)({}),s=Object(n.a)(t,2),d=s[0],w=s[1];return Object(c.useEffect)((function(){try{w(k.parse(x))}catch(e){console.log("\n        React-docgen could not parse props for DataTable\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),r.a.createElement(E.a,{siblingOfStickyFooter:!0},r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(j.a,{tag:"h1"},"Data Table"))),r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(y.a,null,r.a.createElement(h.a,{tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/data-table"),activeClassName:"vds-state--selected"})},r.a.createElement(b.a,{name:"log",resolution:"low"}),"Data Table Example"),r.a.createElement(h.a,{tag:r.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/data-table/code"),activeClassName:"vds-state--selected"})},r.a.createElement(b.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Data Table Example")))),r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:o()({"vds-state--hidden":a.match.path==="".concat("/vds-react","/components/data-table/code"),"vds-state--show":a.match.path!=="".concat("/vds-react","/components/data-table/code")})},r.a.createElement(B,a)),r.a.createElement("div",{className:o()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/data-table/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/data-table/code")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:i.a,code:D,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return r.a.createElement("div",l({key:a,line:e}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",c({key:a,token:e}))})))})))}))))),r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(T.a,{className:o()(["components"]),dividerLines:!0,size:"compact"},r.a.createElement(f.a,{tag:"caption"},"Props"),r.a.createElement(N.a,null,r.a.createElement(S.a,{className:"vds-tr"},r.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),r.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),r.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),r.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),r.a.createElement(g.a,null,d.props&&Object.entries(d.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return r.a.createElement(S.a,{className:"vds-tr",key:a,tabIndex:"0"},r.a.createElement(O.a,{className:"vds-td"},e[0]," ",e[1].required?r.a.createElement("sup",{style:{color:"red"}}," required"):""),r.a.createElement(O.a,{className:"vds-td"},r.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?r.a.createElement("small",{style:{color:"#1a1f71"}},r.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),r.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),r.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};R.displayName="DataTableExample";a.default=R},504:function(e,a,t){"use strict";var n=t(2),l=t(5),c=t(0),r=t.n(c),s=t(3),o=t(4),m=t.n(o),d=Object(c.forwardRef)((function(e,a){var t,c=e.children,s=e.className,o=e.customizableColumns,d=e.dividerLines,i=e.keyValuePairs,u=e.reveal,p=e.revealFirstColumn,T=e.revealLastColumn,b=e.rowSelection,E=e.size,v=e.stickyHeader,f=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return r.a.createElement("table",Object.assign({},f,{className:m()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(o)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(i)),Object(n.a)(t,"".concat("vds-state","--").concat(E),Boolean(E)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(T)),Object(n.a)(t,"".concat("vds-state","--").concat(b),Boolean(b)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(v)),t),s),ref:a}),c)}));d.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},d.displayName="DataTable",a.a=d},505:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(4),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=e.tag,s=Object(n.a)(e,["children","className","tag"]);return c.a.createElement(r,Object.assign({className:o()("vds-sr",l),ref:a},s),t)}));m.propTypes={children:r.node,className:r.string,tag:r.elementType},m.defaultProps={tag:"span"},m.displayName="Sr",a.a=m},506:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(4),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return c.a.createElement("tbody",Object.assign({className:o()("vds-tbody",l),ref:a},r),t)}));m.propTypes={children:r.node,className:r.string},m.displayName="Tbody",a.a=m},507:function(e,a,t){"use strict";var n=t(2),l=t(5),c=t(0),r=t.n(c),s=t(3),o=t(4),m=t.n(o),d=Object(c.forwardRef)((function(e,a){var t=e.children,c=e.className,s=e.textAlign,o=Object(l.a)(e,["children","className","textAlign"]);return r.a.createElement("td",Object.assign({className:m()("vds-td",Object(n.a)({},"vds-text--".concat(s),Boolean(s)),c),ref:a},o),t)}));d.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},d.displayName="Td",a.a=d},508:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(4),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return c.a.createElement("th",Object.assign({className:o()("vds-th",l),ref:a},r),t)}));m.propTypes={children:r.node,className:r.string},m.displayName="Th",a.a=m},509:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(4),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return c.a.createElement("thead",Object.assign({className:o()("vds-thead",l),ref:a},r),t)}));m.propTypes={children:r.node,className:r.string},m.displayName="Thead",a.a=m},510:function(e,a,t){"use strict";var n=t(5),l=t(0),c=t.n(l),r=t(3),s=t(4),o=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return c.a.createElement("tr",Object.assign({className:o()("vds-tr",l),ref:a},r),t)}));m.propTypes={children:r.node,className:r.string},m.displayName="Tr",a.a=m},517:function(e,a){},764:function(e,a,t){"use strict";var n=t(2),l=t(5),c=t(0),r=t.n(c),s=t(4),o=t.n(s),m=function(e){var a,t=e.children,c=e.className,s=e.size,m=e.type,d=Object(l.a)(e,["children","className","size","type"]);return r.a.createElement("span",Object.assign({className:o()("vds-badge",(a={},Object(n.a)(a,"".concat("vds-badge","--").concat(m),Boolean(m)),Object(n.a)(a,"".concat("vds-badge","--").concat(s),Boolean(s)),a),c)},d),t)};m.displayName="Badge",a.a=m}}]);
//# sourceMappingURL=41.c6ad713a.chunk.js.map