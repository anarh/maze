(window["webpackJsonp@visa/vds-react"]=window["webpackJsonp@visa/vds-react"]||[]).push([[9],{285:function(e,a,n){"use strict";n.r(a);var t=n(96),r=n(513),l=n(0),o=n.n(l),c=n(4),i=n.n(c),s=n(516),u=n(514),d=n.n(u),p=n(37),m=n(8),v=n(504),f=n(16),h=n(23),g=n(17),b=n(505),E=n(60),y=n(132),O=n(506),w=n(507),C=n(508),S=n(509),N=n(510),j=n(7),T=n(2),x=n(809),I=n(810),B=n(765);function k(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function P(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?k(n,!0).forEach((function(a){Object(T.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}var R=function(){var e=Object(l.useState)({value:""}),a=Object(t.a)(e,2),n=a[0],r=a[1],c=Object(l.useState)({bank:"",card:""}),i=Object(t.a)(c,2),s=i[0],u=i[1];return o.a.createElement(h.a,null,o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h2"},"Select"),o.a.createElement(j.a,null,"Select takes all native React props directly, (e.g. onChange, etc)"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(x.a,{label:"Select Card"},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"silver_card"},"Silver Signature Card"),o.a.createElement("option",{value:"signature_card"},"Visa Signature Card"),o.a.createElement("option",{value:"platinum_card"},"Platinum Visa Card"),o.a.createElement("option",{value:"premium_card"},"Premium Card With An Unnecessarily Long Description")))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h2"},"Select with preselection"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(x.a,{label:"Select Card",value:"signature_card"},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"silver_card"},"Silver Signature Card"),o.a.createElement("option",{value:"signature_card"},"Visa Signature Card"),o.a.createElement("option",{value:"platinum_card"},"Platinum Visa Card"),o.a.createElement("option",{value:"premium_card"},"Premium Card With An Unnecessarily Long Description")))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h2"},"Select with invalid state."))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(x.a,{errorText:"Invalid Card Selection",invalid:""===n.value,label:"Select Card",onChange:function(e){return r({value:e.target.value})},showErrorText:""===n.value},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"silver_card"},"Silver Signature Card"),o.a.createElement("option",{value:"signature_card"},"Visa Signature Card"),o.a.createElement("option",{value:"platinum_card"},"Platinum Visa Card"),o.a.createElement("option",{value:"premium_card"},"Premium Card With An Unnecessarily Long Description")))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h2"},"Select Group with validity states"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(I.a,{invalid:""===s.bank&&""===s.card,legend:"Credit Card",errorText:"Please fill out the Credit Card info field.",showErrorText:!0},o.a.createElement(x.a,{ariaLabel:"Bank Name",placeholder:"Bank Name",errorText:"Invalid Bank",invalid:""===s.bank||""===s.bank&&""===s.card,onChange:function(e){return u(P({},s,{bank:e.target.value}))},showErrorText:""===s.bank&&!(""===s.bank&&""===s.card)},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"BOA"},"Bank of America"),o.a.createElement("option",{value:"CHA"},"Chase"),o.a.createElement("option",{value:"WFO"},"Wells Fargo")),o.a.createElement(B.a,null," - "),o.a.createElement(x.a,{ariaLabel:"Card Type",placeholder:"Card Type",errorText:"Invalid Card Type",invalid:""===s.card||""===s.bank&&""===s.card,onChange:function(e){return u(P({},s,{card:e.target.value}))},showErrorText:""===s.card&&!(""===s.bank&&""===s.card)},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"VISA"},"Visa"),o.a.createElement("option",{value:"MC"},"Mastercard"),o.a.createElement("option",{value:"AMEX"},"American Express"),o.a.createElement("option",{value:"DIS"},"Discover"))))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h2"},"Select (ReadOnly)"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(x.a,{label:"Select Card",readOnly:!0,value:"signature_card"},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"silver_card"},"Silver Signature Card"),o.a.createElement("option",{value:"signature_card"},"Visa Signature Card"),o.a.createElement("option",{value:"platinum_card"},"Platinum Visa Card"),o.a.createElement("option",{value:"premium_card"},"Premium Card With An Unnecessarily Long Description")))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h2"},"Select (Disabled)"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(x.a,{disabled:!0,label:"Select Card",value:"signature_card"},o.a.createElement("option",{value:""}),o.a.createElement("option",{value:"silver_card"},"Silver Signature Card"),o.a.createElement("option",{value:"signature_card"},"Visa Signature Card"),o.a.createElement("option",{value:"platinum_card"},"Platinum Visa Card"),o.a.createElement("option",{value:"premium_card"},"Premium Card With An Unnecessarily Long Description")))))},_=n(515),V="import React, { forwardRef, Fragment, useEffect, useState } from 'react';\nimport { bool, func, node, number, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport shortid from 'shortid';\nimport InputContainer from '../input-container';\nimport InputLabel from '../input-label';\nimport InputBar from '../input-bar';\nimport InputSelectFocusbox from '../input-select-focusbox';\nimport InputMessage from '../input-message';\nimport InputSelect from '../input-select';\nimport InputOption from '../input-option';\nimport InputHint from '../input-hint';\nimport Icon from '../icon';\n\nconst Select = forwardRef(({\n  ariaLabel,\n  caretIcon,\n  children,\n  className,\n  css,\n  disabled,\n  errorIcon,\n  errorText,\n  helpIcon,\n  helpText,\n  id = shortid.generate(),\n  invalid,\n  label,\n  onBlur,\n  onChange,\n  onFocus,\n  placeholder,\n  readOnly,\n  showErrorText,\n  showHelpText,\n  ...remainingProps\n}, ref) => {\n  const [focused, setFocused] = useState();\n  const [filled, setFilled] = useState(Boolean(remainingProps.value) || Boolean(remainingProps.defaultValue));\n  const [rId] = useState(id);\n\n  useEffect(() => {\n    setFilled(Boolean(remainingProps.defaultValue) || Boolean(remainingProps.value));\n  }, [remainingProps.defaultValue, remainingProps.value]);\n\n  const handleBlur = e => {\n    setFocused(false);\n    if (typeof onBlur === 'function') {\n      onBlur(e);\n    }\n  };\n\n  const handleChange = e => {\n    setFilled(e.target.value !== '');\n    if (typeof onChange === 'function') {\n      onChange(e);\n    }\n  };\n\n  const handleFocus = e => {\n    setFocused(true);\n    if (typeof onFocus === 'function') {\n      onFocus(e);\n    }\n  };\n\n  return (\n    <InputContainer\n      className={classnames(className)}\n      css={css}\n      disabled={disabled}\n      filled={filled}\n      focus={focused}\n      readOnly={readOnly}\n      invalid={invalid}\n    >\n      {label ? <InputLabel htmlFor={rId}>{label}</InputLabel> : undefined}\n      <InputBar>\n        { placeholder ? <InputHint>{placeholder}</InputHint> : undefined}\n        <InputSelect\n          aria-describedby={\n            showErrorText || showHelpText\n              ? `input-message-${rId}`\n              : undefined\n          }\n          aria-label={label ? undefined : ariaLabel}\n          aria-invalid={invalid}\n          id={rId}\n          disabled={disabled}\n          onBlur={handleBlur}\n          onChange={handleChange}\n          onFocus={handleFocus}\n          readOnly={readOnly}\n          ref={ref}\n          {...remainingProps}\n        >\n          {children}\n        </InputSelect>\n        <InputOption>{caretIcon}</InputOption>\n      </InputBar>\n      <InputSelectFocusbox />\n      <InputMessage\n        id={`input-message-${rId}`}\n        show={(showHelpText && Boolean(helpText)) || (showErrorText && Boolean(errorText))}\n        invalid={invalid}\n      >\n        {\n          !invalid && focused && showHelpText && Boolean(helpText)\n            ? <Fragment>{helpIcon} {helpText}</Fragment>\n            : undefined\n        }\n        {\n          invalid === true && showErrorText && Boolean(errorText)\n            ? <Fragment>{errorIcon} {errorText}</Fragment>\n            : undefined\n        }\n      </InputMessage>\n    </InputContainer>\n  );\n});\n\nSelect.propTypes = {\n  /**\n   * Aria Label\n   */\n  ariaLabel: string,\n\n  /**\n   * Input Caret Icon\n   */\n  caretIcon: node,\n\n  /**\n  * @ignore\n  */\n  children: node,\n\n  /**\n   * @ignore\n   */\n  className: string,\n\n\n  /**\n   * @ignore\n   */\n  css: func,\n\n  /**\n   * Disabled\n   */\n  disabled: bool,\n\n  /**\n   * Input Message Icon\n   */\n  errorIcon: node,\n\n  /**\n   * Error Text\n   */\n  errorText: node,\n\n  /**\n   * Input Help Message Icon\n   */\n  helpIcon: node,\n\n  /**\n   * Input Help Message\n   */\n  helpText: node,\n\n  /**\n   * ID\n   */\n  id: oneOfType([number, string]),\n\n  /**\n   * Invalid\n   */\n  invalid: bool,\n\n  /**\n   * Label\n   */\n  label: node,\n\n  /**\n   * Callback fired when the input element loses focus.\n   */\n  onBlur: func,\n\n  /**\n   * On Change\n   */\n  onChange: func,\n\n  /**\n   * Callback fired when the input element is focused on.\n   */\n  onFocus: func,\n\n  /**\n   * Hint\n   */\n  placeholder: node,\n\n  /**\n   * ReadOnly\n   */\n  readOnly: bool,\n\n  /**\n   * Show Error Message\n   */\n  showErrorText: bool,\n\n  /**\n   * Show Help Message\n   */\n  showHelpText: bool,\n\n  /**\n   * Value\n   */\n  value: string\n};\n\nSelect.defaultProps = {\n  caretIcon: <Icon name=\"arrow-expand\" resolution=\"tiny\" />,\n  errorIcon: <Icon name=\"error\" resolution=\"low\" />\n};\n\nSelect.displayName = 'Select';\n\nexport default Select;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),F='import React, { useState } from \'react\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Row from \'../../row\';\nimport Select from \'../../select\';\nimport SelectGroup from \'../../select-group\';\nimport SelectGroupDelimiter from \'../../select-group-delimiter\';\nimport Typography from \'../../typography\';\n\nconst SelectExample = () => {\n  const [stateOne, setStateOne] = useState({\n    value: \'\'\n  });\n\n  const [stateTwo, setStateTwo] = useState({\n    bank: \'\',\n    card: \'\'\n  });\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag="h2">Select</Typography>\n          <Typography>Select takes all native React props directly, (e.g. onChange, etc)</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Select\n            label="Select Card"\n          >\n            <option value="" />\n            <option value="silver_card">Silver Signature Card</option>\n            <option value="signature_card">Visa Signature Card</option>\n            <option value="platinum_card">Platinum Visa Card</option>\n            <option value="premium_card">Premium Card With An Unnecessarily Long Description</option>\n          </Select>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Select with preselection</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Select\n            label="Select Card"\n            value="signature_card"\n          >\n            <option value="" />\n            <option value="silver_card">Silver Signature Card</option>\n            <option value="signature_card">Visa Signature Card</option>\n            <option value="platinum_card">Platinum Visa Card</option>\n            <option value="premium_card">Premium Card With An Unnecessarily Long Description</option>\n          </Select>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Select with invalid state.</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Select\n            errorText="Invalid Card Selection"\n            invalid={stateOne.value === \'\'}\n            label="Select Card"\n            onChange={e => setStateOne({ value : e.target.value })}\n            showErrorText={stateOne.value === \'\'}\n          >\n            <option value="" />\n            <option value="silver_card">Silver Signature Card</option>\n            <option value="signature_card">Visa Signature Card</option>\n            <option value="platinum_card">Platinum Visa Card</option>\n            <option value="premium_card">Premium Card With An Unnecessarily Long Description</option>\n          </Select>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Select Group with validity states</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <SelectGroup\n            invalid={stateTwo.bank === \'\' &&  stateTwo.card === \'\'}\n            legend="Credit Card"\n            errorText="Please fill out the Credit Card info field."\n            showErrorText\n          >\n            <Select\n              ariaLabel="Bank Name"\n              placeholder="Bank Name"\n              errorText="Invalid Bank"\n              invalid={stateTwo.bank === \'\' || (stateTwo.bank === \'\' &&  stateTwo.card === \'\')}\n              onChange={e => setStateTwo({ ...stateTwo, bank : e.target.value })}\n              showErrorText={stateTwo.bank === \'\' && !(stateTwo.bank === \'\' &&  stateTwo.card === \'\')}\n            >\n              <option value="" />\n              <option value="BOA">Bank of America</option>\n              <option value="CHA">Chase</option>\n              <option value="WFO">Wells Fargo</option>\n            </Select>\n            <SelectGroupDelimiter> - </SelectGroupDelimiter>\n            <Select\n              ariaLabel="Card Type"\n              placeholder="Card Type"\n              errorText="Invalid Card Type"\n              invalid={stateTwo.card === \'\' || (stateTwo.bank === \'\' &&  stateTwo.card === \'\')}\n              onChange={e => setStateTwo({ ...stateTwo, card : e.target.value })}\n              showErrorText={stateTwo.card === \'\' && !(stateTwo.bank === \'\' &&  stateTwo.card === \'\')}\n            >\n              <option value="" />\n              <option value="VISA">Visa</option>\n              <option value="MC">Mastercard</option>\n              <option value="AMEX">American Express</option>\n              <option value="DIS">Discover</option>\n            </Select>\n          </SelectGroup>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Select (ReadOnly)</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Select\n            label="Select Card"\n            readOnly\n            value="signature_card"\n          >\n            <option value="" />\n            <option value="silver_card">Silver Signature Card</option>\n            <option value="signature_card">Visa Signature Card</option>\n            <option value="platinum_card">Platinum Visa Card</option>\n            <option value="premium_card">Premium Card With An Unnecessarily Long Description</option>\n          </Select>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Select (Disabled)</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Select\n            disabled\n            label="Select Card"\n            value="signature_card"\n          >\n            <option value="" />\n            <option value="silver_card">Silver Signature Card</option>\n            <option value="signature_card">Visa Signature Card</option>\n            <option value="platinum_card">Platinum Visa Card</option>\n            <option value="premium_card">Premium Card With An Unnecessarily Long Description</option>\n          </Select>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default SelectExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),L=function(e){var a=Object(r.a)({},e),n=Object(l.useState)({}),c=Object(t.a)(n,2),u=c[0],T=c[1];return Object(l.useEffect)((function(){try{T(_.parse(V))}catch(e){console.log("\n        React-docgen could not parse props for Select\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),o.a.createElement(h.a,{siblingOfStickyFooter:!0},o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(j.a,{tag:"h1"},"Select"))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(y.a,null,o.a.createElement(E.a,{tag:o.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/select"),activeClassName:"vds-state--selected"})},o.a.createElement(f.a,{name:"log",resolution:"low"}),"Select Example"),o.a.createElement(E.a,{tag:o.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react","/components/select/code"),activeClassName:"vds-state--selected"})},o.a.createElement(f.a,{name:"code-fork-code-alt",resolution:"low"}),"Code for Select Example")))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path==="".concat("/vds-react","/components/select/code"),"vds-state--show":a.match.path!=="".concat("/vds-react","/components/select/code")})},o.a.createElement(R,a)),o.a.createElement("div",{className:i()({"vds-state--hidden":a.match.path!=="".concat("/vds-react","/components/select/code"),"vds-state--show":a.match.path==="".concat("/vds-react","/components/select/code")})},o.a.createElement(s.a,Object.assign({},s.b,{theme:d.a,code:F,language:"jsx"}),(function(e){var a=e.className,n=e.style,t=e.tokens,r=e.getLineProps,l=e.getTokenProps;return o.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return o.a.createElement("div",r({key:a,line:e}),o.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return o.a.createElement("span",l({key:a,token:e}))})))})))}))))),o.a.createElement(g.a,null,o.a.createElement(m.a,null,o.a.createElement(v.a,{className:i()(["components"]),dividerLines:!0,size:"compact"},o.a.createElement(b.a,{tag:"caption"},"Props"),o.a.createElement(S.a,null,o.a.createElement(N.a,{className:"vds-tr"},o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),o.a.createElement(C.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),o.a.createElement(O.a,null,u.props&&Object.entries(u.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return o.a.createElement(N.a,{className:"vds-tr",key:a,tabIndex:"0"},o.a.createElement(w.a,{className:"vds-td"},e[0]," ",e[1].required?o.a.createElement("sup",{style:{color:"red"}}," required"):""),o.a.createElement(w.a,{className:"vds-td"},o.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?o.a.createElement("small",{style:{color:"#1a1f71"}},o.a.createElement("br",null),e[1].type.value.length?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):void 0):""),o.a.createElement(w.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),o.a.createElement(w.a,{className:"vds-td"},e[1].description))})))))))};L.displayName="SelectExample";a.default=L},504:function(e,a,n){"use strict";var t=n(2),r=n(5),l=n(0),o=n.n(l),c=n(3),i=n(4),s=n.n(i),u=Object(l.forwardRef)((function(e,a){var n,l=e.children,c=e.className,i=e.customizableColumns,u=e.dividerLines,d=e.keyValuePairs,p=e.reveal,m=e.revealFirstColumn,v=e.revealLastColumn,f=e.rowSelection,h=e.size,g=e.stickyHeader,b=Object(r.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return o.a.createElement("table",Object.assign({},b,{className:s()("vds-data-table",(n={},Object(t.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(i)),Object(t.a)(n,"".concat("vds-state","--divider-lines"),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(d)),Object(t.a)(n,"".concat("vds-state","--").concat(h),Boolean(h)),Object(t.a)(n,"".concat("vds-state","--reveal"),Boolean(p)),Object(t.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(m)),Object(t.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(v)),Object(t.a)(n,"".concat("vds-state","--").concat(f),Boolean(f)),Object(t.a)(n,"".concat("vds-state","--sticky-header"),Boolean(g)),n),c),ref:a}),l)}));u.propTypes={children:c.node,className:c.string,columns:Object(c.arrayOf)(Object(c.shape)({})),customizableColumns:c.bool,data:Object(c.arrayOf)(Object(c.shape)({})),dividerLines:c.bool,keyValuePairs:c.bool,reveal:c.bool,revealFirstColumn:c.bool,revealLastColumn:c.bool,rowSelection:Object(c.oneOf)(["multi-select","single-select"]),size:Object(c.oneOf)(["compact"]),stickyHeader:c.bool},u.displayName="DataTable",a.a=u},505:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(3),c=n(4),i=n.n(c),s=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=e.tag,c=Object(t.a)(e,["children","className","tag"]);return l.a.createElement(o,Object.assign({className:i()("vds-sr",r),ref:a},c),n)}));s.propTypes={children:o.node,className:o.string,tag:o.elementType},s.defaultProps={tag:"span"},s.displayName="Sr",a.a=s},506:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(3),c=n(4),i=n.n(c),s=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(t.a)(e,["children","className"]);return l.a.createElement("tbody",Object.assign({className:i()("vds-tbody",r),ref:a},o),n)}));s.propTypes={children:o.node,className:o.string},s.displayName="Tbody",a.a=s},507:function(e,a,n){"use strict";var t=n(2),r=n(5),l=n(0),o=n.n(l),c=n(3),i=n(4),s=n.n(i),u=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,c=e.textAlign,i=Object(r.a)(e,["children","className","textAlign"]);return o.a.createElement("td",Object.assign({className:s()("vds-td",Object(t.a)({},"vds-text--".concat(c),Boolean(c)),l),ref:a},i),n)}));u.propTypes={children:c.node,className:c.string,textAlign:Object(c.oneOf)(["center","left","right"])},u.displayName="Td",a.a=u},508:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(3),c=n(4),i=n.n(c),s=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(t.a)(e,["children","className"]);return l.a.createElement("th",Object.assign({className:i()("vds-th",r),ref:a},o),n)}));s.propTypes={children:o.node,className:o.string},s.displayName="Th",a.a=s},509:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(3),c=n(4),i=n.n(c),s=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(t.a)(e,["children","className"]);return l.a.createElement("thead",Object.assign({className:i()("vds-thead",r),ref:a},o),n)}));s.propTypes={children:o.node,className:o.string},s.displayName="Thead",a.a=s},510:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(3),c=n(4),i=n.n(c),s=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(t.a)(e,["children","className"]);return l.a.createElement("tr",Object.assign({className:i()("vds-tr",r),ref:a},o),n)}));s.propTypes={children:o.node,className:o.string},s.displayName="Tr",a.a=s},511:function(e,a,n){"use strict";var t,r,l,o=n(521),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){l=!1}function s(e){if(e){if(e!==t){if(e.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+e.length+" characters: "+e);var a=e.split("").filter((function(e,a,n){return a!==n.lastIndexOf(e)}));if(a.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+a.join(", "));t=e,i()}}else t!==c&&(t=c,i())}function u(){return l||(l=function(){t||s(c);for(var e,a=t.split(""),n=[],r=o.nextValue();a.length>0;)r=o.nextValue(),e=Math.floor(r*a.length),n.push(a.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return t||c},characters:function(e){return s(e),t},seed:function(e){o.seed(e),r!==e&&(i(),r=e)},lookup:function(e){return u()[e]},shuffled:u}},517:function(e,a){},518:function(e,a,n){"use strict";e.exports=n(520)},520:function(e,a,n){"use strict";var t=n(511),r=n(522),l=n(526),o=n(527)||0;function c(){return r(o)}e.exports=c,e.exports.generate=c,e.exports.seed=function(a){return t.seed(a),e.exports},e.exports.worker=function(a){return o=a,e.exports},e.exports.characters=function(e){return void 0!==e&&t.characters(e),t.shuffled()},e.exports.isValid=l},521:function(e,a,n){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},522:function(e,a,n){"use strict";var t,r,l=n(523),o=(n(511),1567752802062),c=7;e.exports=function(e){var a="",n=Math.floor(.001*(Date.now()-o));return n===r?t++:(t=0,r=n),a+=l(c),a+=l(e),t>0&&(a+=l(t)),a+=l(n)}},523:function(e,a,n){"use strict";var t=n(511),r=n(524),l=n(525);e.exports=function(e){for(var a,n=0,o="";!a;)o+=l(r,t.get(),1),a=e<Math.pow(16,n+1),n++;return o}},524:function(e,a,n){"use strict";var t,r="object"===typeof window&&(window.crypto||window.msCrypto);t=r&&r.getRandomValues?function(e){return r.getRandomValues(new Uint8Array(e))}:function(e){for(var a=[],n=0;n<e;n++)a.push(Math.floor(256*Math.random()));return a},e.exports=t},525:function(e,a){e.exports=function(e,a,n){var t=(2<<Math.log(a.length-1)/Math.LN2)-1,r=Math.ceil(1.6*t*n/a.length);n=+n;for(var l="";;)for(var o=e(r),c=0;c<r;c++){var i=o[c]&t;if(a[i]&&(l+=a[i]).length===n)return l}}},526:function(e,a,n){"use strict";var t=n(511);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+t.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},527:function(e,a,n){"use strict";e.exports=0},531:function(e,a,n){"use strict";var t=n(2),r=n(5),l=n(0),o=n.n(l),c=n(4),i=n.n(c),s=function(e){var a,n=e.children,l=e.className,c=e.css,s=e.disabled,u=e.expanded,d=e.filled,p=e.focus,m=e.invalid,v=e.isTextarea,f=e.readOnly,h=Object(r.a)(e,["children","className","css","disabled","expanded","filled","focus","invalid","isTextarea","readOnly"]);return o.a.createElement("div",Object.assign({className:i()((a={},Object(t.a)(a,"".concat("vds-input"),!v),Object(t.a)(a,"".concat("vds-input","-textarea-container"),Boolean(v)),Object(t.a)(a,"".concat("vds-state","--disabled"),Boolean(s)),Object(t.a)(a,"".concat("vds-state","--error"),Boolean(m)),Object(t.a)(a,"".concat("vds-state","--expanded"),Boolean(u)),Object(t.a)(a,"".concat("vds-state","--filled"),Boolean(d)),Object(t.a)(a,"".concat("vds-state","--focus"),Boolean(p)),Object(t.a)(a,"".concat("vds-state","--readonly"),Boolean(f)),Object(t.a)(a,"".concat("vds-state","--success"),"boolean"===typeof m&&!m),a),l),css:c},h),n)};s.displayName="InputContainer",a.a=s},532:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(3),c=n(4),i=n.n(c),s=Object(r.forwardRef)((function(e,a){var n=e.children,r=e.className,o=Object(t.a)(e,["children","className"]);return l.a.createElement("label",Object.assign({className:i()("vds-input-label",r),ref:a},o),n)}));s.propTypes={children:o.node,className:o.string},s.displayName="InputLabel",a.a=s},533:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(4),c=n.n(o),i=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return l.a.createElement("div",Object.assign({className:c()("vds-input-bar",n)},r),a)};i.displayName="InputBar",a.a=i},534:function(e,a,n){"use strict";var t=n(2),r=n(5),l=n(0),o=n.n(l),c=n(4),i=n.n(c),s=function(e){var a,n=e.ariaAtomic,l=e.children,c=e.className,s=e.invalid,u=e.role,d=e.show,p=Object(r.a)(e,["ariaAtomic","children","className","invalid","role","show"]);return o.a.createElement("span",Object.assign({"aria-atomic":n,"aria-live":s?"assertive":"polite",className:i()("vds-input-message",(a={},Object(t.a)(a,"".concat("vds-state","--hidden"),!d),Object(t.a)(a,"".concat("vds-state","--error"),Boolean(s)),a),c),role:u},p),l)};s.defaultProps={ariaAtomic:"true",role:"alert"},s.displayName="InputMessage",a.a=s},536:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(4),c=n.n(o),i=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return l.a.createElement("span",Object.assign({className:c()("vds-input-option",n)},r),a)};i.displayName="InputOption",a.a=i},538:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(4),c=n.n(o),i=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return l.a.createElement("span",Object.assign({className:c()("vds-input-hint",n)},r),a)};i.displayName="InputHint",a.a=i},573:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(4),c=n.n(o),i=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return l.a.createElement("fieldset",Object.assign({className:c()("vds-fieldset",n)},r),a)};i.displayName="Fieldset",a.a=i},644:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(4),c=n.n(o),i=function(e){var a=e.children,n=e.className,r=Object(t.a)(e,["children","className"]);return l.a.createElement("legend",Object.assign({className:c()("vds-legend",n)},r),a)};i.displayName="Legend",a.a=i},765:function(e,a,n){"use strict";var t=n(5),r=n(0),l=n.n(r),o=n(4),c=n.n(o),i=function(e){var a=e.ariaHidden,n=e.children,r=e.className,o=Object(t.a)(e,["ariaHidden","children","className"]);return l.a.createElement("span",Object.assign({"aria-hidden":a,className:c()("vds-select-group-delimiter",r)},o),n)};i.defaultProps={ariaHidden:"true"},i.displayName="SelectGroupDelimiter",a.a=i},809:function(e,a,n){"use strict";var t=n(96),r=n(5),l=n(0),o=n.n(l),c=n(4),i=n.n(c),s=n(518),u=n.n(s),d=n(531),p=n(532),m=n(533),v=function(e){var a=e.children,n=e.className,t=Object(r.a)(e,["children","className"]);return o.a.createElement("div",Object.assign({className:i()("vds-input--select-focusbox",n)},t),a)};v.displayName="InputSelectFocusbox";var f=v,h=n(534),g=n(3),b=Object(l.forwardRef)((function(e,a){var n=e.children,t=e.className,l=Object(r.a)(e,["children","className"]);return o.a.createElement("select",Object.assign({className:i()("vds-input--select",t),ref:a},l),n)}));b.propTypes={children:g.node,className:g.string},b.displayName="InputSelect";var E=b,y=n(536),O=n(538),w=n(16),C=Object(l.forwardRef)((function(e,a){var n=e.ariaLabel,c=e.caretIcon,s=e.children,v=e.className,g=e.css,b=e.disabled,w=e.errorIcon,C=e.errorText,S=e.helpIcon,N=e.helpText,j=e.id,T=void 0===j?u.a.generate():j,x=e.invalid,I=e.label,B=e.onBlur,k=e.onChange,P=e.onFocus,R=e.placeholder,_=e.readOnly,V=e.showErrorText,F=e.showHelpText,L=Object(r.a)(e,["ariaLabel","caretIcon","children","className","css","disabled","errorIcon","errorText","helpIcon","helpText","id","invalid","label","onBlur","onChange","onFocus","placeholder","readOnly","showErrorText","showHelpText"]),A=Object(l.useState)(),D=Object(t.a)(A,2),H=D[0],M=D[1],G=Object(l.useState)(Boolean(L.value)||Boolean(L.defaultValue)),W=Object(t.a)(G,2),U=W[0],z=W[1],q=Object(l.useState)(T),$=Object(t.a)(q,1)[0];Object(l.useEffect)((function(){z(Boolean(L.defaultValue)||Boolean(L.value))}),[L.defaultValue,L.value]);return o.a.createElement(d.a,{className:i()(v),css:g,disabled:b,filled:U,focus:H,readOnly:_,invalid:x},I?o.a.createElement(p.a,{htmlFor:$},I):void 0,o.a.createElement(m.a,null,R?o.a.createElement(O.a,null,R):void 0,o.a.createElement(E,Object.assign({"aria-describedby":V||F?"input-message-".concat($):void 0,"aria-label":I?void 0:n,"aria-invalid":x,id:$,disabled:b,onBlur:function(e){M(!1),"function"===typeof B&&B(e)},onChange:function(e){z(""!==e.target.value),"function"===typeof k&&k(e)},onFocus:function(e){M(!0),"function"===typeof P&&P(e)},readOnly:_,ref:a},L),s),o.a.createElement(y.a,null,c)),o.a.createElement(f,null),o.a.createElement(h.a,{id:"input-message-".concat($),show:F&&Boolean(N)||V&&Boolean(C),invalid:x},!x&&H&&F&&Boolean(N)?o.a.createElement(l.Fragment,null,S," ",N):void 0,!0===x&&V&&Boolean(C)?o.a.createElement(l.Fragment,null,w," ",C):void 0))}));C.defaultProps={caretIcon:o.a.createElement(w.a,{name:"arrow-expand",resolution:"tiny"}),errorIcon:o.a.createElement(w.a,{name:"error",resolution:"low"})},C.displayName="Select";a.a=C},810:function(e,a,n){"use strict";var t=n(2),r=n(5),l=n(0),o=n.n(l),c=n(4),i=n.n(c),s=n(573),u=n(644),d=function(e){var a=e.children,n=e.className,t=Object(r.a)(e,["children","className"]);return o.a.createElement("div",Object.assign({className:i()("vds-select-group-container",n)},t),a)};d.displayName="SelectGroupContainer";var p=d,m=function(e){var a,n=e.ariaAtomic,l=e.ariaLive,c=e.children,s=e.className,u=e.invalid,d=e.role,p=e.show,m=Object(r.a)(e,["ariaAtomic","ariaLive","children","className","invalid","role","show"]);return o.a.createElement("span",Object.assign({"aria-atomic":n,"aria-live":l,className:i()("vds-select-group-message",(a={},Object(t.a)(a,"".concat("vds-state","--hidden"),!p),Object(t.a)(a,"".concat("vds-state","--error"),Boolean(u)),a),s),role:d},m),c)};m.defaultProps={ariaAtomic:"true",ariaLive:"assertive",role:"alert"},m.displayName="SelectGroupMessage";var v=m,f=n(16),h=n(518),g=n.n(h),b=function(e){var a,n=e.children,c=e.className,d=e.id,m=void 0===d?g.a.generate():d,f=e.disabled,h=e.errorIcon,b=e.errorText,E=e.helpIcon,y=e.helpText,O=e.invalid,w=e.legend,C=e.showErrorText,S=e.showHelpText,N=Object(r.a)(e,["children","className","id","disabled","errorIcon","errorText","helpIcon","helpText","invalid","legend","showErrorText","showHelpText"]),j=Object(l.useRef)(m);return o.a.createElement("div",Object.assign({"aria-describedby":C||S?"select-group-message-".concat(j.current):void 0,className:i()("vds-select-group",(a={},Object(t.a)(a,"".concat("vds-state","--disabled"),Boolean(f)),Object(t.a)(a,"".concat("vds-state","--error"),Boolean(O)),a),c)},N),o.a.createElement(s.a,null,o.a.createElement(u.a,null,w),o.a.createElement(p,null,n,o.a.createElement(v,{id:"select-group-message-".concat(j.current),show:S&&Boolean(y)||C&&Boolean(b),invalid:O},!O&&S&&Boolean(y)?o.a.createElement(l.Fragment,null,E," ",y):void 0,O&&C&&Boolean(b)?o.a.createElement(l.Fragment,null,h," ",b):void 0))))};b.defaultProps={errorIcon:o.a.createElement(f.a,{name:"error",resolution:"low"})},b.displayName="SelectGroup";a.a=b}}]);
//# sourceMappingURL=9.1af3efb0.chunk.js.map