(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[29],{267:function(e,t,a){"use strict";a.r(t);var n=a(64),r=a(0),o=a.n(r),i=a(542),l=a.n(i),s=a(2),c=a.n(s),d=a(549),p=a(548),u=a(39),m=a(8),f=a(536),v=a(18),h=a(23),g=a(16),b=a(535),y=a(65),O=a(145),E=a(537),w=a(538),T=a(539),k=a(540),j=a(541),N=a(7),C=a(13),R=a(558),S=a(557),x=a(695),z=a(5),B=function(e){var t=e.children,a=e.className,n=Object(z.a)(e,["children","className"]);return(o.a.createElement("div",{className:c()("".concat("vds-wizard","-container"))},o.a.createElement("ul",Object.assign({className:c()("vds-wizard",a)},n),t)))};B.displayName="Wizard";var P=B,W=a(4),H=a(3),L=function(e){var t=e.children,a=e.className,n=Object(z.a)(e,["children","className"]);return(o.a.createElement("div",Object.assign({className:c()("vds-wizard-step-error",a)},n),t))};L.defaultProps={},L.displayName="WizardStepError";var I=L,M=Object(r.forwardRef)((function(e,t){var a,n=e.active,r=e.children,i=e.className,l=e.completed,s=e.error,d=e.titles,p=Object(z.a)(e,["active","children","className","completed","error","titles"]);return o.a.createElement("li",Object.assign({className:c()("vds-wizard-step",(a={},Object(W.a)(a,"".concat("vds-state","--active"),Boolean(n)),Object(W.a)(a,"".concat("vds-state","--completed"),Boolean(l)),Object(W.a)(a,"".concat("vds-state","--error"),Boolean(s)),Object(W.a)(a,"".concat("vds-wizard-step","--titles"),Boolean(d)),a),i),ref:t},p),r,s?o.a.createElement(I,null,o.a.createElement(v.a,{name:"error-alt",resolution:"tiny"})):void 0)}));M.propTypes={active:H.bool,children:H.node,className:H.string,completed:H.bool,error:H.bool,titles:H.bool},M.displayName="WizardStep";var F=M,A=function(e){var t=e.children,a=e.className,n=Object(z.a)(e,["children","className"]);return(o.a.createElement("span",Object.assign({className:c()("vds-wizard-step-title",a)},n),t))};A.defaultProps={},A.displayName="WizardStepTitle";var X=A,Y=function(){var e=Object(r.useState)({steps:[{active:!0,completed:!1,error:!1,label:"1",title:"Cart",tooltip:!1},{active:!1,completed:!1,error:!1,label:"2",title:"Order Info",tooltip:!1},{active:!1,completed:!1,error:!1,label:"3",title:"Shipping Info",tooltip:!1},{active:!1,completed:!1,error:!1,label:"4",title:"Payment Info",tooltip:!1},{active:!1,completed:!1,error:!1,label:"5",title:"Review",tooltip:!1},{active:!1,completed:!1,error:!1,label:"6",title:"Confirmation",tooltip:!1}]}),t=Object(n.a)(e,2),a=t[0],i=t[1],l=function(e,t){var n=a.steps.map((function(a,n){return Object(C.a)({},a,{tooltip:e===n?t:a.tooltip})}));i({steps:n})};return o.a.createElement(h.a,null,o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(N.a,{tag:"h2"},"Wizard (BYO-State) Bring your own state")),o.a.createElement(m.a,{textAlign:"right"},o.a.createElement(S.a,{disabled:0===a.steps.findIndex((function(e){return!0===e.active})),onClick:function(){var e=a.steps.findIndex((function(e){return!0===e.active}));e=-1===e?a.steps.length:e;var t=a.steps.map((function(t,a){return Object(C.a)({},t,{active:a===e-1,completed:a<e-1,error:a<=e-1&&(0===a||t.error)})}));i({steps:t})}},"Previous"),o.a.createElement(S.a,{disabled:-1===a.steps.findIndex((function(e){return!0===e.active})),onClick:function(){var e=a.steps.findIndex((function(e){return!0===e.active})),t=a.steps.map((function(t,a){return Object(C.a)({},t,{active:a===e+1,completed:a<=e,error:a<=e&&(0===a||t.error)})}));i({steps:t})}},"Next"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(P,null,a.steps.map((function(e,t){return o.a.createElement(F,{key:t,active:e.active,completed:e.completed,error:e.error,"aria-current":e.active?"step":void 0},o.a.createElement(x.a,{tooltip:"".concat(e.title),tooltipShown:e.tooltip,placement:"top",trigger:"none",id:"stepper-".concat(t)},o.a.createElement(R.a,{"aria-describedby":"stepper-".concat(t),iconType:"light-tiny",onFocus:function(){return l(t,!0)},onBlur:function(){return l(t,!1)},onMouseEnter:function(){return l(t,!0)},onMouseLeave:function(){return l(t,!1)}},o.a.createElement(r.Fragment,null,e.error?o.a.createElement(b.a,null,"Error: "):e.active?o.a.createElement(b.a,null,"Current: "):e.completed?o.a.createElement(b.a,null,"Completed: "):void 0,e.label))))}))))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(N.a,{tag:"h3"},"Wizard with step titles"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(P,null,a.steps.map((function(e,t){return t>3?null:o.a.createElement(F,{key:t,active:0===t,"aria-current":0===t?"step":void 0,titles:!0},o.a.createElement(R.a,{"aria-describedby":"wizard-step-title-".concat(t),ariaLabel:e.label,iconType:"light-tiny"},e.label),o.a.createElement(X,{id:"wizard-step-title-".concat(t)},e.title))}))))))},V=a(545),D=[a(546)],U=a(547),$="import React from 'react';\nimport { node, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-wizard';\n\nconst Wizard = ({ children, className, ...remainingProps }) => (\n  <div className={classnames(`${CSS_PREFIX}-container`)}>\n    <ul\n      className={classnames(CSS_PREFIX, className)}\n      {...remainingProps}\n    >\n      {children}\n    </ul>\n  </div>\n);\n\nWizard.propTypes = {\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string\n};\n\nWizard.displayName = 'Wizard';\n\nexport default Wizard;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),G="import React, { Fragment, useState } from 'react';\nimport ButtonIcon from '../../button-icon';\nimport ButtonText from '../../button-text';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport Row from '../../row';\nimport ScreenReader from '../../screen-reader';\nimport Tooltip from '../../tooltip';\nimport Typography from '../../typography';\nimport Wizard from '../../wizard';\nimport WizardStep from '../../wizard-step';\nimport WizardStepTitle from '../../wizard-step-title';\n\nconst WizardExample = () => {\n  const [state, setState] = useState({\n    steps: [\n      {\n        active: true,\n        completed: false,\n        error: false,\n        label: '1',\n        title: 'Cart',\n        tooltip: false\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '2',\n        title: 'Order Info',\n        tooltip: false\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '3',\n        title: 'Shipping Info',\n        tooltip: false\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '4',\n        title: 'Payment Info',\n        tooltip: false\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '5',\n        title: 'Review',\n        tooltip: false\n      },\n      {\n        active: false,\n        completed: false,\n        error: false,\n        label: '6',\n        title: 'Confirmation',\n        tooltip: false\n      }]\n  });\n\n  const handleClickPrevious = () => {\n    let index = state.steps.findIndex(step => step.active === true);\n    index = index === -1 ? state.steps.length : index;\n    const steps = state.steps.map((step, k) => ({\n      ...step,\n      active: k === index - 1,\n      completed: k < index - 1, // use your own logic to determine completed state\n      error: k <= index - 1 ? (k === 0 ? true : step.error) : false//, // set first item to error for demo\n      // label: step.label,\n      // tooltip: step.tooltip\n    }));\n\n    setState({ steps });\n  };\n\n  const handleClickNext = () => {\n    const index = state.steps.findIndex(step => step.active === true);\n    const steps = state.steps.map((step, k) => ({\n      ...step,\n      active: k === index + 1,\n      completed: k <= index, // use your own logic/state to determine completed state\n      error: k <= index ? (k === 0 ? true : step.error) : false//, // set first item to error for demo\n      // label: step.label,\n      // tooltip: step.tooltip\n    }));\n\n    setState({ steps });\n  };\n\n  const handleWizardTooltip = (step, value) => {\n    const steps = state.steps.map((s, k) => ({\n      ...s,\n      tooltip: step === k ? value : s.tooltip\n    }));\n\n    setState({ steps });\n  };\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag=\"h2\">Wizard (BYO-State) Bring your own state</Typography>\n        </Col>\n        <Col textAlign=\"right\">\n          <ButtonText\n            disabled={state.steps.findIndex(step => step.active === true) === 0}\n            onClick={handleClickPrevious}\n          >\n            Previous\n          </ButtonText>\n\n          <ButtonText\n            disabled={state.steps.findIndex(step => step.active === true) === -1}\n            onClick={handleClickNext}\n          >\n            Next\n          </ButtonText>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Wizard>\n            {\n              state.steps.map((step, key) => (\n                <WizardStep\n                  key={key}\n                  active={step.active}\n                  completed={step.completed}\n                  error={step.error}\n                  aria-current={step.active ? \"step\" : undefined}\n                >\n                  <Tooltip\n                    tooltip={`${step.title}`}\n                    tooltipShown={step.tooltip}\n                    placement=\"top\"\n                    trigger=\"none\"\n                    id={`stepper-${key}`}\n                  >\n                    <ButtonIcon\n                      aria-describedby={`stepper-${key}`}\n                      iconType=\"light-tiny\"\n                      onFocus={() => handleWizardTooltip(key, true)}\n                      onBlur={() => handleWizardTooltip(key, false)}\n                      onMouseEnter={() => handleWizardTooltip(key, true)}\n                      onMouseLeave={() => handleWizardTooltip(key, false)}\n                    >\n                      <Fragment>\n                        {\n                          step.error ?\n                            <ScreenReader>Error: </ScreenReader>\n                            : step.active ?\n                              <ScreenReader>Current: </ScreenReader>\n                              : step.completed ?\n                                <ScreenReader>Completed: </ScreenReader>\n                                : undefined\n                        }\n                        { step.label }\n                      </Fragment>\n                    </ButtonIcon>\n                  </Tooltip>\n                </WizardStep>\n              ))\n            }\n          </Wizard>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag=\"h3\">Wizard with step titles</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Wizard>\n            {\n              state.steps.map((step, key) => (key > 3 ? null :\n                <WizardStep\n                  key={key}\n                  active={key === 0}\n                  aria-current={key === 0 ? \"step\" : undefined}\n                  titles\n                >\n                  <ButtonIcon\n                    aria-describedby={`wizard-step-title-${key}`}\n                    ariaLabel={step.label}\n                    iconType=\"light-tiny\"\n                  >\n                    {step.label}\n                  </ButtonIcon>\n                  <WizardStepTitle\n                    id={`wizard-step-title-${key}`}\n                  >\n                    {step.title}\n                  </WizardStepTitle>\n                </WizardStep>\n              ))\n            }\n          </Wizard>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default WizardExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),J=function(e){var t=Object.assign({},e),a=Object(r.useState)({}),i=Object(n.a)(a,2),s=i[0],C=i[1];return Object(r.useEffect)((function(){try{C(U.parse($))}catch(e){console.log("\n        React-docgen could not parse props for Wizard\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),o.a.createElement(h.a,{siblingOfStickyFooter:!0},o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(N.a,{tag:"h1"},"Wizard"))),o.a.createElement(g.a,null,o.a.createElement(m.a,{role:"navigation","aria-label":"Secondary"},o.a.createElement(O.a,{role:"none"},o.a.createElement(y.a,{role:void 0,tag:o.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/wizard"),activeClassName:"vds-state--selected"})},o.a.createElement(v.a,{name:"log",resolution:"low"}),"Wizard Example"),o.a.createElement(y.a,{role:void 0,tag:o.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/wizard/code"),activeClassName:"vds-state--selected"})},o.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),o.a.createElement(y.a,{role:void 0,tag:o.a.createElement(u.c,{exact:!0,to:"".concat("/vds-react","/components/wizard/html"),activeClassName:"vds-state--selected"})},o.a.createElement(v.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:c()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/wizard"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/wizard")})},o.a.createElement(Y,t)),o.a.createElement("div",{className:c()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/wizard/code"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/wizard/code")})},o.a.createElement(d.a,Object.assign({},d.b,{theme:p.a,code:G,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,i=e.getTokenProps;return(o.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return o.a.createElement("div",Object.assign({},r({key:t,line:e}),{key:t}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return o.a.createElement("span",Object.assign({},i({key:t,token:e}),{key:t}))})))}))))}))),o.a.createElement("div",{className:c()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/wizard/html"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/wizard/html")})},o.a.createElement(d.a,Object.assign({},d.b,{theme:p.a,code:V.format(l.a.renderToStaticMarkup(o.a.createElement(Y,t)),{css:"ignore",parser:"html",plugins:D,printWidth:120}),language:"html"}),(function(e){var t=e.className,a=e.style,n=e.tokens,r=e.getLineProps,i=e.getTokenProps;return(o.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return o.a.createElement("div",Object.assign({},r({key:t,line:e}),{key:t}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return o.a.createElement("span",Object.assign({},i({key:t,token:e}),{key:t}))})))}))))}))))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(f.a,{className:c()(["components"]),dividerLines:!0,size:"compact"},o.a.createElement(b.a,{tag:"caption"},"Props"),o.a.createElement(k.a,null,o.a.createElement(j.a,{className:"vds-tr"},o.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),o.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),o.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),o.a.createElement(T.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),o.a.createElement(E.a,null,s.props&&Object.entries(s.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return o.a.createElement(j.a,{className:"vds-tr",key:t},o.a.createElement(T.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?o.a.createElement("strong",null," - required"):""),o.a.createElement(w.a,{className:"vds-td"},o.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?o.a.createElement("small",{style:{color:"#1a1f71"}},o.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),o.a.createElement(w.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),o.a.createElement(w.a,{className:"vds-td"},e[1].description))})))))))};J.displayName="WizardExample";t.default=J},535:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(3),l=a(2),s=a.n(l),c=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,i=e.tag,l=Object(n.a)(e,["children","className","tag"]);return(o.a.createElement(i,Object.assign({className:s()("vds-screen-reader",r),ref:t},l),a))}));c.propTypes={children:i.node,className:i.string,tag:i.elementType},c.defaultProps={tag:"span"},c.displayName="ScreenReader",t.a=c},536:function(e,t,a){"use strict";var n=a(4),r=a(5),o=a(0),i=a.n(o),l=a(3),s=a(2),c=a.n(s),d=Object(o.forwardRef)((function(e,t){var a,o=e.children,l=e.className,s=e.customizableColumns,d=e.dividerLines,p=e.keyValuePairs,u=e.reveal,m=e.revealFirstColumn,f=e.revealLastColumn,v=e.rowSelection,h=e.size,g=e.stickyHeader,b=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return i.a.createElement("table",Object.assign({},b,{className:c()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(s)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--").concat(h),Boolean(h)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--").concat(v),Boolean(v)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(g)),a),l),ref:t}),o)}));d.propTypes={children:l.node,className:l.string,columns:Object(l.arrayOf)(Object(l.shape)({})),customizableColumns:l.bool,data:Object(l.arrayOf)(Object(l.shape)({})),dividerLines:l.bool,keyValuePairs:l.bool,reveal:l.bool,revealFirstColumn:l.bool,revealLastColumn:l.bool,rowSelection:Object(l.oneOf)(["multi-select","single-select"]),size:Object(l.oneOf)(["compact"]),stickyHeader:l.bool},d.displayName="DataTable",t.a=d},537:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(3),l=a(2),s=a.n(l),c=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,i=Object(n.a)(e,["children","className"]);return(o.a.createElement("tbody",Object.assign({className:s()("vds-tbody",r),ref:t},i),a))}));c.propTypes={children:i.node,className:i.string},c.displayName="Tbody",t.a=c},538:function(e,t,a){"use strict";var n=a(4),r=a(5),o=a(0),i=a.n(o),l=a(3),s=a(2),c=a.n(s),d=Object(o.forwardRef)((function(e,t){var a=e.children,o=e.className,l=e.textAlign,s=Object(r.a)(e,["children","className","textAlign"]);return(i.a.createElement("td",Object.assign({className:c()("vds-td",Object(n.a)({},"vds-text--".concat(l),Boolean(l)),o),ref:t},s),a))}));d.propTypes={children:l.node,className:l.string,textAlign:Object(l.oneOf)(["center","left","right"])},d.displayName="Td",t.a=d},539:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(3),l=a(2),s=a.n(l),c=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,i=Object(n.a)(e,["children","className"]);return(o.a.createElement("th",Object.assign({className:s()("vds-th",r),ref:t},i),a))}));c.propTypes={children:i.node,className:i.string},c.displayName="Th",t.a=c},540:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(3),l=a(2),s=a.n(l),c=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,i=Object(n.a)(e,["children","className"]);return(o.a.createElement("thead",Object.assign({className:s()("vds-thead",r),ref:t},i),a))}));c.propTypes={children:i.node,className:i.string},c.displayName="Thead",t.a=c},541:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(3),l=a(2),s=a.n(l),c=Object(r.forwardRef)((function(e,t){var a=e.children,r=e.className,i=Object(n.a)(e,["children","className"]);return(o.a.createElement("tr",Object.assign({className:s()("vds-tr",r),ref:t},i),a))}));c.propTypes={children:i.node,className:i.string},c.displayName="Tr",t.a=c},544:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(2),l=a.n(i),s=function(e){var t=e.children,a=e.className,r=e.tag,i=Object(n.a)(e,["children","className","tag"]);return(o.a.createElement(r,Object.assign({className:l()("vds-btn-label",a)},i),t))};s.displayName="ButtonLabel",s.defaultProps={tag:"span"},t.a=s},550:function(e,t){},551:function(e,t){},557:function(e,t,a){"use strict";var n=a(4),r=a(5),o=a(0),i=a.n(o),l=a(3),s=a(2),c=a.n(s),d=a(544),p=Object(o.forwardRef)((function(e,t){var a,o=e.active,l=e.children,s=e.className,p=e.colorScheme,u=e.disabled,m=e.flippable,f=e.isFullWidth,v=e.role,h=e.tabIndex,g=e.tag,b=e.type,y=Object(r.a)(e,["active","children","className","colorScheme","disabled","flippable","isFullWidth","role","tabIndex","tag","type"]);return i.a.createElement(g,Object.assign({className:c()((a={},Object(n.a)(a,"".concat("vds-btn-text"),!1===Boolean(p)),Object(n.a)(a,"".concat("vds-state","--active"),Boolean(o)),Object(n.a)(a,"".concat("vds-btn-text","--").concat(p),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--flippable"),Boolean(m)),Object(n.a)(a,"".concat("vds-btn-text","--fullwidth"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--disabled"),Boolean(u)),a),s),disabled:u,role:"button"===g?void 0:v,tabIndex:["span","div"].includes(g)?h:void 0,type:"button"===g?b:void 0,ref:t},y),i.a.createElement(d.a,null,l))}));p.propTypes={active:l.bool,children:l.node,className:l.string,colorScheme:Object(l.oneOf)(["primary","secondary","tertiary"]),disabled:l.bool,flippable:l.bool,isFullWidth:l.bool,role:l.string,tabIndex:Object(l.oneOfType)([l.number,l.string]),tag:Object(l.oneOf)(["a","button","div","span"]),type:l.string},p.defaultProps={role:"button",tabIndex:0,tag:"button",type:"button"},p.displayName="ButtonText",t.a=p},558:function(e,t,a){"use strict";var n=a(4),r=a(5),o=a(0),i=a.n(o),l=a(3),s=a(2),c=a.n(s),d=a(544),p=Object(o.forwardRef)((function(e,t){var a,o=e.active,l=e.ariaLabel,s=e.children,p=e.className,u=e.disabled,m=e.iconType,f=e.type,v=Object(r.a)(e,["active","ariaLabel","children","className","disabled","iconType","type"]);return i.a.createElement("button",Object.assign({"aria-label":l,className:c()("vds-btn-icon",(a={},Object(n.a)(a,"".concat("vds-btn-icon","--").concat(m),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--active"),Boolean(o)),a),p),disabled:u,ref:t,type:f},v),i.a.createElement(d.a,null,s))}));p.propTypes={active:l.bool,ariaLabel:l.string,children:l.node,className:l.string,disabled:l.bool,iconType:Object(l.oneOf)(["dark","dark-outline","dark-tiny","light","light-fill","light-outline","light-tiny"]),type:l.string},p.defaultProps={type:"button"},p.displayName="ButtonIcon",t.a=p},695:function(e,t,a){"use strict";var n=a(13),r=a(5),o=a(0),i=a.n(o),l=a(2),s=a.n(l),c=a(146),d=a.n(c),p=a(63),u=a(22),m=a(48),f=a(147),v=a(1684),h=a(965),g=a(1685),b=i.a.createContext({}),y=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return t.forEach((function(e){return e&&e.apply(void 0,a)}))}},O=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},E=function(e,t){if("function"===typeof e)return e(t);null!=e&&(e.current=t)},w={childList:!0,subtree:!0},T=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).observer=void 0,t.tooltipRef=void 0,t.handleOutsideClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var a=t.context.parentOutsideClickHandler,n=t.props,r=n.hideTooltip;(0,n.clearScheduled)(),r(),a&&a(e)}},t.handleOutsideRightClick=function(e){if(t.tooltipRef&&!t.tooltipRef.contains(e.target)){var a=t.context.parentOutsideRightClickHandler,n=t.props,r=n.hideTooltip;(0,n.clearScheduled)(),r(),a&&a(e)}},t.addOutsideClickHandler=function(){document.body.addEventListener("touchend",t.handleOutsideClick),document.body.addEventListener("click",t.handleOutsideClick)},t.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",t.handleOutsideClick),document.body.removeEventListener("click",t.handleOutsideClick)},t.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",t.handleOutsideRightClick)},t.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",t.handleOutsideRightClick)},t.getTooltipRef=function(e){t.tooltipRef=e,E(t.props.innerRef,e)},t.getArrowProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,{style:Object(u.a)({},e.style,{},t.props.arrowProps.style)})},t.getTooltipProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,{},t.isTriggeredBy("hover")&&{onMouseEnter:y(t.props.clearScheduled,e.onMouseEnter),onMouseLeave:y(t.props.hideTooltip,e.onMouseLeave)},{style:Object(u.a)({},e.style,{},t.props.style)})},t.contextValue={isParentNoneTriggered:"none"===t.props.trigger,addParentOutsideClickHandler:t.addOutsideClickHandler,addParentOutsideRightClickHandler:t.addOutsideRightClickHandler,parentOutsideClickHandler:t.handleOutsideClick,parentOutsideRightClickHandler:t.handleOutsideRightClick,removeParentOutsideClickHandler:t.removeOutsideClickHandler,removeParentOutsideRightClickHandler:t.removeOutsideRightClickHandler},t}Object(m.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;if((this.observer=new MutationObserver((function(){e.props.scheduleUpdate()}))).observe(this.tooltipRef,w),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var t=this.context,a=t.removeParentOutsideClickHandler,n=t.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),n&&n()}},a.componentDidUpdate=function(){this.props.closeOnOutOfBoundaries&&this.props.outOfBoundaries&&this.props.hideTooltip()},a.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,t=e.isParentNoneTriggered,a=e.addParentOutsideClickHandler,n=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!t&&a&&a(),!t&&n&&n()}},a.render=function(){var e=this.props,t=e.arrowProps,a=e.placement,n=e.tooltip;return i.a.createElement(b.Provider,{value:this.contextValue},n({arrowRef:t.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:a,tooltipRef:this.getTooltipRef}))},a.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(o.Component);T.contextType=b;var k={preventOverflow:{boundariesElement:"viewport"}},j=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={tooltipShown:t.props.defaultTooltipShown},t.hideTimeout=void 0,t.showTimeout=void 0,t.popperOffset=void 0,t.setTooltipState=function(e){var a=function(){return t.props.onVisibilityChange(e.tooltipShown)};t.isControlled()?a():t.setState(e,a)},t.clearScheduled=function(){clearTimeout(t.hideTimeout),clearTimeout(t.showTimeout)},t.showTooltip=function(e){var a=e.pageX,n=e.pageY;t.clearScheduled();var r={tooltipShown:!0};t.props.followCursor&&(r=Object(u.a)({},r,{pageX:a,pageY:n})),t.showTimeout=window.setTimeout((function(){return t.setTooltipState(r)}),t.props.delayShow)},t.hideTooltip=function(){t.clearScheduled(),t.hideTimeout=window.setTimeout((function(){return t.setTooltipState({tooltipShown:!1})}),t.props.delayHide)},t.toggleTooltip=function(e){var a=e.pageX,n=e.pageY,r=t.getState()?"hideTooltip":"showTooltip";t[r]({pageX:a,pageY:n})},t.clickToggle=function(e){e.preventDefault();var a=e.pageX,n=e.pageY,r=t.props.followCursor?"showTooltip":"toggleTooltip";t[r]({pageX:a,pageY:n})},t.contextMenuToggle=function(e){e.preventDefault();var a=e.pageX,n=e.pageY,r=t.props.followCursor?"showTooltip":"toggleTooltip";t[r]({pageX:a,pageY:n})},t.getTriggerProps=function(e){return void 0===e&&(e={}),Object(u.a)({},e,{},t.isTriggeredBy("click")&&{onClick:y(t.clickToggle,e.onClick),onTouchEnd:y(t.clickToggle,e.onTouchEnd)},{},t.isTriggeredBy("right-click")&&{onContextMenu:y(t.contextMenuToggle,e.onContextMenu)},{},t.isTriggeredBy("hover")&&Object(u.a)({onMouseEnter:y(t.showTooltip,e.onMouseEnter),onMouseLeave:y(t.hideTooltip,e.onMouseLeave)},t.props.followCursor&&{onMouseMove:y(t.showTooltip,e.onMouseMove)}),{},t.isTriggeredBy("focus")&&{onFocus:y(t.showTooltip,e.onFocus),onBlur:y(t.hideTooltip,e.onBlur)})},t}Object(m.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.clearScheduled()},a.render=function(){var e=this,t=this.props,a=t.children,n=t.tooltip,r=t.placement,o=t.trigger,l=t.getTriggerRef,s=t.modifiers,c=t.closeOnOutOfBoundaries,d=t.usePortal,m=t.portalContainer,b=t.followCursor,y=t.getTooltipRef,O=Object(p.a)(t,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnOutOfBoundaries","usePortal","portalContainer","followCursor","getTooltipRef"]),E=i.a.createElement(v.a,Object(u.a)({innerRef:y,placement:r,modifiers:Object(u.a)({},k,{},b&&{followCursorModifier:{enabled:!0,fn:function(t){return e.popperOffset=t.offsets.popper,t},order:1e3}},{},s)},O),(function(t){var a=t.ref,r=t.style,l=t.placement,s=t.arrowProps,d=t.outOfBoundaries,p=t.scheduleUpdate;if(b&&e.popperOffset){var m=e.state,f=m.pageX,v=m.pageY,h=e.popperOffset,g=h.width,y=h.height,O=f+g>window.scrollX+document.body.offsetWidth?f-g:f,E=v+y>window.scrollY+document.body.offsetHeight?v-y:v;r.transform="translate3d("+O+"px, "+E+"px, 0"}return i.a.createElement(T,Object(u.a)({arrowProps:s,closeOnOutOfBoundaries:c,outOfBoundaries:d,placement:l,scheduleUpdate:p,style:r,tooltip:n,trigger:o},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:a}))}));return i.a.createElement(h.c,null,i.a.createElement(g.a,{innerRef:l},(function(t){var n=t.ref;return a({getTriggerProps:e.getTriggerProps,triggerRef:n})})),this.getState()&&(d?Object(f.createPortal)(E,m):E))},a.isControlled=function(){return void 0!==this.props.tooltipShown},a.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},a.isTriggeredBy=function(e){var t=this.props.trigger;return t===e||Array.isArray(t)&&t.includes(e)},t}(o.Component);j.defaultProps={closeOnOutOfBoundaries:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:function(){},placement:"right",portalContainer:O()?document.body:null,trigger:"hover",usePortal:O()};var N=j,C=function(e){var t=e.className,a=e.tooltip,l=e.children,c=e.id,p=void 0===c?d.a.generate():c,u=e.trigger,m=Object(r.a)(e,["className","tooltip","children","id","trigger"]),f=Object(o.useRef)(p).current;return i.a.createElement(N,Object.assign({trigger:u},m,{modifiers:{offset:{enabled:!0,offset:"0, 4px"}},tooltip:function(e){var n=e.getTooltipProps,r=e.tooltipRef;return(i.a.createElement("div",Object.assign({hidden:!0},n({className:s()("vds-tooltip","".concat("vds-state","--show"),t),ref:r})),i.a.createElement("div",{className:"".concat("vds-tooltip","-content")},i.a.createElement("span",{className:"".concat("vds-tooltip","-text")},a),i.a.createElement("span",{className:"".concat("vds-tooltip","-pointer")}))))}}),(function(e){var t=e.getTriggerProps,r=e.triggerRef;return(i.a.createElement(o.Fragment,null,Object(o.cloneElement)(l,Object(n.a)({},t({"aria-controls":f,"aria-describedby":f,ref:r}))),i.a.createElement("span",{"aria-hidden":"true",id:f,style:{display:"none"}},a)))}))};C.displayName="Tooltip";t.a=C}}]);
//# sourceMappingURL=29.0ded0514.chunk.js.map