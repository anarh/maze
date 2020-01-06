(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[33],{250:function(e,t,n){"use strict";n.r(t);var a=n(85),o=n(518),l=n(0),c=n.n(l),s=n(517),r=n.n(s),u=n(2),i=n.n(u),m=n(523),g=n(522),d=n(39),p=n(8),h=n(508),f=n(18),b=n(24),v=n(17),E=n(509),y=n(62),T=n(134),O=n(510),j=n(511),N=n(512),B=n(513),w=n(514),k=n(7),S=n(14),C=n(136),x=n(5),R=function(e){var t=e.children,n=e.className,a=Object(x.a)(e,["children","className"]);return c.a.createElement("fieldset",Object.assign({className:i()("vds-toggle-button-set",n)},a),t)};R.displayName="ToggleButtonSet";var L=R,F=function(e){var t=e.children,n=e.className,a=Object(x.a)(e,["children","className"]);return c.a.createElement("legend",Object.assign({className:i()("vds-toggle-button-set-legend",n)},a),t)};F.displayName="ToggleButtonSetLegend";var P=F,I=n(528),V=n.n(I),A=function(e){var t=e.children,n=e.className,o=e.id,s=void 0===o?V.a.generate():o,r=e.onChange,u=e.selectedIndex,m=Object(x.a)(e,["children","className","id","onChange","selectedIndex"]),g=Object(l.useState)(u),d=Object(a.a)(g,2),p=d[0],h=d[1],f=Object(l.useRef)(s).current;Object(l.useEffect)((function(){h(u)}),[u]);var b=function(e,t){h(t),"function"===typeof r&&r(e,t)};return c.a.createElement("ul",Object.assign({className:i()("vds-toggle-button-list",n),id:f},m),l.Children.map(t,(function(e,t){return Object(l.cloneElement)(e,{checked:t===p,id:"".concat(f,"-").concat(t),onChange:function(e){return b(e,t)}})})))};A.displayName="ToggleButtonList";var M=A,q=n(4),z=function(e){var t,n=e.checked,o=e.className,s=e.focused,r=e.id,u=e.label,m=e.name,g=e.onBlur,d=e.onClick,p=e.onChange,h=e.onFocus,f=e.value,b=Object(x.a)(e,["checked","className","focused","id","label","name","onBlur","onClick","onChange","onFocus","value"]),v=Object(l.useState)(s),E=Object(a.a)(v,2),y=E[0],T=E[1],O=Object(l.useRef)(r).current;Object(l.useEffect)((function(){T(s)}),[s]);return c.a.createElement("li",{className:i()("".concat("vds-toggle-button","-item"),o)},c.a.createElement("input",Object.assign({checked:n,className:"vds-toggle-button",id:O,name:m,onBlur:function(e){T(!1),"function"===typeof g&&g(e)},onChange:p,onClick:d,onFocus:function(e){T(!0),"function"===typeof h&&h(e)},type:"radio",value:f},b)),c.a.createElement("label",{onClick:function(e){return e.stopPropagation()},className:i()("".concat("vds-toggle-button","-label"),(t={},Object(q.a)(t,"".concat("vds-state","--selected"),Boolean(n)),Object(q.a)(t,"".concat("vds-state","--focus"),Boolean(y)),t)),htmlFor:O},u))};z.displayName="ToggleButton";var _=z,D=function(e){var t=e.children,n=e.className,a=Object(x.a)(e,["children","className"]);return c.a.createElement("ul",Object.assign({className:i()("vds-toggle-button-list",n)},a),t)};D.displayName="ToggleButtonListStateless";var $=D,X=function(){var e=Object(l.useState)({items:[{checked:!1,label:"One",value:"one"},{checked:!0,label:"Two",value:"Two"},{checked:!1,label:"Three",value:"three"},{checked:!1,label:"Four",value:"four"}]}),t=Object(a.a)(e,2),n=t[0],o=t[1],s=function(e){return o({items:Object(C.a)(n.items.map((function(t){return Object(S.a)({},t,{checked:t.value===e.target.value})})))})};return c.a.createElement(b.a,null,c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(k.a,{tag:"h2"},"Toggle Button"))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(L,null,c.a.createElement(P,null,"Select a button"),c.a.createElement(M,null,c.a.createElement(_,{name:"toggle-button-test-1",id:"toggle-button-test-11",label:"One",value:"test"}),c.a.createElement(_,{name:"toggle-button-test-1",id:"toggle-button-test-22",label:"Two",value:"test2"}),c.a.createElement(_,{name:"toggle-button-test-1",id:"toggle-button-test-33",label:"Three",value:"test3"}))))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(k.a,{tag:"h2"},"Toggle Button Pre-Selected"))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(L,null,c.a.createElement(P,null,"Select a button"),c.a.createElement(M,{selectedIndex:2},c.a.createElement(_,{name:"toggle-button-test-2",id:"toggle-button-test-14",label:"One",value:"test"}),c.a.createElement(_,{name:"toggle-button-test-2",id:"toggle-button-test-25",label:"Two",value:"test2"}),c.a.createElement(_,{name:"toggle-button-test-2",id:"toggle-button-test-36",label:"Three",value:"test3"}))))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(k.a,{tag:"h2"},"Toggle Button Stateless (BYO-State)"),c.a.createElement(k.a,null,'See "VIEW CODE" below'),c.a.createElement(k.a,null,"Use this approach to create your own wrapper to match the shape of your data and how and where the data should be manipulated"))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(L,null,c.a.createElement(P,null,"Select a button"),c.a.createElement($,null,n.items.map((function(e,t){return c.a.createElement(_,{key:t,checked:e.checked,id:"toggle-button-".concat(t),label:e.label,name:"toggle-stateless",onChange:s,value:e.value})})))))))},H=n(519),G=[n(520)],J=n(521),U="import React, { useEffect, useRef, useState } from 'react';\nimport { bool, func, number, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\n\nconst CSS_PREFIX = 'vds-toggle-button';\nconst CSS_STATE = 'vds-state';\n\nconst ToggleButton = ({\n  checked,\n  className,\n  focused,\n  id,\n  label,\n  name,\n  onBlur,\n  onClick,\n  onChange,\n  onFocus,\n  value,\n  ...remainingProps\n}) => {\n  const [focus, setFocus] = useState(focused);\n  const uniqueId = useRef(id);\n  const uid = uniqueId.current;\n\n  useEffect(() => {\n    setFocus(focused);\n  }, [focused]);\n\n  const handleFocus = event => {\n    setFocus(true);\n\n    if (typeof onFocus === 'function') {\n      onFocus(event);\n    }\n  };\n\n  const handleBlur = event => {\n    setFocus(false);\n\n    if (typeof onBlur === 'function') {\n      onBlur(event);\n    }\n  };\n  return (\n    <li\n      className={classnames(`${CSS_PREFIX}-item`, className)}\n    >\n      <input\n        checked={checked}\n        className={CSS_PREFIX}\n        id={uid}\n        name={name}\n        onBlur={handleBlur}\n        onChange={onChange}\n        onClick={onClick}\n        onFocus={handleFocus}\n        type=\"radio\"\n        value={value}\n        {...remainingProps}\n      />\n      <label\n        onClick={e => e.stopPropagation()}\n        className={classnames(`${CSS_PREFIX}-label`, {\n          [`${CSS_STATE}--selected`]: Boolean(checked),\n          [`${CSS_STATE}--focus`]: Boolean(focus)\n        })}\n        htmlFor={uid}\n      >\n        {label}\n      </label>\n    </li>\n  );\n};\n\nToggleButton.propTypes = {\n  /**\n   * A Boolean attribute which, if present, indicates that this\n   * radio button is the currently selected one in the group\n   */\n  checked: bool,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * If true, will put component in a \"focused\" state.\n   */\n  focused: bool,\n\n  /**\n   * Id for toggle button.\n   */\n  id: oneOfType([number, string]),\n\n  /**\n   * Label for toggle button.\n   */\n  label: string,\n\n  /**\n   * Name for toggle button.\n   */\n  name: string.isRequired,\n\n  /**\n   * Callback fired when the input element loses focus.\n   */\n  onBlur: func,\n\n  /**\n   * Callback fired when the input value changes.\n   */\n  onChange: func,\n\n  /**\n   * Callback fired when the input is clicked.\n   */\n  onClick: func,\n\n  /**\n   * Callback fired when the input element is focused on.\n   */\n  onFocus: func,\n\n  /**\n   * The value attribute serves a special purpose for inputs of type radio:\n   * when a form is submitted, only radio buttons which are currently checked are\n   * submitted to the server, and the reported value is the value of\n   * the value attribute. If the value is not otherwise specified,\n   * it is the string \"on\" by default.\n   */\n  value: string.isRequired\n};\n\nToggleButton.displayName = 'ToggleButton';\n\nexport default ToggleButton;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),W='import React, { useState } from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\nimport ToggleButtonSet from \'../../toggle-button-set\';\nimport ToggleButtonSetLegend from \'../../toggle-button-set-legend\';\nimport ToggleButtonList from \'../../toggle-button-list\';\nimport ToggleButton from \'../../toggle-button\';\nimport ToggleButtonListStateless from \'../../toggle-button-list-stateless\';\n\nconst ToggleButtonExample = () => {\n  const [state, setState] = useState({\n    items: [\n      {\n        checked: false,\n        label: \'One\',\n        value: \'one\'\n      },\n      {\n        checked: true,\n        label: \'Two\',\n        value: \'Two\'\n      },\n      {\n        checked: false,\n        label: \'Three\',\n        value: \'three\'\n      },\n      {\n        checked: false,\n        label: \'Four\',\n        value: \'four\'\n      }\n    ]\n  });\n\n  const handleChange = e => setState({\n    items: [...state.items.map(item => ({ ...item, checked: item.value === e.target.value }))]\n  });\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag="h2">Toggle Button</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ToggleButtonSet>\n            <ToggleButtonSetLegend>Select a button</ToggleButtonSetLegend>\n            <ToggleButtonList>\n              <ToggleButton\n                name="toggle-button-test-1"\n                id="toggle-button-test-11"\n                label="One"\n                value="test"\n              />\n              <ToggleButton\n                name="toggle-button-test-1"\n                id="toggle-button-test-22"\n                label="Two"\n                value="test2"\n              />\n              <ToggleButton\n                name="toggle-button-test-1"\n                id="toggle-button-test-33"\n                label="Three"\n                value="test3"\n              />\n            </ToggleButtonList>\n          </ToggleButtonSet>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Toggle Button Pre-Selected</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ToggleButtonSet>\n            <ToggleButtonSetLegend>Select a button</ToggleButtonSetLegend>\n            <ToggleButtonList selectedIndex={2}>\n              <ToggleButton\n                name="toggle-button-test-2"\n                id="toggle-button-test-14"\n                label="One"\n                value="test"\n              />\n              <ToggleButton\n                name="toggle-button-test-2"\n                id="toggle-button-test-25"\n                label="Two"\n                value="test2"\n              />\n              <ToggleButton\n                name="toggle-button-test-2"\n                id="toggle-button-test-36"\n                label="Three"\n                value="test3"\n              />\n            </ToggleButtonList>\n          </ToggleButtonSet>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Toggle Button Stateless (BYO-State)</Typography>\n          <Typography>See "VIEW CODE" below</Typography>\n          <Typography>Use this approach to create your own wrapper to match the shape of your data and how and where the data should be manipulated</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <ToggleButtonSet>\n            <ToggleButtonSetLegend>Select a button</ToggleButtonSetLegend>\n            <ToggleButtonListStateless>\n              {\n                state.items.map((item, k) => (\n                  <ToggleButton\n                    key={k}\n                    checked={item.checked}\n                    id={`toggle-button-${k}`}\n                    label={item.label}\n                    name="toggle-stateless"\n                    onChange={handleChange}\n                    value={item.value}\n                  />\n                ))\n              }\n            </ToggleButtonListStateless>\n          </ToggleButtonSet>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default ToggleButtonExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),Y=function(e){var t=Object(o.a)({},e),n=Object(l.useState)({}),s=Object(a.a)(n,2),u=s[0],S=s[1];return Object(l.useEffect)((function(){try{S(J.parse(U))}catch(e){console.log("\n        React-docgen could not parse props for ToggleButton\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),c.a.createElement(b.a,{siblingOfStickyFooter:!0},c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(k.a,{tag:"h1"},"Toggle Button"))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(T.a,null,c.a.createElement(y.a,{tag:c.a.createElement(d.c,{exact:!0,to:"".concat("/projects/vds-react-1060","/components/toggle-button"),activeClassName:"vds-state--selected"})},c.a.createElement(f.a,{name:"log",resolution:"low"}),"Toggle Button Example"),c.a.createElement(y.a,{tag:c.a.createElement(d.c,{exact:!0,to:"".concat("/projects/vds-react-1060","/components/toggle-button/code"),activeClassName:"vds-state--selected"})},c.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),c.a.createElement(y.a,{tag:c.a.createElement(d.c,{exact:!0,to:"".concat("/projects/vds-react-1060","/components/toggle-button/html"),activeClassName:"vds-state--selected"})},c.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/projects/vds-react-1060","/components/toggle-button"),"vds-state--show":t.match.path==="".concat("/projects/vds-react-1060","/components/toggle-button")})},c.a.createElement(X,t)),c.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/projects/vds-react-1060","/components/toggle-button/code"),"vds-state--show":t.match.path==="".concat("/projects/vds-react-1060","/components/toggle-button/code")})},c.a.createElement(m.a,Object.assign({},m.b,{theme:g.a,code:W,language:"jsx"}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return c.a.createElement("pre",{className:t,style:n},a.map((function(e,t){return c.a.createElement("div",o({key:t,line:e}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return c.a.createElement("span",l({key:t,token:e}))})))})))}))),c.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/projects/vds-react-1060","/components/toggle-button/html"),"vds-state--show":t.match.path==="".concat("/projects/vds-react-1060","/components/toggle-button/html")})},c.a.createElement(m.a,Object.assign({},m.b,{theme:g.a,code:H.format(r.a.renderToStaticMarkup(c.a.createElement(X,t)),{css:"ignore",parser:"html",plugins:G,printWidth:120}),language:"html"}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return c.a.createElement("pre",{className:t,style:n},a.map((function(e,t){return c.a.createElement("div",o({key:t,line:e}),c.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return c.a.createElement("span",l({key:t,token:e}))})))})))}))))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(h.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},c.a.createElement(E.a,{tag:"caption"},"Props"),c.a.createElement(B.a,null,c.a.createElement(w.a,{className:"vds-tr"},c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),c.a.createElement(N.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),c.a.createElement(O.a,null,u.props&&Object.entries(u.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return c.a.createElement(w.a,{className:"vds-tr",key:t,tabIndex:"0"},c.a.createElement(j.a,{className:"vds-td"},e[0]," ",e[1].required?c.a.createElement("sup",{style:{color:"red"}}," required"):""),c.a.createElement(j.a,{className:"vds-td"},c.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?c.a.createElement("small",{style:{color:"#1a1f71"}},c.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),c.a.createElement(j.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),c.a.createElement(j.a,{className:"vds-td"},e[1].description))})))))))};Y.displayName="ToggleButtonExample";t.default=Y},508:function(e,t,n){"use strict";var a=n(4),o=n(5),l=n(0),c=n.n(l),s=n(3),r=n(2),u=n.n(r),i=Object(l.forwardRef)((function(e,t){var n,l=e.children,s=e.className,r=e.customizableColumns,i=e.dividerLines,m=e.keyValuePairs,g=e.reveal,d=e.revealFirstColumn,p=e.revealLastColumn,h=e.rowSelection,f=e.size,b=e.stickyHeader,v=Object(o.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return c.a.createElement("table",Object.assign({},v,{className:u()("vds-data-table",(n={},Object(a.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(r)),Object(a.a)(n,"".concat("vds-state","--divider-lines"),Boolean(i)),Object(a.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(m)),Object(a.a)(n,"".concat("vds-state","--").concat(f),Boolean(f)),Object(a.a)(n,"".concat("vds-state","--reveal"),Boolean(g)),Object(a.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(d)),Object(a.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(p)),Object(a.a)(n,"".concat("vds-state","--").concat(h),Boolean(h)),Object(a.a)(n,"".concat("vds-state","--sticky-header"),Boolean(b)),n),s),ref:t}),l)}));i.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},i.displayName="DataTable",t.a=i},509:function(e,t,n){"use strict";var a=n(5),o=n(0),l=n.n(o),c=n(3),s=n(2),r=n.n(s),u=Object(o.forwardRef)((function(e,t){var n=e.children,o=e.className,c=e.tag,s=Object(a.a)(e,["children","className","tag"]);return l.a.createElement(c,Object.assign({className:r()("vds-sr",o),ref:t},s),n)}));u.propTypes={children:c.node,className:c.string,tag:c.elementType},u.defaultProps={tag:"span"},u.displayName="Sr",t.a=u},510:function(e,t,n){"use strict";var a=n(5),o=n(0),l=n.n(o),c=n(3),s=n(2),r=n.n(s),u=Object(o.forwardRef)((function(e,t){var n=e.children,o=e.className,c=Object(a.a)(e,["children","className"]);return l.a.createElement("tbody",Object.assign({className:r()("vds-tbody",o),ref:t},c),n)}));u.propTypes={children:c.node,className:c.string},u.displayName="Tbody",t.a=u},511:function(e,t,n){"use strict";var a=n(4),o=n(5),l=n(0),c=n.n(l),s=n(3),r=n(2),u=n.n(r),i=Object(l.forwardRef)((function(e,t){var n=e.children,l=e.className,s=e.textAlign,r=Object(o.a)(e,["children","className","textAlign"]);return c.a.createElement("td",Object.assign({className:u()("vds-td",Object(a.a)({},"vds-text--".concat(s),Boolean(s)),l),ref:t},r),n)}));i.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},i.displayName="Td",t.a=i},512:function(e,t,n){"use strict";var a=n(5),o=n(0),l=n.n(o),c=n(3),s=n(2),r=n.n(s),u=Object(o.forwardRef)((function(e,t){var n=e.children,o=e.className,c=Object(a.a)(e,["children","className"]);return l.a.createElement("th",Object.assign({className:r()("vds-th",o),ref:t},c),n)}));u.propTypes={children:c.node,className:c.string},u.displayName="Th",t.a=u},513:function(e,t,n){"use strict";var a=n(5),o=n(0),l=n.n(o),c=n(3),s=n(2),r=n.n(s),u=Object(o.forwardRef)((function(e,t){var n=e.children,o=e.className,c=Object(a.a)(e,["children","className"]);return l.a.createElement("thead",Object.assign({className:r()("vds-thead",o),ref:t},c),n)}));u.propTypes={children:c.node,className:c.string},u.displayName="Thead",t.a=u},514:function(e,t,n){"use strict";var a=n(5),o=n(0),l=n.n(o),c=n(3),s=n(2),r=n.n(s),u=Object(o.forwardRef)((function(e,t){var n=e.children,o=e.className,c=Object(a.a)(e,["children","className"]);return l.a.createElement("tr",Object.assign({className:r()("vds-tr",o),ref:t},c),n)}));u.propTypes={children:c.node,className:c.string},u.displayName="Tr",t.a=u},515:function(e,t,n){"use strict";var a,o,l,c=n(531),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function r(){l=!1}function u(e){if(e){if(e!==a){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));a=e,r()}}else a!==s&&(a=s,r())}function i(){return l||(l=function(){a||u(s);for(var e,t=a.split(""),n=[],o=c.nextValue();t.length>0;)o=c.nextValue(),e=Math.floor(o*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return a||s},characters:function(e){return u(e),a},seed:function(e){c.seed(e),o!==e&&(r(),o=e)},lookup:function(e){return i()[e]},shuffled:i}},524:function(e,t){},525:function(e,t){},528:function(e,t,n){"use strict";e.exports=n(530)},530:function(e,t,n){"use strict";var a=n(515),o=n(532),l=n(536),c=n(537)||0;function s(){return o(c)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return a.seed(t),e.exports},e.exports.worker=function(t){return c=t,e.exports},e.exports.characters=function(e){return void 0!==e&&a.characters(e),a.shuffled()},e.exports.isValid=l},531:function(e,t,n){"use strict";var a=1;e.exports={nextValue:function(){return(a=(9301*a+49297)%233280)/233280},seed:function(e){a=e}}},532:function(e,t,n){"use strict";var a,o,l=n(533),c=(n(515),1567752802062),s=7;e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-c));return n===o?a++:(a=0,o=n),t+=l(s),t+=l(e),a>0&&(t+=l(a)),t+=l(n)}},533:function(e,t,n){"use strict";var a=n(515),o=n(534),l=n(535);e.exports=function(e){for(var t,n=0,c="";!t;)c+=l(o,a.get(),1),t=e<Math.pow(16,n+1),n++;return c}},534:function(e,t,n){"use strict";var a,o="object"===typeof window&&(window.crypto||window.msCrypto);a=o&&o.getRandomValues?function(e){return o.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=a},535:function(e,t){e.exports=function(e,t,n){for(var a=(2<<Math.log(t.length-1)/Math.LN2)-1,o=Math.ceil(1.6*a*n/t.length),l="";;)for(var c=o,s=e(c);c--;)if((l+=t[s[c]&a]||"").length===+n)return l}},536:function(e,t,n){"use strict";var a=n(515);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+a.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},537:function(e,t,n){"use strict";e.exports=0}}]);
//# sourceMappingURL=33.24415013.chunk.js.map