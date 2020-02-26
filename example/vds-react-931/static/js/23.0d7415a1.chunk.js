(this["webpackJsonp@visa/vds-react"]=this["webpackJsonp@visa/vds-react"]||[]).push([[23],{257:function(e,a,n){"use strict";n.r(a);var t=n(65),l=n(539),o=n(0),r=n.n(o),s=n(536),i=n.n(s),c=n(2),d=n.n(c),u=n(544),m=n(543),p=n(40),h=n(7),f=n(528),g=n(18),b=n(23),v=n(14),E=n(527),y=n(66),R=n(141),O=n(529),C=n(530),j=n(531),N=n(532),w=n(533),k=n(8),T=n(12),S=n(560),x=n(688),L=n(5),z=function(e){var a=e.ariaAtomic,n=e.ariaLive,t=e.children,l=e.className,o=Object(L.a)(e,["ariaAtomic","ariaLive","children","className"]);return r.a.createElement("span",Object.assign({"aria-atomic":a,"aria-live":n,className:d()("vds-radio-error-message",l)},o),t)};z.defaultProps={ariaAtomic:"true",ariaLive:"assertive"},z.displayName="RadioErrorMessage";var F=z,B=n(4),P=function(e){var a,n=e.children,t=e.className,l=e.disabled,o=e.invalid,s=Object(L.a)(e,["children","className","disabled","invalid"]);return r.a.createElement("fieldset",Object.assign({className:d()("vds-radio-group",(a={},Object(B.a)(a,"".concat("vds-radio-group","--disabled"),Boolean(l)),Object(B.a)(a,"".concat("vds-radio-group","--error-required"),Boolean(o)),a),t)},s),n)};P.displayName="RadioGroup";var I=P,G=function(e){var a=e.children,n=e.className,t=e.orientation,l=Object(L.a)(e,["children","className","orientation"]);return r.a.createElement("ul",Object.assign({className:d()("vds-radio-list",Object(B.a)({},"".concat("vds-radio-list","--").concat(t),Boolean(t)),n)},l),a)};G.displayName="RadioList";var D=G,V=function(e){var a=e.children,n=e.className,t=Object(L.a)(e,["children","className"]);return r.a.createElement("li",Object.assign({className:d()("vds-radio-list-item",n)},t),a)};V.displayName="RadioListItem";var M=V,A=function(e){var a=e.children,n=e.className,t=Object(L.a)(e,["children","className"]);return r.a.createElement("legend",Object.assign({className:d()("vds-radio-group-legend",n)},t),a)};A.displayName="RadioGroupLegend";var q=A,$=function(e){var a=e.child,n=e.disabled,t=e.index,l=e.invalid,r=e.value;return Object(o.cloneElement)(a,{checked:a.props.value===r,disabled:a.props.disabled||n,invalid:a.props.invalid||l,key:t})},_=function(e){var a=e.children,n=e.disabled,t=e.errorIcon,l=e.errorMessage,s=e.invalid,i=e.isVertical,c=e.legend,d=e.onChange,u=e.value,m=Object(L.a)(e,["children","disabled","errorIcon","errorMessage","invalid","isVertical","legend","onChange","value"]);return r.a.createElement(I,Object.assign({disabled:n,invalid:s,onChange:d},m),c?r.a.createElement(q,null,c):void 0,i?r.a.createElement(D,null,o.Children.map(a,(function(e,a){return r.a.createElement(M,{key:a},$({child:e,disabled:n,index:a,invalid:s,value:u}))}))):r.a.createElement(o.Fragment,null,o.Children.map(a,(function(e,a){return $({child:e,disabled:n,index:a,invalid:s,value:u})}))),s&&l?r.a.createElement(F,null,t," ",l):void 0)};_.defaultProps={errorIcon:r.a.createElement(g.a,{name:"error",resolution:"tiny"})},_.displayName="RadioGroupControl";var H=_,W=function(){var e=Object(o.useRef)(),a=Object(o.useRef)(),n=Object(o.useRef)(),l=Object(o.useState)(!1),s=Object(t.a)(l,2),i=s[0],c=s[1],d=Object(o.useState)({selectedValue:"1"}),u=Object(t.a)(d,2),m=u[0],p=u[1],f=Object(o.useState)({pizzas:[{checked:!1,disabled:!1,id:1,label:"Regular",value:"regular"},{checked:!1,disabled:!1,id:2,label:"Deep Dish",value:"deep-dish"},{checked:!1,disabled:!1,id:3,label:"Thin Crust",value:"thin-crust"},{checked:!1,disabled:!0,id:4,label:"Super Thin Crust",value:"super-thin-crust"}],selectedPizza:"regular"}),E=Object(t.a)(f,2),y=E[0],R=E[1],O=Object(o.useState)({selected:null}),C=Object(t.a)(O,2),j=C[0],N=C[1],w=function(e){return p({selectedValue:e.target.value})},L=function(e){return N({selected:e.target.value})};return r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(k.a,{tag:"h2"},"Radio default"))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(I,null,r.a.createElement(q,null,"Choose a shipping speed"),r.a.createElement(D,null,r.a.createElement(M,null,r.a.createElement(x.a,{name:"radio-default-example",value:"1",label:"One-Day Shipping"})),r.a.createElement(M,null,r.a.createElement(x.a,{name:"radio-default-example",value:"2",label:"Two-Day Shipping"})))))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(k.a,{tag:"h2"},"Radio (stateful) with preselection."),r.a.createElement(k.a,null,"Composition approach"))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(I,null,r.a.createElement(q,null,"Choose a shipping speed"),r.a.createElement(D,null,r.a.createElement(M,null,r.a.createElement(x.a,{defaultChecked:!0,name:"radio-group-stateful-example",value:"1",label:"One-Day Shipping"})),r.a.createElement(M,null,r.a.createElement(x.a,{name:"radio-group-stateful-example",value:"2",label:"Two-Day Shipping"})))))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(k.a,{tag:"h2"},"Radio (stateless) with preselection."),r.a.createElement(k.a,null,"Composition approach"))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(I,null,r.a.createElement(q,null,"Choose a shipping speed"),r.a.createElement(D,null,r.a.createElement(M,null,r.a.createElement(x.a,{checked:"1"===m.selectedValue,label:"One-Day Shipping",name:"radio-group-stateless-preselection-example",onChange:w,value:"1"})),r.a.createElement(M,null,r.a.createElement(x.a,{checked:"2"===m.selectedValue,label:"Two-Day Shipping",name:"radio-group-stateless-preselection-example",onChange:w,value:"2"})))))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(k.a,{tag:"h2"},"Radio Group Control (legacy wrapper)"),r.a.createElement(k.a,null,"To create a custom wrapper around a radio group, see the RadioGroupControl component in the code base."))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(H,{value:y.selectedPizza,onChange:function(e){return R(Object(T.a)({},y,{selectedPizza:e.target.value}))},legend:"Select Pizza Crust"},r.a.createElement(D,null,y.pizzas.map((function(e,a){return r.a.createElement(M,{key:"legacy-radio-group-pizza-".concat(a)},r.a.createElement(x.a,{disabled:e.disabled,id:"legacy-radio-group-control-pizza-".concat(a),label:e.label,name:"legacy-radio-control-pizza-radios",value:e.value}))})))))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(k.a,{tag:"h2"},"Radio Group with validation"))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(I,{invalid:i},r.a.createElement(q,{"aria-describedby":"single-validation-error-message"},"Select Pizza Crust"),r.a.createElement(D,{"aria-label":"required"},r.a.createElement(M,null,r.a.createElement(x.a,{invalid:!j.selected&&null!==j.selected,label:"Regular",name:"radio-group-validation-example",onChange:L,ref:e,value:"Regular"})),r.a.createElement(M,null,r.a.createElement(x.a,{invalid:!j.selected&&null!==j.selected,label:"Deep Dish",name:"radio-group-validation-example",onChange:L,ref:a,value:"Deep Dish"})),r.a.createElement(M,null,r.a.createElement(x.a,{invalid:!j.selected&&null!==j.selected,label:"Thin Crust",name:"radio-group-validation-example",onChange:L,ref:n,value:"Thin Crust"}))),r.a.createElement(F,{id:"single-validation-error-message"},!0===i?r.a.createElement(o.Fragment,null,r.a.createElement(g.a,{name:"error",resolution:"tiny"}),"Error: Please select crust type."):"")),r.a.createElement(S.a,{onClick:function(){j.selected?c(!1):(N({selected:!1}),c(!0)),e.current.focus()}},"Submit (test validation)"))))},X=n(540),J=[n(541)],K=n(542),U="/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */\n\nimport React, { forwardRef, Fragment, useEffect, useRef, useState } from 'react';\nimport { bool, func, number, oneOfType, string } from 'prop-types';\nimport classnames from 'classnames';\nimport shortid from 'shortid';\n\nconst CSS_PREFIX = 'vds-radio';\nconst CSS_STATE = 'vds-state';\n\nconst Radio = forwardRef(({\n  className,\n  disabled,\n  id = shortid.generate(),\n  invalid,\n  label,\n  onBlur,\n  onChange,\n  onFocus,\n  ...remainingProps\n}, ref) => {\n  const [focused, setFocused] = useState();\n  const [check, setCheck] = useState(remainingProps.checked || remainingProps.defaultChecked);\n  const uniqueId = useRef(id);\n  const uid = uniqueId.current;\n\n  useEffect(() => {\n    if (typeof remainingProps.defaultChecked !== 'undefined') {\n      setCheck(remainingProps.defaultChecked);\n    }\n  }, [remainingProps.defaultChecked]);\n\n  useEffect(() => {\n    if (typeof remainingProps.checked !== 'undefined') {\n      setCheck(remainingProps.checked);\n    }\n  }, [remainingProps.checked]);\n\n  const handleChange = event => {\n    setCheck(event.target.checked);\n    if (typeof onChange === 'function') {\n      onChange(event);\n    }\n  };\n\n  const handleFocus = event => {\n    setFocused(true);\n    if (typeof onFocus === 'function') {\n      onFocus(event);\n    }\n  };\n\n  const handleBlur = event => {\n    setFocused(false);\n    if (typeof onBlur === 'function') {\n      onBlur(event);\n    }\n  };\n\n  return (\n    <Fragment>\n      <input\n        className={classnames(CSS_PREFIX, {\n          'focus-visible': Boolean(focused)\n        }, className)}\n        disabled={disabled}\n        id={uid}\n        onBlur={handleBlur}\n        onChange={handleChange}\n        onFocus={handleFocus}\n        type=\"radio\"\n        ref={ref}\n        {...remainingProps}\n      />\n      <label\n        className={classnames(\n          `${CSS_PREFIX}-label`,\n          {\n            [`${CSS_STATE}--checked`]: Boolean(check),\n            [`${CSS_STATE}--disabled`]: Boolean(disabled),\n            [`${CSS_STATE}--focus`]: Boolean(focused),\n            [`${CSS_STATE}--invalid`]: Boolean(invalid)\n          }\n        )}\n        htmlFor={uid}\n        onClick={e => e.stopPropagation()} // if not event fires 2x, one for radio and one for label\n        onKeyPress={e  => e.stopPropagation()} // if not key-press event fires 2x, one for checkbox and one for label\n      >\n        {label}\n      </label>\n    </Fragment>\n  );\n});\n\nRadio.propTypes = {\n  /**\n   * @ignore\n   */\n  className: string,\n\n  /**\n   *   If `true`, the radio will be disabled.\n   */\n  disabled: bool,\n\n  /**\n   * The id of the input element.\n   */\n  id: oneOfType([number, string]),\n\n  /**\n   * Invalid\n   */\n  invalid: bool,\n\n  /**\n   *   The label of the radio element.\n   */\n  label: string.isRequired,\n\n  /**\n   * Callback fired when the input element loses focus.\n   */\n  onBlur: func,\n\n  /**\n   * Callback fired when the input element value changes.\n   */\n  onChange: func,\n\n  /**\n   * Callback fired when the input element is focused on.\n   */\n  onFocus: func\n};\n\nRadio.displayName = 'Radio';\n\nexport default Radio;\n".replace("= memo(({","= React.forwardRef(({").replace("cloneElement(","React.cloneElement("),Y='/* eslint-disable react/prop-types */\n\nimport React, { Fragment, useState, useRef } from \'react\';\nimport ButtonText from \'../../button-text\';\nimport Col from \'../../col\';\nimport Grid from \'../../grid\';\nimport Icon from \'../../icon\';\nimport Radio from \'../../radio\';\nimport RadioErrorMessage from \'../../radio-error-message\';\nimport RadioGroup from \'../../radio-group\';\nimport RadioGroupControl from \'../../radio-group-control\';\nimport RadioGroupLegend from \'../../radio-group-legend\';\nimport RadioList from \'../../radio-list\';\nimport RadioListItem from \'../../radio-list-item\';\nimport Row from \'../../row\';\nimport Typography from \'../../typography\';\n\nconst RadioExample = () => {\n  const refOneValidation = useRef();\n  const refTwoValidation = useRef();\n  const refThreeValidation = useRef();\n  const [showError, setShowError] = useState(false);\n\n  const [stateOne, setStateOne] = useState({\n    selectedValue: \'1\'\n  });\n\n  const [stateThree, setStateThree] = useState({\n    pizzas: [\n      {\n        checked: false,\n        disabled: false,\n        id: 1,\n        label: \'Regular\',\n        value: \'regular\'\n      },\n      {\n        checked: false,\n        disabled: false,\n        id: 2,\n        label: \'Deep Dish\',\n        value: \'deep-dish\'\n      },\n      {\n        checked: false,\n        disabled: false,\n        id: 3,\n        label: \'Thin Crust\',\n        value: \'thin-crust\'\n      },\n      {\n        checked: false,\n        disabled: true,\n        id: 4,\n        label: \'Super Thin Crust\',\n        value: \'super-thin-crust\'\n      }\n    ],\n    selectedPizza: \'regular\'\n  });\n\n  const [stateFour, setStateFour] = useState({\n    selected: null\n  });\n\n  const handleChangeOne = e => setStateOne({ selectedValue: e.target.value });\n  const handleChangeFour = e => setStateFour({ selected: e.target.value });\n  const handleSubmitFour = () => {\n    if (stateFour.selected) {\n      setShowError(false);\n    } else {\n      setStateFour({\n        selected: false\n      });\n      setShowError(true);\n    }\n    refOneValidation.current.focus();\n  };\n\n  return (\n    <Grid>\n      <Row>\n        <Col>\n          <Typography tag="h2">Radio default</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <RadioGroup>\n            <RadioGroupLegend>Choose a shipping speed</RadioGroupLegend>\n            <RadioList>\n              <RadioListItem>\n                <Radio\n                  name="radio-default-example"\n                  value="1"\n                  label="One-Day Shipping"\n                />\n              </RadioListItem>\n              <RadioListItem>\n                <Radio\n                  name="radio-default-example"\n                  value="2"\n                  label="Two-Day Shipping"\n                />\n              </RadioListItem>\n            </RadioList>\n          </RadioGroup>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Radio (stateful) with preselection.</Typography>\n\n          <Typography>Composition approach</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <RadioGroup>\n            <RadioGroupLegend>Choose a shipping speed</RadioGroupLegend>\n            <RadioList>\n              <RadioListItem>\n                <Radio\n                  defaultChecked\n                  name="radio-group-stateful-example"\n                  value="1"\n                  label="One-Day Shipping"\n                />\n              </RadioListItem>\n              <RadioListItem>\n                <Radio\n                  name="radio-group-stateful-example"\n                  value="2"\n                  label="Two-Day Shipping"\n                />\n              </RadioListItem>\n            </RadioList>\n          </RadioGroup>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Radio (stateless) with preselection.</Typography>\n\n          <Typography>Composition approach</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <RadioGroup>\n            <RadioGroupLegend>Choose a shipping speed</RadioGroupLegend>\n            <RadioList>\n              <RadioListItem>\n                <Radio\n                  checked={stateOne.selectedValue === \'1\'}\n                  label="One-Day Shipping"\n                  name="radio-group-stateless-preselection-example"\n                  onChange={handleChangeOne}\n                  value="1"\n                />\n              </RadioListItem>\n              <RadioListItem>\n                <Radio\n                  checked={stateOne.selectedValue === \'2\'}\n                  label="Two-Day Shipping"\n                  name="radio-group-stateless-preselection-example"\n                  onChange={handleChangeOne}\n                  value="2"\n                />\n              </RadioListItem>\n            </RadioList>\n          </RadioGroup>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Radio Group Control (legacy wrapper)</Typography>\n\n          <Typography>To create a custom wrapper around a radio group, see the RadioGroupControl component in the code base.</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <RadioGroupControl\n            value={stateThree.selectedPizza}\n            onChange={e => setStateThree({ ...stateThree, selectedPizza: e.target.value })}\n            legend="Select Pizza Crust"\n          >\n            <RadioList>\n              {\n                stateThree.pizzas.map((pizza, k) => (\n                  <RadioListItem key={`legacy-radio-group-pizza-${k}`}>\n                    <Radio\n                      disabled={pizza.disabled}\n                      id={`legacy-radio-group-control-pizza-${k}`}\n                      label={pizza.label}\n                      name="legacy-radio-control-pizza-radios"\n                      value={pizza.value}\n                    />\n                  </RadioListItem>\n                ))\n              }\n            </RadioList>\n          </RadioGroupControl>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <Typography tag="h2">Radio Group with validation</Typography>\n        </Col>\n      </Row>\n      <Row>\n        <Col>\n          <RadioGroup invalid={showError}>\n            <RadioGroupLegend aria-describedby="single-validation-error-message">Select Pizza Crust</RadioGroupLegend>\n            <RadioList aria-label="required">\n              <RadioListItem>\n                <Radio\n                  invalid={!stateFour.selected && stateFour.selected !== null}\n                  label="Regular"\n                  name="radio-group-validation-example"\n                  onChange={handleChangeFour}\n                  ref={refOneValidation}\n                  value="Regular"\n                />\n              </RadioListItem>\n              <RadioListItem>\n                <Radio\n                  invalid={!stateFour.selected && stateFour.selected !== null}\n                  label="Deep Dish"\n                  name="radio-group-validation-example"\n                  onChange={handleChangeFour}\n                  ref={refTwoValidation}\n                  value="Deep Dish"\n                />\n              </RadioListItem>\n              <RadioListItem>\n                <Radio\n                  invalid={!stateFour.selected && stateFour.selected !== null}\n                  label="Thin Crust"\n                  name="radio-group-validation-example"\n                  onChange={handleChangeFour}\n                  ref={refThreeValidation}\n                  value="Thin Crust"\n                />\n              </RadioListItem>\n            </RadioList>\n            <RadioErrorMessage id="single-validation-error-message">\n            {\n              showError === true\n                ? <Fragment><Icon name="error" resolution="tiny" />Error: Please select crust type.</Fragment>\n                : \'\'\n            }\n            </RadioErrorMessage>\n          </RadioGroup>\n          <ButtonText\n            onClick={handleSubmitFour}\n          >\n            Submit (test validation)\n          </ButtonText>\n        </Col>\n      </Row>\n    </Grid>\n  );\n};\n\nexport default RadioExample;\n'.replace(/'..\/..\//g,"'@visa/vds-react/"),Q=function(e){var a=Object(l.a)({},e),n=Object(o.useState)({}),s=Object(t.a)(n,2),c=s[0],T=s[1];return Object(o.useEffect)((function(){try{T(K.parse(U))}catch(e){console.log("\n        React-docgen could not parse props for Radio\n        check for fix here https://github.com/reactjs/react-docgen/issues/342")}}),[]),r.a.createElement(b.a,{siblingOfStickyFooter:!0},r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(k.a,{tag:"h1"},"Radio"))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(R.a,null,r.a.createElement(y.a,{tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react-931","/components/radio"),activeClassName:"vds-state--selected"})},r.a.createElement(g.a,{name:"log",resolution:"low"}),"Radio Example"),r.a.createElement(y.a,{tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react-931","/components/radio/code"),activeClassName:"vds-state--selected"})},r.a.createElement(g.a,{name:"code-fork-code-alt",resolution:"low"}),"JSX of Example"),r.a.createElement(y.a,{tag:r.a.createElement(p.c,{exact:!0,to:"".concat("/vds-react-931","/components/radio/html"),activeClassName:"vds-state--selected"})},r.a.createElement(g.a,{name:"code-fork-code-alt",resolution:"low"}),"HTML of Example")))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement("div",{className:d()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-931","/components/radio"),"vds-state--show":a.match.path==="".concat("/vds-react-931","/components/radio")})},r.a.createElement(W,a)),r.a.createElement("div",{className:d()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-931","/components/radio/code"),"vds-state--show":a.match.path==="".concat("/vds-react-931","/components/radio/code")})},r.a.createElement(u.a,Object.assign({},u.b,{theme:m.a,code:Y,language:"jsx"}),(function(e){var a=e.className,n=e.style,t=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return r.a.createElement("div",Object.assign({},l({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))})))}))),r.a.createElement("div",{className:d()({"vds-state--hidden":a.match.path!=="".concat("/vds-react-931","/components/radio/html"),"vds-state--show":a.match.path==="".concat("/vds-react-931","/components/radio/html")})},r.a.createElement(u.a,Object.assign({},u.b,{theme:m.a,code:X.format(i.a.renderToStaticMarkup(r.a.createElement(W,a)),{css:"ignore",parser:"html",plugins:J,printWidth:120}),language:"html"}),(function(e){var a=e.className,n=e.style,t=e.tokens,l=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},t.map((function(e,a){return r.a.createElement("div",Object.assign({},l({key:a,line:e}),{key:a}),r.a.createElement("span",{style:{display:"inline-block",opacity:"0.3",userSelect:"none",width:"2em"}},a+1),e.map((function(e,a){return r.a.createElement("span",Object.assign({},o({key:a,token:e}),{key:a}))})))})))}))))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(f.a,{className:d()(["components"]),dividerLines:!0,size:"compact"},r.a.createElement(E.a,{tag:"caption"},"Props"),r.a.createElement(N.a,null,r.a.createElement(w.a,{className:"vds-tr"},r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Prop"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Type"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Default"),r.a.createElement(j.a,{"aria-sort":"none",role:"columnheader",scope:"col"},"Description"))),r.a.createElement(O.a,null,c.props&&Object.entries(c.props).filter((function(e){return"@ignore"!==e[1].description})).map((function(e,a){return r.a.createElement(w.a,{className:"vds-tr",key:a},r.a.createElement(C.a,{className:"vds-td"},e[0]," ",e[1].required?r.a.createElement("strong",null," - required"):""),r.a.createElement(C.a,{className:"vds-td"},r.a.createElement("strong",null,e[1].type.name),e[1].type.value&&e[1].type.value.length?r.a.createElement("small",{style:{color:"#1a1f71"}},r.a.createElement("br",null),Array.isArray(e[1].type.value)?e[1].type.value.map((function(e){return e.value||e.name})).join(", "):"string"===typeof e[1].type.value?e[1].type.value:void 0):""),r.a.createElement(C.a,{className:"vds-td"},e[1].defaultValue?e[1].defaultValue.value:""),r.a.createElement(C.a,{className:"vds-td"},e[1].description))})))))))};Q.displayName="RadioExample";a.default=Q},527:function(e,a,n){"use strict";var t=n(5),l=n(0),o=n.n(l),r=n(3),s=n(2),i=n.n(s),c=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=e.tag,s=Object(t.a)(e,["children","className","tag"]);return o.a.createElement(r,Object.assign({className:i()("vds-screen-reader",l),ref:a},s),n)}));c.propTypes={children:r.node,className:r.string,tag:r.elementType},c.defaultProps={tag:"span"},c.displayName="ScreenReader",a.a=c},528:function(e,a,n){"use strict";var t=n(4),l=n(5),o=n(0),r=n.n(o),s=n(3),i=n(2),c=n.n(i),d=Object(o.forwardRef)((function(e,a){var n,o=e.children,s=e.className,i=e.customizableColumns,d=e.dividerLines,u=e.keyValuePairs,m=e.reveal,p=e.revealFirstColumn,h=e.revealLastColumn,f=e.rowSelection,g=e.size,b=e.stickyHeader,v=Object(l.a)(e,["children","className","customizableColumns","dividerLines","keyValuePairs","reveal","revealFirstColumn","revealLastColumn","rowSelection","size","stickyHeader"]);return r.a.createElement("table",Object.assign({},v,{className:c()("vds-data-table",(n={},Object(t.a)(n,"".concat("vds-state","--customizable-columns"),Boolean(i)),Object(t.a)(n,"".concat("vds-state","--divider-lines"),Boolean(d)),Object(t.a)(n,"".concat("vds-state","--key-value-pairs"),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--").concat(g),Boolean(g)),Object(t.a)(n,"".concat("vds-state","--reveal"),Boolean(m)),Object(t.a)(n,"".concat("vds-state","--reveal-first-column"),Boolean(p)),Object(t.a)(n,"".concat("vds-state","--reveal-last-column"),Boolean(h)),Object(t.a)(n,"".concat("vds-state","--").concat(f),Boolean(f)),Object(t.a)(n,"".concat("vds-state","--sticky-header"),Boolean(b)),n),s),ref:a}),o)}));d.propTypes={children:s.node,className:s.string,columns:Object(s.arrayOf)(Object(s.shape)({})),customizableColumns:s.bool,data:Object(s.arrayOf)(Object(s.shape)({})),dividerLines:s.bool,keyValuePairs:s.bool,reveal:s.bool,revealFirstColumn:s.bool,revealLastColumn:s.bool,rowSelection:Object(s.oneOf)(["multi-select","single-select"]),size:Object(s.oneOf)(["compact"]),stickyHeader:s.bool},d.displayName="DataTable",a.a=d},529:function(e,a,n){"use strict";var t=n(5),l=n(0),o=n.n(l),r=n(3),s=n(2),i=n.n(s),c=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return o.a.createElement("tbody",Object.assign({className:i()("vds-tbody",l),ref:a},r),n)}));c.propTypes={children:r.node,className:r.string},c.displayName="Tbody",a.a=c},530:function(e,a,n){"use strict";var t=n(4),l=n(5),o=n(0),r=n.n(o),s=n(3),i=n(2),c=n.n(i),d=Object(o.forwardRef)((function(e,a){var n=e.children,o=e.className,s=e.textAlign,i=Object(l.a)(e,["children","className","textAlign"]);return r.a.createElement("td",Object.assign({className:c()("vds-td",Object(t.a)({},"vds-text--".concat(s),Boolean(s)),o),ref:a},i),n)}));d.propTypes={children:s.node,className:s.string,textAlign:Object(s.oneOf)(["center","left","right"])},d.displayName="Td",a.a=d},531:function(e,a,n){"use strict";var t=n(5),l=n(0),o=n.n(l),r=n(3),s=n(2),i=n.n(s),c=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return o.a.createElement("th",Object.assign({className:i()("vds-th",l),ref:a},r),n)}));c.propTypes={children:r.node,className:r.string},c.displayName="Th",a.a=c},532:function(e,a,n){"use strict";var t=n(5),l=n(0),o=n.n(l),r=n(3),s=n(2),i=n.n(s),c=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return o.a.createElement("thead",Object.assign({className:i()("vds-thead",l),ref:a},r),n)}));c.propTypes={children:r.node,className:r.string},c.displayName="Thead",a.a=c},533:function(e,a,n){"use strict";var t=n(5),l=n(0),o=n.n(l),r=n(3),s=n(2),i=n.n(s),c=Object(l.forwardRef)((function(e,a){var n=e.children,l=e.className,r=Object(t.a)(e,["children","className"]);return o.a.createElement("tr",Object.assign({className:i()("vds-tr",l),ref:a},r),n)}));c.propTypes={children:r.node,className:r.string},c.displayName="Tr",a.a=c},534:function(e,a,n){"use strict";var t,l,o,r=n(551),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function i(){o=!1}function c(e){if(e){if(e!==t){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var a=e.split("").filter((function(e,a,n){return a!==n.lastIndexOf(e)}));if(a.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+a.join(", "));t=e,i()}}else t!==s&&(t=s,i())}function d(){return o||(o=function(){t||c(s);for(var e,a=t.split(""),n=[],l=r.nextValue();a.length>0;)l=r.nextValue(),e=Math.floor(l*a.length),n.push(a.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return t||s},characters:function(e){return c(e),t},seed:function(e){r.seed(e),l!==e&&(i(),l=e)},lookup:function(e){return d()[e]},shuffled:d}},538:function(e,a,n){"use strict";var t=n(5),l=n(0),o=n.n(l),r=n(2),s=n.n(r),i=function(e){var a=e.children,n=e.className,l=Object(t.a)(e,["children","className"]);return o.a.createElement("span",Object.assign({className:s()("vds-btn-label",n)},l),a)};i.displayName="ButtonLabel",a.a=i},545:function(e,a,n){"use strict";e.exports=n(550)},546:function(e,a){},547:function(e,a){},550:function(e,a,n){"use strict";var t=n(534),l=n(552),o=n(556),r=n(557)||0;function s(){return l(r)}e.exports=s,e.exports.generate=s,e.exports.seed=function(a){return t.seed(a),e.exports},e.exports.worker=function(a){return r=a,e.exports},e.exports.characters=function(e){return void 0!==e&&t.characters(e),t.shuffled()},e.exports.isValid=o},551:function(e,a,n){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},552:function(e,a,n){"use strict";var t,l,o=n(553);n(534);e.exports=function(e){var a="",n=Math.floor(.001*(Date.now()-1567752802062));return n===l?t++:(t=0,l=n),a+=o(7),a+=o(e),t>0&&(a+=o(t)),a+=o(n)}},553:function(e,a,n){"use strict";var t=n(534),l=n(554),o=n(555);e.exports=function(e){for(var a,n=0,r="";!a;)r+=o(l,t.get(),1),a=e<Math.pow(16,n+1),n++;return r}},554:function(e,a,n){"use strict";var t,l="object"===typeof window&&(window.crypto||window.msCrypto);t=l&&l.getRandomValues?function(e){return l.getRandomValues(new Uint8Array(e))}:function(e){for(var a=[],n=0;n<e;n++)a.push(Math.floor(256*Math.random()));return a},e.exports=t},555:function(e,a){e.exports=function(e,a,n){for(var t=(2<<Math.log(a.length-1)/Math.LN2)-1,l=-~(1.6*t*n/a.length),o="";;)for(var r=e(l),s=l;s--;)if((o+=a[r[s]&t]||"").length===+n)return o}},556:function(e,a,n){"use strict";var t=n(534);e.exports=function(e){return!(!e||"string"!==typeof e||e.length<6)&&!new RegExp("[^"+t.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},557:function(e,a,n){"use strict";e.exports=0},560:function(e,a,n){"use strict";var t=n(4),l=n(5),o=n(0),r=n.n(o),s=n(3),i=n(2),c=n.n(i),d=n(538),u=Object(o.forwardRef)((function(e,a){var n,o=e.active,s=e.children,i=e.className,u=e.colorScheme,m=e.disabled,p=e.flippable,h=e.isFullWidth,f=e.role,g=e.tabIndex,b=e.tag,v=e.type,E=Object(l.a)(e,["active","children","className","colorScheme","disabled","flippable","isFullWidth","role","tabIndex","tag","type"]);return r.a.createElement(b,Object.assign({className:c()((n={},Object(t.a)(n,"".concat("vds-btn-text"),!1===Boolean(u)),Object(t.a)(n,"".concat("vds-state","--active"),Boolean(o)),Object(t.a)(n,"".concat("vds-btn-text","--").concat(u),Boolean(u)),Object(t.a)(n,"".concat("vds-state","--flippable"),Boolean(p)),Object(t.a)(n,"".concat("vds-btn-text","--fullwidth"),Boolean(h)),Object(t.a)(n,"".concat("vds-state","--disabled"),Boolean(m)),n),i),disabled:m,role:"button"===b?void 0:f,tabIndex:["span","div"].includes(b)?g:void 0,type:"button"===b?v:void 0,ref:a},E),r.a.createElement(d.a,null,s))}));u.propTypes={active:s.bool,children:s.node,className:s.string,colorScheme:Object(s.oneOf)(["primary","secondary","tertiary"]),disabled:s.bool,flippable:s.bool,isFullWidth:s.bool,role:s.string,tabIndex:Object(s.oneOfType)([s.number,s.string]),tag:Object(s.oneOf)(["a","button","div","span"]),type:s.string},u.defaultProps={role:"button",tabIndex:0,tag:"button",type:"button"},u.displayName="ButtonText",a.a=u},688:function(e,a,n){"use strict";var t=n(4),l=n(65),o=n(5),r=n(0),s=n.n(r),i=n(2),c=n.n(i),d=n(545),u=n.n(d),m=Object(r.forwardRef)((function(e,a){var n,i=e.className,d=e.disabled,m=e.id,p=void 0===m?u.a.generate():m,h=e.invalid,f=e.label,g=e.onBlur,b=e.onChange,v=e.onFocus,E=Object(o.a)(e,["className","disabled","id","invalid","label","onBlur","onChange","onFocus"]),y=Object(r.useState)(),R=Object(l.a)(y,2),O=R[0],C=R[1],j=Object(r.useState)(E.checked||E.defaultChecked),N=Object(l.a)(j,2),w=N[0],k=N[1],T=Object(r.useRef)(p).current;Object(r.useEffect)((function(){"undefined"!==typeof E.defaultChecked&&k(E.defaultChecked)}),[E.defaultChecked]),Object(r.useEffect)((function(){"undefined"!==typeof E.checked&&k(E.checked)}),[E.checked]);return s.a.createElement(r.Fragment,null,s.a.createElement("input",Object.assign({className:c()("vds-radio",{"focus-visible":Boolean(O)},i),disabled:d,id:T,onBlur:function(e){C(!1),"function"===typeof g&&g(e)},onChange:function(e){k(e.target.checked),"function"===typeof b&&b(e)},onFocus:function(e){C(!0),"function"===typeof v&&v(e)},type:"radio",ref:a},E)),s.a.createElement("label",{className:c()("".concat("vds-radio","-label"),(n={},Object(t.a)(n,"".concat("vds-state","--checked"),Boolean(w)),Object(t.a)(n,"".concat("vds-state","--disabled"),Boolean(d)),Object(t.a)(n,"".concat("vds-state","--focus"),Boolean(O)),Object(t.a)(n,"".concat("vds-state","--invalid"),Boolean(h)),n)),htmlFor:T,onClick:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()}},f))}));m.displayName="Radio",a.a=m}}]);
//# sourceMappingURL=23.0d7415a1.chunk.js.map