(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[60],{273:function(e,t,a){"use strict";a.r(t);var n=a(144),c=a(0),s=a.n(c),o=a(538),l=a.n(o),r=a(2),i=a.n(r),d=a(544),u=a(543),m=a(39),f=a(8),h=a(532),p=a(18),b=a(23),v=a(16),O=a(530),E=a(64),w=a(531),y=a(533),g=a(534),j=a(535),N=a(536),k=a(537),C=a(7),S=a(4),T=a(5),x=a(145),R=a.n(x),F=Object(c.forwardRef)((function(e,t){var a,o=e.className,l=e.checked,r=e.defaultChecked,d=e.defaultFocused,u=e.disabled,m=e.id,f=void 0===m?R.a.generate():m,h=e.label,p=e.name,b=e.onBlur,v=e.onChange,O=e.onFocus,E=e.switchOffText,w=e.switchOnText,y=Object(T.a)(e,["className","checked","defaultChecked","defaultFocused","disabled","id","label","name","onBlur","onChange","onFocus","switchOffText","switchOnText"]),g=Object(c.useState)(l||r),j=Object(n.a)(g,2),N=j[0],k=j[1],C=Object(c.useState)(d),x=Object(n.a)(C,2),F=x[0],B=x[1],P=Object(c.useRef)(f).current;Object(c.useEffect)((function(){k(l)}),[l]);return s.a.createElement("div",{className:i()("vds-switch",(a={},Object(S.a)(a,"".concat("vds-state","--active"),N),Object(S.a)(a,"".concat("vds-state","--disabled"),u),Object(S.a)(a,"".concat("vds-state","--focus"),F),a),o),id:P},s.a.createElement("div",{className:i()("".concat("vds-switch","-value")),"aria-hidden":"true"},N?w:E),s.a.createElement("label",{className:i()("".concat("vds-switch","-label")),htmlFor:"switch-control-".concat(P),id:"switch-control-label-".concat(P)},h),s.a.createElement("input",Object.assign({"aria-checked":N?"true":"false",className:i()("".concat("vds-switch","-input")),defaultChecked:N,id:"switch-control-".concat(P),name:p,onBlur:function(e){B(!1),"function"===typeof b&&b(e)},onChange:function(e){k(e.target.checked),"function"===typeof v&&v(e)},onFocus:function(e){B(!0),"function"===typeof O&&O(e)},ref:t,type:"checkbox"},y)))}));F.defaultProps={switchOffText:"Off",switchOnText:"On"},F.displayName="Switch";var B=F,P=function(){return s.a.createElement(b.a,null,s.a.createElement(v.a,null,s.a.createElement(f.a,null,s.a.createElement(C.a,{tag:"h2"},"Switch"))),s.a.createElement(v.a,null,s.a.createElement(f.a,{lg:3,md:6,sm:4,xs:4},s.a.createElement(B,{id:"switch-id-1",label:"Location",name:"location-input"})),s.a.createElement(f.a,null)))},D=a(540),L=[a(541)],A=a(542),I="import React, { forwardRef, useEffect, useRef, useState } from 'react';\nimport { bool, func, node, number, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport shortid from 'shortid';\n\nconst CSS_PREFIX = 'vds-switch';\nconst CSS_STATE = 'vds-state';\n\nconst Switch = forwardRef(({\n  className,\n  checked,\n  defaultChecked,\n  defaultFocused,\n  disabled,\n  id = shortid.generate(),\n  label,\n  name,\n  onBlur,\n  onChange,\n  onFocus,\n  switchOffText,\n  switchOnText,\n  ...remainingProps\n}, ref) => {\n  const [isChecked, setChecked] = useState(checked || defaultChecked);\n  const [isFocused, setFocused] = useState(defaultFocused);\n  const uniqueId = useRef(id);\n  const uid = uniqueId.current;\n\n  useEffect(() => {\n    setChecked(checked);\n  }, [checked]);\n\n  const handleChange = event => {\n    setChecked(event.target.checked);\n    if (typeof onChange === 'function') {\n      onChange(event);\n    }\n  };\n\n  const handleFocus = event => {\n    setFocused(true);\n    if (typeof onFocus === 'function') {\n      onFocus(event);\n    }\n  };\n\n  const handleBlur = event => {\n    setFocused(false);\n    if (typeof onBlur === 'function') {\n      onBlur(event);\n    }\n  };\n\n  return (\n    <div\n      className={classnames(CSS_PREFIX, {\n        [`${CSS_STATE}--active`]: isChecked,\n        [`${CSS_STATE}--disabled`]: disabled,\n        [`${CSS_STATE}--focus`]: isFocused\n      }, className)}\n      id={uid}\n    >\n      <div className={classnames(`${CSS_PREFIX}-value`)} aria-hidden=\"true\">\n        {isChecked ? switchOnText : switchOffText}\n      </div>\n      <label\n        className={classnames(`${CSS_PREFIX}-label`)}\n        htmlFor={`switch-control-${uid}`}\n        id={`switch-control-label-${uid}`}\n      >\n        {label}\n      </label>\n      <input\n        aria-checked={isChecked ? 'true' : 'false'}\n        className={classnames(`${CSS_PREFIX}-input`)}\n        defaultChecked={isChecked}\n        id={`switch-control-${uid}`}\n        name={name}\n        onBlur={handleBlur}\n        onChange={handleChange}\n        onFocus={handleFocus}\n        ref={ref}\n        type=\"checkbox\"\n        {...remainingProps}\n      />\n    </div>\n  );\n});\n\nSwitch.propTypes = {\n  /**\n   *   Checked\n   */\n  checked: bool,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   * Default checked\n   */\n  defaultChecked: bool,\n\n  /**\n   * Default focused\n   */\n  defaultFocused: bool,\n\n  /**\n  * Disabled\n  */\n  disabled: bool,\n\n  /**\n   * ID\n   */\n  id: oneOfType([number, string]),\n\n  /**\n  * Label\n  */\n  label: node,\n\n  /**\n   * Name\n   */\n  name: string.isRequired,\n\n  /**\n   * Callback fired when the input element loses focus.\n   */\n  onBlur: func,\n\n  /**\n   * Callback fired when the value is changed.\n   */\n  onChange: func,\n\n  /**\n   * Callback fired when the input element is focused on.\n   */\n  onFocus: func,\n\n  /*\n   * Switch off text\n   */\n  switchOffText: node,\n\n  /*\n   * Switch on text\n   */\n  switchOnText: node\n};\n\nSwitch.defaultProps = {\n  switchOffText: 'Off',\n  switchOnText: 'On'\n};\n\nSwitch.displayName = 'Switch';\n\nexport default Switch;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),$="import React from 'react';\nimport Col from '../../col';\nimport Grid from '../../grid';\nimport Row from '../../row';\nimport Typography from '../../typography';\nimport Switch from '../../switch';\n\nconst SwitchExample = () => (\n  <Grid>\n    <Row>\n      <Col>\n        <Typography tag=\"h2\">Switch</Typography>\n      </Col>\n    </Row>\n    <Row>\n      <Col lg={3} md={6} sm={4} xs={4}>\n        <Switch id=\"switch-id-1\" label=\"Location\" name=\"location-input\" />\n      </Col>\n      <Col />\n    </Row>\n  </Grid>\n);\n\nexport default SwitchExample;\n".replace(/'..\/..\//g,"'@visa/vds-react/"),_=function(e){var t=Object.assign({},e),a=Object(c.useState)({}),o=Object(n.a)(a,2),r=o[0],S=o[1];return Object(c.useEffect)((function(){try{S(A.parse(I))}catch(e){console.log("\n        React-docgen could not parse props for Switch\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),s.a.createElement(b.a,{siblingOfStickyFooter:!0},s.a.createElement(v.a,null,s.a.createElement(f.a,null,s.a.createElement(C.a,{tag:"h1"},"Switch"))),s.a.createElement(v.a,null,s.a.createElement(f.a,{role:"navigation","aria-label":"Secondary"},s.a.createElement(w.a,{role:"none"},s.a.createElement(E.a,{role:void 0,tag:s.a.createElement(m.c,{exact:!0,to:"".concat("/vds-react","/components/switch"),activeClassName:"vds-state--selected"})},s.a.createElement(p.a,{name:"log",resolution:"low"}),"Switch Example"),s.a.createElement(E.a,{role:void 0,tag:s.a.createElement(m.c,{exact:!0,to:"".concat("/vds-react","/components/switch/code"),activeClassName:"vds-state--selected"})},s.a.createElement(p.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),s.a.createElement(E.a,{role:void 0,tag:s.a.createElement(m.c,{exact:!0,to:"".concat("/vds-react","/components/switch/html"),activeClassName:"vds-state--selected"})},s.a.createElement(p.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),s.a.createElement(v.a,null,s.a.createElement(f.a,null,s.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/switch"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/switch")})},s.a.createElement(P,t)),s.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/switch/code"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/switch/code")})},s.a.createElement(d.a,Object.assign({},d.b,{theme:u.a,code:$,language:"jsx"}),(function(e){var t=e.className,a=e.style,n=e.tokens,c=e.getLineProps,o=e.getTokenProps;return s.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return s.a.createElement("div",Object.assign({},c({key:t,line:e}),{key:t}),s.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return s.a.createElement("span",Object.assign({},o({key:t,token:e}),{key:t}))})))})))}))),s.a.createElement("div",{className:i()({"vds-state--hidden":t.match.path!=="".concat("/vds-react","/components/switch/html"),"vds-state--show":t.match.path==="".concat("/vds-react","/components/switch/html")})},s.a.createElement(d.a,Object.assign({},d.b,{theme:u.a,code:D.format(l.a.renderToStaticMarkup(s.a.createElement(P,t)),{css:"ignore",parser:"html",plugins:L,printWidth:120}),language:"html"}),(function(e){var t=e.className,a=e.style,n=e.tokens,c=e.getLineProps,o=e.getTokenProps;return s.a.createElement("pre",{className:t,style:a},n.map((function(e,t){return s.a.createElement("div",Object.assign({},c({key:t,line:e}),{key:t}),s.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},t+1),e.map((function(e,t){return s.a.createElement("span",Object.assign({},o({key:t,token:e}),{key:t}))})))})))}))))),s.a.createElement(v.a,null,s.a.createElement(f.a,null,s.a.createElement(h.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},s.a.createElement(O.a,{tag:"caption"},"Props"),s.a.createElement(N.a,null,s.a.createElement(k.a,{className:"vds-tr"},s.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),s.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),s.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),s.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),s.a.createElement(y.a,null,r.props&&Object.entries(r.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,t){return s.a.createElement(k.a,{className:"vds-tr",key:t},s.a.createElement(j.a,{className:"vds-td",scope:"row"},e[0]," ",e[1].required?s.a.createElement("strong",null," - required"):""),s.a.createElement(g.a,{className:"vds-td"},s.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?s.a.createElement("small",{style:{color:"#1a1f71"}},s.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),s.a.createElement(g.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),s.a.createElement(g.a,{className:"vds-td"},e[1].description))})))))))};_.displayName="SwitchExample";t.default=_},530:function(e,t,a){"use strict";var n=a(5),c=a(0),s=a.n(c),o=a(3),l=a(2),r=a.n(l),i=Object(c.forwardRef)((function(e,t){var a=e.children,c=e.className,o=e.tag,l=Object(n.a)(e,["children","className","tag"]);return s.a.createElement(o,Object.assign({className:r()("vds-screen-reader",c),ref:t},l),a)}));i.propTypes={children:o.node,className:o.string,tag:o.elementType},i.defaultProps={tag:"span"},i.displayName="ScreenReader",t.a=i},531:function(e,t,a){"use strict";var n=a(4),c=a(144),s=a(5),o=a(0),l=a.n(o),r=a(2),i=a.n(r),d=a(65),u=40,m=37,f=39,h=38,p=35,b=36,v=Object(o.forwardRef)((function(e,t){var a=e.children,r=e.className,v=e.orientation,O=e.role,E=e.selectedTab,w=Object(s.a)(e,["children","className","orientation","role","selectedTab"]);t=t||Object(o.useRef)();var y=Object(o.useState)(E),g=Object(c.a)(y,2),j=g[0],N=g[1],k=Object(o.useState)(j),C=Object(c.a)(k,2),S=C[0],T=C[1],x=Object(o.useState)([]),R=Object(c.a)(x,2),F=R[0],B=R[1];Object(o.useEffect)((function(){B(Array.from(t.current.querySelectorAll("li > .vds-tab:not(.vds-state--disabled)")))}),[a,t]),Object(o.useEffect)((function(){N(E)}),[E]);return l.a.createElement("ul",Object.assign({className:i()("".concat("vds-tab","-list"),Object(n.a)({},"".concat("vds-tab","--").concat(v),Boolean(v)),r),ref:t,role:O},w),o.Children.map(a,(function(e,t){return l.a.createElement(d.a,{role:"none"},Object(o.cloneElement)(e,{key:t,onClick:function(a){return function(e,t,a){N(t),T(t),"function"===typeof a.props.onClick&&a.props.onClick(e,t)}(a,t,e)},onKeyDown:function(a){return function(e,t,a){var n=e.charCode||e.keyCode,c=F.length,s=S||0;switch(n){case p:return e.preventDefault(),T(c-1),F[c-1].focus();case b:return e.preventDefault(),T(0),F[0].focus();case m:case h:return e.preventDefault(),T(s-1<0?c-1:s-1),F[s-1<0?c-1:s-1].focus();case f:case u:return e.preventDefault(),T((s+1)%c),F[(s+1)%c].focus()}return"function"===typeof a.props.onKeyDown&&a.props.onKeyDown(e,t),T(j)}(a,t,e)},selected:j===t,tabIndex:Number.isInteger(S)?S===t?0:-1:0===t?0:-1}))})))}));v.defaultProps={role:"tablist"},v.displayName="TabList",t.a=v},532:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(0),o=a.n(s),l=a(3),r=a(2),i=a.n(r),d=Object(s.forwardRef)((function(e,t){var a,s=e.children,l=e.className,r=e.customizableColumns,d=e.dividerLines,u=e.keyValuePairs,m=e.reveal,f=e.revealFirstColumn,h=e.revealLastColumn,p=e.rowSelection,b=e.size,v=e.stickyHeader,O=Object(c.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return o.a.createElement("table",Object.assign({},O,{className:i()("vds-data-table",(a={},Object(n.a)(a,"".concat("vds-state","--customizable-columns"),Boolean(r)),Object(n.a)(a,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(n.a)(a,"".concat("vds-state","--key-value-pairs"),Boolean(u)),Object(n.a)(a,"".concat("vds-state","--").concat(b),Boolean(b)),Object(n.a)(a,"".concat("vds-state","--reveal"),Boolean(m)),Object(n.a)(a,"".concat("vds-state","--reveal-first-column"),Boolean(f)),Object(n.a)(a,"".concat("vds-state","--reveal-last-column"),Boolean(h)),Object(n.a)(a,"".concat("vds-state","--").concat(p),Boolean(p)),Object(n.a)(a,"".concat("vds-state","--sticky-header"),Boolean(v)),a),l),ref:t}),s)}));d.propTypes={children:l.node,className:l.string,columns:Object(l.arrayOf)(Object(l.shape)({})),customizableColumns:l.bool,data:Object(l.arrayOf)(Object(l.shape)({})),dividerLines:l.bool,keyValuePairs:l.bool,reveal:l.bool,revealFirstColumn:l.bool,revealLastColumn:l.bool,rowSelection:Object(l.oneOf)(["multi-select","single-select"]),size:Object(l.oneOf)(["compact"]),stickyHeader:l.bool},d.displayName="DataTable",t.a=d},533:function(e,t,a){"use strict";var n=a(5),c=a(0),s=a.n(c),o=a(3),l=a(2),r=a.n(l),i=Object(c.forwardRef)((function(e,t){var a=e.children,c=e.className,o=Object(n.a)(e,["children","className"]);return s.a.createElement("tbody",Object.assign({className:r()("vds-tbody",c),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Tbody",t.a=i},534:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(0),o=a.n(s),l=a(3),r=a(2),i=a.n(r),d=Object(s.forwardRef)((function(e,t){var a=e.children,s=e.className,l=e.textAlign,r=Object(c.a)(e,["children","className","textAlign"]);return o.a.createElement("td",Object.assign({className:i()("vds-td",Object(n.a)({},"vds-text--".concat(l),Boolean(l)),s),ref:t},r),a)}));d.propTypes={children:l.node,className:l.string,textAlign:Object(l.oneOf)(["center","left","right"])},d.displayName="Td",t.a=d},535:function(e,t,a){"use strict";var n=a(5),c=a(0),s=a.n(c),o=a(3),l=a(2),r=a.n(l),i=Object(c.forwardRef)((function(e,t){var a=e.children,c=e.className,o=Object(n.a)(e,["children","className"]);return s.a.createElement("th",Object.assign({className:r()("vds-th",c),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Th",t.a=i},536:function(e,t,a){"use strict";var n=a(5),c=a(0),s=a.n(c),o=a(3),l=a(2),r=a.n(l),i=Object(c.forwardRef)((function(e,t){var a=e.children,c=e.className,o=Object(n.a)(e,["children","className"]);return s.a.createElement("thead",Object.assign({className:r()("vds-thead",c),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Thead",t.a=i},537:function(e,t,a){"use strict";var n=a(5),c=a(0),s=a.n(c),o=a(3),l=a(2),r=a.n(l),i=Object(c.forwardRef)((function(e,t){var a=e.children,c=e.className,o=Object(n.a)(e,["children","className"]);return s.a.createElement("tr",Object.assign({className:r()("vds-tr",c),ref:t},o),a)}));i.propTypes={children:o.node,className:o.string},i.displayName="Tr",t.a=i},545:function(e,t){},546:function(e,t){}}]);
//# sourceMappingURL=60.ba4fbef9.chunk.js.map