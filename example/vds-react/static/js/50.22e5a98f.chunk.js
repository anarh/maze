(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[50],{272:function(e,t,a){"use strict";a.r(t);var n=a(144),o=a(0),r=a.n(o),c=a(538),l=a.n(c),s=a(2),i=a.n(s),m=a(544),d=a(543),p=a(39),u=a(8),f=a(532),g=a(18),v=a(23),b=a(16),h=a(530),y=a(64),E=a(531),O=a(533),j=a(534),N=a(535),k=a(536),x=a(537),F=a(7),R=a(228),w=a(229),C=a(5),T=a(3),P=Object(o.forwardRef)((function(e,t){var a=e.children,n=e.className,o=e.tag,c=e.variant,l=Object(C.a)(e,["children","className","tag","variant"]);return r.a.createElement(F.a,Object.assign({className:i()("vds-footer-links",n),ref:t,tag:o,variant:c},l),a)}));P.propTypes={children:T.node,className:T.string,tag:T.elementType,variant:T.string},P.defaultProps={tag:"p",variant:"caption"},P.displayName="FooterLinks";var S=P,L=a(230),A=a(231),D=a(139),B=a(232),I=a(233),V=a(140),G=a(227),z=a.n(G),_=function(){return r.a.createElement(v.a,null,r.a.createElement(b.a,null,r.a.createElement(u.a,null,r.a.createElement(R.a,{position:"relative",className:"styleguide-navbar-example"},r.a.createElement(v.a,null,r.a.createElement(b.a,{noGutter:!0},r.a.createElement(A.a,{xs:4,md:4,lg:6},r.a.createElement(L.a,{src:z.a,alt:"Visa logo"})),r.a.createElement(B.a,{xs:4,lg:6,valign:"center",lgTextAlign:"right",xlTextAlign:"right",xxlTextAlign:"right"},r.a.createElement(D.a,null,r.a.createElement(I.a,null,r.a.createElement(g.a,{name:"global",resolution:"low"})),r.a.createElement(V.a,null,"United States English")))),r.a.createElement(b.a,{noGutter:!0},r.a.createElement(u.a,{xs:4,md:3,lg:4,xl:3},r.a.createElement(w.a,null,"Copyright \xa9 ".concat((new Date).getFullYear()," Visa Inc. All Rights Reserved"))),r.a.createElement(u.a,{xs:4,md:5,lg:8,xl:9},r.a.createElement(S,null,r.a.createElement("a",{href:"/"},"Privacy Policy"),r.a.createElement("a",{href:"/"},"Terms of Use"),r.a.createElement("a",{href:"/"},"Adjust Ad Preferences")))))))))},H=a(540),U=[a(541)],X=a(542),$="import React, { forwardRef } from 'react';\nimport { bool, elementType, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-footer';\n\n// todo: remove once styles are added to VDS Web\nconst stickyStyles = {\n  flexShrink: '0'\n};\n\nconst Footer = forwardRef((props, ref) => {\n  const {\n    children,\n    className,\n    position,\n    role,\n    tag: Tag,\n    sticky,\n    ...remainingProps\n  } = props;\n\n  return (\n    <Tag\n      className={classnames({\n        [`${CSS_PREFIX}`]: !position,\n        [`${CSS_PREFIX}--${position}`]: Boolean(position)\n      }, className)}\n      ref={ref}\n      role={role}\n      style={\n        sticky\n          ? remainingProps.styles\n            ? { ...remainingProps.styles, ...stickyStyles }\n            : stickyStyles\n          : remainingProps.styles\n            ? remainingProps.styles\n            : undefined\n      }\n      {...remainingProps}\n    >\n      {children}\n    </Tag>\n  );\n});\n\nFooter.propTypes = {\n  /**\n   * Additional content\n   */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Copyright text\n   */\n  copyright: string,\n\n  /**\n   * Position, which can be 'fixed' or 'relative'\n   */\n  position: oneOf(['fixed', 'relative']),\n\n  /**\n   * A11y Role\n   */\n  role: string,\n\n  /**\n  * Sticky footer\n  */\n  sticky: bool,\n\n  /**\n  * Tag\n  */\n  tag: elementType\n};\n\nFooter.defaultProps = {\n  tag: 'footer'\n};\n\nFooter.displayName = 'Footer';\n\nexport default Footer;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),q="import React from 'react';\nimport Col from '../../col';\nimport Footer from '../../footer';\nimport FooterCopyright from '../../footer-copyright';\nimport FooterLinks from '../../footer-links';\nimport FooterLogo from '../../footer-logo';\nimport FooterLogoCol from '../../footer-logo-col';\nimport FooterRegion from '../../footer-region';\nimport FooterRegionCol from '../../footer-region-col';\nimport FooterRegionIcon from '../../footer-region-icon';\nimport FooterRegionLabel from '../../footer-region-label';\nimport Grid from '../../grid';\nimport Icon from '../../icon';\nimport Row from '../../row';\nimport Logo from '@visa/vds-web/dist/_logos/visa/visa_vbm_blu.svg';\n\nconst FooterExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Footer position=\"relative\" className=\"styleguide-navbar-example\">\n          <Grid>\n            <Row noGutter>\n              <FooterLogoCol xs={4} md={4} lg={6}>\n                <FooterLogo src={Logo} alt=\"Visa logo\" />\n              </FooterLogoCol>\n              <FooterRegionCol xs={4} lg={6} valign=\"center\" lgTextAlign=\"right\" xlTextAlign=\"right\" xxlTextAlign=\"right\">\n                <FooterRegion>\n                  <FooterRegionIcon>\n                    <Icon name=\"global\" resolution=\"low\" />\n                  </FooterRegionIcon>\n                  <FooterRegionLabel>United States English</FooterRegionLabel>\n                </FooterRegion>\n              </FooterRegionCol>\n            </Row>\n            <Row noGutter>\n              <Col xs={4} md={3} lg={4} xl={3}>\n                <FooterCopyright>\n                  {`Copyright \xa9 ${new Date().getFullYear()} Visa Inc. All Rights Reserved`}\n                </FooterCopyright>\n              </Col>\n              <Col xs={4} md={5} lg={8} xl={9}>\n                <FooterLinks>\n                  <a href=\"/\">Privacy Policy</a>\n                  <a href=\"/\">Terms of Use</a>\n                  <a href=\"/\">Adjust Ad Preferences</a>\n                </FooterLinks>\n              </Col>\n            </Row>\n          </Grid>\n        </Footer>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default FooterExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),J=function(e){var t=Object.assign({},e),a=Object(o.useState)({}),c=Object(n.a)(a,2),s=c[0],R=c[1];return Object(o.useEffect)((function(){try{R(X.parse($))}catch(e){console.log("\n        React-docgen could not parse props for Footer\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),r.a.createElement(v.a,{siblingOfStickyFooter:!0},r.a.createElement(b.a,null,r.a.createElement(u.a,null,r.a.createElement(F.a,{tag:"h1"},"Footer"))),r.a.createElement(b.a,null,r.a.createElement(u.a,{role:"navigation","aria-label":"Secondary"},r.a.createElement(E.a,{role:"none"},r.a.createElement(y.a,{role:void 0,tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/footer"),activeClassName:"vds-state--selected"})},r.a.createElement(g.a,{name:"log",resolution:"low"}),"Footer Example"),r.a.createElement(y.a,{role:void 0,tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/footer/code"),activeClassName:"vds-state--selected"})},r.a.createElement(g.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),r.a.createElement(y.a,{role:void 0,tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/footer/html"),activeClassName:"vds-state--selected"})},r.a.createElement(g.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),r.a.createElement(b.a,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/footer"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/footer")})},r.a.createElement(_,t)),r.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/footer/code"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/footer/code")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:q,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return r.a.createElement("div",Object.assign({},o({key:t,line:e}),{key:t}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return r.a.createElement("span",Object.assign({},c({key:t,token:e}),{key:t}))})))})))}))),r.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/footer/html"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/footer/html")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:H.format(l.a.renderToStaticMarkup(r.a.createElement(_,t)),{css:"ignore",parser:"html",plugins:U,printWidth:120}),language:"html"}),(function(e){var t=e.className,a=e.style,n=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return r.a.createElement("div",Object.assign({},o({key:t,line:e}),{key:t}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return r.a.createElement("span",Object.assign({},c({key:t,token:e}),{key:t}))})))})))}))))),r.a.createElement(b.a,null,r.a.createElement(u.a,null,r.a.createElement(f.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},r.a.createElement(h.a,{tag:"caption"},"Props"),r.a.createElement(k.a,null,r.a.createElement(x.a,{className:"vds-tr"},r.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),r.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),r.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),r.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),r.a.createElement(O.a,null,s.props&&Object.entries(s.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return r.a.createElement(x.a,{className:"vds-tr",key:t},r.a.createElement(N.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?r.a.createElement("strong",null," - required"):""),r.a.createElement(j.a,{className:"vds-td"},r.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?r.a.createElement("small",{style:{color:"#1a1f71"}},r.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),r.a.createElement(j.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),r.a.createElement(j.a,{className:"vds-td"},e[1].description))})))))))};J.displayName="FooterExample";t.default=J},530:function(e,t,a){"use strict";var n=a(5),o=a(0),r=a.n(o),c=a(3),l=a(2),s=a.n(l),i=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,c=e.tag,l=Object(n.a)(e,["children","className","tag"]);return r.a.createElement(c,Object.assign({className:s()("vds-screen-reader",o),ref:t},l),a)}));i.propTypes={children:c.node,className:c.string,tag:c.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",t.a=i},531:function(e,t,a){"use strict";var n=a(4),o=a(144),r=a(5),c=a(0),l=a.n(c),s=a(2),i=a.n(s),m=a(65),d=40,p=37,u=39,f=38,g=35,v=36,b=Object(c.forwardRef)((function(e,t){var a=e.children,s=e.className,b=e.orientation,h=e.role,y=e.selectedTab,E=Object(r.a)(e,["children","className","orientation","role","selectedTab"]);t=t||Object(c.useRef)();var O=Object(c.useState)(y),j=Object(o.a)(O,2),N=j[0],k=j[1],x=Object(c.useState)(N),F=Object(o.a)(x,2),R=F[0],w=F[1],C=Object(c.useState)([]),T=Object(o.a)(C,2),P=T[0],S=T[1];Object(c.useEffect)((function(){S(Array.from(t.current.querySelectorAll("li > .vds-tab:not(.vds-state--disabled)")))}),[a,t]),Object(c.useEffect)((function(){k(y)}),[y]);return l.a.createElement("ul",Object.assign({className:i()("".concat("vds-tab","-list"),Object(n.a)({},"".concat("vds-tab","--").concat(b),Boolean(b)),s),ref:t,role:h},E),c.Children.map(a,(function(e,t){return l.a.createElement(m.a,{role:"none"},Object(c.cloneElement)(e,{key:t,onClick:function(a){return function(e,t,a){k(t),w(t),"function"===typeof a.props.onClick&&a.props.onClick(e,t)}(a,t,e)},onKeyDown:function(a){return function(e,t,a){var n=e.charCode||e.keyCode,o=P.length,r=R||0;switch(n){case g:return e.preventDefault(),w(o-1),P[o-1].focus();case v:return e.preventDefault(),w(0),P[0].focus();case p:case f:return e.preventDefault(),w(r-1<0?o-1:r-1),P[r-1<0?o-1:r-1].focus();case u:case d:return e.preventDefault(),w((r+1)%o),P[(r+1)%o].focus()}return"function"===typeof a.props.onKeyDown&&a.props.onKeyDown(e,t),w(N)}(a,t,e)},selected:N===t,tabIndex:Number.isInteger(R)?R===t?0:-1:0===t?0:-1}))})))}));b.defaultProps={role:"tablist"},b.displayName="TabList",t.a=b},532:function(e,t,a){"use strict";var n=a(4),o=a(5),r=a(0),c=a.n(r),l=a(3),s=a(2),i=a.n(s),m=Object(r.forwardRef)((function(e,t){var a,r=e.children,l=e.className,s=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,p=e.reveal,u=e.revealFirstColumn,f=e.revealLastColumn,g=e.rowSelection,v=e.size,b=e.stickyHeader,h=Object(o.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return c.a.createElement("table",Object.assign({},h,{className:i()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(s)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--").concat(g),Boolean(g)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(b)),a),l),ref:t}),r)}));m.propTypes={children:l.node,className:l.string,columns:Object(l.arrayOf)(Object(l.shape)({})),customizableColumns:l.bool,data:Object(l.arrayOf)(Object(l.shape)({})),dividerLines:l.bool,keyValuePairs:l.bool,reveal:l.bool,revealFirstColumn:l.bool,revealLastColumn:l.bool,rowSelection:Object(l.oneOf)(["multi-select","single-select"]),size:Object(l.oneOf)(["compact"]),stickyHeader:l.bool},m.displayName="DataTable",t.a=m},533:function(e,t,a){"use strict";var n=a(5),o=a(0),r=a.n(o),c=a(3),l=a(2),s=a.n(l),i=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("tbody",Object.assign({className:s()("vds-tbody",o),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Tbody",t.a=i},534:function(e,t,a){"use strict";var n=a(4),o=a(5),r=a(0),c=a.n(r),l=a(3),s=a(2),i=a.n(s),m=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,l=e.textAlign,s=Object(o.a)(e,["children","className","textAlign"]);return c.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(l),Boolean(l)),r),ref:t},s),a)}));m.propTypes={children:l.node,className:l.string,textAlign:Object(l.oneOf)(["center","left","right"])},m.displayName="Td",t.a=m},535:function(e,t,a){"use strict";var n=a(5),o=a(0),r=a.n(o),c=a(3),l=a(2),s=a.n(l),i=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("th",Object.assign({className:s()("vds-th",o),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Th",t.a=i},536:function(e,t,a){"use strict";var n=a(5),o=a(0),r=a.n(o),c=a(3),l=a(2),s=a.n(l),i=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("thead",Object.assign({className:s()("vds-thead",o),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Thead",t.a=i},537:function(e,t,a){"use strict";var n=a(5),o=a(0),r=a.n(o),c=a(3),l=a(2),s=a.n(l),i=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,c=Object(n.a)(e,["children","className"]);return r.a.createElement("tr",Object.assign({className:s()("vds-tr",o),ref:t},c),a)}));i.propTypes={children:c.node,className:c.string},i.displayName="Tr",t.a=i},545:function(e,t){},546:function(e,t){}}]);
//# sourceMappingURL=50.22e5a98f.chunk.js.map