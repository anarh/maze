(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[30],{296:function(e,a,t){"use strict";t.r(a);var n=t(86),r=t(538),o=t(0),l=t.n(o),c=t(537),s=t.n(c),i=t(2),m=t.n(i),d=t(546),u=t(545),v=t(40),p=t(8),b=t(527),f=t(18),h=t(26),E=t(17),N=t(526),g=t(65),y=t(139),w=t(528),O=t(529),j=t(530),T=t(531),L=t(532),x=t(7),I=t(144),C=t(148),k=t(809),B=t(142),S=t(560),R=t(610),P=t(611),A=t(681),V=t(145),D=t(149),z=t(150),M=t(151),F=t(152),U=t(153),H=t(697),_=t(232),$=t(845),G=t(154),X=t(810),K=t(233),q=t(234),W=t(235),J=t(236),Y=t(69),Q=t(147),Z=t.n(Q),ee=function(){var e=Object(o.useState)(!0),a=Object(n.a)(e,2),t=a[0],r=a[1];return l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(x.a,{tag:"h2"},"Nav"))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(V.a,{position:"relative"},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(G.a,{href:"#content"},"Skip to main content"),l.a.createElement(D.a,null,l.a.createElement(z.a,null,l.a.createElement(S.a,{ariaLabel:"menu",iconType:"dark"},l.a.createElement(f.a,{name:"menu",resolution:"low"})),l.a.createElement(M.a,{href:"http://www.visa.com"},l.a.createElement(F.a,{alt:"Visa",src:Z.a})))),l.a.createElement($.a,null,l.a.createElement(U.a,{ariaLabel:"Site Navigation"},l.a.createElement(y.a,null,l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},"Contact"),l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},"Service"),l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},"Statistics")))),l.a.createElement(X.a,null,l.a.createElement(H.a,{menu:l.a.createElement(R.a,null,l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement("a",{href:"./"},"My Profile"))),l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement("a",{href:"./"},"My Rewards"))),l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement("a",{href:"./"},"My Account"))),l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement("a",{href:"./"},"Send Email"))),l.a.createElement(P.a,null,l.a.createElement(A.a,null,l.a.createElement("a",{href:"./"},"Sign Out")))),placement:"bottom-end"},l.a.createElement(k.a,{flippable:!0},l.a.createElement(I.a,null,l.a.createElement(C.a,null,"Adam Smith")),l.a.createElement(f.a,{name:"arrow-expand",resolution:"tiny"})))))))))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(x.a,{tag:"h2"},"Vertical Nav"))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(V.a,{orientation:"vertical",size:t?void 0:"mini"},l.a.createElement(_.a,{style:{position:"inherit"}},l.a.createElement(W.a,null,l.a.createElement(G.a,{href:"#content"},"Skip to main content"),l.a.createElement(D.a,null,l.a.createElement(z.a,null,l.a.createElement(S.a,{ariaLabel:"menu",iconType:"dark"},l.a.createElement(f.a,{name:"menu",resolution:"low"})),l.a.createElement(M.a,{href:"/"},l.a.createElement(F.a,{alt:"Visa",src:Z.a}))))),l.a.createElement(U.a,{ariaLabel:"Site Navigation"},l.a.createElement(y.a,{orientation:"vertical"},l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},l.a.createElement(f.a,{name:"savings-account",resolution:"low"})," ",l.a.createElement(Y.a,null,"Info")),l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},l.a.createElement(f.a,{name:"note",resolution:"low"})," ",l.a.createElement(Y.a,null,"Docs")),l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},l.a.createElement(f.a,{name:"view-grid",resolution:"low"})," ",l.a.createElement(Y.a,null,"Components")),l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},l.a.createElement(f.a,{name:"folder-multiple",resolution:"low"})," ",l.a.createElement(Y.a,null,"Resources")),l.a.createElement(g.a,{tag:l.a.createElement("a",null),href:"http://www.visa.com"},l.a.createElement(f.a,{name:"analytics",resolution:"low"})," ",l.a.createElement(Y.a,null,"Charts Library")))),l.a.createElement(q.a,null,l.a.createElement(K.a,null,l.a.createElement(I.a,null,l.a.createElement(C.a,null,"0.0.0"))),l.a.createElement(J.a,{onClick:function(){return r(!t)}},l.a.createElement(B.a,null,t?l.a.createElement(f.a,{name:"arrow-previous",resolution:"tiny"}):l.a.createElement(f.a,{name:"arrow-next",resolution:"tiny"})))))))))},ae=t(540),te=[t(541)],ne=t(542),re="import React, { forwardRef } from 'react';\nimport { elementType, node, oneOf, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-nav';\n\nconst Nav = forwardRef(({\n  children,\n  className,\n  orientation,\n  position,\n  size,\n  tag: Tag,\n  type,\n  ...remainingProps\n}, ref) => (\n  <Tag\n    className={classnames(CSS_PREFIX, {\n      [`${CSS_PREFIX}--${orientation}`]: Boolean(orientation),\n      [`${CSS_PREFIX}--${position}`]: Boolean(position),\n      [`${CSS_PREFIX}--${type}`]: Boolean(type),\n      [`${CSS_PREFIX}-vertical-${size}`]: Boolean(size)\n    }, className)}\n    ref={ref}\n    {...remainingProps}\n  >\n    {children}\n  </Tag>\n));\n\nNav.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Orientation\n   */\n  orientation: oneOf(['vertical']),\n\n  /**\n   * Position\n   */\n  position: oneOf(['absolute', 'fixed', 'relative']),\n\n  /**\n   * Size\n   */\n  size: oneOf(['mini']),\n\n  /**\n  * Should be tag name and not an actual element\n  */\n  tag: elementType,\n\n  /**\n   * Type\n   */\n  type: oneOf(['consumer', 'marketing'])\n};\n\nNav.defaultProps = {\n  tag: 'header'\n};\n\nNav.displayName = 'Nav';\n\nexport default Nav;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),oe='/* eslint-disable jsx-a11y/anchor-is-valid */\n/* eslint-disable jsx-a11y/anchor-has-content */\n\nimport React, { useState } from \'react\';\nimport Avatar from \'../../avatar\';\nimport AvatarText from \'../../avatar-text\';\nimport Button from \'../../button\';\nimport ButtonAction from \'../../button-action\';\nimport ButtonIcon from \'../../button-icon\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Icon from \'../../icon\';\nimport Listbox from \'../../listbox\';\nimport ListboxItem from \'../../listbox-item\';\nimport ListboxItemContainer from \'../../listbox-item-container\';\nimport Nav from \'../../nav\';\nimport NavBrand from \'../../nav-brand\';\nimport NavBrandInfo from \'../../nav-brand-info\';\nimport NavBrandLogo from \'../../nav-brand-logo\';\nimport NavBrandLogoImage from \'../../nav-brand-logo-image\';\nimport NavLinks from \'../../nav-links\';\nimport Navmenu from \'../../navmenu\';\nimport NavPanel from \'../../nav-panel\';\nimport NavSite from \'../../nav-site\';\nimport NavSkip from \'../../nav-skip\';\nimport NavUser from \'../../nav-user\';\nimport NavVersionMenu from \'../../nav-version-menu\';\nimport NavVerticalFooter from \'../../nav-vertical-footer\';\nimport NavVerticalHeader from \'../../nav-vertical-header\';\nimport NavVerticalToggleButton from \'../../nav-vertical-toggle-button\';\nimport Row from \'../../row\';\nimport Tab from \'../../tab\';\nimport TabItemLabel from \'../../tab-item-label\';\nimport TabList from \'../../tab-list\';\nimport Typography from \'../../typography\';\nimport Logo from \'@visa/vds-web/dist/_logos/visa/visa_vbm_wht.svg\';\n\nconst NavExample = () => {\n  const [open, setOpen] = useState(true);\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag="h2">Nav</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Nav position="relative">\n            <Grid>\n              <Row>\n                <Col>\n                  <NavSkip href="#content">Skip to main content</NavSkip>\n                  <NavBrand>\n                    <NavBrandInfo>\n                      <ButtonIcon ariaLabel="menu" iconType="dark">\n                        <Icon name="menu" resolution="low" />\n                      </ButtonIcon>\n                      <NavBrandLogo href="http://www.visa.com">\n                        <NavBrandLogoImage alt="Visa" src={Logo} />\n                      </NavBrandLogo>\n                    </NavBrandInfo>\n                  </NavBrand>\n                  <NavSite>\n                    <NavLinks ariaLabel="Site Navigation">\n                      <TabList>\n                        <Tab tag={<a />} href="http://www.visa.com">Contact</Tab>\n                        <Tab tag={<a />} href="http://www.visa.com">Service</Tab>\n                        <Tab tag={<a />} href="http://www.visa.com">Statistics</Tab>\n                      </TabList>\n                    </NavLinks>\n                  </NavSite>\n                  <NavUser>\n                    <Navmenu\n                      menu={\n                        <Listbox>\n                          <ListboxItem>\n                            <ListboxItemContainer>\n                              <a href="./">My Profile</a>\n                            </ListboxItemContainer>\n                          </ListboxItem>\n                          <ListboxItem>\n                            <ListboxItemContainer>\n                              <a href="./">My Rewards</a>\n                            </ListboxItemContainer>\n                          </ListboxItem>\n                          <ListboxItem>\n                            <ListboxItemContainer>\n                              <a href="./">My Account</a>\n                            </ListboxItemContainer>\n                          </ListboxItem>\n                          <ListboxItem>\n                            <ListboxItemContainer>\n                              <a href="./">Send Email</a>\n                            </ListboxItemContainer>\n                          </ListboxItem>\n                          <ListboxItem>\n                            <ListboxItemContainer>\n                              <a href="./">Sign Out</a>\n                            </ListboxItemContainer>\n                          </ListboxItem>\n                        </Listbox>\n                      }\n                      placement="bottom-end"\n                    >\n                      <Button flippable>\n                        <Avatar>\n                          <AvatarText>Adam Smith</AvatarText>\n                        </Avatar>\n                        <Icon name="arrow-expand" resolution="tiny" />\n                      </Button>\n                    </Navmenu>\n                  </NavUser>\n                </Col>\n              </Row>\n            </Grid>\n          </Nav>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Vertical Nav</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Nav orientation="vertical" size={open ? undefined : \'mini\'}>\n            <NavPanel style={{ position: \'inherit\' }}>\n              <NavVerticalHeader>\n                <NavSkip href="#content">Skip to main content</NavSkip>\n                <NavBrand>\n                  <NavBrandInfo>\n                    <ButtonIcon ariaLabel="menu" iconType="dark">\n                      <Icon name="menu" resolution="low" />\n                    </ButtonIcon>\n                    <NavBrandLogo href="/">\n                      <NavBrandLogoImage alt="Visa" src={Logo} />\n                    </NavBrandLogo>\n                  </NavBrandInfo>\n                </NavBrand>\n              </NavVerticalHeader>\n              <NavLinks ariaLabel="Site Navigation">\n                <TabList orientation="vertical">\n                  <Tab tag={<a />} href="http://www.visa.com">\n                    <Icon name="savings-account" resolution="low" /> <TabItemLabel>Info</TabItemLabel>\n                  </Tab>\n                  <Tab tag={<a />} href="http://www.visa.com">\n                    <Icon name="note" resolution="low" /> <TabItemLabel>Docs</TabItemLabel>\n                  </Tab>\n                  <Tab tag={<a />} href="http://www.visa.com">\n                    <Icon name="view-grid" resolution="low" /> <TabItemLabel>Components</TabItemLabel>\n                  </Tab>\n                  <Tab tag={<a />} href="http://www.visa.com">\n                    <Icon name="folder-multiple" resolution="low" /> <TabItemLabel>Resources</TabItemLabel>\n                  </Tab>\n                  <Tab tag={<a />} href="http://www.visa.com">\n                    <Icon name="analytics" resolution="low" /> <TabItemLabel>Charts Library</TabItemLabel>\n                  </Tab>\n                </TabList>\n              </NavLinks>\n              <NavVerticalFooter>\n                <NavVersionMenu>\n                  <Avatar><AvatarText>0.0.0</AvatarText></Avatar>\n                </NavVersionMenu>\n                <NavVerticalToggleButton onClick={() => setOpen(!open)}>\n                  <ButtonAction>\n                    {\n                      open\n                        ? <Icon name="arrow-previous" resolution="tiny" />\n                        : <Icon name="arrow-next" resolution="tiny" />\n                    }\n                  </ButtonAction>\n                </NavVerticalToggleButton>\n              </NavVerticalFooter>\n            </NavPanel>\n          </Nav>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default NavExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),le=function(e){var a=Object(r.a)({},e),t=Object(o.useState)({}),c=Object(n.a)(t,2),i=c[0],I=c[1];return Object(o.useEffect)((function(){try{I(ne.parse(re))}catch(e){console.log("\n        React-docgen could not parse props for Nav\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),l.a.createElement(h.a,{siblingOfStickyFooter:!0},l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(x.a,{tag:"h1"},"Nav"))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement(g.a,{tag:l.a.createElement(v.c,{exact:!0,to:"".concat("/vds-react","/components/nav"),activeClassName:"vds-state--selected"})},l.a.createElement(f.a,{name:"log",resolution:"low"}),"Nav Example"),l.a.createElement(g.a,{tag:l.a.createElement(v.c,{exact:!0,to:"".concat("/vds-react","/components/nav/code"),activeClassName:"vds-state--selected"})},l.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),l.a.createElement(g.a,{tag:l.a.createElement(v.c,{exact:!0,to:"".concat("/vds-react","/components/nav/html"),activeClassName:"vds-state--selected"})},l.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/nav"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/nav")})},l.a.createElement(ee,a)),l.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/nav/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/nav/code")})},l.a.createElement(d.a,Object.assign({},d.b,{theme:u.a,code:oe,language:"jsx"}),(function(e){var a=e.className,t=e.style,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return l.a.createElement("div",Object.assign({},r({key:a,line:e}),{key:a}),l.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return l.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))})))}))),l.a.createElement("div",{className:m()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/nav/html"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/nav/html")})},l.a.createElement(d.a,Object.assign({},d.b,{theme:u.a,code:ae.format(s.a.renderToStaticMarkup(l.a.createElement(ee,a)),{css:"ignore",parser:"html",plugins:te,printWidth:120}),language:"html"}),(function(e){var a=e.className,t=e.style,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return l.a.createElement("pre",{className:a,style:t},n.map((function(e,a){return l.a.createElement("div",Object.assign({},r({key:a,line:e}),{key:a}),l.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return l.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))})))}))))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement(b.a,{className:m()(["components"]),dividerLines:!0,size:"compact"},l.a.createElement(N.a,{tag:"caption"},"Props"),l.a.createElement(T.a,null,l.a.createElement(L.a,{className:"vds-tr"},l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),l.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),l.a.createElement(w.a,null,i.props&&Object.entries(i.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return l.a.createElement(L.a,{className:"vds-tr",key:a,tabIndex:"0"},l.a.createElement(O.a,{className:"vds-td"},e[0]," ",e[1].required?l.a.createElement("sup",{style:{color:"red"}}," required"):""),l.a.createElement(O.a,{className:"vds-td"},l.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?l.a.createElement("small",{style:{color:"#1a1f71"}},l.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),l.a.createElement(O.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),l.a.createElement(O.a,{className:"vds-td"},e[1].description))})))))))};le.displayName="NavExample";a.default=le},526:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(3),c=t(2),s=t.n(c),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,l=e.tag,c=Object(n.a)(e,["children","className","tag"]);return o.a.createElement(l,Object.assign({className:s()("vds-screen-reader",r),ref:a},c),t)}));i.propTypes={children:l.node,className:l.string,tag:l.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",a.a=i},527:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(3),s=t(2),i=t.n(s),m=Object(o.forwardRef)((function(e,a){var t,o=e.children,c=e.className,s=e.customizableColumns,m=e.dividerLines,d=e.keyValuePairs,u=e.reveal,v=e.revealFirstColumn,p=e.revealLastColumn,b=e.rowSelection,f=e.size,h=e.stickyHeader,E=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return l.a.createElement("table",Object.assign({},E,{className:i()("vds-data-table",(t={},Object(n.a)(t,"".concat("vds-state","--customizable-columns"),Boolean(s)),Object(n.a)(t,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--").concat(f),Boolean(f)),Object(n.a)(t,"".concat("vds-state","--reveal"),Boolean(u)),Object(n.a)(t,"".concat("vds-state","--reveal-first-column"),Boolean(v)),Object(n.a)(t,"".concat("vds-state","--reveal-last-column"),Boolean(p)),Object(n.a)(t,"".concat("vds-state","--").concat(b),Boolean(b)),Object(n.a)(t,"".concat("vds-state","--sticky-header"),Boolean(h)),t),c),ref:a}),o)}));m.propTypes={children:c.node,className:c.string,columns:Object(c.arrayOf)(Object(c.shape)({})),customizableColumns:c.bool,data:Object(c.arrayOf)(Object(c.shape)({})),dividerLines:c.bool,keyValuePairs:c.bool,reveal:c.bool,revealFirstColumn:c.bool,revealLastColumn:c.bool,rowSelection:Object(c.oneOf)(["multi-select","single-select"]),size:Object(c.oneOf)(["compact"]),stickyHeader:c.bool},m.displayName="DataTable",a.a=m},528:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(3),c=t(2),s=t.n(c),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("tbody",Object.assign({className:s()("vds-tbody",r),ref:a},l),t)}));i.propTypes={children:l.node,className:l.string},i.displayName="Tbody",a.a=i},529:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(3),s=t(2),i=t.n(s),m=Object(o.forwardRef)((function(e,a){var t=e.children,o=e.className,c=e.textAlign,s=Object(r.a)(e,["children","className","textAlign"]);return l.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(c),Boolean(c)),o),ref:a},s),t)}));m.propTypes={children:c.node,className:c.string,textAlign:Object(c.oneOf)(["center","left","right"])},m.displayName="Td",a.a=m},530:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(3),c=t(2),s=t.n(c),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("th",Object.assign({className:s()("vds-th",r),ref:a},l),t)}));i.propTypes={children:l.node,className:l.string},i.displayName="Th",a.a=i},531:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(3),c=t(2),s=t.n(c),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("thead",Object.assign({className:s()("vds-thead",r),ref:a},l),t)}));i.propTypes={children:l.node,className:l.string},i.displayName="Thead",a.a=i},532:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(3),c=t(2),s=t.n(c),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,l=Object(n.a)(e,["children","className"]);return o.a.createElement("tr",Object.assign({className:s()("vds-tr",r),ref:a},l),t)}));i.propTypes={children:l.node,className:l.string},i.displayName="Tr",a.a=i},535:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(2),c=t.n(l),s=function(e){var a=e.children,t=e.className,r=Object(n.a)(e,["children","className"]);return o.a.createElement("span",Object.assign({className:c()("vds-btn-label",t)},r),a)};s.displayName="ButtonLabel",a.a=s},543:function(e,a){},544:function(e,a){},560:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(3),s=t(2),i=t.n(s),m=t(535),d=Object(o.forwardRef)((function(e,a){var t=e.ariaLabel,o=e.children,c=e.className,s=e.disabled,d=e.iconType,u=e.type,v=Object(r.a)(e,["ariaLabel","children","className","disabled","iconType","type"]);return l.a.createElement("button",Object.assign({"aria-label":t,className:i()("vds-btn-icon",Object(n.a)({},"".concat("vds-btn-icon","--").concat(d),Boolean(d)),c),disabled:s,ref:a,type:u},v),l.a.createElement(m.a,null,o))}));d.propTypes={ariaLabel:c.string.isRequired,children:c.node,className:c.string,disabled:c.bool,iconType:Object(c.oneOf)(["dark","dark-outline","dark-tiny","light","light-fill","light-outline","light-tiny"]),type:c.string},d.defaultProps={type:"button"},d.displayName="ButtonIcon",a.a=d},610:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(3),c=t(2),s=t.n(c),i=Object(r.forwardRef)((function(e,a){var t=e.children,r=e.className,l=e.multiselect,c=e.role,i=Object(n.a)(e,["children","className","multiselect","role"]);return o.a.createElement("ul",Object.assign({className:s()("vds-listbox",{"vds-select--multi":Boolean(l)},r),ref:a,role:c},i),t)}));i.propTypes={children:l.node,className:l.string,multiselect:l.bool,role:l.string},i.defaultProps={role:"listbox"},i.displayName="Listbox",a.a=i},611:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(3),s=t(2),i=t.n(s),m=Object(o.forwardRef)((function(e,a){var t,o=e.active,c=e.children,s=e.className,m=e.disabled,d=e.focus,u=e.listItemValue,v=e.role,p=e.selected,b=Object(r.a)(e,["active","children","className","disabled","focus","listItemValue","role","selected"]);return l.a.createElement("li",Object.assign({"aria-disabled":Boolean(m)?"true":void 0,className:i()("vds-listbox-item",(t={},Object(n.a)(t,"".concat("vds-state","--active"),Boolean(o)),Object(n.a)(t,"".concat("vds-state","--disabled"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--focus"),Boolean(d)),Object(n.a)(t,"".concat("vds-state","--selected"),Boolean(p)),t),s),"data-list-item-value":u,ref:a,role:v,tabIndex:Boolean(m)?"-1":void 0},b),c)}));m.propTypes={active:c.bool,children:c.node,className:c.string,disabled:c.bool,focus:c.bool,listItemValue:c.string,role:c.string,selected:c.bool},m.defaultProps={role:"option"},m.displayName="ListboxItem",a.a=m},635:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(3),s=t(2),i=t.n(s),m=Object(o.forwardRef)((function(e,a){var t,o=e.children,c=e.className,s=e.position,m=e.show,d=Object(r.a)(e,["children","className","position","show"]);return l.a.createElement("div",Object.assign({className:i()((t={},Object(n.a)(t,"".concat("vds-menu"),!s),Object(n.a)(t,"".concat("vds-menu","--").concat(s),Boolean(s)),Object(n.a)(t,"".concat("vds-menu","--show"),Boolean(m)),t),c),ref:a},d),o)}));m.propTypes={children:c.node,className:c.string,position:Object(c.oneOf)(["absolute","fixed"]),show:c.bool},m.displayName="Menu",a.a=m},681:function(e,a,t){"use strict";var n=t(4),r=t(13),o=t(5),l=t(0),c=t(3),s=t(2),i=t.n(s),m=Object(l.forwardRef)((function(e,a){var t=e.children,c=e.className,s=e.disabled,m=Object(o.a)(e,["children","className","disabled"]);return Object(l.cloneElement)(t,Object(r.a)({className:i()("vds-listbox-item-container",Object(n.a)({},"".concat("vds-state","--disabled"),Boolean(s)),c),ref:a},m))}));m.propTypes={children:c.element,className:c.string,disabled:c.bool},m.displayName="ListboxItemContainer",a.a=m},697:function(e,a,t){"use strict";var n=t(13),r=t(86),o=t(5),l=t(0),c=t.n(l),s=t(2),i=t.n(s),m=t(539),d=t.n(m),u=t(970),v=t(1647),p=t(1648),b=t(4),f=t(3),h=Object(l.forwardRef)((function(e,a){var t=e.children,n=e.className,r=e.show,l=Object(o.a)(e,["children","className","show"]);return c.a.createElement("div",Object.assign({className:i()("".concat("vds-menu","-curtain"),Object(b.a)({},"".concat("vds-menu","--show"),Boolean(r)),n),ref:a},l),t)}));h.propTypes={children:f.node,className:f.string,show:f.bool},h.displayName="MenuCurtain";var E=h,N=t(635),g={DOWN:40,END:35,ESC:27,HOME:36,PAGEDOWN:34,PAGEUP:33,RETURN:13,SPACE:32,TAB:9,UP:38},y=function(e){var a=e.children,t=e.className,s=e.id,m=void 0===s?d.a.generate():s,b=e.menu,f=e.modifiers,h=e.placement,y=Object(o.a)(e,["children","className","id","menu","modifiers","placement"]),w=Object(l.useState)(!1),O=Object(r.a)(w,2),j=O[0],T=O[1],L=Object(l.useState)(0),x=Object(r.a)(L,2),I=x[0],C=x[1],k=Object(l.useState)([]),B=Object(r.a)(k,2),S=B[0],R=B[1],P=Object(l.useState)({}),A=Object(r.a)(P,2),V=A[0],D=A[1],z=Object(l.useState)(!0),M=Object(r.a)(z,2),F=M[0],U=M[1],H=Object(l.useRef)(m).current,_=Object(l.useRef)(),$=Object(l.useRef)();Object(l.useEffect)((function(){if(_.current){var e=_.current.querySelectorAll("button:not([disabled]):not(.vds-state--disabled), [href]:not(.vds-state--disabled)");R(e),D(Array.from(e).map((function(e,a){return{char:e.textContent.trim().toLowerCase().substring(0,1),index:a}})))}}),[]),Object(l.useEffect)((function(){j&&S[I].focus(),j||!$.current||F||($.current.focus(),U(!1))}),[F,I,S,j]);var G=function(e){var a="button"===e.target.tagName.toLowerCase(),t="a"===e.target.tagName.toLowerCase();T(!j),a||t||e.preventDefault()},X=function(e){var a=e.charCode||e.keyCode,t=S.length,n=e.currentTarget===$.current,r=e.currentTarget===_.current,o=e.key.toLowerCase(),l=1===o.length&&o.match(/\S/),c=0;if(r&&U(!1),!(e.ctrlKey||e.altKey||e.metaKey||e.keyCode===g.SPACE||e.keyCode===g.RETURN)&&(a!==g.END&&a!==g.HOME||(e.preventDefault(),n&&T(!0),t&&(C(c=a===g.END?t-1:0),S[c].focus())),a!==g.UP&&a!==g.DOWN||(e.preventDefault(),n&&(T(!0),c=a===g.UP?I||t-1:I||0),r&&t&&(c=a===g.UP?I-1<0?t-1:I-1:(I+1)%t),t&&(C(c),S[c].focus())),a===g.ENTER&&T(n),a===g.ESC&&(e.preventDefault(),T(!1)),a===g.TAB&&r&&(U(!0),T(!1)),l&&j)){var s=I+1===t?0:I+1,i=V.filter((function(e){return e.char===o&&e.index!==I})).map((function(e){return e.index})),m=i.indexOf(s);(m=m>-1?i[m]:void 0===i[0]?-1:i[0])>-1&&(C(m),S[m].focus())}};return c.a.createElement(u.c,null,c.a.createElement("div",Object.assign({className:i()("vds-navmenu",t)},y),c.a.createElement(v.a,{modifiers:f,placement:h},(function(e){var t=e.ref,r=e.style,o=e.scheduleUpdate;return c.a.createElement(l.Fragment,null,c.a.createElement(p.a,null,(function(e){var t=e.ref;return c.a.createElement("span",{ref:t,className:"vds-popper-container"},Object(l.cloneElement)(a,{active:j,"aria-controls":"".concat("vds-navmenu","-listbox-").concat(H),"aria-expanded":j?"true":void 0,"aria-haspopup":b?"true":"false",id:H,onClick:function(e){o(),G(e)},onKeyDown:X,ref:$}))})),c.a.createElement(N.a,{id:"".concat("vds-navmenu","-menu-").concat(H),position:"absolute",ref:t,show:j,style:Object(n.a)({},r,{overflowY:"inherit"})},Object(l.cloneElement)(b,{"aria-labelledby":H,children:l.Children.map(b.props.children,(function(e,a){return Object(l.cloneElement)(e,{children:l.Children.map(e.props.children,(function(e,t){return Object(l.cloneElement)(e,{key:"".concat(H,"-").concat(a,"-").concat(t),role:"menuitem",tabIndex:"-1"})})),key:"".concat(H,"-").concat(a),role:"none"})})),id:"".concat("vds-navmenu","-listbox-").concat(H),onClick:G,onKeyDown:X,ref:_,role:"menu"})))}))),c.a.createElement(E,{onClick:G,show:j}))};y.defaultProps={modifiers:{offset:{enabled:!0,offset:"0"}},placement:"bottom-start"},y.displayName="Navmenu";a.a=y},809:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(3),s=t(2),i=t.n(s),m=Object(o.forwardRef)((function(e,a){var t,o=e.active,c=e.children,s=e.className,m=e.disabled,d=e.flippable,u=Object(r.a)(e,["active","children","className","disabled","flippable"]);return l.a.createElement("button",Object.assign({className:i()("vds-btn",(t={},Object(n.a)(t,"".concat("vds-state","--active"),Boolean(o)),Object(n.a)(t,"".concat("vds-state","--disabled"),Boolean(m)),Object(n.a)(t,"".concat("vds-state","--flippable"),Boolean(d)),t),s),ref:a},u),c)}));m.propTypes={active:c.bool,children:c.node,className:c.string,disabled:c.bool,flippable:c.bool},m.displayName="Button",a.a=m},810:function(e,a,t){"use strict";var n=t(5),r=t(0),o=t.n(r),l=t(2),c=t.n(l),s=function(e){var a=e.children,t=e.className,r=Object(n.a)(e,["children","className"]);return o.a.createElement("div",Object.assign({className:c()("vds-nav-user",t)},r),a)};s.displayName="NavUser",a.a=s},845:function(e,a,t){"use strict";var n=t(4),r=t(5),o=t(0),l=t.n(o),c=t(2),s=t.n(c),i=function(e){var a=e.children,t=e.className,o=e.show,c=Object(r.a)(e,["children","className","show"]);return l.a.createElement("div",Object.assign({className:s()("vds-nav-site",Object(n.a)({},"".concat("vds-state","--show"),Boolean(o)),t)},c),a)};i.displayName="NavSite",a.a=i}}]);
//# sourceMappingURL=30.0db92ff4.chunk.js.map