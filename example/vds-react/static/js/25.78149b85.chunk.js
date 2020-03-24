(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[25],{278:function(e,t,a){"use strict";a.r(t);var n=a(64),l=a(0),o=a.n(l),r=a(542),s=a.n(r),c=a(2),i=a.n(c),m=a(549),u=a(548),d=a(39),p=a(8),b=a(536),f=a(18),h=a(23),v=a(16),E=a(535),g=a(65),y=a(145),T=a(537),A=a(538),w=a(539),O=a(540),j=a(541),C=a(7),N=a(108),R=a(109),B=a(110),S=a(156),I=a(805),k=a(580),x=a(557),L=a(558),G=function(e){var t=Object(l.useRef)();return o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"p"},"Use optional props in the table below to manage timeout and onBeforeClose states"),o.a.createElement(x.a,{colorScheme:"secondary",onClick:function(){e.showAlertDismissable({alertType:"success",button:o.a.createElement(I.a,null,o.a.createElement(k.a,{direction:"right"},o.a.createElement(x.a,{colorScheme:"tertiary",onClick:e.hideGlobalAlertDismissable},"Close"))),icon:o.a.createElement(f.a,{name:"success",resolution:"low"}),label:"This is a global alert notification",labelTitle:"Success: Information Updated.",show:!0,triggerRef:t})},ref:t},"Open Global Call to Action Alert"))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h2"},"Timed (Default)"),o.a.createElement(N.a,{id:"alert-default-1",position:"relative"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(R.a,null,o.a.createElement(f.a,{name:"info",resolution:"low"})),o.a.createElement(B.a,null,"This is a alert notification."))))))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h2"},"Alert (success)"),o.a.createElement(N.a,{id:"alert-default-2",position:"relative",alertType:"success"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(R.a,null,o.a.createElement(f.a,{name:"success",resolution:"low"})),o.a.createElement(B.a,null,"This is a alert notification."))))))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h2"},"Alert (warning)"),o.a.createElement(N.a,{id:"alert-default-3",position:"relative",alertType:"warning"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(R.a,null,o.a.createElement(f.a,{name:"info",resolution:"low"})),o.a.createElement(B.a,null,"This is a alert notification."))))))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h2"},"Alert (error)"),o.a.createElement(N.a,{id:"alert-default-4",position:"relative",alertType:"error"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(R.a,null,o.a.createElement(f.a,{name:"error",resolution:"low"})),o.a.createElement(B.a,null,"This is a alert notification."))))))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h2"},"Alert Call to Action (success)"),o.a.createElement(N.a,{id:"alert-success",position:"relative",alertType:"success"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(R.a,null,o.a.createElement(f.a,{name:"success",resolution:"low"})),o.a.createElement(B.a,null,o.a.createElement(S.a,null,"Success: Information Updated."),"This is a alert notification.")),o.a.createElement(p.a,{sm:1},o.a.createElement(I.a,null,o.a.createElement(k.a,{direction:"right"},o.a.createElement(x.a,{colorScheme:"tertiary"},"Dismiss"))))))))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h2"},"Alert Call to Action (close button)"),o.a.createElement(N.a,{id:"alert-error",position:"relative",alertType:"error"},o.a.createElement(h.a,null,o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(R.a,null,o.a.createElement(f.a,{name:"error",resolution:"low"})),o.a.createElement(B.a,null,o.a.createElement(S.a,null,"Error: Could not process your request."),"There has been an error processing your request. Please try again later.")),o.a.createElement(p.a,{sm:1},o.a.createElement(k.a,{direction:"right"},o.a.createElement(L.a,{ariaLabel:"search",iconType:"light-tiny"},o.a.createElement(f.a,{name:"close",resolution:"tiny"}))))))))))},P=a(545),F=[a(546)],D=a(547),q="import React, { forwardRef, useEffect, useRef } from 'react';\nimport { bool, func, node, number, oneOf, shape, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-alert';\nconst CSS_STATE = 'vds-state';\n\nconst Alert = forwardRef(({\n  alertType,\n  autoClose,\n  autoCloseTimeout,\n  autoFocusAlertButton,\n  children,\n  className,\n  dismissable,\n  onBeforeClose,\n  position,\n  role,\n  show,\n  sidenav,\n  triggerRef,\n  ...remainingProps\n}, ref) => {\n  ref = ref || useRef();\n\n  useEffect(() => {\n    if (autoClose && show && Number(autoCloseTimeout)) {\n      setTimeout(() => onBeforeClose(), autoCloseTimeout);\n    }\n  }, [autoClose, autoCloseTimeout, onBeforeClose, show]);\n\n  useEffect(() => {\n    if (dismissable && autoFocusAlertButton && show && ref && ref.current) {\n      ref.current.querySelector(\n        'button:not([disabled]):not(.vds-state--disabled)'\n      ).focus();\n    }\n\n    if (dismissable && autoFocusAlertButton && !show && triggerRef && triggerRef.current) {\n      triggerRef.current.focus();\n    }\n  }, [autoFocusAlertButton, dismissable, ref, show, triggerRef]);\n\n  return (\n    <div\n      className={classnames(CSS_PREFIX, {\n        [`${CSS_PREFIX}--${alertType}`]: Boolean(alertType),\n        [`${CSS_PREFIX}--${position}`]: Boolean(position),\n        [`${CSS_STATE}--show`]: Boolean(show),\n        [`${CSS_PREFIX}--sidenav--${sidenav}`]: Boolean(sidenav)\n      }, className)}\n      ref={ref}\n      role={role}\n      {...remainingProps}\n    >\n      {children}\n    </div>\n  );\n});\n\nAlert.propTypes = {\n  /**\n   * Alert Type\n   */\n  alertType: oneOf(['error', 'information', 'success', 'warning']),\n\n  /**\n   * Auto-close\n   */\n  autoClose: bool,\n\n  /**\n   * Auto-close Timeout\n   */\n  autoCloseTimeout: number,\n\n  /**\n   * Auto-focus on alert button\n   */\n  autoFocusAlertButton: bool,\n\n  /**\n   * @ignore\n   */\n  children: node.isRequired,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Dismissable Alert\n   */\n  dismissable: bool,\n\n  /**\n   * On before close\n   */\n  onBeforeClose: func,\n\n  /**\n   * Position\n   */\n  position: oneOf(['absolute', 'relative']),\n\n  /**\n   * @ignore\n   */\n  role: string,\n\n  /**\n   * Show\n   */\n  show: bool,\n\n  /**\n   *  Sidenav state\n   */\n  sidenav: oneOf(['close', 'open']),\n\n  /**\n   *  Ref of button that opened the Alert for focus back when Alert closes\n   */\n  triggerRef: shape({})\n};\n\nAlert.defaultProps = {\n  autoCloseTimeout: 3000,\n  role: 'alert'\n};\n\nAlert.displayName = 'Alert';\n\nexport default Alert;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),z='import React, { useRef } from \'react\';\nimport Alert from \'../../alert\';\nimport AlertIcon from \'../../alert-icon\';\nimport AlertLabel from \'../../alert-label\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Icon from \'../../icon\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\nimport AlertLabelTitle from \'../../alert-label-title\';\nimport ButtonContainer from \'../../button-container\';\nimport ButtonGroup from \'../../button-group\';\nimport ButtonText from \'../../button-text\';\nimport ButtonIcon from \'../../button-icon\';\n\nconst AlertExample = globalState => {\n  const buttonRef = useRef();\n\n  // const handleShowAlertTimed = () => {\n  //   globalState.showAlertTimed({\n  //     alertType: \'error\',\n  //     icon: <Icon name="error" resolution="low" />,\n  //     label: \'This is a global alert notification\',\n  //     onBeforeClose: globalState.hideGlobalAlertTimed,\n  //     show: true\n  //   });\n  // };\n\n  const handleShowAlertDismissable = () => {\n    globalState.showAlertDismissable({\n      alertType: \'success\',\n      button: <ButtonContainer>\n        <ButtonGroup direction="right">\n          <ButtonText\n            colorScheme="tertiary"\n            onClick={globalState.hideGlobalAlertDismissable}\n          >\n            Close\n          </ButtonText>\n        </ButtonGroup>\n      </ButtonContainer>,\n      icon: <Icon name="success" resolution="low" />,\n      label: \'This is a global alert notification\',\n      labelTitle: \'Success: Information Updated.\',\n      show: true,\n      triggerRef: buttonRef\n    });\n  };\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag="p">\n            Use optional props in the table below to manage timeout and onBeforeClose states\n          </Typography>\n          <ButtonText\n            colorScheme="secondary"\n            onClick={handleShowAlertDismissable}\n            ref={buttonRef}\n          >\n            Open Global Call to Action Alert\n          </ButtonText>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Timed (Default)</Typography>\n          <Alert id="alert-default-1" position="relative">\n            <Grid>\n              <Row>\n                <Col>\n                  <AlertIcon>\n                    <Icon name="info" resolution="low" />\n                  </AlertIcon>\n                  <AlertLabel>This is a alert notification.</AlertLabel>\n                </Col>\n              </Row>\n            </Grid>\n          </Alert>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Alert (success)</Typography>\n          <Alert id="alert-default-2" position="relative" alertType="success">\n            <Grid>\n              <Row>\n                <Col>\n                  <AlertIcon>\n                    <Icon name="success" resolution="low" />\n                  </AlertIcon>\n                  <AlertLabel>This is a alert notification.</AlertLabel>\n                </Col>\n              </Row>\n            </Grid>\n          </Alert>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Alert (warning)</Typography>\n          <Alert id="alert-default-3" position="relative" alertType="warning">\n            <Grid>\n              <Row>\n                <Col>\n                  <AlertIcon>\n                    <Icon name="info" resolution="low" />\n                  </AlertIcon>\n                  <AlertLabel>This is a alert notification.</AlertLabel>\n                </Col>\n              </Row>\n            </Grid>\n          </Alert>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Alert (error)</Typography>\n          <Alert id="alert-default-4" position="relative" alertType="error">\n            <Grid>\n              <Row>\n                <Col>\n                  <AlertIcon>\n                    <Icon name="error" resolution="low" />\n                  </AlertIcon>\n                  <AlertLabel>This is a alert notification.</AlertLabel>\n                </Col>\n              </Row>\n            </Grid>\n          </Alert>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Alert Call to Action (success)</Typography>\n          <Alert id="alert-success" position="relative" alertType="success">\n            <Grid>\n              <Row>\n                <Col>\n                  <AlertIcon><Icon name="success" resolution="low" /></AlertIcon>\n                  <AlertLabel>\n                    <AlertLabelTitle>Success: Information Updated.</AlertLabelTitle>\n                    This is a alert notification.\n                  </AlertLabel>\n                </Col>\n                <Col sm={1}>\n                  <ButtonContainer>\n                    <ButtonGroup direction="right">\n                      <ButtonText colorScheme="tertiary">Dismiss</ButtonText>\n                    </ButtonGroup>\n                  </ButtonContainer>\n                </Col>\n              </Row>\n            </Grid>\n          </Alert>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Alert Call to Action (close button)</Typography>\n          <Alert id="alert-error" position="relative" alertType="error">\n            <Grid>\n              <Row>\n                <Col>\n                  <AlertIcon><Icon name="error" resolution="low" /></AlertIcon>\n                  <AlertLabel>\n                    <AlertLabelTitle>Error: Could not process your request.</AlertLabelTitle>\n                    There has been an error processing your request. Please try again later.\n                  </AlertLabel>\n                </Col>\n                <Col sm={1}>\n                  <ButtonGroup direction="right">\n                    <ButtonIcon ariaLabel="search" iconType="light-tiny">\n                      <Icon name="close" resolution="tiny" />\n                    </ButtonIcon>\n                  </ButtonGroup>\n                </Col>\n              </Row>\n            </Grid>\n          </Alert>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default AlertExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),$=function(e){var t=Object.assign({},e),a=Object(l.useState)({}),r=Object(n.a)(a,2),c=r[0],N=r[1];return Object(l.useEffect)((function(){try{N(D.parse(q))}catch(e){console.log("\n        React-docgen could not parse props for Alert\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),o.a.createElement(h.a,{siblingOfStickyFooter:!0},o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(C.a,{tag:"h1"},"Alert"))),o.a.createElement(v.a,null,o.a.createElement(p.a,{role:"navigation","aria-label":"Secondary"},o.a.createElement(y.a,{role:"none"},o.a.createElement(g.a,{role:void 0,tag:o.a.createElement(d.c,{exact:!0,to:"".concat("/projects/vds-react","/components/alert"),activeClassName:"vds-state--selected"})},o.a.createElement(f.a,{name:"log",resolution:"low"}),"Alert Example"),o.a.createElement(g.a,{role:void 0,tag:o.a.createElement(d.c,{exact:!0,to:"".concat("/projects/vds-react","/components/alert/code"),activeClassName:"vds-state--selected"})},o.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),o.a.createElement(g.a,{role:void 0,tag:o.a.createElement(d.c,{exact:!0,to:"".concat("/projects/vds-react","/components/alert/html"),activeClassName:"vds-state--selected"})},o.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/projects/vds-react","/components/alert"),"vds-state--show":t.match.path==="".concat("/projects/vds-react","/components/alert")})},o.a.createElement(G,t)),o.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/projects/vds-react","/components/alert/code"),"vds-state--show":t.match.path==="".concat("/projects/vds-react","/components/alert/code")})},o.a.createElement(m.a,Object.assign({},m.b,{theme:u.a,code:z,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return(o.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return o.a.createElement("div",Object.assign({},l({key:t,line:e}),{key:t}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return o.a.createElement("span",Object.assign({},r({key:t,token:e}),{key:t}))})))}))))}))),o.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/projects/vds-react","/components/alert/html"),"vds-state--show":t.match.path==="".concat("/projects/vds-react","/components/alert/html")})},o.a.createElement(m.a,Object.assign({},m.b,{theme:u.a,code:P.format(s.a.renderToStaticMarkup(o.a.createElement(G,t)),{css:"ignore",parser:"html",plugins:F,printWidth:120}),language:"html"}),(function(e){var t=e.className,a=e.style,n=e.tokens,l=e.getLineProps,r=e.getTokenProps;return(o.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return o.a.createElement("div",Object.assign({},l({key:t,line:e}),{key:t}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return o.a.createElement("span",Object.assign({},r({key:t,token:e}),{key:t}))})))}))))}))))),o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(b.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},o.a.createElement(E.a,{tag:"caption"},"Props"),o.a.createElement(O.a,null,o.a.createElement(j.a,{className:"vds-tr"},o.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),o.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),o.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),o.a.createElement(w.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),o.a.createElement(T.a,null,c.props&&Object.entries(c.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return o.a.createElement(j.a,{className:"vds-tr",key:t},o.a.createElement(w.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?o.a.createElement("strong",null," - required"):""),o.a.createElement(A.a,{className:"vds-td"},o.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?o.a.createElement("small",{style:{color:"#1a1f71"}},o.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),o.a.createElement(A.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),o.a.createElement(A.a,{className:"vds-td"},e[1].description))})))))))};$.displayName="AlertExample";t.default=$},535:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(3),s=a(2),c=a.n(s),i=Object(l.forwardRef)((function(e,t){var a=e.children,l=e.className,r=e.tag,s=Object(n.a)(e,["children","className","tag"]);return(o.a.createElement(r,Object.assign({className:c()("vds-screen-reader",l),ref:t},s),a))}));i.propTypes={children:r.node,className:r.string,tag:r.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",t.a=i},536:function(e,t,a){"use strict";var n=a(4),l=a(5),o=a(0),r=a.n(o),s=a(3),c=a(2),i=a.n(c),m=Object(o.forwardRef)((function(e,t){var a,o=e.children,s=e.className,c=e.customizableColumns,m=e.dividerLines,u=e.keyValuePairs,d=e.reveal,p=e.revealFirstColumn,b=e.revealLastColumn,f=e.rowSelection,h=e.size,v=e.stickyHeader,E=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return r.a.createElement("table",Object.assign({},E,{className:i()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(c)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--").concat(h),Boolean(h)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(b)),Object(n.a)(a,"".concat("vds-state","--").concat(f),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(v)),a),s),ref:t}),o)}));m.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},m.displayName="DataTable",t.a=m},537:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(3),s=a(2),c=a.n(s),i=Object(l.forwardRef)((function(e,t){var a=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(o.a.createElement("tbody",Object.assign({className:c()("vds-tbody",l),ref:t},r),a))}));i.propTypes={children:r.node,className:r.string},i.displayName="Tbody",t.a=i},538:function(e,t,a){"use strict";var n=a(4),l=a(5),o=a(0),r=a.n(o),s=a(3),c=a(2),i=a.n(c),m=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,s=e.textAlign,c=Object(l.a)(e,["children","className","textAlign"]);return(r.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(s),Boolean(s)),o),ref:t},c),a))}));m.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},m.displayName="Td",t.a=m},539:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(3),s=a(2),c=a.n(s),i=Object(l.forwardRef)((function(e,t){var a=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(o.a.createElement("th",Object.assign({className:c()("vds-th",l),ref:t},r),a))}));i.propTypes={children:r.node,className:r.string},i.displayName="Th",t.a=i},540:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(3),s=a(2),c=a.n(s),i=Object(l.forwardRef)((function(e,t){var a=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(o.a.createElement("thead",Object.assign({className:c()("vds-thead",l),ref:t},r),a))}));i.propTypes={children:r.node,className:r.string},i.displayName="Thead",t.a=i},541:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(3),s=a(2),c=a.n(s),i=Object(l.forwardRef)((function(e,t){var a=e.children,l=e.className,r=Object(n.a)(e,["children","className"]);return(o.a.createElement("tr",Object.assign({className:c()("vds-tr",l),ref:t},r),a))}));i.propTypes={children:r.node,className:r.string},i.displayName="Tr",t.a=i},544:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(2),s=a.n(r),c=function(e){var t=e.children,a=e.className,l=e.tag,r=Object(n.a)(e,["children","className","tag"]);return(o.a.createElement(l,Object.assign({className:s()("vds-btn-label",a)},r),t))};c.displayName="ButtonLabel",c.defaultProps={tag:"span"},t.a=c},550:function(e,t){},551:function(e,t){},557:function(e,t,a){"use strict";var n=a(4),l=a(5),o=a(0),r=a.n(o),s=a(3),c=a(2),i=a.n(c),m=a(544),u=Object(o.forwardRef)((function(e,t){var a,o=e.active,s=e.children,c=e.className,u=e.colorScheme,d=e.disabled,p=e.flippable,b=e.isFullWidth,f=e.role,h=e.tabIndex,v=e.tag,E=e.type,g=Object(l.a)(e,["active","children","className","colorScheme","disabled","flippable","isFullWidth","role","tabIndex","tag","type"]);return r.a.createElement(v,Object.assign({className:i()((a={},Object(n.a)(a,"".concat("vds-btn-text"),!1===Boolean(u)),Object(n.a)(a,"".concat("vds-state","--active"),Boolean(o)),Object(n.a)(a,"".concat("vds-btn-text","--").concat(u),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--flippable"),Boolean(p)),Object(n.a)(a,"".concat("vds-btn-text","--fullwidth"),Boolean(b)),Object(n.a)(a,"".concat("vds-state","--disabled"),Boolean(d)),a),c),disabled:d,role:"button"===v?void 0:f,tabIndex:["span","div"].includes(v)?h:void 0,type:"button"===v?E:void 0,ref:t},g),r.a.createElement(m.a,null,s))}));u.propTypes={active:s.bool,children:s.node,className:s.string,colorScheme:Object(s.oneOf)(["primary","secondary","tertiary"]),disabled:s.bool,flippable:s.bool,isFullWidth:s.bool,role:s.string,tabIndex:Object(s.oneOfType)([s.number,s.string]),tag:Object(s.oneOf)(["a","button","div","span"]),type:s.string},u.defaultProps={role:"button",tabIndex:0,tag:"button",type:"button"},u.displayName="ButtonText",t.a=u},558:function(e,t,a){"use strict";var n=a(4),l=a(5),o=a(0),r=a.n(o),s=a(3),c=a(2),i=a.n(c),m=a(544),u=Object(o.forwardRef)((function(e,t){var a,o=e.active,s=e.ariaLabel,c=e.children,u=e.className,d=e.disabled,p=e.iconType,b=e.type,f=Object(l.a)(e,["active","ariaLabel","children","className","disabled","iconType","type"]);return r.a.createElement("button",Object.assign({"aria-label":s,className:i()("vds-btn-icon",(a={},Object(n.a)(a,"".concat("vds-btn-icon","--").concat(p),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--active"),Boolean(o)),a),u),disabled:d,ref:t,type:b},f),r.a.createElement(m.a,null,c))}));u.propTypes={active:s.bool,ariaLabel:s.string,children:s.node,className:s.string,disabled:s.bool,iconType:Object(s.oneOf)(["dark","dark-outline","dark-tiny","light","light-fill","light-outline","light-tiny"]),type:s.string},u.defaultProps={type:"button"},u.displayName="ButtonIcon",t.a=u},580:function(e,t,a){"use strict";var n=a(4),l=a(5),o=a(0),r=a.n(o),s=a(2),c=a.n(s),i=function(e){var t=e.children,a=e.className,o=e.direction,s=Object(l.a)(e,["children","className","direction"]);return(r.a.createElement("div",Object.assign({className:c()("vds-btn-group",Object(n.a)({},"".concat("vds-btn-group","--").concat(o),Boolean(o)),a)},s),t))};i.displayName="ButtonGroup",t.a=i},805:function(e,t,a){"use strict";var n=a(5),l=a(0),o=a.n(l),r=a(2),s=a.n(r),c=function(e){var t=e.children,a=e.className,l=Object(n.a)(e,["children","className"]);return(o.a.createElement("div",Object.assign({className:s()("vds-btn-container",a)},l),t))};c.displayName="ButtonContainer",t.a=c}}]);
//# sourceMappingURL=25.78149b85.chunk.js.map