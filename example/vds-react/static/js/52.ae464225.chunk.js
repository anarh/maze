(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[52],{276:function(e,a,t){"use strict";t.r(a);var n=t(64),o=t(0),r=t.n(o),l=t(542),s=t.n(l),c=t(2),i=t.n(c),m=t(549),d=t(548),p=t(39),g=t(8),u=t(536),f=t(18),v=t(23),h=t(16),y=t(535),E=t(65),b=t(145),N=t(537),O=t(538),j=t(539),F=t(540),x=t(541),k=t(7),R=t(229),w=t(230),T=t(5),C=t(3),P=Object(o.forwardRef)((function(e,a){var t=e.children,n=e.className,o=e.tag,l=e.variant,s=Object(T.a)(e,["children","className","tag","variant"]);return(r.a.createElement(k.a,Object.assign({className:i()("vds-footer-links",n),ref:a,tag:o,variant:l},s),t))}));P.propTypes={children:C.node,className:C.string,tag:C.elementType,variant:C.string},P.defaultProps={tag:"p",variant:"caption"},P.displayName="FooterLinks";var S=P,L=t(231),A=t(232),B=t(140),I=t(233),V=t(234),G=t(141),z=t(228),D=t.n(z),_=function(){return r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(R.a,{position:"relative",className:"styleguide-navbar-example"},r.a.createElement(v.a,null,r.a.createElement(h.a,{noGutter:!0},r.a.createElement(A.a,{xs:4,md:4,lg:6},r.a.createElement(L.a,{src:D.a,alt:"Visa logo"})),r.a.createElement(I.a,{xs:4,lg:6,valign:"center",lgTextAlign:"right",xlTextAlign:"right",xxlTextAlign:"right"},r.a.createElement(B.a,null,r.a.createElement(V.a,null,r.a.createElement(f.a,{name:"global",resolution:"low"})),r.a.createElement(G.a,null,"United States English")))),r.a.createElement(h.a,{noGutter:!0},r.a.createElement(g.a,{xs:4,md:3,lg:4,xl:3},r.a.createElement(w.a,null,"Copyright \xa9 ".concat((new Date).getFullYear()," Visa Inc. All Rights Reserved"))),r.a.createElement(g.a,{xs:4,md:5,lg:8,xl:9},r.a.createElement(S,null,r.a.createElement("a",{href:"/"},"Privacy Policy"),r.a.createElement("a",{href:"/"},"Terms of Use"),r.a.createElement("a",{href:"/"},"Adjust Ad Preferences")))))))))},H=t(545),U=[t(546)],X=t(547),$="import React, { forwardRef } from 'react';\nimport { bool, elementType, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-footer';\n\n// todo: remove once styles are added to VDS Web\nconst stickyStyles = {\n  flexShrink: '0'\n};\n\nconst Footer = forwardRef((props, ref) => {\n  const {\n    children,\n    className,\n    position,\n    role,\n    tag: Tag,\n    sticky,\n    ...remainingProps\n  } = props;\n\n  return (\n    <Tag\n      className={classnames({\n        [`${CSS_PREFIX}`]: !position,\n        [`${CSS_PREFIX}--${position}`]: Boolean(position)\n      }, className)}\n      ref={ref}\n      role={role}\n      style={\n        sticky\n          ? remainingProps.styles\n            ? { ...remainingProps.styles, ...stickyStyles }\n            : stickyStyles\n          : remainingProps.styles\n            ? remainingProps.styles\n            : undefined\n      }\n      {...remainingProps}\n    >\n      {children}\n    </Tag>\n  );\n});\n\nFooter.propTypes = {\n  /**\n   * Additional content\n   */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Copyright text\n   */\n  copyright: string,\n\n  /**\n   * Position, which can be 'fixed' or 'relative'\n   */\n  position: oneOf(['fixed', 'relative']),\n\n  /**\n   * A11y Role\n   */\n  role: string,\n\n  /**\n  * Sticky footer\n  */\n  sticky: bool,\n\n  /**\n  * Tag\n  */\n  tag: elementType\n};\n\nFooter.defaultProps = {\n  tag: 'footer'\n};\n\nFooter.displayName = 'Footer';\n\nexport default Footer;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),J="import React from 'react';\nimport Col from '../../col';\nimport Footer from '../../footer';\nimport FooterCopyright from '../../footer-copyright';\nimport FooterLinks from '../../footer-links';\nimport FooterLogo from '../../footer-logo';\nimport FooterLogoCol from '../../footer-logo-col';\nimport FooterRegion from '../../footer-region';\nimport FooterRegionCol from '../../footer-region-col';\nimport FooterRegionIcon from '../../footer-region-icon';\nimport FooterRegionLabel from '../../footer-region-label';\nimport Grid from '../../grid';\nimport Icon from '../../icon';\nimport Row from '../../row';\nimport Logo from '@visa/vds-web/dist/_logos/visa/visa_vbm_blu.svg';\n\nconst FooterExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Footer position=\"relative\" className=\"styleguide-navbar-example\">\n          <Grid>\n            <Row noGutter>\n              <FooterLogoCol xs={4} md={4} lg={6}>\n                <FooterLogo src={Logo} alt=\"Visa logo\" />\n              </FooterLogoCol>\n              <FooterRegionCol xs={4} lg={6} valign=\"center\" lgTextAlign=\"right\" xlTextAlign=\"right\" xxlTextAlign=\"right\">\n                <FooterRegion>\n                  <FooterRegionIcon>\n                    <Icon name=\"global\" resolution=\"low\" />\n                  </FooterRegionIcon>\n                  <FooterRegionLabel>United States English</FooterRegionLabel>\n                </FooterRegion>\n              </FooterRegionCol>\n            </Row>\n            <Row noGutter>\n              <Col xs={4} md={3} lg={4} xl={3}>\n                <FooterCopyright>\n                  {`Copyright \xa9 ${new Date().getFullYear()} Visa Inc. All Rights Reserved`}\n                </FooterCopyright>\n              </Col>\n              <Col xs={4} md={5} lg={8} xl={9}>\n                <FooterLinks>\n                  <a href=\"/\">Privacy Policy</a>\n                  <a href=\"/\">Terms of Use</a>\n                  <a href=\"/\">Adjust Ad Preferences</a>\n                </FooterLinks>\n              </Col>\n            </Row>\n          </Grid>\n        </Footer>\n      </Col>\n    </Row>\n  </Grid>\n);\n\nexport default FooterExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),q=function(e){var a=Object.assign({},e),t=Object(o.useState)({}),l=Object(n.a)(t,2),c=l[0],R=l[1];return Object(o.useEffect)((function(){try{R(X.parse($))}catch(e){console.log("\n        React-docgen could not parse props for Footer\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),r.a.createElement(v.a,{siblingOfStickyFooter:!0},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(k.a,{tag:"h1"},"Footer"))),r.a.createElement(h.a,null,r.a.createElement(g.a,{role:"navigation","aria-label":"Secondary"},r.a.createElement(b.a,{role:"none"},r.a.createElement(E.a,{role:void 0,tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/footer"),activeClassName:"vds-state--selected"})},r.a.createElement(f.a,{name:"log",resolution:"low"}),"Footer Example"),r.a.createElement(E.a,{role:void 0,tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/footer/code"),activeClassName:"vds-state--selected"})},r.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),r.a.createElement(E.a,{role:void 0,tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/footer/html"),activeClassName:"vds-state--selected"})},r.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/footer"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/footer")})},r.a.createElement(_,a)),r.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/footer/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/footer/code")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:J,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,o=e.getLineProps,l=e.getTokenProps;return(r.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return r.a.createElement("div",Object.assign({},o({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},l({key:a,token:e}),{key:a}))})))}))))}))),r.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/footer/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/footer/html")})},r.a.createElement(m.a,Object.assign({},m.b,{theme:d.a,code:H.format(s.a.renderToStaticMarkup(r.a.createElement(_,a)),{css:"ignore",parser:"html",plugins:U,printWidth:120}),language:"html"}),(function(e){var a=e.className,t=e.style,n=e.tokens,o=e.getLineProps,l=e.getTokenProps;return(r.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return r.a.createElement("div",Object.assign({},o({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},l({key:a,token:e}),{key:a}))})))}))))}))))),r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(u.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},r.a.createElement(y.a,{tag:"caption"},"Props"),r.a.createElement(F.a,null,r.a.createElement(x.a,{className:"vds-tr"},r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),r.a.createElement(N.a,null,c.props&&Object.entries(c.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return r.a.createElement(x.a,{className:"vds-tr",key:a},r.a.createElement(j.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?r.a.createElement("strong",null," - required"):""),r.a.createElement(O.a,{className:"vds-td"},r.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?r.a.createElement("small",{style:{color:"#1a1f71"}},r.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),r.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),r.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};q.displayName="FooterExample";a.default=q},535:function(e,a,t){"use strict";var n=t(5),o=t(0),r=t.n(o),l=t(3),s=t(2),c=t.n(s),i=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,l=e.tag,s=Object(n.a)(e,["children","className","tag"]);return(r.a.createElement(l,Object.assign({className:c()("vds-screen-reader",o),ref:a},s),t))}));i.propTypes={children:l.node,className:l.string,tag:l.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",a.a=i},536:function(e,a,t){"use strict";var n=t(4),o=t(5),r=t(0),l=t.n(r),s=t(3),c=t(2),i=t.n(c),m=Object(r.forwardRef)((function(e,a){var t,r=e.children,s=e.className,c=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,p=e.reveal,g=e.revealFirstColumn,u=e.revealLastColumn,f=e.rowSelection,v=e.size,h=e.stickyHeader,y=Object(o.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return l.a.createElement("table",Object.assign({},y,{className:i()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(c)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(g)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--").concat(f),Boolean(f)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(h)),t),s),ref:a}),r)}));m.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},m.displayName="DataTable",a.a=m},537:function(e,a,t){"use strict";var n=t(5),o=t(0),r=t.n(o),l=t(3),s=t(2),c=t.n(s),i=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,l=Object(n.a)(e,["children","className"]);return(r.a.createElement("tbody",Object.assign({className:c()("vds-tbody",o),ref:a},l),t))}));i.propTypes={children:l.node,className:l.string},i.displayName="Tbody",a.a=i},538:function(e,a,t){"use strict";var n=t(4),o=t(5),r=t(0),l=t.n(r),s=t(3),c=t(2),i=t.n(c),m=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,s=e.textAlign,c=Object(o.a)(e,["children","className","textAlign"]);return(l.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(s),Boolean(s)),r),ref:a},c),t))}));m.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},539:function(e,a,t){"use strict";var n=t(5),o=t(0),r=t.n(o),l=t(3),s=t(2),c=t.n(s),i=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,l=Object(n.a)(e,["children","className"]);return(r.a.createElement("th",Object.assign({className:c()("vds-th",o),ref:a},l),t))}));i.propTypes={children:l.node,className:l.string},i.displayName="Th",a.a=i},540:function(e,a,t){"use strict";var n=t(5),o=t(0),r=t.n(o),l=t(3),s=t(2),c=t.n(s),i=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,l=Object(n.a)(e,["children","className"]);return(r.a.createElement("thead",Object.assign({className:c()("vds-thead",o),ref:a},l),t))}));i.propTypes={children:l.node,className:l.string},i.displayName="Thead",a.a=i},541:function(e,a,t){"use strict";var n=t(5),o=t(0),r=t.n(o),l=t(3),s=t(2),c=t.n(s),i=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,l=Object(n.a)(e,["children","className"]);return(r.a.createElement("tr",Object.assign({className:c()("vds-tr",o),ref:a},l),t))}));i.propTypes={children:l.node,className:l.string},i.displayName="Tr",a.a=i},550:function(e,a){},551:function(e,a){}}]);
//# sourceMappingURL=52.ae464225.chunk.js.map